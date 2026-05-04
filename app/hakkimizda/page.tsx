import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhyUs from '@/components/WhyUs';
import { BRAND } from '@/lib/brand';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: `Önder Usta ve ${BRAND.primaryName} | Hakkımızda`,
  description:
    `${BRAND.primaryName} içinde Önder Usta'nın teşhis yaklaşımını, DSG uzmanlığını ve otomatik şanzıman tecrübesini yakından tanıyın.`,
  alternates: {
    canonical: 'https://www.erenservis.net/hakkimizda/',
  },
  openGraph: {
    title: `Önder Usta ve ${BRAND.primaryName} | Hakkımızda`,
    description:
      "Bostancı'da DSG, CVT, EDC, ZF ve tam otomatik şanzımanlarda doğru teşhis yaklaşımıyla çalışan uzman servis ekibini tanıyın.",
    url: 'https://www.erenservis.net/hakkimizda/',
    siteName: BRAND.primaryName,
    locale: 'tr_TR',
    type: 'website',
  },
};

const EXPERTISE_AREAS = [
  'DSG mekatronik, kavrama ve adaptasyon ayrımı',
  'DQ200, DQ250, DQ381 ve S-Tronic davranış analizi',
  'CVT kayış, basınç ve valf gövdesi teşhisi',
  'EDC, PowerShift, Aisin, EAT ve ZF kutu tecrübesi',
];

const APPROACH_STEPS = [
  'Belirtiyi dinleriz; sesi değil, sistem davranışını okuruz.',
  'Önce kavrama mı mekatronik mi, yağ mı valf gövdesi mi ayrımını netleştiririz.',
  'Tanı olmadan parça değiştirmeyiz; yazılı teklif olmadan işlem başlatmayız.',
  'Aracı en pahalı işe değil, en doğru müdahaleye götürürüz.',
];

const RELATED_LINKS = [
  { href: '/hizmetler/dsg-sanziman-tamiri/', label: 'DSG Şanzıman Tamiri' },
  { href: '/rehber/dsg-mekatronik-ariza-belirtileri/', label: 'DSG Mekatronik Arıza Belirtileri' },
  { href: '/blog/dq200-kavrama-rehberi/', label: 'DQ200 Kavrama Rehberi' },
  { href: '/blog/otomatik-sanziman-ustasi-secimi/', label: 'Otomatik Şanzıman Ustası Seçimi' },
];

export default function HakkimizdaPage() {
  return (
    <main>
      <section className="relative overflow-hidden pt-28 pb-20 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/part2/Screenshot_102.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(6px) saturate(0.55) brightness(0.5)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0.68) 0%, rgba(10,10,10,0.88) 100%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              Kişi Otoritesi
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-4">
            Önder Usta ve {BRAND.primaryName}
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Otomatik şanzıman arızasında asıl farkı çoğu zaman parça değil, doğru teşhis yaratır.
            Önder Usta&apos;nın yaklaşımı; özellikle DSG tarafında kavrama, mekatronik, adaptasyon ve
            kullanım hatasını birbirine karıştırmadan doğru hattı bulmaya dayanır.
          </p>
        </div>
      </section>

      <section className="py-16 bg-graphite-base">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <h2 className="font-saira text-3xl font-semibold tracking-[-0.03em] text-text-primary mb-5">
                Bu sayfanın konusu yalnız “biz kimiz?” değil, “bu işi nasıl okuyoruz?”
              </h2>
              <div className="space-y-4 font-saira text-text-secondary leading-relaxed">
                <p>
                  {BRAND.primaryName}, Bostancı&apos;da otomatik şanzıman tamiri yapan bir servis olarak
                  yalnız geniş kapsama değil, doğru teşhis disiplinine yatırım yapar. Bu yaklaşımın
                  sahadaki karşılığı ise Önder Usta&apos;nın yıllar içinde oturttuğu okuma biçimidir.
                </p>
                <p>
                  Atölyede en sık görülen hata, her sarsıntıyı kavramaya, her lambayı mekatroniğe,
                  her gecikmeyi komple revizyona bağlamaktır. Oysa aynı belirti, farklı şanzıman
                  ailesinde bambaşka sebeplerden doğabilir. Önder Usta&apos;nın önceliği, kullanıcıyı
                  yanlış tamir kararından koruyacak teşhis sırasını kurmaktır.
                </p>
                <p>
                  Özellikle DSG tarafında hedefimiz nettir: DQ200, DQ250, DQ381 ve S-Tronic
                  kutularda hiçbir semptomu ezbere yorumlamamak. Önce sistemin neyi yanlış yönettiğini
                  bulur, sonra en doğru müdahaleyi seçeriz.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-border-hairline bg-graphite-surface">
              <div className="relative h-72">
                <Image
                  src="/images/part2/Screenshot_107.webp"
                  alt="Önder Usta ve Eren Otomatik Şanzıman Servisi ekibi araç altında otomatik şanzıman incelemesi yapıyor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>
              <div className="p-5">
                <div className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass mb-2">
                  Uzmanlık Odağı
                </div>
                <p className="font-saira text-sm leading-relaxed text-text-secondary">
                  Önder Usta&apos;nın odak noktası, gereksiz parça değişimini önleyecek doğru teşhis
                  akışını kurmaktır. Bu yüzden kullanıcıya önce “hangi hattın gerçekten sorun ürettiği”
                  anlatılır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-graphite-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border-hairline bg-graphite-base p-6">
              <h2 className="font-saira text-2xl font-semibold text-text-primary mb-5">
                Önder Usta hangi alanlarda öne çıkar?
              </h2>
              <ul className="space-y-3">
                {EXPERTISE_AREAS.map((item) => (
                  <li
                    key={item}
                    className="font-saira text-text-secondary leading-relaxed border-l-2 border-border-brass pl-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border-hairline bg-graphite-base p-6">
              <h2 className="font-saira text-2xl font-semibold text-text-primary mb-5">
                Teşhis yaklaşımımız nasıl çalışır?
              </h2>
              <ol className="space-y-3">
                {APPROACH_STEPS.map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-brass bg-brass/10 font-jetbrains text-xs font-semibold text-brass">
                      {index + 1}
                    </span>
                    <span className="font-saira text-text-secondary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-graphite-base">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-border-hairline bg-graphite-surface p-8">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-4">
              Neden bu yaklaşım önemli?
            </h2>
            <div className="space-y-4 font-saira text-text-secondary leading-relaxed">
              <p>
                Şanzıman arızalarında kullanıcıların en büyük korkusu genelde aynıdır: “Bana gereksiz iş
                çıkar mı?” Bu kaygı haklıdır. Çünkü özellikle DSG, EDC ve PowerShift gibi çift
                kavramalı kutularda kavrama ile mekatronik birbirine kolay karıştırılır.
              </p>
              <p>
                Önder Usta&apos;nın bu noktadaki rolü, pahalı parçaya değil önce doğru teşhis hattına
                odaklanmaktır. Erken dönemde doğru ayrım yapılırsa kullanıcı çoğu zaman büyümüş bir
                fatura yerine daha kontrollü bir müdahaleyle çıkar.
              </p>
              <p>
                Bu yüzden {BRAND.primaryName} içinde iyi usta tanımı sadece arızayı gideren kişi
                değildir; müşterinin cebini, zamanını ve güvenini koruyan kişidir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-graphite-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
            Buradan sonra hangi sayfaya gitmelisiniz?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {RELATED_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-border-hairline bg-graphite-base px-5 py-4 font-saira text-text-secondary transition-colors hover:border-border-brass hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
    </main>
  );
}
