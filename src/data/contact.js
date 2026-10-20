// Single source of truth for contact details — used by the Contact section,
// the footer and the chatbot. Leave a value as '' to hide it everywhere.
export const contact = {
  name: 'Muhammad Faisal',
  email: 'mfaisalg265@gmail.com',
  phoneDisplay: '+92 305 6457268',
  whatsappNumber: '923056457268', // international format, no + or spaces
  github: 'https://github.com/mfaisalg265',
  fiverr: '', // e.g. 'https://www.fiverr.com/your_username'
  telegram: '', // e.g. 'https://t.me/your_username'
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-profile'
}

export const whatsappLink = `https://wa.me/${contact.whatsappNumber}`
