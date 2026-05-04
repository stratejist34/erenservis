// data/reviews.ts
// Eren Otomatik Şanzıman Servisi müşteri yorumları — Google My Business sayfasından küratörlü.
// Metinler 1:1 korunur (yazım/noktalama dahil). Tarihler Google'daki göreli etiketlerden
// yaklaşık ISO'ya çevrildi (referans: 2026-04-22).
//
// Rating: Google yorumlarında yıldız seviyesi belirtilmediğinde 5 kabul edildi
// (yorum içeriklerinin tonu + mevcut aggregateRating 4.6/35 ile tutarlı).
//
// vehicle ve transmissionFamily opsiyoneldir — çoğu gerçek yorumda yazmaz.

export type CustomerReview = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  datePublished: string;
  vehicle?: string;
  transmissionFamily?: string;
};

export const REVIEWS: readonly CustomerReview[] = [
  {
    name: 'Murat Demirtaş',
    rating: 5,
    text: 'Dsg mekatronik değiştirdim oldukça memnunum.',
    datePublished: '2026-04-08',
    transmissionFamily: 'DSG Mekatronik',
  },
  {
    name: 'Samet Yılmaz',
    rating: 5,
    text: 'Otomatik aracım da 3 vitesten sonra araç boşa atıyordu, Önder usta mükemmel bilgi ve deneyimi ile gün içerisinde sorunu giderdi ve aracımı teslim etti. Allah razı olsun çok deneyimli, güler yüzlü ve başarılılar. Sorularınıza cevap alabileceğiniz, nadir bulunan dürüst esnaflardan... kesinlikle tavsiye ederim',
    datePublished: '2025-08-22',
    transmissionFamily: 'Otomatik Şanzıman',
  },
  {
    name: 'Oğuzhan Yumrutaş',
    rating: 5,
    text: 'Aracımdaki vites geçişlerindeki hafif vuruntu sebebi ile yetkili servise başvurdum. Kavrama, volant, şanzıman yağının değişmesi gerektiğini söylediler. Aracımı Eren Volkswagen servise getirdim ve Önder Usta ile test sürüşüne çıktık. Test esnasında yaptığı kalibrasyon ile sorunumu halletti. İşlemden ücret almadı. Bu işi sadece para için yapmayan ustaların ve işyerlerinin olması insanlara olan güvenin devamı için çok önemli olduğunu düşünüyorum. Test sırasındaki açıklayıcı geri bildirimleri, araç ve müşteri ile içten samimi tutumu için teşekkür ediyorum. İşlem yaklaşık 10 gün önce yapıldı, yorumu geciktirmemin sebebi aracı denemekti. Hem şehir içi hem de şehirler arası yollarda denedim. Yetkili servisin saydığım sorunlar için önerdiği ücret, Eren Volkswagen serviste yaklaşık yarısı kadar. Kesinlikle öneririm',
    datePublished: '2025-05-22',
    transmissionFamily: 'DSG',
  },
  {
    name: 'Yekda Şahin',
    rating: 5,
    text: 'Ramazan Bayramında Jetta aracımın DSG de viteslere geçmeme sorunu vardı. Bayram dönüşü Öner Usta DSG kartını uygun fiyata değiştirdi sorunumuzu giderdi. Tavsiye edeceğim bir servis.',
    datePublished: '2025-05-10',
    vehicle: 'Volkswagen Jetta',
    transmissionFamily: 'DSG',
  },
  {
    name: 'Uğur Değirmenci',
    rating: 5,
    text: 'Buradan önce 2 yere gösterdim aracımı, nerdeyse motoru indireceklerdi insafsızlar. Allah yüzüme güldü de Önder usta çıktı karşıma. Doğru parçayı uygun fiyata değiştirdi, aracımı sıkıntısız kullanıyorum. İşini iyi yapan bilgili bir esnaf nadir bulunur. O da bunlardan birisi.',
    datePublished: '2025-04-22',
  },
  {
    name: 'Samet Kıyma',
    rating: 5,
    text: 'Jetta aracımda bi problem vardı, hemen işimi çözdüler, güler yüzlü ilgili bir esnaf. Herkese tavsiye ederim',
    datePublished: '2025-04-15',
    vehicle: 'Volkswagen Jetta',
  },
  {
    name: 'Mehmet Nur Alankaya',
    rating: 5,
    text: 'Güvenilir, samimi, çözümcül ve zeki insanların bir araya geldiği alışık olmadığımız bir çözüm merkezi. Hepinize teşekkürler.',
    datePublished: '2025-04-05',
  },
  {
    name: 's3.dr4nzy',
    rating: 5,
    text: 'Şanzımanda yağ kaçağım vardı ve güçlendirilmiş basınç tüpü taktırdım herşey çok güzeldi ilgi alaka ve fiyat anlamında. Testede önder ustamla çıktık teşekkür ederim işi rast gelsin',
    datePublished: '2024-04-22',
    transmissionFamily: 'DSG Basınç Tüpü',
  },
  {
    name: 'Cihan',
    rating: 5,
    text: 'Korkarak girdiğim sanayi sitesinden Önder Usta nın dürüstlüğü sayesinde oldukça memnun ayrıldım. Aracım çekici üzerinde geldi, istese tüm şanzımanı indirip bana 40-50 bin masraf çıkarabilirdi ama işin tüm detaylarını anlatıp en az masrafla çıkmam için uğraştı resmen ve öyle de oldu. Hem işçiliği hem de dürüstlüğü on numara bir ustamız.',
    datePublished: '2024-04-15',
  },
  {
    name: 'Alpaslan Toksoy',
    rating: 5,
    text: 'Son derece memnun kaldım tam sonu güvenerek arabamı bırakacak bi yer buldum',
    datePublished: '2024-03-20',
  },
  {
    name: 'Falkon Rent A Car',
    rating: 5,
    text: 'İyi hizmet, Özgür bey hakkını vererek yapıyor işini, memnun kalırsınız, tavsiye ederim... Falkon rent a car',
    datePublished: '2022-06-15',
  },
  {
    name: 'MC Kaya Yapıdenetim',
    rating: 5,
    text: 'İşini layıkıyla yapan tecrübeli, çözüm odaklı, disiplinli ve hızlı. Başarılarınızın devamını diler, hizmetiniz için teşekkür ederim.',
    datePublished: '2022-04-22',
  },
];
