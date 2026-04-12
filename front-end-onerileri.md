# Front-End Onerileri

## Kapsam

Bu analiz `frontend-design` yaklaşımıyla hazırlandı.
İncelenen ana alanlar:

- Ana sayfa akışı
- `/v1` karşılaştırma sürümü
- global tema tokenları
- header
- hero
- hizmet kartları
- güven / süreç / yorumlar / final CTA blokları

---

## Kısa Sonuç

Proje şu an sıradan bir servis sitesi değil. Zaten ortalamanın üstünde bir görsel niyet, iyi bir conversion omurgası ve niş uzmanlık hissi var. En güçlü tarafı, sektörü “usta sitesi” klişesine düşmeden daha rafine göstermeye çalışması.

Ama estetik kararlar henüz tek bir unutulmaz konsept etrafında tamamen birleşmiş değil. Şu anki deneyim üç farklı dili aynı anda taşıyor:

1. Endüstriyel / teknik / diagnostik dil
2. Bronze-premium / butik servis dili
3. Modern startup / landing page kart düzeni

Bu üçlü birlikte kötü durmuyor, fakat marka hafızasını tam keskinleştirmiyor.

Benim profesyonel kanaatim:

- `main` sürüm daha sıcak, daha ticari, daha hızlı ikna ediyor
- `/v1` sürüm daha rafine, daha olgun, daha ayrışan bir karakter taşıyor
- En iyi gelecek yön: `/v1` renk sıcaklığı + ana sürümdeki enerji ve kontrast

---

## Genel Değerlendirme

### Güçlü Taraflar

- Hero’daki diagnostik panel fikri iyi. Bu, otomatik şanzıman uzmanlığına özgü hafızada kalan nadir bir motif.
- Hizmet kartlarında DSG’nin öne çıkması doğru. Uzmanlık hiyerarşisi seziliyor.
- İçerik akışı conversion açısından mantıklı: hero, semptom, hizmet, güven, süreç, yorum, CTA.
- Koyu tema bu sektör için doğru; güven, tekniklik ve maliyetli uzmanlık hissi veriyor.
- Çoğu kart ve yüzey temiz, disiplinli ve kontrol hissi taşıyor.

### Zayıf Taraflar

- Sayfanın tamamı tek bir “görsel büyük fikir” tarafından yönetilmiyor.
- Çok fazla bölüm benzer ritimde akıyor: ortalanmış başlık, kartlar, aynı boşluklar, benzer yüzeyler.
- Typography sistemi kararsız geçmiş taşıyor: `Syne`, `Plus Jakarta Sans`, `Archivo`, `IBM Plex Sans`, `Inter` aynı projede iz bırakmış durumda.
- Bronze/gold yön doğru olabilir ama şu an bazen “mekanik uzmanlık”tan çok “premium tamir butiği” hissine kayıyor.
- CTA dili fazla homojen. Her önemli noktada benzer buton ve benzer vurgu tekrar ediyor.

---

## Temel Tasarım Teşhisi

### 1. En Unutulmaz Fikir Yeterince Sertleşmemiş

Şu an sitede akılda kalan şeyler var, ama tek bir baskın imza yok.

Örnekler:

- diagnostik terminal paneli
- bronze aksanlar
- scanline efekti
- chip/tag sistemi
- büyük trust bar

Bunların hepsi iyi parçalar, ama henüz tek bir tasarım mitine dönüşmemişler.

Profesyonel seviyede güçlü markalar genelde tek bir cümleye indirgenebilir:

- “Bu site bir laboratuvar gibi”
- “Bu site bir servis fişi gibi”
- “Bu site bir yarış takımı konsolu gibi”
- “Bu site bir mekanik atölye terminali gibi”

Eren Servis için bence en iyi yön:

**“Precision Console”**

Yani site, pahalı arızaları teşhis eden bir uzman terminali gibi hissettirmeli.

Bu yön seçilirse tüm sistem aynı yere bağlanır:

- tipografi daha sıkı ve mühendislik temelli olur
- renk aksanı daha kontrollü kullanılır
- kartlar sıradan feature card olmaktan çıkar
- süreç bölümü “iş akışı” değil “servis pipeline” gibi görünür

### 2. Görsel Sıcaklık Dağılımı Dengesiz

