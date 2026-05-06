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
      a: 'Mekatronik onarımı hasarın boyutuna göre değişir. Elektronik kart tamiri genellikle mekanik revizyondan daha ekonomiktir. Kesin fiyat, diagnostik sonrası yazılı olarak sunulur — Eren Otomatik Şanzıman Servisi\'nde ön diagnostik ücretsizdir.',
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
      a: 'Yağ değişim geçmişi belgelenmeli, diagnostik taramasında hata kodu bulunmamalıdır. Test sürüşünde 60–90 km/s aralığında titreme ve sert vites geçişi yokluğu kontrol edilmeli. Eren Otomatik Şanzıman Servisi\'nde ikinci el araç şanzıman kontrolü ücretsiz yapılmaktadır.',
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
        'etkilenmişse 1,5–2 güne uzayabilir. Eren Otomatik Şanzıman Servisi\'nde araç tesliminde ' +
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
        'Eren Otomatik Şanzıman Servisi\'nde 6 ay / 10.000 km işçilik garantisi sunulur. ' +
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
        'Evet. Eren Otomatik Şanzıman Servisi\'nde orijinal veya OEM eşdeğeri parça kullanılır. ' +
        'Muadil parça kullanımı kısa vadeli maliyet avantusu uzun vadede, ' +
        'ancak kalıcı arıza riski de yüksek tutar. Ucuz or orijinal parça ' +
        'tercihi göre tanı sürece KDS şanzıman yazılımı uyumlu çalışamaz.',
    },
  ],

  'otomatik-sanziman-sarsinti': [
    {
      q: 'Şanzıman sarsıntısı ile vuruntu aynı şey mi?',
      a:
        'Hayır. Vuruntu vites geçişinde ani bir darbe hissidir; sarsıntı ise sürekli ' +
        'veya rölantide süren bir titreşimdir. Vuruntu kavrama balatası, sarsıntı ise ' +
        'daha çok volant veya tork konvertör arızasını işaret eder. İkisi birlikte görülebilir.',
    },
    {
      q: 'Rölantide sarsıntı varsa hangi parça şüphelenilir?',
      a:
        'Rölantide (D vitesinde dururken) sarsıntının en yaygın kaynağı çift kütleli ' +
        'volanttır. Volantın iç yayları yorulur, rölantide motor tork dalgalanmasını ' +
        'sönümleyemez. Kavrama balatası aşınması da bu şekilde başlayabilir.',
    },
    {
      q: 'Klima açılınca sarsıntı artıyor — sebebi ne?',
      a:
        'Klima kompresörü rölantide motora yük bindirir. Volant veya kavrama paketi ' +
        'yorgunsa bu yük dalgalanması direkt şanzımana geçer ve sarsıntı belirginleşir. ' +
        '"Klima açınca artan sarsıntı" genellikle volant aşınmasının erken belirtisidir.',
    },
    {
      q: 'Sarsıntı kendi geçer mi, yoksa büyür mü?',
      a:
        'Kendi geçmez — büyür. Volant veya kavrama aşınması geri dönüşsüzdür. ' +
        'Erken evrede yalnızca balata değişimi yeterlidir; geç kalındığında volant ' +
        'da değişir, maliyet 3–4 kat artar.',
    },
    {
      q: 'Tork konvertörlü şanzımanda sarsıntı olur mu?',
      a:
        'Olur. ZF ve Aisin tork konvertörlü şanzımanlarda "lockup" titreşimi ' +
        'görülebilir. Tork konvertör kilitleme kavraması aşınırsa belirli hızlarda ' +
        '(genellikle 60-80 km/h) sürekli sarsıntı hissedilir. Solenoid temizliği veya ' +
        'tork konvertör revizyonu gerekir.',
    },
  ],

  'volant-titresim': [
    {
      q: 'Çift kütleli volant nedir, neden önemli?',
      a:
        'Çift kütleli volant (DMF), motor titreşimlerini sönümleyen yay mekanizmalı ' +
        'ağır bir disktir. DSG ve modern manuel şanzımanlarda standarttır. İç yayları ' +
        'yorulduğunda motor titreşimi direkt şanzımana iletilir — rölantide ve düşük ' +
        'devirde sarsıntı başlar.',
    },
    {
      q: 'Volant değişimi zorunlu mu, tamir olur mu?',
      a:
        'Çift kütleli volant tamiri genellikle yapılmaz — yay mekanizması bir kez ' +
        'bozulduğunda yeniden güvenli biçimde çalışmaz. Kavrama paketi değişimiyle ' +
        'birlikte volantın da değişmesi önerilir; ayrı ayrı değişim daha maliyetli olur.',
    },
    {
      q: 'Volant ömrü kaç kilometre?',
      a:
        'Normal kullanımda 150.000–250.000 km arası beklenir. Yoğun şehir trafiği, ' +
        'dur-kalkın çok olduğu kullanım veya düşük devirde sürüş (lugging) ömrü ' +
        'ciddi kısaltır. 2.0 TDI motorlu DSG araçlarda 150.000 km sınırı önemlidir.',
    },
    {
      q: 'Volant arızasının ilk belirtisi nedir?',
      a:
        'En erken belirti rölantide "dişli zincir" gibi metalik takırtı ve kliması ' +
        'açıldığında artan titreşimdir. Aracı çalıştırır çalıştırmaz duyulan kısa ' +
        'metalik ses de volant yay yorulmasının ilk işaretidir.',
    },
  ],

  'otomatik-sanziman-ariza-lambasi': [
    {
      q: 'Şanzıman arıza lambası yandığında araç sürülür mü?',
      a:
        'Sarı arıza lambası yandıysa dikkatli biçimde en yakın servise gidebilirsiniz. ' +
        'Ancak kırmızı ışık, yanıp sönen lamba veya kayma/vuruntu eşlik ediyorsa aracı durdurun. ' +
        'Limp mode devreye girmiş olabilir — zorla sürmek mekatronik kartı kalıcı olarak bozabilir.',
    },
    {
      q: 'Arıza lambası hangi durumlarda kendi söner?',
      a:
        'Geçici bir voltaj düşüşü veya sensör titremesi lambayı tetikleyebilir, motor yeniden ' +
        'başlatılınca söner. Ancak hata kodu mekatronik kartta kayıtlı kalır. Lamba söndü diye ' +
        'geçtiğini düşünmeyin — hata kodu okutmadan sorunun gerçekten geçip geçmediği bilinemez.',
    },
    {
      q: 'Sarı ile kırmızı arıza lambası arasındaki fark nedir?',
      a:
        'Sarı (amber) lamba "uyarı" anlamına gelir: sürüş devam edebilir ama servis gereklidir. ' +
        'Kırmızı lamba "acil durdur" anlamına gelir: sürüşü sonlandırın. ' +
        'Bazı şanzıman tiplerinde (DSG, EDC) sarı sürekli yanıyorsa 48 saat, yanıp sönüyorsa aynı gün servise gidin.',
    },
    {
      q: 'Hata kodu okumadan parça değiştirilmeli mi?',
      a:
        'Hayır. Arıza lambası onlarca farklı hata kodu tarafından tetiklenebilir. ' +
        'Sensör temizliğiyle geçen bir sorun mekatronik kart değişimiyle aynı lambayla sonuçlanır. ' +
        'Eren Otomatik Şanzıman Servisi\'nde KDS ile hata kodu okuma ücretsizdir — onaysız hiçbir işlem yapılmaz.',
    },
    {
      q: 'Renault EDC ile DSG arıza lambası aynı mı?',
      a:
        'Hayır. DSG genellikle "P" veya anahtar simgesi gösterir; EDC ise sarı dişli simgesiyle uyarır. ' +
        'Her iki sistemin hata kodu mantığı ve teşhis yöntemi birbirinden farklıdır. ' +
        'Model bazında doğru teşhis için marka uyumlu teşhis cihazı gereklidir.',
    },
  ],

  'edc-ariza-lambasi': [
    {
      q: 'Renault EDC\'de sarı dişli ışığı ne zaman söner?',
      a:
        'Lamba kendiliğinden sönebilir ama bu sorunun geçtiği anlamına gelmez. ' +
        'Hata kodu EDC kontrol ünitesinde kayıtlı kalır. ' +
        'Lamba söndükten sonra da en kısa sürede hata kodu okutmanızı öneririz.',
    },
    {
      q: 'EDC şanzımanda sarı ışık yandı, araç sürülür mü?',
      a:
        'Lamba sürekli yanıyorsa ve başka belirti yoksa kısa mesafe sürülebilir. ' +
        'Yanıp sönüyorsa, vuruntu veya gecikmeli geçiş eşlik ediyorsa sürüşü kısaltın. ' +
        'Araç hareket etmiyorsa çekici çağırın.',
    },
    {
      q: 'EDC arıza lambasını standart OBD cihazı okuyabilir mi?',
      a:
        'Temel hata kodlarını okuyabilir ama EDC\'nin tüm parametrelerini görmek için ' +
        'Renault/Nissan uyumlu teşhis cihazı gereklidir. ' +
        'Eksik teşhis gereksiz parça değişimine yol açabilir.',
    },
    {
      q: 'EDC solenoid valf değişimi zorunlu mu, temizleme yeterli mi?',
      a:
        'Tıkanıklık düzeyi ve valf durumuna göre değişir. ' +
        'Erken evrede temizleme yeterli olabilir. İleri tıkanıklıkta değişim gerekir. ' +
        'Eren Otomatik Şanzıman Servisi\'nde teşhis sonrası en uygun seçenek belirlenir.',
    },
  ],

  'cvt-ariza-lambasi': [
    {
      q: 'CVT arıza lambası yandığında ne yapmalıyım?',
      a:
        'Hemen durmak şart değildir ama aynı gün servise gitmenizi öneririz. ' +
        'CVT\'de lamba nadiren yanar ve yandığında genellikle ciddi bir sorunu işaret eder. ' +
        'Sürüşe zorla devam etmek kayış hasarını büyütür.',
    },
    {
      q: 'CVT arıza lambası yağ değişimiyle söner mi?',
      a:
        'Yağ kalitesi düşüklüğünden kaynaklanan lambalar yağ değişimi sonrası söner. ' +
        'Ama önce hata kodu okutmadan yalnızca yağ değişimi yapmak körleme bir yaklaşımdır. ' +
        'Asıl neden kayış veya kontrol ünitesiyse yağ değişimi lambayla etkisi olmaz.',
    },
    {
      q: 'CVT şanzımana yanlış yağ konursa ne olur?',
      a:
        'CVT, özgün CVTF (Continuously Variable Transmission Fluid) gerektirir. ' +
        'Yanlış tip yağ kayış sürtünme katsayısını bozar, kontrol ünitesi anomali tespit eder. ' +
        'Kısa sürede arıza lambası yanar ve kayma başlar.',
    },
    {
      q: 'CVT tamiri mi, değişim mi daha avantajlı?',
      a:
        'Kayış veya pully erken aşamada yakalanırsa tamir mümkün ve çok daha ucuzdur. ' +
        'İleri hasar durumunda komple revizyon gerekebilir. ' +
        'Eren Otomatik Şanzıman Servisi\'nde teşhis sonrası net karar verilir — gereksiz tamir veya değişim önerilmez.',
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
        "Eren Otomatik Şanzıman Servisi'nde ilk hata kodu okuma ücretsizdir. Okuma sonrası " +
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
        'yapılmazsa vuruntu devam eder. Eren Otomatik Şanzıman Servisi\'nde adaptasyon işlemi ' +
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
            'Eren Otomatik Şanzıman Servisi\'nde ön tanı ücretsizdir.',
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
            'fiyatlandırılır. Eren Otomatik Şanzıman Servisi\'nde gizli maliyet yoktur, tüm kalemler ' +
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
      a: 'Eren Otomatik Şanzıman Servisi\'nde verilen fiyatlara; arıza tespiti, sökme-takma işçiliği, değişen orijinal/OEM parçalar, yeni şanzıman yağı ve adaptasyon işlemleri dahildir. Sürpriz ek ücret çıkarılmaz.',
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
        'kronik sorundur. DQ250 ıslak tiptir ve solenoidleri sürekli yağ banyosunda ' +
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
        'DQ250 ıslak kavrama yapısı ve yağ banyosu sayesinde ısıyı daha iyi ' +
        'yönetir ve genellikle daha uzun ömürlüdür. DQ200 kuru kavramalı olduğundan şehir içi yoğun kullanımda ' +
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
        'Evet. Eren Otomatik Şanzıman Servisi\'nde yapılan tüm DSG şanzıman onarım ve parça değişim işlemleri ' +
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
        'Eren Otomatik Şanzıman Servisi, Bostancı Oto Sanayi Sitesi\'nde DSG mekatronik kart tamiri, kavrama ' +
        'değişimi ve DQ200/DQ250/DQ381 revizyonu konusunda uzmanlaşmıştır. Ücretsiz ön tanı ' +
        'için 0532 715 37 51 numaradan randevu alabilirsiniz.',
    },
  ],

  'cvt-vuruntu': [
    {
      q: 'CVT şanzımanda vuruntu neden olur?',
      a:
        'CVT vuruntusunun en yaygın nedeni metal kayış veya pully aşınmasıdır. ' +
        'Kayış, vites basamağı yerine iki pully arasında kademesiz geçiş yapar; ' +
        'aşındığında sabit bir hız bandında (genellikle 40–70 km/s) titreşim oluşur. ' +
        'Kontrol birimi hatası ve bozulmuş CVT yağı da aynı belirtiyi verebilir.',
    },
    {
      q: 'CVT şanzımanda vuruntu ciddi midir?',
      a:
        'CVT\'de vuruntu nadirdir — ama olduğunda ciddiye alınmalıdır. Kayış aşınması ' +
        'erken dönemde yağ değişimi veya adaptasyon kalibrasyonuyla durdurulabilir; ' +
        'ileri evrede kayış ve pully seti birlikte değişmek zorunda kalır. ' +
        'Bu onarım tork konvertörlü şanzımana göre daha pahalıdır.',
    },
    {
      q: 'CVT şanzıman yağı değişimi vuruntunu çözer mi?',
      a:
        'Erken evrede evet — bozulmuş CVT yağı kayış sürtünme katsayısını düşürür ' +
        've titreşime neden olur. Doğru viskozitede orijinal CVT yağıyla değişim bu ' +
        'durumu giderebilir. Kayış veya pully mekanik olarak hasar gördüyse yağ ' +
        'değişimi tek başına yeterli olmaz.',
    },
    {
      q: 'Hangi araçlarda CVT şanzıman vuruntu görülür?',
      a:
        'CVT vuruntu en çok Toyota (Corolla, Auris, C-HR), Honda (Jazz, Civic, HR-V), ' +
        'Nissan (Qashqai, X-Trail, Note) ve Subaru modellerinde bildirilmiştir. ' +
        '150.000 km üzeri ve CVT yağı hiç değiştirilmemiş araçlarda risk daha yüksektir.',
    },
  ],

  'edc-vuruntu': [
    {
      q: 'Renault EDC şanzımanda vuruntu neden olur?',
      a:
        'EDC şanzımandaki vuruntunun başlıca nedeni kavrama adaptasyonunun kayması veya ' +
        'solenoid valf kirliliğidir. Özellikle yavaş trafik akışında ve frenden çıkarken ' +
        'belirginleşen titreme, erken evrede adaptasyon sıfırlaması ile geçebilir; ' +
        'ileri evrede kavrama paketi değişimi gerekir.',
    },
    {
      q: 'EDC şanzıman adaptasyon sıfırlama ne kadar tutar?',
      a:
        'Adaptasyon sıfırlama işlemi; diyagnoz ve yazılım kalibrasyonunu kapsar. ' +
        'Kavrama mekanik olarak sağlamsa bu işlem tek başına vuruntunun büyük bölümünü ' +
        'giderebilir. Net ücret ücretsiz ön tanı sonrası belirlenir.',
    },
    {
      q: 'Hangi Renault modellerinde EDC vuruntu görülür?',
      a:
        'EDC şanzıman; Clio IV (2012–2019, 0.9 TCe / 1.2 TCe), Captur (2013–2019, 1.2 TCe), ' +
        'Megane IV (2016–2020, 1.2 TCe), Kadjar (1.2 TCe) ve Nissan Juke (2010–2019, 1.6 DIG-T) ' +
        'modellerinde kullanılmıştır. 1.2 TCe motorla eşleşen EDC versiyonunda şikayet en sık görülür.',
    },
    {
      q: 'EDC ile DSG vuruntusunun farkı nedir?',
      a:
        'Her ikisi de çift kavramalı şanzımandır. EDC ıslak kavrama kullanır, ' +
        'bu nedenle DQ200 kuru kavramanın soğuk hassasiyeti EDC\'de görülmez. ' +
        'EDC vuruntusunun özü daha çok adaptasyon kayması ve solenoid kirliliğidir; ' +
        'DSG\'de ise kavrama plaket aşınması öne çıkar.',
    },
    {
      q: 'EDC vuruntusunu ihmal edersem ne olur?',
      a:
        'Kavrama paketi aşınması ilerledikçe solenoid valfler ve kontrol birimi de etkilenir. ' +
        'Bu aşamada yalnızca kavrama değil, tüm mekatronik grup yenilenmek zorunda kalabilir. ' +
        'Erken teşhis toplam maliyeti 3–4 kat azaltır.',
    },
  ],

  'powershift-vuruntu': [
    {
      q: 'Ford Focus PowerShift vuruntu neden olur?',
      a:
        'DPS6 şanzımandaki vuruntunun ana nedeni kavrama paketi aşınması veya ' +
        'kavrama adaptasyonunun bozulmasıdır. Soğuk havalarda ve düşük hızlarda ' +
        '(10–30 km/s) belirginleşen titreme, erken dönemde adaptasyon sıfırlaması ' +
        'veya yazılım güncellemesiyle geçebilir; ileri evrede kavrama seti değişimi gerekir.',
    },
    {
      q: 'PowerShift DPS6 kavrama değişimi fiyatı 2026?',
      a:
        'Nisan 2026 itibarıyla Ford DPS6 kavrama seti değişimi 45.000–65.000 TL ' +
        'aralığındadır. İşçilik dahil fiyat, aracın modeline ve hasarın boyutuna ' +
        'göre değişir. Net fiyat ücretsiz ön tanı sonrası verilir.',
    },
    {
      q: 'PowerShift adaptasyon sıfırlama ne işe yarar?',
      a:
        'DPS6 kontrol birimi, kavrama tutma noktasını ve geçiş zamanlamasını ' +
        'öğrenerek çalışır. Adaptasyon bozulduğunda geçişler kaba ve vuruntulu olur. ' +
        'Sıfırlama işlemi bu öğrenmeyi temizler ve şanzımanın yeniden kalibrasyon ' +
        'yapmasını sağlar. Erken evrede tek başına çözüm olabilir.',
    },
    {
      q: 'Hangi Ford modellerinde PowerShift vuruntu görülür?',
      a:
        'DPS6 şanzıman; Focus (2012–2018), Fiesta (2013–2019), Kuga (2013–2016), ' +
        'C-Max ve EcoSport modellerinde kullanılmıştır. 1.0 EcoBoost ve 1.6 Ti-VCT ' +
        'motorlu versiyonlarda şikayet en sık görülür.',
    },
    {
      q: 'PowerShift vuruntusunu ihmal edersem ne olur?',
      a:
        'Kavrama paket aşınması ilerledikçe kontrol ünitesi (TCM) ve solenoid valfler ' +
        'de etkilenir. Bu aşamada yalnızca kavrama seti değil TCM tamiri veya değişimi ' +
        'de gerekebilir — toplam maliyet 2–3 kat artar.',
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

  'otomatik-sanziman-kayma': [
    {
      q: 'Otomatik şanzımanda kayma nedir?',
      a:
        'Motor devri yükselirken aracın hızlanmaması veya yeterince ivmelenmemesidir. ' +
        'Şanzıman içinde kavrama (DSG) ya da kayış (CVT) tork aktarımını tam yapamaz — ' +
        'gaza basıldığında motor bağırır ama araç gecikmeli ilerler.',
    },
    {
      q: 'Kayma ile vites atlama aynı şey mi?',
      a:
        'Halk dilinde ikisi aynı anlamda kullanılır. Teknik olarak "vites atlama" ' +
        'motor devrinin ani yükselmesi ve aracın ivmelenmemesi, "kayma" ise tork ' +
        'transferinin zayıflamasıdır. Vites atlama → kaymanın sonucudur.',
    },
    {
      q: 'DSG kayması düzelir mi?',
      a:
        'Düzeltilebilir — ancak nedenine bağlıdır. Mekatronik basınç tüpü sorunu, ' +
        'solenoid kirliliği veya yazılım hatası kaynaklıysa revizyonla çözülür. ' +
        'Kavrama balatası aşınmışsa kavrama değişimi gerekir. Yoksaymak hasarı derinleştirir.',
    },
    {
      q: 'CVT kayması neden tehlikeli?',
      a:
        "CVT'de kayış aşınması geri dönüşsüzdür. Kayışın çelik lamelleri pully " +
        'yüzeyinde iz bırakır; erken müdahale edilmezse kayış + pully seti birlikte ' +
        'değişir ve maliyet 3-4 katına çıkar.',
    },
    {
      q: 'Kayma yaparken aracı kullanmaya devam edebilir miyim?',
      a:
        'Kısa mesafede güvenlik için kullanılabilir ama uzun sürüş yapılmamalıdır. ' +
        'Kayma arttıkça kavrama/kayış aşınması hızlanır ve yağ ısısı yükselir — ' +
        'mekatronik karta ve iç dişlilere zarar verir.',
    },
  ],

  'dsg-kayma-vites-atlama': [
    {
      q: 'DSG kayması nasıl anlaşılır?',
      a:
        'Gaza basıldığında motor devrinin aniden yükselmesi ama aracın aynı hızla ' +
        'ivmelenmemesidir. Özellikle rampada belirginleşir. Kuru kavramalı DQ200\'de ' +
        'balata aşınması, ıslak kavramalı DQ250/DQ381\'de basınç kaybı ana nedendir.',
    },
    {
      q: 'DQ200 kuru kavramada kayma neden olur?',
      a:
        'Balata kompozit katmanı aşındığında kavrama diskleri yeterli sürtünme ' +
        'üretemez. Özellikle yoğun şehir trafiğinde 80.000-120.000 km arasında ' +
        'başlar. Isı artışı ve koku (yanık kavrama) eşlik eder.',
    },
    {
      q: 'DQ250 ıslak kavramada basınç tüpü kayma yapar mı?',
      a:
        "DQ250 mekatronik basınç tüpü (akümülatör) zamanla delinir. İç yağ basıncı " +
        'düşer; kavrama balatası sağlam olsa bile yeterli sıkışma olmaz ve kayma ' +
        'başlar. Genellikle 150.000 km üzeri araçlarda görülür.',
    },
    {
      q: 'DSG kaymasının çözümü ne?',
      a:
        'Teşhis sonucu belirler. Basınç tüpü sorunuysa 15.000-25.000 TL, solenoid ' +
        'kirliliği için revizyon 8.000-15.000 TL, kavrama paketi değişimi 55.000-' +
        '72.000 TL aralığındadır. Ücretsiz ön tanıda net rakam veririz.',
    },
  ],

  'dsg-1-2-vites-silkeleme': [
    {
      q: "DSG'mde sadece 1-2 geçişinde silkeleme var, hemen kavrama mı değişir?",
      a: 'Hayır. Tek başına 1-2 silkelemesi her zaman kavrama değişimi anlamına gelmez. Adaptasyon kaybı, basınç tarafı veya erken kavrama yorgunluğu aynı davranışı üretebilir.',
    },
    {
      q: 'Yağ değişiminden sonra 1-2 silkelemesi başladı, neden?',
      a: 'Bu çoğu zaman adaptasyon kaybı ile ilgilidir. Yağ değişimi sonrasında basis settings yapılmazsa şanzıman eski öğrenilmiş değerlerle çalışmaya devam edebilir.',
    },
    {
      q: 'DQ200 ve DQ250’de 1-2 silkelemesinin sebebi aynı mı?',
      a: 'Hayır. DQ200 tarafında kuru kavrama ve basınç tüpü daha sık öne çıkar. DQ250 tarafında ise ıslak kavrama ile mekatronik basınç ilişkisi daha belirgindir.',
    },
    {
      q: 'Adaptasyon yapıldı ama belirti geri döndü, ne anlama gelir?',
      a: 'Adaptasyonun kısa sürede aşılması çoğu zaman fiziksel aşınmanın sınırı geçtiğini gösterir. Bu noktada kavrama veya mekatronik hattı yeniden değerlendirilmelidir.',
    },
    {
      q: '1-2 silkelemesiyle uzun yola çıkılır mı?',
      a: 'Lamba, kayma ve koku yoksa kısa süreli kullanım mümkün olabilir; ama belirti büyüyorsa, özellikle yüklü kullanım ve sıcak havada beklemek yerine ön kontrol daha doğrudur.',
    },
    {
      q: 'Servis direkt kavrama değişimi diyorsa ne istemeliyim?',
      a: 'VCDS taraması, canlı veri ve yol testi sonucunu sorun. Bu üçlü olmadan verilen “direkt değişim” kararı eksik teşhis riski taşır.',
    },
  ],

  'dsg-anahtar-isareti-yanip-sonuyor': [
    {
      q: "DSG'mde anahtar ikonu yandı, hemen mekatronik kart mı değişir?",
      a: 'Hayır. Bu uyarı çoğu zaman hata kaydı anlamına gelir; sebep bazen adaptasyon veya sensör tarafında, bazen de bobin, basınç sensörü ya da basınç tüpü hattında olur. Veri olmadan direkt kart değişimi doğru değildir.',
    },
    {
      q: 'Anahtar işareti yanıyor ama araç normal gidiyor, yine de servise gitmeli miyim?',
      a: 'Evet. Araç yürüyor olsa da sistem bir hata kodu kaydetmiş demektir. Özellikle sarı sabit lambada 50-100 km içinde tarama yaptırmak en sağlıklı yaklaşımdır.',
    },
    {
      q: 'Hata silindi ama birkaç gün sonra tekrar yandı, bu ne anlama gelir?',
      a: 'Bu durum çoğu zaman sebebin yazılımsal değil donanımsal olduğunu gösterir. Kodun geri gelmesi, basınç, sensör veya solenoid hattında gerçek bir sorun olabileceğini düşündürür.',
    },
    {
      q: 'Anahtar ikonu ile EPC lambası aynı şey mi?',
      a: 'Hayır. EPC daha çok motor ve gaz yönetimi tarafını işaret eder. Anahtar veya anahtarlı dişli ikonu ise DSG kontrol modülünün şanzıman tarafında bir hata gördüğünü anlatır.',
    },
    {
      q: 'Anahtar işareti yandığında uzun yola çıkılır mı?',
      a: 'Lamba tek başınaysa ve başka belirti yoksa kısa süreli kullanım mümkün olabilir; ama yanıp sönüyorsa, boşa düşme, P kilidi, limp mode veya koku eşlik ediyorsa uzun yola çıkmak doğru değildir.',
    },
    {
      q: 'DQ200’de anahtar lambası en çok hangi yüzden yanar?',
      a: 'Sahada en sık gördüğümüz nedenler solenoid bobini, basınç sensörü, basınç tüpü ve P kilidi mekanizmasıdır. Çoğu vaka bağımsız parça müdahalesiyle çözülebilir.',
    },
  ],

  'dsg-kavrama-tolerans-limiti': [
    {
      q: 'Kavrama tolerans limit kodu çıkınca kavrama kesin bitmiş midir?',
      a: 'Hayır. Bu kod çoğu zaman karar penceresinin açıldığını gösterir. Gerçekten mekanik aşınma olabilir; ama bazen adaptasyon kaybı veya basınç tarafı da kavramayı olduğundan kötü gösterebilir.',
    },
    {
      q: 'Kodu sildirmek yeterli olur mu?',
      a: 'Tek başına kod silmek çözüm değildir. Sebep yazılımsalsa geri gelmeyebilir; ama fiziksel aşınma varsa kod kısa sürede tekrar yazılır. Doğru karar için canlı veri gerekir.',
    },
    {
      q: 'Kavrama 1 ve Kavrama 2 farkı neden önemli?',
      a: 'K1 daha çok şehir içi ve sık kalkışta yorulur, K2 ise daha çok yüksek vites yükleriyle ilişkilidir. Hangi hattın tolerans dışına çıktığı kullanım profilini anlamaya yardım eder.',
    },
    {
      q: 'Adaptasyon ne zaman denenmeli?',
      a: 'Yağ değişimi, akü işlemi veya yazılım güncellemesi sonrası yeni çıkan hafif vakalarda adaptasyon denenebilir. Özellikle belirti yoksa ilk basamak budur.',
    },
    {
      q: 'Adaptasyon yapıldıktan sonra kod geri gelirse ne anlama gelir?',
      a: 'Bu çoğu zaman fiziksel aşınma sınırının geçildiğini gösterir. Tekrar tekrar adaptasyon yapmak çözüm değil, gecikmedir.',
    },
    {
      q: 'Bu kodla uzun yola çıkılır mı?',
      a: 'Belirti yoksa kısa süreli kullanım mümkün olabilir; ama kayma, koku veya silkeleme eşlik ediyorsa uzun yol öncesi kontrol şarttır. Özellikle yüklü ve sıcak kullanım riski büyütür.',
    },
  ],

  'dsg-yokusta-geri-kacirma': [
    {
      q: "DSG'm yokuşta kısa süre geri kayıyor, bu her zaman arıza mıdır?",
      a: 'Hayır. Çok hafif eğimde ve çok kısa sürede olan kayma bazen hill-hold süresinin kısa davranmasıyla ilişkilidir. Ama belirti büyüyorsa veya sıklaşıyorsa normal kabul edilmemelidir.',
    },
    {
      q: 'Yokuşta geri kaçma kavramadan mı gelir, basınç tüpünden mi?',
      a: 'Her ikisi de olabilir. DQ200 tarafında basınç tüpü sık atlanan sebeptir; kavrama tarafında ise kayma, silkeleme ve koku daha baskın eşlik eder.',
    },
    {
      q: 'Hill-hold kapalıysa aynı belirtiyi üretir mi?',
      a: 'Evet. Hill-hold kapalı veya arızalıysa araç, şanzıman sağlıklı olsa bile rampada geri kaçabilir. Bu yüzden yalnız şanzıman değil ABS/ESC tarafı da kontrol edilmelidir.',
    },
    {
      q: 'Kavrama değişti ama geri kaçma sürüyor, neden?',
      a: 'Bu durum çoğu zaman sebebin kavramada değil mekatronik basınç tarafında veya hill-hold sisteminde olduğunu gösterir. Yanlış teşhisle değişen kavrama tek başına çözüm getirmez.',
    },
    {
      q: 'Geri kaçma ile birlikte yanık koku varsa ne yapmalıyım?',
      a: 'Bu kombinasyon kavramanın zorlandığını ve riski büyüttüğünü gösterir. Dik rampalarda zorlamamak ve mümkünse çekiciyle kontrol ettirmek daha güvenlidir.',
    },
    {
      q: 'Adaptasyon bu sorunu tamamen çözebilir mi?',
      a: 'Sadece yazılımsal veya öğrenme kaynaklı vakalarda yardımcı olabilir. Basınç kaybı, kavrama aşınması veya hill-hold arızasında tek başına çözüm değildir.',
    },
  ],
  'dsg-yag-kacagi-belirtileri': [
    {
      q: 'DSG yağ kaçağı en kolay nasıl fark edilir?',
      a: 'En kolay işaret, park yerinde düzenli iz bırakmasıdır. Ama her kaçak damlama yapmaz; bazı vakalarda ilk belirti geç bağlama, vuruntu veya sıcak kullanımda davranış değişimi olur.',
    },
    {
      q: 'Yağ kaçağı varken araç kullanılabilir mi?',
      a: 'Kaçağın boyutuna göre kısa süreli kullanım mümkün olabilir ama doğru strateji bu değildir. Çünkü küçük görünen eksiltme, basınç ve geçiş davranışını düşündüğünüzden hızlı bozabilir.',
    },
    {
      q: 'DSG yağ kaçağı doğrudan komple revizyon demek midir?',
      a: 'Hayır. Erken yakalanan birçok vaka conta veya kapak seviyesinde kalır. Asıl maliyet, kaçağın uzun süre ihmal edilip basınç ve kavrama davranışını bozmasıyla büyür.',
    },
    {
      q: 'Şanzıman yağı eksilince hangi belirtiler çıkar?',
      a: 'Geç bağlama, vuruntu, ilk kalkışta kararsızlık, sıcak kullanımda karakter değişimi ve bazen uyarı lambası görülebilir. Yani eksilme sadece fiziksel değil, sürüş davranışına da yansır.',
    },
    {
      q: 'Sadece yağ ekletmek yeterli olur mu?',
      a: 'Hayır. Sistem neden eksilttiği çözülmeden yalnız yağ eklemek sorunu gizler. Kısa süre rahatlama olsa bile kaçak devam ettiği için gerçek risk büyümeye devam eder.',
    },
    {
      q: 'Mekatronik çevresindeki kaçak neden daha önemlidir?',
      a: 'Çünkü burada konu yalnız sıvı seviyesi değil, basınç davranışıdır. Mekatronik çevresindeki kaçak uzarsa geç bağlama, vuruntu ve basınç kararsızlığı gibi daha pahalı zincir sorunlara dönebilir.',
    },
  ],

  'otomatik-sanziman-gecikme': [
    {
      q: 'Otomatik şanzımanda vites geçişi neden gecikiyor?',
      a:
        'Ana nedenler: solenoid valf kirliliği, yağ basıncı düşüklüğü, kavrama ' +
        'adaptasyon bozulması ve ECU yazılım sorunu. Hata kodu okumadan hangisi ' +
        'olduğunu anlamak mümkün değildir — ücretsiz OBD teşhisi ile net söylenir.',
    },
    {
      q: 'Normal vites geçişi kaç saniye olmalı?',
      a:
        'DSG/DCT şanzımanlarda 0,3-0,5 saniye, ZF 8HP\'de 0,2 saniye, klasik ' +
        'tork konvertörde 0,6-1 saniyedir. CVT\'de kademe yoktur ama devir geçişi ' +
        'pürüzsüz olmalıdır. Bundan uzun süreler arızaya işarettir.',
    },
    {
      q: 'Gecikme kendi düzelir mi?',
      a:
        "Hayır. Gecikme genellikle solenoid kirliliği, yağ dejenerasyonu veya " +
        'adaptasyon bozulmasından çıkar; bunların hiçbiri kendi iyileşmez. ' +
        'Sadece ECU adaptasyon sıfırlama geçici iyileşme sağlayabilir.',
    },
    {
      q: 'Gecikme büyük arızanın habercisi mi?',
      a:
        'Evet — gecikme genellikle solenoid valfin bir sonraki aşamada tamamen ' +
        'tıkanması, kavrama balatasının aşınmaya başlaması veya mekatronik kart ' +
        'yazılımının bozulmasıyla sonuçlanır. Erken müdahale maliyeti düşürür.',
    },
  ],

  'zf-aisin-gecikme': [
    {
      q: 'ZF 8HP şanzımanda gecikme neden olur?',
      a:
        "ZF 8HP'de gecikme ana nedenleri: mekatronik valve body solenoid " +
        'tıkanması, yağ dejenerasyonu ve ECU adaptasyon bozukluğu. Mercedes 9G-Tronic ' +
        've BMW ZF 8HP aynı temel sorunu paylaşır — 100.000 km üzeri servislerde sık görülür.',
    },
    {
      q: 'Mercedes 7G/9G-Tronic\'te vites geçişi yavaşlarsa ne yapılır?',
      a:
        'İlk adım yağ + filtre değişimi + adaptasyon sıfırlama. Düzelme yoksa ' +
        'valve body (mekatronik) revizyonu gerekir. Mercedes spesifik yağ ' +
        '(MB 236.15) zorunludur — yanlış yağ problemi derinleştirir.',
    },
    {
      q: 'Aisin TF-80SC Peugeot/Citroen gecikmesi normal mi?',
      a:
        "Hayır, normal değil. Aisin TF-80SC (Peugeot 3008, 5008, Citroen C5, Volvo V40) " +
        'gecikmede en yaygın sorun solenoid arızasıdır. Hata kodu okumadan ' +
        'parça değişimine gidilmez.',
    },
    {
      q: 'BMW ZF 8HP şanzımanda adaptasyon sıfırlama nasıl yapılır?',
      a:
        "ISTA veya ODIS cihazıyla adaptasyon sıfırlanır. Ardından 50-80 km'lik " +
        'test sürüşü yapılır — şanzıman yeni sürüş stilinizi öğrenir. Sadece ' +
        'OBD\'yle sıfırlama yarım çözümdür, profesyonel teşhis gereklidir.',
    },
  ],

  'cvt-kayma': [
    {
      q: 'CVT kaymasının ilk belirtisi nedir?',
      a:
        "Gaza basıldığında motor devrinin hızla 4.000-5.000 rpm'e fırlaması ama " +
        'aracın normal ivmelenmemesidir. Özellikle yokuşta ve soğuk havada ' +
        "belirginleşir. Metalik inleme sesi eşlik edebilir.",
    },
    {
      q: 'CVT kayış değişir mi yoksa tüm şanzıman mı değişir?',
      a:
        "CVT kayışı tek başına değiştirilebilir — ancak pully yüzeyinde iz varsa " +
        'pully seti de değiştirilmelidir. Geç müdahalede komple set zorunlu olur.',
    },
    {
      q: 'Toyota, Honda, Nissan CVT\'de kayma farkları nedir?',
      a:
        "Toyota CVT'de (Multidrive) kontrol ünitesi sık arıza yapar; yazılım " +
        "güncellemesi çözüm olabilir. Honda CVT'de kayış tipik zayıflıktır. " +
        "Nissan CVT'de (JATCO) yağ kalitesi kritik — yanlış yağ erken arızaya yol açar.",
    },
    {
      q: 'CVT yağ değişimi kaymayı durdurur mu?',
      a:
        'Erken evrede yağ + filtre değişimi + adaptasyon kaymayı durdurabilir. ' +
        'Ancak kayış aşınması başlamışsa yağ değişimi semptomu geçici maskeler, ' +
        'kalıcı çözüm değildir.',
    },
  ],

  'passat-dsg-sanziman-sorunlari': [
    {
      q: "Passat 2.0 TDI'mde hangi DSG var?",
      a: 'Çoğu zaman DQ250 veya DQ381 kullanılır. 4Motion ve daha yüksek torklu versiyonlarda DQ500 görülür. Kesin tespit için VIN sorgulaması en güvenli yoldur.',
    },
    {
      q: "Passat'ımda yağ değişimini hiç yaptırmadım, ne olur?",
      a: 'Islak DSG tarafında yağ ihmali en yıkıcı senaryolardan biridir. Eski yağ önce basınç sistemini, ardından kavrama davranışını bozar ve toplam tamir kapsamını büyütür.',
    },
    {
      q: 'Passat DQ500 güvenilir mi?',
      a: 'Evet, doğru yağ disiplini ile çok güvenilirdir. Ancak tamir maliyeti DQ250’ye göre daha yüksektir; bu yüzden erken teşhis ve doğru bakım daha da kritik hale gelir.',
    },
    {
      q: "Passat'ım uzun yolda iyi ama şehir içinde gecikme var, ciddi mi?",
      a: 'Bu çoğu zaman erken mekatronik veya hidrolik basınç uyarısıdır. Uzun yolda belirti gizlenebilir; şehir içi ve soğuk çalışma davranışı gerçek tabloyu daha net gösterir.',
    },
    {
      q: "Passat 4Motion'da DSG farkı var mı?",
      a: 'Evet. 4Motion tarafında daha yüksek tork aktarıldığı için DQ500 ve bazı yeni nesil DQ381 uygulamaları görülür. Bu araçlarda yağ + filtre disiplini daha da önemlidir.',
    },
    {
      q: "Limp mode'a düştü, eve kadar gidebilir miyim?",
      a: 'Kısa mesafede araç yürüyebilir gibi görünse de limp mode genelde basınç veya mekatronik tarafında aktif bir koruma durumudur. En güvenli yaklaşım çekici ve kontrollü teşhistir.',
    },
  ],
  'golf-7-dsg-sanziman-sorunlari': [
    {
      q: "Golf 7'de en sık hangi DSG var?",
      a: "Türkiye'de en sık görülen Golf 7 DSG, 1.0 / 1.2 / 1.4 TSI ve 1.6 TDI tarafındaki DQ200'dür. 2.0 TDI ve GTI / R tarafında ise DQ250 veya DQ381 daha yaygındır.",
    },
    {
      q: "Golf 7 DSG'de sarsıntı her zaman kavrama anlamına mı gelir?",
      a: 'Hayır. Sarsıntı çoğu zaman kavrama tarafını düşündürür ama basınç tüpü, adaptasyon kaybı veya mekatronik basınç sorunu da aynı belirtiyi üretebilir.',
    },
    {
      q: 'Golf 7 DQ200 mü DQ250 mi nasıl anlarım?',
      a: 'En temiz yol VIN sorgulaması veya VCDS taramasıdır. Pratikte düşük hacimli TSI ve 1.6 TDI tarafında DQ200, 2.0 TDI ve GTI/R tarafında DQ250-DQ381 daha yaygındır.',
    },
    {
      q: "Golf 7 DSG'de yağ değişimi ne kadar önemli?",
      a: 'Çok önemlidir. Özellikle ıslak DSG ailelerinde 60.000 km yağ + filtre disiplini ömrü doğrudan belirler. DQ200 tarafında da mekatronik yağı ve doğru adaptasyon ihmal edilmemelidir.',
    },
    {
      q: "Golf 7 DSG'de anahtar lambası yanınca ne düşünmeliyim?",
      a: 'Özellikle DQ200 tarafında mekatronik hattı akla gelir. Bobin, sensör, basınç tüpü veya P kilidi tarafı tarama ile ayrıştırılmalıdır; direkt kavrama kararı doğru olmayabilir.',
    },
    {
      q: "Golf 7 DSG'de adaptasyon ne zaman işe yarar?",
      a: 'Yağ değişimi, akü işlemi veya yazılım sonrası oluşan hafif vakalarda işe yarayabilir. Fiziksel aşınma veya basınç düşüklüğünde tek başına çözüm olmaz.',
    },
  ],
  'skoda-octavia-dsg-sanziman-sorunlari': [
    {
      q: "Skoda Octavia'da en sık hangi DSG var?",
      a: "Türkiye'de en sık görülen Octavia DSG, 1.0 / 1.2 / 1.4 TSI ve 1.6 TDI tarafındaki DQ200'dür. 2.0 TDI, RS ve 4x4/Scout tarafında DQ250 veya DQ381 daha yaygındır.",
    },
    {
      q: "Octavia'da DSG neden Golf 7'ye göre daha erken yoruluyor gibi görünür?",
      a: 'Çünkü kullanım profili daha ağırdır. Daha yüklü bagaj, ticari kullanım ve daha yüksek yıllık kilometre, aynı DSG ailesini sahada daha erken belirti verir hâle getirir.',
    },
    {
      q: "Ticari kullanılan Octavia'da DQ200 mantıklı mı?",
      a: 'Kullanılır ama ağır profildir. Ticari yoğunlukta DQ200 daha erken kavrama ve basınç tüpü yorgunluğu üretebilir; bu yüzden bakım disiplini ve erken teşhis çok daha kritik hale gelir.',
    },
    {
      q: "Octavia'da yokuşta geri kaçma neyi düşündürür?",
      a: 'Yüklü kullanımda bu belirti kavrama kadar basınç tüpü ve mekatronik tarafını da düşündürür. Hill-hold tarafı da dışlanmadan kontrol edilmelidir.',
    },
    {
      q: "Octavia DSG'de yağ değişimi kaç km'de yapılmalı?",
      a: 'DQ250 ve benzeri ıslak DSG ailelerinde 60.000 km temel kabul edilir; ticari kullanımda 50.000 km’ye çekmek akıllıcadır. DQ200 tarafında da mekatronik yağı ve adaptasyon ihmal edilmemelidir.',
    },
    {
      q: "Octavia'da adaptasyon ne zaman yeterli olur?",
      a: 'Yağ değişimi, akü işlemi veya yazılım sonrası başlayan hafif vakalarda işe yarayabilir. Ama gerçek aşınma veya basınç kaybı varsa tek başına çözüm değildir.',
    },
  ],
  'audi-a3-s-tronic-sanziman-sorunlari': [
    {
      q: 'S-Tronic ile DSG aynı şey mi?',
      a: 'Evet. S-Tronic, Audi’nin DSG için kullandığı isimdir. DQ200, DQ250, DQ381 ve DQ500 gibi temel şanzıman aileleri markalar arasında ortaktır.',
    },
    {
      q: "Audi A3'te en sık hangi S-Tronic var?",
      a: "Türkiye'de en sık görülen A3 S-Tronic, 1.0 / 1.2 / 1.4 TFSI ve 1.6 TDI tarafındaki DQ200'dür. 1.8 TFSI, 2.0 TDI ve daha güçlü versiyonlarda ıslak aileler devreye girer.",
    },
    {
      q: "A3'te küçük bir geçiş farkını hemen hissetmem normal mi?",
      a: 'Evet. A3 kabini daha sessiz ve sürüş beklentisi daha yüksek olduğu için küçük kalibrasyon kayıpları bile erken fark edilir. Bu çoğu zaman değerli bir erken uyarıdır.',
    },
    {
      q: "A3 S-Tronic için yetkili servis şart mı?",
      a: 'Hayır. Doğru ekipman ve DSG tecrübesi olan uzman özel servisler, A3 S-Tronic’i aynı mekanik aile mantığıyla güvenle teşhis ve tamir edebilir.',
    },
    {
      q: "A3 S-Tronic'te yağ değişimi neden önemli?",
      a: 'Özellikle ıslak DSG ailelerinde yağ + filtre disiplini ömrü doğrudan belirler. DQ200 tarafında da mekatronik yağı ve doğru adaptasyon ihmal edilmemelidir.',
    },
    {
      q: "A3'te adaptasyon ne zaman işe yarar?",
      a: 'Yağ değişimi, akü işlemi veya yazılım sonrası oluşan hafif kararsızlıklarda işe yarayabilir. Gerçek kavrama aşınması veya basınç kaybı varsa tek başına çözüm olmaz.',
    },
  ],
  'volkswagen-dq200-sanziman-sorunlari': [
    {
      q: 'DQ200 şanzımanın ömrü ne kadardır?',
      a: 'Kullanım profiline göre ciddi değişir. Yoğun şehir içi kullanımda kavrama ömrü daha erken gelebilir; uzun yol ağırlıklı kullanımda daha uzun yaşayabilir. DQ200 için davranış ve bakım disiplini kilometreden daha belirleyicidir.',
    },
    {
      q: 'DQ200 kuru kavrama diye içinde hiç yağ yok mu?',
      a: 'Hayır. Kuru olan kavrama diskleridir. Şanzımanın mekanik ve mekatronik tarafında yine yağ ve hidrolik davranış vardır; bu yüzden yağ ve basınç tarafı ihmal edilmez.',
    },
    {
      q: 'P17BF her zaman komple kart değişimi demek midir?',
      a: 'Hayır. Bu kod çoğu zaman basınç hattı ve akümülatör tarafını düşündürür. Doğru teşhis yapılmadan direkt komple kart değişimi kararı vermek sağlıklı değildir.',
    },
    {
      q: 'DQ200’de 1-2 silkelemesi her zaman kavrama mıdır?',
      a: 'Çoğu zaman kavrama tarafı öne çıkar; ama basınç tüpü, solenoid veya adaptasyon kaybı da benzer semptom üretebilir. Bu yüzden canlı veri olmadan net hüküm verilmez.',
    },
    {
      q: 'Güçlendirilmiş çözüm ne demek?',
      a: 'Amacımız yalnız bozulan parçayı değiştirmek değil, aynı hattın tekrar zayıf kalmasını önleyecek doğru kapsamı seçmektir. DQ200’de özellikle basınç hattı ve doğru adaptasyon bu yüzden kritik önemdedir.',
    },
    {
      q: 'DQ200’le uzun yola çıkılır mı?',
      a: 'Belirti yoksa evet. Ama anahtar lambası, geç bağlama, silkeleme ve kayma gibi işaretler başladıysa uzun yol öncesi kontrol etmek çok daha güvenlidir.',
    },
  ],
  'otomatik-vites-kavrama-sorunu': [
    {
      q: 'Otomatik viteste kavrama sorunu yolda bırakır mı?',
      a: 'Evet, bırakabilir. Güç aktarımı tamamen zayıflarsa araç gaza bassanız da ilerlemez veya koruma moduna geçebilir. Erken belirti döneminde müdahale bu yüzden önemlidir.',
    },
    {
      q: 'Kavrama değişiminden sonra adaptasyon şart mı?',
      a: 'Evet, özellikle çift kavramalı sistemlerde şarttır. Yeni kavramanın kalınlığı ve basınç eşiği mekatroniğe yeniden öğretilmezse aynı belirti kısa sürede geri dönebilir.',
    },
    {
      q: 'CVT’de de kavrama sorunu olur mu?',
      a: 'Evet, ama klasik DSG veya EDC gibi davranmaz. CVT’de daha çok kayış-kasnak tutunması ve ileri kavrama hattı üzerinden devir yükselmesi ama hızın gelmemesi gibi semptomlar görülür.',
    },
    {
      q: 'Tam otomatikte DSG’deki gibi balata var mı?',
      a: 'Yapı farklıdır. ZF ve EAT8 gibi sistemlerde tork konvertörü ve iç ıslak kavrama paketleri görev alır. Yine de sürtünme kaybı ve kaçırma davranışı oluşabilir.',
    },
    {
      q: 'Her titreme kavrama değişimi demek midir?',
      a: 'Hayır. Bazı vakalarda mekatronik, basınç, yazılım veya adaptasyon tarafı aynı semptomu üretebilir. Bu yüzden parça kararından önce aile bazlı teşhis gerekir.',
    },
    {
      q: 'Motor bağırıyor ama araç gitmiyorsa ne yapmalıyım?',
      a: 'Bu tipik bir güç aktarım kaybı belirtisidir. Aracı zorlamadan kullanımı azaltmak ve kısa sürede kontrol ettirmek gerekir. Özellikle koku veya lamba eşlik ediyorsa beklemek doğru değildir.',
    },
  ],
  'fluence-vites-kutusunu-kontrol-ettiriniz': [
    {
      q: 'Bu uyarı varken araç sürülür mü?',
      a: 'Sarı uyarı varsa ve araç sınırlı da olsa yürüyorsa kısa mesafede güvenli yere alınabilir; ama araç vitesleri kaybediyorsa, geri vitese geçmiyorsa veya kırmızı uyarı varsa zorlamamak daha doğrudur.',
    },
    {
      q: 'Kontağı kapatıp açınca düzelmesi ne anlama gelir?',
      a: 'Bu çoğu zaman geçici sıfırlamadır. Özellikle ısınınca hata veren EDC beyin vakalarında araç kısa süre normale döner ama sonraki trafikte hata geri gelir.',
    },
    {
      q: 'Her “vites kutusunu kontrol ettiriniz” uyarısı beyin arızası mıdır?',
      a: 'Hayır. Beyin sık görülen sebeplerden biridir; ama kavrama aşınması, aktüatör sorunu veya düşük voltaj da aynı mesajı tetikleyebilir.',
    },
    {
      q: 'Şanzıman yağı değişirse bu uyarı geçer mi?',
      a: 'Tek başına garanti çözüm değildir. EDC’de sorun elektronik, kavrama veya aktüatör kaynaklıysa yağ değişimi asıl problemi çözmez.',
    },
    {
      q: 'Fluence EDC beyin tamiri güvenilir midir?',
      a: 'Doğru ekipman ve doğru laboratuvar yaklaşımıyla yapılan revizyonlar güvenilir olabilir. Burada önemli olan sorunun gerçekten beyinden gelip gelmediğinin doğru ayrılmasıdır.',
    },
    {
      q: 'Bu uyarıdan önce hangi belirtiler görülür?',
      a: 'Çoğu araçta daha önce silkeleme, geçiş kararsızlığı, geri viteste nazlanma veya ısınınca tuhaf davranışlar başlar. Uyarı çoğu zaman bu sürecin görünür hâlidir.',
    },
  ],
  'honda-civic-cvt-sanziman-sorunlari': [
    {
      q: 'Honda Civic CVT yağı kaç kilometrede değişmeli?',
      a: 'Genel pratikte 40.000 km civarında veya kullanım profiline göre daha erken kontrol etmek en sağlıklı yaklaşımdır. Doğru spesifikasyon ve doğru prosedür burada çok önemlidir.',
    },
    {
      q: 'Honda Civic CVT’de de DSG’deki gibi kavrama biter mi?',
      a: 'Yapı aynı değildir. CVT’de DSG tarzı kuru çift kavrama yoktur; ama başlangıç kavraması ve kayış-kasnak tutunma hattı sorun çıkarabilir. Belirti bu yüzden farklı görünür.',
    },
    {
      q: 'Devir yükseliyor ama araç uzamıyorsa bu ciddi midir?',
      a: 'Evet. Bu, kayışın kasnak üzerinde tutunma kaybına işaret edebilir. Özellikle uzun süre bu şekilde kullanım kasnak yüzeyine kalıcı hasar verebilir.',
    },
    {
      q: 'Yanlış yağ kullanımı gerçekten bu kadar zararlı mı?',
      a: 'Evet. Civic CVT’de doğru sıvı tutunma karakterini doğrudan etkiler. Uygun olmayan yağ, şanzımanın çalışma mantığını bozup kayma davranışını hızlandırabilir.',
    },
    {
      q: 'Kalkışta vuruntu varsa mutlaka büyük revizyon gerekir mi?',
      a: 'Hayır. Bazı vakalarda başlangıç kavraması kalibrasyonu ve doğru bakım yeterli olabilir. Ama fiziksel aşınma başladıysa daha ileri müdahale gerekir.',
    },
    {
      q: 'Civic CVT ile uzun yola çıkılır mı?',
      a: 'Belirti yoksa evet. Ama kayma, uğultu veya sıcaklık davranışı başladıysa uzun yol öncesi kontrol etmek çok daha güvenlidir.',
    },
  ],
  'toyota-corolla-cvt-sanziman-sorunlari': [
    {
      q: 'Toyota Corolla şanzıman yağı gerçekten hiç değişmez mi?',
      a: 'Hayır. “Ömürlük yağ” ifadesi gerçek kullanım koşullarında güvenli bir bakım planı değildir. Corolla CVT’de yağın durumu şanzımanın davranışını doğrudan etkiler.',
    },
    {
      q: 'Corolla CVT’den gelen uğultu normal midir?',
      a: 'Hayır. İnce metalik uğultu veya ıslık sesi, özellikle hız arttıkça artıyorsa rulman veya kasnak çevresi tarafında aşınma düşündürür.',
    },
    {
      q: 'D’den R’ye alırken sert tepki neden olur?',
      a: 'Bu durum çoğu zaman hidrolik basınç yönlendirmesi veya forward clutch davranışıyla ilgilidir. Yağ kalitesi ve valf gövdesi tarafı birlikte değerlendirilmelidir.',
    },
    {
      q: 'Devir yükselip araç uzamıyorsa büyük sorun mu var?',
      a: 'Evet, bu ciddi bir işarettir. Kayış-kasnak tutunma kaybı başladıysa beklemek kasnak yüzeyini de riske atar ve maliyeti büyütür.',
    },
    {
      q: 'Toyota CVT’de yanlış yağ gerçekten bu kadar zararlı mı?',
      a: 'Evet. Doğru sıvı kullanılmazsa tutunma ve basınç karakteri bozulabilir. Corolla CVT’de yağ seçimi yalnız bakım değil, doğrudan çalışma prensibidir.',
    },
    {
      q: 'Corolla CVT ile uzun yola çıkılır mı?',
      a: 'Belirti yoksa evet. Ama vuruntu, uğultu veya kaydırma başladıysa uzun yol öncesi kontrol etmek çok daha güvenlidir.',
    },
  ],
  'renault-edc-sanziman-sorunlari': [
    {
      q: 'EDC beyin revizyonu sonrası aynı arıza tekrar eder mi?',
      a: 'Doğru teşhis ve doğru revizyonla uzun süre sağlıklı kullanılabilir. Asıl kritik nokta, sorunun gerçekten beyinden gelip gelmediğini net ayırmaktır; kavrama veya aktüatör sorununa yalnız beyin işlemi çözüm olmaz.',
    },
    {
      q: 'Renault EDC şanzıman yağı kaç kilometrede kontrol edilmeli?',
      a: 'Kuru ve ıslak EDC varyantlarının bakım yaklaşımı farklıdır; ama pratikte 60.000 km bandı kontrol ve bakım disiplini için kritik eşiktir. Özellikle ıslak EDC’de yağ kalitesi doğrudan davranışı etkiler.',
    },
    {
      q: 'Yokuşta kalkışta titreme EDC için normal midir?',
      a: 'Hayır. Özellikle kuru kavramalı EDC’de yokuşta titreme, kavrama yüzeyinin yorulmaya başladığını gösterebilir. Erken dönemde yakalanırsa maliyet büyümeden karar vermek mümkün olur.',
    },
    {
      q: 'Renault EDC’de kuru kavrama ile ıslak kavrama farkı neden önemlidir?',
      a: 'Çünkü arızanın karakteri değişir. Kuru EDC’de kavrama ısısı ve silkeleme daha baskınken, ıslak EDC’de yağ disiplini ve hidrolik davranış daha kritik hâle gelir.',
    },
    {
      q: 'Uyarı lambası varken araç kullanılmaya devam edilir mi?',
      a: 'Araç koruma moduna düşmüşse, geri vitese geçmiyorsa veya sıcak trafikte sürekli hata veriyorsa zorlamamak gerekir. Kısa mesafe güvenli alana geçiş ayrı, günlük kullanıma devam etmek ayrıdır.',
    },
    {
      q: 'Beyin mi kavrama mı nasıl ayırt edilir?',
      a: 'Sıcaklıkla gelen koruma modu, geçici düzelme ve uyarı mesajı daha çok beyin hattını; sürekli silkeleme ve kalkış titremesi ise kavrama hattını düşündürür. Kesin karar için hata kodu ve sürüş davranışı birlikte okunmalıdır.',
    },
  ],
  'seat-dsg-sanziman-sorunlari': [
    {
      q: 'Seat DSG ile Volkswagen DSG arasında fark var mı?',
      a: 'Mekanik aile aynıdır. Fark daha çok model, motor ve kullanım karakterinden gelir. Seat tarafında sportif sürüş beklentisi yüzünden küçük geçiş bozulmaları daha erken fark edilir.',
    },
    {
      q: 'Seat Leon’da 1’den 2’ye silkeleme en çok neyi gösterir?',
      a: 'Özellikle DQ200 kullanan Leon’larda ilk şüphe kavrama hattıdır. Ancak lamba, geç bağlanma veya korumaya düşme eşlik ediyorsa mekatronik tarafı da dışlanmamalıdır.',
    },
    {
      q: 'Cupra modellerinde DSG daha mı çabuk yorulur?',
      a: 'Tek başına marka adı değil, tork seviyesi ve kullanım profili belirleyicidir. Performanslı kullanım ısı yükünü artırabilir; ama asıl yıpratma çoğu zaman geciken bakım ve yanlış kullanım alışkanlıklarından gelir.',
    },
    {
      q: 'Seat DSG’de yazılım sonrası sorun çıkması normal mi?',
      a: 'Tork artışı özellikle DQ200 gibi kuru kavramalı kutularda tolerans sınırını daha erken öne çekebilir. Bu yüzden yazılım sonrası oluşan silkeleme veya gecikme ciddiye alınmalıdır.',
    },
    {
      q: 'Seat DSG arızası varken araç kullanılmaya devam edilir mi?',
      a: 'Hafif silkeleme ile koruma modu aynı şey değildir. Araç vites kaybediyor, lamba yakıyor veya geri vitese geçmiyorsa beklemek doğru değildir; kısa sürede kontrol edilmelidir.',
    },
    {
      q: 'Seat DSG’de adaptasyon ne zaman yeterli olur?',
      a: 'Erken kalibrasyon kaybı ve hafif geçiş bozulmalarında yardımcı olabilir. Ama fiziksel kavrama aşınması veya mekatronik hatası başladıysa adaptasyon tek başına kalıcı çözüm olmaz.',
    },
  ],
  'peugeot-eat8-sanziman-sorunlari': [
    {
      q: 'Peugeot EAT8 DSG gibi çift kavrama mıdır?',
      a: 'Hayır. EAT8, Aisin üretimi tork konvertörlü tam otomatik bir şanzımandır. Bu yüzden arıza karakteri çift kavramadan farklıdır; daha çok yağ, valf gövdesi ve tork konvertörü tarafında okunur.',
    },
    {
      q: 'Kırmızı ışıkta durmaya yakın öne atılma hissi neden olur?',
      a: 'Bu, vites küçültme sırasında hidrolik basıncın yeterince yumuşayamamasından kaynaklanabilir. Özellikle 3-2 ve 2-1 düşüşlerinde valf gövdesi davranışı dikkatle okunmalıdır.',
    },
    {
      q: 'Sadece yağ değişimi EAT8 vuruntusunu düzeltir mi?',
      a: 'Belirti yeni başladıysa çoğu zaman ciddi fayda sağlar; özellikle doğru prosedür ve adaptasyonla birlikte. Ama sertleşmiş ve uzun süredir devam eden vuruntularda valf gövdesi tarafı da masaya gelir.',
    },
    {
      q: 'EAT8’de yağ gerçekten ömürlük mü?',
      a: 'Hayır. Gerçek saha kullanımında bu güvenli bir yaklaşım değildir. Yoğun şehir içi, ısı ve kullanım şekli nedeniyle yağ zamanla özelliğini kaybeder ve davranış bozulur.',
    },
    {
      q: 'Sabit hızda devir dalgalanması neyi gösterir?',
      a: 'Bu, çoğu zaman lock-up yani tork konvertörü kilitleme hattında kaçırma veya kararsız tutunma ihtimalini düşündürür. Yağ ve basınç davranışı birlikte değerlendirilmelidir.',
    },
    {
      q: 'EAT8 arızasında hemen komple şanzıman mı gerekir?',
      a: 'Hayır. Birçok vakada erken teşhisle yağ, adaptasyon, valf gövdesi veya sınırlı hidrolik müdahale yeterli olabilir. Geç kalındığında maliyet büyür.',
    },
  ],
  'bmw-zf-8hp-sanziman-sorunlari': [
    {
      q: 'ZF 8HP’de “lifetime oil” gerçekten doğru mu?',
      a: 'Hayır. Gerçek saha kullanımında bu ifade güvenli bir bakım planı değildir. Özellikle yoğun şehir içi ve yüksek ısıda yağ özelliklerini kaybeder; 60.000-100.000 km bandında bakım disiplini önemlidir.',
    },
    {
      q: 'BMW’de mekatronik köprü manşonu sızıntısı ne anlama gelir?',
      a: 'ZF 8HP’nin en tipik sızıntı hatlarından biridir. Erken yakalandığında sınırlı kapsamla çözülebilir; ihmal edilirse yağ seviyesi düşer ve çok daha pahalı bir tabloya dönüşebilir.',
    },
    {
      q: '50-90 km/s arasında hafif titreşim neden olur?',
      a: 'Bu çoğu zaman tork konvertörü kilitleme hattında, yani lock-up tarafında yorgunluk işaretidir. Yağ, basınç ve tork konvertörü birlikte değerlendirilmelidir.',
    },
    {
      q: 'Sıcakken geçişler kötüleşiyor, soğukken normal. Bu ne anlatır?',
      a: 'En sık senaryo eski yağ ve mekatronik yorgunluğudur. Doğru sıra önce yağ disiplini, sonra mekatronik değerlendirmesidir.',
    },
    {
      q: 'Yetkili servis komple değişim dediyse ikinci görüş almak mantıklı mı?',
      a: 'Evet. ZF 8HP’de birçok vaka kademeli teşhis ve sınırlı müdahaleyle çözülebilir. Komple yenileme ancak gerçekten gerekli olduğunda anlamlıdır.',
    },
    {
      q: 'ZF 8HP’de adaptasyon ne zaman yeterli olur?',
      a: 'Erken dönemde, özellikle yağ ve pan işlemi sonrası belirti hafifse yardımcı olabilir. Ama sızıntı, tork konvertörü yorgunluğu veya ciddi mekatronik sorunu varsa tek başına yetmez.',
    },
  ],
  'sanziman-arizasi-nasil-anlasilir': [
    {
      q: 'Şanzıman arızasının ilk belirtisi genelde nedir?',
      a: 'En sık ilk belirti, sürücünün “araç biraz geç bağlamaya başladı” diye tarif ettiği gecikmedir. Bunu hafif vuruntu, titreme veya uğultu izleyebilir.',
    },
    {
      q: 'Her vuruntu şanzıman arızası mıdır?',
      a: 'Hayır, ama her vuruntu ciddiye alınmalıdır. Basit adaptasyon kaymasından daha ciddi basınç veya kavrama sorununa kadar farklı tablolarda benzer his oluşabilir.',
    },
    {
      q: 'Şanzıman arızası ilerlemeden nasıl yakalanır?',
      a: 'Belirtinin hangi koşulda çıktığını erken not etmek gerekir: soğuk-sıcak farkı, yokuşta olup olmadığı, uyarı lambası eşlik edip etmediği ve zeminde iz bırakıp bırakmadığı ilk ayrımı hızlandırır.',
    },
    {
      q: 'Sadece yağ kaçağı varsa yine de riskli midir?',
      a: 'Evet. Çünkü kaçağın boyutu gözle her zaman doğru okunmaz. Kaçak uzun süre sürerse davranış bozulmasına ve daha büyük maliyete dönebilir.',
    },
    {
      q: 'Ne zaman hemen servise gitmek gerekir?',
      a: 'Araç tek viteste kalıyor, geri viteste bağlanmıyor, belirgin yanık koku geliyor veya uyarı lambası ile birlikte güç kaybı yaşanıyorsa beklememek gerekir.',
    },
    {
      q: 'Arıza lambası yanmadan da şanzıman sorunu olabilir mi?',
      a: 'Evet. Birçok şanzıman sorunu önce davranış değişimiyle başlar; lamba daha sonra gelir. Bu yüzden vuruntu, gecikme ve koku gibi erken belirtiler önemlidir.',
    },
  ],
};
