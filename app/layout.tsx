import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL = 'https://martin1casino.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    'Martin Casino официальный сайт — играть онлайн в слоты, рулетку и карточные игры',
  description:
    'Martin Casino — официальный сайт и рабочее зеркало. Узнайте, как играть онлайн в слоты и рулетку, пройти регистрацию и найти актуальное зеркало Мартин Казино.',
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      'Martin Casino официальный сайт — играть онлайн в слоты, рулетку и карточные игры',
    description:
      'Martin Casino — официальный сайт и рабочее зеркало. Узнайте, как играть онлайн в слоты и рулетку, пройти регистрацию и найти актуальное зеркало Мартин Казино.',
    url: `${SITE_URL}/`,
    siteName: 'Martin Casino',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/hero.jpg`,
        width: 1200,
        height: 800,
        alt: 'Martin Casino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Martin Casino официальный сайт — играть онлайн в слоты, рулетку и карточные игры',
    description:
      'Martin Casino — официальный сайт и рабочее зеркало. Узнайте, как играть онлайн в слоты и рулетку, пройти регистрацию и найти актуальное зеркало Мартин Казино.',
    images: [`${SITE_URL}/images/hero.jpg`],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b2b22',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="yandex-verification" content="189288fa37703d70" />
        {/* Дополнительные пользовательские теги можно добавлять сюда */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