Bronze/gold tarafa bilinçli kayış mantıklı. Bu karar klişe `lacivert + turuncu servis sitesi` görüntüsünden kaçmak için işe yarıyor. Sorun kararın kendisi değil; sıcak tonun sayfa boyunca tek başına taşıdığı yük.

Şu anda:

- CTA
- glow
- border highlight
- yıldızlar
- bazı rozetler
- bazen icon vurguları

aynı sıcak ailede dönüyor.

Bu da dili biraz fazla “luxury workshop” tarafına çekiyor.

Daha güçlü çözüm:

- warm accent: machined bronze
- cold support: steel / alloy blue-gray
- neutral paper-light: açık alloy veya iş emri kağıdı tonu

Bu üçlü kurulursa sıcak vurgu daha pahalı, daha seçici ve daha teknik görünür.

### 3. Bölümler Arası Ritim Fazla Eşit

Birçok section şu ritmi tekrar ediyor:

- ortalanmış başlık
- açıklama
- grid
- koyu yüzey

Bu okunabilir ama premium frontend etkisini sınırlar.

Daha profesyonel kompozisyon için ritim kırılmalı:

- bir bölüm soldan başlamalı
- bir bölüm daha dar editorial kolonla akmalı
- bir bölüm yatay bant hissi vermeli
- bir bölüm daha “data panel” estetiğine kaymalı

Şu an iyi tasarlanmış bileşenler var, ama sayfa bütün olarak hâlâ biraz “iyi düzenlenmiş landing page” hissi veriyor.

### 4. CTA Dramaturjisi Tek Katmanlı

Telefon ve WhatsApp kararları conversion açısından doğru. Ancak sahneleme bakımından CTA’lar hep aynı tonda konuşuyor.

Eksik olan şey:

- birincil CTA
- ikincil CTA
- “kanıtla desteklenen CTA”
- “teşhis odaklı CTA”
- “yüksek niyetli CTA”

arasında görsel ve duygusal seviye farkı yaratmak.

Örneğin:

- Hero CTA: en güçlü, en parlak, en “hemen hareket et”
- Hizmet içi CTA: daha teknik ve bağlamsal
- Süreç CTA: güven odaklı
- Final CTA: duygusal değil, net ve kararlı

Şu an bu ayrım metinde var ama tasarımda daha az hissediliyor.

---

## Tipografi Analizi

### Mevcut Durum

- `Syne` fazla editoryal ve modasal
- `Plus Jakarta Sans` güvenli ama fazla tanıdık
- `Inter` çok nötr
- `/v1` içindeki `Archivo + IBM Plex Sans` yönü daha karakterli

### Profesyonel Yorum

Bu proje için en doğru fontlar “benzersiz ama abartısız” olmalı.

Amaç:

- teknik görünmek
- ucuz görünmemek
- startup gibi görünmemek
- otomotiv klişesine de düşmemek

### En İyi Önerim

**Display:** `Archivo`
**Body/UI:** `IBM Plex Sans`

Neden:

- `Archivo` güçlü, sıkı, mekanik ve güvenilir
- `IBM Plex Sans` teknik metinlerde çok iyi çalışır
- ikili birlikte “diagnostik uzmanlık” hissi verir
- `Syne` kadar karakter şovu yapmaz
- `Plus Jakarta` kadar sıradanlaşmaz

### Alternatif İyi Eşleşme

- `Barlow Condensed` + `IBM Plex Sans`

Bu daha otomotiv ve performans odaklı hisseder. Daha agresif bir karakterdir.

### Tipografik İyileştirme Önerileri

- Hero H1 daha geniş değil daha sıkı hissettirmeli
- Section tag’lerde display yerine monospace veya semi-mono tavır daha iyi olur
- DQ200, 8HP, DSG, CVT gibi teknik kısaltmalarda tabular-nums ve daha mekanik bir metin tavrı kullanılmalı
- Aynı ağırlıkta çok fazla `font-semibold` yerine daha net bir weight sistemi kurulmalı

---

## Renk ve Tema Analizi

### Main Sürüm

Artıları:

- sıcak, ikna edici, daha ticari
- CTA görünürlüğü güçlü
- sektörde alışılmış güven duygusunu hızlı kuruyor

Eksileri:

- bronze alanı fazla yayılıyor
- bazı yerlerde “ustalık”tan çok “premium paket” havası oluşuyor
- sıcaklık bütün sistemi domine ediyor

