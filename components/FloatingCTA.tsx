'use client';

import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import { trackWhatsappClick } from '@/lib/analytics';

const WHATSAPP_HREF = 'https://wa.me/905327153751';

const HIDDEN_PATHS = new Set(['/', '/iletisim', '/iletisim/', '/hakkimizda', '/hakkimizda/']);
const HIDDEN_PREFIXES = ['/sanziman-tipleri/'];

export default function FloatingCTA() {
  const pathname = usePathname();

  if (!pathname || HIDDEN_PATHS.has(pathname)) return null;
  if (HIDDEN_PREFIXES.some((prefix) => pathname.startsWith(prefix) && pathname !== prefix)) return null;

  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      data-tracked="true"
      className="fixed bottom-6 right-5 z-50 hidden items-center gap-2.5 rounded-full bg-brass-bright px-5 py-3 font-saira text-sm font-semibold text-graphite-base shadow-lg transition hover:bg-brass md:inline-flex"
      aria-label="WhatsApp ile yazın"
      onClick={() => trackWhatsappClick({ kaynak: 'floating_cta', sayfa: pathname })}
    >
      <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={2.5} />
      WhatsApp&apos;tan Yaz
    </a>
  );
}
