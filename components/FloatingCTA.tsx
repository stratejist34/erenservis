'use client';

import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';

const PHONE_HREF = 'tel:+905327153751';

const HIDDEN_PATHS = ['/', '/iletisim', '/hakkimizda'];

export default function FloatingCTA() {
  const pathname = usePathname();

  if (!pathname || HIDDEN_PATHS.includes(pathname)) return null;

  return (
    <a
      href={PHONE_HREF}
      className="fixed bottom-6 right-5 z-40 hidden items-center gap-2.5 rounded-full bg-brass-bright px-5 py-3 font-saira text-sm font-semibold text-graphite-base shadow-lg transition hover:bg-brass md:inline-flex"
      aria-label="Ücretsiz ön tanı için bizi arayın"
    >
      <Phone className="h-4 w-4 shrink-0" strokeWidth={2.5} />
      Ücretsiz Ön Tanı · Ara
    </a>
  );
}
