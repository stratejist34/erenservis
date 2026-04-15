# GA4 Etkinlik Klavuzu — Eren Servis
**Güncelleme:** 2026-04-15 · **Ölçüm ID:** G-CPHJ4QL322

---

## Event Haritası

### 1. İletişim Dönüşümleri (En Önemli)

#### `telefon_aramalari`
Telefon numarasına tıklandığında.

| Parametre | Değer Örnekleri | Açıklama |
|-----------|----------------|----------|
| `kaynak` | `hero` · `mobile_bar` · `floating_cta` | Nerede tıklandı |
| `sayfa` | `/` · `/hizmetler/dsg-kavrama-degisimi/` | Hangi sayfada |
| `semptom` | `vuruntu` · `kaymasi` · `sarsinti` | Seçili semptom ID (sadece hero) |
| `semptom_etiket` | `Vites vuruntusu` · `Kayma` | Semptomun Türkçe adı (sadece hero) |

**Nerede ateşlenir:**
- **Hero** → Büyük "Ücretsiz Ön Teşhis" butonu — semptom bilgisiyle
- **Mobile Bar** → Ekranın altındaki sabit "Ara" butonu — sayfa bilgisiyle
- **Floating CTA** → Desktop'ta sağ alttaki yüzen buton — sayfa bilgisiyle

---

#### `whatsapp_yazanlar`
WhatsApp linkine tıklandığında.

| Parametre | Değer Örnekleri | Açıklama |
|-----------|----------------|----------|
| `kaynak` | `hero` · `mobile_bar` | Nerede tıklandı |
| `sayfa` | `/` · `/blog/dsg-vuruntu-semptomlari/` | Hangi sayfada |
| `semptom` | `vuruntu` · `kaymasi` | Seçili semptom ID (sadece hero) |
| `semptom_etiket` | `Vites vuruntusu` | Semptomun Türkçe adı (sadece hero) |
| `mesaj_onizleme` | `Merhaba, aracımda vites...` | Pre-fill mesajının ilk 80 karakteri (sadece hero) |

**Nerede ateşlenir:**
- **Hero** → "WhatsApp'tan Yazın" butonu — semptom + mesaj bilgisiyle
- **Mobile Bar** → Ekranın altındaki sabit "WhatsApp" butonu — sayfa bilgisiyle

---

### 2. BrandSection Etkileşimleri

Anasayfada hero'nun altındaki **semptoma göre marka öneri bölümü**:

```
[Hero — semptom chip'leri: Vuruntu / Kayma / Sarsıntı ...]
         ↓ scroll
┌─────────────────────────────────────────┐
│  SEÇİLİ SEMPTOMA GÖRE ÖNERİLEN MARKALAR │  ← featured_brand_click
│  (VW, Audi, Skoda vb. — üstte)         │     brand_section_view
├─────────────────────────────────────────┤
│  DİĞER TÜM MARKALAR (katalog grid)      │  ← catalog_brand_click
│  (BMW, Ford, Renault vb. — altta)       │     brand_catalog_reached
└─────────────────────────────────────────┘
```

#### `brand_section_view`
Kullanıcı scroll edip BrandSection'ın %20'si ekrana girince — **bir kez** ateşlenir.

| Parametre | Açıklama |
|-----------|----------|
| `symptom` | O an seçili semptomun kısa adı |
| `scroll_depth` | 0-100 — sayfanın yüzde kaçındayken gördü |

> Soru cevaplar: "Kullanıcılar hangi semptomu seçmişken bu bölüme kadar iniyor?"

---

#### `brand_catalog_reached`
Önerilen markalar kartlarının **altındaki** katalog grid'i ekrana girince — bir kez ateşlenir.

| Parametre | Açıklama |
|-----------|----------|
| `symptom` | O an seçili semptom |
| `source` | Her zaman `'catalog'` |

> Soru cevaplar: "Önerilen markalar yetmedi, kataloga da baktı mı?"

---

#### `featured_brand_click`
Semptoma göre **önerilen** marka kartlarından birine tıklanınca.

