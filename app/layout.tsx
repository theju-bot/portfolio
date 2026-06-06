import type { Metadata } from 'next'
import { Syne, DM_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sans',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
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
      className={`${syne.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  )
}
