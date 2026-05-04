# DSG Parite Planı
**Tarih:** 2026-05-04  
**Amaç:** `erenservis.net` DSG konusunda `dsgmekatronik.com`dan aşağı kalmasın; hatta geniş marka kapsamı avantajıyla onu geçsin.  
**Durum:** Yaşayan takip dosyası  
**Ana referanslar:**  
- `docs/SPRINT-PLAN.md`
- `docs/CONTENT-BACKLOG-SYNC-2026-05-04.md`
- `C:\Users\Emrah\Desktop\dsgmekatronik\src\yedek\ICERIK-PLANI-V2.md`
- `C:\Users\Emrah\Desktop\dsgmekatronik\src\yedek\DURUM-RAPORU-2026-04-22.md`

---

## 1. Stratejik Çerçeve

Eren Otomatik Şanzıman Servisi tüm otomatik şanzıman ailelerinde hizmet veren bir yapı kuruyor. Ancak saha gerçeğinde:

1. ZF ve Aisin talepleri değerli olsa da,
2. DSG tarafı hem daha güçlü ticari niyet taşıyor,
3. hem de servis tecrübesi ve yedek parça gücü nedeniyle daha kritik bir büyüme alanı oluşturuyor.

Bu yüzden stratejik karar şudur:

- Site genel kapsamı geniş kalacak.
- Ama DSG tarafında hiçbir boşluk bırakılmayacak.
- `dsgmekatronik.com`daki başarılı sorgu kümeleri, Eren’in daha güçlü mimarisi içine uyarlanacak.
- Amaç kopya içerik üretmek değil; aynı sorgu niyetini daha iyi marka, daha iyi cluster ve daha iyi dönüşüm kurgusuyla karşılamak.

---

## 2. Temel Karar

Bu sprintten itibaren DSG tarafında üç hedef birlikte yürür:

| Hedef | Karar |
|---|---|
| DSG içerik derinliği | `dsgmekatronik.com` seviyesinin altına düşmeyecek |
| Eren’in farkı | Sadece DSG değil, DSG + CVT + EDC + Aisin + ZF genişliğini koruyacak |
| Dönüşüm mimarisi | Decision engine, semptom seçici ve kişi otoritesiyle güçlendirilecek |

---

## 3. Mevcut Güçlü Alanlar

Eren tarafında zaten güçlü olan ve tekrar yazılmayacak çekirdek DSG varlıkları:

| Alan | Mevcut içerikler | Durum |
|---|---|---|
| DSG hizmet omurgası | `dsg-sanziman-tamiri`, `dsg-kavrama-degisimi`, `dsg-mekatronik-kart`, `dsg-basinc-tupu`, `dsg-volant-kavrama-paketi` | Güçlü |
| DSG rehber omurgası | `dsg-kavrama-ariza-belirtileri`, `dsg-kayma-vites-atlama`, `dsg-sanziman-omru-bakimi`, `dsg-vuruntu-semptomlari`, `mekatronik-nedir`, `solenoid-valf-ariza-belirtileri`, `uyari-lambasi-semptomlari` | Güçlü |
| Yeni DSG içerik batch’i | `dq200-kavrama-rehberi`, `dsg-mekatronik-ariza-belirtileri`, `dsg-sanziman-nedir`, `dq200-mekatronik-tamiri` | Güçlü |

Sonuç:

- Eren sıfırdan DSG kurmuyor.
- DSG tarafında boşluğu kapatma ve derinlik artırma sprinti yapıyor.

---

## 4. DSG Açık Listesi

Eren’in `dsgmekatronik.com` karşısında geri kalmaması için açık kalan ana başlıklar:

| Öncelik | Alan | Neden açık? |
|---|---|---|
| A | Mikro DSG semptom kümeleri | Çok spesifik arama niyeti taşıyan DSG sayfalarının bir kısmı eksik |
| A | DSG model derinliği | Golf, Passat, Octavia, A3 gibi model bazlı DSG sayfaları eksik |
| A | Homepage decision engine | Semptom seçici var ama ana omurga hâlâ tam “karar motoru” değil |
| B | Kişi otoritesi | `Önder Usta` katmanı henüz içerik olarak kurulmadı |
| B | Marka × şanzıman matrisi | Geniş marka kapsamı var ama yüksek hacimli kesişim sayfaları yok |

