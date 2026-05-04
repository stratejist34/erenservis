'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Info,
  AlertTriangle,
  Wrench,
  Calendar,
  ChevronRight,
  Phone,
  CheckCircle,
  XCircle,
  MessageCircle,
} from 'lucide-react';
import { BRAND } from '@/lib/brand';
import { cn } from '@/lib/utils';
import type { TransmissionType } from '@/lib/sanziman';
import TransmissionDiagram from '@/components/sanziman/TransmissionDiagram';

type TabId = 'genel' | 'arizalar' | 'cozum' | 'bakim';

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'genel', label: 'Genel Bakış', icon: <Info className="w-4 h-4" strokeWidth={2} /> },
  {
    id: 'arizalar',
    label: 'Kronik Arızalar',
    icon: <AlertTriangle className="w-4 h-4" strokeWidth={2} />,
  },
  {
    id: 'cozum',
    label: 'Çözüm ve Revizyon',
    icon: <Wrench className="w-4 h-4" strokeWidth={2} />,
  },
  { id: 'bakim', label: 'Bakım', icon: <Calendar className="w-4 h-4" strokeWidth={2} /> },
];

const SEVERITY_CONFIG = {
  high: {
    label: 'Kritik',
    classes: 'status-card status-card-critical',
    badgeClasses: 'status-label-critical',
    icon: <AlertTriangle className="status-label-critical w-4 h-4 shrink-0" strokeWidth={2.5} />,
  },
  medium: {
    label: 'Orta',
    classes: 'status-card status-card-warning',
    badgeClasses: 'status-label-warning',
    icon: <AlertTriangle className="status-label-warning w-4 h-4 shrink-0" strokeWidth={2} />,
  },
  low: {
    label: 'Düşük',
    classes: 'status-card status-card-success',
    badgeClasses: 'status-label-success',
    icon: <Info className="status-label-success w-4 h-4 shrink-0" strokeWidth={2} />,
  },
} as const;

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

