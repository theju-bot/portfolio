'use client'

import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/theju-bot',
    icon: FaGithub,
    value: 'github.com/theju-bot',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thesigan-yogarasa-75aba9378/',
    icon: FaLinkedin,
    value: 'thesigan-yogarasa',
  },
  {
    label: 'Email',
    href: 'mailto:thesigany@gmail.com',
    icon: MdEmail,
    value: 'thesigany@gmail.com',
  },
]

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section
      id='contact'
      className='min-h-screen flex flex-col items-center justify-between px-10 lg:px-24 py-24 pt-30'
    >
      <div
        ref={ref}
        className={`w-full max-w-2xl transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-center'>
          Let&apos;s <span className='text-accent'>Work Together</span>
        </h2>
        <p className='text-muted font-mono text-sm mb-16 text-center'>
          Open to remote junior/mid developer roles and freelance projects.
        </p>

        <div className='flex flex-col'>
          {LINKS.map(({ label, href, icon: Icon, value }) => (
            <Link
              key={label}
              href={href}
              target='_blank'
              className='group flex items-center justify-between py-6 border-t border-border hover:border-accent transition-all duration-200'
            >
              <div className='flex items-center gap-4'>
                <Icon size={20} className='text-accent' />
                <span className='font-bold text-text group-hover:text-accent transition-colors duration-200'>
                  {label}
                </span>
              </div>
              <span className='font-mono text-xs text-muted group-hover:text-accent transition-colors duration-200'>
                {value} ↗
              </span>
            </Link>
          ))}
          <div className='border-t border-border' />
        </div>
      </div>

      <p className='font-mono text-xs text-muted text-center'>
        Built with Next.js & Tailwind CSS — Theju &copy;{' '}
        {new Date().getFullYear()}
      </p>
    </section>
  )
}
