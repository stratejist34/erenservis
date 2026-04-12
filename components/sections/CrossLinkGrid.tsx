import Link from 'next/link';
import Image from 'next/image';

export interface CrossLinkItem {
  href: string;
  label: string;
  sublabel?: string;
  logo?: { src: string; width: number; height: number };
}

interface CrossLinkGridProps {
  title: string;
  items: CrossLinkItem[];
  variant?: 'brand' | 'transmission';
  viewAllHref?: string;
  viewAllLabel?: string;
}

export default function CrossLinkGrid({
  title,
  items,
  viewAllHref,
  viewAllLabel = 'Tümünü Gör',
}: CrossLinkGridProps) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
      <h2 className="text-xl font-semibold tracking-[-0.03em] text-[#F0F4F8] mb-5">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col gap-2 p-4 rounded-2xl border border-white/8 bg-[#0C1219] hover:border-[#38BDF8]/30 hover:bg-[#0F1923] transition-all"
          >
            {item.logo && (
              <Image
                src={item.logo.src}
                width={item.logo.width}
                height={item.logo.height}
                alt={item.label}
                className="h-7 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity"
              />
            )}
            <span className="text-sm font-medium text-[#F0F4F8]">{item.label}</span>
            {item.sublabel && (
              <span className="text-xs text-[#64748B]">{item.sublabel}</span>
            )}
          </Link>
        ))}
      </div>
      {viewAllHref && (
        <div className="mt-4">
          <Link href={viewAllHref} className="text-sm text-[#38BDF8] hover:underline">
            {viewAllLabel} →
          </Link>
        </div>
      )}
    </section>
  );
}
