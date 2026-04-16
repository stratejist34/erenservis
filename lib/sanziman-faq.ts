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
        "2026 yılında DQ200 kavrama değişimi 55.000–65.000 TL, DQ250'de " +
        '62.000–72.000 TL aralığındadır. Volant hasarı varsa bu rakam yükselir. ' +
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
        'DQ200 kuru kavrama 55.000–65.000 TL, DQ250\'de 62.000–72.000 TL, ' +
        'DQ381\'de 70.000–82.000 TL aralığındadır. ' +
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
        'durumlarda tamir 14.000–25.000 TL\'ye çözülebilir. Kart fiziksel ' +
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
        'DQ200 için orijinal kart 2026 Nisan itibarıyla 45.000–58.000 TL, ' +
        'muadil 36.000–44.000 TL civarındadır. Her ikisi de 6 ay garanti ' +
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
            'DQ200 için tamir 14.000–20.000 TL, değişim 45.000–58.000 TL. ' +
            'DQ250 için tamir 18.000–25.000 TL, değişim 55.000–68.000 TL aralığındadır. ' +
            'Kesin fiyat hata kodu okuma ve fiziksel inceleme sonrası verilir. ' +
            'Eren Servis\'te ön tanı ücretsizdir.',
        },
        {
          q: 'Telefonda mekatronik kart fiyatı öğrenebilir miyim?',
          a:
            'Genel bir fiyat aralığı verilebilir ancak net fiyat için araç mutlaka ' +
            'getirilip hata kodu okunmalıdır. Aynı semptom (örneğin vuruntu) bazen ' +
            'solenoid temizliğiyle 14.000 TL\'ye, bazen kart değişimiyle 58.000 TL\'ye ' +
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
            '45.000–58.000 TL, muadil 36.000–44.000 TL civarındadır. Her ikisi de ' +
            '6 ay garantilidir. Araç yaşı ve kullanım şekline göre öneri yapılır.',
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
      a: 'Nisan 2026 itibarıyla şanzıman tamir fiyatları arıza tipine göre değişir: DSG kavrama değişimi 55.000–72.000 TL, mekatronik tamiri 14.000–25.000 TL, CVT revizyonu 58.000–78.000 TL aralığındadır. Net maliyet ancak ücretsiz ön tanı sonrası belirlenebilir.',
    },
    {
      q: 'Şanzıman tamiri mi yoksa komple değişim mi mantıklı?',
      a: 'Eğer şanzıman gövdesinde çatlak yoksa veya metal kirliliği tüm dişli grubuna yayılmadıysa tamir (revizyon) her zaman daha mantıklıdır. Tamir maliyeti, sıfır şanzıman fiyatının genellikle %20-30\'u kadardır ve 6 ay garanti ile sunulur.',
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
      a: 'Yaptığımız tüm şanzıman revizyon ve parça değişim işlemleri 6 ay garanti kapsamındadır. Garanti belgesi yazılı olarak teslim edilir.',
    },
    {
      q: 'Fiyatlar neden bu kadar değişken?',
      a: 'Otomatik şanzıman karmaşık bir yapıdır. Vuruntu şikayeti bazen sadece 6.000 TL\'lik bir sensörden, bazen 65.000 TL\'lik kavrama setinden kaynaklanabilir. Bu yüzden araç incelenmeden verilen fiyatlar yanıltıcı olur.',
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
        '2026 yılında revizyonlu üniteler 45.000 TL\'den başlarken sıfır orijinal ' +
        'mekatronik setleri işçilik dahil 55.000–68.000 TL bandına çıkabilmektedir. ' +
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

  'dsg-volant-kavrama-paketi': [
    {
      q: 'Kavrama değişirken volant da değiştirilmeli mi?',
      a:
        'Şanzıman sökülmüşken volantın kontrol edilmesi zorunludur. ' +
        'Kavrama aşınması sırasında dökülen metal tozlar volant yüzeyini çizer. ' +
        'Hasarlı volantla yeni kavrama takılırsa 3 ayda aynı sorun tekrarlar. ' +
        'İkisini aynı anda değiştirmek tek seferlik işçilikle tasarruf sağlar.',
    },
    {
      q: 'DSG volant + kavrama paketi 2026\'da ne kadar tutar?',
      a:
        'DQ200 için volant + kavrama kombo paketi 2026\'da muadil parçayla 62.000–72.000 TL, ' +
        'orijinal parçayla 80.000–95.000 TL arasındadır. ' +
        'İkisi ayrı yapılsaydı işçilik iki kez ödenirdi — paket her zaman daha avantajlıdır.',
    },
    {
      q: 'Volant hasarı nasıl anlaşılır?',
      a:
        'En belirgin belirtiler şunlardır: kalkışta titreme, rölantide şanzımandan gelen vuruntu, ' +
        'kavrama baskısında metalik ses ve vites geçişlerinde darbe hissi. ' +
        'Cihazlı tanı ve test sürüşüyle kesin teşhis konulur.',
    },
    {
      q: 'DQ200 ve DQ250\'de volant sorunu farkı nedir?',
      a:
        'DQ200 kuru kavramalı olduğu için metal toz birikmesi volant hasarını hızlandırır — ' +
        'en sık volant sorunu bu modelde görülür. ' +
        'DQ250\'de ıslak kavrama yağ banyosunda çalıştığından volant hasarı daha nadirdir.',
    },
    {
      q: 'Volant + kavrama değişimi kaç gün sürer?',
      a:
        'Bostancı servisimizde DQ200 volant + kavrama paketi genellikle 1–2 iş günü içinde tamamlanır. ' +
        'Şanzıman sökme-takma, parça değişimi, adaptasyon kalibrasyonu ve test sürüşü bu süreye dahildir.',
    },
  ],

  'en-iyi-sanziman-yagi': [
    {
      q: 'DSG şanzıman için en iyi yağ hangisi?',
      a:
        'DQ200 için VW G055529A2 hidrolik sıvısı veya Pentosin CHF 202 kullanılır. ' +
        'DQ250 için VW G052182A2 veya Pentosin FFL-2 uygundur. ' +
        'Orijinal şartnameye uymayan yağlar mekatronik ve kavrama hasarına zemin hazırlar.',
    },
    {
      q: 'CVT şanzımana normal ATF yağı konulur mu?',
      a:
        'Kesinlikle hayır. CVT şanzımanlar üreticinin onayladığı özel CVT Fluid gerektirir. ' +
        'Normal ATF, metal kayış ve kasnak yüzeyine kalıcı hasar vererek çok pahalı revizyona neden olur.',
    },
    {
      q: 'DSG yağı ne zaman değiştirilmeli?',
      a:
        'DQ250 şanzımanda yağ ve filtre her 60.000 km\'de değiştirilmelidir. ' +
        'DQ200\'de mekatronik hidrolik sıvısı 40.000 km\'de kontrol edilir. ' +
        'Yağ değişimiyle birlikte adaptasyon kalibrasyonu da yapılmalıdır.',
    },
    {
      q: 'ZF şanzımanda yaşam boyu yağ gerçek mi?',
      a:
        'Hayır, yanıltıcıdır. ZF 8HP şanzımanlarda 80.000 km sonrası yağ değişimi önerilir. ' +
        'Yüksek km ve zorlu kullanımda yağ bozunur; değiştirilmezse solenoidler ve kavrama hasarı gelişir.',
    },
    {
      q: 'Şanzıman yağı değiştirilmezse ne olur?',
      a:
        'Kirli yağdaki metal partiküller solenoidleri tıkar, kavramayı ve mekatroniği erken aşındırır. ' +
        '60.000 km\'de yapılmayan yağ değişimi 150.000 km\'de 50.000+ TL şanzıman revizyonuna dönüşebilir.',
    },
  ],

  'sanziman-yag-degisimi-fiyat-2026': [
    {
      q: 'DSG yağ değişimi 2026\'da ne kadar tutar?',
      a:
        'DQ250 şanzımanda yağ + filtre + adaptasyon paketi 2026\'da 10.000–14.000 TL arasındadır. ' +
        'DQ200 mekatronik sıvısı değişimi 5.000–8.000 TL\'dir. Fiyatlar araca ve işçiliğe göre değişir.',
    },
    {
      q: 'CVT şanzıman yağ değişimi ne kadar?',
      a:
        'CVT yağ değişimi 2026 fiyatlarıyla 6.000–10.000 TL arasındadır. ' +
        'Üreticinin onaylı CVT Fluid kullanılmalı; normal ATF CVT\'ye ciddi hasar verir.',
    },
    {
      q: 'Şanzıman yağ değişiminde adaptasyon kalibrasyonu gerekli mi?',
      a:
        'DQ250 DSG şanzımanlarda evet, zorunludur. Adaptasyon sıfırlanmazsa şanzıman eski yağa göre ' +
        'öğrenilmiş değerlerle çalışır; vuruntu ve sert geçişler başlar. ' +
        'Bostancı servisimizde yağ değişimiyle birlikte standart uygulanır.',
    },
    {
      q: 'Sadece yağ mı değiştirilmeli, filtre de mi?',
      a:
        'Filtre değişimi zorunludur. Doymuş bir filtre yeni temiz yağı da kirletir ve solenoid basıncını düşürür. ' +
        'Yağ değişimini filtresiz yapmak yarım bir bakımdır — uzun vadede daha pahalıya mal olur.',
    },
    {
      q: 'ZF şanzıman yağ değişimi ne zaman yapılmalı?',
      a:
        '"Yaşam boyu yağ" ifadesine rağmen ZF 8HP şanzımanlarda 80.000 km sonrası değişim önerilir. ' +
        '2026\'da ZF yağ değişimi fiyatı 10.000–16.000 TL arasındadır.',
    },
  ],
  'dsg-sanziman-tamiri': [
    {
      q: 'DSG şanzıman tamiri ne kadar sürer?',
      a:
        'Arızanın boyutuna göre değişir. Mekatronik kart tamiri genellikle 1 iş günü, ' +
        'kavrama paketi değişimi 2–3 iş günü, komple revizyon ise 3–5 iş günü sürer. ' +
        'Parça temin süreleri önceden bildirilir.',
    },
    {
      q: 'DSG tamiri garantili mi?',
      a:
        'Evet. Eren Servis\'te yapılan tüm DSG şanzıman onarım ve parça değişim işlemleri ' +
        '6 ay garanti kapsamındadır. Garanti belgesi yazılı olarak teslim edilir.',
    },
    {
      q: 'DQ200 şanzıman tamiri 2026 fiyatı nedir?',
      a:
        'Arıza tipine göre: Mekatronik kart tamiri 14.000–25.000 TL, kavrama paketi değişimi ' +
        '55.000–72.000 TL, basınç tüpü değişimi 8.000–12.000 TL aralığındadır. ' +
        'Net fiyat ücretsiz ön tanı sonrası yazılı olarak sunulur.',
    },
    {
      q: 'DSG tamirinde orijinal parça mı kullanılıyor?',
      a:
        'Evet, OEM veya orijinal eşdeğer (OE) parça kullanılmaktadır. Müşterinin talebiyle ' +
        'revizyonlu ünite de tercih edilebilir. Kullanılan tüm parçalar faturada detaylı ' +
        'olarak belirtilir.',
    },
    {
      q: 'DSG arızası erken teşhis edilirse fark yapar mı?',
      a:
        'Kesinlikle. Vuruntu başladığında sadece kavrama temizliği veya kart tamiri ile ' +
        'çözülebilecek arıza, 3 ay beklendiğinde kavrama + mekatronik birlikte etkilenip ' +
        'maliyet 3–5 kat artabilir. İlk belirtide ücretsiz ön tanı için gelin.',
    },
  ],

  'sanziman-bakimi': [
    {
      q: 'Şanzıman yağı ne sıklıkla değiştirilmeli?',
      a:
        'Şanzıman tipine göre değişir: DSG (DQ200/DQ250/DQ381) her 60.000 km, CVT her ' +
        '40.000 km, konvansiyonel otomatik her 60.000–80.000 km yağ değişimi önerilir. ' +
        'Yoğun şehir trafiği veya çekici kullanımı bu aralığı kısaltabilir.',
    },
    {
      q: 'Şanzıman bakımı ne kadar sürer?',
      a:
        'Temel yağ değişimi genellikle 1–2 saat, kapsamlı bakım + tanı paketi ise ' +
        '2–3 saat sürer. Araç aynı gün teslim edilir. Bekleme salonumuz mevcuttur.',
    },
    {
      q: 'Şanzıman yağı değişimi olmadan ne olur?',
      a:
        'Zamanla yağ oksitlenir, viskozitesi düşer ve içindeki metal partiküller birikir. ' +
        'Bu durum solenoid valfler ve kavrama disklerinde hızlı aşınmaya yol açar. ' +
        '100.000 km yağ değiştirilmeyen bir DSG\'de kavrama tamiri kaçınılmaz hale gelir.',
    },
    {
      q: 'Bakım sırasında hangi sorunlar tespit edilebilir?',
      a:
        'OBD tanı taraması; mekatronik kart arıza kodları, solenoid valf hataları, ' +
        'adaptasyon kayması ve kavrama slipajını erken aşamada tespit eder. Elektrik ' +
        'yokken mekanik inceleme de paralel olarak yapılır.',
    },
    {
      q: 'Şanzıman bakımında 6 ay garanti var mı?',
      a:
        'Yapılan tüm bakım ve parça değişim işlemleri 6 ay işçilik garantisi kapsamındadır. ' +
        'Garanti belgesi yazılı olarak teslim edilir.',
    },
  ],

  'dsg-hangi-araclarda-var': [
    {
      q: 'Aracımda DSG var mı nasıl anlarım?',
      a:
        'En kolay yöntem araç ruhsatındaki şanzıman koduna bakmaktır. Direksiyon ' +
        'arkasında paddle shifter (kulak vites kolu) varsa büyük ihtimalle DSG\'dir. ' +
        'OBD okuma cihazıyla da saniyeler içinde teyit edilir. Bizim servisimizde ' +
        'ücretsiz ön tanı sırasında şanzıman tipi belirlenir.',
    },
    {
      q: 'DQ200 ile DQ250 arasındaki fark nedir?',
      a:
        'DQ200, 7 ileri kuru kavramalı DSG modelidir — küçük motorlu araçlarda (1.0–1.6) ' +
        'kullanılır, yakıt ekonomisi yüksektir. DQ250, 6 ileri ıslak kavramalıdır — daha ' +
        'güçlü ve quattro sistemli araçlarda tercih edilir. Kuru kavrama soğuk başlangıçta ' +
        'titremeye daha yatkındır; ıslak kavrama ise daha uzun ömürlüdür.',
    },
    {
      q: 'DSG olan araçlarda tamir ne zaman gerekir?',
      a:
        'DQ200\'de 60.000–120.000 km arasında kavrama aşınması başlayabilir. DQ250\'de ' +
        '80.000–150.000 km yağ değişimi yapılmazsa içsel hasara yol açar. DQ381 ve DQ500 ' +
        '150.000 km\'ye kadar sorunsuz çalışabilir — ancak düzenli yağ değişimi şarttır. ' +
        'Vuruntu, titreme veya vites geçiş gecikmesi ilk uyarı işaretleridir.',
    },
    {
      q: 'Audi S-tronic ile VW DSG aynı şey mi?',
      a:
        'Evet, teknik olarak aynı donanım grubudur. Audi\'nin "S-tronic" ismiyle sattığı ' +
        'şanzıman, Volkswagen\'in "DSG" olarak pazarladığı ile aynı mekanik temele dayanır. ' +
        'Örneğin Audi A3 8V\'deki DQ200, VW Golf 7 1.4 TSI\'daki ile özdeştir.',
    },
    {
      q: 'DSG şanzıman tamiri Bostancı\'da nerede yaptırılır?',
      a:
        'Eren Servis, Bostancı Oto Sanayi Sitesi\'nde DSG mekatronik kart tamiri, kavrama ' +
        'değişimi ve DQ200/DQ250/DQ381 revizyonu konusunda uzmanlaşmıştır. Ücretsiz ön tanı ' +
        'için 0532 715 37 51 numaradan randevu alabilirsiniz.',
    },
  ],

  'otomatik-sanziman-vuruntu': [
    {
      q: 'Otomatik şanzımanda vuruntu ne anlama gelir?',
      a:
        'Vites geçişinde hissedilen ani darbe veya sarsıntıya "vuruntu" denir. ' +
        'En yaygın neden kavrama sistemi arızasıdır. DSG ve PowerShift gibi çift ' +
        'kavramalı şanzımanlarda daha sık görülür; tork konvertörlü ZF ve Aisin ' +
        'şanzımanlarda ise oldukça nadirdir.',
    },
    {
      q: 'Hangi şanzıman tipi en çok vuruntu yapar?',
      a:
        'Kuru kavramalı DSG (DQ200) en sık vuruntu yapan tiptir — özellikle 1→2 geçişte. ' +
        'Ford PowerShift (DPS6) ve Renault EDC7 de kavrama mekanizmaları nedeniyle vuruntya ' +
        'yatkındır. Tork konvertörlü şanzımanlar (Mercedes 7G, BMW ZF 8HP) bu sorundan ' +
        'büyük ölçüde muaftır.',
    },
    {
      q: 'Vuruntu tehlikeli mi, sürmeye devam edebilir miyim?',
      a:
        'Başlangıçta tehlike oluşturmaz, ancak ertelendikçe masraf katlanır. Kavrama ' +
        'aşınması ilerledikçe metal toz birikimi mekatronik karta zarar verir. ' +
        'İlk belirtiden sonraki 1–2 ay içinde servis kontrolü, toplam maliyeti ' +
        '3–5 kat azaltabilir.',
    },
    {
      q: 'Vuruntu ile titreşim arasındaki fark nedir?',
      a:
        'Vuruntu: Vites geçişi sırasında yaşanan kısa, ani bir darbe hissidir — araç ' +
        'bir an ileri atlar veya sarsılır. Titreşim: Rölantide veya sabit hızda sürekli ' +
        'hissedilen salınımdır. Titreşim genellikle volant veya motor takozlarını işaret ' +
        'eder; vuruntu ise kavrama veya solenoid sistemini.',
    },
    {
      q: 'Şanzıman vuruntusu için ne kadar ödenir 2026?',
      a:
        'Maliyet arıza tipine ve ne kadar geciktirildiğine bağlıdır. DSG kavrama ' +
        'değişimi 55.000–72.000 TL, PowerShift DPS6 kavrama kiti 45.000–65.000 TL, ' +
        'solenoid valf tamiri 8.000–15.000 TL aralığındadır. Ücretsiz ön tanı sonrası ' +
        'net fiyat verilir.',
    },
  ],
};
