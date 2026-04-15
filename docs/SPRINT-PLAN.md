# Eren Servis — Sprint Planı
**Güncelleme:** 2026-04-15 · **Canlı:** erenservis.vercel.app · **Hedef:** erenservis.net

---

## Mevcut Durum (Ne Var, Ne Yok)

### Yazılmış Sayfalar
| Alan | Sayfalar |
|------|----------|
| /hizmetler/ | dsg-kavrama-degisimi, dsg-mekatronik-kart, dsg-sanziman-tamiri, dsg-basinc-tupu, cvt-sanziman-tamiri, zf-sanziman-tamiri, aisin-sanziman-tamiri, eat-sanziman-tamiri, konvansiyonel-sanziman, sanziman-bakimi |
| /blog/ (static TSX) | dsg-vuruntu-semptomlari, dsg-mekatronik-ariza-fiyati, dsg-hangi-araclarda-var, dsg-sanziman-omru-bakimi, mekatronik-nedir, solenoid-valf-ariza-belirtileri, edc-sanziman-ariza-belirtileri, otomatik-sanziman-tamiri-fiyat, uyari-lambasi-semptomlari + [slug] dynamic route |
| /rehber/ | dsg-kavrama-ariza-belirtileri, dsg-vuruntu-semptomlari, dsg-sanziman-omru-bakimi, mekatronik-nedir, solenoid-valf-ariza-belirtileri, otomatik-sanziman-tamiri-fiyat, uyari-lambasi-semptomlari |
| /arac/ | 20 marka dinamik route (VW, Audi, BMW, Mercedes, Renault, Ford, Opel, Skoda, Seat, Peugeot, Fiat, Citroen, Dacia, Hyundai, Kia, Toyota, Honda, Nissan, Volvo, Land Rover) + /arac/dq200/ static |

### Teknik Borçlar (Audit Özeti)
| # | Sorun | Önem |
|---|-------|------|
| 1 | public/robots.txt — Host/Sitemap .net hardcoded | 🔴 Kritik |
| 2 | public/sitemap-0.xml + sitemap.xml — .net URL'leri | 🔴 Kritik |
| 3 | app/not-found.tsx yok | 🔴 Kritik |
| 4 | app/error.tsx yok | 🟡 Önemli |
| 5 | 16 sayfada JSON-LD schema eksik | 🟡 Önemli |
| 6 | Phone/WhatsApp sabit lib/contact.ts yok | 🟢 Nice-to-have |
| 7 | Vercel env: GA_ID, SHEETS_WEBHOOK | 🟡 Önemli (kullanıcı yapacak) |

---

## Sprint 0 — YAYINA HAZIRLIK ⚡
**Hedef:** Bu hafta, yayından önce tamamla (~45 dk iş)

### 0-A · public/robots.txt düzelt (~5 dk)
`public/robots.txt` içinde `Host:` ve `Sitemap:` satırları .net gösteriyor.
```
Host: https://erenservis.vercel.app
Sitemap: https://erenservis.vercel.app/sitemap.xml
```
next-sitemap postbuild'de dosyayı yeniden yazıyor ANCAK `public/` altında static dosya varsa override etmez.
**Çözüm:** Dosyayı vercel.app referanslı olarak güncelle.

### 0-B · public/sitemap-0.xml ve sitemap.xml sil (~5 dk)
42 URL hâlâ `.net` içeriyor. Dosyaları sil — `npm run build` sonrası next-sitemap yeniden üretir, doğru URL'lerle.
**Doğrulama:** `git rm public/sitemap*.xml public/robots-index.xml 2>/dev/null`

### 0-C · app/not-found.tsx oluştur (~15 dk)
Müşteriye link atarken yazım hatası → Next.js default ekran çıkıyor. Marka uyumlu minimal sayfa:
- Aynı graphite-base bg, brass accent, "Sayfa Bulunamadı" başlık
- Telefon butonu + Anasayfa linki
- font-saira, Cold Brass Hybrid token'lar

### 0-D · app/error.tsx oluştur (~10 dk)
Runtime exception → default çökme. `"use client"` directive zorunlu.
- Minimal hata mesajı + "Sayfayı Yenile" butonu + telefon

### 0-E · Vercel Env Vars kontrol (~5 dk — kullanıcı yapacak)
Vercel Dashboard → Settings → Environment Variables:
- `NEXT_PUBLIC_GA_ID` → GA4 measurement ID (G-XXXXXXX)
- `GOOGLE_SHEETS_WEBHOOK_URL` → ContactForm → Sheets log için

---

## Sprint 1 — SEO Derinleştirme
**Hedef:** Yayından sonra 1. hafta

