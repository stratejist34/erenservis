import Link from 'next/link';
import { AlertTriangle, Gauge, Wrench } from 'lucide-react';

const RISK_ITEMS = [
  {
    title: 'Silkelemeyi ertelemek',
    body:
      "1'den 2'ye geçişteki silkeleme çoğu zaman yalnız konfor sorunu değildir. Ertelenirse kavrama, mekatronik ve bazen volant aynı zincire girer.",
    label: 'En sık DSG riski',
    icon: Wrench,
  },
  {
    title: 'Her belirtide parça değiştirmek',
    body:
      'Titreme, vuruntu ve uyarı lambası aynı kökten gelmeyebilir. Kavrama ile mekatroniği karıştıran müdahaleler maliyeti küçültmez, büyütür.',
    label: 'Yanlış teşhis riski',
    icon: AlertTriangle,
  },
  {
    title: 'Sarı lambayla uzun süre devam etmek',
    body:
      'Araç yürür durumda olsa bile aktif arıza kodu genelde içeride bir baskı biriktirir. Özellikle DQ200 tarafında beklemek küçük tamiri büyük revizyona çevirebilir.',
    label: 'Bekleme maliyeti',
    icon: Gauge,
  },
] as const;

export default function RiskBlock() {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
      <div className="rounded-[28px] border border-border-subtle bg-graphite-elevated p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <div className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
            Risk Haritası
          </div>
          <h2 className="mt-4 font-saira text-3xl font-semibold tracking-[-0.045em] text-text-primary lg:text-4xl">
            Küçük görünen DSG belirtileri, yanlış adımda hızla pahalılaşır
          </h2>
          <p className="mt-3 font-saira text-base leading-7 text-text-secondary sm:text-lg">
            Anasayfadaki amaç korkutmak değil; hangi belirtinin yalnız kullanım alışkanlığı,
            hangisinin gerçek tamir zincirine dönebileceğini erken ayırt etmek.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {RISK_ITEMS.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border-hairline bg-graphite-surface p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-xl border border-border-hairline bg-graphite-base p-3 text-brass">
                  <item.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <span className="rounded-full border border-border-brass bg-brass/8 px-3 py-1 font-jetbrains text-[10px] font-semibold uppercase tracking-[0.16em] text-brass">
                  {item.label}
                </span>
              </div>

              <h3 className="mt-5 font-saira text-2xl font-semibold tracking-[-0.035em] text-text-primary">
                {item.title}
              </h3>
              <p className="mt-3 font-saira text-sm leading-7 text-text-secondary">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border-hairline bg-graphite-base p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-saira text-lg font-semibold text-text-primary">
              Belirtiyi önce doğru hatta bağlayın.
            </p>
            <p className="mt-1 font-saira text-sm leading-6 text-text-secondary">
              Kavrama mı, mekatronik mi, yoksa yalnız adaptasyon ihtiyacı mı var; doğru karar
              sonraki masrafı belirler.
            </p>
          </div>
          <Link
            href="/rehber/"
            className="inline-flex items-center justify-center rounded-full bg-brass-bright px-6 py-3 font-saira text-sm font-semibold text-graphite-base transition hover:bg-brass"
          >
            Rehberleri Aç
          </Link>
        </div>
      </div>
    </section>
  );
}
