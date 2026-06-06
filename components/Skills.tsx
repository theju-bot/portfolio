'use client'

import { useInView } from '@/hooks/useInView'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiZod,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiDigitalocean,
  SiNginx,
  SiArchlinux,
  SiBrave,
  SiPostman,
} from 'react-icons/si'
import { TbApi, TbChartBar } from 'react-icons/tb'
import { RiDragDropLine } from 'react-icons/ri'
import { VscVscode } from 'react-icons/vsc'

const PROFESSIONAL_SKILLS = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
  { name: 'TanStack Query', icon: TbApi, color: '#FF4154' },
  { name: 'shadcn/ui', icon: SiReact, color: '#ffffff' },
  { name: 'Recharts', icon: TbChartBar, color: '#22C55E' },
  { name: 'Zod', icon: SiZod, color: '#3E67B1' },
  { name: 'React Hook Form', icon: TbApi, color: '#EC5990' },
  { name: 'dnd-kit', icon: RiDragDropLine, color: '#ffffff' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'REST APIs', icon: TbApi, color: '#ffffff' },
  { name: 'JWT', icon: TbApi, color: '#ffffff' },
  { name: 'Better Auth', icon: TbApi, color: '#ffffff' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
]

const TOOLS = [
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
  { name: 'DigitalOcean', icon: SiDigitalocean, color: '#0080FF' },
  { name: 'PM2', icon: SiNodedotjs, color: '#339933' },
  { name: 'Nginx', icon: SiNginx, color: '#009639' },
  { name: 'Arch Linux', icon: SiArchlinux, color: '#1793D1' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
  { name: 'Brave', icon: SiBrave, color: '#FB542B' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
]

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id='skills' className='min-h-screen flex items-center px-10 lg:px-24 py-24'>
      <div
        ref={ref}
        className={`w-full transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-16'>
          Professional <span className='text-accent'>Skillset</span>
        </h2>

        <div className='flex flex-wrap justify-center gap-4 mb-20'>
          {PROFESSIONAL_SKILLS.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className='flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-surface hover:border-accent transition-all duration-200 cursor-default'
            >
              <Icon size={18} color={color} />
              <span className='font-mono text-sm text-text'>{name}</span>
            </div>
          ))}
        </div>

        <h2 className='text-4xl md:text-5xl font-bold text-center mb-16'>
          Tools <span className='text-accent'>I Use</span>
        </h2>

        <div className='flex flex-wrap justify-center gap-4'>
          {TOOLS.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className='flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-surface hover:border-accent transition-all duration-200 cursor-default'
            >
              <Icon size={18} color={color} />
              <span className='font-mono text-sm text-text'>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
