// lib/constants.ts
// Proje genelinde bağlayıcı sabitler — değiştirmek için Emrah onayı gerekir

/**
 * ⛔ GARANTİ SÜRESİ — ASLA DEĞİŞTİRİLMEZ
 * Tüm hizmetler için standart garanti süresi 6 aydır.
 * Sitede "12 ay", "1 yıl", "24 ay" veya "2 yıl" garanti yazılmaz.
 * Bu sabiti kullanarak garanti ibarelerinin tutarlı kalması sağlanır.
 */
export const GARANTI_SURESI = '6 ay' as const;

/** Tam garanti metni — servis sayfalarında kullanım için */
export const GARANTI_METIN = '6 ay işçilik garantisi' as const;

/**
 * Çalışma saatleri — site genelinde tek kaynak.
 * Footer, ContactForm, LiveDiagnosedFeed ve LocalBusiness schema buradan okur.
 * Değerleri değiştirirken schema `openingHoursSpecification`'ı da otomatik güncellenir.
 */
export const BUSINESS_HOURS = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const,
  opens: '08:30',
  closes: '18:30',
  timezone: 'Europe/Istanbul',
  displayWeekdays: 'Pzt-Cmt: 08:30–18:30',
  displaySunday: 'Pazar: Kapalı',
  opensHour: 8,
  opensMinute: 30,
  closesHour: 18,
  closesMinute: 30,
} as const;

/** İletişim bilgileri — tek kaynak */
export const CONTACT = {
  phoneDisplay: '0532 715 37 51',
  phoneHref: 'tel:+905327153751',
  whatsappNumber: '905327153751',
  whatsappHref: 'https://wa.me/905327153751',
  addressLine: 'Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4',
  district: 'Bostancı 34744 Ataşehir/İstanbul',
  coords: { lat: 40.9656025, lng: 29.1093912 },
} as const;
