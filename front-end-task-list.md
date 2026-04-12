# Front-End Task List

Bu plan, [front-end-onerileri.md](C:\Users\Emrah\Desktop\erenotosanziman\erenservis\front-end-onerileri.md) dosyasından çıkan kararların uygulanabilir task list halidir.

## Yön

Seçilen yön:

**Precision Console**

Tek cümlelik tasarım kararı:

Site bir klasik servis landing page'i gibi değil, pahalı ve karmaşık şanzıman problemlerini teşhis eden uzman bir operasyon konsolu gibi hissettirmeli.

Bu yönün değişmeyecek ana kuralları:

1. Koyu, teknik ve kontrollü zemin korunacak.
2. Warm bronze aksan korunacak ama her yere yayılmayacak.
3. Cold-steel destek tonu teknik güven hissini taşıyacak.
4. Typography startup değil, mekanik ve rafine olacak.
5. Hareket dekoratif değil, işlevi destekleyen bir gerilim katmanı olacak.
6. Her section aynı ritimde akmayacak; sayfa içinde kontrollü tempo değişimi olacak.
7. Şaşırtma görsel numarayla değil, beklenmeyen ama mantıklı kompozisyon ve etkileşimle verilecek.

## Mart 2026 Güvenli Teknoloji Kararı

1. Ana üretim yolu olarak CSS Container Queries kullanılacak.
2. Heading ve kısa metinlerde `text-wrap: balance` veya uygun yerde `text-wrap` kullanılacak.
3. Sayısal verilerde `font-variant-numeric: tabular-nums` kullanılacak.
4. Aşağı katman section'larda uygun yerlerde `content-visibility: auto` değerlendirilecek.
5. Dekoratif scroll hareketlerinde CSS scroll-driven animations progressive enhancement olarak kullanılacak.
6. React tarafında event tabanlı etkileşimlerde gerekirse `useEffectEvent` kullanılacak.
7. React `<ViewTransition />` ana üretim yoluna alınmayacak.
8. Next.js 16 `cacheComponents` ve `use cache` sadece gerçekten dinamikleşecek bölümlerde düşünülerek eklenecek.

Bu kararın nedeni:

- React 19.2 resmi dökümantasyonda stabil; ancak `<ViewTransition />` halen canary olarak işaretli.
- Next.js 16 yükseltme dökümanında PPR flag yerine `cacheComponents` yönü tanımlanmış.
- MDN tarafında `text-wrap`, `content-visibility`, container queries ve scroll-driven animation çizgisi artık üretimde kullanılabilir seviyede.

Bu yüzden ana prensip:

**Yeni teknoloji evet, deneysel çekirdek hayır.**

## Görsel Ritim Planı

Şu mevcut ritim kırılacak:

- ortalanmış başlık
- açıklama
- grid
- koyu yüzey

Yerine şu katmanlı akış kurulacak:

1. Hero: sol bilgi, sağ diagnostik konsol, alta gömülü trust rail
2. Ön Teşhis: tam ortalı section değil, karar paneli gibi iki parçalı yapı
3. Hizmetler: eşit kartlar değil, uzmanlık yoğunluğuna göre kırılan asimetrik modüller
4. Marka Şeridi: pasif logo satırı değil, teknik kapsama bandı
5. Neden Biz: feature grid değil, operasyon standardı paneli
6. Süreç: timeline değil, servis pipeline
7. Yorumlar: generic testimonial kartı değil, servis kayıt rail'i
8. Final CTA: normal kapanış değil, kabul masası / intake dock sahnesi

## Şaşırtma Katmanları

Şaşırtma çizgiden kopmadan şu sırayla verilecek:

1. Kompozisyon şaşırtması
   Beklenen merkezli blok yerine asimetrik ama dengeli yerleşim.

2. Bilgi şaşırtması
   “feature card” yerine gerçek operasyon hissi veren veri etiketleri, teşhis notları, servis aşamaları.

3. Hareket şaşırtması
   Sürekli animasyon değil; scroll ile ortaya çıkan, kullanıcı ilerledikçe anlam kazanan kontrollü hareket.

4. Etkileşim şaşırtması
   Tıklanınca açılan sıradan accordion yerine bağlama göre zenginleşen tanı paneli, servis kaydı, ilerleme durumu.

5. Malzeme şaşırtması
   Tek tip koyu kartlar yerine bazı bölümlerde alloy yüzey, teknik etiket, koyu-cam değil endüstriyel laminasyon hissi.

## Uygulama Fazları

## Faz 1: Tasarım Temelini Dondur

