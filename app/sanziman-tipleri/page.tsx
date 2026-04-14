import type { Metadata } from 'next';
import { BookOpen, Layers, Search, Wrench, AlertTriangle, Car, ChevronDown, Droplets, HelpCircle } from 'lucide-react';
import TransmissionFilter from '@/components/sanziman/TransmissionFilter';
import { transmissions } from '@/lib/sanziman';

export const metadata: Metadata = {
  title: 'Şanzıman Türleri ve Teknik Rehberi | Eren Servis Bostancı',
  description:
    'DSG, ZF, CVT ve konvansiyonel otomatik şanzıman türlerini karşılaştırın. Kronik arızalar, bakım aralıkları ve Bostancı Eren Servis uzman bilgisi.',
  alternates: {
    canonical: 'https://www.erenservis.vercel.app/sanziman-tipleri/',
  },
  openGraph: {
    title: 'Şanzıman Türleri ve Teknik Rehberi | Eren Servis',
    description:
      'DSG, ZF, CVT ve konvansiyonel otomatik şanzıman türleri. Arızalar, bakım ve uzman bilgisi.',
    url: 'https://www.erenservis.vercel.app/sanziman-tipleri/',
  },
};

const STATS = [
  {
    icon: <Layers className="w-4 h-4" strokeWidth={2.5} />,
    value: `${transmissions.length}`,
    label: 'Şanzıman Tipi',
    sub: 'DSG, ZF, CVT, Konvansiyonel',
  },
  {
    icon: <AlertTriangle className="w-4 h-4" strokeWidth={2.5} />,
    value: `${transmissions.reduce((sum, t) => sum + t.commonFaults.length, 0)}+`,
    label: 'Belgelenmiş Arıza',
    sub: 'Semptom ve çözüm yollarıyla',
  },
  {
    icon: <Car className="w-4 h-4" strokeWidth={2.5} />,
    value: `${[...new Set(transmissions.flatMap((t) => t.brands))].length}+`,
    label: 'Marka Kapsamı',
    sub: 'VW, BMW, Toyota ve daha fazlası',
  },
  {
    icon: <Wrench className="w-4 h-4" strokeWidth={2.5} />,
    value: '1.500+',
    label: 'Tamamlanan Onarım',
    sub: '15+ yıllık saha deneyimi',
  },
];

const OIL_DATA = transmissions.map((t) => ({
  title: t.title,
  slug: t.slug,
  category: t.category,
  brands: t.brands.slice(0, 3),
  maintenance: t.maintenance,
}));

