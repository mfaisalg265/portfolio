import { useCallback, useRef, useState } from 'react'
import { matchFaq } from '../utils/matchFaq.js'
import { welcomeMessage } from '../data/chatbot.js'

// In dev, Vite proxies /api to the Express server in /server. In production set
// VITE_CHAT_API_URL to your deployed backend, e.g. https://my-api.onrender.com/api/chat
const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL || '/api/chat'
const TIMEOUT_MS = 10000
const MAX_HISTORY = 10

async function askBackend(messages) {
  // The API needs the conversation to start with a user message, so the
  // assistant's welcome message is not sent.
  const firstUser = messages.findIndex((m) => m.role === 'user')
  const history = messages
    .slice(firstUser)
    .slice(-MAX_HISTORY)
    .map(({ role, content }) => ({ role, content }))

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const res = await fetch(CHAT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history }),
      signal: controller.signal,
    })
    if (!res.ok) throw new Error(`Chat backend returned ${res.status}`)
    const data = await res.json()
    if (!data.reply) throw new Error('Empty reply')
    return data.reply
  } finally {
    clearTimeout(timer)
  }
}

/**
 * Chat state + sending logic. Tries the AI backend first; if it is down,
 * not configured, or out of credits, it answers from the local FAQ instead.
 */
export default function useChat() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: welcomeMessage }])
  const [loading, setLoading] = useState(false)
  const messagesRef = useRef(messages)
  const busyRef = useRef(false)

  const commit = (next) => {
    messagesRef.current = next
    setMessages(next)
  }

  const send = useCallback(async (text) => {
    const trimmed = text.trim()
    if (!trimmed || busyRef.current) return

    busyRef.current = true
    setLoading(true)

    const withUser = [...messagesRef.current, { role: 'user', content: trimmed }]
    commit(withUser)

    let reply
    try {
      reply = await askBackend(withUser)
    } catch {
      reply = matchFaq(trimmed)
    }

    commit([...withUser, { role: 'assistant', content: reply }])
    setLoading(false)
    busyRef.current = false
  }, [])

  return { messages, loading, send }
}
