import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'
import Magnetic from '../components/Magnetic'
import './Home.css'

const WA_HREF = 'https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20start%20investing%20with%20VPW%20Wealth'

const STATS = [
  { number: '₹2,400 Cr+', label: 'Assets Under Advisory' },
  { number: '12,000+', label: 'Satisfied Investors' },
  { number: '18+ Years', label: 'Market Experience' },
  { number: '94%', label: 'Client Retention' },
]

const SERVICES = [
  {
    id: 'ai-research',
    icon: 'insights',
    title: 'AI Research Intelligence',
    desc: 'Proprietary deep learning models analysing macroeconomic shifts and sentiment to construct predictive portfolios.',
    link: '/methodology',
    linkText: 'Read the Methodology',
    className: 'service-bento-large',
  },
  {
    id: 'mutual-funds',
    icon: 'pie_chart',
    title: 'Mutual Funds',
    desc: 'Curated, high-conviction funds prioritising capital preservation.',
    link: '/learn',
    linkText: 'Explore Funds',
    className: 'service-bento-small',
  },
  {
    id: 'pms',
    icon: 'account_balance',
    title: 'Portfolio Management',
    desc: 'Direct equity portfolios managed with institutional rigour.',
    link: '/contact',
    linkText: 'Request Consultation',
    className: 'service-bento-small',
  },
  {
    id: 'whatsapp',
    icon: 'phone_android',
    title: 'WhatsApp Investing',
    desc: 'Begin your investment journey with a simple message. Our advisers guide you through onboarding.',
    link: WA_HREF,
    linkText: 'Chat to Invest',
    external: true,
    className: 'service-bento-medium',
  },
]

const FAQS = [
  { question: 'Is VPW Wealth SEBI registered?', answer: 'Yes, we are a SEBI Registered Investment Adviser (RIA). We adhere to strict fiduciary standards, putting our clients’ interests first at all times.' },
  { question: 'What is your investment philosophy?', answer: 'We believe in capital preservation first. Our AI-augmented research focuses on identifying high-conviction opportunities with manageable downside risk.' },
  { question: 'How do I start investing?', answer: 'You can begin by contacting us via WhatsApp or scheduling a consultation through our contact page. We will guide you through the risk profiling and onboarding process.' },
]

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-trigger" onClick={() => setIsOpen(!isOpen)}>
        <span className="faq-question">{question}</span>
        <span className="material-icons" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }}>
          expand_more
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="faq-content">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

export default function Home() {
  return (
    <main className="home-root">
      {/* ── Hero ── */}
      <section className="hero" aria-label="Welcome to VPW Wealth">
        <div className="hero-visual">
          <img src="/hero-bg.png" alt="" className="hero-image" />
        </div>
        <div className="container hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="material-icons" style={{ fontSize: 16, color: 'var(--secondary)' }}>verified_user</span>
            <span className="label-sm" style={{ margin: 0 }}>SEBI Registered RIA</span>
          </motion.div>

          <motion.h1
            className="display-xl hero-headline"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="accent-font gradient-text" style={{ fontSize: '1.2em' }}>Intelligent</span> <br /> Wealth
            <br />
            Built for India.
          </motion.h1>

          <motion.p
            className="body-lg hero-subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            AI-powered wealth intelligence for serious investors. Navigate complex markets with clarity and institutional rigour.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Magnetic>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Join the waiting list
                <span className="material-icons">arrow_forward</span>
              </a>
            </Magnetic>
            <Magnetic>
              <Link to="/LearnMore" className="btn-ghost">Learn more</Link>
            </Magnetic>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {STATS.map(({ number, label }) => (
              <div key={label} className="stat-item">
                <span className="stat-number">{number}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section services-section" aria-labelledby="services-heading">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <span className="label-sm">Our Expertise</span>
              <h2 id="services-heading" className="headline-lg" style={{ maxWidth: 600, marginBottom: 64 }}>
                Bespoke investment vehicles, managed with rigour.
              </h2>
            </div>
          </RevealOnScroll>

          <motion.div
            className="service-bento-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {SERVICES.map(({ icon, title, desc, link, linkText, external, className }) => (
              <motion.div key={title} variants={itemVariants} className={`service-card ${className}`}>
                <div className="service-card-accent" />
                <div className="service-icon-box">
                  <span className="material-icons" aria-hidden="true">{icon}</span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="service-link-wrapper">
                  {external ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="service-link">
                      {linkText} <span className="material-icons" style={{ fontSize: 16 }}>north_east</span>
                    </a>
                  ) : (
                    <Link to={link} className="service-link">
                      {linkText} <span className="material-icons" style={{ fontSize: 16 }}>arrow_forward</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq-section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="grid faq-grid" style={{ gap: 80 }}>
            <RevealOnScroll>
              <div className="section-header">
                <span className="label-sm">Common Questions</span>
                <h2 id="faq-heading" className="headline-lg">Everything you need to know.</h2>
              </div>
            </RevealOnScroll>
            <div className="faq-container">
              {FAQS.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <RevealOnScroll>
            <div className="cta-card glass-card" style={{ background: 'var(--primary)', color: 'white', border: 'none' }}>
              <div className="cta-content">
                <h2 className="headline-lg" style={{ color: 'white', marginBottom: 16 }}>Ready to architect your wealth?</h2>
                <p className="body-lg" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 0 }}>Join serious investors who prioritise clarity, precision, and capital preservation.</p>
              </div>
              <div className="cta-actions">
                <Magnetic>
                  <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'white', color: 'var(--primary)', boxShadow: 'none' }}>
                    Get Started Now
                  </a>
                </Magnetic>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
