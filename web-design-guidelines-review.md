# Web Design Guidelines Review

Source guideline:
- https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md

Scope reviewed:
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `components/Header.tsx`
- `components/HeroSection.tsx`
- `components/FinalCTA.tsx`
- `components/MobileCtaBar.tsx`
- `components/ScrollProgress.tsx`
- `components/ReviewsSection.tsx`
- `components/SymptomSelector.tsx`
- `components/interactive/ContactForm.tsx`

## Findings

### High

- `app/layout.tsx:118`
- `app/page.tsx:26`
  Skip link yok, hedeflenebilir `main` anchor yok. Sabit header varken klavye kullanıcıları her sayfada navigasyonu tekrar geçmek zorunda kalıyor.

- `components/Header.tsx:79`
- `components/Header.tsx:128`
- `components/Header.tsx:155`
- `components/HeroSection.tsx:68`
- `components/FinalCTA.tsx:21`
- `components/MobileCtaBar.tsx:14`
- `components/ScrollProgress.tsx:38`
  Hover durumları var ama görünür `focus-visible` stili yok.

- `components/interactive/ContactForm.tsx:37`
  Submit sonrası başarı durumu görsel olarak değişiyor ama `aria-live="polite"` yok.

- `components/interactive/ContactForm.tsx:49`
- `components/interactive/ContactForm.tsx:65`
  Input alanlarında `autocomplete` yok. Telefon alanında `inputMode="tel"` de eksik.

### Medium

- `app/globals.css:173`
  Dark theme var ama `html` üzerinde `color-scheme: dark` tanımı yok.

- `app/globals.css:297`
- `components/Header.tsx:48`
- `components/Header.tsx:104`
- `components/interactive/ContactForm.tsx:57`
- `components/interactive/ContactForm.tsx:73`
- `components/interactive/ContactForm.tsx:88`
- `components/interactive/ContactForm.tsx:106`
  `transition: all` veya `transition-all` kullanılıyor. Guideline bunu anti-pattern sayıyor.

- `components/interactive/ContactForm.tsx:57`
- `components/interactive/ContactForm.tsx:73`
- `components/interactive/ContactForm.tsx:88`
  `focus:outline-none` var; ring mevcut ama `focus-visible` yerine `focus` kullanılmış.

- `components/interactive/ContactForm.tsx:87`
  Placeholder `...` kullanıyor; guideline `…` istiyor.

- `components/HeroSection.tsx:60`
- `components/HeroSection.tsx:73`
- `components/FinalCTA.tsx:26`
- `components/MobileCtaBar.tsx:19`
- `components/ReviewsSection.tsx:46`
  Dekoratif ikonlarda `aria-hidden="true"` eksik.

- `components/ReviewsSection.tsx:132`
  Yatay sürükleme alanında `touch-action` bilinçli ayarlanmamış.

### Low

- `components/ScrollProgress.tsx:27`
  Progress bar için `transition-all` yerine yalnızca `width` geçişi tanımlanmalı.

## Recommendations

1. Layout seviyesinde görünür bir skip link ekleyin ve `main` için `id="main-content"` tanımlayın.
2. Tüm CTA ve navigasyon bileşenlerinde ortak `focus-visible` standardı kurun.
3. Form alanlarına `autocomplete`, `inputMode`, `aria-live` ve daha net placeholder davranışı ekleyin.
4. `html { color-scheme: dark; }` ile dark mode native UI uyumunu tamamlayın.
5. Tüm `transition-all` kullanımlarını açık property listeleriyle değiştirin.
6. Dekoratif ikonlara sistematik olarak `aria-hidden="true"` verin.
7. Review carousel için `touch-action: pan-x` gibi bilinçli bir mobil etkileşim tanımı ekleyin.

## Strengths

- İçerik akışı conversion odaklı ve mantıklı.
- Hareket dili çoğunlukla `transform` ve `opacity` üzerinden gidiyor.
- Responsive kırılımlarda `min-w-0` ve yatay taşma kontrolü bilinci var.
- `/v1` varyantı route bazlı izole edildiği için karşılaştırma kontrollü yapılabiliyor.
