interface SectionMarkerProps {
  index: string;   // '01', '02', ...
  label: string;   // 'ARIZA_TESPIT_SISTEMI'
  className?: string;
}

export default function SectionMarker({ index, label, className = '' }: SectionMarkerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 mt-16 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px" style={{ background: 'var(--color-border-hairline)' }} />
        <span className="flex items-center gap-2 font-jetbrains text-[10px] tracking-[0.16em] whitespace-nowrap">
          <span className="text-brass/75">{index}</span>
          <span className="text-text-tertiary">/</span>
          <span className="text-iron-light">{label}</span>
        </span>
        <div className="flex-1 h-px" style={{ background: 'var(--color-border-hairline)' }} />
      </div>
    </div>
  );
}
