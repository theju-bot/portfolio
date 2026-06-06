import Image from 'next/image'
import Link from 'next/link'

export default function Card({
  cardTitle,
  description,
  imgSrc,
  gitLink,
  demoLink,
}: {
  cardTitle: string
  description: string
  imgSrc: string
  gitLink: string
  demoLink?: string
}) {
  return (
    <div className='flex flex-col rounded-2xl overflow-hidden border border-border bg-surface w-72 hover:border-border-hover'>
      
      <div className='w-full h-44 relative'>
        <Image
          src={imgSrc}
          alt={cardTitle}
          fill
          className='object-cover'
        />
      </div>

      <div className='flex flex-col gap-3 p-5 flex-1'>
        <h3 className='font-bold text-lg text-text'>
          {cardTitle}
        </h3>
        <p className='text-sm text-muted line-clamp-3 leading-relaxed'>
          {description}
        </p>
      </div>

      <div className='flex gap-2 px-5 pb-5'>
        <Link
          href={gitLink}
          target='_blank'
          className='flex-1 text-center text-sm font-mono py-2 rounded-lg border border-border text-text hover:border-accent hover:text-accent transition-all duration-200'
        >
          Git Repo
        </Link>
        
        {demoLink && (
          <Link
            href={demoLink}
            target='_blank'
            className='flex-1 text-center text-sm font-mono py-2 rounded-lg bg-accent text-bg font-bold hover:bg-accent-dim transition-all duration-200'
          >
            Live Demo
          </Link>
        )}
      </div>

    </div>
  )
}