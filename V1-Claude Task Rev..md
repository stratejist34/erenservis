# Eren Servis — V1 Lab Migration Prompt
# Claude Code / Cursor için kapsamlı uygulama talimatı

---

## BAŞLAMADAN ÖNCE

1. `CLAUDE.md` dosyasını oku — proje kuralları orada
2. `app/` dizin yapısını tara — mevcut page.tsx dosyalarını listele
3. `components/` klasörünü tara — hangi bileşenler var, not et
4. `tailwind.config.ts` ve `globals.css` dosyalarını oku — mevcut token sistemini anla
5. Her task'tan önce ilgili dosyayı oku, sonra değiştir
6. Dosya bulamazsan tahmin etme — dur ve sor

Genel kural: Minimum değişiklik. Sadece task'ın gerektirdiği şeyi değiştir.
TypeScript hatası bırakma. console.log bırakma.
Her task sonunda: "TASK N tamamlandı: [ne yaptın]" yaz.

---

## BÖLÜM 1 — ACİL BUGLAR (Önce Bunlar)

### TASK 1 — Debug elementlerini temizle

Aşağıdaki elementleri bul ve tamamen kaldır:

**Header/Navbar'da:**
- `V1 LAB` etiketi (logo yanında badge olarak duruyor)
- `V1 LAB / 0%` veya `V1 LAB / 82%` gibi sağ üst köşedeki progress göstergesi
- `Intake Hatti` yazan CTA butonu varsa → `0216 577 51 51` telefon CTA'sına dönüştür (V1 Orijinal'deki gibi)

**Footer'da:**
- `INTAKE DOCK ACTIVE` etiketi
- `PRECISION CONSOLE FOOTER` metni
- `V1 LAB` footer badge'i
- Sol kolondaki bozuk/dağınık metin render'ı (her kelime ayrı satırda görünüyor — layout bug)

**Global:**
- `console.log` içeren her satır
- `// TODO`, `// FIXME`, `// DEBUG` yorumları

---

### TASK 2 — Risk kartı CTA bug düzeltmesi

Anasayfada "ŞANZIMAN ARIZASI GECİKTİKÇE BÜYÜR." başlıklı risk bölümünü bul.
Sağ tarafta 3 buton yan yana sıkışmış durumda:
- "Ücretsiz Ön Kontrol"
- "Hemen Ara"
- "Ücretsiz Ön Kontrol Al" (bu üçüncüsü tekrar ve kırık — "Al" kelimesi alta düşüyor)

Düzeltme: Üçüncü butonu tamamen kaldır. 2 buton kalmalı:
```
[Ücretsiz Ön Kontrol →]  [📞 Hemen Ara]
```
Layout: `flex gap-3` veya `grid grid-cols-2 gap-3` — hangisi mevcut stille uyumluysa.

---

### TASK 3 — Hizmetler sayfası çift başlık bug

`app/hizmetler/page.tsx` aç.
"Şanzıman Hizmetlerimiz" başlığı ve altındaki description 2 kez render ediliyor.
Hangisi page hero'sundan, hangisi list section'dan geliyor tespit et.
List section'daki kopyayı kaldır — page hero kalmalı.

---

## BÖLÜM 2 — RENK SİSTEMİ

### TASK 4 — Semantic renk token'ları ekle

`tailwind.config.ts` veya `globals.css`'i aç.
Mevcut renk sistemine şunları EKLE (var olanları değiştirme):

```css
/* globals.css içine */
:root {
  --color-gold-action: #C9A86C;    /* CTA butonları, fiyat vurguları */
  --color-gold-info: #8A7040;      /* Badge, etiket, yardımcı metin */
  --color-risk-high: #E24B4A;      /* Kritik/Yüksek öncelik */
  --color-risk-medium: #BA7517;    /* Takip gerekli */
  --color-risk-low: #639922;       /* Normal/OK durumu */
}
```

```js
// tailwind.config.ts extend.colors içine
'gold-action': 'var(--color-gold-action)',
'gold-info': 'var(--color-gold-info)',
'risk-high': 'var(--color-risk-high)',
'risk-medium': 'var(--color-risk-medium)',
'risk-low': 'var(--color-risk-low)',
```

Mevcut `gold` veya `primary` kullanımlarına dokunma. Sadece yeni token'lar.

---

### TASK 5 — Risk fiyat satırları renk kodlama

Risk büyüme bileşeninde 3 fiyat satırını bul:

