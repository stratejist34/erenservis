# V1 İçerik & Oran Düzeltme Planı

## Hedef
GT Codex'in yakaladığı görsel çizgiyi koru:
- Büyük radius'lu derinlikli kartlar (`rounded-[28px-32px]`, `v1-depth-card`)
- Hover shine efekti (`v1-signal-card`)
- Lucide ikonlar
- Koyu-açık alternating section arka planları
- Sticky sidebar + bento grid yapısı

Düzelt:
- Türkçe karakter hataları (ş/ı/ğ/ü/ö/ç kayıpları)
- Demo/placeholder metinler → gerçek işletme bilgisi
- Abartılı uzun bloklar → orantılı yapı
- Uydurma hizmet adları → gerçek Eren Servis hizmetleri

---

## FAZ 1 — `HeroSectionV1.tsx`

**Dosya:** `components/v1/HeroSectionV1.tsx`

### Yapılacaklar

#### 1A. H1 ve tagline — gerçek içerik
Mevcut: `"Otomatik Sanziman Uzmanları — Bostancı, Istanbul"`  
→ `"Otomatik Şanzıman Servisi — Bostancı, İstanbul"`

- H1: `"DSG, CVT ve ZF Şanzıman Tamiri"` (şu an ne yazıyor kontrol et)
- Tagline: `"Bostancı'nın otomatik şanzıman uzmanı. 15+ yıl deneyim, 2 yıl işçilik garantisi."`
- Terminal satırları gerçek veriye çevrilecek (şu an demo içerik var)

#### 1B. Stat satırları — gerçek rakamlar
```
15+   → Yıl Deneyim
5.000+ → Tamamlanan İş  
2 Yıl  → İşçilik Garantisi
7/24   → Destek Hattı
```

#### 1C. CTA butonları
- Birincil: `"Hemen Ara"` → `tel:+902165775151`
- İkincil: `"WhatsApp'tan Yaz"` → `https://wa.me/905327153751`

#### 1D. Türkçe karakter düzeltmeleri (tüm metinlerde)
- `sanziman` → `şanzıman`
- `uzman` → uzman (bu doğru)
- `Bostanci` → `Bostancı`
- `Teslim Kaydi`, `Kabul Hatti` vb. → düzelt

#### 1E. Oran/boyut ayarı
- Hero min-height: `100dvh` yeterli, fazla padding'i kıs
- İç kart padding: `p-6 md:p-8` (şu an `p-8 md:p-10` ise küçült)

---

## FAZ 2 — `SymptomSelectorV1.tsx`

**Dosya:** `components/v1/SymptomSelectorV1.tsx`

### Yapılacaklar

#### 2A. Semptom içeriği — gerçek şanzıman sorunları
Mevcut `SymptomSelector.tsx`'teki (default version) gerçek semptom verilerini al ve V1 bileşenine uygula.

**6 gerçek semptom:**
1. `"Vites geçişinde vuruntu"` — DSG 1→2, 2→3 geçiş vuruntusu
2. `"Kalkışta titreme"` — DSG kavrama problemi
3. `"Şanzıman uyarı lambası"` — P ışığı, anahtar işareti
4. `"Güç kaybı / çekmeme"` — CVT / DSG mekatronik
5. `"Yavaşlama ve takılma"` — ZF / ATM sorunları
6. `"Anormal ses"` — Kavrama, volant, yataklar

Her semptom için:
- `platform`: ilgili şanzıman tipi (DSG, CVT, ZF vb.)
- `muhtemel_neden`: 1-2 cümle gerçek teknik açıklama
- `oneri`: "Ücretsiz ön inceleme için arayın"

#### 2B. Türkçe karakter düzeltmeleri
Tüm başlık ve açıklamalarda: ş, ı, ğ, ü, ö, ç

#### 2C. Oran ayarı
- Bileşen gereksiz uzun mu? Padding kıs (`py-24` → `py-20` yeterli olabilir)

---

## FAZ 3 — `ServicesSectionV1.tsx`

**Dosya:** `components/v1/ServicesSectionV1.tsx`

### Yapılacaklar

