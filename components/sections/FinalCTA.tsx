'use client';
import { Phone, MessageCircle, Clock, FileText, ShieldCheck } from 'lucide-react';
import { SYMPTOMS } from '@/data/symptoms';
import { useSymptom } from '@/contexts/SymptomContext';

const DEFAULT_PHONE = 'tel:+905327153751';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  phone?: string;
}

export default function FinalCTA({
  title,
  subtitle,
  phone = DEFAULT_PHONE,
}: FinalCTAProps) {
  const { selectedId } = useSymptom();
  const selected = SYMPTOMS.find((s) => s.id === selectedId)!;

  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-graphite-elevated px-8 py-14 text-center">
        <h2 className="font-saira text-4xl font-semibold tracking-[-0.045em] text-text-primary sm:text-5xl">
          {title ?? (
            <>
              <span className="text-brass">{selected.shortLabel}</span>
              {' — '}
              {selected.cta.title}
            </>
          )}
        </h2>
        <p className="mx-auto mt-4 max-w-[42ch] font-saira text-lg leading-8 text-text-secondary">
          {subtitle ?? selected.cta.sub}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={phone}
            className="inline-flex items-center gap-2 rounded-full bg-brass-bright px-8 py-4 font-saira text-base font-semibold text-graphite-base transition hover:bg-brass"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Hemen Arayın
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-8 py-4 font-saira text-base font-medium text-text-secondary transition hover:border-brass hover:text-text-primary"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            WhatsApp&apos;tan Yazın
          </a>
        </div>

        {/* Diagnosis — sade, tek bakışta okunur */}
        <p className="mt-5 font-jetbrains text-[11px] text-text-tertiary">
          Seçilen: <span className="text-text-secondary">{selected.shortLabel}</span>
          {' → '}
          <span className="text-brass">{selected.label}</span> ihtimali yüksek
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-jetbrains text-sm text-iron-light">
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
            6 ay garanti
          </span>
        </div>
      </div>
    </section>
  );
}
