# Gabriel Alexandroni — Portfolio

Personal portfolio built to showcase my work as a Full Stack Developer, with a secondary focus on data analytics and automation. Single-page, dark-themed, fully responsive site with static content (no backend/CMS).

[WebSite](https://gabrielalexandronidev.vercel.app)

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router) + [React](https://react.dev/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Dialog)
- **Animation:** [Motion](https://motion.dev/) (formerly Framer Motion)
- **Carousel:** [Embla Carousel](https://www.embla-carousel.com/)
- **Icons:** [Lucide](https://lucide.dev/) + custom SVGs for brand logos (GitHub, LinkedIn)
- **Deployment:** [Vercel](https://vercel.com/)

## Features

- Responsive layout for mobile, tablet, and desktop
- Sticky pill-shaped navbar with smooth-scroll anchor navigation and a mobile menu
- Animated hero section with a single orchestrated entrance sequence
- About section highlighting three core focus areas: software engineering, full stack/backend, and data & analytics
- Tech stack grouped by domain (Frontend, Backend, Data, Cloud & Dev)
- Expandable experience timeline
- Project carousel with a detail modal, including an expandable image gallery
- Services section with a short offering breakdown
- Contact section with direct links (email, GitHub, LinkedIn)
- One-click resume download from the navbar
- Respects `prefers-reduced-motion` for all animations

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Design tokens, base styles, background effects
│   ├── layout.tsx        # Root layout, fonts, metadata
│   └── page.tsx           # Page composition (section order)
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── icons.tsx          # Custom brand icons (GitHub, LinkedIn)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectModal.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   └── services.ts
└── lib/
    └── utils.ts
public/
├── icons/
├── images/
├── projects/
└── resume.pdf
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/Alexandroni07/portfolio-gabriel-alexandroni.git
cd portfolio-gabriel-alexandroni
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

## Deployment

The project is deployed on [Vercel](https://vercel.com/), with automatic production deploys on every push to `main` and preview deploys for other branches/pull requests. No environment variables are required, since the site is fully static.

## Content Updates

- **Projects:** edit `src/data/projects.ts` and add corresponding images to `public/projects/`.
- **Experience:** edit `src/data/experience.ts`.
- **Skills:** edit `src/data/skills.ts`.
- **Services:** edit `src/data/services.ts`.
- **Resume:** replace `public/resume.pdf`.

## Contact

- Email: gaalexandroni@gmail.com
- GitHub: [github.com/Alexandroni07](https://github.com/Alexandroni07)
- LinkedIn: [linkedin.com/in/gabriel-alexandroni](https://linkedin.com/in/gabriel-alexandroni)

## License

This project is personal and not licensed for reuse or redistribution.
