import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const LINKS = [
  { to: '/',            label: 'Home' },
  { to: '/about',       label: 'About' },
  { to: '/methodology', label: 'Methodology' },
  { to: '/charges',     label: 'Charges' },
  { to: '/learn',       label: 'Learn' },
  { to: '/contact',     label: 'Contact' },
]

const WA_HREF = 'https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20start%20investing%20with%20VPW%20Wealth'

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
      <nav className="navbar-inner container" aria-label="Main navigation">

        {/* Logo */}
        <Link to="/" className="navbar-logo" aria-label="VPW Wealth — Home">
          <motion.div 
            className="logo-mark" 
            aria-hidden="true"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VPW
          </motion.div>
          <div className="logo-wordmark">
            <span className="logo-name">Wealth</span>
            <span className="logo-tagline">Intelligent Wealth</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar-links" role="list">
          {LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {label}
                <AnimatePresence>
                  {location.pathname === to && (
                    <motion.div
                      layoutId="nav-dot"
                      className="nav-dot"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="navbar-actions">
          <motion.a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm"
            id="nav-invest-btn"
            aria-label="Invest Now via WhatsApp"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Invest Now
          </motion.a>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul role="list" className="mobile-list">
              {LINKS.map(({ to, label }, i) => (
                <motion.li 
                  key={to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
                  >
                    {label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: LINKS.length * 0.05 }}
              >
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-link-cta"
                  aria-label="Invest Now via WhatsApp"
                >
                  Invest Now
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

