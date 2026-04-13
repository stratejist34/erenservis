'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { getBrandsByTier, getPrimaryTransmission } from '@/lib/brands';

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';

const HOME_LINKS = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hizmetler/', label: 'Hizmetler' },
  { href: '/sanziman-tipleri/', label: 'Şanzıman Rehberi' },
  { href: '/hakkimizda/', label: 'Hakkımızda' },
  { href: '/blog/', label: 'Blog' },
  { href: '/iletisim/', label: 'İletişim' },
] as const;

const NAV_LINKS = [
  { href: '/hizmetler/', label: 'Hizmetler' },
  { href: '/sanziman-tipleri/', label: 'Şanzıman Rehberi' },
  { href: '/hakkimizda/', label: 'Hakkımızda' },
  { href: '/blog/', label: 'Blog' },
  { href: '/iletisim/', label: 'İletişim' },
];

const ARAC_LINKS = getBrandsByTier(1).map((b) => ({
  href: `/arac/${b.slug}/`,
  label: b.displayName ?? b.name,
  sub: getPrimaryTransmission(b)?.displayName ?? '',
}));

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aracMenuOpen, setAracMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-20 mx-auto mb-10 flex max-w-7xl items-center justify-between rounded-full border border-border-hairline bg-graphite-base/90 px-4 py-3 backdrop-blur-sm sm:px-6">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brass bg-graphite-elevated font-semibold text-xs text-brass">
          ES
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-saira text-sm font-semibold tracking-wide text-text-primary">Eren Servis</span>
          <span className="font-jetbrains text-[11px] uppercase tracking-[0.24em] text-iron-light">Şanzıman Uzmani</span>
        </div>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-0.5 text-sm lg:flex rounded-full border border-border-hairline bg-graphite-surface/40 p-1">
        <Link
          href="/"
          className="rounded-full px-4 py-2 font-saira text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-brass"
        >
          Ana Sayfa
        </Link>

        {/* Araçlar dropdown */}
        <div className="group relative">
          <button
            type="button"
            className={`inline-flex items-center gap-1 rounded-full px-4 py-2 font-saira text-sm font-medium transition-colors duration-200 ${aracMenuOpen ? 'text-brass' : 'text-text-secondary hover:text-brass'}`}
            onClick={() => setAracMenuOpen((o) => !o)}
            onBlur={(e) => {
              if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                setAracMenuOpen(false);
              }
            }}
          >
            <span>Araçlar</span>
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${aracMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          <div
            className={`absolute left-0 top-full min-w-[460px] pt-2 transition-all duration-200 ${aracMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 group-hover:visible group-hover:opacity-100'}`}
          >
            <div className="overflow-hidden border border-border-hairline bg-graphite-base p-3 shadow-[0_20px_45px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-2 gap-x-1">
                {ARAC_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setAracMenuOpen(false)}
                    className="px-3 py-2 font-saira text-sm text-text-secondary transition-colors hover:bg-graphite-elevated hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-2 border-t border-iron-deep pt-2">
                <Link
                  href="/arac/"
                  onClick={() => setAracMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 font-saira text-sm font-medium text-brass transition-colors hover:bg-graphite-elevated"
                >
                  <span>Tüm Markalar</span>
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-2 font-saira text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-brass"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop phone CTA + hamburger */}
      <div className="flex items-center gap-3">
        <a
          href={PHONE_HREF}
          className="hidden items-center gap-2 rounded-full bg-brass-bright px-5 py-2.5 font-saira text-sm font-semibold uppercase tracking-wide text-graphite-base transition-colors duration-200 hover:bg-brass lg:inline-flex"
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          {PHONE}
        </a>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-graphite-elevated hover:text-text-primary lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full mt-2 border border-border-hairline bg-graphite-base p-4 shadow-[0_20px_45px_rgba(0,0,0,0.5)] lg:hidden">
          <nav className="flex flex-col gap-1 text-sm">
            {HOME_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 font-saira text-text-secondary transition-colors hover:bg-graphite-elevated hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-iron-deep" />
            <div className="px-4 py-1 font-jetbrains text-[10px] uppercase tracking-[0.18em] text-iron-light">Araçlar</div>
            {ARAC_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 font-saira text-text-secondary transition-colors hover:bg-graphite-elevated hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/arac/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 font-saira text-sm font-medium text-brass"
            >
              Tüm Markalar →
            </Link>
            <div className="my-2 h-px bg-iron-deep" />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 font-saira text-text-secondary transition-colors hover:bg-graphite-elevated hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-3 flex items-center justify-center gap-2 bg-brass-bright px-4 py-3 font-saira text-sm font-semibold uppercase tracking-wide text-graphite-base"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
