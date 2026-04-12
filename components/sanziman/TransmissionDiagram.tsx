import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
  slug: string;
  className?: string;
}

function DSGDiagram() {
  return (
    <svg viewBox="0 0 560 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="8" y="70" width="80" height="60" rx="6" className="fill-surface-2 stroke-edge" strokeWidth="1.5" />
      <text x="48" y="97" textAnchor="middle" className="fill-fg-soft text-[11px]" fontSize="11" fontWeight="600">Motor</text>
      <text x="48" y="113" textAnchor="middle" className="fill-fg-muted" fontSize="10">Tork kaynagi</text>

      <line x1="88" y1="100" x2="110" y2="100" className="stroke-accent" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="110,95 120,100 110,105" className="fill-accent" />

      <Link href="/hizmetler/dsg-kavrama-degisimi/" className="cursor-pointer hover:opacity-80 transition-opacity">
        <rect x="120" y="55" width="110" height="90" rx="6" className="fill-accent/10 stroke-accent/40" strokeWidth="1.5" />
        <text x="175" y="88" textAnchor="middle" className="fill-fg" fontSize="11" fontWeight="600">Cift Kavrama</text>
        <rect x="132" y="96" width="38" height="22" rx="4" className="fill-accent/20 stroke-accent/50" strokeWidth="1" />
        <text x="151" y="111" textAnchor="middle" className="fill-accent" fontSize="10" fontWeight="600">K1</text>
        <rect x="176" y="96" width="38" height="22" rx="4" className="fill-surface-2 stroke-edge" strokeWidth="1" />
        <text x="195" y="111" textAnchor="middle" className="fill-fg-soft" fontSize="10" fontWeight="600">K2</text>
        <text x="175" y="136" textAnchor="middle" className="fill-fg-muted" fontSize="9">Tek + cift vitesler</text>
      </Link>

      <line x1="230" y1="100" x2="252" y2="100" className="stroke-edge" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="252,95 262,100 252,105" className="fill-fg-muted" />

      <rect x="262" y="65" width="90" height="70" rx="6" className="fill-surface-2 stroke-edge" strokeWidth="1.5" />
      <text x="307" y="93" textAnchor="middle" className="fill-fg-soft" fontSize="11" fontWeight="600">Disli Kutusu</text>
      <text x="307" y="109" textAnchor="middle" className="fill-fg-muted" fontSize="9">DQ200 / DQ250</text>
      <text x="307" y="123" textAnchor="middle" className="fill-fg-muted" fontSize="9">DQ381 / DQ500</text>

      <line x1="352" y1="100" x2="374" y2="100" className="stroke-edge" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="374,95 384,100 374,105" className="fill-fg-muted" />

      <Link href="/hizmetler/dsg-mekatronik-kart/" className="cursor-pointer hover:opacity-80 transition-opacity">
        <rect x="384" y="65" width="90" height="70" rx="6" className="fill-status-critical-bg stroke-status-critical-border" strokeWidth="1.5" />
        <text x="429" y="93" textAnchor="middle" className="fill-status-critical-text" fontSize="11" fontWeight="600">Mekatronik</text>
        <text x="429" y="109" textAnchor="middle" className="fill-fg-muted" fontSize="9">Elektronik kontrol</text>
        <text x="429" y="123" textAnchor="middle" className="fill-status-critical-label opacity-70" fontSize="9">Kritik unite</text>
      </Link>

      <line x1="474" y1="100" x2="496" y2="100" className="stroke-edge" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="496,95 506,100 496,105" className="fill-fg-muted" />

      <rect x="506" y="75" width="46" height="50" rx="6" className="fill-surface-2 stroke-edge" strokeWidth="1.5" />
      <text x="529" y="97" textAnchor="middle" className="fill-fg-soft" fontSize="10" fontWeight="600">Cikis</text>
      <text x="529" y="112" textAnchor="middle" className="fill-fg-muted" fontSize="9">Tekerlek</text>

      <text x="151" y="160" textAnchor="middle" className="fill-accent" fontSize="9">Aktif vites</text>
      <text x="195" y="160" textAnchor="middle" className="fill-fg-muted" fontSize="9">Hazirda bekler</text>
    </svg>
  );
}

