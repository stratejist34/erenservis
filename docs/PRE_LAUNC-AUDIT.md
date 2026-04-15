🚦 Pre-Launch Audit — Eren Servis
Tarih: 2026-04-14  •  Son commit: bab37e3  •  Canlı URL: erenservis.vercel.app

📊 Durum Tablosu
Alan	Durum	Not
SEO / Metadata	🟡 Kısmen	38 sayfa metadata ✓, 17'si openGraph block açık tanımlı, diğerleri layout'tan inherit
OG Image	🟢 Çalışır	public/og-image.jpg (1200×630) + layout.tsx → tüm sayfalara inherit
Canonical URL'ler	🟢 Güncel	132 referans vercel.app'e çevrildi (commit bab37e3)
Schema.org (JSON-LD)	🟡 Eksik	22/38 sayfada explicit schema. LocalBusiness layout'ta site-wide çalışıyor
robots.txt	🔴 HATA	public/robots.txt hardcoded erenservis.net — next-sitemap'ı override ediyor
sitemap.xml	🔴 HATA	public/sitemap-0.xml hâlâ .net URL'leri içeriyor
404 sayfası	🟡 Yok	not-found.tsx yok → default Next.js ekranı çıkar
error.tsx	🟡 Yok	Runtime hata → default çökme ekranı
Tuzla/Bostancı tutarlılığı	🟢 Temiz	138 Bostancı, 0 Tuzla kod içinde
Placeholder/Lorem	🟢 Temiz	Hiç yok
Telefon tutarlılığı	🟢 Tek numara	109 referans, hepsi 0532 715 37 51
Favicon / OG	🟢 Kurulu	app/icon.png, apple-icon.png, og-image.jpg ✓
NEXT_PUBLIC_GA_ID	🟡 Kontrol et	Vercel env'e girildi mi?
GOOGLE_SHEETS_WEBHOOK_URL	🟡 Kontrol et	ContactForm → Sheets logu için gerekli
TypeScript	❓	Session içinde tam typecheck çalıştırılmadı
Build	❓	Vercel otomatik yapacak — başarılı olup olmadığını teyit et
🔴 Kritik — Launch'tan önce mutlaka düzelt
1. public/robots.txt .net hardcoded

Host: https://erenservis.net
Sitemap: https://erenservis.net/sitemap.xml
next-sitemap postbuild'de yeniden yazsa da static dosya varsa override etmez, birlikte servis edilir. Şu an iki kaynak çelişiyor. Ya sil (next-sitemap üretsin), ya da elle vercel.app yap.

2. public/sitemap-0.xml ve public/sitemap.xml stale
42 satır hâlâ https://erenservis.net/... URL'leri içeriyor. package.json'da "postbuild": "next-sitemap" varsa Vercel build'de otomatik yenilenir — kontrol et. Yoksa manuel build + commit.

3. 404 sayfası yok (app/not-found.tsx)
Müşteriye link gönderirken yazım hatası vs. → çirkin default Next.js sayfası çıkar. 15 dk'lık iş, brand'e uyumlu tek sayfa.

4. error.tsx yok
Runtime exception → An unexpected error occurred default. En azından minimal bir app/error.tsx olmalı.

🟡 Önemli — Launch öncesi kontrol et
5. Vercel Environment Variables
NEXT_PUBLIC_GA_ID → yoksa analytics yok, GA4 pipeline ölü
GOOGLE_SHEETS_WEBHOOK_URL → yoksa ContactForm → Sheets logu çalışmaz (form yine WhatsApp'a açılır, yani silent fail)
Vercel dashboard → Settings → Environment Variables'tan doğrula
6. 16 sayfada explicit JSON-LD schema yok
Çoğunluk hizmetler/* ve bazı blog static sayfalar. lib/schema.ts'de buildServiceSchema factory var ama kullanılmıyor. Rich snippet kaybı.

Eksik sayfalar: dsg-sanziman-tamiri, konvansiyonel-sanziman, cvt-sanziman-tamiri, zf-sanziman-tamiri, aisin-sanziman-tamiri, eat-sanziman-tamiri, dsg-basinc-tupu, sanziman-bakimi, dsg-vuruntu-semptomlari (blog), edc-sanziman-ariza-belirtileri, uyari-lambasi-semptomlari (blog), hakkimizda, iletisim, hizmetler (liste), blog (liste), arac (liste).

7. Phone number hardcode × 42 dosya
0532 715 37 51 ve +905327153751 109 yerde. Numara değişirse 42 dosya edit. Bir lib/contact.ts sabit dosyası iyi olur — launch-blocker değil ama teknik borç.

🟢 Temiz / Sağlam
✅ Tüm "Tuzla" referansları temizlenmiş (sadece WordPress export XML'de kalmış, production'a sızmaz)
✅ Hardcoded/Lorem/TODO metin yok
✅ Favicon + apple-icon + og-image tüm boyutlarda hazır
✅ Canonical URL'ler tutarlı (41 dosya tek commit ile çevrildi)
✅ Türkçe karakter, accent, slug yapısı tutarlı
✅ buildLocalBusinessSchema site-wide layout'ta aktif → her sayfa LocalBusiness markupu alıyor
🔄 ‼️ Domain Bağlandığında Geri Dönüş Listesi
.net Vercel'e bağlandığı gün aşağıdakileri yap:

Bulk replace — app/, lib/, components/, next-sitemap.config.js:


erenservis.vercel.app → erenservis.net
(aynı node -e script'i ters yönde, 41 dosya)

public/robots.txt — Host: + Sitemap: satırlarını .net yap (ya da dosyayı sil, next-sitemap üretsin)

public/sitemap-0.xml, sitemap.xml — sil, npm run build yeniden üretsin, ya da bulk replace

Vercel Domain settings → canonical domain erenservis.net, vercel.app redirect

FB Debugger → erenservis.net/ için Scrape Again × 2 (eski vercel.app cache'i invalidate)

CLAUDE.md'ye ekle: "URL rollback tamamlandı — domain live"

📌 Memory'ye ekledim — bir sonraki oturumda hatırlarım.

🎯 Launch Öncesi Öneri Sırası
(5 dk) public/robots.txt düzelt → vercel.app
(10 dk) public/sitemap-0.xml + sitemap.xml sil, yeniden build
(15 dk) app/not-found.tsx oluştur (brand'e uyumlu minimal)
(10 dk) app/error.tsx oluştur
(5 dk) Vercel env var kontrol: NEXT_PUBLIC_GA_ID, GOOGLE_SHEETS_WEBHOOK_URL
(2 dk) FB Debugger → vercel.app → Scrape Again × 2 → hero fotosu doğrula
Paylaşıma başla
Toplam ~50 dk critical + important hallolmuş olur. Schema eksiği ve phone refactor launch sonrasına kalabilir.

Bu notları memory/pre-launch-audit.md'ye de yazayım mı? Domain bağlandığında rollback checklist'i otomatik hatırlatma için.
