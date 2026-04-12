import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Ahmet K.',
    vehicle: 'Volkswagen Passat 2019',
    rating: 5,
    text: 'DSG mekatronik arızası vardı. Başka yer 35 bin TL istedi, burada 12 bin TL\'ye halledildi. 2 aydır sorunsuz kullanıyorum.',
  },
  {
    name: 'Murat D.',
    vehicle: 'Audi A3 2020',
    rating: 5,
    text: 'Vuruntu sorunu için geldim, doğru teşhis koydular. Kavrama balata seti değişti, şimdi yepyeni gibi.',
  },
  {
    name: 'Selin T.',
    vehicle: 'Seat Leon 2021',
    rating: 5,
    text: 'Önceki serviste 3 kez geri döndüm, sorunu çözemediler. Burada ilk seferde düzeldi. Açıklama da netti.',
  },
] as const;

export default function ReviewsSection() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#64748B]">Müşteri Yorumları</div>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] lg:text-4xl text-[#F0F4F8]">
        Bizden Hizmet Alanların Yorumları
      </h2>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-[#64748B]">
        <span className="font-semibold text-[#38BDF8]">4.6/5 Google</span>
        <span className="text-[#475569]">·</span>
        <span className="font-semibold text-[#38BDF8]">34 Değerlendirme</span>
        <span className="text-[#475569]">·</span>
        <span className="font-semibold text-[#38BDF8]">1.500+ Onarım</span>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {REVIEWS.map((review) => (
          <div
            key={review.name}
            className="group rounded-[24px] border border-white/8 bg-[#0C1219] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/20"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-[#38BDF8]"
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>

            <p className="mt-4 text-sm leading-[1.75] text-[#94A3B8]">
              &ldquo;{review.text}&rdquo;
            </p>

            <div className="mt-4 flex items-center gap-3 border-t border-white/6 pt-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#38BDF8]/10 text-xs font-semibold text-[#38BDF8]">
                {review.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-medium text-[#F0F4F8]">{review.name}</div>
                <div className="text-xs text-[#64748B]">{review.vehicle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
