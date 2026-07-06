// Central source of truth for everything shown on the site.
// Editing copy, links, skills or projects should only require changes here.

export const profile = {
  name: 'Emmanuel Amarame',
  shortName: 'EA.',
  role: 'Software Developer & Recent Graduate',
  greeting: "Hello, I'm",
  tagline:
    'I specialize in building exceptional digital experiences. Eager to bring ' +
    'fresh perspectives and innovative solutions to the tech industry.',
  email: 'emmanuelamarame@gmail.com',
  github: 'https://github.com/Amarame-Emmanuel',
  linkedin: 'https://www.linkedin.com/in/emmanuel-amarame',
  bio: [
    'I am Emmanuel Amarame, a passionate Software Developer and recent graduate. ' +
      'My journey in technology has equipped me with a strong foundation in various ' +
      'programming languages and frameworks, allowing me to build comprehensive and ' +
      'scalable solutions.',
    "Whether it's crafting responsive front-end interfaces, developing robust back-end " +
      'systems, or diving into complex data structures, I approach every project with ' +
      'enthusiasm and a problem-solving mindset. I am constantly eager to learn new ' +
      'technologies and apply them to real-world challenges.',
  ],
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

// `icon` keys map to the icon components in SocialLinks.jsx.
export const socials = [
  { label: 'GitHub', href: profile.github, icon: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
];

// `icon` keys map to lucide-react components in About.jsx.
export const skills = [
  { name: 'Frontend', icon: 'Layout', desc: 'React, JavaScript, HTML/CSS' },
  { name: 'Backend', icon: 'Server', desc: 'Node.js, Python, C++' },
  { name: 'Database', icon: 'Database', desc: 'SQL, NoSQL Databases' },
  { name: 'Other', icon: 'Code', desc: 'Git, C, Data Structures' },
];

export const projects = [
  {
    title: 'EduBridge Ecosystem',
    description:
      'A modular educational platform designed to bridge learning gaps through ' +
      'personalized content delivery. Built with a scalable Python backend featuring ' +
      'structured data pipelines and clean API design.',
    tech: ['Python', 'API Design', 'Education Tech'],
    github: 'https://github.com/Amarame-Emmanuel/edubridge_ecosystem',
    live: null,
  },
  {
    title: 'Full-Stack Web Deployment',
    description:
      'End-to-end full-stack web application with CI/CD pipeline, deployed on Vercel. ' +
      'Features a responsive UI, RESTful architecture, and automated deployment workflows ' +
      'for seamless delivery.',
    tech: ['JavaScript', 'Vercel', 'CI/CD', 'REST API'],
    github: 'https://github.com/Amarame-Emmanuel/CSC-419_DEPLOYMENT',
    live: 'https://csc-419-deployment-beige.vercel.app',
  },
  {
    title: 'HCI User Research App',
    description:
      'A human-computer interaction research application exploring usability principles, ' +
      'user-centered design patterns, and accessibility best practices. Built with ' +
      'TypeScript for type-safe, maintainable code.',
    tech: ['TypeScript', 'UX Research', 'Accessibility'],
    github: 'https://github.com/Amarame-Emmanuel/HCI-assignment',
    live: null,
  },
  {
    title: 'Innovation Platform',
    description:
      'A collaborative innovation and ideation platform built with TypeScript. ' +
      'Features structured workflows for brainstorming, project tracking, and ' +
      'team collaboration with a modern component architecture.',
    tech: ['TypeScript', 'React', 'Collaboration'],
    github: 'https://github.com/Amarame-Emmanuel/Innovation',
    live: null,
  },
  {
    title: 'Personal Website v1',
    description:
      'A responsive personal website showcasing custom CSS animations, modern layout ' +
      'techniques, and interactive UI components. Demonstrates strong front-end ' +
      'fundamentals and attention to visual design.',
    tech: ['CSS', 'HTML', 'JavaScript', 'Responsive'],
    github: 'https://github.com/Amarame-Emmanuel/Personal',
    live: null,
  },
  {
    title: 'Portfolio — React + Vite',
    description:
      'A previous iteration of my developer portfolio built with React and Vite. ' +
      'Features smooth scroll navigation, animated section reveals, and a fully ' +
      'responsive design deployed on Vercel.',
    tech: ['React', 'JavaScript', 'Vite', 'Vercel'],
    github: 'https://github.com/Amarame-Emmanuel/my-portfolio',
    live: 'https://my-portfolio-jet-rho-13.vercel.app',
  },
];
