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

// Dropdown'da yalnızca Tier 1 (6 marka): VW, Renault, Ford, Audi, BMW, Fiat
const ARAC_LINKS = getBrandsByTier(1).map((b) => ({
  href: `/arac/${b.slug}/`,
  label: b.displayName ?? b.name,
  sub: getPrimaryTransmission(b)?.displayName ?? '',
}));


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aracMenuOpen, setAracMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-20 mx-auto mb-10 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#070B11]/80 px-4 py-3 backdrop-blur-md sm:px-6">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#38BDF8]/35 bg-[#38BDF8]/10 text-xs font-semibold text-[#7DD3FC]">
          ES
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-sm font-semibold tracking-wide text-[#F0F4F8]">Eren Servis</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#64748B]">Şanzıman Uzmanı</span>
        </div>
      </Link>

      <nav className="hidden items-center gap-0.5 text-sm lg:flex rounded-full border border-white/8 bg-white/[0.02] p-1">
        <Link
          href="/"
          className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-[#94A3B8] transition-all duration-200 hover:bg-white/8 hover:text-white hover:border-white/10"
        >
          Ana Sayfa
        </Link>

        <div className="group relative">
          <button
            type="button"
            className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${aracMenuOpen ? 'bg-white/8 text-white border border-white/10' : 'text-[#94A3B8] hover:bg-white/5 hover:text-white border border-transparent'}`}
            onClick={() => { setAracMenuOpen((o) => !o); }}
            onBlur={(e) => {
              if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                setAracMenuOpen(false);
              }
            }}
          >
            <span className="text-sm font-medium">Araçlar</span>
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${aracMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          <div
            className={`absolute left-0 top-full min-w-[460px] pt-2 transition-all duration-200 ${aracMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 group-hover:visible group-hover:opacity-100'}`}
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#070B11]/95 p-3 shadow-[0_20px_45px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-x-1">
                {ARAC_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setAracMenuOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm text-[#94A3B8] transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-white/8">
                <Link
                  href="/arac/"
                  onClick={() => setAracMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-[#38BDF8] transition hover:bg-white/5"
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
            className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-[#94A3B8] transition-all duration-200 hover:bg-white/8 hover:text-white hover:border-white/10"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a
          href={PHONE_HREF}
          className="hidden items-center gap-2 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8] px-5 py-2.5 text-sm font-semibold text-[#070B11] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_30px_rgba(56,189,248,0.20)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(56,189,248,0.30)] lg:inline-flex"
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          {PHONE}
        </a>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#94A3B8] transition hover:bg-white/5 hover:text-white lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full mt-2 rounded-2xl border border-white/10 bg-[#070B11] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.5)] lg:hidden">
          <nav className="flex flex-col gap-1 text-sm">
            {HOME_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-2.5 text-[#94A3B8] hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-white/8" />
            <div className="px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#475569]">Araçlar</div>
            {ARAC_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-2.5 text-[#94A3B8] hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/arac/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#38BDF8]"
            >
              Tüm Markalar →
            </Link>
            <div className="my-2 h-px bg-white/8" />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-2.5 text-[#94A3B8] hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8] px-4 py-3 text-sm font-semibold text-[#070B11]"
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
