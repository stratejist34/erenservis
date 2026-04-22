# Eren Otomatik Şanzıman Servisi — erenservis.net

Bostancı, İstanbul merkezli Eren Otomatik Şanzıman Servisi'nin kurumsal web sitesi. DSG / DQ200 / DQ250 / DQ381 mekatronik, kavrama, volant, CVT resetleme, ZF ve konvansiyonel otomatik şanzıman tamiri odaklı.

- **Prod:** https://www.erenservis.net
- **Telefon:** 0532 715 37 51
- **Adres:** Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4, Bostancı 34744 Ataşehir/İstanbul

## Tech Stack

- **Framework:** Next.js 16 App Router + React 19 + TypeScript
- **Styling:** Tailwind CSS 4 (`@theme inline` token sistemi)
- **Render:** %100 SSG — `/api/contact` hariç hiçbir sayfa dinamik değil
- **SEO:** App Router native `app/sitemap.ts` + `app/robots.ts`, `generateMetadata`, JSON-LD schema factory (`lib/schema.ts`)
- **Hosting:** Vercel (prod `www.erenservis.net`, preview otomatik)
- **Analytics:** Google Analytics 4 (env: `NEXT_PUBLIC_GA_ID`)

## Geliştirme

```bash
npm install
npm run dev          # localhost:3000
npm run build        # prod build + type check
npm run lint         # eslint
npx tsc --noEmit     # type-only check
```

Dev server her başlangıçta `.next` klasörünü temizler — HMR artığı kalmaz.

## İçerik Mimarisi

| Route                       | Kaynak                                       |
|-----------------------------|----------------------------------------------|
| `/blog/[slug]`              | `data/posts.json` (dinamik)                  |
| `/blog/<slug>/` (statik)    | `app/blog/<slug>/page.tsx`                   |
| `/rehber/[slug]`            | `app/rehber/<slug>/page.tsx` + `data/rehber-posts.ts` indeksi |
| `/hizmetler/[slug]`         | `app/hizmetler/<slug>/page.tsx`              |
| `/sanziman-tipleri/[slug]`  | `lib/sanziman.ts` + `lib/transmissions.ts`   |
| `/arac/[marka]`             | `lib/brands.ts`                              |

Yeni içerik ekleme akışı için `CLAUDE.md` → "Yeni İçerik Ekleme — Zorunlu Kontrol Listesi".

## Tek Kaynak (Single Source of Truth)

- **Markalar:** `lib/brands.ts` (BRANDS + helpers)
- **Şanzıman aileleri:** `lib/sanziman.ts` + `lib/transmissions.ts`
- **Schema factory:** `lib/schema.ts` (hardcoded JSON-LD yazma — her sayfa buradan import eder)
- **FAQ içeriği:** `lib/sanziman-faq.ts` (slug → Q/A listesi)

## Deploy Notları

- `main` branch'e push → Vercel prod'a otomatik deploy eder
- `public/robots.txt`, `public/sitemap.xml` **YOK** — App Router native, `app/robots.ts` ve `app/sitemap.ts` runtime'da üretir
- Contact form webhook'u: `CONTACT_WEBHOOK_URL` + opsiyonel `CONTACT_WEBHOOK_SECRET` (HMAC-SHA256 imza) env'leri Vercel dashboard'dan ayarlanır

## Kurumsal Kurallar

`CLAUDE.md` dosyası Claude Code oturumlarında içerik ve kod standartlarını yönlendiren tek kaynaktır. Özellikle:

- **Garanti süresi site genelinde her zaman "6 ay"** — asla "12 ay" / "1 yıl" yazılmaz
- Konum her zaman "Bostancı" — "Tuzla" YAZILMAZ
- Yeni sayfa eklerken metadata + schema + FAQ kayıt listesi uygulanır