export default function TransmissionTabs({ data }: { data: TransmissionType }) {
  const [activeTab, setActiveTab] = useState<TabId>('genel');

  return (
    <div>
      <div
        className="flex overflow-x-auto scrollbar-none gap-1 mb-6 pb-1"
        role="tablist"
        aria-label="Şanzıman bilgi sekmeleri"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tab-panel-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-150 shrink-0',
              activeTab === tab.id
                ? 'bg-accent text-white'
                : 'bg-surface-1 text-fg-soft border border-edge hover:text-fg hover:bg-surface-2'
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-64">
        {activeTab === 'genel' && (
          <div
            id="tab-panel-genel"
            role="tabpanel"
            className="flex flex-col gap-6 animate-fade-in"
          >
            <p className="text-fg-soft leading-relaxed">{data.description}</p>

            <TransmissionDiagram slug={data.slug} className="mt-2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface-1 border border-edge rounded-xl p-5">
                <h3 className="text-sm font-semibold text-fg mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-status-success-label" strokeWidth={2.5} />
                  Avantajlar
                </h3>
                <ul className="flex flex-col gap-2">
                  {data.advantages.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-fg-soft">
                      <ChevronRight
                        className="w-3.5 h-3.5 text-status-success-label mt-0.5 shrink-0"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface-1 border border-edge rounded-xl p-5">
                <h3 className="text-sm font-semibold text-fg mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-status-critical-label" strokeWidth={2.5} />
                  Dikkat Edilmesi Gerekenler
                </h3>
                <ul className="flex flex-col gap-2">
                  {data.disadvantages.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-fg-soft">
                      <ChevronRight
                        className="w-3.5 h-3.5 text-status-critical-label mt-0.5 shrink-0"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-surface-1 border border-edge">
              <Info className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2} />
              <div className="flex flex-col gap-2">
                <p className="text-sm text-fg-soft leading-relaxed">
                  Aracınızda hangi şanzımanın kullanıldığından emin değilseniz ruhsat
                  numarası yeterli, ücretsiz kontrol ederiz.
                </p>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" strokeWidth={2.5} />
                  WhatsApp&apos;tan sor
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'arizalar' && (
          <div
            id="tab-panel-arizalar"
            role="tabpanel"
            className="flex flex-col gap-4 animate-fade-in"
          >
            <p className="text-sm text-fg-soft mb-2">
              Aşağıdaki arızalar {data.title} şanzımanlarda en sık bildirilen sorunlardır.
              Erken tespit maliyeti ciddi ölçüde düşürür.
            </p>

            {data.commonFaults.map((fault) => {
              const config = SEVERITY_CONFIG[fault.severity];

              return (
                <div key={fault.name} className={cn('p-5 flex flex-col gap-2', config.classes)}>
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      {config.icon}
                      <h3 className="text-sm font-semibold">{fault.name}</h3>
                    </div>
                    <span
                      className={cn(
                        'text-[11px] font-semibold uppercase tracking-wider',
                        config.badgeClasses
                      )}
                    >
                      {config.label}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed opacity-85 pl-6">{fault.description}</p>
                </div>
              );
            })}

            <div className="status-card status-card-critical mt-2 p-5 flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <AlertTriangle className="status-label-critical w-4 h-4 mt-0.5 shrink-0" strokeWidth={2.5} />
                <div className="flex flex-col gap-1">
                  <span className="status-label-critical text-[11px] font-semibold uppercase tracking-wider">
                    KRITIK
                  </span>
                  <p className="text-sm font-semibold">
                    Yukarıdaki belirtilerden biri aracınızda var mı?
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed pl-6">
                Erken teşhis onarım maliyetini ciddi düşürür. Randevu almadan doğrudan
                gelin ya da önce WhatsApp&apos;tan fotoğraf ve video gönderin.
              </p>
              <div className="flex flex-wrap gap-2 pl-6">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-success text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
                  WhatsApp&apos;tan Yaz
                </a>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-2 border border-edge text-fg text-sm font-semibold hover:bg-surface-1 transition-colors"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cozum' && (
          <div
            id="tab-panel-cozum"
            role="tabpanel"
            className="flex flex-col gap-6 animate-fade-in"
          >
            <div className="bg-surface-1 border border-edge rounded-xl p-6">
              <h3 className="text-base font-semibold text-fg mb-3">
                {BRAND.alternateName}&apos;nda {data.title} Revizyonu
              </h3>
              <p className="text-sm text-fg-soft leading-relaxed mb-4">
                Atölyemizde {data.title.toLocaleLowerCase('tr-TR')} şanzımanlar için tam teşekküllü
                diagnostik sürecini uygularız: önce hata kodlarını okur, ardından mekanik
                kontrol yapar, tahmini hasar raporunu yazılı olarak sunarız.
              </p>
              <ol className="flex flex-col gap-3">
                {[
                  'Ücretsiz ön diagnostik, hata kodu ve semptom analizi',
                  'Şanzıman demontajı ve görsel muayene',
                  'Hasar tespiti ve yazılı fiyat teklifi',
                  'Orijinal veya OEM yedek parça ile onarım',
                  'Test sürüşü ve 6 ay garanti belgesi',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-fg-soft">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/20 text-accent text-[11px] font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <Link
              href={data.serviceHref}
              className="flex items-center justify-between px-5 py-4 rounded-xl bg-surface-1 border border-accent/30 hover:border-accent/60 transition-colors group"
            >
              <div>
                <p className="text-sm font-semibold text-fg">Detaylı Servis Sayfası</p>
                <p className="text-xs text-fg-muted mt-0.5">Fiyatlar, süreç ve sık sorular</p>
              </div>
              <ChevronRight
                className="w-5 h-5 text-accent group-hover:translate-x-0.5 transition-transform"
                strokeWidth={2.5}
              />
            </Link>

            <div className="p-5 rounded-xl bg-accent/[0.08] border border-accent/25 flex flex-col gap-3">
              <p className="text-sm font-semibold text-fg">
                Ücretsiz ön diagnostik için bugün gelin
              </p>
              <p className="text-xs text-fg-soft leading-relaxed">
                Hata kodu okuma ve semptom analizi ücretsiz. Fiyat teklifi yazılı
                verilir, onaylamadan işlem yapılmaz.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-success text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
                  WhatsApp&apos;tan Randevu Al
                </a>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-2 border border-edge text-fg text-sm font-semibold hover:bg-surface-1 transition-colors"
                >
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bakim' && (
          <div
            id="tab-panel-bakim"
            role="tabpanel"
            className="flex flex-col gap-4 animate-fade-in"
          >
            <p className="text-sm text-fg-soft mb-2">
              Önerilen bakım aralıkları. Ağır kullanım koşullarında, şehir içi yoğun trafik,
              çekici veya dağlık arazi gibi senaryolarda aralıkları yüzde 20 kısaltmanızı öneririz.
            </p>

            <div className="overflow-hidden rounded-xl border border-edge">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-2 border-b border-edge">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-fg-soft uppercase tracking-wider">
                      Bakım İşlemi
                    </th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-fg-soft uppercase tracking-wider whitespace-nowrap">
                      Aralık
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.maintenance.map((item, i) => (
                    <tr
                      key={item.task}
                      className={cn(
                        'border-b border-edge last:border-0',
                        i % 2 === 0 ? 'bg-surface-0' : 'bg-surface-1'
                      )}
                    >
                      <td className="px-4 py-3.5 text-fg-soft">{item.task}</td>
                      <td className="px-4 py-3.5 text-right text-accent font-medium whitespace-nowrap">
                        {item.interval}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20 text-sm text-fg-soft">
              <Info className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2} />
              <p>
                Bakım zamanı geçtiyse veya şanzımandan ses ya da titreme geliyorsa aracınızı
                getirmeden önce{' '}
                <a href={PHONE_HREF} className="text-accent font-semibold hover:underline">
                  {PHONE}
                </a>{' '}
                numaralı hattı arayabilirsiniz.
              </p>
            </div>

            <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-surface-1 border border-edge flex-wrap">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-fg">Bakım zamanınızı kontrol edelim</p>
                <p className="text-xs text-fg-soft">
                  Km bilginizi paylaşın, aralığı geçip geçmediğinizi söyleyelim.
                </p>
              </div>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-success text-white text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
                WhatsApp&apos;tan Sor
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
