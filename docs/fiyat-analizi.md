# Eren Servis — Site Geneli Fiyat Envanteri

> Derleme tarihi: 2026-04-14  
> Kaynak: tüm hizmetler, blog ve FAQ sayfaları tarandı.

---

## 1. Hero Bar (Ana Sayfa / HeroSectionDC.tsx)

| Segment | Aralık |
|---------|--------|
| Mekatronik onarım (küçük) | 8.000 – 15.000 TL |
| Kavrama + volant | 35.000 – 80.000 TL |
| Komple revizyon | 120.000 TL+ |

---

## 2. DSG Mekatronik Kart Tamiri (`/hizmetler/dsg-mekatronik-kart/`)

| Model | Tamir (devre) | Değişim (sıfır) |
|-------|--------------|-----------------|
| DQ200 | 8.000 – 14.000 TL | 28.000 – 42.000 TL |
| DQ250 | 10.000 – 18.000 TL | 32.000 – 48.000 TL |
| DQ381 | — | 38.000 – 58.000 TL |

---

## 3. Blog: DSG Mekatronik Arıza Fiyatı (`/blog/dsg-mekatronik-ariza-fiyati/`)

| İşlem | DQ200 | DQ250 | DQ381 |
|-------|-------|-------|-------|
| Kart Onarımı | 8.500 – 14.500 TL | 10.000 – 17.000 TL | — |
| Basınç Tüpü Değişimi | 9.000 – 13.000 TL | — | — |
| Hidrolik Revizyon | 16.000 – 28.000 TL | — | — |
| Sıfır Orijinal Ünite | 42.000 – 52.000 TL | — | — |

### FAQ (aynı blog sayfası)

| Soru | Fiyat |
|------|-------|
| DQ200 mekatronik kart tamiri | 8.500 – 18.000 TL |
| Sıfır orijinal ünite (DQ200) | 50.000 – 65.000 TL |

---

## 4. DSG Kavrama Değişimi (`/hizmetler/dsg-kavrama-degisimi/`)

| Model | Orijinal | Muadil |
|-------|----------|--------|
| DQ200 | 24.000 – 28.000 TL | 18.000 – 22.000 TL |
| DQ250 | 30.000 – 35.000 TL | 22.000 – 27.000 TL |
| DQ381 | 20.000 – 27.000 TL | 15.000 – 22.000 TL |

---

## 5. Blog: Otomatik Şanzıman Tamiri Fiyat (`/blog/otomatik-sanziman-tamiri-fiyat/`)

| İşlem | Fiyat |
|-------|-------|
| DSG Kavrama Değişimi | 18.500 – 32.000 TL |
| DSG Mekatronik | 9.000 – 18.000 TL |
| DSG Komple | 45.000 – 75.000 TL |
| CVT Revizyon | 35.000 – 55.000 TL |
| ZF Revizyon | 50.000 – 90.000 TL |

---

## 6. Kavrama FAQ (genel site)

| Model | Kavrama Değişimi |
|-------|-----------------|
| DQ200 | 18.000 – 28.000 TL |
| DQ250 | 22.000 – 35.000 TL |
| DQ381 | 15.000 – 25.000 TL |

---

## 7. ReviewsSection — Rakip Karşılaştırması

| | Rakip | Eren Servis |
|--|-------|-------------|
| İşlem (mekatronik onarım) | 35.000 TL | 12.000 TL |

---

## 8. Diğer Hizmetler

| Hizmet | Fiyat |
|--------|-------|
| DSG Basınç Tüpü Değişimi | 9.000 – 13.000 TL |
| Şanzıman Yağı Değişimi | ~2.500 – 5.000 TL (dolaylı referans) |

---

---

# Fiyat Tutarsızlık Analizi

## ✅ Tutarlı Olan Kalemler

- **DSG Mekatronik Kart Tamiri** (hizmetler sayfası vs blog): DQ200 için 8.000–14.000 vs 8.500–14.500 — pratik olarak aynı.
- **Hero Bar segmentleri**: 8–15K onarım / 35–80K kavrama-volant / 120K+ komple — genel tabloya uyuyor.
- **ZF > DSG komple > CVT sıralaması**: Makul (ZF 50–90K > DSG komple 45–75K > CVT 35–55K).

