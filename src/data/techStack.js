// Logos come from the devicon CDN, so there is nothing to download.
const icon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`

export const techStack = [
  { name: 'ReactJS', category: 'Frontend', logo: icon('react/react-original.svg') },
  { name: 'NextJS', category: 'Frontend', logo: icon('nextjs/nextjs-original.svg') },
  { name: 'Redux', category: 'Frontend', logo: icon('redux/redux-original.svg') },
  { name: 'NodeJS', category: 'Backend', logo: icon('nodejs/nodejs-original.svg') },
  { name: 'ExpressJS', category: 'Backend', logo: icon('express/express-original.svg') },
  { name: 'MongoDB', category: 'Database', logo: icon('mongodb/mongodb-original.svg') },
  { name: 'JavaScript', category: 'Language', logo: icon('javascript/javascript-original.svg') },
  { name: 'HTML5', category: 'Markup', logo: icon('html5/html5-original.svg') },
  { name: 'CSS3', category: 'Styling', logo: icon('css3/css3-original.svg') },
  { name: 'TailwindCSS', category: 'Styling', logo: icon('tailwindcss/tailwindcss-original.svg') },
  { name: 'Git', category: 'Tools', logo: icon('git/git-original.svg') },
  { name: 'GitHub', category: 'Tools', logo: icon('github/github-original.svg') },
  { name: 'Postman', category: 'Tools', logo: icon('postman/postman-original.svg') },
]
