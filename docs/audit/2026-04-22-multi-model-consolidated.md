# Çoklu Model Konsolide Analiz Raporu
**Tarih:** 2026-04-22
**Kapsam:** Gemini 3.1 Pro + Kimi Code + Sonnet 4.5 bulgularının harmanlanması
**Durum:** `d4ada3a` commit'i sonrası — önceki 7 adımlı Codex planı kapandı, 3 model bağımsız tarama yaptı

---

## 1. Yöntem

Üç model aynı kod tabanını farklı açılardan taradı:

| Model | Güçlü Yönü | Kaçırdığı |
|-------|-----------|-----------|
| **Gemini 3.1 Pro** | Mimari + data duplication + performans | Güvenlik detayı, memory leak |
| **Kimi Code** | Kritik runtime crash riskleri + yasal risk (730 gün) + CSS/Tailwind | Rate limit leak, webhook auth |
| **Sonnet 4.5** | Derinlemesine güvenlik + env var uyumsuzluğu + memory leak | — (en kapsamlı) |

**Sonnet 4.5'in genel skor puanı:** 6.8/10 — "Production-ready değil, kritik hatalar var."

---

## 2. Kesişim Tablosu — 3 Model Aynı Bulguyu Rapor Etti

Birden fazla model tarafından onaylanan bulgular öncelik listesinin başında.

| Bulgu | Gemini | Kimi | Sonnet | Durum |
|-------|:---:|:---:|:---:|:---:|
| Fontlar çok fazla / ağır | G3 ✅ | K12 ✅ | #4 ⚠️ | Kısmen kapandı (7→3), weight azaltılmadı |
| TypeScript `ignoreBuildErrors: true` | — | K2 | #1 | **Açık** |
| Contact rate limit kırılgan | — | K9 (timeout) | #1 (memory leak) | **Açık — memory leak** |
| `dangerouslySetInnerHTML` XSS | — | K8 | #5 | **Açık** |
| Input validation (Zod yok) | — | K9 | #10 | **Açık** |
| Hardcoded constants dağınık | — | K10 ✅ | #9 | Saat kapandı, telefon açık |

---

## 3. Tüm Açık Bulgular — Tek Matris

### P0 — Kritik / Yasal / Güvenlik

| # | Kaynak | Dosya | Sorun | Etki |
|---|--------|-------|-------|------|
| P0.1 | Kimi K6 | `app/hizmetler/page.tsx:116` | **"730 GÜN" garanti** ibaresi CLAUDE.md 6 ay kuralını ihlal ediyor | **Yasal yükümlülük** |
| P0.2 | Sonnet #1 | `app/api/contact/route.ts` | `rateLimitMap` cleanup interval yok → bellek sızıntısı | Server restart'a kadar şişer |
| P0.3 | Sonnet #2 | `app/api/contact/route.ts:48` | `GOOGLE_SHEETS_WEBHOOK_URL` okuyor, `.env.example` `CONTACT_WEBHOOK_URL` tanımlı | Prod'da webhook sessiz kopabilir |
| P0.4 | Sonnet #5 | `app/api/contact/route.ts` | `CONTACT_WEBHOOK_SECRET` env'de ama HMAC imzalaması hiç yapılmıyor | n8n/Zapier spoofing'e açık |
| P0.5 | Sonnet #4 | `app/api/contact/route.ts` | Phone regex `/^[0-9\s\-+()]{10,20}$/` → `"+()-"` veya pure space geçer | Spam/bozuk lead |
| P0.6 | Kimi K5 | `lib/sanziman.ts:457` | Renault EDC `serviceHref` DSG sayfasına bağlı | Yanlış servis sayfası |
| P0.7 | Kimi K4 | `components/FloatingCTA.tsx:9` | `HIDDEN_PATHS` trailing slash eksik (`trailingSlash: true` aktif) | CTA `/iletisim/`'de görünüyor |

### P1 — Yüksek Öncelikli / UX / Performance