### 1-A · 16 Sayfaya JSON-LD Schema Ekle
`lib/schema.ts`'de factory'ler mevcut (`buildServiceSchema`, `buildArticleSchema`, `buildFAQSchema`).
Eksik olan sayfalar:

**Hizmetler (8 sayfa) — buildServiceSchema kullan:**
- dsg-sanziman-tamiri, konvansiyonel-sanziman, cvt-sanziman-tamiri
- zf-sanziman-tamiri, aisin-sanziman-tamiri, eat-sanziman-tamiri
- dsg-basinc-tupu, sanziman-bakimi

**Blog/Rehber (8 sayfa) — buildArticleSchema + buildFAQSchema:**
- blog/dsg-vuruntu-semptomlari, blog/solenoid-valf-ariza-belirtileri
- blog/mekatronik-nedir, blog/dsg-sanziman-omru-bakimi
- blog/dsg-hangi-araclarda-var, blog/edc-sanziman-ariza-belirtileri
- blog/uyari-lambasi-semptomlari
- hakkimizda (Organization schema)

### 1-B · lib/contact.ts Oluştur
```ts
export const PHONE = '0532 715 37 51';
export const PHONE_HREF = 'tel:+905327153751';
export const WHATSAPP_HREF = 'https://wa.me/905327153751';
export const ADDRESS = 'Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4';
```
42 dosyada hardcoded — launch blocker değil, ama numara değişirse tek yerden halleder.

### 1-C · FB Debugger Doğrulama
1. https://developers.facebook.com/tools/debug/
2. `https://erenservis.vercel.app/` → Scrape Again × 2
3. Hero fotosu + doğru title görünmeli
4. Bir iç sayfa için tekrarla (örn. `/hizmetler/dsg-kavrama-degisimi/`)

---

## Sprint 2 — Yeni İçerik: Kavrama & Fiyat Cluster
**Hedef:** Yayından sonra 1-2. hafta · Fırsat skoru yüksek, rakipsiz alan

### 2-A · /hizmetler/dsg-volant-kavrama-paketi/ (A Priority — Fırsat: 73)
**Anahtar kelime:** "volant kavrama paketi fiyatı", "dsg volant değişimi"
**İçerik:**
- Volant + kavrama kombo paket nedir, ne zaman gerekli
- DQ200 için ayrı, DQ250 için ayrı bölüm
- Fiyat tablo (adaptasyon dahil / hariç)
- Combo avantajı: ayrı ayrı yaparsa X, birlikte Y
- FAQ: "volan mı kavrama mı önce bozulur", "birlikte değiştirmek şart mı"
- Schema: Service + FAQPage
- İç link: → /hizmetler/dsg-kavrama-degisimi/ + /hizmetler/dsg-mekatronik-kart/

### 2-B · /blog/en-iyi-sanziman-yagi/ (A Priority — Fırsat: 75)
**Anahtar kelime:** "en iyi otomatik şanzıman yağı", "dsg şanzıman yağı"
**İçerik:**
- DSG/CVT/ZF/konvansiyonel yağ farkları
- VW G 052 182, G 055 025 kodu açıklaması
- Yağ değişim aralıkları (km/yıl)
- Sahte yağ uyarısı — ucuz markalar neden tehlikeli
- Önerilen markalar (Castrol, Liqui-Moly, Pentosin)
- Schema: Article + FAQPage

### 2-C · /blog/sanziman-yag-degisimi-fiyat-2026/ (A Priority — Fırsat: 67)
**Anahtar kelime:** "şanzıman yağ değişimi fiyatı 2026"
**İçerik:**
- Fiyat tablosu: DSG yağ / CVT yağ / ZF yağ / konvansiyonel yağ
- Bostancı fiyatları vs. bayi fiyatları karşılaştırma
- Kaç km'de bir değişmeli
- Değiştirilmezse ne olur (hasar zinciri)
- Schema: Article + FAQPage

---

## Sprint 3 — Yeni İçerik: Genel Şanzıman Cluster
**Hedef:** Yayından sonra 3-4. hafta

### 3-A · /blog/dq200-kavrama-rehberi/ (B Priority — Fırsat: 90+69)
**Anahtar kelime:** "dq200 kavrama fiyatı", "dq200 kavrama değişimi"
**İçerik:**
- DQ200 kuru kavrama yapısı ve çalışma prensibi
- Kaç km'de bozulur, hangi modeller risk altında
- Belirtiler: vuruntu, sarsıntı, kayma
- Kavrama paketi vs. komple kit farkı
- Fiyat aralığı (Bostancı)
- Schema: Article + FAQPage
- İç link: → /hizmetler/dsg-kavrama-degisimi/ + /arac/volkswagen/

