# Marka ve Şanzıman Düzeltme Planı

Bu plan, mevcut sitedeki marka görünürlüğü ile Türkiye pazarı arasındaki uyumsuzluğu düzeltmek için hazırlanmıştır.

Amaç:

- Türkiye'de gerçek talep gören marka ve şanzıman ailelerini öne çıkarmak
- SEO'da aranan marka + model + şanzıman kombinasyonlarını görünür hale getirmek
- Aisin odağını hem kullanıcı hem arama motoru açısından yukarı taşımak
- ABD/premium ağırlıklı ve yerel pazarda zayıf kalan örnekleri ana vitrinlerden geri çekmek

## Mevcut Durum Teşhisi

Repo içinde öne çıkan mevcut dağılım:

- Ana vitrin ve stripe'larda `VW, Audi, Seat, Skoda, Porsche, BMW, Nissan, Honda, Toyota, Subaru`
- Hizmet dili ağırlıklı olarak `DSG + ZF + CVT`
- `Aisin` görünür ama aşağı katmanda kalıyor
- `Subaru`, `Lexus`, `Porsche`, bazı premium ZF çağrışımları ana vitrine gereğinden fazla yansıyor
- `Renault`, `Ford`, `Opel`, `Peugeot`, `Citroen`, `Fiat`, `Hyundai`, `Kia`, `Dacia` gibi Türkiye'de daha sık görülen markalar ya hiç görünmüyor ya da ikincil katmanda kalıyor

Kod tarafında bunu en net gösteren alanlar:

- [components/BrandStrip.tsx](c:/Users/Emrah/Desktop/erenotosanziman/erenservis/components/BrandStrip.tsx)
- [components/ServicesSection.tsx](c:/Users/Emrah/Desktop/erenotosanziman/erenservis/components/ServicesSection.tsx)
- [components/v7/BrandLogosStrip.tsx](c:/Users/Emrah/Desktop/erenotosanziman/erenservis/components/v7/BrandLogosStrip.tsx)
- [app/hizmetler/zf-sanziman-tamiri/page.tsx](c:/Users/Emrah/Desktop/erenotosanziman/erenservis/app/hizmetler/zf-sanziman-tamiri/page.tsx)
- [app/hizmetler/cvt-sanziman-tamiri/page.tsx](c:/Users/Emrah/Desktop/erenotosanziman/erenservis/app/hizmetler/cvt-sanziman-tamiri/page.tsx)
- [app/hizmetler/konvansiyonel-sanziman/page.tsx](c:/Users/Emrah/Desktop/erenotosanziman/erenservis/app/hizmetler/konvansiyonel-sanziman/page.tsx)

## Pazar Gerçeği

Türkiye pazarı tarafında 2025 yıl sonu toplam marka satışlarında büyük görünürlük alan markalar arasında `Renault`, `Volkswagen`, `Toyota`, `Peugeot`, `Ford`, `Fiat`, `Opel`, `Citroen`, `Hyundai`, `Skoda`, `Nissan` öne çıkıyor. `Subaru` ve `Lexus` çok düşük hacimde kalıyor.

Kaynak notları:

- ODMD 6 Ocak 2026 bülteni 2025 toplam marka dağılımını veriyor.
- Aynı tabloda `Subaru` ve `Lexus` çok düşük hacimde görünürken `Renault`, `Volkswagen`, `Toyota`, `Peugeot`, `Ford`, `Opel`, `Citroen`, `Fiat`, `Hyundai` daha yüksek hacimde.
- Bu, ana landing'deki “vitrin markaları” ile yerel talep arasındaki dengesizliği doğruluyor.

Kaynaklar:

- ODMD 6 Ocak 2026 bülteni: https://www.odmd.org.tr/folders/2837/categorial1docs/6015/ODMD%20Bas%C4%B1n%20Bulteni%206%20Ocak%202026.pdf
- Model bazlı medya özeti, ODMD verilerine dayalı: https://www.sozcu.com.tr/turkiye-de-2025-in-otomobil-rekoru-kirildi-iste-en-cok-satan-marka-ve-modeller-p281921

Model tarafında net öne çıkan kullanıcı zihni örnekleri:

- Renault Clio
- Renault Megane Sedan
- Toyota Corolla
- Fiat Egea
- Peugeot 2008

Bu listeyi teknik eşleşme filtresiyle kullanmak gerekir; yani her yüksek satan model otomatik olarak ana servis vitrini olmayabilir. Ama kullanıcı dilini kurmak için çok değerlidir.

## Ana Sorunlar

