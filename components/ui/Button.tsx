import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'whatsapp' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-accent
    text-white
    hover:shadow-glow
    border border-accent-400/20
  `,
  whatsapp: `
    bg-whatsapp
    text-white
    hover:bg-whatsapp-hi
    hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]
  `,
  outline: `
    bg-transparent
    border border-dark-300
    text-text-secondary
    hover:border-accent-500/50
    hover:text-accent-500
  `,
};

export function Button({
  variant = 'primary',
  children,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        `
          px-6 py-3 rounded-lg font-medium
          active:scale-[0.98]
          transition-all duration-200
        `,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
