export interface FaqItem {
  q: string;
  a: string;
}

export const TRANSMISSION_FAQS: Record<string, FaqItem[]> = {
  'dsg-kavrama-ariza-belirtileri': [
    {
      q: 'DSG kavrama arızasının ilk belirtisi nedir?',
      a:
        'En erken belirti düşük hızlarda (1-2. vites geçişlerinde) hissedilen hafif ' +
        'vuruntudur. Araç titrer gibi ileri atlar ya da geçiş sırasında kısa bir ' +
        'takılma hissedilir. İlk fark ettiğinizde servise getirmek daha az masraflı olur.',
    },
    {
      q: 'DSG kavrama arızası ne kadar sürede büyür?',
      a:
        'Genellikle 2-6 ay içinde belirginleşir. Başlangıçta yalnızca soğuk havada ' +
        'hissedilen vuruntu zamanla her gün yaşanır hale gelir. Geç müdahale kavrama ' +
        've volant değişimini birlikte gerektirebilir.',
    },
    {
      q: 'DSG kavrama değişimi zorunlu mu, sıvı değişimi yeterli mi?',
      a:
        "DQ200'de (kuru kavrama) sıvı değişiminin kavrama sorununa etkisi yoktur. " +
        "DQ250'de (ıslak kavrama) erken dönemde yardımcı olabilir. Kesin tanı için " +
        'ücretsiz ön kontrole getirmenizi öneririz.',
    },
    {
      q: 'DSG kavrama değişimi fiyatı ne kadar?',
      a:
        "2026 yılında DQ200 kavrama değişimi 18.000–28.000 TL, DQ250'de " +
        '22.000–35.000 TL aralığındadır. Volant hasarı varsa bu rakam yükselir. ' +
        'Kesin fiyat ücretsiz ön tanı sonrası verilir.',
    },
    {
      q: 'Kavrama arızasını geciktirirsem ne olur?',
      a:
        'Kavrama plaketleri aşındıkça metal toz birikimi mekatronik karta ulaşır. ' +
        'Bu durumda sadece kavrama değil mekatronik kart da değişim gerektirebilir — ' +
        'erken müdahaleye göre 2 kat daha masraflı.',
    },
  ],

  'dsg-s-tronic': [
    {
      q: 'DSG şanzıman yağı ne zaman değiştirilmeli?',
      a: 'Kuru kavramalı DQ200 modellerinde her 60.000 km, ıslak kavramalı DQ250/DQ381/DQ500 modellerinde her 40.000 km yağ değişimi önerilir. Şehir içi yoğun kullanımda bu aralıkları %20 kısaltmak şanzıman ömrünü ciddi ölçüde uzatır.',
    },
    {
      q: 'DSG mekatronik arızası ne kadara mal olur?',
      a: 'Mekatronik onarımı hasarın boyutuna göre değişir. Elektronik kart tamiri genellikle mekanik revizyondan daha ekonomiktir. Kesin fiyat, diagnostik sonrası yazılı olarak sunulur — Eren Servis\'te ön diagnostik ücretsizdir.',
    },
    {
      q: 'DQ200 ve DQ250 arasındaki fark nedir?',
      a: 'DQ200 kuru kavramalı 7 ileri DSG\'dir — daha hafif ve yakıt tasarruflu ancak şehir içinde daha çabuk aşınır. DQ250/DQ381 ıslak kavramalıdır — daha dayanıklı ve yüksek tork taşır ancak orijinal yağ kalitesine çok duyarlıdır.',
    },
    {
      q: 'DSG titreme yapıyor, ne zaman servise gitmeli?',
      a: 'Düşük hızda titreme ve vitesler arası sarsıntı DQ200\'de kavrama balatası aşınmasının klasik belirtisidir. Erken müdahalede sadece kavrama grubu değişimi yeterli olabilir; geç kalındığında mekatronik de etkilenir ve maliyet katlanır. Belirti başlar başlamaz servise gelin.',
    },
    {
      q: 'DSG tamiri mi yoksa yeni şanzıman mı daha mantıklı?',
      a: 'Araca 3 yıldan fazla binecekseniz tamir neredeyse her zaman daha ekonomiktir. Revizyon maliyeti sıfır şanzıman fiyatının %25–40\'ı kadardır. Gövdede çatlak veya birden fazla kritik ünite hasarı yoksa tamir tercih edilmelidir.',
    },
  ],

  'zf-otomatik': [
    {
      q: 'ZF 8HP yağı "ömür boyu" mu, değişim gerekli mi?',
      a: 'Üretici "ömür boyu yağ" ifadesini kullansa da pratik kullanımda yağ 60.000–80.000 km\'de bozulur. Kirli yağ torque konvertörde metal kirliliğine ve solenoid tıkanmasına yol açar. ZF şanzımanlarda düzenli yağ değişimi en kritik bakım kalemidir.',
    },
    {
      q: 'ZF torque konvertör arızası nasıl anlaşılır?',
      a: '60–90 km/s hız aralığında titreme, D konumunda duraksama ve yağda metalik parlaklık torque konvertör hasarının tipik belirtileridir. Bu belirtiler görüldüğünde gecikmeden diagnostik yaptırın — metal kirliliği tüm şanzımana yayılmadan müdahale maliyeti çok daha düşüktür.',
    },
    {
      q: 'BMW ZF şanzıman tamiri ne kadar sürer?',
      a: 'Yağ değişimi ve solenoid temizliği genellikle 1 iş günü içinde tamamlanır. Valf gövdesi değişimi 1–2 gün, torque konvertör onarımı veya tam revizyon ise parça teminine bağlı olarak 2–4 iş günü sürebilir.',
    },
    {
      q: 'ZF solenoid valfi temizleme yeterli mi, değişim mi gerekir?',
      a: 'Erken evre tıkanmalarda temizlik çoğu zaman yeterlidir. Ancak solenoid elektriksel hasar gördüyse veya yağ uzun süre değiştirilmediyse değişim gerekir. Diagnostik cihazla P0750–P0770 arası hata kodları varsa değişim kaçınılmazdır.',
    },
    {
      q: 'ZF şanzımanlı araç satın alırken nelere dikkat edilmeli?',
      a: 'Yağ değişim geçmişi belgelenmeli, diagnostik taramasında hata kodu bulunmamalıdır. Test sürüşünde 60–90 km/s aralığında titreme ve sert vites geçişi yokluğu kontrol edilmeli. Eren Servis\'te ikinci el araç şanzıman kontrolü ücretsiz yapılmaktadır.',
    },
  ],

  'cvt-sanziman': [
    {
      q: 'CVT yağı hangi markayı kullanmalı, muadil olur mu?',
      a: 'Nissan JF serisi için NS-2 veya NS-3, Toyota için CVT Fluid TC, Subaru için Lineartronic Fluid kullanılmalıdır. Onaysız muadil yağlar metal kayış ve puli yüzeyine zarar verir. CVT yağında tasarruf, revizyon maliyetiyle geri döner.',
    },
    {
      q: 'CVT metal kayış hasarı kaç km\'de başlar?',
      a: 'Doğru yağ ve bakımla metal kayış 150.000–200.000 km dayanabilir. Kirli yağ, aşırı yük veya yanlış yağ kullanımında 60.000–80.000 km\'de bile hasar görülebilir. Kayma hissi ve ivcelenme sırasında motor sesinde artış erken uyarı belirtileridir.',
    },
    {
      q: 'CVT şanzımanlı araçla çekici çekilebilir mi?',
      a: 'CVT şanzımanlı araçlar mümkünse kendi gücüyle veya flatbed çekiciyle taşınmalıdır. Çekme halatıyla uzun mesafe çekim CVT\'ye ciddi zarar verebilir. Arıza durumunda aracı çektirmeden önce yetkili veya uzman servisi arayın.',
    },
    {
      q: 'CVT titremesi neden olur, ciddi midir?',
      a: 'Düşük hızda titreme genellikle primer veya sekonder puli yüzey hasarının belirtisidir. Yüksek hızda motor devri ile hız arasındaki kopukluk ise kayış kaymasına işaret eder. Her iki durum da erken müdahale gerektiren ciddi belirtilerdir — gecikmek tam revizyon riskini artırır.',
    },
    {
      q: 'CVT tamiri mi, değişimi mi daha ekonomik?',
      a: 'Metal kayış ve puli hasarı sınırlıysa revizyon tercih edilmelidir. Puli yüzeyi ileri derecede çizilmişse veya kayış kopmuşsa komple revizyon ya da değişim gerekir. CVT değişim maliyeti yüksek olduğundan arıza belirtisi başlar başlamaz müdahale her zaman daha ekonomiktir.',
    },
  ],

  'dsg-vuruntu-semptomlari': [
    {
      q: 'DSG şanzımanda vuruntu neden olur?',
      a:
        'DSG vuruntusunun en yaygın nedeni kavrama plaketlerinin aşınmasıdır. ' +
        'DQ200 kuru kavramada 1→2 geçişte, DQ250 ıslak kavramada 2→3 geçişte ' +
        'daha sık yaşanır. Soğuk havalarda belirginleşmesi ve ısındıktan sonra ' +
        'azalması arızanın iyileştiği anlamına gelmez.',
    },
    {
      q: 'DSG vuruntusunu görmezden gelirsem ne olur?',
      a:
        'Kavrama plaketleri aşındıkça metal toz birikimi mekatronik karta ulaşır. ' +
        'Başlangıçta yalnızca kavrama değişimiyle çözülen sorun gecikince kavrama ' +
        '+ volant + mekatronik kart değişimine dönüşebilir. Maliyet 2–3 katına ' +
        'çıkabilir.',
    },
    {
      q: 'DSG vuruntusunu sıvı değişimiyle düzeltebilir miyim?',
      a:
        'DQ200 kuru kavrama kullanan araçlarda (Golf, Polo, A3) sıvı değişiminin ' +
        'kavrama vuruntusuna etkisi yoktur — kuru kavrama sıvıdan bağımsız çalışır. ' +
        'DQ250 ıslak kavramada erken dönemde kısmen yardımcı olabilir ancak kalıcı ' +
        'çözüm değildir.',
    },
    {
      q: 'Vuruntu sabah soğukta oluyor, ısınınca geçiyor — sorun var mı?',
      a:
        'Evet, sorun var. Isınınca geçmesi arızanın olmadığını göstermez; kavrama ' +
        'plaketlerinin soğukta optimal temas sağlayamadığını gösterir. Bu erken ' +
        'dönem belirtisidir ve zamanla soğuk-sıcak fark ortadan kalkar, vuruntu ' +
        'sürekli hale gelir.',
    },
    {
      q: 'DSG vuruntusunda kavrama değişimi ne kadar sürer?',
      a:
        'Yalnızca kavrama seti değişimi genellikle 1 iş günü sürer. Volant da ' +
        'etkilenmişse 1,5–2 güne uzayabilir. Eren Servis\'te araç tesliminde ' +
        'net süre bildirilir.',
    },
  ],

  'dsg-kavrama-degisimi': [
    {
      q: 'DSG kavrama değişimi ne kadar tutar 2026?',
      a:
        '2026 fiyatları model bazındır değişir:\n' +
        'DQ200 kuru kavrama 18.000–28.000 TL, DQ250\'de 22.000–35.000 TL, ' +
        'DQ381\'de 15.000–25.000 TL aralığındadır. ' +
        'Volant da etkilenmişse maliyet 2-3 katına çıkar. ' +
        'Kesin fiyat ücretsiz ön tanı sonrası verilir.',
    },
    {
      q: 'Kavrama değişimi yerine sıvı değişimi yeterli mi?',
      a:
        'Hayır. DQ200 kuru kavramada sıvı değişiminin ardından mekatronik kart adaptasyonu ' +
        'sıfırlanır yapılması yeterli olabilir. Ancak DQ250\'de ıslak kavramada ' +
        'sıfırlan değişimi gerekir. DQ200\'de erken müdahale çoğu zaman ' +
        'sadece kavrama değişimi yeterlidir.',
    },
    {
      q: 'Kavrama arızasıını ne zaman fark etmeliyim?',
      a:
        'DSG kavramada vites geçişte vuruntu veya sarsıntı hissediyorsanız ' +
        'kavrama plaketlerinin aşınmaya başlamıştır. Bu erken dönemde ' +
        'yamanızca değişimi ile çözülebilir. Geç kalırsanız volant ' +
        've mekatronik kart da etkilenir — maliyet katlanır.',
    },
    {
      q: 'DSG kavrama değişimi garanti kansamıyor mu?',
      a:
        'Eren Servis\'te 6 ay / 10.000 km işçilik garantisi sunulanır. ' +
        'Kavrama seti, orijinal veya OEM eşdeğeri parça kullanılır. ' +
        'Garanti kapsamı: işçilik hataları. Değişim sonrası mekatronik adaptasyon ' +
        'ücretsiz olarak yapılır.',
    },
    {
      q: 'DSG kavrama ömrünü ne kadar etkiler?',
      a:
        'Doğru bakım ve kullanımla DQ200 kavramaortal 150.000–200.000 km dayanabilir. ' +
        'Şehir içi yoğun kullanımda bu süre %40-50 kısalır. ' +
        'DQ250 ıslak kavramada 180.000–250.000 km dayanabilir. ' +
        'Düzenli periyodik bakım ve doğru yağ kullanımı ömrü uzatır.',
    },
    {
      q: 'Kavrama değişiminde orijinal parça mı, muadil kullanılır mı?',
      a:
        'Evet. Eren Servis\'te orijinal veya OEM eşdeğeri parça kullanılır. ' +
        'Muadil parça kullanımı kısa vadeli maliyet avantusu uzun vadede, ' +
        'ancak kalıcı arıza riski de yüksek tutar. Ucuz or orijinal parça ' +
        'tercihi göre tanı sürece KDS şanzıman yazılımı uyumlu çalışamaz.',
    },
  ],

  'uyari-lambasi-semptomlari': [
    {
      q: "DSG'de anahtar işareti yanıp sönüyor — araç sürülür mü?",
      a:
        "Çoğu durumda araç sürülebilir ama aynı gün servise getirilmesi gerekir. " +
        "Anahtar işareti mekatronik kartın bir hata kodu kaydettiğini gösterir. " +
        "Lamba yanıp sönüyor ve vuruntu veya geç geçiş de varsa sürüşü kısaltın.",
    },
    {
      q: "DSG'de P harfi yanıp sönüyor, araç hareket etmiyor — ne yapmalıyım?",
      a:
        "Aracı yol kenarına çekin, motoru kapatın. Bir kez yeniden çalıştırmayı " +
        "deneyin — hareket etmiyorsa sürmeye çalışmayın. Şanzıman koruma moduna " +
        "girmiştir; zorla sürmek mekatronik kartı veya kavramayı kalıcı olarak " +
        "bozabilir. Çekici çağırın.",
    },
    {
      q: "DSG uyarı lambası yandı, hata kodu okutmadan parça değiştirilir mi?",
      a:
        "Hayır. DSG uyarı lambası onlarca farklı hata kodu tarafından " +
        "tetiklenebilir — aynı lamba sensör temizliğiyle de geçebilir, " +
        "mekatronik kart değişimiyle de. Hata kodu okutulmadan yapılan " +
        "parça değişimi gereksiz masrafa ve yanlış tanıya yol açar.",
    },
    {
      q: "DSG'de uyarı lambası söndükten sonra sorun geçti mi?",
      a:
        "Hayır. Hata kodu mekatronik kartta kayıtlı kalır, lamba sönse bile. " +
        "Geçici hatalar kendiliğinden silinebilir ama altta yatan neden devam " +
        "eder. Lamba söndüyse de hata kodu okuması yaptırmanızı öneririz.",
    },
    {
      q: "Hata kodu okuma ücretsiz mi?",
      a:
        "Eren Servis'te ilk hata kodu okuma ücretsizdir. Okuma sonrası " +
        "nedenini ve gerekli işlemi net olarak bildiririz — onayınız " +
        "olmadan hiçbir işlem yapılmaz.",
    },
  ],

  'dsg-mekatronik-kart': [
    {
      q: 'DSG mekatronik kart tamiri mümkün mü?',
      a:
        'Evet, her mekatronik kart değişim gerektirmez. Sensör veya solenoid ' +
        'arızası, erken dönem kavrama kirliliği veya yazılım hatası gibi ' +
        'durumlarda tamir 8.000–18.000 TL\'ye çözülebilir. Kart fiziksel ' +
        'olarak hasar görmüş ya da ileri düzey kirlilik varsa değişim gerekir. ' +
        'Hata kodu okumadan karar verilmez.',
    },
    {
      q: 'DSG mekatronik kart değişimi ne kadar sürer?',
      a:
        'DQ200 ve DQ250 mekatronik kart değişimi genellikle 1–2 iş günü sürer. ' +
        'Değişim sonrası adaptasyon ve test sürüşü dahildir. DQ381 gibi yeni ' +
        'nesil modellerde 2 gün hesaplanması önerilir.',
    },
    {
      q: 'Mekatronik kart neden bozulur?',
      a:
        'En yaygın neden kavrama kökenli metal toz kirliliğidir. Aşınan kavrama ' +
        'plaketlerinden çıkan partiküller şanzıman yağıyla taşınır ve mekatronik ' +
        'kartın solenoid ve sensörlerine zarar verir. Bu yüzden mekatronik kart ' +
        'değişimi sırasında kavrama durumu da mutlaka değerlendirilmelidir.',
    },
    {
      q: 'Mekatronik kart değişiminde orijinal mi muadil mi tercih edilmeli?',
      a:
        'DQ200 için orijinal kart 2026 Nisan itibarıyla 36.000–42.000 TL, ' +
        'muadil 28.000–34.000 TL civarındadır. Her ikisi de 12 ay garanti ' +
        'kapsamındadır. Araç yaşı ve kullanım koşullarına göre birlikte ' +
        'değerlendirip öneri yapıyoruz.',
    },
    {
      q: 'Mekatronik kart değişiminden sonra adaptasyon şart mı?',
      a:
        'Evet. Yeni kart takıldıktan sonra mekatronik adaptasyonu teşhis ' +
        'cihazıyla sıfırlanır ve yeniden öğrenmesi sağlanır. Bu işlem ' +
        'yapılmazsa vuruntu devam eder. Eren Servis\'te adaptasyon işlemi ' +
        'ayrıca ücretlendirilmez.',
    },
  ],

  'dsg-mekatronik-ariza-fiyati': [

        {
          q: 'DSG mekatronik arıza fiyatı 2026 ne kadar?',
          a:
            'DQ200 için tamir 8.000–14.000 TL, değişim 28.000–42.000 TL. ' +
            'DQ250 için tamir 10.000–18.000 TL, değişim 32.000–48.000 TL aralığındadır. ' +
            'Kesin fiyat hata kodu okuma ve fiziksel inceleme sonrası verilir. ' +
            'Eren Servis\'te ön tanı ücretsizdir.',
        },
        {
          q: 'Telefonda mekatronik kart fiyatı öğrenebilir miyim?',
          a:
            'Genel bir fiyat aralığı verilebilir ancak net fiyat için araç mutlaka ' +
            'getirilip hata kodu okunmalıdır. Aynı semptom (örneğin vuruntu) bazen ' +
            'solenoid temizliğiyle 8.000 TL\'ye, bazen kart değişimiyle 42.000 TL\'ye ' +
            'çözülür. Tanısız fiyat vermek yanlış yönlendirme olur.',
        },
        {
          q: 'Mekatronik kartı sadece değiştirmek yeterli mi?',
          a:
            'Hayır. Mekatronik arızasının %70\'i kavrama kökenlidir. Aşınan kavrama ' +
            'metal toz yayar, bu toz kartı bozar. Eğer kavrama değişmezse yeni kart ' +
            'da kirlenip bozulur. Tanı sırasında hem kart hem kavrama birlikte ' +
            'değerlendirilmelidir.',
        },
        {
          q: 'DQ200 mu DQ250 mi daha pahalı?',
          a:
            'DQ250 mekatronik kartı hem tamir hem değişimde daha pahalıdır çünkü ' +
            'ıslak kavrama sistemi daha karmaşıktır. DQ200 kuru kavrama olduğu için ' +
            'hem parça hem işçilik maliyeti %15-20 daha düşüktür.',
        },
        {
          q: 'Mekatronik arıza fiyatına ne dahil?',
          a:
            'Fiyata şunlar dahildir: Hata kodu okuma, mekatronik kart (tamir veya ' +
            'değişim), adaptasyon ve test sürüşü. Kavrama da değişiyorsa ayrıca ' +
            'fiyatlandırılır. Eren Servis\'te gizli maliyet yoktur, tüm kalemler ' +
            'yazılı olarak bildirilir.',
        },
        {
          q: 'Muadil mekatronik kart kullanılır mı?',
          a:
            'Hem orijinal hem muadil (OEM eşdeğeri) seçenek sunulur. Orijinal ' +
            '36.000–42.000 TL, muadil 28.000–34.000 TL civarındadır. Her ikisi de ' +
            '12 ay garantilidir. Araç yaşı ve kullanım şekline göre öneri yapılır.',
        },
        {
          q: 'Mekatronik tamiri kaç günde tamamlanır?',
          a:
            'Tamir 1 gün, değişim 1–2 gün sürer. Adaptasyon ve test sürüşü bu süreye ' +
            'dahildir. Parça temin süresi eklenmez — temin öncesi net teslimat tarihi ' +
            'bildirilir.',
        },
        {
          q: 'Hangi durumda tamir, hangi durumda değişim yapılır?',
          a:
            'Tamir şu durumlarda yapılır: Sensör/solenoid arızası, erken dönem kirlilik, ' +
            'yazılım hatası. Değişim şu durumlarda gerekir: Kart yanmış/kırık, metal ' +
            'toz kirliliği ilerlemişse, tamir denemesi başarısız olmuşsa. Karar tanı ' +
            'sonrası birlikte verilir.',
        },
      ],

  'otomatik-sanziman-tamiri-fiyat': [
    {
      q: 'Otomatik şanzıman tamiri ne kadar tutar 2026?',
      a: 'Nisan 2026 itibarıyla şanzıman tamir fiyatları arıza tipine göre değişir: DSG kavrama değişimi 18.000–35.000 TL, mekatronik tamiri 8.000–18.000 TL, CVT revizyonu 12.000–38.000 TL aralığındadır. Net maliyet ancak ücretsiz ön tanı sonrası belirlenebilir.',
    },
    {
      q: 'Şanzıman tamiri mi yoksa komple değişim mi mantıklı?',
      a: 'Eğer şanzıman gövdesinde çatlak yoksa veya metal kirliliği tüm dişli grubuna yayılmadıysa tamir (revizyon) her zaman daha mantıklıdır. Tamir maliyeti, sıfır şanzıman fiyatının genellikle %20-30\'u kadardır ve 12 ay garanti ile sunulur.',
    },
    {
      q: 'Şanzıman tamiri fiyatına neler dahil?',
      a: 'Eren Servis\'te verilen fiyatlara; arıza tespiti, sökme-takma işçiliği, değişen orijinal/OEM parçalar, yeni şanzıman yağı ve adaptasyon işlemleri dahildir. Sürpriz ek ücret çıkarılmaz.',
    },
    {
      q: 'Kredi kartına taksit imkanı var mı?',
      a: 'Evet, şanzıman tamiri ve parça değişim işlemlerinde anlaşmalı bankaların kredi kartlarına taksit imkanı sunuyoruz. Ödeme detaylarını servisimizde görüşebilirsiniz.',
    },
    {
      q: 'Tamir edilen şanzıman ne kadar süre garantilidir?',
      a: 'Yaptığımız tüm şanzıman revizyon ve parça değişim işlemleri 12 ay veya 20.000 km (hangisi önce dolarsa) Eren Servis garantisi altındadır.',
    },
    {
      q: 'Fiyatlar neden bu kadar değişken?',
      a: 'Otomatik şanzıman karmaşık bir yapıdır. Vuruntu şikayeti bazen sadece 3.000 TL\'lik bir sensörden, bazen 30.000 TL\'lik kavrama setinden kaynaklanabilir. Bu yüzden araç incelenmeden verilen fiyatlar yanıltıcı olur.',
    },
  ],

  'mekatronik-nedir': [
    {
      q: 'Mekatronik kart arızası nasıl anlaşılır?',
      a:
        'Araçta vites geçişlerinde sarsıntı, vuruntu, geri vitese geçememe, ' +
        'ekranda anahtar simgesi çıkması veya PRND ışıklarının yanıp sönmesi en tipik ' +
        'belirtilerdir. Diyagnoz cihazı P17xx serisi arıza kodlarını gösterir.',
    },
    {
      q: 'Mekatronik kart değişimi mi tamiri mi?',
      a:
        'Arızanın boyutuna göre karar verilir. Kart üzerindeki iletken yollar yanmadıysa ' +
        'profesyonel onarım mümkündür. Ağır hidrolik hasarlarda komple değişim daha ' +
        'garantili çözümdür. Ücretsiz ön tanı sonrası net karar verilir.',
    },
    {
      q: 'Mekatronik kart değişimi fiyatı 2026?',
      a:
        '2026 yılında revizyonlu üniteler 25.000 TL\'den başlarken sıfır orijinal ' +
        'mekatronik setleri işçilik dahil 50.000–65.000 TL bandına çıkabilmektedir. ' +
        'Kesin fiyat ücretsiz ön tanı sonrası yazılı olarak sunulur.',
    },
    {
      q: 'Mekatronik arıza kaçıncı kilometre de fark edilir?',
      a:
        'Genellikle 80.000 km sonrasında belirti vermeye başlar. Bakım yapılmayan ' +
        'veya sert kullanılan araçlarda çok daha erken kilometre aralıklarında da görülebilir.',
    },
    {
      q: 'Mekatronik arızası aracın sürülmesine engel mi?',
      a:
        'Evet, mekatronik arızalandığında araç vites seçemez veya belirli viteslerde ' +
        'kilitli kalır. Bu durum sürüş güvenliğini tehlikeye atar ve şanzıman içindeki ' +
        'dişlilere zarar verebilir — ertelenmemesi gerekir.',
    },
  ],

  'solenoid-valf-ariza-belirtileri': [
    {
      q: 'Solenoid valf arızası nasıl anlaşılır?',
      a:
        'Araç vites değiştirirken sarsıntı yapıyorsa, geri vitese geçmiyorsa veya ' +
        'PRNDS ışıkları yanıp sönüyorsa solenoid valf arızasından şüphelenilmelidir. ' +
        'OBD cihazı P17xx serisi kodlar gösterebilir.',
    },
    {
      q: 'DSG solenoid valf değişimi fiyatı 2026?',
      a:
        'Fiyatlar valfin tipine ve modele (DQ200/DQ250) göre değişmektedir. ' +
        'Tekli solenoid değişimi komple mekatronik değişimine göre çok daha ekonomiktir. ' +
        'Kesin fiyat ücretsiz ön tanı sonrası yazılı olarak sunulur.',
    },
    {
      q: 'Solenoid valf arızası tehlikeli mi?',
      a:
        'Evet, sürüş sırasında şanzımanın aniden boşa çıkmasına veya vitesin ' +
        'kilitlenmesine neden olarak sürüş güvenliğini tehlikeye atabilir. ' +
        'Limp mode\'a giren araç en kısa sürede servise getirilmelidir.',
    },
    {
      q: 'Solenoid valf temizliği tamir eder mi?',
      a:
        'Sadece yağ kirliliğinden kaynaklanan tıkanıklıksa temizlik sonuç verebilir. ' +
        'Ancak mekanik aşınma veya bobinde elektriksel hasar varsa değişim şarttır.',
    },
    {
      q: 'DQ200 ve DQ250 solenoid farkı nedir?',
      a:
        'DQ200 kuru tip şanzımandır ve solenoidleri daha küçüktür; basınç tüpü gevşemesi ' +
        'kronik sorundur. DQ250 ıslak tiptir ve solenoidleri sürekli yağ banyosu içinde ' +
        'çalışır — yağ bakımı kritik önem taşır.',
    },
  ],

  'dsg-sanziman-omru-bakimi': [
    {
      q: 'DSG şanzıman kaç km dayanır?',
      a:
        'Düzenli bakımla 200.000–250.000 km üzerine çıkabilir. DQ200 kuru kavramada ' +
        'kavrama seti genellikle 120.000–150.000 km\'de yenilenme gerektirir. ' +
        'DQ250 ıslak tip şanzımanlar genellikle daha uzun ömürlüdür.',
    },
    {
      q: 'DSG yağ değişimi ne zaman yapılmalı?',
      a:
        'Islak tip (DQ250, DQ500) şanzımanlarda her 60.000 km\'de bir yağ ve filtre ' +
        'değişimi önerilir. Kuru tip DQ200\'de şanzıman yağı yoktur ancak mekatronik ' +
        'hidrolik sıvısı periyodik kontrol gerektirir.',
    },
    {
      q: 'DQ200 mu DQ250 mu daha uzun ömürlü?',
      a:
        'DQ250 ıslak kavrama yapısı ve yağ banyolu sistemi sayesinde ısıyı daha iyi ' +
        'yönetir ve genellikle daha uzun ömürlüdür. DQ200 şehir içi yoğun kullanımda ' +
        'daha çabuk aşınır.',
    },
    {
      q: 'DSG bakımı yapılmazsa ne olur?',
      a:
        'Vites geçişlerinde vuruntu, titreme ve kavramanın erken bitmesi meydana gelir. ' +
        'Geç kalındığında yüksek maliyetli mekatronik arızaları kaçınılmaz hale gelir — ' +
        'erken müdahale her zaman daha ekonomiktir.',
    },
    {
      q: 'DSG şanzıman ömrü nasıl uzatılır?',
      a:
        'Ani kalkışlardan kaçınarak, trafikte S modunu kullanarak ve 60.000 km\'de bir ' +
        'profesyonel yağ değişimi yaptırarak ömrü önemli ölçüde artırabilirsiniz. ' +
        'Adaptasyon kalibrasyonu da kritik bir bakım adımıdır.',
    },
  ],
};
