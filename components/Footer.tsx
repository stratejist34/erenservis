import Link from 'next/link';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
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
    <footer className="mt-24 border-t border-iron-deep bg-graphite-base pb-24 md:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12">

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

          {/* Left panel — logo + description + CTAs */}
          <div className="rounded-2xl border border-border-subtle bg-graphite-surface p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brass bg-graphite-elevated font-semibold text-xs text-brass">
                ES
              </div>
              <div>
                <div className="font-saira text-sm font-semibold tracking-wide text-text-primary">Eren Servis</div>
                <div className="font-jetbrains text-[11px] uppercase tracking-[0.24em] text-iron-light">Otomatik Şanzıman Uzmanı</div>
              </div>
            </div>
            <p className="mt-5 font-saira text-sm leading-7 text-text-secondary">
              Bostancı&apos;nın otomatik şanzıman odaklı teknik servisi. DSG, Aisin, ZF, CVT ve tam otomatik ailelerde teşhisten teslim anına kadar kontrollü bir servis akışı.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 rounded-full bg-brass-bright px-4 py-2.5 font-saira text-sm font-semibold text-graphite-base transition hover:bg-brass"
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
                0532 715 37 51
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border-subtle px-4 py-2.5 font-saira text-sm font-medium text-text-secondary transition hover:border-brass hover:text-brass"
              >
                <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.5} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right — 3-column link grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {/* Hizmetlerimiz */}
            <div className="p-5">
              <div className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-iron-light">Hizmetlerimiz</div>
              <nav className="mt-4 flex flex-col gap-2.5">
                {HIZMET_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-saira text-sm text-text-secondary transition-colors hover:text-brass"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Kurumsal + Adres */}
            <div className="p-5">
              <div className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-iron-light">Kurumsal</div>
              <nav className="mt-4 flex flex-col gap-2.5">
                {KURUMSAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-saira text-sm text-text-secondary transition-colors hover:text-brass"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-5 rounded-xl border border-border-subtle bg-graphite-elevated p-4 font-saira text-sm leading-6 text-text-tertiary">
                <div className="mb-1 font-medium text-text-secondary">Adres</div>
                <div className="mb-3">Bostancı Oto Sanayi Sitesi, Kadıköy / İstanbul</div>
                <a
                  href="https://maps.google.com/maps?q=Bostanci+Oto+Sanayi+Sitesi+Kadikoy+Istanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-jetbrains text-xs text-brass transition-colors hover:text-brass-bright"
                >
                  <MapPin className="h-3 w-3" />
                  Google Maps&apos;te Aç
                </a>
              </div>
              <div className="mt-3 font-saira text-sm text-text-tertiary">
                <span className="font-medium text-text-secondary">Çalışma Saatleri</span><br />
                Pzt-Cmt: 08:00–18:00 · Pazar: Kapalı
              </div>
            </div>

            {/* Araç Markaları */}
            <div className="p-5 sm:col-span-2 lg:col-span-1">
              <div className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-iron-light">Araç Markaları</div>
              <nav className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
                {BRANDS.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/arac/${b.slug}/`}
                    className="font-saira text-sm text-text-secondary transition-colors hover:text-brass"
                  >
                    {b.displayName ?? b.name}
                  </Link>
                ))}
              </nav>
            </div>

          </div>
        </div>

        {/* Ticker — desktop only */}
        <div className="mt-10 hidden border-t border-iron-deep pt-5 md:block">
          <p className="text-center font-jetbrains text-[10px] tracking-[0.2em] text-iron">
            EST. 2008 · WORKSHOP_01 · BOSTANCI_OTO_SANAYI · 40.9656°N · 29.1094°E · [ONLINE]
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-iron-deep pt-6 text-center font-saira text-sm text-text-tertiary">
          &copy; {new Date().getFullYear()} Eren Servis. Tüm hakları saklıdır.
        </div>

      </div>
    </footer>
  );
}
