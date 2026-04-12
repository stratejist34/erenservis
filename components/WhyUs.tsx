import { Shield, Award, Wrench, Clock, Users, ThumbsUp } from 'lucide-react';

const PRIMARY = [
  {
    icon: Award,
    title: '15+ Yıl Deneyim',
    description:
      'Her arızaya aynı reçeteyi yazmıyoruz. Semptomu, kullanım şeklini ve şanzıman platformunu birlikte okuyoruz.',
  },
  {
    icon: Shield,
    title: '2 Yıl İşçilik Garantisi',
    description:
      'Yaptığımız işin arkasında duruyoruz. Süreci sözlü vaatle değil, net garanti çerçevesiyle teslim ediyoruz.',
  },
  {
    icon: Wrench,
    title: 'Orijinal ve OEM Parça',
    description:
      'Ucuz muadil yerine doğru kalite kullanıyoruz. Çünkü şanzımanda küçük hata, büyük masrafa dönüşür.',
  },
] as const;

const SECONDARY = [
  {
    icon: Clock,
    title: 'Hızlı Teslim',
    description: 'Net teşhis çıkan işlerde aracı gereksiz yere günlerce bekletmiyoruz.',
  },
  {
    icon: Users,
    title: 'Uzman Ekip',
    description: 'DSG, CVT ve tam otomatik platformlarda odaklı çalışan teknisyen kadrosu.',
  },
  {
    icon: ThumbsUp,
    title: 'Şeffaf Fiyat',
    description: 'İşleme başlamadan önce kapsam ve maliyet netleşir. Sürpriz çıkarmaz.',
  },
] as const;

export default function WhyUs() {
  return (
    <section className="py-24 bg-surface-2" aria-labelledby="neden-baslik">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="section-tag mb-4">Neden Eren Servis</p>
          <h2 id="neden-baslik" className="text-fg mb-4">
            Bu İş Güven İster.
          </h2>
          <p className="text-fg-soft max-w-2xl mx-auto leading-relaxed">
            Şanzıman tamiri sadece parça değiştirmek değildir. Doğru teşhis, doğru müdahale
            ve temiz işçilik gerekir. Süreci bu yüzden farklı yönetiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          {PRIMARY.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="card-surface p-7 flex flex-col gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-surface-2 shrink-0">
                  <Icon className="w-6 h-6 text-fg-soft" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-fg mb-2">{item.title}</h3>
                  <p className="text-sm text-fg-soft leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SECONDARY.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="card-surface p-5 flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-2 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-fg-soft" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-fg mb-1">{item.title}</h3>
                  <p className="text-xs text-fg-soft leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
