import { Zap, AlertTriangle, Clock3, ShieldCheck } from 'lucide-react';
import type { PostServiceBlock } from '@/lib/post-service-blocks';

interface Props {
  block: PostServiceBlock;
}

export default function PostServiceBlock({ block }: Props) {
  return (
    <section className="bg-graphite-surface border-y border-border-hairline">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid gap-4 sm:grid-cols-2">

          {/* Belirtiler */}
          <div className="rounded-xl bg-graphite-base border border-border-hairline p-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brass/10">
                <Zap className="h-4 w-4 text-brass" />
              </span>
              <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.18em]">
                Belirtiler
              </span>
            </div>
            <ul className="space-y-2">
              {block.symptoms.map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass/60" />
                  <span className="font-saira text-sm text-text-secondary leading-snug">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gecikme Riskleri */}
          <div className="rounded-xl bg-graphite-base border border-border-hairline p-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
                <AlertTriangle className="h-4 w-4 text-red-400" />
              </span>
              <span className="font-jetbrains text-[10px] font-semibold text-red-400 uppercase tracking-[0.18em]">
                Gecikme Riskleri
              </span>
            </div>
            <ul className="space-y-2">
              {block.risks.map((r) => (
                <li key={r} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/60" />
                  <span className="font-saira text-sm text-text-secondary leading-snug">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Çözüm Süresi */}
          <div className="rounded-xl bg-graphite-base border border-border-hairline p-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                <Clock3 className="h-4 w-4 text-blue-400" />
              </span>
              <span className="font-jetbrains text-[10px] font-semibold text-blue-400 uppercase tracking-[0.18em]">
                Çözüm Süresi
              </span>
            </div>
            <p className="font-saira text-xl font-semibold text-text-primary">{block.duration}</p>
            {block.priceRange && (
              <p className="font-saira text-sm text-text-secondary mt-1.5">
                Fiyat aralığı: <span className="text-brass font-medium">{block.priceRange.label}</span>
              </p>
            )}
          </div>

          {/* Garanti */}
          <div className="rounded-xl bg-graphite-base border border-border-hairline p-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10">
                <ShieldCheck className="h-4 w-4 text-green-400" />
              </span>
              <span className="font-jetbrains text-[10px] font-semibold text-green-400 uppercase tracking-[0.18em]">
                Parça & Garanti
              </span>
            </div>
            <p className="font-saira text-sm text-text-secondary leading-relaxed">{block.warranty}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