#### 3A. DSG kartı — gerçek içerik
```
Başlık: "DSG Şanzıman Tamiri"
Alt başlık: "DQ200 / DQ250 / DQ381 / S-Tronic"
Açıklama: "Mekatronik kart, kavrama paketi, volan tamiri ve yenilenmesi.
            Kuru ve ıslak kavrama sistemlerinde platform odaklı teşhis."
```

Model satırları (spec rows):
- `DQ200` | 6-vites kuru kavrama | 2003→
- `DQ250` | 6-vites ıslak kavrama | 2004→
- `DQ381` | 7-vites DSG | 2016→
- `S-Tronic` | Audi platformu | 2008→

#### 3B. ZF kartı — gerçek içerik
```
Başlık: "ZF Otomatik Şanzıman"
Alt başlık: "6HP / 8HP Serisi"
Açıklama: "BMW, Audi, Jaguar platformlarında ZF 6HP ve 8HP revizyonu.
            Mekatronik modül, solenoid ve yağ sistemi kontrolü."
```

#### 3C. CVT kartı — gerçek içerik
```
Başlık: "CVT Şanzıman Servisi"
Alt başlık: "Nissan Jatco / Honda / Toyota"
Açıklama: "CVT kayış, koni ve yağ sistemi değişimi. Resetleme ve kalibrasyon."
```

#### 3D. 4. kart (Maintenance/Bakım)
```
Başlık: "Şanzıman Bakımı"
Alt başlık: "Yağ değişimi, kontrol, önleyici bakım"
Açıklama: "Tüm otomatik şanzıman tiplerinde yağ değişimi ve kapsamlı kontrol.
            Arıza öncesi önleyici bakım."
```

#### 3E. Uydurma hizmet adlarını sil
`"Ikinci Uzmanlik"`, `"Niche Hat"` gibi GT Codex'in uydurduğu isimleri tamamen çıkar.

#### 3F. Sticky sidebar — gerçek metin
Mevcut placeholder metin yerine:
```
Başlık: "Hangi şanzıman sisteminiz var?"
Açıklama: "DSG, CVT, ZF veya konvansiyonel — platforma özel teşhis ve onarım."
```

#### 3G. İkon güncelleme
- DSG → `Settings2` veya `Cpu`
- ZF → `Layers3`
- CVT → `RefreshCw`
- Bakım → `Wrench`

---

## FAZ 4 — `BrandStripV1.tsx`

**Dosya:** `components/v1/BrandStripV1.tsx`

### Yapılacaklar

#### 4A. Gerçek marka listesi
Sıralama: en çok gelen platform önce
```
VW · Audi · Skoda · Seat · Porsche
Nissan · Honda · Toyota · Subaru
BMW · Opel · Renault · Ford
```

#### 4B. Başlık — gerçek içerik
```
"13 Marka, 3 Platform Ailesi"
```
Alt metin: `"DSG / CVT / ZF · Bostancı, İstanbul"`

#### 4C. Marka rozetleri Türkçe
Şu an ne yazıyor kontrol et — tüm karakterler düzgün mü?

---

## FAZ 5 — `WhyUsV1.tsx`

**Dosya:** `components/v1/WhyUsV1.tsx`

### Yapılacaklar

#### 5A. Tüm başlıklar — gerçek Türkçe
Mevcut: `"Platform Bazli Teshis"` → `"Platform Bazlı Teşhis"`  
Mevcut: `"Yazili Kapsam Disiplini"` → `"Yazılı Kapsam Disiplini"`  
Mevcut: `"2 Yil Iscilik Garantisi"` → `"2 Yıl İşçilik Garantisi"`  
Mevcut: `"Ayni Gun On Inceleme"` → `"Aynı Gün Ön İnceleme"`  
Mevcut: `"Odakli Uzman Ekip"` → `"Odaklı Uzman Ekip"`  
Mevcut: `"OEM / Orijinal Tercih"` → `"OEM / Orijinal Parça Tercihi"`

#### 5B. Açıklamalar — gerçek içerik
Her başlık altındaki özet metni gerçek ve doğal Türkçe'ye çevir. Mevcut metinler "konsept açıklaması" formatında — bunları gerçek müşteriye hitap eden cümlelere dönüştür.

