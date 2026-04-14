import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench, Clock, ShieldCheck, Settings } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DSG Şanzıman Tamiri Bostancı | Eren Servis',
  description:
    'Bostancı\'da DSG şanzıman tamiri ve bakımı. DQ200, DQ250, DQ381 ve tüm DSG modelleri. Sertifikalı teknisyen, orijinal parça, 6 ay garanti.',
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
    aciklama: 'Tamir sonrası TCU adaptasyonu, road test ve 6 ay işçilik garantisi ile teslim.',
  },
];

export default function DsgSanzımanTamiriPage() {
  return (
    <main>

        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/images/mechanic-close.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(6px) saturate(0.5) brightness(0.55)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background: 'linear-gradient(to bottom, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.88) 100%)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
              <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
                Uzman DSG Servisi
              </span>
            </div>
            <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
              DSG Şanzıman Tamiri{' '}
              <span className="text-brass">Bostancı</span>
            </h1>
            <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
              DQ200, DQ250, DQ381 ve tüm DSG modelleri. Mechatronik ünitesi, kavrama paketi ve
              elektronik kontrol ünitesi tamirinde{' '}
              <strong className="text-text-primary font-medium">15 yılı aşkın deneyim</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={PHONE_HREF}
                className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2.5 px-7 py-3.5 text-base transition-colors"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                {PHONE}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold text-base hover:border-brass hover:text-text-primary transition-all"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </section>

        {/* Hizmet Adımları */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-10">Nasıl Çalışıyoruz?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HIZMET_ADIMLAR.map((adim, i) => (
                <div key={adim.baslik} className="flex flex-col items-center text-center p-6 rounded-xl bg-graphite-surface border border-border-hairline">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brass/8 text-brass mb-4">
                    <adim.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <span className="font-jetbrains text-[10px] font-bold text-brass uppercase tracking-[0.22em] mb-1">ADIM {i + 1}</span>
                  <h3 className="font-saira font-semibold text-base text-text-primary mb-2">{adim.baslik}</h3>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">{adim.aciklama}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DSG Modeller */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-3">Servis Verdiğimiz DSG Modelleri</h2>
            <p className="font-saira text-text-secondary text-center mb-10 max-w-xl mx-auto">
              Volkswagen Grubu&apos;nun tüm DSG ve S-Tronic şanzıman ailelerinde uzman servis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {DSG_MODELLER.map((item) => (
                <div key={item.model} className="p-6 rounded-xl bg-graphite-surface border border-border-hairline shadow-sm">
                  <h3 className="font-saira font-semibold text-base text-text-primary mb-2">{item.model}</h3>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Belirtiler */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-status-warning-bg border border-status-warning-border/20 mb-5">
                  <AlertTriangle className="w-4 h-4 text-status-warning-label" strokeWidth={2} />
                  <span className="text-xs font-semibold text-status-warning-text">Bu belirtileri görüyorsanız erken gelin</span>
                </div>
                <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">DSG Arıza Belirtileri</h2>
                <ul className="flex flex-col gap-3">
                  {BELIRTILER.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brass shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="font-saira text-sm text-text-primary leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
                <h3 className="font-saira font-semibold text-xl text-text-primary mb-3">Ücretsiz Ön Tanı</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-6">
                  Aracınızı getirin, elektronik tanıyı ücretsiz yapalım. DSG arızasını erken tespit
                  etmek, onarım maliyetini önemli ölçüde düşürür.
                </p>
                <a
                  href={PHONE_HREF}
                  className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center justify-center gap-2 px-6 py-3 transition-colors"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  Randevu Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Alt CTA */}
        <section className="bg-graphite-base py-14 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">DSG Şanzımanınız İçin Bizi Arayın</h2>
            <p className="font-saira text-text-secondary mb-8">
              Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi–Cumartesi 08:00–18:00
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PHONE_HREF}
                className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-7 py-3.5 transition-colors"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                {PHONE}
              </a>
              <Link
                href="/hizmetler/zf-sanziman-tamiri/"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm"
              >
                ZF Şanzıman Servisi →
              </Link>
            </div>
          </div>
        </section>

    </main>
  );
}
