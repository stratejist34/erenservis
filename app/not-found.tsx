import Link from 'next/link';
import { Phone, Home } from 'lucide-react';

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-graphite-base flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
          <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
            404
          </span>
        </div>
        <h1 className="font-saira text-4xl font-semibold tracking-[-0.04em] text-text-primary mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="font-saira text-text-secondary leading-relaxed mb-10">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
          Şanzıman servisimiz için bizi arayabilir ya da anasayfaya dönebilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={PHONE_HREF}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brass-bright text-graphite-base font-saira font-semibold hover:bg-brass transition-colors"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            {PHONE}
          </a>
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all"
          >
            <Home className="w-5 h-5" strokeWidth={2} />
            Anasayfa
          </Link>
        </div>
      </div>
    </main>
  );
}
