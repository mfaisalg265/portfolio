import { botName } from '../../data/chatbot'

// Makes any http(s) link in a message clickable.
function renderContent(text) {
  return text.split(/(https?:\/\/\S+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export default function ChatMessage({ role, content }) {
  if (role === 'user') {
    return (
      <div className="flex justify-end">
        <p className="max-w-[85%] whitespace-pre-line rounded-2xl rounded-br-md bg-amber-400 px-4 py-2.5 text-sm text-neutral-950">
          {content}
        </p>
      </div>
    )
  }

  return (
    <div className="flex items-end gap-2">
      <img
        src="/images/chat-avatar.jpg"
        alt={botName}
        width="28"
        height="28"
        className="h-7 w-7 shrink-0 rounded-full object-cover"
      />
      <p className="max-w-[85%] whitespace-pre-line break-words rounded-2xl rounded-bl-md bg-neutral-800 px-4 py-2.5 text-sm text-neutral-100">
        {renderContent(content)}
      </p>
    </div>
  )
}
