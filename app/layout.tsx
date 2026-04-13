import type { Metadata, Viewport } from "next";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { Archivo, IBM_Plex_Sans, Geist, Geist_Mono, Saira_Semi_Condensed, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import MobileCtaBar from "@/components/MobileCtaBar";
import FloatingCTA from "@/components/FloatingCTA";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const geistSans = Geist({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

const sairaSemiCondensed = Saira_Semi_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "500", "600", "700", "800"],
  variable: "--font-saira",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: '#0C0E12',
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Eren Servis | Bostancı Otomatik Şanzıman Servisi",
  description:
    "Bostancı'da DSG, ZF, CVT ve konvansiyonel otomatik şanzıman tamiri, bakımı ve revizyonu. 15 yılı aşkın deneyim, orijinal parça, 2 yıl garanti.",
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
    canonical: "https://erenservis.net",
  },
  openGraph: {
    title: "Eren Servis | Bostancı Otomatik Şanzıman Servisi",
    description:
      "Bostancı'da DSG, ZF ve CVT otomatik şanzıman tamiri. 15+ yıl deneyim, garantili servis.",
    url: "https://erenservis.net",
    siteName: "Eren Servis",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eren Servis | Bostancı Otomatik Şanzıman Servisi",
    description:
      "Bostancı'da DSG, ZF ve CVT otomatik şanzıman tamiri. 15+ yıl deneyim, garantili servis.",
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

const localBusinessSchema = buildLocalBusinessSchema({ url: "https://erenservis.net" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <html
      lang="tr"
      className={`${archivo.variable} ${ibmPlexSans.variable} ${geistSans.variable} ${geistMono.variable} ${sairaSemiCondensed.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
    >
      <body className="font-sans antialiased pb-16 md:pb-0">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <MobileCtaBar />
        <FloatingCTA />
      </body>
    </html>
  );
}
