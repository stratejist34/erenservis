import Link from 'next/link';
import { Gauge, Settings, Wrench } from 'lucide-react';

const SERVICES = [
  {
    title: 'DSG & S-Tronic Şanzıman',
    body: 'DQ200, DQ250 ve DQ381 modellerinde en sık görülen üç arıza: kavrama aşınması, mekatronik kart hatası ve basınç tüpü çatlaması. Teşhis ücretsiz, onarım garantili.',
    tags: ['DQ200', 'DQ250', 'DQ381', 'DQ500'],
    note: 'Volkswagen Grubu araçlarında birincil uzman',
    href: '/hizmetler/dsg-sanziman-tamiri/',
    icon: Wrench,
  },
  {
    title: 'Aisin / EAT Tam Otomatik',
    body: 'Peugeot, Citroën, Opel ve Toyota araçlarında kullanılan EAT6, EAT8 ve Aisin şanzımanlarda valf gövdesi revizyonu ve tork konvertörü tamiri.',
    tags: ['Aisin', 'EAT6', 'EAT8', 'AT6'],
    note: 'En çok servise gelen tam otomatik ailesi',
    href: '/hizmetler/aisin-sanziman-tamiri/',
    icon: Settings,
  },
  {
    title: 'CVT / EDC / DCT Tamiri',
    body: 'Nissan ve Toyota CVT, Renault EDC, Ford PowerShift arızalarında teşhis ve onarım. Her şanzıman tipine özgü hata okuması, aynı gün sonuç.',
    tags: ['CVT', 'EDC', 'DCT', 'PowerShift'],
    note: 'Marka fark etmez, sorun çözülür',
    href: '/hizmetler/cvt-sanziman-tamiri/',
    icon: Gauge,
  },
] as const;

export default function ServicesSection() {
  const featured = SERVICES[0];
  const others = SERVICES.slice(1);

  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.22em] text-iron-light">Hizmetler</div>
      <h2 className="mt-4 font-saira text-3xl font-semibold tracking-[-0.04em] text-text-primary lg:text-4xl">
        DSG, CVT ve otomatik şanzıman tamiri
      </h2>
      <p className="mt-3 font-saira text-sm text-text-secondary max-w-xl">
        15+ yıl saha tecrübesiyle Volkswagen Grubu, Toyota, Peugeot ve daha fazlası.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <Link
          href={featured.href}
          className="group relative overflow-hidden rounded-2xl border border-border-hairline bg-graphite-elevated p-7 transition-all duration-300 hover:border-border-brass"
        >
          <div className="inline-flex rounded-full border border-border-brass bg-brass/8 px-3 py-1 font-jetbrains text-[10px] font-semibold uppercase tracking-[0.18em] text-brass">
            Ana Uzmanlık
          </div>

          <div className="mt-5 flex items-start justify-between gap-6">
            <div>
              <h3 className="font-saira text-3xl font-semibold tracking-[-0.04em] text-text-primary lg:text-4xl">
                DSG Şanzıman
              </h3>
              <div className="mt-1.5 font-jetbrains text-xs text-iron-light">VW / Audi / Skoda / Seat · DQ200 / DQ250 / DQ381</div>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-hairline bg-graphite-surface text-iron-light">
              <featured.icon className="h-6 w-6" strokeWidth={1.9} />
            </div>
          </div>

          <p className="mt-6 max-w-[58ch] font-saira text-base leading-[1.85] text-text-secondary">
            {featured.body}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {featured.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border-brass bg-brass/8 px-3 py-1.5 font-jetbrains text-[10px] font-semibold uppercase tracking-[0.16em] text-brass"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between rounded-xl border border-border-hairline bg-graphite-surface px-4 py-3.5">
            <div className="font-saira text-sm text-text-secondary">{featured.note}</div>
            <span className="text-lg text-brass transition-transform group-hover:translate-x-1">&rarr;</span>
          </div>
        </Link>

        <div className="grid gap-4">
          {others.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-xl border border-border-hairline bg-graphite-elevated p-5 transition-all duration-300 hover:border-border-brass"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-saira text-xl font-semibold tracking-[-0.03em] text-text-primary lg:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-saira text-sm leading-6 text-text-secondary">{card.body}</p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-hairline bg-graphite-surface text-iron-light">
                  <card.icon className="h-5 w-5" strokeWidth={1.9} />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border-hairline bg-graphite-surface px-2 py-1 font-jetbrains text-[10px] font-semibold uppercase tracking-[0.14em] text-iron-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-saira text-sm text-brass transition-transform group-hover:translate-x-1">&rarr;</span>
              </div>
              <div className="mt-3 font-jetbrains text-[11px] uppercase tracking-[0.16em] text-text-tertiary">{card.note}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 font-saira text-sm text-text-secondary">
        <span className="font-semibold text-brass">15+ Yıl</span>
        <span className="text-text-tertiary">·</span>
        <span className="font-semibold text-brass">5.000+ İş</span>
        <span className="text-text-tertiary">·</span>
        <span className="font-semibold text-brass">Aisin / DSG / CVT / EDC</span>
      </div>
    </section>
  );
}
