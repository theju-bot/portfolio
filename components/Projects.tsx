'use client'

import { useInView } from '@/hooks/useInView'

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section className='min-h-screen flex items-center px-10 lg:px-24 py-24'>
      <div
        ref={ref}
        className={`w-full transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      ></div>
    </section>
  )
}
