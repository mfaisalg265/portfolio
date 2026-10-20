import Marquee from '../ui/Marquee'
import { services } from '../../data/services'

export default function ServicesMarquee() {
  return (
    <section aria-label="Services">
      <Marquee items={services} />
    </section>
  )
}
