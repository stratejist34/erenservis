import { HelpCircle, ChevronDown } from 'lucide-react';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

export default function TransmissionFaq({ slug }: { slug: string }) {
  const faqs = TRANSMISSION_FAQS[slug];
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="pb-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-5">
          <HelpCircle className="w-4 h-4 text-accent" strokeWidth={2} />
          <h2 className="text-base font-semibold text-fg">Sık Sorulan Sorular</h2>
        </div>
        <div className="flex flex-col divide-y divide-edge rounded-xl border border-edge overflow-hidden">
          {faqs.map((item, i) => (
            <details key={i} className="group bg-surface-1">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none hover:bg-surface-2 transition-colors">
                <span className="text-sm font-semibold text-fg">{item.q}</span>
                <ChevronDown
                  className="w-4 h-4 text-fg-soft shrink-0 transition-transform group-open:rotate-180"
                  strokeWidth={2}
                />
              </summary>
              <div className="px-5 pb-5 pt-1">
                <p className="text-sm text-fg-soft leading-relaxed">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
