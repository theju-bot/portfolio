'use client'

import { useInView } from '@/hooks/useInView'
import Card from './Card'

const CARD_DATA = [
  {
    cardTitle: 'Roadmap.sh Projects',
    description:
      'Collection of 33+ frontend and backend projects built while learning through roadmap.sh. Consistent commits throughout the journey — from basic HTML/CSS to full stack Node.js and React applications.',
    imgSrc: '/projects/roadmap.webp',
    gitLink: 'https://github.com/theju-bot',
  },
  {
    cardTitle: 'AI Job Tracker',
    description:
      'Kanban-based job application tracker with drag-and-drop, Google OAuth, JWT send using a secure cookie, and 6 AI features — cover letter, job fit analysis, cold email, follow-up, interview prep, and rejection analysis. BYOK architecture with encrypted API key storage.',
    imgSrc: '/projects/ai-job-tracker.webp',
    gitLink: 'https://github.com/theju-bot/Projects/tree/main/ai-job-tracker',
    demoLink: 'https://ai-job-tracker-lemon.vercel.app',
  },
  {
    cardTitle: 'Website Analytics Tool',
    description:
      'Self-hosted analytics platform. Embed a tracking script, get a full dashboard — page views, sessions, bounce rate, top referrers, browser and country breakdowns. MongoDB aggregation pipelines power all queries.',
    imgSrc: '/projects/website-tracker.webp',
    gitLink:
      'https://github.com/theju-bot/Projects/tree/main/website-analytics-tool',
    demoLink: 'https://web-anlytcs-tool.vercel.app',
  },
  {
    cardTitle: 'Coming soon...',
    description:
      'A Frontend Heavy Project built with Next.js, Tailwind CSS, and TypeScript. Stay tuned for the reveal!',
    imgSrc: '/projects/coming-soon.webp',
    gitLink:
      '',
    demoLink: '',
  },
]

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id='projects' className='min-h-screen flex items-center px-10 lg:px-24 py-24'>
      <div
        ref={ref}
        className={`w-full transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full`}
      >
        {CARD_DATA.map((card, i) => (
          <Card
            key={card.cardTitle}
            cardTitle={card.cardTitle}
            description={card.description}
            imgSrc={card.imgSrc}
            gitLink={card.gitLink}
            demoLink={card.demoLink}
          />
        ))}
      </div>
    </section>
  )
}
