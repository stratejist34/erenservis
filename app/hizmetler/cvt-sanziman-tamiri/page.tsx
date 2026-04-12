import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench, Clock, ShieldCheck, Settings } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'CVT Şanzıman Tamiri Bostancı | Eren Servis',
  description:
    'Bostancı\'da CVT şanzıman tamiri ve revizyonu. Nissan, Toyota, Honda, Hyundai, Kia CVT şanzıman kayış/zincir değişimi, yağ ve elektronik kalibrasyon. Garantili servis.',
  keywords: [
    'cvt şanzıman tamiri',
    'cvt şanzıman servisi bostancı',
    'nissan cvt tamiri',
    'toyota cvt şanzıman',
    'cvt kayış değişimi',
    'cvt yağ değişimi',
  ],
  alternates: {
    canonical: 'https://erenservis.net/hizmetler/cvt-sanziman-tamiri/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const CVT_MARKALAR = [
  {
    marka: 'Nissan / Infiniti',
    model: 'Juke, Qashqai, X-Trail, Note, Micra',
    desc: 'Nissan CVT (JF010, JF011, RE0F10A) kayış aşınması, yağ kirlenmesi ve solenoid arızaları.',
  },
  {
    marka: 'Toyota',
    model: 'Corolla, Auris, CH-R, Yaris, RAV4 Hybrid',
    desc: 'Toyota K310/K313 CVT ve hibrit modellerde yağ değişimi, filtre temizliği, kalibrasyon.',
  },
  {
    marka: 'Honda',
    model: 'Civic, HR-V, Jazz, CR-V',
    desc: 'Honda CVT titremesi, sürüklenme hissi ve yüksek devir sorularında revizyon.',
  },
  {
    marka: 'Hyundai / Kia',
    model: 'i20, i30, Tucson, Sportage, Rio',
    desc: 'Hyundai ve Kia CVT (IVT) şanzımanlarda kayış aşınması, yağ değişimi ve elektronik arıza tespiti.',
  },
  {
    marka: 'Mitsubishi',
    model: 'ASX, Eclipse Cross, Lancer',
    desc: 'JATCO CVT ailesi — kayış, konik kasnak ve yağ sistemi revizyonu.',
  },
  {
    marka: 'Diğer Markalar',
    model: 'Opel, Renault, Hyundai, Kia CVT',
    desc: 'JATCO ve Aisin kaynaklı CVT şanzımanların tamamına servis verilmektedir.',
  },
];

const BELIRTILER = [
  'Hızlanırken motor devri aniden yükseliyor ama araç hızlanmıyor',
  'Düşük hızda titreme veya sarsmak hissi',
  'Yokuş çıkışında güç kaybı veya sürüklenme',
  '"CVT arızası" veya "Şanzıman kontrol" uyarı ışığı',
  'Şanzıman fazla ısınıyor, yağ kokusu',
  'CVT yağ rengi karardı veya yanmış koku var',
];

const HIZMET_ADIMLAR = [
  { icon: Settings, baslik: 'Elektronik Tanı', aciklama: 'Hata kodları ve CVT veri akışı incelenir. Kayış/zincir durumu, yağ sıcaklığı ve basınç ölçülür.' },
  { icon: Wrench, baslik: 'Mekanik İnceleme', aciklama: 'CVT demonte edilerek kayış/zincir, konik kasnaklar ve yağ pompası kontrol edilir.' },
  { icon: ShieldCheck, baslik: 'OEM Parça ile Onarım', aciklama: 'Marka orijinal veya kalite eşdeğer parça. Özellikle CVT yağı marka spesifikasyonuna göre seçilir.' },
  { icon: Clock, baslik: 'Kalibrasyon & Test', aciklama: 'Onarım sonrası CVT öğrenme sıfırlaması, adaptasyon ve yol testi yapılır.' },
];