```
ERKEN: 8.000 - 15.000 TL   → text-risk-low   (yeşil)
GEÇ: 35.000 - 80.000 TL    → text-risk-medium (amber)
REVİZYON: 120.000+ TL      → text-risk-high   (kırmızı)
```

Sadece text rengi. Layout, font-size, padding dokunma.
Eğer inline style kullanılmışsa Tailwind class'a dönüştür.

---

### TASK 6 — Badge semantic renk sistemi

Teşhis/belirti bileşeninde YÜKSEK / ORTA / TAKİP GEREKLİ badge'lerini bul.

Mevcut class'ları şunlarla güncelle:

```
YÜKSEK ÖNCELİK badge:
  bg: bg-risk-high/15
  text: text-risk-high
  border: border-risk-high/30

TAKİP GEREKLİ badge:
  bg: bg-risk-medium/15
  text: text-risk-medium
  border: border-risk-medium/30

NORMAL / OK badge:
  bg: bg-risk-low/15
  text: text-risk-low
  border: border-risk-low/30
```

Eğer bu badge'ler bir `variants` map'i ile üretiliyorsa map'i güncelle.
Eğer hardcoded ise her birini bul ve güncelle.

---

## BÖLÜM 3 — TİPOGRAFİ

### TASK 7 — Display başlıklara letter-spacing

`globals.css` veya typography utility'lerine:

```css
.heading-display {
  letter-spacing: -0.02em;
}
```

Veya Tailwind `tracking-tight` (-0.025em) kullan.

Uygulanacak yerler:
- Hero ana başlık (h1 seviyesi)
- Section başlıkları (h2 seviyesi, büyük olanlar)
- Risk kartı başlığı "ŞANZIMAN ARIZASI GECİKTİKÇE BÜYÜR."

Uygulanmayacak yerler:
- Kart içi küçük başlıklar
- Badge ve etiket metinleri
- Body metin

---

### TASK 8 — Teknik sayfa line-height

Şanzıman Rehberi ve hizmet detay sayfalarındaki body metin bloklarına:

```css
.prose-technical {
  line-height: 1.75;
}
```

veya Tailwind: `leading-[1.75]`

DSG detay sayfası, ZF sayfası, hizmet detay sayfaları etkilenmeli.
Anasayfa body metinlerine dokunma.

---

### TASK 9 — Teknik sayılara tabular-nums

DQ200, ZF 6HP, 60.000 km, TL miktarları içeren badge ve etiketlere:

```css
font-variant-numeric: tabular-nums;
```

Tailwind: `tabular-nums` utility class.

Uygulanacak yerler: platform tag'leri (DQ200, DQ250, ZF 6HP vb.), fiyat değerleri, km değerleri.

---

## BÖLÜM 4 — ANASAYFA AKIŞ DÜZENLEMESİ

### TASK 10 — Section sırasını düzenle

`app/page.tsx` dosyasını aç. Section/bileşen sırasını şu şekilde ayarla:

```
1. <HeroSection />          ← yerinde kalıyor
2. <RiskPriceSection />     ← yerinde kalıyor
3. <SymptomDiagnosis />     ← YUKARIYA TAŞI (şu an hizmetlerden sonra)
4. <ServicesSection />      ← aşağıya iniyor
5. <BrandLogos />           ← ServicesSection içine veya hemen altına al
6. <TrustFactors />         ← yerinde
7. <ProcessSteps />         ← yerinde
8. <Testimonials />         ← yerinde
9. <FinalCTA />             ← yerinde
```

Sadece JSX sırasını değiştir. Bileşenlerin içine girme.
Import sırasını da aynı şekilde güncelle.

---

### TASK 11 — Hero stat bar görsel ağırlığı

Hero bölümündeki istatistik bar'ı bul (15+, 5000+, 2 Yıl, 7/24).

Değişiklikler:
- Sayı değerleri: `text-2xl font-bold text-gold-action` (veya mevcut gold token)
- Label metinleri (Yıl Deneyim, Tamamlanan İş vb.): `text-xs text-white/50` — mevcut boyutta kalabilir
- Container: `border border-white/10 rounded-xl` ekle (hafif çerçeve)

---

### TASK 12 — Fiyat kartının altına CTA ekle

Risk fiyat bileşeninin en altına, mevcut butonların hemen altına yeni bir satır ekle:

```tsx
<p className="text-xs text-white/40 text-center mt-3">
  Erken teşhis, tam revizyona giden zinciri keser.{' '}
  <a
    href="tel:02165775151"
    className="text-gold-action underline hover:text-gold-action/80 transition-colors"
  >
    Hemen ara →
  </a>
</p>
```