1. Ana marka vitrini Türkiye talebini tam yansıtmıyor.
2. `Aisin` gibi önemli bir şanzıman ailesi hem SEO hem kullanıcı açısından vitrinde geri planda kalıyor.
3. `ZF` anlatımı premium segmentte güçlü ama toplam pazar gerçekliğine göre fazla görünür alan kaplıyor.
4. `CVT` anlatımı doğru ama marka örneklemesi kısmen dar ve pazarda daha sık karşılaşılan yerel kombinasyonlara yeterince bağlanmıyor.
5. Marka dili ile şanzıman dili aynı çatı altında henüz sistematik bağlanmamış.

## Yeni Stratejik Yön

Yeni çerçeve şu olmalı:

`Önce şanzıman ailesi, sonra Türkiye'de sık görülen marka-model kümeleri`

Bu şu anlama gelir:

- Ana vitrin yalnızca “marka logosu” göstermemeli
- Her görünür marka grubu bir şanzıman ailesine bağlanmalı
- `Aisin`, `DSG`, `ZF`, `CVT`, `EDC`, `PowerShift`, `EAT6/EAT8`, `Tam Otomatik` aileleri görünür hiyerarşiyle sunulmalı

## Yeni Öncelik Hiyerarşisi

### Katman 1: Ana servis omurgası

Bunlar ana landing ve hizmetler sayfasında kalıcı görünür olmalı:

- DSG / S-Tronic
- Aisin / Tam Otomatik
- CVT
- ZF
- EDC / DCT / Powershift

Not:

- `Aisin / Tam Otomatik` şu an hak ettiğinden aşağıda. Bu katman doğrudan yukarı alınmalı.

### Katman 2: Türkiye pazarına uygun ana marka kümeleri

Vitrinde ve içerik planında öncelikli görünmesi gereken markalar:

- Volkswagen / Audi / Skoda / Seat
- Renault / Dacia
- Peugeot / Citroen / Opel
- Ford
- Toyota
- Fiat
- Hyundai / Kia
- Nissan

### Katman 3: İkincil veya niş görünürlük

Bunlar tamamen silinmek zorunda değil ama ana vitrinde dominant olmamalı:

- Subaru
- Lexus
- Porsche
- Jaguar
- Maserati
- Land Rover

## Aisin İçin Özel Düzeltme

Bu başlık müşteri talebi açısından kritik.

Şu an `Aisin` içerikte var ama ana sahnede yok denecek kadar az.

Yapılması gereken:

1. Ana sayfa hizmet kartlarında `Konvansiyonel Otomatik` kartı yeniden adlandırılmalı:
   `Aisin ve Tam Otomatik Şanzıman`
2. Bu kartın alt metni Türkiye markalarına bağlanmalı:
   `Toyota, Peugeot, Citroen, Opel, Ford ve Aisin tabanlı tam otomatik platformlar`
3. Brand strip içine şanzıman ailesi satırı eklenmeli:
   `DSG · Aisin · CVT · ZF · EDC`
4. Yeni bir hizmet veya pillar sayfa açılmalı:
   `/hizmetler/aisin-sanziman-tamiri/`
5. Rehber tarafında ayrı içerik kümeleri planlanmalı:
   - `Aisin şanzıman arıza belirtileri`
   - `Aisin şanzıman yağ değişimi ne zaman yapılır`
   - `EAT6 / EAT8 şanzıman sorunları`
   - `Toyota Aisin otomatik şanzıman bakımı`

## Marka + Şanzıman Eşleme Matrisi

İçerik ve UI buna göre düzenlenmeli:

- Volkswagen / Audi / Skoda / Seat -> DSG / S-Tronic / DQ200-DQ250-DQ381
- Renault / Dacia -> EDC / DCT / tam otomatik varyantlar
- Peugeot / Citroen / Opel -> EAT6 / EAT8 / Aisin / tam otomatik
- Ford -> Powershift + tam otomatik varyantlar
- Toyota -> Aisin + CVT hibrit varyantlar
- Nissan -> CVT
- Hyundai / Kia -> DCT + tam otomatik + tork konvertörlü aileler
- Fiat -> Egea otomatik varyantları, tam otomatik / DCT ayrımıyla
- BMW / Mercedes / Audi üst segment -> ZF, ama ana vitrin değil ikincil uzmanlık yüzü

## İçerik Planı Düzeltmesi

Sprint 4 sadece “marka sayfaları” diye gitmemeli. İki kola ayrılmalı:

### Kol A: Şanzıman ailesi derinleştirme

