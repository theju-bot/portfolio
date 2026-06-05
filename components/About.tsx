'use client'

import { useInView } from '@/hooks/useInView'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section className='min-h-screen flex items-center px-10 lg:px-24 py-24'>
      <div
        ref={ref}
        className={`w-full transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-16 font-mono uppercase tracking-widest'>
          Let Me <span className='text-accent'>Introduce</span> Myself
        </h2>

        <div className='max-w-3xl mx-auto flex flex-col gap-6 font-mono text-lg leading-relaxed'>
          <p>
            I'm <span className='text-accent italic'>Theju</span> — a
            self-taught full stack developer from Sri Lanka.
          </p>
          <p>
            I build and ship production-ready web apps using{' '}
            <span className='text-accent italic'>
              React, Next.js, Node.js, Express.js, and MongoDB
            </span>{' '}
            — working across both frontend and backend stacks.
          </p>
          <p>
            My key areas include building{' '}
            <span className='text-accent italic'>
              full stack web applications, integrating AI features,
            </span>{' '}
            and designing systems that scale.
          </p>
          <p>
            No bootcamp, no degree. Just consistent work, real projects, and a{' '}
            <span className='text-accent italic'>GitHub history</span> that
            shows it. I'm looking for remote developer roles where I can
            contribute from day one.
          </p>
        </div>
      </div>
    </section>
  )
}