Büyük buton değil — küçük, şeffaf, inline link. Urgency yaratır ama tasarımı bozmaz.

---

## BÖLÜM 5 — FLOATING CTA

### TASK 13 — Sticky floating CTA genişlet

Şu an sadece Şanzıman Rehberi detay sayfalarında olan "Arıza Tespiti — Bizi Ara" floating butonu var.

**Adım 1:** Bu bileşeni bul. Eğer sayfa içinde inline yazılmışsa ayrı bir component'e çıkar:
```
components/ui/FloatingCTA.tsx
```

**Adım 2:** `app/layout.tsx` içine ekle.

**Adım 3:** Şu pathname'lerde GİZLE:
```tsx
const hideOn = ['/', '/iletisim', '/hakkimizda']
```

`usePathname()` hook'u ile kontrol et.

**Adım 4:** Diğer tüm sayfalarda göster.

Not: `position: fixed` kullan, `bottom-6 right-6`, `z-50`.

---

## BÖLÜM 6 — SÜREÇ BÖLÜMÜ

### TASK 14 — Süreç adımları mikro CTA

Süreç bileşenini bul (4 adım: Bizi Arayın → Ücretsiz Ön Teşhis → Net Fiyat Teklifi → Onarım ve Teslim).

3. adımın (Net Fiyat Teklifi) içine veya description metninin hemen altına:

```tsx
<a
  href="tel:02165775151"
  className="inline-flex items-center gap-1 text-xs text-gold-action/70 hover:text-gold-action transition-colors mt-2"
>
  Hemen teklif al →
</a>
```

Sadece bu adıma ekle. Diğer adımlara dokunma.

---

## BÖLÜM 7 — ŞANZİMAN REHBERİ

### TASK 15 — Teknik şema tıklanabilirliği

DSG detay sayfasını bul (`app/sanziman-rehberi/dsg-s-tronic/page.tsx` veya benzeri).
İçindeki teknik akış şemasını bul (Motor → Çift Kavrama → Dişli Kutusu → Mekatronik → Çıkış).

"Mekatronik" kutusuna link ekle:

```tsx
import Link from 'next/link'

// Mekatronik kutusunu bul ve Link ile sar:
<Link
  href="/hizmetler/dsg-mekatronik-kart"
  className="cursor-pointer hover:opacity-80 transition-opacity"
>
  {/* Mevcut Mekatronik kutu içeriği */}
</Link>
```

Diğer kutular için uygun iç linkler varsa ekle:
- "DSG & S-Tronic Şanzıman" → `/hizmetler/dsg-sanziman-tamiri`
- "Kavrama" → `/hizmetler/dsg-kavrama-degisimi`

Yoksa sadece Mekatronik ile başla.

---

### TASK 16 — Rehber sayfası çift içerik katmanı

`app/sanziman-rehberi/page.tsx` aç.
Hem üst özet liste (4 şanzıman tipi kartı) hem de filtreli grid aynı içeriği gösteriyor.

Tercih: Üst özet listeyi kaldır, sadece filtreli grid (Tümü / Çift Kavramalı / Tam Otomatik / CVT) bırak.

Eğer üst liste farklı bilgi içeriyorsa (farklı içerik, farklı layout): üst kısım summary olarak tut ama "Detaylar için aşağı kaydırın ↓" gibi bir yönlendirme ekle — duplicate değil hiyerarşik kullanım.

---

## BÖLÜM 8 — HİZMETLER SAYFASI

### TASK 17 — ZF ve CVT kartlarına bağlam metni

Hizmetler sayfasında ZF ve CVT kartlarını bul.
Başlığın hemen altına tek satır bağlam metni ekle:

```
ZF Otomatik Şanzıman altına:
<p className="text-xs text-white/40 mt-1">BMW, Audi, Land Rover ve premium segment araçlar</p>

CVT Şanzıman Servisi altına:
<p className="text-xs text-white/40 mt-1">Nissan, Toyota, Honda, Subaru CVT platformları</p>
```

---

## BÖLÜM 9 — HEADER

### TASK 18 — Header CTA güçlendir

Header'daki telefon butonunu bul (sağ üstte "0216 577 51 51").
Mevcut stil: outline/bordered.

Güncelle:
```
Solid dolgu + gold arka plan
bg-gold-action text-stone-900 hover:bg-gold-action/90
```

veya mevcut primary button class'ı varsa onu kullan.
Telefon ikonu ve numara kalmalı.

---

## BÖLÜM 10 — MOBİL BREAKPOINT

