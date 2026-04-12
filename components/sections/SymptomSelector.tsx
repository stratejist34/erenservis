'use client';

import { useState } from 'react';
import { Phone, ChevronRight, AlertCircle } from 'lucide-react';

interface Symptom {
  id: number;
  severity: 'high' | 'medium';
  title: string;
  description: string;
  cause: string;
}

const SYMPTOMS: Symptom[] = [
  {
    id: 1,
    severity: 'high',
    title: 'Vites geçişte vuruntu',
    description: 'Özellikle 1→2 ve 2→3 geçişlerde hissedilen sert darbe.',
    cause: 'Kavrama balatası aşınması veya mekatronik valf timing hatası.',
  },
  {
    id: 2,
    severity: 'high',
    title: 'DSG uyarı lambası',
    description: 'Gösterge panelinde "P" ışığı, anahtar işareti veya şanzıman simgesi.',
    cause: 'Mekatronik ünite arızası veya basınç sensörü hatası.',
  },
  {
    id: 3,
    severity: 'high',
    title: 'Kayma ve devir atlama',
    description: 'Gaz verildiğinde devir yükselir ama hız artmaz.',
    cause: 'Kavrama balatası sıfırlanmış veya basınç tüpü kaçak.',
  },
  {
    id: 4,
    severity: 'medium',
    title: 'Geç vites değişimi',
    description: 'Vites geçişleri normalden yavaş, gecikmeli olur.',
    cause: 'Solenoid valf tıkanıklığı veya yağ basıncı düşüklüğü.',
  },
  {
    id: 5,
    severity: 'medium',
    title: 'Rölantide titreşim',
    description: 'D vitesinde dururken araçta anlamsız sarsıntı.',
    cause: 'Volant balatalık problemi veya çift kütleli volant aşınması.',
  },
];

const PHONE_HREF = 'tel:+905327153751';