### /v1 Sürüm

Artıları:

- daha rafine
- daha sofistike
- daha az klişe
- daha teknik ve yetişkin bir tavrı var

Eksileri:

- sadece token değişimi seviyesinde kaldığı için kompozisyon aynı
- yani renk daha iyi olsa da sahneleme tam dönüşmemiş
- “alternatif tema” gibi duruyor, “yeni tasarım dili” gibi değil

### Renk Stratejisi Önerim

Kalıcı sistem şu şekilde kurulmalı:

- `Primary surface`: koyu karbon / işlenmiş metal
- `Warm accent`: machined bronze
- `Cold support`: steel blue-gray
- `Light contrast`: alloy / bone / paper-metal
- `Signal green`: sadece WhatsApp

### Renk Kullanım Kuralı

- warm accent her yerde değil, karar anında görünmeli
- cold support teknik güven hissini taşımalı
- açık alloy ton yalnızca premium CTA ve bazı bilgi yüzeylerinde kullanılmalı
- yıldızlar, küçük rozetler ve her hover aynı aksanı paylaşmamalı

---

## Kompozisyon ve Sayfa Akışı

### Hero

En güçlü bölüm bu.

Başarılı olanlar:

- solda net değer önerisi
- sağda diagnostik panel
- niş uzmanlık hissi

Eksik olan:

- hero sağ panel biraz “iyi mockup” gibi; biraz daha operasyonel ve gerçek iş akışı hissi taşımalı
- panel ile soldaki metin arasında daha dramatik bağ kurulabilir
- trust bar güçlü ama altta biraz ayrı bir bileşen gibi oturuyor

Öneri:

- trust bar’ı hero kompozisyonunun içine daha göm
- diagnostik panelin altına küçük “servis kaydı” veya “tespit çıktısı” hissi ekle
- paneldeki verileri sadece görsel değil, semantik olarak da daha ikna edici yap

### Hizmetler

Burada hiyerarşi doğru ama kart formu fazla tanıdık.

Öneri:

- DSG kartı gerçek “ana sütun” gibi davranmalı
- ZF kartı ikinci sütun değil “ikinci uzmanlık istasyonu” gibi görünmeli
- CVT ve bakım kartları daha farklı geometrilerle ayrışmalı
- her kartta aynı card grammar yerine farklı yoğunluk seviyeleri kullanılmalı

### Neden Biz

İçerik iyi ama görsel dil fazla standart feature grid.

Bu alanın daha iyi formu:

- “proof ledger”
- “servis kabul kriterleri”
- “neden güveniliriz” yerine “iş yapış standardımız”

Yani genel feature card yerine kurumsal metodoloji dili.

### Süreç

Mantık olarak iyi. Görsel olarak daha da büyüyebilir.

Bunu sıradan timeline yerine:

- servis kabul formu
- operasyon pipeline
- aşamalı diagnostik çizelge

estetiğine taşırsan marka kimliği güçlenir.

### Yorumlar

Araç model bilgisinin yazılması çok değerli. Bu çok iyi bir güven sinyali.

Ama kartlar daha da özgünleşebilir:

- yorum kartları servis fişi / teslim formu / müşteri kayıt etiketi gibi davranabilir
- şu an iyi ama daha “sisteme ait” görünmüyor

### Final CTA

İşlevsel ama dramatik olarak fazla tanıdık.

Şu an “orta-iyi bir landing CTA”.
Olabileceği şey:

- son karar istasyonu
- servis kabul masası
- randevu çağrısı yerine net teşhis kararı

---

## Header ve Navigasyon

Header işlevsel, temiz ve güvenilir.

Ama karakter olarak biraz nötr.

Öneriler:

- logo alanında daha küçük ama daha ayırt edici bir endüstriyel imza olabilir
- `Şanzıman Uzmanı` alt etiketi iyi ama daha damga/stamp gibi davranabilir
- header CTA masaüstünde biraz fazla standart; burada daha kompakt ve daha “servis numarası” hissi veren bir format düşünülebilir
- `/v1` linkini compare lab gibi konumlamak daha tasarımsal olabilir

---

## Ne Korunmalı

- Hero’nun çift kolon mantığı
- Diagnostik panel fikri
- Hizmetlerde uzmanlık hiyerarşisi
- Araç model isimlerinin görünürlüğü
- Koyu yüzey sistemi
- Telefon + WhatsApp çift CTA mimarisi
- Mobil alt CTA barı

