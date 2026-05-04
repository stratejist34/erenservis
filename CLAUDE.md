# Eren Servis — Proje Hafızası ve İçerik Mimarisi

## ⛔ KRİTİK KURAL — GARANTİ SÜRESİ (ASLA İHLAL EDİLEMEZ)

**Eren Servis'te tüm hizmetler için garanti süresi: 6 AY**

- Sitede HİÇBİR YERDE "12 ay", "1 yıl", "24 ay", "2 yıl" garanti yazılmaz
- Garanti süresi her zaman ve yalnızca **"6 ay"** olarak ifade edilir
- Bu kural metadata, description, schema, FAQ, görsel badge, hero metin — HER YERDE geçerlidir
- Yeni içerik yazarken garanti ibaresi eklenmeden önce bu kural kontrol edilir
- Kural ihlali → hukuki yükümlülük yaratır, müşteriyle sonu olmayan süreçlere neden olur
- Bu kuralı değiştirme yetkisi YALNIZCA Emrah'a aittir

**Her yeni içerik/kod yazılmadan önce kontrol listesi:**
- [ ] "12 ay" var mı? → VARSA SİL, "6 ay" yaz
- [ ] "1 yıl garanti" var mı? → VARSA SİL, "6 ay" yaz
- [ ] "garanti" kelimesi geçiyor mu? → süreyi kontrol et, sadece "6 ay" kabul edilir

## Proje Kimliği
- Site: erenservis.net
- İşletme: Eren Otomatik Şanzıman Servisi
- Konum: Bostancı, İstanbul (Kadıköy ilçesi)
- Telefon: 0532 715 37 51
- Adres: Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4, Bostancı 34744 Ataşehir/İstanbul
- Koordinat: 40.9656025, 29.1093912
- Uzmanlık: DSG / DQ200 / DQ250 / DQ381 mekatronik, kavrama, volant,
  CVT resetleme, ZF, konvansiyonel otomatik şanzıman tamiri
- Hedef kitle: İstanbul Anadolu yakası araç sahipleri
- UYARI: Tüm sayfalarda konum "Bostancı" olmalı. "Tuzla" ifadesi YANLIŞ.

## Tech Stack
- Next.js 14 App Router, TypeScript, Tailwind CSS 4.x (@theme inline token sistemi)
- İçerik: lib/sanziman.ts (hardcoded), data/posts.json (blog), data/rehber-posts.ts (rehber)
- SEO: next-sitemap, generateMetadata, JSON-LD schema (lib/schema.ts factory)
- Bileşen sistemi: 25+ bileşen (Header, Footer, HeroSection, FloatingCTA,
  SymptomSelector, TransmissionFaq, TrustBar, ServiceWorkflow vb.)
- Schema factory: lib/schema.ts — tüm yeni sayfalar buradan import eder
- app/blog/[slug]/page.tsx MEVCUT — posts.json'dan besleniyor

## Schema Kuralları (her yeni sayfa için)

Tüm schema'lar lib/schema.ts'den import edilir — hardcoded yazılmaz.

