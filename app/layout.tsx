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
    'Theju is a full stack developer with experience in building web applications using modern technologies.',
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
      <body className='min-h-full flex flex-col'>
        {children}
      </body>
    </html>
  )
}
