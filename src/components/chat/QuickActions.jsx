import { quickActions } from '../../data/chatbot'

export default function QuickActions({ onSelect, disabled }) {
  return (
    <div className="flex flex-wrap gap-2 px-4 pb-3">
      {quickActions.map((action) => (
        <button
          key={action.label}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(action.text)}
          className="rounded-full border border-neutral-700 px-3.5 py-1.5 text-xs text-neutral-200 transition-colors hover:border-amber-400 hover:text-amber-400 disabled:opacity-50"
        >
          {action.label}
        </button>
      ))}
    </div>
  )
}
