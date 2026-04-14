import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DSG Hangi Araçlarda Var? 2026 Tam Liste | Eren Servis',
  description:
    'DSG şanzıman hangi araçlarda var? VW, Audi, Seat, Skoda, BMW ve diğer markalar için DQ200, DQ250, DQ381 model listesi. Araçlarda DSG var mı öğren.',
  keywords: [
    'dsg hangi araçlarda var',
    'dsg şanzıman hangi arabada var',
    'dq200 hangi araçlarda',
    'dq250 hangi modeller',
    'volkswagen dsg listesi',
    'audi dsg hangi modeller',
    'dsg olan arabalar 2026',
  ],
  alternates: {
    canonical: 'https://erenservis.vercel.app/blog/dsg-hangi-araclarda-var/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const DSG_MODELLER = [
  {
    kod: 'DQ200',
    ad: '7 İleri — Kuru Kavrama',
    renk: 'text-sky-600 bg-sky-50 border-sky-200',
    araclar: [
      'VW Golf 6, 7, 8 (1.2–2.0 TDI)',
      'VW Polo (6C, AW)',
      'VW Jetta (2010+)',
      'Audi A1, A3 8V/8Y',
      'Seat Ibiza, Leon 5F',
      'Skoda Fabia, Octavia (1.0–1.6 TDI)',
      'Skoda Superb (1.4 TSI)',
    ],
  },
  {
    kod: 'DQ250',
    ad: '6 İleri — Islak Kavrama',
    renk: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    araclar: [
      'VW Passat B7, B8 (1.8–2.0 TDI)',
      'VW Tiguan (2007–2017)',
      'VW Sharan (2010+)',
      'Audi A3 8P/8V (quattro)',
      'Audi TT (8J, 8S)',
      'Seat Alhambra',
      'Skoda Octavia vRS, Superb (2.0)',
    ],
  },
  {
    kod: 'DQ381',
    ad: '7 İleri — Yeni Nesil Kuru',
    renk: 'text-violet-600 bg-violet-50 border-violet-200',
    araclar: [
      'VW Golf 8 (eTSI dahil)',
      'VW Tiguan 2 (2017+)',
      'VW Passat B9',
      'VW Arteon',
      'Audi A3 8Y (2.0 TDI)',
      'Skoda Octavia 4. nesil',
      'Seat/Cupra Ateca, Formentor',
    ],
  },
  {
    kod: 'DQ500',
    ad: '7 İleri — Islak (Yüksek Tork)',
    renk: 'text-orange-600 bg-orange-50 border-orange-200',
    araclar: [
      'VW Amarok (V6 TDI)',
      'VW Multivan T5, T6',
      'Audi Q5, Q7 (2013+)',
      'Audi A6, A7, A8 (2014+)',
      'Porsche Cayenne, Macan (bazı)',
      'Skoda Kodiaq, Karoq (2.0 TDI DSG)',
    ],
  },
];

const DIKKAT_NOKTALARI = [
  'Aynı modelin farklı motor seçenekleri farklı şanzıman kullanabilir — 1.4 ile 2.0 TDI farklı DSG\'ye sahip olabilir',
  'Model yılı kritik — 2017 öncesi Tiguan DQ250, 2017 sonrası DQ381 kullanıyor',
  'DSG var mı diye teyit etmenin en kolay yolu araç ruhsatındaki şanzıman kodu veya OBD okuma',
  'DSG olan araçlar otomatik vites konumlarına (P/R/N/D) ek olarak genellikle "S" ve paddle shifter\'a sahiptir',
];

export default function DSGHangiAraclarPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'DSG Hangi Araçlarda Var? 2026 Tam Liste',
    description: 'DSG şanzıman hangi araçlarda var? VW, Audi, Seat, Skoda için DQ200, DQ250, DQ381, DQ500 model listesi.',
    datePublished: '2026-04-11',
    author: { '@type': 'Organization', name: 'Eren Servis', url: 'https://erenservis.vercel.app' },
    publisher: { '@type': 'Organization', name: 'Eren Servis', url: 'https://erenservis.vercel.app' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://erenservis.vercel.app/blog/dsg-hangi-araclarda-var/' },
  };

  return (
    <main className="bg-graphite-base">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-graphite-base pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              DSG Rehberi
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            DSG Hangi{' '}
            <span className="text-brass">Araçlarda Var?</span>
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            DQ200, DQ250, DQ381 ve DQ500 — Volkswagen Grubu&apos;nun dört DSG ailesini kullanan araçların
            tam listesi. Aracınızın hangi DSG&apos;ye sahip olduğunu öğrenin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={PHONE_HREF} className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2.5 px-7 py-3.5 text-base transition-colors">
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

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="font-saira text-text-primary text-lg leading-relaxed">
            DSG (Direct Shift Gearbox), Volkswagen Grubu&apos;nun geliştirdiği çift kavramalı otomatik şanzıman
            teknolojisidir. Audi&apos;de S-tronic, Seat ve Cupra&apos;da DSG adıyla anılır. 4 farklı model ailesi
            farklı araçlarda kullanılır — arızanın türü ve tamir maliyeti hangi DSG&apos;ye sahip olduğunuza
            göre değişir.
          </p>
        </div>

        {/* Model Listeleri */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">DSG Modeline Göre Araç Listesi</h2>
          <div className="space-y-6">
            {DSG_MODELLER.map((model) => (
              <div key={model.kod} className="rounded-xl border border-border-hairline overflow-hidden">
                <div className={`flex items-center gap-3 px-5 py-4 border-b border-border-hairline ${model.renk} border`}>
                  <span className={`text-lg font-bold ${model.renk.split(' ')[0]}`}>{model.kod}</span>
                  <span className="font-saira text-sm font-medium text-text-secondary">— {model.ad}</span>
                </div>
                <ul className="divide-y divide-border-hairline">
                  {model.araclar.map((arac) => (
                    <li key={arac} className="px-5 py-3 font-saira text-sm text-text-primary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brass shrink-0" />
                      {arac}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Dikkat Noktaları */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Dikkat Edilmesi Gerekenler</h2>
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-6">
            <ul className="space-y-3">
              {DIKKAT_NOKTALARI.map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <span className="font-saira text-sm text-text-primary">{madde}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* İç Linkler */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-border-hairline">
          <Link
            href="/arac/dq200/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brass-bright text-graphite-base font-saira font-semibold hover:bg-brass transition-colors"
          >
            DQ200 Tamir Detayı
          </Link>
          <Link
            href="/hizmetler/dsg-mekatronik-kart/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-colors"
          >
            Mekatronik Kart Fiyatları &rarr;
          </Link>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="bg-graphite-base py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">DSG Arızanız mı Var?</h2>
          <p className="font-saira text-text-secondary mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi-Cumartesi 08:00-18:00
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-7 py-3.5 transition-colors">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/blog/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm"
            >
              Diğer Yazılar &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
