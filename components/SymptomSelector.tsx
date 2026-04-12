'use client';

import { useState } from 'react';
import { Phone } from 'lucide-react';
import { colors } from '@/lib/theme/colors';

const PHONE_HREF = 'tel:+905327153751';

interface Symptom {
  id:          number;
  severity:    'high' | 'medium';
  title:       string;
  description: string;
  cause:       string;
}

const SYMPTOMS: Symptom[] = [
  {
    id:          1,
    severity:    'high',
    title:       'Vites geçişlerinde sarsıntı/vuruntu',
    description: 'Kavrama balataları aşınması veya mekatronik kart arızasının habercisi. Erken müdahale basit onarımla çözülebilir, gecikmesi komple revizyon gerektiren maliyetli bir duruma dönüşebilir.',
    cause:       'DSG kavrama seti / Mekatronik kart',
  },
  {
    id:          2,
    severity:    'high',
    title:       'Kalkışta titreşim veya gecikme',
    description: 'Çift kavrama sisteminde aşınma veya yağ basıncı düşüklüğü belirtisi. Genellikle kavrama seti değişimi gerektirir.',
    cause:       'Kavrama seti / Basınç tüpü',
  },
  {
    id:          3,
    severity:    'high',
    title:       'Ani güç kaybı veya çekiş düşmesi',
    description: 'Şanzıman iç mekanik arıza veya elektronik kontrol ünitesi hatası. Acil teşhis önerilir.',
    cause:       'İç mekanik / Elektronik ünite',
  },
  {
    id:          4,
    severity:    'medium',
    title:       'Şanzıman uyarı lambası yanıyor',
    description: 'Kontrol ünitesi bir hata kodu kaydetmiş. Bilgisayarlı diagnostik ile tam tespit yapılmalı. Sürüşe devam etmeden teşhis alın.',
    cause:       'Çoklu olası sebepler — diagnostik gerekli',
  },
  {
    id:          5,
    severity:    'medium',
    title:       'Geri viteste ses veya takılma',
    description: 'Geri vites çatalı veya senkronizasyon sorunu. Erken teşhis önemli — ilerlemesi pahalı onarım gerektirir.',
    cause:       'Geri vites çatalı / Senkronizasyon',
  },
  {
    id:          6,
    severity:    'medium',
    title:       'Yağ sızıntısı veya kaçağı',
    description: 'Conta veya sızdırmazlık elemanı arızası. Yağ kaybı şanzıman ömrünü ciddi şekilde kısaltır. Mümkün olan en kısa sürede müdahale edilmeli.',
    cause:       'Conta takımı / Sızdırmazlık',
  },
];

const SEVERITY_COLOR: Record<Symptom['severity'], string> = {
  high: colors.status.critical.label,
  medium: colors.status.warning.label,
};

export default function SymptomSelector() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selected = SYMPTOMS.find((s) => s.id === selectedId) ?? null;

  function toggle(id: number) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="py-24 bg-surface-2" aria-labelledby="on-teshis-baslik">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Başlık */}
        <div className="text-center mb-12">
          <p className="section-tag mb-4">ÖN TEŞHİS</p>
          <h2 id="on-teshis-baslik" className="text-fg mb-4">
            Şanzımanınızda Bu Belirtiler Var mı?
          </h2>
          <p className="text-fg-soft max-w-xl mx-auto">
            Yaşadığınız sorunu seçin, size ne yapmanız gerektiğini söyleyelim.
          </p>
        </div>

        {/* Belirti kartları — 3×2 desktop, 1 kolon mobil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {SYMPTOMS.map((symptom) => {
            const isSelected = selectedId === symptom.id;
            return (
              <button
                key={symptom.id}
                onClick={() => toggle(symptom.id)}
                aria-pressed={isSelected}
                className={[
                  'text-left w-full p-5 rounded-xl border transition-colors',
                  isSelected
                    ? 'border-accent bg-surface-1'
                    : 'border-edge bg-surface-1 hover:border-edge-hi',
                ].join(' ')}
                style={isSelected
                  ? { boxShadow: 'var(--shadow-glow)' }
                  : undefined}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 w-2 h-2 rounded-full shrink-0"
                    style={{ background: SEVERITY_COLOR[symptom.severity] }}
                  />
                  <span className={`text-sm font-medium leading-snug ${
                    isSelected ? 'text-fg' : 'text-fg-soft'
                  }`}>
                    {symptom.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Açıklama paneli */}
        {selected && (
          <div className="rounded-xl border border-edge-hi bg-surface-0 p-6 sm:p-8">
            <div className="flex items-start gap-3 mb-3">
              <span
                className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                style={{ background: SEVERITY_COLOR[selected.severity] }}
              />
              <h3 className="text-fg">{selected.title}</h3>
            </div>

            <p className="text-fg-soft leading-relaxed mb-3 max-w-2xl">
              {selected.description}
            </p>

            <p className="text-xs text-fg-muted mb-6">
              Olası neden:{' '}
              <span className="text-fg-soft font-medium">{selected.cause}</span>
            </p>

            <a
              href={PHONE_HREF}
              className="btn-premium inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-white font-bold text-sm"
              aria-label="Ücretsiz ön teşhis için hemen arayın"
            >
              <Phone className="w-4 h-4 shrink-0" strokeWidth={2.5} />
              Hemen Arayın — Ücretsiz Ön Teşhis
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