---

## 5. Mikro Semptom Uyarlama Planı

Bu liste `dsgmekatronik.com`daki başarılı sorgu mantığını Eren’e uyarlamak için hazırlanmıştır.  
Burada aynı slug’ı körü körüne kopyalamıyoruz; Eren’in bilgi mimarisine göre çoğunu `/rehber/` altında konumluyoruz.

| Kod | Kaynak sorgu | Eren önerilen route | İçerik açısı | Öncelik | Durum |
|---|---|---|---|---|---|
| B1 | `dsg 1 den 2 ye geçerken silkeleme` | `/rehber/dsg-1-2-vites-silkeleme/` | Belirti → kavrama mı mekatronik mi → ne zaman beklenmez | A | `todo` |
| B2 | `dsg anahtar işareti yanıp sönüyor` | `/rehber/dsg-anahtar-isareti-yanip-sonuyor/` | Anahtar lambası → aktif hata mı geçici mi → sürülür mü | A | `todo` |
| B3 | `kavrama 1 tolerans limitine ulaşıldı` | `/rehber/dsg-kavrama-tolerans-limiti/` | Hata kodu / tolerans sınırı → adaptasyon mu değişim mi | A | `todo` |
| B4 | `dsg yokuşta geri kaçırma` | `/rehber/dsg-yokusta-geri-kacirma/` | Hill-hold, kavrama, basınç ve risk ayrımı | A | `todo` |
| B5 | `otomatik vites kavrama sorunu nasıl anlaşılır` | `/rehber/otomatik-vites-kavrama-sorunu/` | Genel kavrama semptom rehberi, DSG merkezli ama çapraz aile okunabilir | B | `todo` |
| B6 | `fluence vites kutusunu kontrol ettiriniz` | `/rehber/fluence-vites-kutusunu-kontrol-ettiriniz/` | Renault/EDC hata mesajı, DSG dışı ama yüksek niyetli | C | `todo` |
| B7 | `şanzıman yağ kaçağı belirtileri` | `/rehber/dsg-yag-kacagi-belirtileri/` | Yağ kaçağı → nereden kaçar → DSG’de ne zaman tehlikeli | B | `todo` |
| B8 | `şanzıman arızası nasıl anlaşılır` | `/rehber/sanziman-arizasi-nasil-anlasilir/` | Genel giriş rehberi, Eren’in semptom cluster’ına merkez link | B | `todo` |

### Bu kümede karar

1. DSG odaklı mikro semptomlar `rehber` altında açılacak.
2. Çok genel veya çapraz aile sorguları yine `rehber` altında ama daha geniş anlatımla yazılacak.
3. `Fluence` içeriği DSG değil; ama ayrı niyet taşıdığı için bu plana not düşülür, ikinci önceliğe alınır.

---

## 6. Marka + Model DSG Derinlik Planı

Burada amaç `dsgmekatronik.com`daki model derinliğini, Eren’in daha güçlü marka yapısına taşımaktır.

| Kod | Kaynak sorgu | Eren önerilen route | Şanzıman | İçerik açısı | Öncelik | Durum |
|---|---|---|---|---|---|---|
| M1 | `golf 7 dsg` | `/rehber/golf-7-dsg-sanziman-sorunlari/` | DQ200 / DQ250 | En sık semptomlar, hangi kutu, hangi hata, ne zaman kavrama | A | `todo` |
| M4 | `skoda octavia dsg` | `/rehber/skoda-octavia-dsg-sanziman-sorunlari/` | DQ200 / DQ250 | Golf akrabası ama kullanım profili farkı | A | `todo` |
| M5 | `passat otomatik şanzıman` | `/rehber/passat-dsg-sanziman-sorunlari/` | DQ250 / DQ500 | Islak DSG ve büyük kasa kullanım senaryosu | A | `todo` |
| M6 | `audi a3 s tronic` | `/rehber/audi-a3-s-tronic-sanziman-sorunlari/` | DQ200 / DQ250 | S-Tronic adıyla gelen aramayı ayrı karşılar | A | `todo` |
| M2 | `honda civic cvt` | `/rehber/honda-civic-cvt-sanziman-sorunlari/` | Honda CVT | DSG parity sprintine dahil değil, ikinci halka | B | `todo` |
| M3 | `toyota corolla cvt` | `/rehber/toyota-corolla-cvt-sanziman-sorunlari/` | K310 / K311 | DSG dışı ama hacimli; ikinci halka | B | `todo` |

