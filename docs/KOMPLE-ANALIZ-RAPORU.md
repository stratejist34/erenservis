# Eren Servis - Komple Site Analizi

**Tarih:** 2026-04-22  
**Analist:** Claude Sonnet 4.5  
**Kapsam:** Kod kalitesi, mantık hataları, eksikler, öneriler

---

## 🔴 KRİTİK MANTIK HATALARI

### 1. SymptomContext - Router History Kirliliği
**Dosya:** `contexts/SymptomContext.tsx:36`  
**Sorun:**
```typescript
router.replace(`?${params.toString()}`, { scroll: false });
```
- Her symptom değişiminde `replace` kullanılıyor
- Kullanıcı geri tuşuna bastığında önceki symptom yerine başka sayfaya gidiyor
- History navigasyonu bozuk

**Çözüm:**
```typescript
// Shallow routing kullan, history'yi kirletme
router.push(`?${params.toString()}`, { scroll: false, shallow: true });
```

---

### 2. Contact API Rate Limiting - Serverless Uyumsuzluğu
**Dosya:** `app/api/contact/route.ts:15-16`  
**Sorun:**
```typescript
const rateLimitMap = globalStore.__contactRateLimitMap ?? new Map();
```
- Vercel serverless'de her request yeni instance
- `globalThis` ile shared state çalışmaz
- Rate limiting production'da işlevsiz

**Çözüm:**
```typescript
// Redis veya Vercel KV kullan
import { kv } from '@vercel/kv';
const key = `rate:${ip}`;
const count = await kv.incr(key);
if (count === 1) await kv.expire(key, 60);
if (count > 3) return 429;
```

---

### 3. Header Active Link - Nested Route Çakışması
**Dosya:** `components/Header.tsx:40`  
**Sorun:**
```typescript
return pathname.startsWith(`${normalized}/`);
```
- `/hizmetler/` ve `/hizmetler/dsg-sanziman-tamiri/` her ikisi de active olur
- Navigation state karışık görünür

**Çözüm:**
```typescript
// Exact match veya immediate child kontrolü
const pathSegments = pathname.split('/').filter(Boolean);
const hrefSegments = normalized.split('/').filter(Boolean);
return pathSegments.length === hrefSegments.length && 
       pathname.startsWith(normalized);
```

---

### 4. SYMPTOMS Data - Brand Slug Hardcoding
**Dosya:** `data/symptoms.ts:46`  
**Sorun:**
```typescript
slugs: ['volkswagen', 'audi', 'skoda', 'seat']
```
- Brand slugları hardcoded
- `lib/brands.ts` değişirse senkronizasyon bozulur
- Data consistency garantisi yok

**Çözüm:**
```typescript
// lib/brands.ts'den import et
import { BRANDS } from '@/lib/brands';
const vwGroupSlugs = BRANDS.filter(b => b.group === 'vw').map(b => b.slug);
```

---

## 🟠 ORTA SEVİYE KOD HATALARI

### 5. Build Script - Aggressive Memory Allocation
**Dosya:** `package.json:7`  
```json
"build": "cross-env \"NODE_OPTIONS=--max-old-space-size=8192 ..."
```
- 8GB RAM allocation build için aşırı
- Memory leak sinyali
- Optimizasyon gerekli

**Öneri:** 4096MB'a düşür, bundle size'ı analiz et.

---

### 6. Dev Script - .next Silme Stratejisi
**Dosya:** `package.json:6`  
```json
"dev": "node -e \"require('fs').rmSync('.next', {recursive:true,force:true})\" && next dev"
```
- Her dev start'ta .next siliniyor
- HMR cache avantajı kayboluyor
- İlk start yavaş

**Öneri:** `.next` silmeyi kaldır, sorun varsa `next build` öncesi temizle.

---

### 7. CSS - Duplicate Reveal Animations
**Dosya:** `app/globals.css:214, 244`  
- `.reveal` animasyonu hem `@layer base` hem `@layer utilities`'de tanımlı
- Conflicting styles
- Hangi layer öncelikli belirsiz

**Çözüm:** Birini kaldır, sadece utilities layer'da tut.

---

### 8. TypeScript - Gevşek Type Guards
**Dosya:** `lib/utils.ts`  
- Sadece `cn` utility var
- Type guards yok
- Runtime type validation yok

**Öneri:**
```typescript
export function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${x}`);
}