1. `Syne` tamamen kaldırılacak.
2. Kalıcı font kararı verilecek.
3. Önerilen ana eşleşme: `Archivo` + `IBM Plex Sans`.
4. Warm accent, cold support, neutral alloy token sistemi netleştirilecek.
5. Ana CTA, secondary CTA, technical CTA, inline CTA olmak üzere 4 seviyeli buton sistemi çıkarılacak.
6. Heading, label, code, sayı ve body için tipografik rol sistemi tanımlanacak.
7. Tüm stat, fiyat, süre ve teknik kod alanlarında tabular numeric standardı kurulacak.

Teslim çıktısı:

- güncellenmiş design token seti
- tipografi matrisi
- CTA hiyerarşi tablosu

## Faz 2: Ana Sayfa Kompozisyon Refactor

1. Hero yeniden sahnelenecek.
2. Trust bar hero'dan ayrı blok gibi değil, hero'nun alt katmanı gibi çalışacak.
3. Diagnostik panel daha “görsel mockup” olmaktan çıkıp gerçek operasyon terminali hissine yaklaştırılacak.
4. Hero CTA alanı iki butonlu klasik düzenin ötesine geçmeden daha katmanlı hale getirilecek.
5. Ön Teşhis bölümü grid olmaktan çıkarılıp karar paneli / seçici konsol gibi kurgulanacak.
6. Hizmetler bölümü container queries ile daha bağlamsal kırılacak.
7. DSG, ZF, CVT, Bakım modülleri tek tip kart yerine farklı ağırlıklarda davranacak.
8. Marka şeridi, yalnızca marka isimleri değil kapsanan platform hissi verecek şekilde güçlendirilecek.
9. Neden Biz bölümü “neden biz” yerine “iş yapış standardımız” olarak yeniden kurgulanacak.
10. Süreç alanı timeline'dan pipeline estetiğine çevrilecek.
11. Yorumlar servis kayıt / teslim fişi hissine yaklaştırılacak.
12. Final CTA ayrı bir dark card değil, karar anı sahnesi olacak.

Teslim çıktısı:

- ana sayfa yeni kompozisyonu
- `/v1` yerine ana deneyime yaklaşan gerçek tasarım yönü

## Faz 3: Hareket ve İşlevin Birleştirilmesi

1. Tüm reveal mantığı section bazında tekrar değerlendirilecek.
2. Scroll-driven animation yalnızca dekoratif olmayan, anlatıyı destekleyen alanlarda kullanılacak.
3. Hero ve süreç bölümünde scroll'a bağlı, düşük maliyetli ilerleme hissi kurulacak.
4. SymptomSelector içinde seçim sonrası panel geçişleri daha anlamlı hale getirilecek.
5. Hover durumları sadece renk değişimi değil, yüzey derinliği ve bilgi netleşmesi üretecek.
6. Mobilde hareket sadeleşecek, masaüstünde daha zenginleşecek.
7. `prefers-reduced-motion` için tam fallback korunacak.

Teslim çıktısı:

- motion system tokenları
- hangi section'da hangi hareket var listesi
- reduced-motion matrisi

## Faz 4: Performans ve Modern Web Katmanı

1. Below-the-fold ağır section'larda `content-visibility: auto` uygun yerlerde uygulanacak.
2. Büyük section wrapper'ları için render ve paint maliyeti ölçülecek.
3. Container queries ile JS tabanlı layout ihtiyacı azaltılacak.
4. Scroll animation'lar JS yerine mümkün olan yerlerde CSS timeline ile çözülecek.
5. Dinamikleşecek içerikler varsa Next.js 16 `cacheComponents` ve `use cache` stratejisi ayrıca planlanacak.
6. View Transition API yalnızca deneysel lab veya `/v1` benzeri varyantlarda değerlendirilecek.
7. LCP, CLS ve interaction maliyetleri ana sayfa bazında tekrar ölçülecek.

Teslim çıktısı:

- performance checklist
- deneysel ve üretim teknolojileri ayrım tablosu

## Faz 5: Sistemleştirme

1. Tekil bileşen düzeltmeleri bırakılıp design system seviyesinde utility sınıflar çıkarılacak.
2. `section-tag`, `panel-label`, `stat-value`, `service-chip`, `tech-note`, `intake-card` gibi tekrar eden görsel roller ayrıştırılacak.
3. Ana sayfa dili hizmet detay ve rehber sayfalarına aktarılacak.
4. Açık yüzeyli rehber sayfalar marka sistemiyle yeniden uyumlu hale getirilecek.
5. Yeni sistem için bir mini UI reference dosyası oluşturulacak.

Teslim çıktısı:

- tekrar kullanılabilir UI grammar
- diğer sayfalara yayılabilir bir sistem

## Bileşen Bazlı Task List

