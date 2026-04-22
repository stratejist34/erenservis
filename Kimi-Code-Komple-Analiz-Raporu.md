🔍 Eren Servis — Komple Kod & Mimari Analiz Raporu
📊 Genel Durum
Kriter	Durum
Build	✅ Başarılı (Next.js 16 + React 19 + Tailwind v4)
Statik Üretim	✅ Mükemmel (force-static yaygın kullanılıyor)
SEO Altyapısı	✅ Güçlü (sitemap, robots, schema.org, OG/Twitter)
Güvenlik	⚠️ Orta (bazı eksiklikler var)
Kod Kalitesi	⚠️ İyi ama teknik borç birikmiş
🚨 Kritik / Yüksek Öncelikli Sorunlar
1. next.config.ts & .env.example Encoding Bozukluğu
Dosya: next.config.ts, .env.example

Dosyalardaki Türkçe karakterler bozuk görünüyor:

// Build-time paralelli�Yini makinedeki fiziksel ��ekirdek say��s��na g��re se��.
Muhtemelen UTF-8 with BOM veya farklı bir encoding ile kaydedilmiş. Build çalışıyor ama kod okunabilirliği düşük, başka editörlerde veya CI/CD'de sorun çıkarabilir.

Öneri: Dosyaları UTF-8 (BOM'suz) olarak yeniden kaydedin.

2. Bellek Tabanlı Rate Limiting (Vercel'de Etkisiz)
Dosya: app/api/contact/route.ts

const rateLimitMap = new Map<string, RateEntry>();
Vercel serverless ortamında her istek farklı bir instance'ta çalışabilir. Bellekteki Map paylaşılmaz, bu yüzden rate limiting kolayca bypass edilebilir.

Öneri: Redis (Upstash), Vercel KV veya database tabanlı rate limiting'e geçin.

3. CSP (Content-Security-Policy) Header Eksikliği
Dosya: next.config.ts

Sitede dangerouslySetInnerHTML kullanımı yoğun (blog içeriği, schema.org JSON-LD). Global bir CSP header'ı yok. XSS riskini azaltmak için CSP eklenmeli.

Öneri: headers() fonksiyonuna CSP ekleyin:

{ key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;" }
4. Production'da console.error Kalmış
Dosya: app/error.tsx:17, app/global-error.tsx:13, app/api/contact/route.ts:157,162

next.config.ts'te removeConsole: true var ama bu sadece console.log'u kaldırır. console.error'lar production build'ine sızmış durumda. Hatalar log servisine (Sentry, LogRocket vb.) gitmiyor, sadece browser console'a düşüyor.

Öneri: Hata takibi için Sentry entegrasyonu yapın veya console.error'ları kaldırıp özel bir error reporting servisi kullanın.

⚠️ Orta Öncelikli Sorunlar & Mantık Hataları
5. SymptomContext — Gereksiz Re-render (Performans)
Dosya: contexts/SymptomContext.tsx

setSelectedId fonksiyonu her render'da yeniden oluşturuluyor, useCallback ile sarmalanmamış:

// ❌ Her render'da yeni referans
function setSelectedId(id: number) { ... }

return (
  <SymptomContext.Provider value={{ selectedId, setSelectedId }}>
Bu, context'i tüketen tüm component'lerin (HeroSectionDC, SymptomSelector vb.) gereksiz yere re-render olmasına neden olur.

Öneri:

const setSelectedId = useCallback((id: number) => {
  ...
}, [router, searchParams]);
6. globals.css — Çakışan .reveal Tanımları
Dosya: app/globals.css

Aynı .reveal class'ı hem @layer base içinde (satır 214) hem de @layer utilities içinde (satır 245) tanımlanmış. İkisi farklı davranışlara sahip:

Base: transform: translateY(48px)
Utilities: transform: translate3d(0, 20px, 0) filter: blur(10px)
Bu kafa karıştırıcı ve bakımı zor bir durum. Hangisi uygulanacağı spesifikasyona bağlı.

Öneri: Tek bir tanım tutun, diğerini silin.

7. ContactForm — setTimeout Cleanup Eksikliği
Dosya: components/interactive/ContactForm.tsx:52

setTimeout(() => {
  setSent(false);
  setError(null);
}, 5000);
Component unmount olursa bu timeout çalışmaya devam eder ve React "Can't perform a state update on an unmounted component" uyarısı verebilir.

Öneri: useEffect içine alın ve cleanup yapın:

useEffect(() => {
  if (!sent && !error) return;
  const t = setTimeout(() => {
    setSent(false);
    setError(null);
  }, 5000);
  return () => clearTimeout(t);
}, [sent, error]);
8. useScrollReveal — Yetersiz Cleanup
Dosya: hooks/useScrollReveal.ts:22

return () => observer.disconnect();
Sadece disconnect() çağrılıyor. Daha güvenli pattern:

const node = ref.current;
if (node) observer.observe(node);
return () => { if (node) observer.unobserve(node); };
🛡️ Güvenlik Değerlendirmesi
Konu	Durum	Not
XSS (Blog içeriği)	⚠️ Kısmen	sanitizeHtml regex tabanlı, tam DOMPurify değil. <svg onload=...> veya data-URI tabanlı vektörler geçebilir.
Honeypot	✅ Var	website alanı bot koruması mevcut
CORS/Origin	✅ Var	API'de origin kontrolü mevcut
Webhook Signature	✅ Var	HMAC-SHA256 ile imzalanıyor
Input Validation	⚠️ Yetersiz	message alanı trim() edilmiyor, page alanı sadece length check
CSP	❌ Yok	Global CSP header yok
XSS Riski Detayı
Dosya: lib/sanitize-html.ts

Mevcut sanitizer <script>, <style>, iframe, object, embed, inline event handler'ları ve javascript: URL'leri temizliyor. Ancak:

<svg onload="alert(1)"> gibi SVG tabanlı XSS vektörleri temizlenmiyor (sadece on* attribute'ları temizliyor ama <svg içindeki boşluk ve farklı formatları yakalayamayabilir).
Data-URI tabanlı vektörler (data:text/html;base64,...) href/src'de engellenmiyor.
Öneri: Mümkünse DOMPurify'e geçin. Build-time SSG'de kullanılamıyorsa, mevcut regex'leri güçlendirin.

🔧 Eksiklikler & İyileştirme Önerileri
9. TypeScript Hedefi Eski
Dosya: tsconfig.json

"target": "ES2017"
Next.js 16 + React 19 için ES2020 veya ES2022 önerilir.

10. Telefon Doğrulama (Client-Side)
Dosya: components/interactive/ContactForm.tsx

Formda telefon numarası için sadece HTML5 type="tel" ve required var. Client-side format doğrulaması yok. Kullanıcı geçersiz numara girebilir, API'de dönecek hatayı beklemek zorunda kalır.

Öneri: Basit bir regex ile client-side validasyon ekleyin (API'deki TR_PHONE_RE ile aynı).

11. Header.tsx — ARAC_LINKS Her Render'da Yeniden Hesaplanıyor
Dosya: components/Header.tsx:30

const ARAC_LINKS = getBrandsByTier(1).map((b) => ({
  href: `/arac/${b.slug}/`,
  label: b.displayName ?? b.name,
  sub: getPrimaryTransmission(b)?.displayName ?? '',
}));
Bu değer modül seviyesinde tanımlanmış ama getPrimaryTransmission her çağrıldığında yeni bir obje/array dönüyorsa, referans karşılaştırmasında gereksiz re-render'lara neden olabilir. Ancak bu module-level olduğu için bileşen render'larında yeniden hesaplanmaz. Bu not olarak kalsın, kritik değil.

12. next.config.ts Yorumlar Okunamaz
Yukarıda belirtilen encoding sorunu nedeniyle yorumlar ve açıklamalar anlaşılamıyor. Teknik borç yönetimi zorlaşıyor.

✅ Yapılan İyi Şeyler (Pozitif Bulgular)
Static Generation Mükemmel — force-static ile neredeyse tüm sayfalar SSG. Performans ve SEO için mükemmel.
Schema.org Merkezi Yönetim — lib/schema.ts tek kaynak. Hardcoded JSON-LD yok.
Error Boundaries Tam — error.tsx, global-error.tsx, not-found.tsx, loading.tsx hepsi mevcut.
SEO Detaycı — Canonical, OpenGraph, Twitter Card, alternates her sayfada.
Security Header'ları — X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy mevcut.
Analytics Olgun — GA4 event tracking modüler ve window.gtag kontrolü ile SSR-safe.
Accessibility İyi — aria-current, aria-haspopup, aria-expanded, aria-label, sr-only doğru kullanılmış.
Image Optimization — next/image ile sizes, priority, fetchPriority prop'ları doğru ayarlanmış.
Honeypot Koruması — Botlar için görünmez website alanı akıllıca düşünülmüş.
Redirect Yönetimi — Eski URL'lerden yeni yapıya 301 redirect'ler kapsamlı.
📋 Özet & Öncelikli Aksiyon Listesi
Öncelik	Görev	Dosya
🔴 Kritik	next.config.ts ve .env.example'ı UTF-8 (BOM'suz) olarak yeniden kaydet	next.config.ts
🔴 Kritik	Rate limiting'i Redis/Vercel KV'ye taşı	app/api/contact/route.ts
🔴 Kritik	CSP header'ı ekle	next.config.ts
🟡 Yüksek	SymptomContext'te useCallback kullan	contexts/SymptomContext.tsx
🟡 Yüksek	console.error'ları log servisine yönlendir veya kaldır	app/error.tsx, global-error.tsx
🟡 Yüksek	globals.css'te çakışan .reveal tanımlarını birleştir	app/globals.css
🟢 Orta	ContactForm timeout cleanup'ını düzelt	components/interactive/ContactForm.tsx
🟢 Orta	sanitizeHtml'i DOMPurify'e geç veya SVG/data-URI vektörlerini ekle	lib/sanitize-html.ts
🟢 Orta	Telefon validasyonunu client-side ekle	components/interactive/ContactForm.tsx
🔵 Düşük	TypeScript target'ını ES2020 yap	tsconfig.json
Site genel olarak çok iyi tasarlanmış ve SEO odaklı bir yapıya sahip. Temel mimari sorunlar yok. Ancak güvenlik (CSP, rate limiting, XSS) ve performans (context re-render, cleanup) konularında küçük ama etkili düzeltmeler yapılması önerilir.
