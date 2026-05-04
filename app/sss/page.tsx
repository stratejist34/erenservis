import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { BRAND } from '@/lib/brand';
import { buildBreadcrumbSchema, buildFAQSchema, schemaToString } from '@/lib/schema';

export const dynamic = 'force-static';

const PAGE_URL = 'https://www.erenservis.net/sss/';
const PAGE_TITLE = 'Sıkça Sorulan Sorular | DSG, CVT, EDC, Aisin, ZF SSS Merkezi';
const PAGE_DESC =
  'Otomatik şanzıman, DSG, CVT, EDC ve ZF hakkında sık sorulan tüm sorular tek sayfada. Belirti, fiyat mantığı, bakım ve servis seçimi rehberi.';

type FaqItem = { q: string; a: string };
type FaqSection = {
  id: string;
  title: string;
  intro: string;
  items: FaqItem[];
};

const FAQ_SECTIONS: FaqSection[] = [
  {
    id: 'dsg',
    title: 'DSG Soruları',
    intro:
      'Volkswagen Grubu DQ200, DQ250 ve DQ381 kullanıcılarının en çok sorduğu temel sorular.',
    items: [
      {
        q: 'DSG şanzımanım titriyor, ne anlama gelir?',
        a: 'Kalkışta titreme ve sarsıntı çoğunlukla kavrama paketi kaynaklıdır; özellikle DQ200 tarafında yaygındır. Sürekli oluyorsa kavrama ömrü azalmış olabilir.',
      },
      {
        q: 'DSG mekatronik arızası mı, kavrama arızası mı?',
        a: 'Genel kural şu: sarsıntı, titreme ve koku daha çok kavramayı; lamba, P kilidi ve limp mode daha çok mekatroniği düşündürür. Kesin karar canlı veri ile verilir.',
      },
      {
        q: 'DSG yağ değişimi gerekli mi?',
        a: 'Evet. Özellikle DQ250 ve DQ381 gibi ıslak DSG ailelerinde 60.000 km civarı yağ ve filtre bakımı kritik önemdedir.',
      },
      {
        q: 'DSG limp modea düştü, sürebilir miyim?',
        a: 'Hayır. Limp mode şanzımanın kendini korumaya aldığını gösterir. Sürüşe devam etmek hem mekatroniği hem kavramayı yorabilir.',
      },
      {
        q: 'DSG kavrama ömrü ne kadardır?',
        a: 'Kullanım profiline göre değişir. Yoğun şehir içi trafik ömrü kısaltır; düzenli ve sakin kullanım ömrü uzatır.',
      },
      {
        q: 'Anahtar veya dişli ikonu yanıyor, ne demektir?',
        a: 'Özellikle DQ200 tarafında bu, mekatronik kontrol uyarısı olabilir. Geçici olarak kaybolsa bile tarama yaptırmak gerekir.',
      },
      {
        q: 'DSG mekatronik tamir mi edilir, değişir mi?',
        a: 'Çoğu vaka tamir edilebilir. Solenoid, sensör veya basınç tarafındaki bazı problemler tüm kart değişmeden çözülebilir.',
      },
      {
        q: 'S-Tronic ile DSG aynı şey mi?',
        a: 'Audi tarafında farklı adlandırma olabilir; ama sistem mantığı DSG ailesiyle yakından ilişkilidir.',
      },
    ],
  },
  {
    id: 'cvt',
    title: 'CVT Soruları',
    intro: 'Toyota, Honda, Nissan ve benzeri CVT kullanıcılarının ilk karar soruları.',
    items: [
      {
        q: 'CVT şanzıman ne kadar dayanır?',
        a: 'Düzenli yağ değişimi ile uzun ömürlü olabilir. Yağ ihmali ve ağır yük CVT ömrünü ciddi şekilde kısaltır.',
      },
      {
        q: 'CVT yağ değişimi ne sıklıkla yapılmalı?',
        a: 'Çoğu CVT için 40.000-60.000 km aralığı mantıklıdır. Üretici spesifikasyonuna uygun CVT sıvısı kullanılmalıdır.',
      },
      {
        q: 'CVTde kayma hissi neyi gösterir?',
        a: 'Devir yükselip ivmenin gelmemesi kayış, konik ya da basınç tarafında aşınma ihtimalini düşündürür.',
      },
      {
        q: 'CVT resetlemesi ne işe yarar?',
        a: 'Öğrenme parametrelerini sıfırlar. Hafif davranış bozukluklarında faydalı olabilir ama ciddi mekanik aşınmayı çözmeye yetmez.',
      },
      {
        q: 'CVT şanzıman tamir edilir mi?',
        a: 'Evet, edilir. Ama ekonomik karar hasarın kapsamına göre verilir; bazen erken müdahale daha avantajlıdır.',
      },
      {
        q: 'CVT araçla ağır yük çekmek zarar verir mi?',
        a: 'Evet. Sürekli ağır yük ve yokuş kullanımı CVT kayış ve basınç sistemini daha hızlı yorabilir.',
      },
    ],
  },
  {
    id: 'edc-powershift',
    title: 'EDC / PowerShift Soruları',
    intro: 'Renault, Dacia ve Ford çift kavrama kullanıcılarının en çok karıştırdığı konular.',
    items: [
      {
        q: 'EDC ile DSG aynı şey midir?',
        a: 'Aynı mantık ailesindedirler; her ikisi de çift kavramalı sistemdir. Belirti ve tamir mantığı çoğu zaman benzerdir.',
      },
      {
        q: 'Megane EDC titremesi neden olur?',
        a: 'En sık sebep kavrama ve bazen volant tarafıdır. Mekatronik basınç davranışı da tabloya eşlik edebilir.',
      },
      {
        q: 'Ford PowerShift güvenli mi?',
        a: 'Erken belirtiler ciddiye alınırsa uzun süre hizmet verebilir. İhmal edilirse kavrama ve TCM birlikte yorulabilir.',
      },
      {
        q: 'EDC kavrama değişimi sonrası ne yapılmalı?',
        a: 'Adaptasyon ve yol testi zorunludur. Yapılmadan teslim edilen araç kısa sürede aynı semptomları tekrar verebilir.',
      },
      {
        q: 'EDCde yağ değişimi var mı?',
        a: 'Kuru çift kavrama olduğu için kavrama tarafında yağ mantığı farklıdır; mekatronik ve ilgili servis prosedürü üretici kitabına göre ilerler.',
      },
    ],
  },
  {
    id: 'aisin-eat-zf',
    title: 'Aisin / EAT / ZF Soruları',
    intro: 'Konvansiyonel otomatik kullanan Toyota, Peugeot, BMW ve benzeri kullanıcıların temel soruları.',
    items: [
      {
        q: 'Aisin şanzıman güvenilir mi?',
        a: 'Evet. Düzenli yağ bakımı yapıldığında sektörün en dayanıklı konvansiyonel otomatiklerinden biridir.',
      },
      {
        q: 'EAT6 ve EAT8 nedir?',
        a: 'Aisin tabanlı tork konvertörlü otomatik ailelerdir. Çift kavramaya göre daha yumuşak geçiş karakteri sunarlar.',
      },
      {
        q: 'ZF 8HP şanzıman pahalı mıdır?',
        a: 'Parça ve işçilik seviyesi premium segmenttir; ama profesyonel tamir, komple değişimden çok daha mantıklı olabilir.',
      },
      {
        q: 'ZF ve Aisin yağ değişimi periyodu nedir?',
        a: 'Kullanım profilinize göre genelde 60.000-80.000 km aralığı mantıklıdır. Lifetime oil ifadesi sahada yeterli olmaz.',
      },
      {
        q: 'Konvansiyonel otomatik mi, çift kavrama mı daha uzun ömürlü?',
        a: 'Genel olarak Aisin ve ZF gibi konvansiyonel otomatikler daha toleranslı ve uzun ömürlü olur. Çift kavrama ise performans ve verimlilikte öne çıkar.',
      },
      {
        q: 'Tork konvertörü tamir edilir mi?',
        a: 'Hafif vakalarda revizyon mümkündür. Ağır titreşim ve kilitleme sorunlarında değişim daha doğru olabilir.',
      },
    ],
  },
  {
    id: 'fiyat-bakim',
    title: 'Fiyat ve Bakım Soruları',
    intro: 'Hemen herkesin sorduğu maliyet, süre ve yağ bakımı soruları.',
    items: [
      {
        q: 'Otomatik şanzıman tamiri sabit fiyatla mı yapılır?',
        a: 'Hayır. Fiyat şanzıman tipine, hasarın kapsamına, parça tercihine ve eşlik eden arızalara göre değişir.',
      },
      {
        q: 'Yağ değişimi gerçekten gerekli mi?',
        a: 'Evet. İhmal edilen yağ, daha sonra tamir maliyetini katlayabilir.',
      },
      {
        q: 'Hangi yağ kullanılmalı?',
        a: 'Üreticinin spesifikasyonuna uygun yağ kullanılmalıdır. Yanlış yağ, kısa sürede ciddi hasara yol açabilir.',
      },
      {
        q: 'Tamir sonrası garanti var mı?',
        a: 'Evet. Garanti kapsamı yazılı teslim edilmelidir ve işlem türüne göre netleştirilmelidir.',
      },
      {
        q: 'Tamir mi, ikinci el şanzıman mı daha mantıklı?',
        a: 'Çoğu vakada profesyonel ve garantili tamir daha mantıklıdır. İkinci el şanzımanın geçmişi belirsiz olabilir.',
      },
      {
        q: 'Tamir süresi ne kadar?',
        a: 'Belirtiye ve şanzıman ailesine göre değişir; standart işlerde 1-3 iş günü aralığı sık görülür.',
      },
    ],
  },
  {
    id: 'servis-secimi',
    title: 'Servis Seçimi Soruları',
    intro: 'Doğru otomatik şanzıman ustasını seçmek isteyenler için karar soruları.',
    items: [
      {
        q: 'Otomatik şanzıman servisi seçerken nelere dikkat etmeliyim?',
        a: 'Doğru teşhis cihazı, yazılı fiyat, adaptasyon ve yol testi süreci temel kriterlerdir.',
      },
      {
        q: 'Yetkili servis mi, uzman özel servis mi?',
        a: 'Yetkili servis genelde değişim odaklı olur. Uzman özel servis ise tamir ve revizyon seçeneklerini de sunabilir.',
      },
      {
        q: 'Önce sökelim sonra fiyat verelim diyen servis güvenli mi?',
        a: 'Risklidir. Profesyonel servis en azından ön tanı ve kapsam tahmini üzerinden yazılı bilgi verir.',
      },
      {
        q: 'Ön tanı ücretli mi olur?',
        a: 'Servisten servise değişir. Net ve şeffaf bir süreç anlatan yerler tercih edilmelidir.',
      },
      {
        q: 'Servisin uzmanlığını nasıl anlarım?',
        a: 'Hangi şanzıman ailelerinde derinleştiklerini sorun. DSG, CVT, EDC, Aisin ve ZF tarafında gerçek uzmanlık ayrı ayrıdır.',
      },
    ],
  },
];

