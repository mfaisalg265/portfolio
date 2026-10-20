import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import TechStack from './components/sections/TechStack'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import ServicesMarquee from './components/sections/ServicesMarquee'
import About from './components/sections/About'
import Reviews from './components/sections/Reviews'
import Contact from './components/sections/Contact'
import ChatWidget from './components/chat/ChatWidget'

export default function App() {
  return (
    <div className="bg-neutral-950 font-sans text-neutral-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Projects />
        <ServicesMarquee />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