### Bu kümede karar

1. İlk dalgada yalnız DSG model sayfaları öne çekilecek: `Golf`, `Octavia`, `Passat`, `A3`.
2. CVT model sayfaları ikinci halka olarak devam edecek.
3. Mevcut `arac/[marka]` yapısını bozmadan önce bu içerikler `rehber` altında statik yakalanacak.
4. Orta vadede ayrı bir `model teşhis` katmanı planlanacak.

---

## 7. Decision Engine / Anasayfa Notu

Bu konu ertelenmeyecek; ama içerik sprinti ile çakışmaması için ayrı iş kolu olarak takip edilecek.

### Not düşülen işler

| İş | Açıklama | Öncelik | Durum |
|---|---|---|---|
| Hero sonrası trust strip | Güven sinyalini erkene çek | B | `todo` |
| SymptomSelector’ı homepage kalbi yap | Mevcut component var, merkez rolü güçlendirilecek | A | `todo` |
| RiskBlock | Bekledikçe maliyet büyür akışı | A | `todo` |
| WrongDecisionBlock | Yanlış usta / yanlış teşhis maliyeti | A | `todo` |
| Homepage FAQ | Ana soruları anasayfaya taşı | B | `todo` |

### Karar

- Decision engine işi durmuyor.
- Ama bu plan içinde içerik parity hattından ayrı izleniyor.
- İçerik boşlukları kapandıktan hemen sonra homepage omurgasına geri dönülecek.

---

## 8. Kişi Otoritesi Planı

Claude tavsiyesi doğrultusunda `Önder Usta` katmanı ayrı bir iş kalemi olarak eklenmiştir.

| İş | Route / alan | Açıklama | Öncelik | Durum |
|---|---|---|---|---|
| Kişi otoritesi sayfası | `/onder-usta/` veya `/hakkimizda/onder-usta/` | Ustanın uzmanlık, geçmiş, çalışma disiplini, hangi kutularda güçlü olduğu | A | `todo` |
| Hakkımızda sayfası revizyonu | `/hakkimizda/` | Kurumsal sayfayı kişi odaklı sıcaklığa yaklaştır | A | `todo` |
| İçeriklerde yazar/uzman tonu | seçili rehber ve hizmet sayfaları | “Atölyede en sık gördüğümüz…” gibi güven tonunu kontrollü ekle | B | `todo` |

### Karar

- `Doğan Usta` benzeri etki Eren tarafında `Önder Usta` ile kurulacak.
- Bu, sadece bio sayfası değil; E-E-A-T ve güven dönüşüm yatırımı olarak ele alınacak.

---

## 9. Marka × Şanzıman Ailesi Matrisi

Burada amaç, Eren’in genişlik avantajını kullanmaktır.  
`dsgmekatronik.com` model derinliğini iyi yapıyor; Eren buna ek olarak kesişim sayfalarıyla daha geniş pazarı toplayabilir.

### İlk dalga önerilen matris sayfaları