### 3-B · /blog/dsg-sanziman-nedir/ (B Priority — Fırsat: 77)
**Anahtar kelime:** "dsg şanzıman nedir", "dsg şanzıman ömrü"
**İçerik:**
- DSG teknolojisi: çift kavrama mantığı
- DQ200 vs DQ250 farkı
- Avantajlar / dezavantajlar
- Kaç km ömrü var, bakım aralıkları
- "DSG mi yoksa torque converter mi?" sorusu
- Schema: Article + FAQPage

### 3-C · /blog/otomatik-sanziman-ustasi-secimi/ (B Priority — Fırsat: 61)
**Anahtar kelime:** "otomatik şanzıman ustası tavsiye", "güvenilir şanzıman servisi"
**İçerik:**
- Bir serviste nelere bakmalısın (teşhis cihazı, sertifika, garanti)
- Bayide vs. özel serviste fiyat/güven dengesi
- Kırmızı bayraklar: "hemen bak dediler, şimdi para lazım"
- Eren Servis neden tercih edilmeli (15 yıl, orijinal parça, 6 ay garanti)
- Schema: Article + FAQPage

---

## Sprint 4 — Domain Geçişi (erenservis.net hazır olduğunda)
**Önce Domain bağlansın, sonra bu sprint başlasın**

### 4-A · URL Bulk Replace
```bash
node -e "
const fs = require('fs');
const path = require('path');
const walk = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) { walk(full); return; }
    if (!/\.(tsx?|js|json)$/.test(f)) return;
    const content = fs.readFileSync(full, 'utf8');
    if (content.includes('erenservis.vercel.app')) {
      fs.writeFileSync(full, content.replaceAll('erenservis.vercel.app', 'erenservis.net'));
      console.log('Updated:', full);
    }
  });
};
['app','lib','components'].forEach(walk);
fs.writeFileSync('next-sitemap.config.js',
  fs.readFileSync('next-sitemap.config.js','utf8').replaceAll('erenservis.vercel.app','erenservis.net'));
"
```

### 4-B · robots.txt + sitemap güncelle
- robots.txt: Host + Sitemap → erenservis.net
- Ya da public/sitemap*.xml sil, `npm run build` yeniden üretsin

### 4-C · Vercel Redirect
Vercel Dashboard → Domains → erenservis.vercel.app → erenservis.net yönlendirmesi

### 4-D · Doğrulama
- FB Debugger: erenservis.net/ → Scrape Again × 2
- `view-source:https://erenservis.net` → `og:image` → `.net/og-image.jpg`
- CLAUDE.md'ye not: "URL rollback tamamlandı — domain live: 2026-XX-XX"

---

## İçerik Takvimi Özeti

| Öncelik | Route | Sprint | Anahtar Kelime | Fırsat |
|---------|-------|--------|----------------|--------|
| 🔴 A | /hizmetler/dsg-volant-kavrama-paketi/ | Sprint 2 | volant kavrama paketi fiyatı | 73 |
| 🔴 A | /blog/en-iyi-sanziman-yagi/ | Sprint 2 | en iyi otomatik şanzıman yağı | 75 |
| 🔴 A | /blog/sanziman-yag-degisimi-fiyat-2026/ | Sprint 2 | şanzıman yağ değişimi fiyatı 2026 | 67 |
| 🟡 B | /blog/dq200-kavrama-rehberi/ | Sprint 3 | dq200 kavrama fiyatı | 90+69 |
| 🟡 B | /blog/dsg-sanziman-nedir/ | Sprint 3 | dsg şanzıman nedir | 77 |
| 🟡 B | /blog/otomatik-sanziman-ustasi-secimi/ | Sprint 3 | otomatik şanzıman ustası | 61 |

**Mevcut toplam sayfa sayısı:** ~50+ route (hizmetler, blog, rehber, arac, arac/dq200, sanziman-tipleri dahil)
**Yazılacak:** 6 sayfa (1 hizmet, 5 blog)

---

## Öncelik Sırası — Bugün/Bu Hafta

```
[ ] 0-A — robots.txt → vercel.app               5 dk
[ ] 0-B — public/sitemap*.xml sil                5 dk
[ ] 0-C — app/not-found.tsx oluştur             15 dk
[ ] 0-D — app/error.tsx oluştur                 10 dk
[ ] 0-E — Vercel env vars kontrol                5 dk (kullanıcı)
─────────────────────────────────────────────── 40 dk
[ ] commit + push → Vercel deploy → doğrula
[ ] FB Debugger Scrape Again × 2
```

Bunlar tamam olunca site yayına hazır. İçerik sprintleri yayından sonra başlar.
