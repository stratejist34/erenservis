'use client';

import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';

const PHONE_HREF = 'tel:+905327153751';

const DEFAULT_HIDDEN_PATHS = ['/', '/iletisim', '/hakkimizda'];
const V1_HIDDEN_PATHS = ['/v1', '/v1/'];

export default function FloatingCTA() {
  const pathname = usePathname();
  const isV1 = pathname?.startsWith('/v1');

  if (!pathname) return null;

  if (!isV1 && DEFAULT_HIDDEN_PATHS.includes(pathname)) return null;
  if (isV1 && V1_HIDDEN_PATHS.includes(pathname)) return null;

  return (
    <a
      href={PHONE_HREF}
      className={
        isV1
          ? 'btn-premium fixed bottom-6 right-5 z-40 hidden items-center gap-2.5 rounded-full px-5 py-3 text-sm font-bold md:inline-flex'
          : 'btn-premium fixed bottom-6 right-5 z-40 hidden items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg md:inline-flex'
      }
      aria-label={isV1 ? 'Ücretsiz kontrol için bizi arayın' : 'Arıza tespiti için bizi arayın'}
    >
      <Phone className="h-4 w-4 shrink-0" strokeWidth={2.5} />
      {isV1 ? 'Ücretsiz Kontrol · Ara' : 'Arıza Tespiti · Bizi Ara'}
    </a>
  );
}
