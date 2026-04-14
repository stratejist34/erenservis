import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'whatsapp' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-brass-bright
    text-graphite-base
    font-saira
    font-semibold
    hover:bg-brass
  `,
  whatsapp: `
    bg-[#25D366]
    text-white
    font-saira
    font-semibold
    hover:bg-[#1DAD55]
  `,
  outline: `
    bg-transparent
    border border-border-subtle
    text-text-secondary
    font-saira
    font-medium
    hover:border-brass
    hover:text-brass
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
          px-6 py-3 rounded-full
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
