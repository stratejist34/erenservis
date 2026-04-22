#!/usr/bin/env node
// Regresyon kilidi: /blog ve /rehber namespace'lerinde aynı slug'ın iki yerde birden bulunmasını engeller.
// /blog/X ve /rehber/X aynı anda var ise build fail eder.
// data/rehber-posts.ts registry'sinin, app/rehber/* klasör seti ile eşleştiğini de doğrular.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function listFolderSlugs(dir) {
  try {
    return readdirSync(dir)
      .filter((name) => {
        if (name.startsWith('[') || name.startsWith('.')) return false;
        const full = join(dir, name);
        try {
          return statSync(full).isDirectory();
        } catch {
          return false;
        }
      });
  } catch {
    return [];
  }
}

const blogSlugs = new Set(listFolderSlugs(join(ROOT, 'app', 'blog')));
const rehberSlugs = new Set(listFolderSlugs(join(ROOT, 'app', 'rehber')));

// 1. Cross-namespace duplicate kontrolü
const duplicates = [...blogSlugs].filter((slug) => rehberSlugs.has(slug));
if (duplicates.length > 0) {
  console.error('\n❌ DUPLICATE NAMESPACE SLUG TESPİT EDİLDİ:\n');
  for (const slug of duplicates) {
    console.error(`   /blog/${slug}/ ve /rehber/${slug}/ aynı anda var.`);
  }
  console.error(
    '\n   Kural: Aynı slug hem /blog hem /rehber altında olamaz. Birini silin + next.config.ts\'e 301 ekleyin.\n',
  );
  process.exit(1);
}

// 2. REHBER_POSTS registry ↔ app/rehber/* eşleşmesi
const rehberPostsPath = join(ROOT, 'data', 'rehber-posts.ts');
const rehberPostsContent = readFileSync(rehberPostsPath, 'utf8');
const registrySlugs = new Set(
  [...rehberPostsContent.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]),
);

const missingInRegistry = [...rehberSlugs].filter((slug) => !registrySlugs.has(slug));
if (missingInRegistry.length > 0) {
  console.error('\n❌ REHBER_POSTS REGISTRY EKSİK:\n');
  for (const slug of missingInRegistry) {
    console.error(`   app/rehber/${slug}/ var ama data/rehber-posts.ts içinde entry yok.`);
  }
  console.error('\n   Kural: Her /rehber/X klasörü REHBER_POSTS içinde listelenmeli.\n');
  process.exit(1);
}

const extraInRegistry = [...registrySlugs].filter((slug) => !rehberSlugs.has(slug));
if (extraInRegistry.length > 0) {
  console.error('\n❌ REHBER_POSTS REGISTRY ARTIK ENTRY:\n');
  for (const slug of extraInRegistry) {
    console.error(`   data/rehber-posts.ts içinde '${slug}' var ama app/rehber/${slug}/ yok.`);
  }
  console.error('\n   Kural: REHBER_POSTS içindeki her entry\'nin klasörü mevcut olmalı.\n');
  process.exit(1);
}

console.log(
  `✓ namespace check: ${blogSlugs.size} /blog + ${rehberSlugs.size} /rehber, duplicate yok, registry eşleşiyor.`,
);
