import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import ChatMessage from './ChatMessage'
import QuickActions from './QuickActions'
import useChat from '../../hooks/useChat'
import { botName } from '../../data/chatbot'

export default function ChatWidget() {
  const { messages, loading, send } = useChat()
  const [open, setOpen] = useState(false)
  const [seen, setSeen] = useState(false)
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  const toggle = () => {
    setOpen((v) => !v)
    setSeen(true)
  }

  // Keep the newest message in view.
  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading, open])

  // Escape closes the window.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim() || loading) return
    send(input)
    setInput('')
  }

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        className="fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-neutral-950 shadow-lg shadow-amber-400/25 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
        {!open && !seen && (
          <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
            1
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label={`Chat with ${botName}`}
          className="animate-chat-pop fixed bottom-24 right-4 z-50 flex h-[70vh] max-h-[560px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 shadow-2xl sm:right-6"
        >
          <div className="flex items-center gap-3 border-b border-neutral-800 px-4 py-3.5">
            <img src="/images/chat-avatar.jpg" alt="" width="40" height="40" className="h-10 w-10 rounded-full object-cover" />
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-semibold text-white">{botName}</p>
              <p className="flex items-center gap-1.5 text-xs text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Online · Usually replies instantly
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} role="log" aria-live="polite" className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <ChatMessage key={i} role={m.role} content={m.content} />
            ))}
            {loading && (
              <div className="flex items-end gap-2">
                <img src="/images/chat-avatar.jpg" alt="" width="28" height="28" className="h-7 w-7 rounded-full object-cover" />
                <div className="flex gap-1 rounded-2xl rounded-bl-md bg-neutral-800 px-4 py-3.5" aria-label="Typing">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full bg-neutral-400"
                      style={{ animation: `typing-dot 1.2s ${d * 0.2}s infinite` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {messages.length <= 1 && <QuickActions onSelect={send} disabled={loading} />}

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-neutral-800 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              aria-label="Type your message"
              className="min-w-0 flex-1 rounded-full bg-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400 text-neutral-950 transition-colors hover:bg-amber-300 disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
