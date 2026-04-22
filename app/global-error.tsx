'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[GlobalError]', error);
  }, [error]);

  return (
    <html lang="tr">
      <body
        style={{
          backgroundColor: '#0a0a0a',
          color: '#f5f5f5',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
        }}
      >
        <div style={{ maxWidth: '36rem', width: '100%' }}>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: '#c5a572',
            }}
          >
            Uygulama Hatası
          </div>
          <h1
            style={{
              marginTop: '1rem',
              fontSize: '2rem',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            Beklenmedik bir sorun oluştu
          </h1>
          <p style={{ marginTop: '1rem', color: '#a3a3a3', lineHeight: 1.6 }}>
            Uygulama yüklenirken ciddi bir hata meydana geldi. Sayfayı yenileyin
            veya doğrudan bize ulaşın — 0532 715 37 51.
          </p>

          {error.digest ? (
            <p
              style={{
                marginTop: '1.5rem',
                fontSize: '11px',
                fontFamily: 'ui-monospace, monospace',
                color: '#737373',
              }}
            >
              Referans: {error.digest}
            </p>
          ) : null}

          <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                border: 'none',
                borderRadius: '999px',
                padding: '0.75rem 1.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                backgroundColor: '#c5a572',
                color: '#0a0a0a',
                cursor: 'pointer',
              }}
            >
              Tekrar Dene
            </button>
            <a
              href="tel:+905327153751"
              style={{
                borderRadius: '999px',
                padding: '0.75rem 1.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#c5a572',
                textDecoration: 'none',
              }}
            >
              0532 715 37 51
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