---

## Ne Değişmeli

- `Syne` tamamen çıkmalı
- font sistemi iki aileye inmeli
- warm accent dağılımı azaltılmalı
- cold support tonu sisteme daha derin girmeli
- section kompozisyonları birbirinden daha belirgin ayrışmalı
- “kart üstüne kart” hissi azaltılmalı
- final CTA daha güçlü bir sahneye dönüşmeli
- yorumlar ve süreç daha branded yapılmalı

---

## En Güçlü Yeni Yön Önerim

### Tasarım Konsepti: Precision Console

Bu tasarım dilinde site:

- bir şanzıman uzmanı landing page’i değil
- bir teşhis merkezi arayüzü gibi hisseder

Bu ne demek:

- başlıklar daha mekanik ve kontrollü
- sıcak vurgu daha nadir ve daha pahalı kullanılır
- bilgi blokları “feature card” değil “servis modülü” gibi görünür
- section tag’ler daha kod / damga / etiket diline yaklaşır
- süreç bölümü operasyon paneline dönüşür
- yorumlar doğrulama kayıtları gibi hissettirir

Bu yaklaşım seni hem klasik oto servis estetiğinden hem de genel startup landing page görünümünden çıkarır.

---

## Net Öneri Listesi

1. Kalıcı ana yön olarak `main` ile `/v1` arasında hibrit bir sistem kur.
2. `Syne`’ı tamamen kaldır.
3. Display font olarak `Archivo`, body/UI için `IBM Plex Sans` kullan.
4. Warm bronze aksanı sadece kritik karar anlarında göster.
5. Sisteme ikinci bir soğuk destek tonu ekle ve teknik hissi onunla kur.
6. Hero trust bar’ını daha entegre ve daha “sistem parçası” hale getir.
7. Hizmet kartlarını aynı aile kartlar olmaktan çıkar; yoğunluk ve geometri farkları oluştur.
8. “Neden Biz” bölümünü feature grid yerine “iş standardımız” paneline dönüştür.
9. Süreç bölümünü timeline yerine operasyon pipeline estetiğine taşı.
10. Review kartlarını servis kaydı / teslim fişi hissiyle yeniden tasarla.
11. Final CTA’yı daha kararlı, daha az generic bir kapanış sahnesine çevir.
12. Header markasını biraz daha ayırt edici hale getir; sadece temiz değil, hatırlanır olsun.
13. Tüm sayfada section ritmini kır; her blok aynı merkezli düzende akmasın.
14. Küçük teknik detaylarda monospace kullanımını daha bilinçli artır.
15. `/v1` sadece token karşılaştırması değil, tam kompozisyon prototipi haline gelsin.

---

## Önceliklendirilmiş Yol Haritası

### 1. Aşama: Hızlı Kazançlar

- `Syne` kaldır
- `Archivo + IBM Plex Sans` çiftine geç
- bronze dağılımını azalt
- button hiyerarşisini yeniden kur

### 2. Aşama: Görsel Kimlik Sertleştirme

- hero trust bar entegrasyonu
- hizmet kartlarının yeniden sahnelenmesi
- süreç bölümünün yeniden tasarımı
- yorum kartı estetiğinin özgünleştirilmesi

### 3. Aşama: Tam Marka Hafızası

- logo/wordmark iyileştirmesi
- branded iconografik dil
- servis kaydı / diagnostik çıktı / teknik etiket motiflerinin sistematik kullanımı
- `/v1` varyantından seçilmiş bileşenlerin ana sürüme taşınması

---

## Son Karar

Tasarım şu anda yanlış yönde değil. Hatta bilinçli refactor sayesinde sıradan rakiplerden daha iyi bir zemine sahip. Asıl mesele artık “güzel görünmek” değil; tek ve keskin bir görsel fikre tam commit etmek.

Benim profesyonel önerim:

**Bronze yönünü koru, ama onu cold-steel destekli bir “Precision Console” kimliğine yükselt.**

Bu sayede:

- klişe servis sitesi olmaz
- fazla butik premium da olmaz
- teknik uzmanlık gerçekten hissedilir
- marka daha akılda kalır
- `/v1` yönü anlamlı bir tasarım evrimine dönüşür
