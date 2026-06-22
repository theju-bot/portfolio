# Thesigan | Full Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js 16, featuring smooth animations, a star field background, and a clean aesthetic design.

## Features

- **Interactive Star Field Background** - Animated particle system using tsparticles
- **Smooth Scroll Animations** - Custom hooks for intersection observer-based animations
- **Responsive Design** - Fully responsive across all device sizes
- **Modern Typography** - Google Fonts (Cormorant Garamond & DM Mono)
- **Clean Architecture** - Component-based structure with TypeScript
- **Performance Optimized** - Built with Next.js App Router and React 19

## Tech Stack

- **Framework**: Next.js 16.2.7 (App Router)
- **React**: 19.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: tsparticles 4.1.3
- **Fonts**: Google Fonts (Cormorant Garamond, DM Mono)

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts and StarField
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Nav.tsx             # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills section
│   ├── Contact.tsx         # Contact section
│   ├── StarField.tsx       # Star field animation
│   └── Card.tsx            # Reusable card component
├── hooks/
│   └── useInView.ts        # Custom intersection observer hook
└── public/                 # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/theju-bot/portfolio
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Customization

### Colors & Theme

Edit `app/globals.css` to customize the color scheme and theme variables.

### Content

- Update personal information in `components/Hero.tsx` and `components/About.tsx`
- Add projects in `components/Projects.tsx`
- Update skills in `components/Skills.tsx`
- Modify contact details in `components/Contact.tsx`

### Star Field Animation

Adjust the particle configuration in `components/StarField.tsx` to customize:
- Particle count
- Colors
- Animation speed
- Size ranges
- Interactivity modes

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

```bash
vercel deploy
```

Or follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other platforms.

## License

This project is open source and available under the MIT License.
