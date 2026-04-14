import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, Gauge, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Şanzıman Bakımı ve Kontrolü | Eren Servis Bostancı',
  description:
    'Otomatik şanzıman yağı değişimi, filtre temizliği ve bilgisayar diagnostik. Bostancı\'da erken arıza tespiti ve şanzıman koruma bakımı.',
  keywords: [
    'şanzıman yağı değişimi',
    'otomatik şanzıman bakımı',
    'şanzıman filtre değişimi',
    'şanzıman diagnostik',
    'dsg yağ değişimi bostancı',
    'şanzıman periyodik bakım',
  ],
  alternates: {
    canonical: 'https://erenservis.net/hizmetler/sanziman-bakimi/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const BAKIM_PAKETLERI = [
  {
    baslik: 'Temel Bakım',
    icerik: [
      'Şanzıman yağı boşaltma ve dolum',
      'Yağ filtresi değişimi (uygulanabilen modellerde)',
      'Yağ kanalı temizliği',
      'Kontrol testi',
    ],
    not: 'CVT, DSG ve konvansiyonel otomatik şanzımanlar için',
  },
  {
    baslik: 'Kapsamlı Bakım + Tanı',
    icerik: [
      'Temel bakım dahil tüm işlemler',
      'OBD elektronik tanı ve hata kodu tarama',
      'Şanzıman veri akışı analizi',
      'Valf gövdesi solenoid testi',
      'Erken arıza tespiti raporu',
    ],
    not: 'Önerilen — mevcut durumu netleştirir, olası arızayı erken yakalar',
  },
  {
    baslik: 'DSG / CVT Yağ Değişimi',
    icerik: [
      'Marka spesifikasyonuna uygun yağ seçimi',
      'DSG veya CVT özel boşaltma ve dolum',
      'Yağ miktarı ve kanalı kontrolü',
      'TCU adaptasyon sıfırlaması',
    ],
    not: 'DSG: her 60.000 km · CVT: her 40.000 km önerilir',
  },
];

const NEDEN_BAKIM = [
  { baslik: 'Yüksek işçilik maliyetini önler', aciklama: 'Şanzıman revizyonu, bakım maliyetinin 10–15 katıdır. Düzenli bakım bunu geciktirir.' },
  { baslik: 'Garanti kapsamını korur', aciklama: 'Servis kayıtları, ikinci el satışta ve garanti ihtilaflarında önemlidir.' },
  { baslik: 'Erken belirti yakalanır', aciklama: 'Elektronik tanı, sürücünün henüz fark etmediği arıza kodlarını görünür kılar.' },
  { baslik: 'Yakıt verimliliğini artırır', aciklama: 'Temiz ve doğru viskozitede yağ, şanzıman iç sürtünmesini azaltır.' },
];

export default function SanzımanBakımıPage() {
  return (
    <main>

        {/* Hero */}
        <section className="bg-graphite-base pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
              <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
                Koruyucu Bakım
              </span>
            </div>
            <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
              Şanzıman Bakımı{' '}
              <span className="text-brass">ve Kontrolü</span>
            </h1>
            <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
              DSG, ZF, CVT ve konvansiyonel otomatik şanzımanlar için yağ değişimi, filtre ve
              elektronik tanı. Arızayı önlemek, onarmaktan çok daha{' '}
              <strong className="text-text-primary font-medium">ekonomiktir</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={PHONE_HREF}
                className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2.5 px-7 py-3.5 text-base transition-colors">
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                {PHONE}
              </a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold text-base hover:border-brass hover:text-text-primary transition-all">
                <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </section>

        {/* Bakım Paketleri */}
        <section className="py-16 bg-graphite-base">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-3">Bakım Seçenekleri</h2>
            <p className="font-saira text-text-secondary text-center mb-10 max-w-xl mx-auto">
              Şanzıman türüne ve ihtiyacınıza göre uygun bakım paketini birlikte belirleriz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BAKIM_PAKETLERI.map((paket, i) => (
                <div key={paket.baslik}
                  className={`p-7 rounded-xl border flex flex-col gap-4 ${i === 1 ? 'bg-graphite-elevated border-border-brass' : 'bg-graphite-surface border-border-hairline'}`}>
                  {i === 1 && (
                    <span className="self-start font-jetbrains text-[10px] font-bold uppercase tracking-[0.22em] px-2.5 py-1 rounded-full bg-brass text-graphite-base">
                      Önerilen
                    </span>
                  )}
                  <h3 className="font-saira font-semibold text-lg text-text-primary">
                    {paket.baslik}
                  </h3>
                  <ul className="flex flex-col gap-2 flex-1">
                    {paket.icerik.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-brass" strokeWidth={2.5} />
                        <span className="font-saira text-sm text-text-primary">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-saira text-xs text-text-secondary border-t border-border-subtle pt-3">
                    {paket.not}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Bakım */}
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary text-center mb-10">Neden Düzenli Bakım?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NEDEN_BAKIM.map((item) => (
                <div key={item.baslik} className="flex gap-4 p-6 rounded-xl bg-graphite-surface border border-border-hairline">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brass/8 text-brass shrink-0">
                    <Gauge className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-saira font-semibold text-base text-text-primary mb-1">{item.baslik}</h3>
                    <p className="font-saira text-sm text-text-secondary leading-relaxed">{item.aciklama}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bakım sıklığı uyarısı */}
        <section className="py-14 bg-graphite-base">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="status-card status-card-warning flex gap-4 p-7">
              <AlertTriangle className="status-label-warning w-6 h-6 shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <span className="status-label-warning text-[11px] font-semibold uppercase tracking-wider">
                  UYARI
                </span>
                <h3 className="font-bold mb-2 mt-1">Şanzıman Yağı &quot;Ömür Boyu&quot; Miti</h3>
                <p className="text-sm leading-relaxed">
                  Bazı üreticiler şanzıman yağını &quot;ömür boyu&quot; olarak tanımlar. Ancak yüksek
                  sıcaklık, yoğun şehir trafiği ve uzun yolculuklar yağı bozar. Uzmanlar genel
                  olarak her 60.000–80.000 km&apos;de bir şanzıman yağı değişimini tavsiye eder.
                  Araç kullanım alışkanlığınıza göre sizinle birlikte en doğru aralığı belirleriz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alt CTA */}
        <section className="bg-graphite-base py-14 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">Şanzıman Bakımı İçin Randevu Alın</h2>
            <p className="font-saira text-text-secondary mb-8">
              Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi–Cumartesi 08:00–18:00
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={PHONE_HREF}
                className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-7 py-3.5 transition-colors">
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                {PHONE}
              </a>
              <Link href="/hizmetler/"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm">
                Tüm Hizmetler →
              </Link>
            </div>
          </div>
        </section>

    </main>
  );
}
