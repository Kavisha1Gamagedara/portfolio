import type { BlogPost } from '../types';

export const blogPostsData: BlogPost[] = [
  {
    id: '1',
    title: 'Minimal design and inspiration in contemporary web interfaces',
    slug: 'minimal-design-inspiration',
    date: 'March 14, 2026',
    readTime: '5 min read',
    category: 'Design Philosophy',
    excerpt: 'Exploring how radical whitespace, intentional restraint, and deliberate typography elevate digital user experiences beyond transient aesthetic trends.',
    content: `When we remove the ornamental noise from a digital canvas, what remains must possess uncompromising integrity. Minimal design is not merely the absence of clutter; it is the deliberate presence of meaning.

In this piece, we examine how intentional typography hierarchies and architectural negative space evoke trust, reduce cognitive load, and allow core content to breathe with understated elegance.`,
    thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '2',
    title: 'Mastering micro-interactions and spring physics with Framer Motion',
    slug: 'mastering-micro-interactions',
    date: 'February 28, 2026',
    readTime: '7 min read',
    category: 'Engineering',
    excerpt: 'A practical deep dive into crafting tactile, natural-feeling UI animations using spring stiffness, damping curves, and layout projections in React.',
    content: `Users do not perceive computer screens as static pixels; their intuition expects objects on screen to obey subtle laws of mass, momentum, and friction.

By tuning spring physics—balancing stiffness, damping, and mass—we transform mechanical CSS transitions into organic interactions that feel immediate and satisfying to touch.`,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '3',
    title: 'Designing dual dark and light themes without breaking visual contrast',
    slug: 'designing-dual-dark-light-themes',
    date: 'January 19, 2026',
    readTime: '6 min read',
    category: 'UI/UX Architecture',
    excerpt: 'Why inverted hex colors fail, and how tailoring surface elevations with subtle opacities creates luxurious dark modes and crisp light modes.',
    content: `Directly inverting white to pitch black frequently results in jarring contrast ratios and eye fatigue. True dark mode requires layered elevations using muted charcoals and calibrated luminance ramps.

Here is an architectural breakdown of token systems that harmonize both dark and light modes seamlessly.`,
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '4',
    title: 'The renaissance of editorial typography in modern digital portfolios',
    slug: 'editorial-typography-modern-portfolios',
    date: 'December 08, 2025',
    readTime: '4 min read',
    category: 'Typography',
    excerpt: 'How blending modern grotesque sans-serifs with generous tracking creates distinctive portfolio identities that captivate design directors.',
    content: `Typography establishes the voice of your portfolio before a single line of text is read. Choosing balanced geometric proportions and purposeful leading communicates professionalism and refined taste.`,
    thumbnail: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
  },
];