export function isDefined<T>(val: T | null | undefined): val is T {
  return val !== null && val !== undefined;
}
```

---

## 🟡 EKSİKLİKLER

### 9. Error Tracking - Monitoring Yok
- Sadece `console.error` kullanılıyor
- Production'da error tracking yok
- Debug zorlaşıyor

**Öneri:** Sentry entegrasyonu
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

---

### 10. Testing - Hiç Test Yok
- Unit test yok
- Integration test yok
- E2E test yok

**Öneri:**
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
npm install -D @playwright/test
```

---

### 11. SEO - Schema Tutarsızlığı
- Bazı sayfalar JSON-LD kullanıyor
- Bazıları kullanmıyor
- Standard pattern yok

**Öneri:** Her page.tsx'te schema zorunlu kıl, utility fonksiyonu oluştur.

---

### 12. Accessibility - ARIA Eksik
- Minimum aria-label
- Keyboard navigation test edilmemiş
- Focus management yok

**Öneri:**
```bash
npm install -D @axe-core/react
npm install -D eslint-plugin-jsx-a11y
```

---

### 13. Environment Validation - Runtime Check Yok
**Dosya:** `.env.example`  
- Env varları validate edilmiyor
- Missing variable runtime'da fail ediyor

**Öneri:**
```typescript
// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
  CONTACT_WEBHOOK_URL: z.string().url(),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
});

export const env = envSchema.parse(process.env);
```

---

### 14. Performance - Bundle Analizi Yok
- Bundle size bilinmiyor
- Code splitting planı yok
- Lazy loading stratejisi yok

**Öneri:**
```bash
npm install -D @next/bundle-analyzer
```

```typescript
// next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
```

---

### 15. Development Experience - Git Hooks Yok
- Pre-commit lint yok
- Commit message standardı yok
- Auto-formatting yok

**Öneri:**
```bash
npm install -D husky lint-staged
npm install -D @commitlint/cli @commitlint/config-conventional
npx husky install
```

---

## 🟢 İYİ TARAFLAR

✅ Next.js 16 + React 19 modern stack  
✅ TypeScript strict mode aktif  
✅ Tailwind v4 kullanımı  
✅ Image optimization doğru yapılandırılmış  
✅ Security headers mevcut  
✅ Rate limiting var (serverless dışında çalışıyor)  
✅ SEO fundamentals tamam (metadata, sitemap, robots)  
✅ Analytics entegrasyonu var  
✅ Responsive design  
✅ Dark mode native

---

## 📋 ÖNCELİKLENDİRİLMİŞ AKSIYONLAR

### 🔥 Hemen Yap (1-3 gün)
1. Rate limiting'i Vercel KV'ye taşı
2. SymptomContext router history'yi düzelt
3. TypeScript strictness arttır (`noUncheckedIndexedAccess: true`)
4. Sentry ekle
5. Environment validation (zod)

### 🚀 Kısa Vade (1-2 hafta)
6. Vitest + React Testing Library ekle, critical path test et
7. Bundle analyzer ekle, lazy loading stratejisi oluştur
8. Pre-commit hooks (husky + lint-staged)
9. Accessibility audit (axe-core)
10. Error boundary'leri network errors için genişlet

### 🎯 Orta Vade (1 ay)
11. E2E testler (Playwright)
12. Performance monitoring (Vercel Analytics veya Sentry Performance)
13. Real User Monitoring
14. PWA manifest + service worker
15. i18n altyapısı (next-intl)

### 🌟 Uzun Vade (3+ ay)
16. Storybook component documentation
17. OpenAPI/Swagger API docs
18. GraphQL endpoint (ihtiyaç varsa)
19. Micro-frontend architecture planning
20. Multi-region deployment

---

## 📊 SKOR

**Kod Kalitesi:** 7.5/10  
**Performans:** 8/10  
**Güvenlik:** 7/10  
**SEO:** 8.5/10  
**Erişilebilirlik:** 6/10  
**Test Coverage:** 0/10  
**Developer Experience:** 6.5/10  

**Genel:** **7.2/10** — İyi temel, iyileştirme alanı var

---

## 💡 SON NOTLAR

1. **Rate limiting** en kritik sorun — production'da çalışmıyor
2. **Testing** eksikliği risk — refactoring zor
3. **Monitoring** yok — production debug imkansız
4. **Code splitting** yok — initial bundle büyük olabilir
5. **Type safety** iyi ama daha strict olabilir

Ekstra soru varsa veya belirli bir alanı derinlemesine incelememi istersen söyle.