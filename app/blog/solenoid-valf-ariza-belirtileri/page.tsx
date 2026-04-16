import type { Metadata } from 'next';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench } from 'lucide-react';
import Link from 'next/link';
import BlogSchema from '@/components/schema/BlogSchema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'DSG Solenoid Valf Arıza Belirtileri: 5 İşaret + Tamir 2026',
  description:
    'Sarsıntı, limp mode, P17xx kodu — DSG solenoid arızasının 5 belirtisi. Temizlik mi değişim mi karar tablosu ve 2026 maliyet rehberi. Bostancı\'da ücretsiz tanı.',
  keywords: [
    'solenoid valf arıza belirtileri',
    'dsg solenoid arızası',
    'solenoid valf değişimi',
    'dq200 solenoid',
    'dsg vites sorunu',
    'solenoid valf temizliği',
    'dsg şanzıman solenoid fiyatı',
  ],
  alternates: {
    canonical: 'https://erenservis.net/blog/solenoid-valf-ariza-belirtileri/',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const BELIRTILER = [
  'Vites değiştirirken ani sarsıntı veya darbe hissi',
  'Belirli vitese geçememe ya da geri vitese girmeme',
  'PRNDS ışıklarının yanıp sönmesi, limp mode\'a girme',
  'OBD okumada P17xx serisi (hidrolik/basınç) arıza kodları',
  'Isındıkça artan semptomlar — soğukta normal, sıcakta sorun',
];

const MODELLER = [
  {
    kod: 'DQ200',
    tip: 'Kuru Kavrama — 7 İleri',
    ozellik: 'Solenoidler mekatronik gövde içinde basınç tüpü ile birlikte çalışır. Tüp çatlaması basınç düşürür ve solenoidler yanıt veremez hale gelir. Temizlik öncesi mutlaka basınç testi yapılmalıdır.',
  },
  {
    kod: 'DQ250',
    tip: 'Islak Kavrama — 6 İleri',
    ozellik: 'Solenoidler sürekli yağ banyosunda çalışır. Kirli veya eskimiş yağ solenoid tıkanıklığının başlıca nedenidir. 60.000 km\'de yağ değişimi bu arızayı büyük ölçüde önler.',
  },
];

const NEDEN_ONEMLI = [
  'Solenoid tıkanıklığı sürüş sırasında şanzımanı boşa çıkarabilir — trafik güvenliği riski',
  'Limp mode\'da kalan araçla uzun süre kullanım dişli grubuna kalıcı hasar verir',
  'Erken temizlik ile çözülen arıza, geç kalındığında komple mekatronik değişimine dönüşür',
  'Ücretsiz hata kodu okuma ile temizlik mi değişim mi aynı günde netleşir',
];

export default function SolenoidValfArızaBelirtileriPage() {
  const faqItems = TRANSMISSION_FAQS['solenoid-valf-ariza-belirtileri'] ?? [];
  return (
    <>
      <BlogSchema
        slug="solenoid-valf-ariza-belirtileri"
        title="DSG Solenoid Valf Arıza Belirtileri: 5 İşaret + Tamir 2026"
        description="Sarsıntı, limp mode, P17xx kodu — DSG solenoid arızasının 5 belirtisi. Temizlik mi değişim mi karar tablosu ve 2026 maliyet rehberi. Bostancı'da ücretsiz tanı."
        datePublished="2026-04-11"
        dateModified="2026-04-16"
      />
      <main className="bg-graphite-base">

      {/* Hero */}
      <section className="bg-graphite-base pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              DSG Arıza Belirtileri
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            Solenoid Valf{' '}
            <span className="text-brass">Arıza Belirtileri</span>
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            DSG şanzımanda solenoid valf, her vites geçişinde yağ akışını ve basıncı yöneten kritik bir
            parçadır. Tıkandığında veya arızalandığında araç limp mode&apos;a girer.{' '}
            <strong className="text-text-primary font-medium">Bostancı — ücretsiz ön tanı.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={PHONE_HREF} className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2.5 px-7 py-3.5 text-base transition-colors">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold text-base hover:border-brass hover:text-text-primary transition-all"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="font-saira text-text-primary text-lg leading-relaxed">
            Solenoid valf, DSG mekatronik ünitesi içindeki elektrikli-hidrolik anahtardır. Her vites değişiminde
            açılıp kapanarak doğru kavramaya basınç iletir. Kirlilik, aşınma veya elektriksel arıza nedeniyle
            yanıt vermez hale geldiğinde şanzıman yanlış vitese kilitlenir ya da tamamen boşa çıkar.{' '}
            <strong>Komple mekatronik değişiminden önce solenoid arızası mutlaka ayırt edilmelidir</strong> —
            maliyeti onlarca bin TL fark eder.
          </p>
        </div>

        {/* Solenoid Nasıl Çalışır */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Solenoid Valf Nasıl Çalışır?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { baslik: 'Elektrik Sinyali', aciklama: 'Mekatronik kartı, hangi kavramanın baskılanacağını hesaplar ve ilgili solenoid bobinine akım gönderir.' },
              { baslik: 'Manyetik Anahtarlama', aciklama: 'Bobin manyetik alan oluşturur, küçük metal piston hareket eder ve yağ kanalını açar ya da kapatır — milisaniyeler içinde.' },
              { baslik: 'Hidrolik Basınç', aciklama: 'Açılan kanal, kavrama pistoncuğuna basınç iletir. Doğru basınç = pürüzsüz vites geçişi. Solenoid tıkandığında basınç tutarsızlaşır.' },
            ].map((item) => (
              <div key={item.baslik} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline">
                <h3 className="font-saira font-semibold text-text-primary mb-2 text-sm">{item.baslik}</h3>
                <p className="font-saira text-sm text-text-secondary leading-relaxed">{item.aciklama}</p>
              </div>
            ))}
          </div>
          <p className="font-saira text-sm text-text-secondary leading-relaxed mt-4 px-1">
            DQ200 şanzımanda 6, DQ250 şanzımanda 7 solenoid valf bulunur. Bir solenoidin arızalanması
            yalnızca o valfin kontrol ettiği kavramayı etkiler — bu yüzden <strong className="text-text-primary">hangi
            solenoidin arızalı olduğu</strong> tanı sırasında tespit edilir ve gereksiz komple değişimden kaçınılır.
          </p>
        </section>

        {/* Arıza Belirtileri */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Solenoid Valf Arıza Belirtileri</h2>
          <div className="bg-graphite-surface rounded-xl p-6 border border-border-hairline">
            <ul className="space-y-3">
              {BELIRTILER.map((belirti) => (
                <li key={belirti} className="flex items-start gap-3 font-saira text-text-primary">
                  <AlertTriangle className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  {belirti}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DQ200 vs DQ250 */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">DQ200 ve DQ250 Solenoid Farkı</h2>
          <div className="grid gap-4">
            {MODELLER.map((model) => (
              <div key={model.kod} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brass/8 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-brass" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-saira font-semibold text-text-primary">{model.kod}</h3>
                      <span className="font-jetbrains text-xs text-brass bg-brass/8 px-2 py-0.5 rounded-full">{model.tip}</span>
                    </div>
                    <p className="font-saira text-sm text-text-primary leading-relaxed mt-1">{model.ozellik}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Temizlik mi Değişim mi */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Temizlik mi, Değişim mi?</h2>
          <div className="overflow-x-auto rounded-xl border border-border-hairline">
            <table className="w-full font-saira text-sm">
              <thead>
                <tr className="bg-graphite-surface border-b border-border-hairline">
                  <th className="text-left px-5 py-3 text-text-primary font-semibold">Durum</th>
                  <th className="text-left px-5 py-3 text-brass font-semibold">Temizlik</th>
                  <th className="text-left px-5 py-3 text-text-secondary font-semibold">Değişim</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Yağ kirliliği — solenoid mekanik sağlam', '✓', '—'],
                  ['Hata kodu var ama belirti yeni başladı', '✓ (dene)', '—'],
                  ['Bobinde elektriksel hasar (ölçüm ile)', '—', '✓'],
                  ['Pistoncuk mekanik olarak aşınmış', '—', '✓'],
                  ['Temizlik sonrası hata kodu tekrar dönmüş', '—', '✓'],
                  ['DQ200 basınç tüpü sorunuyla birlikte', '—', '✓ + tüp'],
                ].map(([durum, temizlik, degisim]) => (
                  <tr key={durum} className="border-b border-border-hairline last:border-0">
                    <td className="px-5 py-3 text-text-secondary">{durum}</td>
                    <td className="px-5 py-3 text-brass font-semibold">{temizlik}</td>
                    <td className="px-5 py-3 text-text-secondary">{degisim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-saira text-xs text-text-secondary mt-3 px-1">
            Sadece hata koduna bakarak temizlik/değişim kararı verilmez — solenoid bobini mutlaka multimetre ile ölçülmelidir.
          </p>
        </section>

        {/* Neden Önemli */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Neden Ertelenmemeli?</h2>
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-6">
            <ul className="space-y-3">
              {NEDEN_ONEMLI.map((madde) => (
                <li key={madde} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brass shrink-0 mt-0.5" />
                  <span className="font-saira text-sm text-text-primary">{madde}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Teşhis ve Tamir Süreci */}
        <section className="mb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Teşhis ve Tamir Süreci</h2>
          <div className="flex flex-col gap-3">
            {[
              { adim: '1', baslik: 'Hata Kodu Okuma', detay: 'OBD cihazı ile P17xx serisi kodlar tespit edilir. Hangi solenoidin arızalı olduğu koda göre daraltılır.' },
              { adim: '2', baslik: 'Elektriksel Ölçüm', detay: 'Solenoid bobininin direnç değeri multimetre ile ölçülür. Spesifikasyon dışı değer = değişim, normal = temizlik dene.' },
              { adim: '3', baslik: 'Basınç Testi (DQ200)', detay: 'Kuru tip şanzımanda solenoid testi öncesi basınç tüpü kontrol edilir — tüp arızası solenoid belirtisi verir.' },
              { adim: '4', baslik: 'Temizlik veya Değişim', detay: 'Tanı sonucuna göre ultrasonik temizlik ya da yeni solenoid takılır, TCU adaptasyonu yapılır.' },
              { adim: '5', baslik: 'Yol Testi', detay: 'Vites geçişleri kontrol edilir, hata kodu dönmediği doğrulanır ve araç teslim edilir.' },
            ].map((item) => (
              <div key={item.adim} className="flex gap-4 p-5 rounded-xl bg-graphite-surface border border-border-hairline">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brass text-graphite-base font-jetbrains text-xs font-bold shrink-0">
                  {item.adim}
                </div>
                <div>
                  <h3 className="font-saira font-semibold text-sm text-text-primary mb-1">{item.baslik}</h3>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">{item.detay}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        {faqItems.length > 0 && (
          <section className="mb-12">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.q} className="p-5 rounded-xl bg-graphite-surface border border-border-hairline">
                  <h3 className="font-saira font-semibold text-text-primary mb-2">{item.q}</h3>
                  <p className="font-saira text-text-secondary text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* İç Linkler */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-border-hairline">
          <Link
            href="/hizmetler/dsg-mekatronik-kart/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brass-bright text-graphite-base font-saira font-semibold hover:bg-brass transition-colors"
          >
            Mekatronik Kart Fiyatları
          </Link>
          <Link
            href="/blog/mekatronik-nedir/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-colors"
          >
            Mekatronik Nedir? &rarr;
          </Link>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="bg-graphite-base py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">Solenoid Sorununuz mu Var?</h2>
          <p className="font-saira text-text-secondary mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi-Cumartesi 08:00-18:00
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF} className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-7 py-3.5 transition-colors">
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/blog/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm"
            >
              Diğer Yazılar &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
