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
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#64748B]">Hizmetler</div>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#F0F4F8] lg:text-4xl">
        DSG, CVT ve otomatik şanzıman tamiri
      </h2>
      <p className="mt-3 text-sm text-[#64748B] max-w-xl">
        15+ yıl saha tecrübesiyle Volkswagen Grubu, Toyota, Peugeot ve daha fazlası.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <Link
          href={featured.href}
          className="group relative overflow-hidden rounded-[30px] border border-[#38BDF8]/20 bg-[#0C1219] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/35"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 opacity-[0.35] transition-opacity duration-500 group-hover:opacity-[0.50]"
            style={{
              backgroundImage: 'url(/images/mechanic-close.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              filter: 'blur(4px)',
              maskImage: 'radial-gradient(ellipse at 80% 80%, black 30%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 80% 80%, black 30%, transparent 75%)',
            }}
          />
          <div className="inline-flex rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7DD3FC]">
            Ana Uzmanlık
          </div>

          <div className="mt-5 flex items-start justify-between gap-6">
            <div>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[#F0F4F8] lg:text-4xl">
                DSG Şanzıman
              </h3>
              <div className="mt-1.5 text-sm text-[#64748B]">VW / Audi / Skoda / Seat · DQ200 / DQ250 / DQ381</div>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#38BDF8]/20 bg-[#38BDF8]/10 text-[#38BDF8]">
              <featured.icon className="h-6 w-6" strokeWidth={1.9} />
            </div>
          </div>

          <p className="mt-6 max-w-[58ch] text-base leading-[1.85] text-[#94A3B8]">
            {featured.body}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {featured.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-[#38BDF8]/18 bg-[#38BDF8]/6 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7DD3FC]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3.5">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">Çıktı</div>
              <div className="mt-0.5 text-sm text-[#94A3B8]">{featured.note}</div>
            </div>
            <span className="text-lg text-[#38BDF8] transition-transform group-hover:translate-x-1">&rarr;</span>
          </div>
        </Link>

        <div className="grid gap-4">
          {others.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-[24px] border border-white/8 bg-[#0C1219] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/20"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#F0F4F8] lg:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#94A3B8]">{card.body}</p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#38BDF8]/20 bg-[#38BDF8]/10 text-[#38BDF8]">
                  <card.icon className="h-5 w-5" strokeWidth={1.9} />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/8 bg-white/[0.02] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#64748B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-[#38BDF8] transition-transform group-hover:translate-x-1">&rarr;</span>
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[#475569]">{card.note}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#64748B]">
        <span className="font-semibold text-[#38BDF8]">15+ Yıl</span>
        <span className="text-[#475569]">·</span>
        <span className="font-semibold text-[#38BDF8]">5.000+ İş</span>
        <span className="text-[#475569]">·</span>
        <span className="font-semibold text-[#38BDF8]">Aisin / DSG / CVT / EDC</span>
      </div>
    </section>
  );
}