| # | Kaynak | Dosya | Sorun | Etki |
|---|--------|-------|-------|------|
| P1.1 | Kimi K7 | 4 component | `SYMPTOMS.find(...)!` non-null assertion | URL manip. / race → crash |
| P1.2 | Kimi K8 + Sonnet #5 | `app/blog/[slug]/page.tsx:358` | `post.content` sanitize'siz `dangerouslySetInnerHTML` | XSS (posts.json güvenilirse düşük, ama WordPress import riski var) |
| P1.3 | Sonnet #10 | `app/api/contact/route.ts` | Runtime validation yok, `as` type assertion | Bozuk payload 500 | 
| P1.4 | Sonnet #4 | `app/layout.tsx:13-32` | 3 font × 19 weight = ~180KB | LCP penalty |
| P1.5 | Kimi K1 | `next.config.ts:17` | `contentDispositionType: 'attachment'` | Resim tıklanınca indirtiyor |
| P1.6 | Sonnet #1 + Kimi K2 | `next.config.ts:9` | `typescript.ignoreBuildErrors: true` | Prod'a kırık TS gidebilir |
| P1.7 | Gemini G1 | `app/hizmetler/page.tsx` | `DSG_FAULTS`, `AISIN_FAULTS` tekrarı (`lib/sanziman.ts`'de var) | Single source of truth ihlali |
| P1.8 | Gemini G2 | `components/Header.tsx` | "Araçlar" dropdown `onBlur` + `relatedTarget` riski | Mobilde menü kaybolabilir |
| P1.9 | Kimi K11 | `contexts/SymptomContext.tsx:22` | `useEffect` deps `[]` ama `searchParams` kullanılıyor | Effect tekrar çalışmaz |
| P1.10 | Sonnet | Honeypot | `name="company"` çok bariz | Gelişmiş botlar atlar |

### P2 — Orta Öncelik / Mimari / Tutarlılık

| # | Kaynak | Dosya | Sorun |
|---|--------|-------|-------|
| P2.1 | Kimi K14 | `components/BlogPreview.tsx` | Rehber linklerinde slash tutarsız (biri 308 redirect) |
| P2.2 | Kimi K15 | `components/interactive/MapWidget.tsx:9` | `border-content-border` Tailwind v4'te tanımsız class |
| P2.3 | Kimi K13 | `app/globals.css:367` | `--status-info-label` CSS var tanımsız |
| P2.4 | Gemini G6 | `components/Header.tsx` | Aktif link belirteci yok (`usePathname`) |
| P2.5 | Gemini G7 | `next-sitemap.config.js` | App Router native `app/sitemap.ts` / `app/robots.ts` kullanılmıyor |
| P2.6 | Sonnet #6 | `app/globals.css` | `.hero-item-N` gibi kullanılmayan selector'lar |
| P2.7 | Sonnet #7 | API route | CSRF token yok |
| P2.8 | Sonnet #8 | `app/api/contact/route.ts:67` | Error mesajları detay sızıyor |
| P2.9 | Sonnet #12 | `app/` | `loading.tsx` yok |
| P2.10 | Sonnet #11 | components | Component-level error boundary yok |

### P3 — Düşük Öncelik / Bakım

| # | Kaynak | Dosya | Sorun |
|---|--------|-------|-------|
| P3.1 | Sonnet | `lib/sanziman.ts:482` | Typo "kampanyası uygulamıştır" → "uygulamış" |
| P3.2 | Sonnet | `lib/sanziman-faq.ts:623, 646, 694` | "banyosu"/"banyolu"/"banyosunda" tutarsız |
| P3.3 | Sonnet | `lib/transmissions.ts:92` | "banyosunda" tipo |
| P3.4 | Sonnet | `lib/brands.ts:119` | "Company" path remnant |
| P3.5 | Sonnet | README | Generic create-next-app şablonu |
| P3.6 | Sonnet | `next.config.ts` | CPU sayısı hardcoded (4) |
| P3.7 | Sonnet | `tools/` | 19 `console.log` (tools klasörü — prod'a gitmiyor aslında) |
| P3.8 | Gemini G9 | `components/Header.tsx` | Logo `sizes` prop optimize değil |

---

## 4. "İki Elmas" — Sadece Tek Model Yakaladı, Önemli

Diğerlerinin tamamen kaçırdığı ama kritik:

| Bulgu | Tek Yakalayan | Neden Önemli |
|-------|---------------|--------------|
| **"730 GÜN" yasal ihlal** | Kimi K6 | CLAUDE.md'nin en sert kuralı |
| **rateLimitMap memory leak** | Sonnet #1 | Long-running server'ı öldürür |
| **Webhook HMAC secret kullanılmıyor** | Sonnet #5 | Webhook spoofing'e açık |
| **Env var name mismatch** | Sonnet #2 | Prod'da sessiz lead kaybı |
| **Non-null assertion crash** | Kimi K7 | URL manipülasyon → 500 |
| **Renault EDC yanlış link** | Kimi K5 | Conversion kaybı |
| **Data duplication hizmetler** | Gemini G1 | Content drift |

---

## 5. Önerilen Fix Sprint'i (Sprint C)

### Adım 1 — Yasal + Güvenlik (1 saat)
- [ ] P0.1 `app/hizmetler/page.tsx` "730 GÜN" → "6 AY GARANTİ"
- [ ] P0.6 Renault EDC `serviceHref` düzelt
- [ ] P0.7 FloatingCTA `HIDDEN_PATHS` slash'lı

### Adım 2 — Contact API Sertleştirme (1.5 saat)
- [ ] P0.2 `rateLimitMap` cleanup `setInterval` ekle
- [ ] P0.3 Env var: `GOOGLE_SHEETS_WEBHOOK_URL` → `CONTACT_WEBHOOK_URL` (veya .env.example'ı ayarla, tek tarafı seç)
- [ ] P0.4 HMAC SHA256 imza ekle — `CONTACT_WEBHOOK_SECRET` ile
- [ ] P0.5 Phone regex sıkılaştır: `/^(\+90|0)?5\d{9}$/` (boşluklar strip edildikten sonra)
- [ ] P1.3 Zod ekle — ContactSchema
- [ ] P1.10 Honeypot field adı: `company` → `website`

### Adım 3 — Runtime Güvenliği (30 dk)
- [ ] P1.1 4 component'te `SYMPTOMS.find(...)!` → `?? SYMPTOMS[0]` fallback
- [ ] P1.9 `SymptomContext` useEffect deps `[searchParams]`

### Adım 4 — Performance + Config (30 dk)
- [ ] P1.4 Font weight azaltma: Geist 400/600, Saira 400/600/700, JBMono 400/500
- [ ] P1.5 `contentDispositionType: 'inline'` veya kaldır
- [ ] P1.6 `ignoreBuildErrors: false` + `tsc --noEmit` temiz olduğunu doğrula

### Adım 5 — İçerik ve Typo (15 dk)
- [ ] P3.1–P3.4 Typo fix 6 dosyada

### Kapsam Dışı (Sprint D)
- P1.2 blog sanitize (posts.json güvenilirliği ayrı inceleme)
- P1.7 hizmetler data unification
- P1.8 Header click-outside hook
- P2.1–P2.10 UX/mimari iyileştirmeler
- CSRF, Sentry, loading.tsx, error boundary — ayrı sprint

---

## 6. Değerlendirme — Model Güçleri

**Gemini 3.1 Pro** stratejik düşündü: veri tekrarı, aktif link, native sitemap — hepsi mimari sağlık göstergeleri.

**Kimi Code** surgical çalıştı: 15 spesifik kusuru hat numarasıyla işaretledi. En büyük katkısı K6 — yasal risk.

**Sonnet 4.5** derinlere indi: `d4ada3a` commit'inde yeni yazılan kodun 5 zayıf noktasını bulup çıkardı (memory leak, env mismatch, HMAC eksiği, regex permissive, honeypot ismi). 3 modelin en titizi.

**Claude Opus 4.7 (ben):** 7 adımlı Codex planını uyguladım ama kendi yazdığım koda yeterince şüpheyle bakmadım — Sonnet'in #1, #2, #4, #5 bulguları yeni eklediğim kodda. Ders: yeni eklenen güvenlik kodunu ikinci bir gözle (tercihen farklı model) review'dan geçirmek.

---

## 7. Kaynak Dosyalar

- [2026-04-22-gemini-3-1-pro.md](./2026-04-22-gemini-3-1-pro.md)
- [2026-04-22-kimi-code.md](./2026-04-22-kimi-code.md)
- [2026-04-22-sonnet-4-5.md](./2026-04-22-sonnet-4-5.md)
