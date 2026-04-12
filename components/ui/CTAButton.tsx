import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  external?: boolean;
}

export function CTAButton({ href, children, variant = 'primary', icon, external }: CTAButtonProps) {
  const externalProps = external ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {};

  if (variant === 'primary') {
    return (
      <Link
        href={href}
        {...externalProps}
        className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold text-[#061018] transition-all duration-[250ms] hover:-translate-y-0.5 shadow-cta hover:shadow-cta-hover"
        style={{
          background: 'linear-gradient(180deg, #5DCBFA 0%, #38BDF8 50%, #0284C7 100%)',
          border: '1px solid rgba(125, 211, 252, 0.4)',
        }}
      >
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      {...externalProps}
      className="inline-flex items-center gap-2.5 px-6 py-4 text-text-primary text-sm font-medium rounded-xl transition-all duration-200 glass-button cta-secondary hover:-translate-y-px"
    >
      {icon}
      {children}
    </Link>
  );
}
