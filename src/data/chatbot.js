import { contact, whatsappLink } from './contact.js'
import { serviceList } from './serviceList.js'

export const botName = 'Faisal AI'

export const welcomeMessage =
  "Hi! 👋 I'm Muhammad's AI assistant. Ask me about his services, tech stack, projects, or how to get in touch. You can also book a meeting with him here. 👇"

// Buttons under the welcome message. `text` is what gets sent as the user's message.
export const quickActions = [
  { label: 'Services', text: 'What services do you offer?' },
  { label: 'Tech Stack', text: 'What is your tech stack?' },
  { label: 'Book Meeting', text: 'I want to book a meeting' },
  { label: 'Contact', text: 'How can I contact you?' },
]

export const contactMessage = [
  'You can reach Muhammad directly:',
  `📧 ${contact.email}`,
  `📱 WhatsApp: ${contact.phoneDisplay}`,
  whatsappLink,
].join('\n')

// Rule-based answers used when the AI backend is unavailable.
// First match wins, so keep more specific entries above general ones.
// `exact: true` means the keyword must match as a whole word.
export const faq = [
  {
    keywords: ['book', 'meeting', 'schedule', 'appointment', 'call'],
    answer: `Happy to set up a meeting! Message Muhammad on WhatsApp (${contact.phoneDisplay}) or email ${contact.email} with a good time, and he'll confirm.`,
  },
  {
    keywords: ['mern'],
    answer:
      "MERN stands for MongoDB, Express.js, React and Node.js — a full JavaScript stack for building web apps from database to UI. It's what Muhammad specializes in.",
  },
  {
    keywords: ['service', 'offer', 'what do you do', 'what can you build', 'build for'],
    answer: `Muhammad offers:\n${serviceList.map((s) => `• ${s.title}`).join('\n')}\n\nFor a quote, message him on WhatsApp (${contact.phoneDisplay}) or email ${contact.email}.`,
  },
  {
    keywords: ['tech stack', 'technolog', 'skill', 'tools', 'stack', 'language'],
    answer:
      'React, Next.js, Redux and Tailwind CSS on the frontend; Node.js, Express and JWT auth on the backend; MongoDB for the database; Git/GitHub and Postman for tooling.',
  },
  {
    keywords: ['kind academy'],
    answer:
      'Kind Academy is an education platform Muhammad built for government job preparation in Pakistan, using the full MERN stack. You can open it from the Projects section.',
  },
  {
    keywords: ['project', 'portfolio', 'built', 'work sample'],
    answer:
      "Muhammad has built Kind Academy (MERN education platform), ekart (full-stack e-commerce), a Next.js 14 AI chatbot, TestPoint, and a multi-agent research assistant with RAG as his final year project. See the Projects section above.",
  },
  {
    keywords: ['price', 'cost', 'rate', 'charge', 'fees', 'budget', 'quote', 'how much', 'kitna', 'kitne', 'paise'],
    answer: `Pricing depends on the scope of the project. Share your requirements on WhatsApp (${contact.phoneDisplay}) or by email (${contact.email}) and Muhammad will send a quote.`,
  },
  {
    keywords: ['freelance', 'available', 'availability', 'hire', 'hiring', 'job', 'work with'],
    answer: `Yes, Muhammad is available for freelance MERN stack projects and developer roles. Email ${contact.email} or message him on WhatsApp (${contact.phoneDisplay}).`,
  },
  {
    keywords: ['education', 'study', 'university', 'degree', 'student', 'certif'],
    answer:
      "Muhammad is a BS Computer Science student at Government College University Faisalabad (2023–2027) and holds a NAVTTC certification in MERN Stack Web Development.",
  },
  {
    keywords: ['experience', 'how long', 'years'],
    answer:
      'Muhammad is a junior MERN stack developer who freelances on Fiverr while finishing his degree, building full-stack apps end to end.',
  },
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'number', 'whatsapp', 'talk to'],
    answer: contactMessage,
  },
  {
    keywords: ['hi', 'hello', 'hey', 'salam', 'assalam', 'aoa'],
    exact: true,
    answer: 'Hey! 👋 Ask me about Muhammad\'s services, tech stack, projects, or availability.',
  },
]
