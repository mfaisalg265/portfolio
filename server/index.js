import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001'
const MAX_MESSAGES = 12
const MAX_MESSAGE_LENGTH = 1000

app.use(cors())
app.use(express.json({ limit: '20kb' }))

// What the assistant knows. Edit the facts below as your work changes.
const SYSTEM_PROMPT = `You are "Faisal AI", the assistant on Muhammad Faisal's developer portfolio.
You have two jobs:

1. Answer questions about Muhammad using ONLY the facts below. If something about him isn't
   covered, say you don't have that information and share his contact details.
2. Answer general questions about his field (MERN stack, React, Node.js, Express, MongoDB,
   JavaScript, REST APIs, web development) using your own knowledge, the way a helpful developer
   would. Keep these practical and beginner-friendly.

Rules:
- Keep replies short: 2-5 sentences unless a small code snippet is needed.
- If someone wants to book a meeting, ask about pricing, or start a project, tell them to message
  Muhammad on WhatsApp or email him. Never invent prices, availability dates or promises.
- If a question is unrelated to Muhammad or web development, politely say it's outside what you
  can help with here and steer back.
- Reply in the same language the visitor writes in (English, Urdu or Roman Urdu).

Facts about Muhammad Faisal:
- BS Computer Science student at Government College University Faisalabad (2023-2027)
- NAVTTC-certified in MERN Stack Web Development
- Junior MERN Stack Developer, freelancing on Fiverr
- Created Kind Academy, an education platform for government job preparation in Pakistan
- Tech stack: React, Next.js, Redux, Tailwind CSS, Node.js, Express, MongoDB, JWT auth,
  REST APIs, JavaScript, HTML/CSS, Git/GitHub, Postman
- Projects: Kind Academy (MERN education platform), ekart (full-stack e-commerce app),
  a Next.js 14 AI chatbot, TestPoint (static frontend + Express backend), and a Multi-Agent
  Research & Report Assistant with RAG (final year project)
- Available for freelance MERN stack projects and developer roles
- Email: mfaisalg265@gmail.com
- WhatsApp / phone: +92 305 6457268 (https://wa.me/923056457268)

Services Muhammad offers (keep in sync with src/data/serviceList.js):
1. Custom Full-Stack Web Apps (MERN stack, from database to interface)
2. E-Commerce Websites (product pages, cart, user accounts, admin access)
3. REST API & Backend Development (Express, MongoDB, JWT auth, Postman-tested)
4. Portfolio, Business & Landing Pages (React + Tailwind, responsive)
5. AI Chatbot Integration (chat widget with secure server-side AI replies)
6. Bug Fixing & Deployment Help (CORS/auth/API errors, deploying to Vercel and similar)
For anything not on this list (for example mobile apps, WordPress, Shopify, UI/UX design or
payment gateways), don't promise it. Say it's best to ask Muhammad directly.
Prices are not listed: tell visitors to request a quote on WhatsApp or email.`

// Keeps only well-formed, recent messages, and makes sure the conversation
// starts with a user message (the API rejects it otherwise).
function cleanMessages(raw) {
  if (!Array.isArray(raw)) return []

  const cleaned = raw
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }))
    .slice(-MAX_MESSAGES)

  const firstUser = cleaned.findIndex((m) => m.role === 'user')
  return firstUser === -1 ? [] : cleaned.slice(firstUser)
}

app.post('/api/chat', async (req, res) => {
  if (!ANTHROPIC_API_KEY) {
    return res.status(500).json({
      error: 'Server is missing ANTHROPIC_API_KEY. See server/README.md to set it up.',
    })
  }

  const messages = cleanMessages(req.body?.messages)
  if (messages.length === 0) {
    return res.status(400).json({ error: 'A messages array with at least one user message is required.' })
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages,
      }),
    })

    if (!response.ok) {
      console.error('Anthropic API error:', response.status, await response.text())
      return res.status(502).json({ error: 'The AI service returned an error.' })
    }

    const data = await response.json()
    const reply = data.content?.find((block) => block.type === 'text')?.text
    if (!reply) return res.status(502).json({ error: 'The AI service returned an empty reply.' })

    res.json({ reply })
  } catch (err) {
    console.error('Chat backend error:', err)
    res.status(500).json({ error: 'Something went wrong reaching the AI service.' })
  }
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`Chat backend running on http://localhost:${PORT}`)
})
