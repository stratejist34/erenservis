'use client';

import { usePathname } from 'next/navigation';
import { Phone, MessageCircle } from 'lucide-react';
import { trackPhoneCall, trackWhatsappClick } from '@/lib/analytics';

const PHONE_HREF = 'tel:+905327153751';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

export default function MobileCtaBar() {
  const pathname = usePathname() ?? '/';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 border-t border-iron-deep bg-graphite-surface md:hidden">
      <a
        href={PHONE_HREF}
        data-tracked="true"
        className="flex flex-1 items-center justify-center gap-2 bg-brass-bright font-saira text-sm font-semibold text-graphite-base transition hover:bg-brass"
        aria-label="Bizi Arayın"
        onClick={() => trackPhoneCall({ kaynak: 'mobile_bar', sayfa: pathname })}
      >
        <Phone className="h-4 w-4" strokeWidth={2.5} />
        <span>Ara</span>
      </a>

      <div className="w-px bg-iron-deep" />

      <a
        href={WHATSAPP_HREF}
        data-tracked="true"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 font-saira text-sm font-medium text-text-secondary transition hover:text-brass"
        aria-label="WhatsApp ile Yazın"
        onClick={() => trackWhatsappClick({ kaynak: 'mobile_bar', sayfa: pathname })}
      >
        <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
