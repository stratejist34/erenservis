#!/usr/bin/env node
// Data integrity kilidi: brands.ts ve transmissions.ts arası referans bütünlüğü.
// - brands.ts'teki her familyId, TRANSMISSIONS içinde var mı?
// - FAMILY_TO_TIPLERI_SLUG'daki her key TRANSMISSIONS içinde var mı?
// - FAMILY_TO_TIPLERI_SLUG'daki her value /sanziman-tipleri/ altında slug olarak var mı?
//
// Runtime'da çalışmaz — sadece build-time regex parse. TS compiler değil.

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(ROOT, rel), 'utf8');

const errors = [];

// ─── 1. TRANSMISSIONS id kümesi ────────────────────────────────
const transmissionsSrc = read('lib/transmissions.ts');

// TRANSMISSIONS: Record<string, TransmissionFamily> = { 'dsg-dq200': { ... }, ... }
// Sadece TRANSMISSIONS bloğundaki üst-seviye key'leri yakalamak için önce bloğu izole et.
const transBlockMatch = transmissionsSrc.match(
  /export const TRANSMISSIONS[^=]*=\s*\{([\s\S]*?)\n\};/,
);
if (!transBlockMatch) {
  errors.push('TRANSMISSIONS bloğu bulunamadı (lib/transmissions.ts).');
}
const transBlock = transBlockMatch?.[1] ?? '';
// Üst seviye key: satır başı opsiyonel whitespace, ardından 'id': {
const transmissionIds = new Set(
  [...transBlock.matchAll(/^\s{2}'([a-z0-9-]+)':\s*\{/gm)].map((m) => m[1]),
);

if (transmissionIds.size === 0 && !errors.length) {
  errors.push('TRANSMISSIONS içinde hiç familyId bulunamadı — regex bozulmuş olabilir.');
}

// ─── 2. FAMILY_TO_TIPLERI_SLUG parse ──────────────────────────
const familySlugMatch = transmissionsSrc.match(
  /FAMILY_TO_TIPLERI_SLUG[^=]*=\s*\{([\s\S]*?)\n\};/,
);
const familySlugBlock = familySlugMatch?.[1] ?? '';
const familyToSlug = new Map(
  [...familySlugBlock.matchAll(/'([a-z0-9-]+)':\s*'([a-z0-9-]+)'/g)].map(
    (m) => [m[1], m[2]],
  ),
);

// FAMILY_TO_TIPLERI_SLUG key'leri TRANSMISSIONS'ta var mı?
for (const key of familyToSlug.keys()) {
  if (!transmissionIds.has(key)) {
    errors.push(
      `FAMILY_TO_TIPLERI_SLUG key "${key}" TRANSMISSIONS içinde tanımsız.`,
    );
  }
}

// ─── 3. sanziman.ts slug'ları ─────────────────────────────────
const sanzimanSrc = read('lib/sanziman.ts');
// transmissions array'inde 'slug: "xxx"' yakala
const sanzimanSlugs = new Set(
  [...sanzimanSrc.matchAll(/slug:\s*['"]([a-z0-9-]+)['"]/g)].map((m) => m[1]),
);

// FAMILY_TO_TIPLERI_SLUG value'ları sanziman.ts'te slug olarak var mı?
for (const [familyId, slug] of familyToSlug) {
  if (!sanzimanSlugs.has(slug)) {
    errors.push(
      `FAMILY_TO_TIPLERI_SLUG: "${familyId}" → "${slug}" ama /sanziman-tipleri/${slug}/ lib/sanziman.ts'te yok.`,
    );
  }
}

// ─── 4. brands.ts familyId referansları ───────────────────────
const brandsSrc = read('lib/brands.ts');
const brandFamilyIds = [
  ...brandsSrc.matchAll(/familyId:\s*['"]([a-z0-9-]+)['"]/g),
].map((m) => m[1]);

for (const id of brandFamilyIds) {
  if (!transmissionIds.has(id)) {
    errors.push(
      `brands.ts: familyId "${id}" TRANSMISSIONS içinde yok (orphan referans).`,
    );
  }
}

// ─── 4b. brands-lite.ts ↔ brands.ts + transmissions.ts senkron ────
// brands-lite.ts, Header.tsx gibi 'use client' dosyalarına düşen minimal
// metadata. brands.ts ile slug/tier, transmissions.ts ile displayName
// eşleşmesi buradan doğrulanır.
const brandsLiteSrc = read('lib/brands-lite.ts');
const liteEntries = [
  ...brandsLiteSrc.matchAll(
    /slug:\s*'([a-z0-9-]+)'[^}]*?tier:\s*([123])[^}]*?primaryTransmissionLabel:\s*'([^']+)'/g,
  ),
].map((m) => ({ slug: m[1], tier: Number(m[2]), label: m[3] }));

// brands.ts'teki her brand için: slug, tier, primary familyId
const brandBlocks = [
  ...brandsSrc.matchAll(
    /\{\s*\n\s*slug:\s*'([a-z0-9-]+)',[\s\S]*?tier:\s*([123]),/g,
  ),
];
const brandsMeta = new Map(
  brandBlocks.map((m) => [m[1], { tier: Number(m[2]) }]),
);
// Her brand'in primary transmission familyId'sini bul
const primaryFamilyBySlug = new Map();
const brandSegRegex =
  /slug:\s*'([a-z0-9-]+)',[\s\S]*?transmissions:\s*\[([\s\S]*?)\],/g;
for (const seg of brandsSrc.matchAll(brandSegRegex)) {
  const slug = seg[1];
  const primaryMatch = seg[2].match(
    /familyId:\s*'([a-z0-9-]+)',\s*isPrimary:\s*true/,
  );
  if (primaryMatch) primaryFamilyBySlug.set(slug, primaryMatch[1]);
}

// transmissions.ts'te her id için displayName
const transDisplayNames = new Map(
  [
    ...transmissionsSrc.matchAll(
      /id:\s*'([a-z0-9-]+)',\s*\n\s*displayName:\s*'([^']+)'/g,
    ),
  ].map((m) => [m[1], m[2]]),
);

for (const entry of liteEntries) {
  const meta = brandsMeta.get(entry.slug);
  if (!meta) {
    errors.push(
      `brands-lite.ts: slug "${entry.slug}" brands.ts'te yok.`,
    );
    continue;
  }
  if (meta.tier !== entry.tier) {
    errors.push(
      `brands-lite.ts: slug "${entry.slug}" tier=${entry.tier} ama brands.ts'te tier=${meta.tier}.`,
    );
  }
  const primaryId = primaryFamilyBySlug.get(entry.slug);
  const expectedLabel = primaryId ? transDisplayNames.get(primaryId) : null;
  if (expectedLabel && expectedLabel !== entry.label) {
    errors.push(
      `brands-lite.ts: slug "${entry.slug}" primaryTransmissionLabel="${entry.label}" ama transmissions.ts displayName="${expectedLabel}".`,
    );
  }
}

// brands.ts'teki her slug brands-lite'ta var mı?
const liteSlugs = new Set(liteEntries.map((e) => e.slug));
for (const slug of brandsMeta.keys()) {
  if (!liteSlugs.has(slug)) {
    errors.push(`brands-lite.ts: slug "${slug}" eksik (brands.ts'te mevcut).`);
  }
}

// ─── 5. Orphan TRANSMISSIONS (hiç brand tarafından referans edilmeyen) ─
// Uyarı niteliğinde — fail değil
const brandFamilySet = new Set(brandFamilyIds);
const orphanTransmissions = [...transmissionIds].filter(
  (id) => !brandFamilySet.has(id),
);

// ─── Rapor ────────────────────────────────────────────────────
if (errors.length > 0) {
  console.error('\n❌ DATA INTEGRITY HATASI:\n');
  for (const e of errors) console.error(`   • ${e}`);
  console.error('');
  process.exit(1);
}

console.log(
  `✓ data integrity: ${transmissionIds.size} TRANSMISSIONS, ${familyToSlug.size} family→slug map, ${brandFamilyIds.length} brand ref — hepsi bağlı.`,
);

if (orphanTransmissions.length > 0) {
  console.log(
    `  ℹ️  ${orphanTransmissions.length} TRANSMISSIONS hiçbir marka tarafından referans edilmiyor (ör. ${orphanTransmissions.slice(0, 3).join(', ')}).`,
  );
}
