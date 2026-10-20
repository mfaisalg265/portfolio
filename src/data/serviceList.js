// The services shown in the Services section. This list also feeds the marquee
// strip (`short`) and the chatbot's "services" answer.
// If you edit it, update the "Services Muhammad offers" block in
// server/index.js (SYSTEM_PROMPT) so the AI chatbot says the same thing.
// Keep each `includes` point to something you are comfortable delivering.
export const serviceList = [
  {
    title: 'Custom Full-Stack Web Apps',
    short: 'CUSTOM WEB APPLICATIONS',
    description:
      'Complete MERN stack applications built around your idea, from the database to the interface.',
    includes: [
      'Responsive React frontend',
      'Node.js and Express backend',
      'MongoDB database and user login',
      'Deployed and ready to use',
    ],
  },
  {
    title: 'E-Commerce Websites',
    short: 'E-COMMERCE WEBSITES',
    description:
      'Online stores where customers can browse, sign up and order, with an admin side to manage the shop.',
    includes: [
      'Product pages and shopping cart',
      'Registration, login and password reset',
      'Admin-only access for store management',
      'Fast, mobile-friendly interface',
    ],
  },
  {
    title: 'REST API & Backend Development',
    short: 'REST API DEVELOPMENT',
    description: 'Clean, secure Express APIs that your frontend or app can rely on.',
    includes: [
      'Express routes and MongoDB schemas',
      'JWT authentication and protected routes',
      'Tested with Postman',
      'Can connect to an existing frontend',
    ],
  },
  {
    title: 'Portfolio, Business & Landing Pages',
    short: 'BUSINESS & PORTFOLIO WEBSITES',
    description: 'Fast, responsive websites that present you or your business professionally.',
    includes: [
      'Modern React and Tailwind design',
      'Works on phones, tablets and desktops',
      'Contact form with WhatsApp and email links',
      'Smooth scroll animations',
    ],
  },
  {
    title: 'AI Chatbot Integration',
    short: 'AI CHATBOT INTEGRATION',
    description:
      'A chat assistant on your website that answers visitor questions, like the one on this page.',
    includes: [
      'Chat widget styled to match your site',
      'AI replies through a secure server-side API',
      'Fallback answers if the AI is unavailable',
      'Answers based on your business information',
    ],
  },
  {
    title: 'Bug Fixing & Deployment Help',
    short: 'BUG FIXING & DEPLOYMENT',
    description: 'Get your existing MERN project working properly and live on the internet.',
    includes: [
      'CORS, authentication and API errors',
      'Broken features in React or Node apps',
      'Deployment to Vercel and similar platforms',
      'A clear explanation of what was wrong',
    ],
  },
]
