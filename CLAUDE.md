# Eren Servis — Proje Hafızası ve İçerik Mimarisi

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

## Bilinen Teknik Borçlar (öncelik sırasıyla)
1. ~~app/hakkimizda ve app/iletisim title'larında "Tuzla" → "Bostancı" düzelt~~ ✓ TAMAMLANDI
2. ~~app/iletisim ADDRESS sabiti placeholder — gerçek adres girilecek~~ ✓ TAMAMLANDI
3. ~~app/blog/[slug]/page.tsx yok~~ ✓ TAMAMLANDI
4. ~~OpenGraph tag'leri hizmetler, hakkımızda, iletişim sayfalarında eksik~~ ✓ TAMAMLANDI
5. NEXT_PUBLIC_GA_ID env variable kontrol edilecek
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

### Sprint 1 — Hızlı kazanımlar (Hafta 1-2) ✓ TAMAMLANDI
1. ✓ /rehber/dsg-kavrama-ariza-belirtileri/ — fırsat 93 (rehber namespace'e taşındı)
2. /blog/dsg-vuruntu-semptomlari/ — fırsat 82+79 (cluster)
3. /blog/uyari-lambasi-semptomlari/ — fırsat 80+64
4. /hizmetler/cvt-sanziman-tamiri/ — MEVCUT, içerik güçlendir
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

### Sprint 3 — Pillar sayfalar (Hafta 5-8)
İç link gücünü dağıtır, uzun vadeli otorite.
1. /hizmetler/dsg-sanziman-tamiri/ — MEVCUT, derinleştir
2. /sanziman-tipleri/dsg/ — MEVCUT slug varsa güncelle
3. /blog/mekatronik-nedir/ — 3666 gösteri, %0.1 TO
4. /blog/solenoid-valf-ariza-belirtileri/
5. /blog/dsg-sanziman-omru-bakimi/

### Sprint 4 — Araç/marka genişlemesi (Hafta 9+)
1. /arac/[marka]/ dinamik route sistemi kur
2. VW, BMW, Opel sayfaları
3. DQ200 model sayfası
4. /blog/dsg-hangi-araclarda-var/

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







marka sayfaları

Plan: Marka Sayfaları Site Geneli Entegrasyonu
Context
15 marka sayfası (/arac/[marka]/) ve 1 statik model sayfası (/arac/dq200/) tamamlandı. Ancak siteye hiçbir yerden link verilmiyor — ne header'da görünüyorlar, ne footer'da, ne anasayfada. BrandLogosStrip.tsx anasayfada mevcut ama markalar tıklanamaz, saf dekoratif.

Hedef: Markalar Discovery → Trafik → Dönüşüm zinciri kurulacak.

SEO: brand+servis kombinasyonu uzun kuyruk anahtar kelimeler (örn. "volkswagen dsg tamiri bostancı")
UX: Kullanıcı kendi araç markasını görerek güven hisseder, direkt servis sayfasına ulaşır
İç linkleme: Marka sayfaları siteye bağlanarak authority dağılımı sağlanır
Kapsam — 4 Alan (Uygulama Sırası)
ALAN 1 — BrandLogosStrip Tıklanabilir (En Hızlı Kazanım)
Dosya: components/v7/BrandLogosStrip.tsx

Mevcut durum: <div> elemanları, hover efekti var ama link yok. Citroen ve Toyota için /arac/[marka]/ rotası YOK.

Değişiklik:

BRANDS array'ine slug alanı ekle (route slug veya null link yok ise)
<div> → <Link href={/arac/${brand.slug}/}> yalnızca slug olan markalar için
Slugsuz markalar (Citroen, Toyota, Fiat) <div> kalır
Türkçe karakter düzelt: "Turkiye parkinda sik gorulen platformlar" → "Türkiye Parkında Sık Görülen Şanzıman Aileleri"
Slug eşlemesi:

Volkswagen → volkswagen   Renault → renault
Peugeot    → peugeot      Opel    → opel
Ford       → ford         Hyundai → hyundai
Nissan     → nissan       Skoda   → skoda
Mercedes   → (eklenecek)  Audi    → (eklenecek)
Citroen    → null         Toyota  → null
Fiat       → null
BMW, Mercedes, Audi, Seat, Kia, Honda — BrandLogosStrip'te YOK. Eklenebilir veya bu markalar Bölüm 2'deki yeni section'dan karşılanır.

ALAN 2 — Anasayfa "Markanıza Göre Servis" Section
Dosya: components/v7/BrandSectionV7.tsx (YENİ oluşturulacak) Entegrasyon: components/HomePageSections.tsx — BlogPreviewV7 öncesine eklenecek

Tasarım: Dark kart grid, bg-[#0C1219] kart, border border-white/8, 4'lü veya 3'lü sütun

Section başlığı: "Aracınıza Özel Şanzıman Servisi"
Alt metin: "Hangi markayı kullandığınızı söyleyin, ne yapabileceğimizi anlatalım."

Grid (responsive: 2 col mobile, 4 col desktop) — 8 kart:
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│   VW    │ │  Audi   │ │  Skoda  │ │  Seat   │
│ DSG Uzmanı│ │S-Tronic │ │ DSG     │ │ DSG     │
└─────────┘ └─────────┘ └─────────┘ └─────────┘
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│Mercedes │ │  BMW    │ │  Ford   │ │ Renault │
│7G/9G    │ │ZF 8HP   │ │PowerShft│ │  EDC    │
└─────────┘ └─────────┘ └─────────┘ └─────────┘

Footer: "Tüm Markalar →" → /arac/ (liste sayfası gerekecek)
Her kart içeriği:

const BRAND_CARDS = [
  { slug: 'volkswagen', ad: 'Volkswagen', sanziman: 'DSG DQ200 / DQ250', renk: 'text-[#4A90D9]' },
  { slug: 'audi',       ad: 'Audi',       sanziman: 'S-Tronic / ZF 8HP', renk: 'text-[#C0C0C0]' },
  { slug: 'skoda',      ad: 'Skoda',      sanziman: 'DSG DQ200 / DQ381', renk: 'text-[#4CAF50]' },
  { slug: 'seat',       ad: 'Seat / Cupra', sanziman: 'DSG / DQ381',    renk: 'text-[#E84B3A]' },
  { slug: 'mercedes',   ad: 'Mercedes',   sanziman: '7G / 9G-Tronic',   renk: 'text-[#94A3B8]' },
  { slug: 'bmw',        ad: 'BMW',        sanziman: 'ZF 8HP / GA8HP',   renk: 'text-[#4A90D9]' },
  { slug: 'ford',       ad: 'Ford',       sanziman: 'PowerShift DCT',   renk: 'text-[#0066CC]' },
  { slug: 'renault',    ad: 'Renault',    sanziman: 'EDC7 / EDC8',      renk: 'text-[#FFCC00]' },
];
Kart markup (her biri <Link href={/arac/${brand.slug}/}>)

bg-[#0C1219] border border-white/8 rounded-2xl p-5
hover:border-[#38BDF8]/30 hover:bg-[#0F1923] transition group
- Marka baş harfleri ikonu (2 harf, brand rengi, bg-white/5 rounded-xl)
- Marka adı (font-semibold text-white)
- Şanzıman tipi (text-xs text-[#64748B])
- "Servis Detayı →" (text-xs text-[#38BDF8] group-hover:underline)
ALAN 3 — Header "Araçlar" Dropdown
Dosya: components/Header.tsx

Mevcut durum: "Ana Sayfa" dropdown var, sade içerik. NAV_LINKS flat array.

Değişiklik: NAV_LINKS'e yeni bir "Araçlar" dropdown ekle — tam yeni nav item, "Ana Sayfa" gibi dropdown menüsü olacak.

Nav sırası: [Ana Sayfa ▾] [Hizmetler] [Araçlar ▾] [Şanzıman Rehberi] [Blog] [İletişim]
Araçlar dropdown içeriği (2 sütun, 8 marka + 1 model):

Markaya Göre               Şanzıman Modeline Göre
────────────────           ──────────────────────
Volkswagen                 DQ200 (7 ileri kuru)
Audi
Skoda
Seat / Cupra
Mercedes
BMW
Ford
Renault
Implementasyon:

ARAC_LINKS array ekle:
const ARAC_LINKS = [
  { href: '/arac/volkswagen/', label: 'Volkswagen', sub: 'DSG DQ200 / DQ250' },
  { href: '/arac/audi/',       label: 'Audi',       sub: 'S-Tronic / ZF' },
  { href: '/arac/skoda/',      label: 'Skoda',      sub: 'DSG / DQ381' },
  { href: '/arac/seat/',       label: 'Seat & Cupra', sub: 'DSG / DQ381' },
  { href: '/arac/mercedes/',   label: 'Mercedes',   sub: '7G / 9G-Tronic' },
  { href: '/arac/bmw/',        label: 'BMW',        sub: 'ZF 8HP' },
  { href: '/arac/ford/',       label: 'Ford',       sub: 'PowerShift' },
  { href: '/arac/renault/',    label: 'Renault',    sub: 'EDC7 / EDC8' },
];
const MODEL_LINKS = [
  { href: '/arac/dq200/', label: 'DQ200 Tamiri', sub: '7 ileri kuru kavrama' },
];
Desktop: Aynı dropdown pattern, min-w 480px, 2 sütun grid içinde
Mobile: mobileMenuOpen bloğuna ARAC_LINKS düz liste olarak eklenir (header altında "Araçlar" başlığıyla)
State: aracMenuOpen state'i ekle, diğer dropdown pattern ile aynı
ALAN 4 — Footer "Markalar" Kolonu
Dosya: components/Footer.tsx

Mevcut durum: 2 kolon (sm:grid-cols-2): Hizmetlerimiz + Kurumsal

Değişiklik: sm:grid-cols-2 → sm:grid-cols-3 (veya mobilde 2+1 breakpoint)

const MARKA_LINKS = [
  { href: '/arac/volkswagen/', label: 'Volkswagen' },
  { href: '/arac/audi/',       label: 'Audi' },
  { href: '/arac/skoda/',      label: 'Skoda' },
  { href: '/arac/mercedes/',   label: 'Mercedes' },
  { href: '/arac/bmw/',        label: 'BMW' },
  { href: '/arac/ford/',       label: 'Ford' },
  { href: '/arac/renault/',    label: 'Renault' },
  { href: '/arac/opel/',       label: 'Opel' },
] as const;
Yeni 3. kolon:

Başlık: "Araç Markaları" (aynı uppercase tracking stil)
+ linkler (aynı text-sm text-[#94A3B8] hover:text-white stili)
sm:grid-cols-2 → sm:grid-cols-3 değişikliği, responsive olarak mobile'da grid-cols-2 kalır ve 3. kolon altta tam genişlik olur.

Uygulama Sırası
ALAN 1 — BrandLogosStrip.tsx (10 dk, en az risk, anında görünür kazanım)
ALAN 4 — Footer.tsx (10 dk, statik, risk yok)
ALAN 3 — Header.tsx (20 dk, state ekleme gerekiyor, dikkatli test)
ALAN 2 — BrandSectionV7.tsx + HomePageSections.tsx (30 dk, yeni bileşen)
Kritik Dosyalar
Dosya	Değişiklik Türü
components/v7/BrandLogosStrip.tsx	Mevcut: div → Link, slug ekleme
components/v7/BrandSectionV7.tsx	YENİ bileşen
components/HomePageSections.tsx	Import + <BrandSectionV7 /> ekle
components/Header.tsx	ARAC_LINKS + dropdown state + mobile liste
components/Footer.tsx	MARKA_LINKS + 3. kolon
Dikkat Noktaları
BrandLogosStrip.tsx'teki Citroen, Toyota, Fiat için /arac/ rotası yok — bu markalar link almaz, sadece dekoratif kalır
Header dropdown blur/focus logic dikkatli — mevcut homeMenuOpen pattern referans al, çakışma olmasın
Footer grid'i 3 kolona genişletirken küçük ekran düzeni bozulabilir — grid-cols-2 breakpoint belirle (sm:grid-cols-2 lg:grid-cols-3)
BrandSectionV7 Server Component olacak (statik veri, no interactivity)
BMW sayfası app/arac/bmw/page.tsx var mı kontrol et (session başında eklendi)
Doğrulama
localhost:3000 — BrandLogosStrip'te tıklanabilir markalar /arac/... açıyor
localhost:3000 — Anasayfada "Markanıza Göre Servis" section görünüyor, 8 kart link çalışıyor
Header → Araçlar → dropdown açılıyor, tüm linkler doğru adreslere gidiyor
Mobile menü → Araçlar listesi görünüyor
Footer → 3. kolon marka linkleri görünüyor
npm run build hatasız tamamlanıyor
