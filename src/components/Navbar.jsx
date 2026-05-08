import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const LINKS = [
  { to: '/',            label: 'Home' },
  { to: '/about',       label: 'About Us' },
  { to: '/methodology', label: 'Methodology' },
  { to: '/charges',     label: 'Charges' },
  { to: '/learn',       label: 'Learn' },
  { to: '/contact',     label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
      <nav className="navbar-inner container" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="navbar-logo" aria-label="VPW Wealth Home">
          <div className="logo-mark">VPW</div>
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
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="navbar-actions">
          <a
            href="https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20start%20investing%20with%20VPW%20Wealth"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm"
            id="nav-cta-btn"
            aria-label="Invest Now"
          >
            Invest Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul role="list">
          {LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}>
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20start%20investing%20with%20VPW%20Wealth"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-link mobile-link-wa"
            >
              WhatsApp Investing
            </a>
          </li>
          <li>
            <a
              href="https://research.vpwwealth.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-link mobile-link-gold"
            >
              Research Portal ↗
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