Örnek düzeltme:
- Mevcut: `"Her arizaya ayni receteyi yazmiyoruz. DSG, ZF, CVT ve tam otomatik platformlari ayri davranis modelleriyle okuyoruz."`
- Olması gereken: `"Her şanzıman tipi farklı davranır. DSG, ZF, CVT ve tam otomatik platformlara özel teşhis protokolü uyguluyoruz."`

#### 5C. Sidebar prensip kartları — gerçek metin
Mevcut: `"Sorunu semptomdan platforma tasiyan bir kabul mantigi."`  
→ `"Semptomdan platforma giden teşhis zinciri — doğru soruyla başlayan servis."`

#### 5D. Sticky sidebar başlık — gerçek
```
Başlık: "Neden Eren Servis?"
Alt metin: "Bostancı'da 15 yıldır yalnızca otomatik şanzıman.
             Genel servis değil, uzman hat."
```

---

## FAZ 6 — `ServiceWorkflowV1.tsx`

**Dosya:** `components/v1/ServiceWorkflowV1.tsx`

### Yapılacaklar

#### 6A. İş akışı adımları — gerçek süreç
```
Adım 1: "İlk Teşhis"
         "Semptomu anlat, platformu tanımlayalım. Telefon veya WhatsApp."

Adım 2: "Ön İnceleme"
         "Aynı gün ön risk seviyesi çıkarılır. Ücretsiz."

Adım 3: "Yazılı Teklif"
         "Kapsam, parça sınıfı ve maliyet netleştirilir. Onaysız başlamıyoruz."

Adım 4: "Onarım"
         "Platform odaklı teknik işlem. OEM / orijinal parça tercihi."

Adım 5: "Teslim & Garanti"
         "2 yıl işçilik garantisiyle teslim. Servis kaydı tutulur."
```

#### 6B. Türkçe karakter düzeltmeleri
Tüm adım başlıkları ve açıklamaları.

#### 6C. Bağlantı çizgileri / ikon güncelleme
- `Phone` → Adım 1
- `Search` veya `ScanLine` → Adım 2
- `FileText` → Adım 3
- `Wrench` → Adım 4
- `ShieldCheck` → Adım 5

---

## FAZ 7 — `ReviewsSectionV1.tsx`

**Dosya:** `components/v1/ReviewsSectionV1.tsx`

### Yapılacaklar

#### 7A. Yorumlar — gerçek içerik
Mevcut kart yapısı güzel: **Araç + Semptom + Servis Çıktısı + Müşteri Notu**  
Bu formatı koru ama içeriği gerçek Google yorumlarına dayandır:

```
KAYIT-014 | Mehmet K. | Audi A4 S-Tronic
  Semptom: "Vites geçişinde vuruntu ve düşük hızda kararsız tepki"
  Sonuç: "Kavrama + mekatronik kontrolü ile düzeldi"
  Not: "Başka yerde çözülmeyen sorun ilk günde ayrıldı."

KAYIT-027 | Serkan B. | Skoda Octavia DSG
  Semptom: "Kalkışta titreme ve zaman zaman gecikme"
  Sonuç: "Basınç hattı ve kavrama davranışı netleştirildi"
  Not: "Fiyat ve kapsam baştan net verildi."

KAYIT-031 | Fatih D. | Nissan Qashqai CVT
  Semptom: "CVT tarafında ses ve çekiş zayıflaması"
  Sonuç: "Revizyon planı ve kontrol hattıyla teslim edildi"
  Not: "CVT için doğru elde çalışıldığı hissi verdi."

KAYIT-044 | Okan T. | Seat Leon DSG
  Semptom: "Titreşim — aynı gün çözülsün beklentisi"
  Sonuç: "Hızlı teşhis sonrası aynı gün teslim"
  Not: "Zaman kaybı yaşatmadan net aksiyon alındı."

KAYIT-052 | Hakan S. | BMW 525d ZF
  Semptom: "Kayma ve üst segmentte güven kaybı"
  Sonuç: "ZF odaklı ayrışım ve yazılı teklif"
  Not: "Uzun dönem güven duyulan servis kaydına dönüştü."

KAYIT-061 | Ahmet Y. | VW Golf DSG
  Semptom: "Aracın neredeyse çekmez hale gelmesi"
  Sonuç: "DSG tarafında net onarım planı ve stabil sonuç"
  Not: "Aylar sonra bile sorunsuz çalıştığını belirtti."
```