---

## ⚠️ Tutarsızlıklar

### 1. Mekatronik Kart — Sıfır Ünite Fiyatı (ÖNEMLİ)

| Kaynak | DQ200 Sıfır Orijinal Ünite |
|--------|---------------------------|
| Blog fiyat tablosu | 42.000 – 52.000 TL |
| Blog FAQ | 50.000 – 65.000 TL |
| Fark | ~8.000 – 13.000 TL |

**Sorun**: Aynı blog sayfasında tablo ile FAQ çelişiyor. Kullanıcı ikisini de okuyabilir; güven kaybı riski yüksek.  
**Öneri**: Sıfır ünite için tek aralık belirle → 45.000 – 65.000 TL (tabloyu kaldır veya FAQ ile birleştir).

---

### 2. Kavrama Değişimi — DQ200 Aralıkları Uyumsuz

| Kaynak | DQ200 Kavrama |
|--------|--------------|
| Hizmetler sayfası (orijinal) | 24.000 – 28.000 TL |
| FAQ | 18.000 – 28.000 TL |
| Blog genel tablo | 18.500 – 32.000 TL |

**Sorun**: Hizmetler sayfası alt sınırı 24K, FAQ 18K, blog 18.5K diyor. 24K ile 18K arasında %33 fark var.  
**Öneri**: Alt sınırı hizmetler sayfasında "muadil parça" fiyatına indirmek ya da FAQ'u revize etmek gerekiyor.

---

### 3. Kavrama Değişimi — DQ250 Üst Sınırı

| Kaynak | DQ250 Kavrama Üst Sınır |
|--------|------------------------|
| Hizmetler sayfası (orijinal) | 35.000 TL |
| Blog genel tablo | 32.000 TL |
| FAQ | 35.000 TL |

**Sorun**: Blog 32K diyor, hizmetler ve FAQ 35K. Küçük fark ama kullanıcı karıştırabilir.  
**Öneri**: Blog tablosunu 35.000'e çek.

---

### 4. DQ381 Kavrama — Hizmetler vs FAQ Uyumsuzluğu

| Kaynak | DQ381 Kavrama |
|--------|--------------|
| Hizmetler sayfası (orijinal) | 20.000 – 27.000 TL |
| FAQ | 15.000 – 25.000 TL |
| Fark | 5.000 TL alt sınır, 2.000 TL üst sınır |

**Sorun**: DQ381 hizmetler fiyatı DQ250'den (30–35K) düşük gösteriliyor — bu mantıklı değil. DQ381 daha yüksek torklu, daha büyük platform.  
**Öneri**: DQ381 kavrama fiyatını DQ250'nin üstüne taşı → 32.000 – 42.000 TL arası daha gerçekçi.

---

### 5. ReviewsSection Rakip Karşılaştırması (RİSK)

| | Rakip | Eren Servis |
|--|-------|-------------|
| Mekatronik (aynı iş?) | 35.000 TL | 12.000 TL |

**Sorun**: 35.000 TL rakip fiyatı "sıfır ünite" fiyatıyken Eren'in 12.000 TL fiyatı "onarım" fiyatı olabilir — elmalarla armutlar karşılaştırması. Ziyaretçi "rakip 3x pahalı" sanıp gelir ama sözleşmede kapsam netleşince hayal kırıklığı yaratabilir.  
**Öneri**: Karşılaştırma metnini netleştir: "Sıfır ünite takma yerine devre onarımı: 12.000 TL" şeklinde.

---

## Özet Tablo

| # | Sorun | Etki | Aciliyet |
|---|-------|------|----------|
| 1 | Sıfır ünite aralığı aynı sayfada çelişiyor | Güven kaybı | 🔴 Yüksek |
| 2 | DQ200 kavrama alt sınırı 3 sayfada farklı | Fiyat karmaşası | 🔴 Yüksek |
| 3 | DQ250 kavrama üst sınırı blog vs hizmetler | Küçük uyumsuzluk | 🟡 Orta |
| 4 | DQ381 kavrama DQ250'den ucuz gösteriliyor | Mantıksal hata | 🔴 Yüksek |
| 5 | Rakip karşılaştırması kapsam belirsiz | Beklenti yanlışlığı | 🟡 Orta |