| Sayfa türü | Zorunlu schema'lar |
|------------|-------------------|
| Rehber/blog yazısı | Article + FAQPage + BreadcrumbList |
| Servis/fiyat sayfası | Service + FAQPage + BreadcrumbList |
| Ana sayfa | LocalBusiness (layout'tan geliyor) |
| Hizmetler listesi | BreadcrumbList |

LocalBusiness schema layout.tsx'te site genelinde aktif — her sayfaya tekrar ekleme.
FAQ içeriği lib/sanziman-faq.ts'ten slug ile çekilir.
Yeni FAQ soruları = sanziman-faq.ts'e kayıt.

## Route Mimarisi
- /blog/[slug] = posts.json kayıtlı dinamik içerikler
- /rehber/[slug] = hardcoded TSX statik sayfalar
- /hizmetler/[slug] = servis/fiyat sayfaları (money pages)
- Yeni hardcoded sayfa = rehber-posts.ts'e kayıt + app/rehber/ altına TSX
- Yeni blog yazısı = posts.json'a kayıt, TSX dosyası gerekmez

## Güncel Durum Notu (2026-05-04)
- Canlı domain: https://www.erenservis.net
- İşletme adı standardı: `Eren Otomatik Şanzıman Servisi`
- Kısa marka varyasyonu: `Eren Otomatik Şanzıman`
- Güncel backlog ve gerçek içerik envanteri için ana referans:
  `docs/CONTENT-BACKLOG-SYNC-2026-05-04.md`
- `docs/SPRINT-PLAN.md` güncel sprint özeti olarak kullanılır
- `docs/PRE_LAUNC-AUDIT.md` tarihsel arşivdir, aktif iş listesi değildir

## Bilinen Teknik Borçlar (öncelik sırasıyla)
1. ~~app/hakkimizda ve app/iletisim title'larında "Tuzla" → "Bostancı" düzelt~~ ✓ TAMAMLANDI
2. ~~app/iletisim ADDRESS sabiti placeholder — gerçek adres girilecek~~ ✓ TAMAMLANDI
3. ~~app/blog/[slug]/page.tsx yok~~ ✓ TAMAMLANDI
4. ~~OpenGraph tag'leri hizmetler, hakkımızda, iletişim sayfalarında eksik~~ ✓ TAMAMLANDI
5. NEXT_PUBLIC_GA_ID env variable — .env.local YOK, Vercel Production env'e eklenmeli + lokal .env.local oluşturulmalı
6. ~~MapWidget gerçek konum URL'si güncellenecek~~ ✓ TAMAMLANDI

## Keyword Stratejisi — Kaynak
3 rakip sitenin (dsgservisi.com, oztepeotomatiksanziman.com, dsgtamir.com)
GSC + GA4 verileri analiz edildi. 50 anahtar kelime belirlendi.
Fırsat skoru = gösterim hacmi + düşük CTR potansiyeli + pozisyon + niyet kalitesi.

## Sayfa Mimarisi — 4 Cluster + Destek Katmanları

### CLUSTER 1 — DSG / Mekatronik
Hedef: DSG uzmanı kimliğini teknik derinlikle inşa et.

| Öncelik | Route | Anahtar Kelime | Fırsat |
|---------|-------|----------------|--------|
| A | /hizmetler/dsg-mekatronik-kart/ | dsg mekatronik kart fiyatı | 85 |
| A | /blog/dsg-mekatronik-ariza-belirtileri/ | dsg mekatronik arıza belirtileri | 71 |
| A | /blog/solenoid-valf-ariza-belirtileri/ | solenoid valf arıza belirtileri | 90 |
| B | /blog/dsg-sanziman-nedir/ | dsg şanzıman nedir / ömrü | 77 |
| B | /blog/mekatronik-nedir/ | mekatronik nedir | 79 |
| B | /hizmetler/dsg-mekatronik-ariza-fiyati/ | dsg mekatronik arıza fiyatı 2025 | 69 |

### CLUSTER 2 — Kavrama / Volant (YENİ — Rakipte yok)
Hedef: dsgtamir.com verisinden keşfedilen boş alan. Acil.

| Öncelik | Route | Anahtar Kelime | Fırsat |
|---------|-------|----------------|--------|
| A | /blog/dsg-kavrama-ariza-belirtileri/ | dsg kavrama arızası belirtileri | 93 |
| A | /hizmetler/dsg-kavrama-degisimi/ | dsg kavrama değişimi fiyatı | 91+84 |
| A | /blog/dsg-vuruntu-semptomlari/ | dsg 2→3 vuruntu, 1→2 vuruntu | 82+79 |
| A | /blog/uyari-lambasi-semptomlari/ | dsg P ışığı, anahtar işareti | 80+64 |
| A | /hizmetler/dsg-volant-kavrama-paketi/ | volant+kavrama kombo fiyatı | 73 |
| B | /hizmetler/dsg-basinc-tupu/ | dsg basınç tüpü değişimi fiyatı | 83 |
| B | /blog/dq200-kavrama-rehberi/ | dq200 kavrama fiyat | 90+69 |

### CLUSTER 3 — Genel Şanzıman Tamiri
Hedef: Geniş kitleyi çek, Cluster 1-2'ye yönlendir.

| Öncelik | Route | Anahtar Kelime | Fırsat |
|---------|-------|----------------|--------|
| A | /blog/otomatik-sanziman-tamiri-fiyat/ | şanzıman tamiri ne kadar tutar | 78 |
| A | /hizmetler/cvt-sanziman-tamiri/ | cvt şanzıman resetleme | 84 |
| A | /blog/en-iyi-sanziman-yagi/ | en iyi otomatik şanzıman yağı | 75 |
| A | /blog/sanziman-yag-degisimi-fiyat-2026/ | şanzıman yağ değişimi fiyatı 2026 | 67 |
| B | /blog/dsg-sanziman-omru-bakimi/ | dsg şanzıman ömrü | 86 |
| B | /blog/otomatik-sanziman-ustasi-secimi/ | otomatik şanzıman ustası tavsiye | 61 |

### CLUSTER 4 — Araç / Marka Sayfaları
Hedef: Lokal SEO × marka kombinasyonu, rakipsiz pozisyon.

| Öncelik | Route | Anahtar Kelime | Fırsat |
|---------|-------|----------------|--------|
| A | /arac/volkswagen/ | volkswagen periyodik bakım, passat | 72+76 |
| A | /arac/bmw/ | bmw şanzıman tamiri fiyatı | 66 |
| A | /arac/opel/ | opel şanzıman tamiri fiyatı | 79 |
| B | /arac/dq200/ | dq200 mekatronik, dq200 kavrama | 90+68 |
| B | /arac/dsg-hangi-araclarda-var/ | dsg hangi araçlarda var | 75 |

### DESTEK KATMANI — Statik & Dönüşüm
| Route | Görev |
|-------|-------|
| /hizmetler/ | Cluster özet + iç link hub |
| /sss/ | FAQ schema + snippet hedefi |
| /hakkimizda/ | E-E-A-T + deneyim kanıtı (Bostancı!) |
| /iletisim/ | Dönüşüm hedefi, tüm CTA'ların ucu |

### SİTE GENELİ BİLEŞENLER (tüm sayfalara eklenmeli)
1. Ücretsiz ön tanı CTA — sticky veya her sayfanın altında
2. Güven hub — yıl/adet/garanti badge'leri (TrustBar genişletilecek)
3. FAQ schema bileşeni — her sayfaya eklenebilir modüler yapı
4. Yorum sistemi — ReviewsSection + schema markup

## İçerik Üretim Sırası (Sprint Planı)

### Sprint 1 — Hızlı kazanımlar (Hafta 1-2) — KISMEN TAMAMLANDI
1. ✓ /rehber/dsg-kavrama-ariza-belirtileri/ — fırsat 93 (rehber namespace'e taşındı)
2. ✓ /rehber/dsg-vuruntu-semptomlari/ — fırsat 82+79 (cluster) — rehber namespace, /blog versiyonu 301 redirect
3. ✓ /blog/uyari-lambasi-semptomlari/ — fırsat 80+64
4. /hizmetler/cvt-sanziman-tamiri/ — MEVCUT, içerik güçlendirme YAPILMADI
5. ✓ Teknik borç: Tuzla→Bostancı düzeltmesi, OG tag'leri

### Sprint 2 — Fiyat sayfaları (Hafta 3-4) ✓ TAMAMLANDI
Fiyat niyeti = satın almaya yakın kullanıcı.
1. ✓ /hizmetler/dsg-kavrama-degisimi/ — TAMAMLANDI
2. ✓ /hizmetler/dsg-mekatronik-kart/ — TAMAMLANDI
3. ✓ /blog/dsg-mekatronik-ariza-fiyati/ — TAMAMLANDI
4. ✓ /blog/otomatik-sanziman-tamiri-fiyat/ — TAMAMLANDI
5. ✓ app/blog/[slug]/page.tsx route — TAMAMLANDI


### FAZ 2 — Marka + Şanzıman Çatısı ✓ TAMAMLANDI
Aisin ve EAT şanzıman aileleri için ayrı hizmet yüzleri oluşturuldu.
- ✓ /hizmetler/aisin-sanziman-tamiri/ — Toyota, Peugeot, Volvo Aisin servisi
- ✓ /hizmetler/eat-sanziman-tamiri/ — Peugeot, Citroen, Ford EAT6/EAT8 servisi
- Sprint 4, Aisin/EAT elevasyonu ile "marka + şanzıman ailesi matrisi" etrafında yapılandırıldı.

### Sprint 3 — Pillar sayfalar (Hafta 5-8) — KISMEN TAMAMLANDI
İç link gücünü dağıtır, uzun vadeli otorite.
1. /hizmetler/dsg-sanziman-tamiri/ — MEVCUT, derinleştirme AUDIT bekliyor
2. /sanziman-tipleri/dsg-s-tronic/ — canonical slug olarak kabul edildi (ayrı /dsg/ slug açılmayacak)
3. ✓ /blog/mekatronik-nedir/ — 3666 gösteri, %0.1 TO
4. ✓ /blog/solenoid-valf-ariza-belirtileri/
5. ✓ /blog/dsg-sanziman-omru-bakimi/

### Sprint 4 — Araç/marka genişlemesi (Hafta 9+) ✓ TAMAMLANDI
1. ✓ /arac/[marka]/ dinamik route sistemi — 21 marka + /arac/ liste sayfası aktif
2. ✓ VW, BMW, Opel sayfaları — tümü mevcut
3. ✓ /arac/dq200/ model sayfası
4. ✓ /blog/dsg-hangi-araclarda-var/

## Sayfa Yazım Kuralları (her yeni sayfa için)
- metadata: title | description | openGraph zorunlu
- JSON-LD: servis sayfaları → Service schema, blog → Article schema,
  SSS içerenler → FAQPage schema
- Her sayfada en az 1 iç link: Cluster 1-2 ise /hizmetler/dsg-kavrama-degisimi/
  veya /hizmetler/dsg-mekatronik-kart/'a bağla
- CTA: "Ücretsiz Ön Tanı İçin Ara" — tel link veya ContactForm'a yönlendirme
- Konum: Bostancı (Tuzla YAZMA)
- Minimum içerik: 800 kelime, H2/H3 hiyerarşisi, FAQ bölümü

## Yeni İçerik Ekleme — Zorunlu Kontrol Listesi

### Blog Yazısı (posts.json → /blog/[slug] dynamic route)
1. `data/posts.json`'a kayıt ekle — title, slug, date, excerpt, yoastTitle, yoastDescription
2. Sayfa dosyası OLUŞTURMA — `/blog/[slug]` dynamic route otomatik halleder
3. FAQ varsa `lib/sanziman-faq.ts`'e aynı slug ile giriş ekle → BlogSchema otomatik çeker

### Blog Static TSX Sayfası (/blog/slug/page.tsx — özel tasarım gerekiyorsa)
1. Dosya oluştur
2. İmport ekle: `import BlogSchema from '@/components/schema/BlogSchema';`
3. `return` içinde `<main>`den önce:
   ```tsx
   <BlogSchema slug="sayfa-slug" title="..." description="..." datePublished="YYYY-MM-DD" />
   ```
4. Return'ü Fragment ile sar: `return ( <> <BlogSchema ... /> <main>...</main> </> );`
5. FAQ varsa `lib/sanziman-faq.ts`'e slug ile ekle → BlogSchema otomatik çeker

### Hizmet Sayfası (/hizmetler/slug/page.tsx)
1. Dosya oluştur
2. `lib/schema.ts`'den `buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema, schemaToString` import et
3. Sayfa başında schema script'leri ekle (mevcut hizmetler sayfalarını örnek al)
4. FAQ varsa `lib/sanziman-faq.ts`'e slug ile ekle

### Her Sayfa İçin Evrensel Kontrol
- [ ] `metadata.title` + `description` + `canonical` + `openGraph` tanımlı mı?
- [ ] Schema component eklendi mi? (BlogSchema / buildServiceSchema)
- [ ] FAQ varsa `lib/sanziman-faq.ts`'e slug ile girildi mi?
- [ ] `npx tsc --noEmit` hatasız mı?
- [ ] Rich snippet doğrulama: https://search.google.com/test/rich-results


## Marka Entegrasyonu ✓ TAMAMLANDI (2026-04)

Tüm marka sayfaları siteye bağlandı — 4 alan kapatıldı:
- ✓ BrandLogosStrip (components/sections/BrandLogosStrip.tsx) — slug alanı + Link ile tıklanabilir, 20 marka
- ✓ Anasayfa BrandSection — components/HomePageSections.tsx içinde render
- ✓ Header "Markalar" dropdown (aracMenuOpen state + ARAC_LINKS, desktop + mobile)
- ✓ Footer "Araç Markaları" kolonu (lg:grid-cols-3, tüm BRANDS)
