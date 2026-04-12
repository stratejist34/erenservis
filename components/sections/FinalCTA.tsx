import { Phone, MessageCircle, Clock, FileText, ShieldCheck } from 'lucide-react';

const PHONE_HREF = 'tel:+905327153751';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

export default function FinalCTA() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0C1219] px-8 py-14 text-center"
        style={{
          boxShadow: '0 0 80px rgba(56,189,248,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,189,248,0.06) 0%, transparent 60%), #0C1219',
        }}
      >
        <h2 className="text-4xl font-semibold tracking-[-0.045em] text-[#F0F4F8] sm:text-5xl">
          Sorun büyümeden{' '}
          <span className="text-[#38BDF8]">kontrol ettirin.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[42ch] text-lg leading-8 text-[#94A3B8]">
          30 dakikada net teşhis. Ücretsiz.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-2xl bg-[#38BDF8] px-8 py-4 text-base font-semibold text-[#070B11] transition hover:-translate-y-0.5"
            style={{
              boxShadow: '0 10px 40px rgba(36,220,255,0.30), inset 0 1px 0 rgba(255,255,255,0.15)',
            }}
          >
            <Phone className="h-4.5 w-4.5" strokeWidth={2.5} />
            Hemen Arayın — Ücretsiz Ön Teşhis
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-4 text-base font-medium text-[#F0F4F8] transition hover:bg-white/[0.04] hover:border-[#38BDF8]/30"
          >
            <MessageCircle className="h-4.5 w-4.5" strokeWidth={2} />
            WhatsApp&apos;tan Yazın
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[#64748B]">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" strokeWidth={2} />
            Aynı gün inceleme
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5" strokeWidth={2} />
            Yazılı teklif
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2} />
            2 yıl garanti
          </span>
        </div>
      </div>
    </section>
  );
}
