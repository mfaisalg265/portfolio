import { faq, contactMessage } from '../data/chatbot.js'

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

function keywordMatches(text, keyword, exact) {
  // Phrases ("tech stack") are plain substring matches.
  if (keyword.includes(' ')) return text.includes(keyword)
  // Single words match from a word boundary, so "project" matches "projects"
  // but "hi" (exact) never matches inside "this".
  const pattern = exact ? `\\b${escapeRegex(keyword)}\\b` : `\\b${escapeRegex(keyword)}`
  return new RegExp(pattern).test(text)
}

/**
 * Rule-based reply used when the AI backend can't answer.
 * Returns the first FAQ answer whose keywords appear in the message, or
 * the contact details if nothing matches.
 */
export function matchFaq(message) {
  const text = message.toLowerCase()

  for (const entry of faq) {
    if (entry.keywords.some((kw) => keywordMatches(text, kw, entry.exact))) {
      return entry.answer
    }
  }

  return `I'm not sure about that one, but Muhammad can help directly.\n\n${contactMessage}`
}
