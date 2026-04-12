interface StatusDotProps {
  variant: 'optimal' | 'warning' | 'critical';
  size?: 'sm' | 'md';
  glow?: boolean;
}

const colorMap = {
  optimal: '#10B981',
  warning: '#F59E0B',
  critical: '#F43F5E',
};

export function StatusDot({ variant, size = 'md', glow = true }: StatusDotProps) {
  const dimension = size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2';
  const color = colorMap[variant];

  return (
    <span
      className={`${dimension} rounded-full inline-block flex-shrink-0`}
      style={{
        background: color,
        boxShadow: glow ? `0 0 10px ${color}` : 'none',
      }}
    />
  );
}