### TASK 19 — 3 kolon layout'ları stack'le

V1 Lab'ın 3 kolonlu section'larını bul.
Her `grid-cols-3` veya `flex` 3 kolon layout için:

```
Mevcut:          grid grid-cols-3 gap-8
Güncellenmiş:    grid grid-cols-1 md:grid-cols-3 gap-8
```

Etkilenen section'lar (isimler farklı olabilir):
- Teşhis Konsolu (açıklama + liste + çıktı paneli)
- Servis Hatları (açıklama + DSG featured + sağ sütun)
- Operasyon Standartları
- Servis Akışı pipeline

Mobilde stack sırası: sol açıklama → orta featured → sağ liste (yukarıdan aşağıya).

---

### TASK 20 — Teşhis Konsolu mobil accordion

Teşhis/belirti bileşeninde sol liste + sağ detay panel layout'unu bul.

Desktop: 2 kolon (liste sol, panel sağ) — değiştirme.

Mobile (`md` breakpoint altı):
```
Liste → tam genişlik, her satır tıklandığında altında panel açılıyor
Panel → accordion gibi davranıyor, seçilen satırın altında expand oluyor
```

Implementation:
```tsx
const [selected, setSelected] = useState(0)

// Liste item'ları:
<div onClick={() => setSelected(i)} className="cursor-pointer">
  {item}
</div>

// Panel (mobilde liste item'ının hemen altında):
{selected === i && (
  <div className="md:hidden">
    <DiagnosisPanel data={items[i]} />
  </div>
)}

// Desktop panel (sağ sütunda):
<div className="hidden md:block">
  <DiagnosisPanel data={items[selected]} />
</div>
```

---

## ÖZET — TASK SIRASI VE ÖNCELİK

| # | Task | Öncelik | Süre |
|---|------|---------|------|
| 1 | Debug elementleri temizle | 🔴 Kritik | 20 dak |
| 2 | Risk kartı 3 buton bug | 🔴 Kritik | 10 dak |
| 3 | Hizmetler çift başlık | 🔴 Kritik | 10 dak |
| 4 | Semantic renk token'ları | 🟠 Yüksek | 15 dak |
| 5 | Risk fiyat renk kodlama | 🟠 Yüksek | 10 dak |
| 6 | Badge semantic renk | 🟠 Yüksek | 20 dak |
| 10 | Anasayfa section sırası | 🟠 Yüksek | 15 dak |
| 11 | Hero stat bar ağırlığı | 🟠 Yüksek | 15 dak |
| 13 | Floating CTA genişlet | 🟠 Yüksek | 30 dak |
| 7 | Letter-spacing | 🟡 Orta | 10 dak |
| 8 | Line-height teknik | 🟡 Orta | 10 dak |
| 12 | Fiyat kartı inline CTA | 🟡 Orta | 10 dak |
| 14 | Süreç mikro CTA | 🟡 Orta | 10 dak |
| 15 | Şema tıklanabilirlik | 🟡 Orta | 20 dak |
| 16 | Rehber çift katman | 🟡 Orta | 15 dak |
| 17 | ZF/CVT bağlam metni | 🟡 Orta | 10 dak |
| 18 | Header CTA solid | 🟡 Orta | 10 dak |
| 19 | 3 kolon mobil stack | 🟡 Orta | 30 dak |
| 9 | Tabular-nums | 🔵 Düşük | 10 dak |
| 20 | Teşhis mobil accordion | 🔵 Düşük | 45 dak |

**Toplam tahmini süre:** 4-5 saat (paralel çalışmayla 2-3 saat)

---

## CLAUDE CODE'A ÖZEL TALİMATLAR

```
Bu prompt'u okuduktan sonra şunu yap:

1. CLAUDE.md'yi oku
2. app/ ve components/ dizin yapısını listele
3. Hangi task'ların doğrudan uygulanabilir olduğunu, hangilerinin
   önce dosya araması gerektirdiğini belirt
4. Kritik 3 task'tan başla (Task 1, 2, 3)
5. Her task'ı tamamladıktan sonra sonraki task'a geç
6. Bir task'ta ilgili dosyayı bulamazsan DUR ve sor —
   tahmin ederek yanlış dosyayı değiştirme

Lighthouse 100 hedefi korunmalı. Yeni animasyon veya
kütüphane ekleyeceksen bundle etkisini önce belirt.

TypeScript strict mode aktifse type hatası bırakma.
Tüm string'lerde mevcut i18n yapısı varsa ona uy.
```