const ALL_FAQS = FAQ_SECTIONS.flatMap((section) => section.items);

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PAGE_URL,
    siteName: BRAND.primaryName,
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function SssPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
    { name: 'Sıkça Sorulan Sorular', url: PAGE_URL },
  ]);

  const faqSchema = buildFAQSchema(ALL_FAQS);

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${PAGE_URL}#collection`,
    url: PAGE_URL,
    name: PAGE_TITLE,
    description: PAGE_DESC,
    inLanguage: 'tr-TR',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(collectionSchema) }}
      />

      <main>
        <section className="bg-graphite-base pt-28 pb-14 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
              <HelpCircle className="w-3.5 h-3.5 text-brass" strokeWidth={2.5} />
              <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
                SSS Merkezi
              </span>
            </div>
            <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-4">
              Sıkça Sorulan Sorular
            </h1>
            <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Otomatik şanzıman, DSG, CVT, EDC, PowerShift, Aisin ve ZF aileleri
              hakkında en çok sorulan soruları tek merkezde topladık.
            </p>
          </div>
        </section>

        <section className="py-10 bg-graphite-surface border-y border-border-hairline">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {FAQ_SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-xl border border-border-hairline bg-graphite-base px-4 py-3 font-saira text-sm text-text-secondary hover:border-border-brass hover:text-text-primary transition-all"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-graphite-base">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
            {FAQ_SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="rounded-2xl border border-border-hairline bg-graphite-surface p-6 sm:p-8 scroll-mt-28"
              >
                <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
                  {section.title}
                </h2>
                <p className="font-saira text-sm sm:text-base text-text-secondary leading-relaxed mb-6 max-w-3xl">
                  {section.intro}
                </p>

                <div className="space-y-4">
                  {section.items.map((item) => (
                    <article
                      key={item.q}
                      className="rounded-xl border border-border-hairline bg-graphite-base p-5"
                    >
                      <h3 className="font-saira text-base font-semibold text-text-primary mb-2">
                        {item.q}
                      </h3>
                      <p className="font-saira text-sm text-text-secondary leading-relaxed">
                        {item.a}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="py-16 bg-graphite-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl border border-border-brass bg-brass/6 p-7 sm:p-9">
              <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
                Sorunuzun cevabını bulamadınız mı?
              </h2>
              <p className="font-saira text-text-secondary leading-relaxed max-w-2xl mb-6">
                Her belirti her zaman tek bir başlık altına tam oturmaz. {BRAND.primaryName},
                Bostancı&apos;da telefonla belirti dinleme ve ön tanı yönlendirmesiyle size
                ilk doğru yönü gösterebilir.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+905327153751"
                  className="inline-flex items-center justify-center rounded-full bg-brass-bright px-6 py-3 font-saira font-semibold text-graphite-base hover:bg-brass transition-colors"
                >
                  0532 715 37 51
                </a>
                <Link
                  href="/iletisim/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle px-6 py-3 font-saira font-semibold text-text-primary hover:border-border-brass transition-colors"
                >
                  İletişim Sayfasına Git
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-graphite-base">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
              İlgili Sayfalar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                ['DSG Şanzıman Tamiri', '/hizmetler/dsg-sanziman-tamiri/'],
                ['DSG Mekatronik Kart', '/hizmetler/dsg-mekatronik-kart/'],
                ['DSG Kavrama Değişimi', '/hizmetler/dsg-kavrama-degisimi/'],
                ['CVT Şanzıman Tamiri', '/hizmetler/cvt-sanziman-tamiri/'],
                ['Aisin Şanzıman Tamiri', '/hizmetler/aisin-sanziman-tamiri/'],
                ['EAT Şanzıman Tamiri', '/hizmetler/eat-sanziman-tamiri/'],
                ['Tamir Fiyat Rehberi', '/rehber/otomatik-sanziman-tamiri-fiyat/'],
                ['Şanzıman Ustası Seçimi', '/blog/otomatik-sanziman-ustasi-secimi/'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl border border-border-hairline bg-graphite-surface px-5 py-4 font-saira text-sm text-text-secondary hover:border-border-brass hover:text-text-primary transition-all"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
