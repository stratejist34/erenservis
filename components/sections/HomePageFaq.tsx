import Link from 'next/link';
import FaqAccordion from '@/components/sections/FaqAccordion';

const FAQ_ITEMS = [
  {
    question: 'DSG titreme varsa hemen kavrama mı değişir?',
    answer:
      'Hayır. Titreme her zaman doğrudan kavrama değişimi anlamına gelmez. Adaptasyon, mekatronik basınç davranışı ve kullanım geçmişi birlikte okunmadan doğru karar verilmez.',
  },
  {
    question: 'Arıza lambası yandıysa araçla devam edilir mi?',
    answer:
      'Sarı lamba bazı vakalarda kısa mesafede servise gelişe izin verir; ama yanıp sönen uyarı, limp mode veya boşa düşme varsa beklemek yerine kontrol gerekir.',
  },
  {
    question: 'Otomatik şanzıman tamirinde fiyat neden telefonda net verilmez?',
    answer:
      'Aynı belirti farklı arıza hatlarından çıkabilir. Doğru fiyat, ancak hangi hattın sorun ürettiği netleştikten sonra yazılı ve kalem kalem sağlıklı verilir.',
  },
  {
    question: 'DSG, CVT, EDC ve ZF için aynı usta yeterli midir?',
    answer:
      'Her aile aynı karakterde çalışmaz. İyi servis hepsine “aynı arıza” gibi yaklaşmaz; şanzıman tipine göre teşhis sırasını değiştirir.',
  },
  {
    question: 'İkinci el şanzıman mı, tamir mi daha mantıklı?',
    answer:
      'Çoğu vakada kontrollü ve garantili tamir daha güvenlidir. Çıkma şanzımanda geçmiş, kilometre ve iç durum net olmadığı için risk kullanıcıya kalır.',
  },
] as const;

export default function HomePageFaq() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="rounded-[28px] border border-border-subtle bg-graphite-elevated p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <div className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
            Sık Sorulanlar
          </div>
          <h2 className="mt-4 font-saira text-3xl font-semibold tracking-[-0.045em] text-text-primary lg:text-4xl">
            Karar vermeden önce en çok sorulan 5 soru
          </h2>
          <p className="mt-3 font-saira text-base leading-7 text-text-secondary sm:text-lg">
            Kullanıcıların servis aramadan hemen önce takıldığı temel soruları burada kısa
            cevapladık. Daha geniş liste için SSS merkezine geçebilirsiniz.
          </p>
        </div>

        <FaqAccordion items={[...FAQ_ITEMS]} title="" />

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border-hairline bg-graphite-base p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-saira text-lg font-semibold text-text-primary">
              Daha detaylı soru-cevap arıyorsanız, merkez sayfa hazır.
            </p>
            <p className="mt-1 font-saira text-sm leading-6 text-text-secondary">
              DSG, CVT, EDC, Aisin ve ZF ailelerine göre ayrılmış daha geniş soru bankasına
              tek sayfadan ulaşabilirsiniz.
            </p>
          </div>
          <Link
            href="/sss/"
            className="inline-flex items-center justify-center rounded-full bg-brass-bright px-6 py-3 font-saira text-sm font-semibold text-graphite-base transition hover:bg-brass"
          >
            SSS Merkezini Aç
          </Link>
        </div>
      </div>
    </section>
  );
}