| Kod | Route | Hedef | Öncelik | Durum |
|---|---|---|---|---|
| X1 | `/rehber/volkswagen-dq200-sanziman-sorunlari/` | VW + DQ200 niyeti | A | `todo` |
| X2 | `/rehber/audi-s-tronic-sanziman-sorunlari/` | Audi + S-Tronic | A | `todo` |
| X3 | `/rehber/skoda-dsg-sanziman-sorunlari/` | Skoda + DSG | A | `todo` |
| X4 | `/rehber/seat-dsg-sanziman-sorunlari/` | Seat + DSG | A | `todo` |
| X5 | `/rehber/renault-edc-sanziman-sorunlari/` | Renault + EDC | B | `todo` |
| X6 | `/rehber/ford-powershift-sanziman-sorunlari/` | Ford + PowerShift | B | `todo` |
| X7 | `/rehber/peugeot-eat8-sanziman-sorunlari/` | Peugeot + EAT8 | B | `todo` |
| X8 | `/rehber/bmw-zf-8hp-sanziman-sorunlari/` | BMW + ZF 8HP | B | `todo` |

### Karar

1. İlk matriste öncelik yine DSG ağırlıklı olacak.
2. DSG dışı aileler tamamen dışlanmayacak; ama ikinci halkada ilerleyecek.
3. Bu matris, Eren’in “geniş ama dağınık değil” görünmesini sağlayacak.

---

## 10. Uygulama Sırası

### Faz A — DSG parity kapatma

- [ ] B1 `dsg-1-2-vites-silkeleme`
- [ ] B2 `dsg-anahtar-isareti-yanip-sonuyor`
- [ ] B3 `dsg-kavrama-tolerans-limiti`
- [ ] B4 `dsg-yokusta-geri-kacirma`
- [ ] M1 `golf-7-dsg-sanziman-sorunlari`
- [ ] M4 `skoda-octavia-dsg-sanziman-sorunlari`
- [ ] M5 `passat-dsg-sanziman-sorunlari`
- [ ] M6 `audi-a3-s-tronic-sanziman-sorunlari`

### Faz B — DSG çevre kümesi

- [ ] B7 `dsg-yag-kacagi-belirtileri`
- [ ] B8 `sanziman-arizasi-nasil-anlasilir`
- [ ] X1 `volkswagen-dq200-sanziman-sorunlari`
- [ ] X2 `audi-s-tronic-sanziman-sorunlari`
- [ ] X3 `skoda-dsg-sanziman-sorunlari`
- [ ] X4 `seat-dsg-sanziman-sorunlari`

### Faz C — Kişi otoritesi + homepage

- [ ] `Önder Usta` kişi otoritesi sayfası
- [ ] `hakkimizda` sayfasını kişi odaklı yeniden kurma
- [ ] homepage trust strip
- [ ] homepage risk block
- [ ] homepage wrong decision block
- [ ] homepage FAQ

### Faz D — Genişlik avantajı

- [ ] B5 `otomatik-vites-kavrama-sorunu`
- [ ] B6 `fluence-vites-kutusunu-kontrol-ettiriniz`
- [ ] M2 `honda-civic-cvt-sanziman-sorunlari`
- [ ] M3 `toyota-corolla-cvt-sanziman-sorunlari`
- [ ] X5 `renault-edc-sanziman-sorunlari`
- [ ] X6 `ford-powershift-sanziman-sorunlari`
- [ ] X7 `peugeot-eat8-sanziman-sorunlari`
- [ ] X8 `bmw-zf-8hp-sanziman-sorunlari`

---

## 11. Takip Kuralları

Bu dosya şu kuralla güncellenecek:

1. Her içerik açıldığında `todo` → `done`
2. Her route üretildiğinde ilgili faz maddesi işaretlenecek
3. Karar değişirse eski madde silinmeyecek; altına “neden değişti” notu düşülecek
4. Homepage decision engine işleri içerik sprintiyle karışmayacak; ayrı blokta takip edilecek

---

## 12. Net Sonuç

Bu planın ana cümlesi şudur:

> Eren Otomatik Şanzıman Servisi, DSG konusunda `dsgmekatronik.com`dan aşağı kalmayacak; bunu da aynı dar kapsamı kopyalayarak değil, daha güçlü rehber mimarisi, daha geniş marka kapsaması, daha iyi decision engine ve kişi otoritesiyle yapacak.