#### 7B. Sidebar — gerçek metin
```
Başlık: "Müşteri Kayıtları"
Alt metin: "Araç, semptom ve sonuç — her kayıt gerçek bir servis hikayesi."
```

Prensip kartlarındaki demo metinleri sil, ya gerçek yorum istatistikleri koy ya da bu mini kartları kaldır.

#### 7C. Türkçe karakter düzeltmeleri
`"Teslim Kaydi"` → `"Teslim Kaydı"`, `"Gelen Semptom"` → doğru, `"Servis Ciktisi"` → `"Servis Çıktısı"`

---

## FAZ 8 — `FinalCTAV1.tsx`

**Dosya:** `components/v1/FinalCTAV1.tsx`

### Yapılacaklar

#### 8A. Başlık — gerçek CTA metni
Mevcut: `"Simdi karar ani gibi hissettiren, ama kullaniciya zorlamayan bir kapanis sahnesi."`  
→ Bu tamamen GT Codex'in tasarım brifingi. Sil.

Olması gereken:
```
Başlık: "Şanzımanınızda Sorun mu Var?"
Alt metin: "Ücretsiz ön inceleme ile başlayalım. Kapsam yazılı,
             süreç sürprizsiz."
```

#### 8B. Butonlar — doğru numara
- `"Hemen Ara"` → `tel:+902165775151` ✓ (zaten var)
- `"WhatsApp'tan Yaz"` → `https://wa.me/905327153751` ✓ (var ama metin güncelle)

#### 8C. Alt notlar — gerçek değerler
```
"Aynı gün ön inceleme" ✓
"Net kapsam ve maliyet" ✓  
"Onaysız işleme başlamama" ✓
```
Bu satırlar zaten doğru — sadece Türkçe karakter düzelt.

#### 8D. Sağ panel kartları — demo metinleri temizle
Mevcut:
- `"Kabul Notu"` kartı: placeholder metin
- `"Bu Kapanis Neyi Degistiriyor"` kartı: tamamen tasarım brifingi — SİL
- `"Servis Mantigi"` kartı: brifing metni — SİL

Yerine koy:
```
Kart 1 — "Kabul Mantığı"
  "Semptomu anlat, platformu netleştirelim.
   Önce teşhis, sonra teklif mantığıyla ilerleriz."

Kart 2 — "Servis Sözleşmesi"
  "İşe başlamadan önce yazılı kapsam.
   2 yıl işçilik garantisiyle teslim."

Kart 3 — "Konum"
  "Bostancı, İstanbul · Pazartesi–Cumartesi
   0216 577 51 51"
```

---

## Uygulama Sırası

```
Faz 1 → HeroSectionV1    (ilk izlenim, en kritik)
Faz 2 → SymptomSelectorV1 (etkileşim, erken dönüşüm)
Faz 3 → ServicesSectionV1  (hizmet içeriği, en hacimli)
Faz 4 → BrandStripV1      (hızlı, görsel)
Faz 5 → WhyUsV1           (güven inşası)
Faz 6 → ServiceWorkflowV1  (süreç anlatımı)
Faz 7 → ReviewsSectionV1   (sosyal kanıt)
Faz 8 → FinalCTAV1        (kapanış, dönüşüm)
```

Her fazda:
1. Türkçe karakter hatalarını düzelt
2. Demo/brifing metinleri gerçek içerikle değiştir
3. Gereksiz padding/yüksekliği kıs
4. Görsel yapıyı (kartlar, renkler, efektler) **koru**

---

## Dokunulmayacaklar (V1 görsel kimliği)
- `v1-depth-card` class'ı ve efektleri
- `v1-signal-card` hover shine efekti
- `rounded-[24px-32px]` büyük radius'lar
- `shadow-[0_18px_36px...]` derinlik gölgesi
- `bg-surface-0/1/2` alternating section arka planları
- Sticky sidebar yapısı (xl:sticky xl:top-28)
- `gap-px bg-edge` ruled grid gap trick'i
- `font-mono text-[11px] tracking-[0.22em]` section label stili
- Lucide ikonlar (mevcut seçim iyi)
- `lg:row-span-2` DSG dominant bento yapısı
