'use client';

import { usePathname } from 'next/navigation';
import { Phone, MessageCircle } from 'lucide-react';

const PHONE_HREF = 'tel:+905327153751';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

export default function MobileCtaBar() {
  const pathname = usePathname();
  const isV1 = pathname?.startsWith('/v1');

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex h-16 md:hidden"
      style={{
        borderTop: `1px solid ${isV1 ? 'var(--color-edge-hi)' : 'var(--border-subtle)'}`,
        background: isV1 ? 'rgba(17,18,20,0.96)' : 'var(--bg-secondary)',
        backdropFilter: isV1 ? 'blur(18px)' : undefined,
      }}
    >
      <a
        href={PHONE_HREF}
        className={
          isV1
            ? 'btn-premium flex flex-1 items-center justify-center gap-2 text-sm font-bold'
            : 'btn-premium flex flex-1 items-center justify-center gap-2 text-sm font-semibold text-white'
        }
        aria-label="Bizi Arayın"
      >
        <Phone className="h-4.5 w-4.5" strokeWidth={2.5} />
        <span>Ara</span>
      </a>

      <div
        style={{
          width: '1px',
          background: isV1 ? 'var(--color-edge-hi)' : 'var(--border-subtle)',
        }}
      />

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className={
          isV1
            ? 'flex flex-1 items-center justify-center gap-2 bg-surface-1 text-sm font-semibold text-fg transition-colors hover:text-[var(--signal-alloy)]'
            : 'flex flex-1 items-center justify-center gap-2 bg-success text-sm font-semibold text-white transition-opacity hover:opacity-90'
        }
        aria-label="WhatsApp ile Yazın"
      >
        <MessageCircle className={`h-4.5 w-4.5 ${isV1 ? 'text-accent-soft' : ''}`} strokeWidth={2.5} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