| Parametre | Değer Örnekleri | Açıklama |
|-----------|----------------|----------|
| `brand` | `volkswagen` · `audi` · `skoda` | Tıklanan marka |
| `transmission_type` | `DSG DQ200` · `ZF 8HP` | Markanın birincil şanzıman tipi |
| `symptom` | `vuruntu` | O an seçili semptom |
| `position` | `1` · `2` · `3` | Kartın sıradaki numarası |
| `source` | `featured` | Sabit |

> Soru cevaplar: "Vuruntu seçen kaç kişi Volkswagen kartına tıkladı?"

---

#### `catalog_brand_click`
Alttaki katalog grid'indeki bir markaya tıklanınca.

| Parametre | Değer Örnekleri | Açıklama |
|-----------|----------------|----------|
| `brand` | `bmw` · `ford` · `renault` | Tıklanan marka |
| `transmission_type` | `ZF 8HP` · `PowerShift` | Markanın şanzıman tipi |
| `symptom` | `kaymasi` | O an seçili semptom |
| `position` | `1` … `N` | Katalog grid sıra numarası |
| `source` | `catalog` | Sabit |

---

#### `brand_micro_cta_click`
BrandSection içindeki "Markanızı seçin" mini butonuna tıklanınca.

| Parametre | Açıklama |
|-----------|----------|
| `symptom` | O an seçili semptom |

---

### 3. Otomatik GA4 Eventleri (kod gerektirmez)

| Event | Ne Zaman |
|-------|----------|
| `page_view` | Her sayfa yüklemesinde |
| `session_start` | Her yeni oturum başlangıcında |
| `click` | Tüm tıklamalar (generic, ayırt edilemez) |

---

## GA4'te Nasıl Görürsün?

### Temel Rapor
**Reports → Engagement → Events** → Event listesinde `telefon_aramalari` ve `whatsapp_yazanlar` görünür.
_(İlk verinin toplanması 24-48 saat sürer.)_

### Parametre Detayları — Explore
1. **Explore → Free Form** raporuna git
2. **Event Name** seç: `telefon_aramalari`
3. **Breakdown dimension** olarak `kaynak` veya `semptom_etiket` ekle
4. Örnek sonuç:

| kaynak | semptom_etiket | Etkinlik Sayısı |
|--------|----------------|-----------------|
| hero | Vites vuruntusu | 12 |
| mobile_bar | (boş) | 8 |
| floating_cta | (boş) | 3 |

### Dönüşüm Olarak İşaretle
1. **Admin → Events** → `telefon_aramalari` satırında "Mark as conversion" aç
2. Aynısını `whatsapp_yazanlar` için yap
3. Artık **Conversions** raporunda görünür, Google Ads'e bağlanabilir

---

## Kaynak Dosyalar

| Dosya | İçerik |
|-------|--------|
| `lib/analytics.ts` | Tüm `track*` fonksiyonları — yeni event eklemek için buraya yaz |
| `components/sections/BrandSection.tsx` | brand_section_view, brand_catalog_reached, featured/catalog_brand_click |
| `components/sections/HeroSectionDC.tsx` | telefon_aramalari + whatsapp_yazanlar (semptomlu) |
| `components/MobileCtaBar.tsx` | telefon_aramalari + whatsapp_yazanlar (sayfa bazlı) |
| `components/FloatingCTA.tsx` | telefon_aramalari (sayfa bazlı) |
| `app/layout.tsx` | GA4 script yüklemesi (G-CPHJ4QL322, lazyOnload) |

---

## Yeni Event Eklemek

```ts
// lib/analytics.ts içine ekle:
export function trackYeniEvent(params: { ... }) {
  track('yeni_event_adi', {
    parametre1: params.p1,
    parametre2: params.p2,
  });
}

// Kullanmak istediğin client component'te:
import { trackYeniEvent } from '@/lib/analytics';
// onClick veya useEffect içinde çağır
trackYeniEvent({ ... });
```

**Kurallar:**
- Event adları `snake_case`, Türkçe karakter yok
- Parametre değerleri `string | number | boolean` — object veya array olmaz
- SSR-safe: `track()` fonksiyonu `typeof window === 'undefined'` kontrolü içeriyor, direkt çağırabilirsin
