import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import LenisProvider from '@/components/providers/lenis-provider';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage-grotesque',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#34518d' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2a44' },
  ],
};

export const metadata: Metadata = {
  title: {
    template: '%s | Bytes & Builds',
    default: 'Bytes & Builds - Desarrollo Web y Automatización Empresarial',
  },
  description:
    'Bytes & Builds especialista en desarrollo web y automatización de procesos empresariales para PyMEs. Soluciones tecnológicas profesionales en Bogotá, Colombia.',
  keywords: [
    'desarrollo web',
    'automatización empresarial',
    'PyMEs',
    'Bogotá',
    'Colombia',
    'sistemas personalizados',
    'integración de sistemas',
    'Next.js',
    'React',
  ],
  authors: [{ name: 'Bytes & Builds' }],
  creator: 'Bytes & Builds',
  publisher: 'Bytes & Builds',
  metadataBase: new URL('https://bytesandbuilds.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://bytesandbuilds.com',
    siteName: 'Bytes & Builds',
    title: 'Bytes & Builds - Desarrollo Web y Automatización Empresarial',
    description:
      'Especialistas en desarrollo web y automatización de procesos empresariales para PyMEs en Bogotá, Colombia.',
    images: [
      {
        url: '/logos/bytes-builds-logo.png',
        width: 1200,
        height: 630,
        alt: 'Bytes & Builds Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bytes & Builds - Desarrollo Web y Automatización',
    description:
      'Especialistas en desarrollo web y automatización empresarial para PyMEs',
    images: ['/logos/bytes-builds-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      {
        url: '/favicons.ico/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicons.ico/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    apple: [
      { url: '/favicons.ico/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/favicons.ico/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/favicons.ico/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/favicons.ico/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/favicons.ico/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/favicons.ico/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/favicons.ico/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/favicons.ico/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/favicons.ico/apple-icon-180x180.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/favicons.ico/android-icon-192x192.png',
        sizes: '192x192',
      },
    ],
  },
  manifest: '/favicons.ico/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/favicons.ico/manifest.json" />
        <meta
          name="msapplication-config"
          content="/favicons.ico/browserconfig.xml"
        />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${bricolageGrotesque.variable} font-sans antialiased`}
      >
        {/* Skip link for keyboard navigation - WCAG AA requirement */}
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
