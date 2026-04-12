export default function ErenServisIndustrialCopperMockup() {
  const services = [
    {
      title: 'DSG & S-Tronic Şanzıman',
      desc: 'VW, Audi, Skoda ve Seat DSG platformlarında mekatronik, kavrama ve basınç tüpü disiplinine odaklanan uzman revizyon hattı.',
      tags: ['DQ200', 'DQ250', 'DQ381'],
      risk: 'Risk Seviyesi: Yüksek / şehir içi kullanımda hızla ilerler',
      issue: 'Vaka Notu: kalkışta titreme, ısınınca sert geçiş, mekatronik uyarısı',
    },
    {
      title: 'ZF Otomatik Şanzıman',
      desc: 'BMW, Audi ve premium segment araçlarda ZF 6HP / 8HP bakım, tork konvertör, solenoid ve valf gövdesi odaklı servis akışı.',
      tags: ['ZF 6HP', 'ZF 8HP', 'Tork Konvertör'],
      risk: 'Risk Seviyesi: Orta / erken teşhisle maliyet kontrol altına alınır',
      issue: 'Vaka Notu: kilitleme problemi, vuruntu, gecikmeli geri vites',
    },
    {
      title: 'CVT Şanzıman Servisi',
      desc: 'Nissan, Honda, Toyota ve Subaru CVT sistemlerinde kayış, yağ, gövde, elektronik kalibrasyon ve aşınma kontrolü.',
      tags: ['Nissan', 'Honda', 'Toyota'],
      risk: 'Risk Seviyesi: Orta-Yüksek / yanlış yağ seçimi riski büyütür',
      issue: 'Vaka Notu: devir yükselip hızlanmama, uğultu, gecikme',
    },
    {
      title: 'Bakım & Diagnostik',
      desc: 'Periyodik yağ değişimi, filtre, adaptasyon, bilgisayarlı analiz ve arıza ilerlemeden müdahale için ön teşhis servisi.',
      tags: ['Diagnostik', 'Yağ Değişimi', 'Kalibrasyon'],
      risk: 'Risk Seviyesi: Düşük / düzenli bakım ciddi masrafı önler',
      issue: 'Vaka Notu: geçiş sertliği, ilk çalıştırmada vuruntu, adaptasyon bozulması',
    },
  ];

  const stats = [
    ['15+', 'Yıl Deneyim'],
    ['5000+', 'Tamamlanan İş'],
    ['2 Yıl', 'İşçilik Garantisi'],
    ['19+', 'Marka Kapsamı'],
  ];

  const symptoms = [
    'Kalkışta titreme',
    'Vites geçişinde sert vuruntu',
    'Ani çekiş düşmesi',
    'Uyarı lambası / arıza modu',
  ];

  const reviews = [
    {
      name: 'Mehmet K.',
      car: 'Audi A4 S-Tronic',
      quote: 'Başka servisin çözemediği sorunu tek günde çözdüler. Fiyatı baştan söylediler, süreç netti.',
    },
    {
      name: 'Hakan S.',
      car: 'BMW 520d',
      quote: 'İlk defa gerçekten şanzımanı bilen bir yere geldiğimi hissettim. Gereksiz işlem çıkarmadılar.',
    },
    {
      name: 'Fatih D.',
      car: 'Nissan Qashqai CVT',
      quote: 'CVT tarafında güven veren çok az yer var. Burada önce teşhis, sonra karar mantığı vardı.',
    },
  ];

  const paletteOptions = [
    {
      name: 'Muted Gold',
     hex: '#A68A64',
      badgeBg: '#A68A64',
      headline: '#A68A64',
      stat: '#A68A64',
      ctaBg: '#A68A64',
      ctaHover: '#B29873',
      note: 'Ana referans ton. En dengeli premium / mekanik çizgi.',
    },
    {
      name: 'Dusty Bronze',
      hex: '#9A7558',
      badgeBg: '#9A7558',
      headline: '#A68A64',
      stat: '#9A7558',
      ctaBg: '#9A7558',
      ctaHover: '#A88467',
      note: 'Bakır hissi daha güçlü. CTA ve detay vurguda göz kırpıyor, başlıkta biraz soğuyabiliyor.',
    },
    {
      name: 'Antique Brass',
      hex: '#8F7A58',
      badgeBg: '#8F7A58',
      headline: '#A68A64',
      stat: '#8F7A58',
      ctaBg: '#8F7A58',
      ctaHover: '#9E8968',
      note: 'Daha ağır ve klasik metal hissi. Güvenli ama biraz daha yaşlı algılanabilir.',
    },
  ];

  const tokenScale = [
    { token: 'brand-400', hex: '#B59B75', usage: 'hover / hover border / soft line' },
    { token: 'brand-500', hex: '#A68A64', usage: 'default accent / badge / stat / accent text' },
    { token: 'brand-600', hex: '#947554', usage: 'active / pressed / darker CTA state' },
    { token: 'brand-700', hex: '#7E6245', usage: 'deep border / icon / dense emphasis' },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F10] text-[#F3EEE8] selection:bg-[#A68A64] selection:text-black font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
      `}</style>

      {/* Atmosphere */}
      <div className="pointer-events-none fixed inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_20%,rgba(166,138,100,0.12),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0F0F10]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-sm font-semibold tracking-wide text-white">Eren Servis</div>
          <button className="bg-[#A68A64] px-5 py-2 text-sm font-bold text-black hover:bg-white transition">
            0216 577 51 51
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[1px] w-16 bg-[#A68A64]" />
            <span className="text-[11px] tracking-[0.4em] text-[#A68A64] font-bold uppercase">
              Garage Noir
            </span>
          </div>

          <h1 className="font-syne uppercase text-7xl md:text-[5.5rem] font-extrabold leading-[0.85] tracking-[-0.02em] text-white">
            HASSAS
            <span className="block text-[#A68A64] italic">ANALİZ.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-[#B7AEA4] leading-7 tracking-tight">
            Şanzıman sorunları gecikmez. Belirti verir. Müdahale edilmezse büyür.
            Doğru teşhis, doğru müdahale ve şeffaf süreç ile ilerliyoruz.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#A68A64] text-black px-6 py-4 font-bold hover:bg-white transition">
              Hemen Ara
            </button>
            <button className="border border-white/20 px-6 py-4 text-white hover:border-[#A68A64]">
              WhatsApp
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(([v, l]) => (
              <div key={l} className="border border-white/10 p-4">
                <div className="text-[#A68A64] text-2xl font-bold">{v}</div>
                <div className="text-sm text-[#B7AEA4]">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="border border-white/10 p-6 bg-[#141414]">
          <div className="aspect-[4/3] bg-[linear-gradient(135deg,#181818,#111)] flex items-center justify-center">
            <div className="text-[#A68A64] font-syne text-xl opacity-60">MECHANICAL CORE</div>
          </div>
        </div>
      </section>

      {/* HERO ALTINDA PALET KARŞILAŞTIRMA */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-16 bg-[#A68A64]" />
            <span className="text-[11px] tracking-[0.35em] text-[#A68A64] font-bold uppercase">
              Ton Karşılaştırma
            </span>
          </div>
          <h2 className="mt-5 font-syne uppercase text-3xl md:text-4xl tracking-tight text-white">
            Aynı rengin davranışını rol bazında gör
          </h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base leading-7 text-[#B7AEA4]">
            Warm Taupe Gold ile Lifted Conversion Mix’i çıkardım. Orijinal rengi merkezde tuttum.
            Aşağıda her tonun badge, headline, stat-number ve CTA butonda nasıl davrandığını ayrı ayrı görüyorsun.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {paletteOptions.map((color) => (
            <div key={color.name} className="border border-white/10 bg-[#131313] p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span
                  className="inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-black"
                  style={{ backgroundColor: color.badgeBg }}
                >
                  {color.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#8D847B]">
                  {color.hex}
                </span>
              </div>

              <div className="border border-white/8 bg-[#0F0F10] px-4 py-5 min-h-[250px] flex flex-col justify-between gap-5">
                <div>
                  <div className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#81786E]">
                    Headline davranışı
                  </div>
                  <div
                    className="font-syne uppercase text-3xl leading-[0.9] tracking-tight"
                    style={{ color: color.headline }}
                  >
                    HASSAS<br />ANALİZ
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#81786E]">
                    Stat-number davranışı
                  </div>
                  <div className="flex items-end gap-4">
                    <div className="text-3xl font-bold tracking-tight" style={{ color: color.stat }}>
                      15+
                    </div>
                    <div className="text-sm text-[#B7AEA4]">Yıl Deneyim</div>
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#81786E]">
                    CTA davranışı
                  </div>
                  <div className="flex gap-3">
                    <button
                      className="px-4 py-3 text-sm font-bold text-black transition"
                      style={{ backgroundColor: color.ctaBg }}
                    >
                      Hemen Ara
                    </button>
                    <button
                      className="px-4 py-3 text-sm font-bold text-black transition"
                      style={{ backgroundColor: color.ctaHover }}
                    >
                      Hover
                    </button>
                  </div>
                </div>

                <div className="border-t border-white/8 pt-4 text-xs leading-6 text-[#A79E95]">
                  {color.note}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-white/10 bg-[#121212] p-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-16 bg-[#A68A64]" />
            <span className="text-[11px] tracking-[0.35em] text-[#A68A64] font-bold uppercase">
              Tailwind Token Mantığı
            </span>
          </div>

          <h3 className="mt-5 font-syne uppercase text-2xl tracking-tight text-white">
            Tek renk değil, kontrollü bir ton skalası
          </h3>

          <p className="mt-3 max-w-4xl text-sm md:text-base leading-7 text-[#B7AEA4]">
            Evet, bu yaklaşım mantıklı. Hatta uzun vadede daha doğru. Çünkü aynı rengi her yerde aynı hex ile kullanmak yerine
            rol bazlı tonlar tanımlarsan okunurluk, durum yönetimi ve CTA hiyerarşisi daha kontrollü olur. Teknik borcu da azaltır.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {tokenScale.map((item) => (
              <div key={item.token} className="border border-white/8 bg-[#0F0F10] p-4">
                <div className="mb-3 h-12 w-full" style={{ backgroundColor: item.hex }} />
                <div className="text-sm font-bold text-white">{item.token}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-[#A68A64]">{item.hex}</div>
                <div className="mt-3 text-xs leading-6 text-[#A79E95]">{item.usage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENSION */}
      <section className="border-y border-white/5 py-16 px-6 max-w-7xl mx-auto">
        <h2 className="font-syne text-3xl mb-8">Belirtiler</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {symptoms.map((s) => (
            <div key={s} className="border border-white/10 p-4 text-sm">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-syne text-3xl mb-10">Hizmetler</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border border-white/10 p-6 hover:border-[#A68A64] transition">
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-[#B7AEA4] mb-4">{s.desc}</p>
              <div className="text-xs text-[#A68A64]">{s.risk}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-t border-white/5 py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="font-syne uppercase text-4xl tracking-tight text-white">
            GERÇEK MÜŞTERİ DENEYİMİ
          </h2>
          <div className="h-[2px] w-20 bg-[#A68A64] mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={r.name} className="relative border border-white/10 p-6 bg-[#141414] hover:border-[#A68A64] transition">
              <div className="absolute top-4 right-4 text-[10px] text-[#A68A64] tracking-widest">
                0{i + 1}
              </div>

              <p className="text-base leading-7 mb-6 text-white">
                “{r.quote}”
              </p>

              <div className="border-t border-white/10 pt-4">
                <div className="text-[#A68A64] text-sm font-bold uppercase tracking-wide">
                  {r.name}
                </div>
                <div className="text-xs text-[#B7AEA4]">
                  {r.car}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="border border-white/10 p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-syne text-2xl">Hazır mısınız?</div>
          <button className="bg-[#A68A64] text-black px-8 py-4 font-bold">
            Hemen İletişime Geç
          </button>
        </div>
      </section>
    </div>
  );
}