function ZFDiagram() {
  return (
    <svg viewBox="0 0 560 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="8" y="70" width="72" height="60" rx="6" className="fill-surface-2 stroke-edge" strokeWidth="1.5" />
      <text x="44" y="97" textAnchor="middle" className="fill-fg-soft" fontSize="11" fontWeight="600">Motor</text>
      <text x="44" y="113" textAnchor="middle" className="fill-fg-muted" fontSize="10">Tork</text>

      <line x1="80" y1="100" x2="102" y2="100" className="stroke-accent" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="102,95 112,100 102,105" className="fill-accent" />

      <rect x="112" y="55" width="110" height="90" rx="6" className="fill-accent/10 stroke-accent/40" strokeWidth="1.5" />
      <text x="167" y="85" textAnchor="middle" className="fill-fg" fontSize="11" fontWeight="600">Torque Konvertor</text>
      <text x="167" y="101" textAnchor="middle" className="fill-fg-muted" fontSize="9">Pompa + Turbin</text>
      <text x="167" y="115" textAnchor="middle" className="fill-fg-muted" fontSize="9">TCC kilitleme</text>
      <text x="167" y="133" textAnchor="middle" className="fill-status-critical-label opacity-70" fontSize="9">Metal toz riski</text>

      <line x1="222" y1="100" x2="244" y2="100" className="stroke-edge" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="244,95 254,100 244,105" className="fill-fg-muted" />

      <rect x="254" y="65" width="90" height="70" rx="6" className="fill-surface-2 stroke-edge" strokeWidth="1.5" />
      <text x="299" y="93" textAnchor="middle" className="fill-fg-soft" fontSize="11" fontWeight="600">Planet Disli</text>
      <text x="299" y="109" textAnchor="middle" className="fill-fg-muted" fontSize="9">8 ileri / 1 geri</text>
      <text x="299" y="123" textAnchor="middle" className="fill-fg-muted" fontSize="9">ZF 8HP serisi</text>

      <line x1="344" y1="100" x2="366" y2="100" className="stroke-edge" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="366,95 376,100 366,105" className="fill-fg-muted" />

      <rect x="376" y="65" width="90" height="70" rx="6" className="fill-status-warning-bg stroke-status-warning-border" strokeWidth="1.5" />
      <text x="421" y="90" textAnchor="middle" className="fill-status-warning-text" fontSize="11" fontWeight="600">Valf Govdesi</text>
      <text x="421" y="106" textAnchor="middle" className="fill-fg-muted" fontSize="9">Hidrolik kontrol</text>
      <text x="421" y="120" textAnchor="middle" className="fill-status-warning-label opacity-70" fontSize="9">Yag kalitesine</text>
      <text x="421" y="132" textAnchor="middle" className="fill-status-warning-label opacity-70" fontSize="9">duyarli</text>

      <line x1="466" y1="100" x2="488" y2="100" className="stroke-edge" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="488,95 498,100 488,105" className="fill-fg-muted" />

      <rect x="498" y="75" width="54" height="50" rx="6" className="fill-surface-2 stroke-edge" strokeWidth="1.5" />
      <text x="525" y="97" textAnchor="middle" className="fill-fg-soft" fontSize="10" fontWeight="600">Cikis</text>
      <text x="525" y="112" textAnchor="middle" className="fill-fg-muted" fontSize="9">Tekerlek</text>
    </svg>
  );
}

function CVTDiagram() {
  return (
    <svg viewBox="0 0 560 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="8" y="75" width="72" height="60" rx="6" className="fill-surface-2 stroke-edge" strokeWidth="1.5" />
      <text x="44" y="102" textAnchor="middle" className="fill-fg-soft" fontSize="11" fontWeight="600">Motor</text>
      <text x="44" y="118" textAnchor="middle" className="fill-fg-muted" fontSize="10">Tork</text>

      <line x1="80" y1="105" x2="102" y2="105" className="stroke-accent" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="102,100 112,105 102,110" className="fill-accent" />

      <rect x="112" y="55" width="100" height="100" rx="6" className="fill-accent/10 stroke-accent/40" strokeWidth="1.5" />
      <text x="162" y="82" textAnchor="middle" className="fill-fg" fontSize="11" fontWeight="600">Primer Puli</text>
      <text x="162" y="98" textAnchor="middle" className="fill-fg-muted" fontSize="9">Giris - degisken</text>
      <text x="162" y="112" textAnchor="middle" className="fill-fg-muted" fontSize="9">cap konik disk</text>
      <text x="162" y="140" textAnchor="middle" className="fill-status-critical-label opacity-70" fontSize="9">Cizik = revizyon</text>

      <rect x="218" y="88" width="76" height="34" rx="4" className="fill-status-warning-bg stroke-status-warning-border" strokeWidth="1.5" />
      <text x="256" y="103" textAnchor="middle" className="fill-status-warning-text" fontSize="10" fontWeight="600">Metal Kayis</text>
      <text x="256" y="116" textAnchor="middle" className="fill-status-warning-label opacity-70" fontSize="9">Push belt / zincir</text>

      <rect x="300" y="55" width="100" height="100" rx="6" className="fill-surface-2 stroke-edge" strokeWidth="1.5" />
      <text x="350" y="82" textAnchor="middle" className="fill-fg-soft" fontSize="11" fontWeight="600">Sekonder Puli</text>
      <text x="350" y="98" textAnchor="middle" className="fill-fg-muted" fontSize="9">Cikis - degisken</text>
      <text x="350" y="112" textAnchor="middle" className="fill-fg-muted" fontSize="9">oran surekli ayar</text>

      <line x1="400" y1="105" x2="422" y2="105" className="stroke-edge" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="422,100 432,105 422,110" className="fill-fg-muted" />

      <rect x="432" y="70" width="90" height="70" rx="6" className="fill-surface-2 stroke-edge" strokeWidth="1.5" />
      <text x="477" y="98" textAnchor="middle" className="fill-fg-soft" fontSize="11" fontWeight="600">TCU</text>
      <text x="477" y="114" textAnchor="middle" className="fill-fg-muted" fontSize="9">Oran kontrolu</text>
      <text x="477" y="128" textAnchor="middle" className="fill-fg-muted" fontSize="9">Solenoid yonetim</text>

      <text x="256" y="168" textAnchor="middle" className="fill-fg-muted" fontSize="9">Oran surekli degisir -&gt; vites soku yok</text>
    </svg>
  );
}

