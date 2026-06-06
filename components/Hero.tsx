import Image from 'next/image'

export default function Hero() {
  return (
    <section className='min-h-screen flex items-center'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full gap-12 px-10'>
        <div className='flex-1 px-6 md:30 lg:pl-50'>
          <p className='animate-fade-up delay-1 font-mono text-sm mb-6 ml-2 text-accent'>
            Available for remote work
          </p>

          <h1 className='text-5xl md:text-7xl lg:text-9xl font-semibold animate-fade-up delay-2 text-text tracking-tight mb-8 uppercase'>
            Thesigan
            <br />
            <span className='text-muted'>Full Stack</span>
            <br />
            Developer
          </h1>

          <p className='animate-fade-up delay-3 text-lg max-w-xl md:text-xl text-muted'>
            I build production-ready web apps with Next.js, React, Node.js,
            Express.js, and MongoDB. Self-taught, shipping real products.
          </p>
        </div>

        <div className='flex-1'>
          <Image
            src='/theju.webp'
            alt='Theju'
            width={320}
            height={320}
            className='rounded-full object-cover animate-fade-up delay-2'
          />
        </div>
      </div>
    </section>
  )
}
