import Link from 'next/link';
import { BadgeAlert, CircleCheckBig, ScanSearch } from 'lucide-react';

const WRONG_DECISIONS = [
  {
    wrong: '“Önce parçayı değiştirelim, sonra bakarız” yaklaşımı',
    right: 'Önce arıza hattı ayrılır: kavrama mı, mekatronik mi, yoksa yalnız adaptasyon mu?',
  },
  {
    wrong: 'Sadece en düşük fiyata göre servis seçmek',
    right: 'Yazılı teklif, test süreci ve parça kapsamı net olmayan düşük fiyat genelde büyüyen fatura demektir.',
  },
  {
    wrong: 'Adaptasyonsuz teslim edilen çift kavrama tamirleri',
    right: 'DSG, EDC ve PowerShift tarafında adaptasyon ve yol testi yapılmadan iş bitmiş sayılmaz.',
  },
] as const;

const GREEN_FLAGS = [
  'Bilgisayarlı teşhis sonucu sizinle paylaşılır',
  'İşlem başlamadan önce kapsam yazılı verilir',
  'Tamir sonrası adaptasyon ve test sürüşü standarttır',
] as const;

export default function WrongDecisionBlock() {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-border-subtle bg-graphite-elevated p-6 sm:p-8">
          <div className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
            Yanlış Karar Filtresi
          </div>
          <h2 className="mt-4 font-saira text-3xl font-semibold tracking-[-0.045em] text-text-primary lg:text-4xl">
            Şanzıman arızasında masrafı çoğu zaman arıza değil, yanlış servis kararı büyütür
          </h2>
          <p className="mt-3 max-w-2xl font-saira text-base leading-7 text-text-secondary sm:text-lg">
            Aynı belirti için iki farklı yol vardır: ezbere parça değişen yol ve önce teşhis
            eden yol. Aradaki fark, genelde hem bütçede hem sonuç kalitesinde ortaya çıkar.
          </p>

          <div className="mt-8 space-y-4">
            {WRONG_DECISIONS.map((item) => (
              <article
                key={item.wrong}
                className="rounded-2xl border border-border-hairline bg-graphite-surface p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-xl border border-border-hairline bg-graphite-base p-2.5 text-rose-300">
                    <BadgeAlert className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-saira text-lg font-semibold text-text-primary">
                      {item.wrong}
                    </p>
                    <p className="mt-2 font-saira text-sm leading-7 text-text-secondary">
                      {item.right}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-border-hairline bg-graphite-surface p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-border-brass bg-brass/10 p-3 text-brass">
              <ScanSearch className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <p className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">
                Doğru Yol
              </p>
              <h3 className="mt-1 font-saira text-2xl font-semibold tracking-[-0.035em] text-text-primary">
                İyi servis ne yapar?
              </h3>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {GREEN_FLAGS.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border-hairline bg-graphite-base p-4"
              >
                <div className="mt-0.5 text-brass">
                  <CircleCheckBig className="h-4 w-4" strokeWidth={2.2} />
                </div>
                <p className="font-saira text-sm leading-7 text-text-secondary">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-border-hairline bg-graphite-base p-5">
            <p className="font-saira text-lg font-semibold text-text-primary">
              Önce doğru ustayı seçin, sonra doğru parçayı.
            </p>
            <p className="mt-2 font-saira text-sm leading-7 text-text-secondary">
              Ustanın ilk cümlesi “önce sökelim” değil, “önce belirtinin hattını ayıralım”
              olmalı. Bu fark özellikle DSG ve diğer çift kavrama ailelerinde kritik.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/blog/otomatik-sanziman-ustasi-secimi/"
                className="inline-flex items-center justify-center rounded-full bg-brass-bright px-5 py-3 font-saira text-sm font-semibold text-graphite-base transition hover:bg-brass"
              >
                Usta Seçimi Rehberi
              </Link>
              <Link
                href="/sss/"
                className="inline-flex items-center justify-center rounded-full border border-border-subtle px-5 py-3 font-saira text-sm font-medium text-text-secondary transition hover:border-brass hover:text-text-primary"
              >
                SSS Merkezi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
