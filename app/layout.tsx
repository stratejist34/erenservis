import type { Metadata, Viewport } from "next";
import { buildLocalBusinessSchema, buildWebSiteSchema } from "@/lib/schema";
import { Geist, Saira_Semi_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DeferredUi from '@/components/DeferredUi';

// Türkçe karakterler (ğ, ş, ç, ı, ö, ü) latin-ext subset'indedir.
// Tek subset seçimi — preload sayısını yarıya indirir.
const geistSans = Geist({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-sans",
  display: "swap",
});

const sairaSemiCondensed = Saira_Semi_Condensed({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-saira",
  display: "swap",
});

// JetBrains Mono yalnızca LiveDiagnosedFeed (dynamic ssr:false) ve küçük
// JetBrains-class'lı metadata satırlarında kullanılıyor — kritik yoldan çıkar.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: '#0C0E12',
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.erenservis.net"),
  title: "Eren Servis | Bostancı Otomatik Şanzıman Servisi",
  description:
    "Bostancı'da DSG, ZF, CVT ve konvansiyonel otomatik şanzıman tamiri, bakımı ve revizyonu. 15 yılı aşkın deneyim, orijinal parça, 6 ay garanti.",
  keywords: [
    "otomatik şanzıman tamiri bostancı",
    "dsg tamiri bostancı",
    "zf şanzıman servisi",
    "cvt şanzıman servisi",
    "şanzıman revizyonu",
    "bostancı şanzıman servisi",
    "eren servis",
  ],
  alternates: {
    canonical: "https://www.erenservis.net",
  },
  openGraph: {
    title: "Eren Servis | Bostancı Otomatik Şanzıman Servisi",
    description:
      "Bostancı'da DSG, ZF ve CVT otomatik şanzıman tamiri. 15+ yıl deneyim, garantili servis.",
    url: "https://www.erenservis.net",
    siteName: "Eren Otomatik Şanzıman Servisi",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eren Otomatik Şanzıman Servisi — Bostancı",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eren Servis | Bostancı Otomatik Şanzıman Servisi",
    description:
      "Bostancı'da DSG, ZF ve CVT otomatik şanzıman tamiri. 15+ yıl deneyim, garantili servis.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = buildLocalBusinessSchema({ url: "https://www.erenservis.net" });
const webSiteSchema = buildWebSiteSchema();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${sairaSemiCondensed.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* GTM 153 KB — lazyOnload olsa da connection'ı erken kur */}
        {GA_ID && (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          </>
        )}
      </head>
      <body className="font-sans antialiased pb-16 md:pb-0">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <DeferredUi />
        <Header />
        <div className="pt-24">
        {children}</div>
        <Footer />
      </body>
    </html>
  );
}