### Header

1. Daha karakterli ama sade bir marka alanı kur.
2. `Şanzıman Uzmanı` etiketini gerçek damga hissine yaklaştır.
3. Masaüstü CTA'yı standart butondan servis hattı göstergesine yaklaştır.
4. Dropdown davranışını görsel olarak daha rafine hale getir.

### Hero

1. Diagnostik paneli daha operasyonel hale getir.
2. Trust bar'ı hero mimarisine göm.
3. H1, subcopy ve CTA arasında daha kontrollü gerilim kur.
4. Sağ panelin sadece güzel değil, ikna edici bilgi taşımasını sağla.

### SymptomSelector

1. Section'ı sıradan card grid olmaktan çıkar.
2. Sol tarafta problem seçimi, sağ tarafta tanı çıktısı mantığına taşı.
3. Mobilde stack, masaüstünde diagnostic workstation gibi davran.
4. Seçim sonrası içerik sahne geçişi daha güçlü olsun.

### Services

1. Asimetriyi daha ileri taşı.
2. DSG modülü gerçek ana modül olsun.
3. ZF ikinci güçlü sütun gibi yapılsın.
4. CVT ve bakım daha kompakt ama daha karakterli olsun.
5. Container queries ile modüller bulunduğu alana göre incelsin.

### Why Us

1. Feature grid görünümünden çık.
2. “Servis standartlarımız” veya “iş kabul ilkeleri” gibi yeniden çerçevele.
3. Kartların yoğunluğu farklılaştırılsın.

### Workflow

1. Timeline'dan pipeline'a geç.
2. Her adım bir iş istasyonu gibi davransın.
3. Adımlar arasında hafif ilerleme duygusu olsun.
4. Telefon CTA teknik sürecin doğal parçası gibi yerleşsin.

### Reviews

1. Kartları generic testimonial görünümünden çıkar.
2. Servis kaydı / teslim etiketi / müşteri kayıt modülü estetiği dene.
3. Araç modeli bilgisi daha güçlü bir veri noktası olsun.
4. Scroll deneyimi kontrollü, performanslı ve premium hissedilsin.

### Final CTA

1. Ayrı bir kart değil son karar istasyonu gibi tasarla.
2. Birincil eylem çok net olsun.
3. İkincil eylem destekleyici kalsın.
4. CTA sahnesi, tüm sayfanın final ritmi gibi çalışsın.

## Öncelik Sırası

1. Font ve token sistemi
2. Hero ve trust bar
3. SymptomSelector refactor
4. Services kompozisyon refactor
5. Workflow ve Why Us dönüşümü
6. Reviews yeniden sahneleme
7. Final CTA dönüşümü
8. Performance ve progressive enhancement katmanı
9. Rehber ve iç sayfalara sistem yayılımı

## Uygulama Notları

1. `/v1` yalnızca renk kıyası olmaktan çıkmalı; gerçek prototip laboratuvarı olmalı.
2. Yeni section dili önce `/v1` üstünde denenip sonra ana sürüme alınabilir.
3. Her faz sonunda Lighthouse ve Core Web Vitals etkisi tekrar ölçülmeli.
4. Her yeni hareket için “kullanıcıya ne kazandırıyor?” sorusu cevaplanmalı.
5. Her section için tek cümlelik işlev tanımı yazılmalı; tasarım o işlevden doğmalı.

## Bir Sonraki Net Adım

İlk üretim sprinti şu kapsamla başlamalı:

1. Font sistemini `Archivo + IBM Plex Sans` olarak sabitle
2. Token sistemini warm bronze + cold steel + alloy neutral olarak güncelle
3. Hero + trust bar + SymptomSelector için yeni kompozisyon üret
4. Bu üç alanı önce `/v1` içinde gerçek prototip haline getir
5. Karar verildikten sonra ana sürüme taşı

## Kaynaklar

Bu teknoloji kararları 1 Nisan 2026 itibarıyla resmi dokümanlar üzerinden filtrelenmiştir:

- React 19.2 `useEffectEvent`: https://react.dev/reference/react/useEffectEvent
- React `<ViewTransition />` canary durumu: https://react.dev/reference/react/ViewTransition
- Next.js 16 upgrade guide: https://nextjs.org/docs/app/guides/upgrading/version-16
- Next.js caching / Cache Components: https://nextjs.org/docs/app/getting-started/caching
- MDN Container Queries: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries
- MDN `text-wrap`: https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap
- MDN `font-variant-numeric`: https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric
- MDN `content-visibility`: https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility
- MDN Scroll-driven Animations: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations
- MDN View Transition API: https://developer.mozilla.org/docs/Web/API/View_Transition_API
