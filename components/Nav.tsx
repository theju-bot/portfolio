'use client'

import Link from 'next/link'
import { useState } from 'react'

const LINKS = ['About', 'Projects', 'Skills', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 px-10 lg:px-50 bg-bg/50 backdrop-blur-lg'>
      <div className='flex items-center justify-between py-6'>
        <Link
          href='/'
          className='font-mono text-sm font-bold text-accent hover:text-accent-dim transition-colors duration-200'
        >
          TJ.
        </Link>

        <div className='hidden md:flex items-center gap-8'>
          {LINKS.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className='font-mono text-xs text-muted hover:text-text transition-colors duration-200'
            >
              {link}
            </Link>
          ))}
        </div>

        <button
          className='md:hidden flex flex-col gap-1.5 cursor-pointer'
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'
        >
          <span
            className={`block w-5 h-px bg-text transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-text transition-all duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-text transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden flex flex-col items-center transition-all duration-300 overflow-hidden ${
          open
            ? 'max-h-64 opacity-100 gap-6 pb-6'
            : 'max-h-0 opacity-0 gap-0 pb-0'
        }`}
      >
        {LINKS.map((link) => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className='font-mono text-sm text-muted hover:text-text transition-colors duration-200'
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  )
}
