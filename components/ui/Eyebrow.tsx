interface EyebrowProps {
  children: React.ReactNode;
  withDot?: boolean;
  variant?: 'pill' | 'plain';
}

export function Eyebrow({ children, withDot = false, variant = 'pill' }: EyebrowProps) {
  if (variant === 'plain') {
    return (
      <div className="font-mono text-meta uppercase text-text-tertiary tracking-[0.15em]">
        {children}
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-sky-primary/8 border border-sky-primary/22 rounded-full font-mono text-eyebrow uppercase text-sky-primary font-medium tracking-[0.18em]">
      {withDot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-sky-primary animate-pulse-slow"
          style={{ boxShadow: '0 0 10px #38BDF8' }}
        />
      )}
      {children}
    </div>
  );
}
