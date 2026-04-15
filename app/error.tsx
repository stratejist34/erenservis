'use client';

import { useEffect } from 'react';
import { Phone, RotateCcw } from 'lucide-react';

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[70vh] bg-graphite-base flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
          <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
            Hata
          </span>
        </div>
        <h1 className="font-saira text-3xl font-semibold tracking-[-0.04em] text-text-primary mb-4">
          Beklenmedik Bir Hata Oluştu
        </h1>
        <p className="font-saira text-text-secondary leading-relaxed mb-10">
          Sayfa yüklenirken bir sorun oluştu. Tekrar deneyebilir
          ya da bizi doğrudan arayabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brass-bright text-graphite-base font-saira font-semibold hover:bg-brass transition-colors"
          >
            <RotateCcw className="w-5 h-5" strokeWidth={2.5} />
            Tekrar Dene
          </button>
          <a
            href={PHONE_HREF}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all"
          >
            <Phone className="w-5 h-5" strokeWidth={2} />
            {PHONE}
          </a>
        </div>
      </div>
    </main>
  );
}