export default function SymptomSelector() {
  const [selected, setSelected] = useState<number>(1);
  const active = SYMPTOMS.find((s) => s.id === selected)!;

  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#64748B]">Arıza Tespiti</div>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] lg:text-4xl text-[#F0F4F8]">
        DSG arıza belirtileri: hangisi sizde var?
      </h2>
      <p className="mt-3 text-sm text-[#64748B] max-w-xl">
        Şu belirtilerden birini yaşıyorsanız, ücretsiz ön teşhis için buradayız.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr_0.9fr]">
        {/* Sol — Semptom kartları (ilk 2) - Mikro image ile */}
        <div className="grid gap-3">
          {SYMPTOMS.slice(0, 2).map((s) => (
            <button
              key={s.id}
              onClick={() => setSelected(s.id)}
              className={`group relative flex items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 ${selected === s.id
                ? 'border-[#38BDF8]/30 bg-[#0C1219]'
                : 'border-white/8 bg-[#0C1219] hover:border-[#38BDF8]/20'
                }`}
            >
              {/* Mikro image bg — pattern break, "gerçek servis" hissi */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl opacity-[0.15] transition-opacity group-hover:opacity-[0.22]"
                style={{
                  backgroundImage: 'url(/images/servis.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(16px)',
                }}
              />

              <span className={`relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${s.severity === 'high'
                ? 'bg-red-500/15 text-red-400 dot-glow-critical'
                : 'bg-amber-500/15 text-amber-400 dot-glow-warning'
              }`}>
                <AlertCircle className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <div className="relative">
                <div className="text-sm font-medium text-[#F0F4F8]">{s.title}</div>
                <div className="mt-1 text-xs leading-5 text-[#94A3B8]">{s.description}</div>
              </div>
              <ChevronRight className={`relative mt-0.5 h-4 w-4 shrink-0 text-[#475569] transition-all duration-300 ${selected === s.id ? 'rotate-90 text-[#38BDF8]' : ''
                }`} />
            </button>
          ))}
        </div>

        {/* Orta — Semptom kartları (son 3) */}
        <div className="grid gap-3">
          {SYMPTOMS.slice(2, 5).map((s) => (
            <button
              key={s.id}
              onClick={() => setSelected(s.id)}
              className={`group relative flex items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 ${selected === s.id
                ? 'border-[#38BDF8]/30 bg-[#0C1219]'
                : 'border-white/8 bg-[#0C1219] hover:border-[#38BDF8]/20'
                }`}
            >
              {/* İlk 2 orta karta da subtle bg */}
              {SYMPTOMS.slice(2, 5).indexOf(s) < 2 && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl opacity-[0.12] transition-opacity group-hover:opacity-[0.20]"
                  style={{
                    backgroundImage: 'url(/images/mechanic-close.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(16px)',
                  }}
                />
              )}
              <span className={`relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${s.severity === 'high'
                ? 'bg-red-500/15 text-red-400 dot-glow-critical'
                : 'bg-amber-500/15 text-amber-400 dot-glow-warning'
              }`}>
                <AlertCircle className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <div className="relative">
                <div className="text-sm font-medium text-[#F0F4F8]">{s.title}</div>
                <div className="mt-1 text-xs leading-5 text-[#94A3B8]">{s.description}</div>
              </div>
              <ChevronRight className={`relative mt-0.5 h-4 w-4 shrink-0 text-[#475569] transition-all duration-300 ${selected === s.id ? 'rotate-90 text-[#38BDF8]' : ''
                }`} />
            </button>
          ))}
        </div>

        {/* Sağ — Highlight kart (Image + Risk) - Attention Stack */}
        <div
          className="glass-surface-strong relative overflow-hidden rounded-[24px] p-5"
          style={{
            backgroundImage: 'url(/images/mechanic-close.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.04)',
            transformOrigin: 'center',
            border: `1px solid ${active.severity === 'high' ? 'rgba(255,80,80,0.35)' : 'rgba(245,158,11,0.30)'}`,
            boxShadow: '0 20px 60px rgba(0,0,0,0.65), 0 0 40px rgba(244,63,94,0.08)',
          }}
        >
          {/* Overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(7,11,17,0.5) 0%, rgba(7,11,17,0.96) 100%)',
            }}
          />

          {/* Content */}
          <div className="relative">
            <div className="flex items-center gap-2">
              <span className={`flex h-5 w-5 items-center justify-center rounded-full ${active.severity === 'high' ? 'bg-red-500/15 text-red-400 dot-glow-critical' : 'bg-amber-500/15 text-amber-400 dot-glow-warning'
              }`}>
                <AlertCircle className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${active.severity === 'high' ? 'text-red-400' : 'text-amber-400'}`}>
                {active.severity === 'high' ? 'Yüksek Risk' : 'Orta Risk'}
              </span>
            </div>

            {/* Risk gauge — Cognify-inspired */}
            <div className="mt-3 flex items-center gap-3">
              <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${active.severity === 'high' ? 'dot-glow-critical' : 'dot-glow-warning'}`}
                  style={{
                    width: active.severity === 'high' ? '85%' : '55%',
                    background: active.severity === 'high'
                      ? 'linear-gradient(90deg, rgba(244,63,94,0.3), #F43F5E)'
                      : 'linear-gradient(90deg, rgba(245,158,11,0.3), #F59E0B)',
                  }}
                />
              </div>
              <span className={`font-mono text-[11px] font-semibold ${active.severity === 'high' ? 'text-red-400' : 'text-amber-400'}`}>
                {active.severity === 'high' ? '85%' : '55%'}
              </span>
            </div>

            <div className="mt-4 text-lg font-semibold tracking-[-0.02em] text-[#F0F4F8]">
              {active.title}
            </div>
            <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
              {active.description}
            </p>
            <div className="mt-4 rounded-xl border border-white/8 bg-black/30 p-3 backdrop-blur-sm">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                Olası Neden
              </div>
              <div className="mt-1.5 text-sm text-[#94A3B8]">{active.cause}</div>
            </div>
            <a
              href={PHONE_HREF}
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#38BDF8] px-5 py-3 text-sm font-semibold text-[#070B11] shadow-[0_8px_24px_rgba(56,189,248,0.25)] transition hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Ücretsiz Ön Teşhis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