function ConventionalDiagram() {
  return (
    <svg viewBox="0 0 560 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="8" y="70" width="72" height="60" rx="6" className="fill-surface-2 stroke-edge" strokeWidth="1.5" />
      <text x="44" y="97" textAnchor="middle" className="fill-fg-soft" fontSize="11" fontWeight="600">Motor</text>
      <text x="44" y="113" textAnchor="middle" className="fill-fg-muted" fontSize="10">Tork</text>

      <line x1="80" y1="100" x2="102" y2="100" className="stroke-accent" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="102,95 112,100 102,105" className="fill-accent" />

      <rect x="112" y="60" width="90" height="80" rx="6" className="fill-accent/10 stroke-accent/40" strokeWidth="1.5" />
      <text x="157" y="88" textAnchor="middle" className="fill-fg" fontSize="11" fontWeight="600">Torque</text>
      <text x="157" y="102" textAnchor="middle" className="fill-fg" fontSize="11" fontWeight="600">Konvertor</text>
      <text x="157" y="118" textAnchor="middle" className="fill-fg-muted" fontSize="9">Hidrolik baglanti</text>
      <text x="157" y="130" textAnchor="middle" className="fill-fg-muted" fontSize="9">TCC kaplini</text>

      <line x1="202" y1="100" x2="224" y2="100" className="stroke-edge" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="224,95 234,100 224,105" className="fill-fg-muted" />

      <rect x="234" y="60" width="90" height="80" rx="6" className="fill-status-warning-bg stroke-status-warning-border" strokeWidth="1.5" />
      <text x="279" y="88" textAnchor="middle" className="fill-status-warning-text" fontSize="11" fontWeight="600">Valf Govdesi</text>
      <text x="279" y="104" textAnchor="middle" className="fill-fg-muted" fontSize="9">Hidrolik basinc</text>
      <text x="279" y="118" textAnchor="middle" className="fill-status-warning-label opacity-70" fontSize="9">En sik ariza</text>
      <text x="279" y="130" textAnchor="middle" className="fill-fg-muted" fontSize="9">722.6 / 722.9</text>

      <line x1="324" y1="100" x2="346" y2="100" className="stroke-edge" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="346,95 356,100 346,105" className="fill-fg-muted" />

      <rect x="356" y="60" width="90" height="80" rx="6" className="fill-surface-2 stroke-edge" strokeWidth="1.5" />
      <text x="401" y="88" textAnchor="middle" className="fill-fg-soft" fontSize="11" fontWeight="600">Planet Disli</text>
      <text x="401" y="104" textAnchor="middle" className="fill-fg-muted" fontSize="9">4-6 ileri vites</text>
      <text x="401" y="118" textAnchor="middle" className="fill-fg-muted" fontSize="9">Fren bandi</text>
      <text x="401" y="130" textAnchor="middle" className="fill-fg-muted" fontSize="9">ayari kritik</text>

      <line x1="446" y1="100" x2="468" y2="100" className="stroke-edge" strokeWidth="1.5" strokeDasharray="4 2" />
      <polygon points="468,95 478,100 468,105" className="fill-fg-muted" />

      <rect x="478" y="75" width="74" height="50" rx="6" className="fill-surface-2 stroke-edge" strokeWidth="1.5" />
      <text x="515" y="97" textAnchor="middle" className="fill-fg-soft" fontSize="10" fontWeight="600">Cikis</text>
      <text x="515" y="112" textAnchor="middle" className="fill-fg-muted" fontSize="9">Tekerlekler</text>
    </svg>
  );
}

const DIAGRAMS: Record<string, React.ReactNode> = {
  'dsg-s-tronic': <DSGDiagram />,
  'zf-otomatik': <ZFDiagram />,
  'cvt-sanziman': <CVTDiagram />,
  'tiptronic-konvansiyonel': <ConventionalDiagram />,
};

export default function TransmissionDiagram({ slug, className }: Props) {
  const diagram = DIAGRAMS[slug];
  if (!diagram) return null;

  return (
    <div className={cn('rounded-xl border border-edge bg-surface-1 p-4', className)}>
      <p className="text-xs font-semibold text-fg-muted uppercase tracking-wider mb-3">
        Teknik Sema
      </p>
      {diagram}
    </div>
  );
}