export default function CvtSanzımanTamiriPage() {
  return (
    <main>

        {/* Hero */}
        <section className="hero-deep pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
              <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
                CVT Uzman Servisi
              </span>
            </div>
            <h1 className="text-hero-text mb-5">
              CVT Şanzıman Tamiri{' '}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'var(--gradient-accent)' }}>
                Bostancı
              </span>
            </h1>
            <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Nissan, Toyota, Honda, Hyundai, Kia ve tüm CVT şanzımanlarda kayış/zincir değişimi,
              yağ revizyonu ve elektronik kalibrasyon.{' '}
              <strong className="text-hero-muted font-medium">Garantili servis.</strong>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={PHONE_HREF}
                className="btn-premium flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-bold text-base">
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                {PHONE}
              </a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl border-2 border-white/20 text-white font-semibold text-base hover:bg-white/10 hover:border-white/40 transition-all">
                <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </section>

        {/* Adımlar */}
        <section className="py-16 bg-[#070B11]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-content-text text-center mb-10">Servis Sürecimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HIZMET_ADIMLAR.map((adim, i) => (
                <div key={adim.baslik} className="flex flex-col items-center text-center p-6 rounded-2xl bg-content-secondary border border-content-border">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
                    <adim.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-accent mb-1">ADIM {i + 1}</span>
                  <h3 className="text-content-text font-semibold text-base mb-2">{adim.baslik}</h3>
                  <p className="text-content-muted text-sm leading-relaxed">{adim.aciklama}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Markalar */}
        <section className="py-16 bg-content-secondary">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-content-text text-center mb-3">Servis Verdiğimiz CVT Markalar</h2>
            <p className="text-content-muted text-center mb-10 max-w-xl mx-auto">
              JATCO, Aisin ve marka özgün CVT şanzımanların tamamına bakım ve revizyon hizmeti verilmektedir.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CVT_MARKALAR.map((item) => (
                <div key={item.marka} className="p-5 rounded-2xl bg-[#070B11] border border-content-border shadow-sm">
                  <h3 className="text-content-text font-semibold text-base mb-1">{item.marka}</h3>
                  <p className="text-xs font-medium text-accent mb-2">{item.model}</p>
                  <p className="text-content-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Belirtiler */}
        <section className="py-16 bg-[#070B11]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-status-warning-bg border border-status-warning-border/20 mb-5">
                  <AlertTriangle className="w-4 h-4 text-status-warning-label" strokeWidth={2} />
                  <span className="text-xs font-semibold text-status-warning-text">Erken müdahale maliyeti düşürür</span>
                </div>
                <h2 className="text-content-text mb-6">CVT Arıza Belirtileri</h2>
                <ul className="flex flex-col gap-3">
                  {BELIRTILER.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-content-text text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-surface-0 rounded-2xl p-8 text-center">
                <h3 className="text-white font-bold text-xl mb-3">CVT için Önemli Uyarı</h3>
                <p className="text-fg-muted text-sm leading-relaxed mb-6">
                  CVT şanzımanlar yağ kalitesine son derece duyarlıdır. Marka dışı veya süresi
                  dolmuş CVT yağı kayış hasarını hızlandırır. Düzenli CVT yağı değişimi
                  revizyon maliyetinin çok altındadır.
                </p>
                <a href={PHONE_HREF}
                  className="btn-premium flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold">
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  Randevu Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Alt CTA */}
        <section className="hero-deep py-14 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-hero-text mb-4">CVT Şanzımanınız İçin Bizi Arayın</h2>
            <p className="text-hero-muted mb-8">
              Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi–Cumartesi 08:00–18:00
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={PHONE_HREF}
                className="btn-premium flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold">
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                {PHONE}
              </a>
              <Link href="/hizmetler/dsg-sanziman-tamiri/"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all text-sm">
                DSG Şanzıman Servisi →
              </Link>
            </div>
          </div>
        </section>

    </main>
  );
}