const FAQ_ITEMS = [
  {
    q: 'Şanzıman yağı değiştirilmezse ne olur?',
    a: 'Yağ zamanla oksitlenir, metal parçacıkları biriktirir ve soğutma kapasitesini yitirir. Kirli yağ solenoid valflerini tıkar, kavrama gruplarını aşındırır ve mekatronik üniteye zarar verir. Sonuç genellikle valf gövdesi veya tam revizyon — yağ değişiminin 10–20 katı maliyet.',
  },
  {
    q: 'Şanzıman tamiri ne kadar sürer?',
    a: 'Diagnostik ve yağ değişimi genellikle aynı gün tamamlanır. Kavrama grubu veya valf gövdesi değişimi 1–2 iş günü sürer. Mekatronik onarımı veya tam revizyon 2–4 iş günü arasında değişir — parça temin süresine bağlı olarak uzayabilir.',
  },
  {
    q: 'İkinci el araçta şanzıman kontrolü nasıl yapılır?',
    a: 'Öncelikle diagnostik cihazıyla hata kodu taraması yapılır. Ardından yağın rengi ve kıvamı kontrol edilir — siyah veya yanık kokulu yağ ihmal işaretidir. Test sürüşünde vites geçiş kalitesi, titreme ve sürüklenme hissi değerlendirilir. Eren Servis\'te ikinci el araç şanzıman kontrolü ücretsizdir.',
  },
  {
    q: 'Orijinal şanzıman yağı mı, muadil mi kullanılmalı?',
    a: 'DSG (DQ200/DQ250), ZF 8HP ve CVT şanzımanlar üretici onaylı yağ gerektirir — muadil kullanımı garanti kapsamını düşürür ve arıza riskini artırır. Mercedes 722 serisi ve konvansiyonel şanzımanlarda onaylı muadiller kullanılabilir. Yanlış yağ, yağ değişiminin çok üzerinde bir onarım faturası doğurabilir.',
  },
  {
    q: 'Şanzıman tamiri mi, değişimi mi daha mantıklı?',
    a: 'Araca 3 yıldan fazla binecekseniz ve şanzıman hasarı sınırlıysa tamir her zaman daha ekonomiktir. Revizyon maliyeti genellikle sıfır şanzıman fiyatının %30–50\'si kadardır. Ancak şanzıman gövdesinde çatlak, torque konvertörde ağır metal kirliliği veya birden fazla kritik ünite hasarı varsa değişim daha mantıklı olabilir.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function SanzimanTipleriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero */}
      <section className="bg-graphite-base pt-28 pb-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Sol — başlık */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-brass/8">
                  <BookOpen className="w-3.5 h-3.5 text-brass" strokeWidth={2.5} />
                </div>
                <span className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                  Teknik Bilgi Bankası
                </span>
              </div>
              <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
                Şanzıman Türleri ve{' '}
                <span className="text-brass">Teknik Rehberi</span>
              </h1>
              <p className="font-saira text-lg text-text-secondary leading-relaxed mb-8">
                DSG&apos;den ZF&apos;e, CVT&apos;den konvansiyonel otomatiğe — her şanzıman
                tipini teknik açıdan anlayın. Kronik arızalar, bakım aralıkları ve uzman çözüm
                yolları.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col gap-1.5 p-4 rounded-xl bg-surface-1 border border-edge"
                  >
                    <div className="flex items-center gap-2 text-brass">
                      {s.icon}
                      <span className="font-saira text-xl font-semibold">{s.value}</span>
                    </div>
                    <p className="text-sm font-semibold text-fg leading-none">{s.label}</p>
                    <p className="text-xs text-fg-soft leading-snug">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ — şanzıman tipi önizleme kartları */}
            <div className="hidden lg:flex flex-col gap-3">
              {transmissions.map((t) => {
                const highCount = t.commonFaults.filter((f) => f.severity === 'high').length;
                return (
                  <div
                    key={t.slug}
                    className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl bg-surface-1 border border-edge hover:border-border-brass transition-colors"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-fg">{t.title}</span>
                      <span className="text-xs text-fg-soft">
                        {t.brands.slice(0, 3).join(', ')}
                        {t.brands.length > 3 ? ` +${t.brands.length - 3}` : ''}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {highCount > 0 && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-status-critical-bg text-status-critical-text border border-status-critical-border/20 text-[11px] font-semibold">
                          <AlertTriangle className="w-3 h-3" strokeWidth={2.5} />
                          {highCount} kritik
                        </span>
                      )}
                      <span className="text-xs text-fg-muted">{t.brands.length} marka</span>
                    </div>
                  </div>
                );
              })}
              <p className="text-xs text-fg-soft text-center mt-1">
                Detay için aşağıdan seçin ↓
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <hr className="border-edge" />
      </div>

      {/* Filter + Cards */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-4 h-4 text-fg-muted" strokeWidth={2} />
            <h2 className="text-sm font-semibold text-fg-soft uppercase tracking-wider">
              Kategori seçin
            </h2>
          </div>
          <TransmissionFilter />
        </div>
      </section>

      {/* Yağ Değişim Tablosu */}
      <section className="pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Droplets className="w-4 h-4 text-accent" strokeWidth={2} />
            <h2 className="text-base font-semibold text-fg">
              Şanzıman Yağı Değişim Periyotları
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-edge">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-2 border-b border-edge">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-fg-soft uppercase tracking-wider">
                    Şanzıman Tipi
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-fg-soft uppercase tracking-wider hidden sm:table-cell">
                    Markalar
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-fg-soft uppercase tracking-wider">
                    İşlem
                  </th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-fg-soft uppercase tracking-wider">
                    Periyot
                  </th>
                </tr>
              </thead>
              <tbody>
                {OIL_DATA.flatMap((t, ti) =>
                  t.maintenance
                    .filter((m) =>
                      m.task.toLowerCase().includes('yağ') ||
                      m.task.toLowerCase().includes('filtre')
                    )
                    .map((m, mi) => (
                      <tr
                        key={`${t.slug}-${mi}`}
                        className={`border-b border-edge last:border-0 ${
                          (ti + mi) % 2 === 0 ? 'bg-surface-0' : 'bg-surface-1'
                        }`}
                      >
                        {mi === 0 ? (
                          <td className="px-4 py-3.5 font-semibold text-fg">
                            {t.title}
                          </td>
                        ) : (
                          <td className="px-4 py-3.5 text-fg-muted text-xs">↳</td>
                        )}
                        <td className="px-4 py-3.5 text-fg-soft hidden sm:table-cell">
                          {t.brands.join(', ')}
                        </td>
                        <td className="px-4 py-3.5 text-fg-soft">{m.task}</td>
                        <td className="px-4 py-3.5 text-right font-saira text-brass font-medium whitespace-nowrap">
                          {m.interval}
                        </td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-fg-soft mt-3">
            * Ağır kullanım koşullarında (şehir içi yoğun trafik, çekici, dağlık arazi)
            periyotları %20 kısaltmanızı öneririz.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-4 h-4 text-brass" strokeWidth={2} />
            <h2 className="text-base font-semibold text-fg">
              Sık Sorulan Sorular
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-edge rounded-xl border border-edge overflow-hidden">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="group bg-surface-1">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none hover:bg-surface-2 transition-colors">
                  <span className="text-sm font-semibold text-fg">{item.q}</span>
                  <ChevronDown
                    className="w-4 h-4 text-fg-soft shrink-0 transition-transform group-open:rotate-180"
                    strokeWidth={2}
                  />
                </summary>
                <div className="px-5 pb-5 pt-1">
                  <p className="text-sm text-fg-soft leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Info callout */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 p-5 rounded-xl bg-surface-1 border border-edge">
            <Search className="w-5 h-5 text-brass mt-0.5 shrink-0" strokeWidth={2} />
            <div>
              <p className="text-sm font-semibold text-fg mb-1">
                Aracınızın şanzımanı hangisi?
              </p>
              <p className="text-sm text-fg-soft leading-relaxed">
                Marka ve model bilgisini bilmiyorsanız, araç ruhsatınızdaki şanzıman kodunu veya
                aracı bize getirerek ücretsiz diagnostik yapabilirsiniz.{' '}
                <a href="tel:+905327153751" className="text-brass font-semibold hover:underline">
                  0532 715 37 51
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
