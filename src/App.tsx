import { useState, useEffect, lazy, Suspense } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { FaArrowUp } from 'react-icons/fa'
import { CircularProgress, Box } from '@mui/material'

const About = lazy(() => import('./pages/About/About').then(module => ({ default: module.About })))
const Skills = lazy(() => import('./pages/Skills/Skills').then(module => ({ default: module.Skills })))
const Project = lazy(() => import('./pages/Projects/Projects').then(module => ({ default: module.Project })))
const MediumArticles = lazy(() => import('./pages/Articles/Articles').then(module => ({ default: module.MediumArticles })))
const Experience = lazy(() => import('./pages/Experience/Experience').then(module => ({ default: module.Experience })))
const Contact = lazy(() => import('./pages/Contact/Contact').then(module => ({ default: module.Contact })))
const Services = lazy(() => import('./pages/Services/Services').then(module => ({ default: module.Services })))

const LoadingFallback = () => (
  <Box sx={{ 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  }}>
    <CircularProgress sx={{ color: '#ffc86b' }} />
  </Box>
)

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
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        </section>
        <section id="services" style={{ minHeight: '100vh', padding: '50px' }}>
          <Suspense fallback={<LoadingFallback />}>
            <Services />
          </Suspense>
        </section>
        <section id="skills" style={{ minHeight: '100vh', padding: '50px' }}>
          <Suspense fallback={<LoadingFallback />}>
            <Skills />
          </Suspense>
        </section>
        <section id="portfolio" style={{ minHeight: '100vh', padding: '50px' }}>
          <Suspense fallback={<LoadingFallback />}>
            <Project />
          </Suspense>
        </section>
        <section id="articles" style={{ minHeight: '100vh', padding: '50px' }}>
          <Suspense fallback={<LoadingFallback />}>
            <MediumArticles />
          </Suspense>
        </section>
        <section
          id="experience"
          style={{ minHeight: '100vh', padding: '50px' }}
        >
          <Suspense fallback={<LoadingFallback />}>
            <Experience />
          </Suspense>
        </section>
        <section id="contact" style={{ padding: '50px' }}>
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
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
