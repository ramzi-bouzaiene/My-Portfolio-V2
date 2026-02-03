import { useState, useEffect } from 'react'
import { About } from './pages/About/About'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { Skills } from './pages/Skills/Skills'
import { Project } from './pages/Projects/Projects'
import { Experience } from './pages/Experience/Experience'
import { Contact } from './pages/Contact/Contact'
import { Services } from './pages/Services/Services'
import { FaArrowUp } from 'react-icons/fa'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <Navbar /> <Home />
      <div>
        <section id="about" style={{ minHeight: '100vh', padding: '50px' }}>
          <About />
        </section>
        <section id="services" style={{ minHeight: '100vh', padding: '50px' }}>
          <Services />
        </section>
        <section id="skills" style={{ minHeight: '100vh', padding: '50px' }}>
          <Skills />
        </section>
        <section id="portfolio" style={{ minHeight: '100vh', padding: '50px' }}>
          <Project />
        </section>
        <section
          id="experience"
          style={{ minHeight: '100vh', padding: '50px' }}
        >
          <Experience />
        </section>
        <section id="contact" style={{ padding: '50px' }}>
          <Contact />
        </section>
      </div>
      <button
        onClick={scrollToTop}
        className="scrollBtn"
        style={{
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease'
        }}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </>
  )
}

export default App
