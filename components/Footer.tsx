import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { BRANDS } from '@/lib/brands';

const PHONE_HREF = 'tel:+905327153751';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const HIZMET_LINKS = [
  { href: '/hizmetler/dsg-sanziman-tamiri/', label: 'DSG Şanzıman Tamiri' },
  { href: '/hizmetler/aisin-sanziman-tamiri/', label: 'Aisin Tam Otomatik' },
  { href: '/hizmetler/eat-sanziman-tamiri/', label: 'EAT6 / EAT8 Servisi' },
  { href: '/hizmetler/zf-sanziman-tamiri/', label: 'ZF Şanzıman Servisi' },
  { href: '/hizmetler/cvt-sanziman-tamiri/', label: 'CVT Şanzıman Servisi' },
  { href: '/hizmetler/dsg-kavrama-degisimi/', label: 'DSG Kavrama Değişimi' },
] as const;

const KURUMSAL_LINKS = [
  { href: '/hakkimizda/', label: 'Hakkımızda' },
  { href: '/hizmetler/', label: 'Hizmetler' },
  { href: '/sanziman-tipleri/', label: 'Şanzıman Rehberi' },
  { href: '/blog/', label: 'Blog' },
  { href: '/iletisim/', label: 'İletişim' },
] as const;


export default function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 pb-24 md:pb-8">
      <div className="rounded-[32px] border border-white/8 bg-[#070B11] p-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="rounded-[28px] border border-white/8 bg-[#0C1219] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#38BDF8]/35 bg-[#38BDF8]/10 text-xs font-semibold text-[#7DD3FC]">
                ES
              </div>
              <div>
                <div className="text-sm font-semibold tracking-wide text-[#F0F4F8]">Eren Servis</div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#64748B]">Otomatik Şanzıman Uzmanı</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#94A3B8]">
              Bostancı&apos;nın otomatik şanzıman odaklı teknik servisi. DSG, Aisin, ZF, CVT ve tam otomatik ailelerde teşhisten teslim anına kadar kontrollü bir servis akışı.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8] px-4 py-2.5 text-sm font-semibold text-[#070B11] transition hover:-translate-y-0.5"
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
                0532 715 37 51
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-[#F0F4F8] transition hover:bg-white/[0.04] hover:border-[#38BDF8]/30"
              >
                <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.5} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[24px] border border-white/8 bg-[#0C1219] p-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">Hizmetlerimiz</div>
              <nav className="mt-4 flex flex-col gap-2.5">
                {HIZMET_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#94A3B8] transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-[#0C1219] p-5 lg:col-span-1">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">Kurumsal</div>
              <nav className="mt-4 flex flex-col gap-2.5">
                {KURUMSAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#94A3B8] transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-6 text-[#64748B] relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 60% 40%, rgba(56,189,248,0.4) 0%, transparent 50%),
                      linear-gradient(rgba(160,200,230,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(160,200,230,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '100% 100%, 20px 20px, 20px 20px',
                  }}
                />
                <div className="relative">
                  <div className="font-medium text-[#94A3B8] mb-1">Adres</div>
                  <div className="mb-3">Bostancı Oto Sanayi Sitesi, Kadıköy / İstanbul</div>
                  <a
                    href="https://maps.google.com/maps?q=Bostanci+Oto+Sanayi+Sitesi+Kadikoy+Istanbul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#38BDF8] hover:text-[#7DD3FC] transition-colors"
                  >
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Google Maps&apos;te Aç
                  </a>
                </div>
              </div>
              <div className="mt-3 text-sm text-[#64748B]">
                <span className="font-medium text-[#94A3B8]">Çalışma Saatleri</span><br />
                Pzt-Cmt: 08:00-18:00 · Pazar: Kapalı
              </div>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-[#0C1219] p-5 sm:col-span-2 lg:col-span-1">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">Araç Markaları</div>
              <nav className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
                {BRANDS.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/arac/${b.slug}/`}
                    className="text-sm text-[#94A3B8] transition hover:text-white"
                  >
                    {b.displayName ?? b.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/6 pt-6 text-center text-sm text-[#475569]">
          <div>&copy; {new Date().getFullYear()} Eren Servis. Tüm hakları saklıdır.</div>
        </div>
      </div>
    </footer>
  );
}
