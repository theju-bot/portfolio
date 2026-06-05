// 'use client'

// import Image from 'next/image'
// import { useInView } from '@/hooks/useInView'

// export default function About() {
//   const { ref, inView } = useInView()

//   return (
//     <section className='min-h-screen flex items-center px-10 lg:px-24 py-24'>
//       <div
//         ref={ref}
//         className={`flex flex-col md:flex-row items-center gap-16 w-full transition-all duration-1000 ${
//           inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}
//       >
//         <div className='flex flex-col md:flex-row items-center gap-16 w-full'>
//           <div className='w-full md:w-2/5 flex justify-center'>
//             <Image
//               src='/about.webp'
//               alt='About'
//               width={400}
//               height={500}
//               className='w-64 md:w-full max-w-sm rounded-full object-cover'
//             />
//           </div>

//           <div className='w-full md:w-3/5'>
//             <h2 className='text-4xl font-bold mb-8'>Who is Theju?</h2>
//             <p className='text-lg lg:text-2xl leading-relaxed text-muted'>
//               I'm Theju. A self-taught full stack developer from Sri Lanka. I
//               build and ship production-ready web apps using React, Next.js,
//               Node.js, and MongoDB. No bootcamp, no degree. Just consistent
//               work, real projects, and a GitHub history that shows it. I'm
//               looking for remote developer roles where I can contribute from day
//               one.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

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
              React, Next.js, Node.js, and MongoDB
            </span>{' '}
            — working across both frontend and backend stacks.
          </p>
          <p>
            My key areas include building{' '}
            <span className='text-accent italic'>
              full stack web applications,
            </span>{' '}
            integrating AI features, and designing systems that scale.
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
