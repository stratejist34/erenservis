import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench, Clock, ShieldCheck, Settings } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DSG Şanzıman Tamiri Bostancı | Eren Servis',
  description:
    'Bostancı\'da DSG şanzıman tamiri ve bakımı. DQ200, DQ250, DQ381 ve tüm DSG modelleri. Sertifikalı teknisyen, orijinal parça, 2 yıl garanti.',
  keywords: [
    'dsg şanzıman tamiri',
    'dsg şanzıman servisi bostancı',
    'dq200 tamiri',
    'dq250 tamiri',
    's-tronic tamiri',
    'dsg bakımı',
    'dsg kart tamiri',
  ],
  alternates: {
    canonical: 'https://erenservis.net/hizmetler/dsg-sanziman-tamiri/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const DSG_MODELLER = [
  {
    model: 'DQ200 (7 ileri kuru kavramalı)',
    desc: 'Volkswagen, Audi, Skoda, Seat 1.0–1.4 TSI motorlarda yaygın. Mechatronik arızası, kavrama paketi, yağ sızdırmazlık.',
  },
  {
    model: 'DQ250 (6 ileri ıslak kavramalı)',
    desc: 'Golf GTI, Audi S3, yüksek torklu uygulamalar. Kavrama aşınması, solenoid arızası, yağ değişimi.',
  },
  {
    model: 'DQ381 / DQ500 (7 ileri yüksek tork)',
    desc: 'Golf R, Tiguan R, Arteon, Audi S4. Valf gövdesi, kavrama hidrolik sistemi, TCU arızaları.',
  },
  {
    model: 'S-Tronic (Audi)',
    desc: 'DQ200 ve DQ250 tabanlı Audi uygulamaları. Tüm S-Tronic modelleri servis kapsamındadır.',
  },
];

const BELIRTILER = [
  'Viteste sarsıntı veya vuruntu hissi',
  'Düşük hızda titreme (özellikle DQ200)',
  'Vites geçişlerinde gecikme veya sertlik',
  '"Şanzıman arızası" uyarı ışığı',
  'Motor devri artarken aracın geç hızlanması',
  'DSG yağ sızıntısı',
];

const HIZMET_ADIMLAR = [
  {
    icon: Settings,
    baslik: 'Elektronik Tanı',
    aciklama: 'OBD diagnostik cihazı ile hata kodları okunur, TCU verileri analiz edilir.',
  },
  {
    icon: Wrench,
    baslik: 'Mekanik İnceleme',
    aciklama: 'Şanzıman demonte edilerek kavrama paketi, mechatronik ünitesi ve valf gövdesi kontrol edilir.',
  },
  {
    icon: ShieldCheck,
    baslik: 'Orijinal Parça ile Onarım',
    aciklama: 'OEM veya orijinal eşdeğer parça ile tamir. Kullanılan tüm parçalar belgelenir.',
  },
  {
    icon: Clock,
    baslik: 'Test & Teslim',
    aciklama: 'Tamir sonrası TCU adaptasyonu, road test ve 2 yıl işçilik garantisi ile teslim.',
  },
];

export default function DsgSanzımanTamiriPage() {
  return (
    <main>

        {/* Hero */}
        <section className="hero-deep pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
              <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
                Uzman DSG Servisi
              </span>
            </div>
            <h1 className="text-hero-text mb-5">
              DSG Şanzıman Tamiri{' '}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'var(--gradient-accent)' }}>
                Bostancı
              </span>
            </h1>
            <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              DQ200, DQ250, DQ381 ve tüm DSG modelleri. Mechatronik ünitesi, kavrama paketi ve
              elektronik kontrol ünitesi tamirinde{' '}
              <strong className="text-hero-muted font-medium">15 yılı aşkın deneyim</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={PHONE_HREF}
                className="btn-premium flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-bold text-base"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                {PHONE}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl border-2 border-white/20 text-white font-semibold text-base hover:bg-white/10 hover:border-white/40 transition-all"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </section>

        {/* Hizmet Adımları */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-content-text text-center mb-10">Nasıl Çalışıyoruz?</h2>
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

        {/* DSG Modeller */}
        <section className="py-16 bg-content-secondary">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-content-text text-center mb-3">Servis Verdiğimiz DSG Modelleri</h2>
            <p className="text-content-muted text-center mb-10 max-w-xl mx-auto">
              Volkswagen Grubu&apos;nun tüm DSG ve S-Tronic şanzıman ailelerinde uzman servis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {DSG_MODELLER.map((item) => (
                <div key={item.model} className="p-6 rounded-2xl bg-white border border-content-border shadow-sm">
                  <h3 className="text-content-text font-semibold text-base mb-2">{item.model}</h3>
                  <p className="text-content-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Belirtiler */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-status-warning-bg border border-status-warning-border/20 mb-5">
                  <AlertTriangle className="w-4 h-4 text-status-warning-label" strokeWidth={2} />
                  <span className="text-xs font-semibold text-status-warning-text">Bu belirtileri görüyorsanız erken gelin</span>
                </div>
                <h2 className="text-content-text mb-6">DSG Arıza Belirtileri</h2>
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
                <h3 className="text-white font-bold text-xl mb-3">Ücretsiz Ön Tanı</h3>
                <p className="text-fg-muted text-sm leading-relaxed mb-6">
                  Aracınızı getirin, elektronik tanıyı ücretsiz yapalım. DSG arızasını erken tespit
                  etmek, onarım maliyetini önemli ölçüde düşürür.
                </p>
                <a
                  href={PHONE_HREF}
                  className="btn-premium flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold"
                >
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
            <h2 className="text-hero-text mb-4">DSG Şanzımanınız İçin Bizi Arayın</h2>
            <p className="text-hero-muted mb-8">
              Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi–Cumartesi 08:00–18:00
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PHONE_HREF}
                className="btn-premium flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                {PHONE}
              </a>
              <Link
                href="/hizmetler/zf-sanziman-tamiri/"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all text-sm"
              >
                ZF Şanzıman Servisi →
              </Link>
            </div>
          </div>
        </section>

    </main>
  );
}
