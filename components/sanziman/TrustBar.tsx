import { Star, ShieldCheck, Wrench } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: <Star className="w-4 h-4 text-status-warning-text shrink-0" strokeWidth={2.5} fill="currentColor" />,
    value: '4.6 / 5',
    label: '34 Google yorumu',
    href: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x14cac7b365ec8c55:0xa8fb4d7f23fb1929',
  },
  {
    icon: <Wrench className="w-4 h-4 text-accent shrink-0" strokeWidth={2.5} />,
    value: '1.500+',
    label: 'tamamlanan onarım',
    href: null,
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-status-success-label shrink-0" strokeWidth={2.5} />,
    value: '6 ay',
    label: 'işçilik garantisi',
    href: null,
  },
];

export default function TrustBar() {
  return (
    <div className="card-surface p-4 flex flex-col gap-3">
      {TRUST_ITEMS.map((item) => {
        const content = (
          <div className="flex items-center gap-3">
            {item.icon}
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-fg leading-none">{item.value}</span>
              <span className="text-xs text-fg-soft leading-none">{item.label}</span>
            </div>
          </div>
        );

        return item.href ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            {content}
          </a>
        ) : (
          <div key={item.label}>{content}</div>
        );
      })}
    </div>
  );
}
