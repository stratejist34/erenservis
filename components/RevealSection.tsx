type RevealVariant = 'rise' | 'left' | 'right' | 'drift';

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  stage?: 'default' | 'v1' | 'v2';
  variant?: RevealVariant;
};

export default function RevealSection({
  children,
  className,
}: RevealSectionProps) {
  return (
    <div className={className ? `animate-fade-in ${className}` : 'animate-fade-in'}>
      {children}
    </div>
  );
}
