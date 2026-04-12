interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'panel' | 'card';
}

export function GlassPanel({ children, className = '', variant = 'panel' }: GlassPanelProps) {
  const baseClass =
    variant === 'panel'
      ? 'backdrop-blur-panel rounded-[20px] shadow-panel glass-panel'
      : 'backdrop-blur-card rounded-2xl glass-card';

  return (
    <div
      className={`relative ${baseClass} ${className}`}
      style={{
        background: 'rgba(20, 30, 42, 0.55)',
        border: '1px solid rgba(160, 200, 230, 0.08)',
      }}
    >
      {children}
    </div>
  );
}
