'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { getLiteBrandsByTier } from '@/lib/brands-lite';

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';

const HOME_LINKS = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hizmetler/', label: 'Hizmetler' },
  { href: '/sanziman-tipleri/', label: 'Şanzımanlar' },
  { href: '/hakkimizda/', label: 'Hakkımızda' },
  { href: '/blog/', label: 'Blog' },
  { href: '/iletisim/', label: 'İletişim' },
] as const;

const NAV_LINKS = [
  { href: '/hizmetler/', label: 'Hizmetler' },
  { href: '/sanziman-tipleri/', label: 'Şanzımanlar' },
  { href: '/hakkimizda/', label: 'Hakkımızda' },
  { href: '/blog/', label: 'Blog' },
  { href: '/iletisim/', label: 'İletişim' },
];

const ARAC_LINKS = getLiteBrandsByTier(1).map((b) => ({
  href: `/arac/${b.slug}/`,
  label: b.displayName ?? b.name,
  sub: b.primaryTransmissionLabel,
}));

function isActive(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  if (href === '/') return pathname === '/';
  const normalized = href.endsWith('/') ? href.slice(0, -1) : href;
  return pathname === normalized || pathname.startsWith(`${normalized}/`);
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aracMenuOpen, setAracMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const aracMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!aracMenuOpen) return;
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const node = aracMenuRef.current;
      if (node && !node.contains(event.target as Node)) {
        setAracMenuOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setAracMenuOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [aracMenuOpen]);

  // Pathname değişiminde menüleri kapat — React 19 önerilen pattern: render sırasında
  // önceki değeri karşılaştır, değiştiyse state'i güncelle (useEffect yerine).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setAracMenuOpen(false);
    setMobileMenuOpen(false);
  }

  return (
    <div className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6">
    <header className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border-hairline bg-graphite-base/98 px-4 transition-[padding] duration-300 sm:px-6 ${scrolled ? 'py-1.5' : 'py-3'}`}>
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/erenlogo.webp"
          alt="Eren Otomatik Şanzıman Servisi"
          width={112}
          height={31}
          sizes="112px"
          quality={60}
          className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-[26px]' : 'h-[31px]'}`}
          priority
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden items-center text-sm lg:flex rounded-full border border-border-hairline bg-graphite-surface/40 p-1">
        <Link
          href="/"
          aria-current={isActive(pathname, '/') ? 'page' : undefined}
          className={`rounded-full px-3 py-1.5 font-saira text-sm font-medium transition-colors duration-200 hover:text-brass ${isActive(pathname, '/') ? 'text-brass' : 'text-text-secondary'}`}
        >
          Anasayfa
        </Link>

        {/* Araçlar dropdown */}
        <div ref={aracMenuRef} className="group relative">
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={aracMenuOpen}
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 font-saira text-sm font-medium transition-colors duration-200 ${aracMenuOpen || isActive(pathname, '/arac/') ? 'text-brass' : 'text-text-secondary hover:text-brass'}`}
            onClick={() => setAracMenuOpen((o) => !o)}
          >
            <span>Markalar</span>
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${aracMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          <div
            className={`absolute left-0 top-full min-w-[460px] pt-2 transition-all duration-200 ${aracMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 group-hover:visible group-hover:opacity-100'}`}
          >
            <div className="overflow-hidden border border-border-subtle bg-graphite-base p-3">
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

        {NAV_LINKS.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? 'page' : undefined}
              className={`rounded-full px-3 py-1.5 font-saira text-sm font-medium transition-colors duration-200 hover:text-brass ${active ? 'text-brass' : 'text-text-secondary'}`}
            >
              {link.label}
            </Link>
          );
        })}
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
        <div className="absolute inset-x-0 top-full mt-2 border border-border-subtle bg-graphite-base p-4 lg:hidden">
          <nav className="flex flex-col gap-1 text-sm">
            {HOME_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 font-saira transition-colors hover:bg-graphite-elevated hover:text-text-primary ${active ? 'text-brass' : 'text-text-secondary'}`}
                >
                  {link.label}
                </Link>
              );
            })}
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
    </div>
  );
}
