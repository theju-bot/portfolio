import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Theju | Full Stack Developer',
  description:
    'Self-taught full stack developer from Sri Lanka. Building production-ready web apps with Next.js, React, Node.js, Express.js, and MongoDB.',
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  keywords: [
    'Full Stack Developer',
    'Next.js',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Remote Developer',
    'Sri Lanka',
  ],
  authors: [{ name: 'Theju', url: 'https://github.com/theju-bot' }],
  openGraph: {
    title: 'Theju | Full Stack Developer',
    description:
      'Self-taught full stack developer from Sri Lanka. Building production-ready web apps with Next.js, React, Node.js, Express.js, and MongoDB.',
    url: 'https://portfolio-tawny-delta-z8wf8ckdu4.vercel.app/',
    siteName: 'Theju Portfolio',
    images: [
      {
        url: '/og/og.webp',
        width: 1200,
        height: 630,
        alt: 'Theju | Full Stack Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Theju | Full Stack Developer',
    description:
      'Self-taught full stack developer from Sri Lanka. Building production-ready web apps with Next.js, React, Node.js, Express.js, and MongoDB.',
    images: ['/og/og.webp'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  )
}