1. `Aisin şanzıman tamiri`
2. `EAT6 / EAT8 arıza belirtileri`
3. `EDC şanzıman sorunları`
4. `PowerShift arıza belirtileri`
5. `Toyota CVT vs Aisin farkı`

### Kol B: Marka + model kümeleri

1. Renault otomatik şanzıman tamiri
2. Peugeot otomatik şanzıman tamiri
3. Opel otomatik şanzıman tamiri
4. Ford otomatik şanzıman tamiri
5. Toyota otomatik şanzıman tamiri
6. Fiat otomatik şanzıman tamiri
7. Hyundai otomatik şanzıman tamiri
8. Nissan CVT servisi

Not:

- BMW ve premium sayfalar silinmez ama ilk dalga üretimde öne alınmaz.
- `Subaru` ve `Lexus` için ayrı landing önceliği verilmez.

## Arayüz Düzeltme Planı

### Faz 1: Hızlı vitrin düzeltmesi

1. [components/BrandStrip.tsx](c:/Users/Emrah/Desktop/erenotosanziman/erenservis/components/BrandStrip.tsx) yeniden yazılacak
2. `Subaru` vitrinden çıkarılacak
3. `Renault`, `Ford`, `Opel`, `Peugeot`, `Citroen`, `Fiat`, `Hyundai` eklenecek
4. Üst label yalnızca “Hizmet Verdiğimiz Markalar” olmayacak
5. İkinci satır veya inline katmanda `DSG · Aisin · CVT · ZF · EDC` ailesi gösterilecek

### Faz 2: Hizmet kartı hiyerarşisi düzeltmesi

1. [components/ServicesSection.tsx](c:/Users/Emrah/Desktop/erenotosanziman/erenservis/components/ServicesSection.tsx) içinde `Aisin / Tam Otomatik` kartı görünür şekilde yükseltilecek
2. `ZF` kartı tamamen kaldırılmayacak ama ana pazar ağırlığına göre bir kademe geri çekilecek
3. `CVT` kartı `Nissan + Toyota` ekseniyle daha yerel anlatılacak
4. `Renault / Ford / Peugeot / Opel` için şanzıman aile etiketleri eklenecek

### Faz 3: Hizmet detay sayfası düzeni

1. `ZF` sayfası premium uzmanlık yüzü olarak kalacak
2. `Konvansiyonel` sayfası `Aisin` merkezli yeniden adlandırılacak veya yeni kardeş sayfa açılacak
3. `CVT` sayfasında `Jatco + Toyota + Honda` ayrımı daha net anlatılacak
4. `DSG` sayfasında VW grubu odak korunacak

## SEO Öncelik Listesi

İlk dalga için önerilen yeni hedefler:

1. `aisin şanzıman tamiri`
2. `peugeot eat6 arıza belirtileri`
3. `peugeot eat8 şanzıman tamiri`
4. `opel otomatik şanzıman tamiri`
5. `renault edc arıza belirtileri`
6. `ford powershift tamiri`
7. `toyota aisin otomatik şanzıman`
8. `nissan cvt arıza belirtileri`
9. `fiat egea otomatik şanzıman sorunları`
10. `hyundai otomatik şanzıman tamiri`

## Uygulama Sırası

1. Ana sayfa marka vitrini düzelt
2. Hizmet kartlarında `Aisin` görünürlüğünü yükselt
3. `Sprint 4` planını “marka + şanzıman matrisi” olarak yeniden yaz
4. İlk yeni hizmet sayfasını `Aisin` ile aç
5. Sonra `Renault`, `Peugeot`, `Opel`, `Ford`, `Toyota` sırasıyla marka kümelerine geç

## Karar Özeti

Net yön değişikliği şu:

- Premium/aşırı niş marka gösteriminden çık
- Türkiye'de gerçek trafik ve talep yaratacak marka kümelerine dön
- `Aisin`i alt not olmaktan çıkarıp ana uzmanlık yüzlerinden biri yap
- Marka görünürlüğünü logo listesi olarak değil, şanzıman ailesiyle ilişkilendirilmiş servis mimarisi olarak kur

## Sonraki Net Adım

İlk uygulanacak mini sprint:

1. `BrandStrip` düzeltmesi
2. `ServicesSection` içinde `Aisin / Tam Otomatik` yükseltmesi
3. `CLAUDE.md` içindeki Sprint 4 planının yeni matrise göre güncellenmesi
4. `aisin-sanziman-tamiri` sayfası için içerik brief'i çıkarılması

