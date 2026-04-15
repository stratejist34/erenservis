'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPhoneCall, trackWhatsappClick } from '@/lib/analytics';

export default function GlobalClickTracker() {
  const pathname = usePathname() ?? '/';

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');
      if (!anchor) return;
      // Already tracked individually (Hero, MobileCtaBar, FloatingCTA)
      if (anchor.dataset.tracked === 'true') return;

      const href = anchor.getAttribute('href') ?? '';
      const kaynak = anchor.dataset.kaynak ?? 'sayfa_cta';

      if (href.startsWith('tel:')) {
        trackPhoneCall({ kaynak, sayfa: pathname });
      } else if (href.includes('wa.me')) {
        let mesaj = '';
        try {
          mesaj = decodeURIComponent(href.split('?text=')[1] ?? '').slice(0, 80);
        } catch {
          // malformed URL — skip mesaj
        }
        trackWhatsappClick({ kaynak, sayfa: pathname, mesajOnizleme: mesaj });
      }
    };

    document.addEventListener('click', handler, true); // capture phase
    return () => document.removeEventListener('click', handler, true);
  }, [pathname]);

  return null;
}
