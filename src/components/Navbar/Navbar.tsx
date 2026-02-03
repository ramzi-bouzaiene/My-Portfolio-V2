import styles from './Navbar.module.css'
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Flag from 'react-world-flags'
import { FaLanguage } from 'react-icons/fa6'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { t } = useTranslation()
  const { i18n } = useTranslation()

  const sections = ['about', 'services', 'skills', 'portfolio', 'experience', 'contact']

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLanguage = (lng: 'en' | 'fr') => {
    i18n.changeLanguage(lng)
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div
            className={`${styles.menuIcon} ${
              isMenuOpen ? styles.closeIcon : ''
            }`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✖' : '☰'}
          </div>
          <ul
            className={`${styles.navLinks} ${
              isMenuOpen ? styles.showMenu : ''
            }`}
          >
            {sections.map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  className={`${styles.navLink} ${activeSection === section ? styles.activeLink : ''}`}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  as="a"
                  href={`#${section}`}
                  aria-label={section}
                >
                  {t(`navbar.${section}`)}
                </Link>
              </li>
            ))}
            <li className={styles.languageDropdown}>
              <FaLanguage size={33} />
              <div className={styles.flagContainer}>
                <Flag
                  code="GB"
                  alt="English"
                  style={{ width: 30, height: 30 }}
                  onClick={() => changeLanguage('en')}
                />
                <Flag
                  code="FR"
                  alt="French"
                  style={{ width: 30, height: 30 }}
                  onClick={() => changeLanguage('fr')}
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
