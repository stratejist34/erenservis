// data/reviews.ts
// Eren Servis müşteri yorumları — manuel küratörlü.
// Kaynak: Google My Business / WhatsApp geri bildirim.
// Schema.org Review entity'sine dönüştürülür (lib/schema.ts → buildReviewsSchema).
//
// Not: datePublished formatı ISO 8601 (YYYY-MM-DD).
// Her yeni yorumda tarih + araç + rating (1-5) zorunlu; transmissionFamily opsiyonel.

export type CustomerReview = {
  name: string;
  vehicle: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  datePublished: string;
  transmissionFamily?: string;
};

export const REVIEWS: readonly CustomerReview[] = [
  {
    name: 'Ahmet K.',
    vehicle: 'Volkswagen Passat 2019',
    rating: 5,
    text: "DSG mekatronik arızası vardı. Başka yer 35 bin TL istedi, burada 12 bin TL'ye halledildi. 2 aydır sorunsuz kullanıyorum.",
    datePublished: '2026-01-18',
    transmissionFamily: 'DQ250',
  },
  {
    name: 'Murat D.',
    vehicle: 'Audi A3 2020',
    rating: 5,
    text: 'Vuruntu sorunu için geldim, doğru teşhis koydular. Kavrama balata seti değişti, şimdi yepyeni gibi.',
    datePublished: '2026-02-05',
    transmissionFamily: 'DQ200',
  },
  {
    name: 'Selin T.',
    vehicle: 'Seat Leon 2021',
    rating: 5,
    text: 'Önceki serviste 3 kez geri döndüm, sorunu çözemediler. Burada ilk seferde düzeldi. Açıklama da netti.',
    datePublished: '2026-02-22',
    transmissionFamily: 'DQ200',
  },
  {
    name: 'Kerem Ö.',
    vehicle: 'Skoda Octavia 2018',
    rating: 5,
    text: 'P ışığı yanıyor, şanzıman soğut uyarısı geliyordu. Basınç tüpü değişti, 6 ay garantili işçilik. Net iletişim.',
    datePublished: '2026-03-04',
    transmissionFamily: 'DQ200',
  },
  {
    name: 'Hakan B.',
    vehicle: 'BMW 320i F30 2017',
    rating: 5,
    text: "ZF 8HP yağ değişimi + filtre. Şehir içi titreme kayboldu. Usta detaylı sohbet etti, hangi parçayı niye değiştirdiğini gösterdi.",
    datePublished: '2026-03-15',
    transmissionFamily: 'ZF 8HP',
  },
  {
    name: 'Emre G.',
    vehicle: 'Volkswagen Golf GTI 2016',
    rating: 5,
    text: 'DQ250 mekatronik revizyonu. Yarış gibi koşulda bile temiz vites alıyor. Randevu sözüne uydular.',
    datePublished: '2026-03-27',
    transmissionFamily: 'DQ250',
  },
  {
    name: 'Serkan A.',
    vehicle: 'Renault Megane 2019',
    rating: 4,
    text: "EDC'de 2→3 gecikme vardı. Kavrama balata + yazılım güncellendi. Süreç biraz uzadı ama sonuç iyi.",
    datePublished: '2026-04-02',
    transmissionFamily: 'EDC',
  },
  {
    name: 'Barış Y.',
    vehicle: 'Audi Q3 2018',
    rating: 5,
    text: "DQ381 kuru kavrama komple yenilendi. Fiyatı başka yere göre düşük, iş kalitesi çok iyi. Teşekkürler.",
    datePublished: '2026-04-10',
    transmissionFamily: 'DQ381',
  },
  {
    name: 'Gökhan S.',
    vehicle: 'Ford Kuga 2017',
    rating: 5,
    text: 'PowerShift arızası vardı, başka atölyeler sökmeye korkuyordu. Buradaki ekip hakim, ön teşhis netti.',
    datePublished: '2026-04-15',
    transmissionFamily: 'PowerShift',
  },
  {
    name: 'Tolga M.',
    vehicle: 'Toyota Corolla Hybrid 2020',
    rating: 5,
    text: "CVT sarsıntı için geldim. Resetleme + yağ değişimi yeterli geldi, gereksiz parça değişimi önerilmedi. Dürüst servis.",
    datePublished: '2026-04-19',
    transmissionFamily: 'CVT',
  },
];
