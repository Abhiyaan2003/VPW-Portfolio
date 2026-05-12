import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'
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
    icon: 'insights',
    title: 'AI Research Intelligence',
    desc: 'Proprietary deep learning models analysing macroeconomic shifts, alternative data, and sentiment to construct predictive, non-correlated portfolios.',
    link: '/methodology',
    linkText: 'Read the Methodology',
  },
  {
    icon: 'pie_chart',
    title: 'Mutual Funds',
    desc: 'Curated, high-conviction funds prioritising long-term capital preservation and absolute returns over market cycles with rigorous quantitative screening.',
    link: '/learn',
    linkText: 'Explore Funds',
  },
  {
    icon: 'account_balance',
    title: 'Portfolio Management (PMS)',
    desc: 'Direct equity portfolios managed with institutional rigour. Concentrated positions in high-quality Indian businesses with structural tailwinds.',
    link: '/contact',
    linkText: 'Request Consultation',
  },
  {
    icon: 'phone_android',
    title: 'WhatsApp Investing',
    desc: 'Begin your investment journey with a simple WhatsApp message. Our advisers guide you through the entire onboarding process seamlessly.',
    link: WA_HREF,
    linkText: 'Chat to Invest',
    external: true,
  },
]

const WHY_ITEMS = [
  { num: '01', title: 'Regulated & Transparent', desc: 'SEBI registered. Complete fee transparency. No hidden charges, ever.' },
  { num: '02', title: 'AI-Augmented Research', desc: 'Proprietary models scanning 5,000+ data points per fund, per day.' },
  { num: '03', title: 'Capital Preservation First', desc: 'Downside protection is our primary mandate before upside participation.' },
  { num: '04', title: 'Aligned Incentives', desc: 'We earn when you earn. Our fee structure is built around long-term success.' },
]

const TESTIMONIALS = [
  {
    quote: 'VPW brings an unprecedented level of quantitative rigour to the Indian market. Their AI-driven models have consistently identified structural shifts before they become mainstream.',
    name: 'Rajiv Desai',
    role: 'CIO, Horizon Family Office',
  },
  {
    quote: 'The clarity and precision in their execution are unmatched. It feels less like traditional wealth management and more like partnering with a high-end technology firm.',
    name: 'Aparna Krishnan',
    role: 'Founder, TechVentures India',
  },
  {
    quote: "In a volatile macroeconomic environment, VPW's focus on capital preservation and absolute returns has been the cornerstone of our institutional portfolio.",
    name: 'Vikram Mehta',
    role: 'Director, Altus Capital',
  },
]

const FAQS = [
  {
    q: 'What is the minimum investment amount with VPW Wealth?',
    a: 'For mutual fund SIPs, you can start with as little as ₹500 per month. For our Portfolio Management Services (PMS), SEBI mandates a minimum investment of ₹50 lakhs. Contact our advisers to find the right product for your financial goals.',
  },
  {
    q: 'How can I invest through WhatsApp?',
    a: 'Simply send us a message on WhatsApp at +91 99999 99999. Our intelligent onboarding flow will guide you through KYC verification, risk profiling, and fund selection. The entire process takes less than 20 minutes.',
  },
  {
    q: 'Is VPW Wealth regulated?',
    a: "Yes. VPW Wealth Management Pvt. Ltd. is a SEBI Registered Investment Adviser. We adhere strictly to SEBI's Investment Adviser Regulations 2013 and all applicable AMFI guidelines. Mutual fund investments are subject to market risks.",
  },
  {
    q: 'What is the Research Portal and who can access it?',
    a: 'The Research Portal is an exclusive, data-rich platform providing our investors with proprietary market research, fund analytics, portfolio insights, and AI-generated market intelligence. Access is available to all registered VPW clients.',
  },
  {
    q: 'How are your fund recommendations generated?',
    a: 'Our proprietary multi-factor model combines quantitative screening (Sharpe ratio, rolling returns, consistency metrics) with qualitative analysis (fund manager track record, AMC stability, portfolio quality). All recommendations are further validated by our senior investment team.',
  },
  {
    q: 'What are the charges for your advisory services?',
    a: 'Our fee structure varies by service type. Please refer to our detailed Schedule of Charges page for complete transparency on all advisory fees, fund-specific expenses, and PMS management fees.',
  },
]

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  const id = `faq-${q.slice(0, 24).replace(/\s/g, '-').toLowerCase()}`
  return (
    <div className="faq-item">
      <button
        className="faq-trigger"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={id}
      >
        <span>{q}</span>
        <motion.span 
          className="faq-icon" 
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <motion.div
        className="faq-content-wrapper"
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="faq-content" id={`${id}-panel`} role="region" aria-labelledby={id}>
          <p>{a}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="home-root">

      {/* ── Hero ── */}
      <section className="hero" aria-label="Hero">
        <div className="hero-bg-glow" />
        <div className="container hero-content">

          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="chip glass">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4ade80] shrink-0 pulse-glow" />
              SEBI Registered Investment Adviser
            </span>
          </motion.div>

          <motion.h1 
            className="display-xl hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Intelligent Wealth.<br />
            <span className="gold-text">Built for India.</span>
          </motion.h1>

          <motion.p 
            className="body-lg hero-subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            AI-powered wealth intelligence for serious investors. Navigate complex markets with clarity, precision, and a calm institutional approach to portfolio construction.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="hero-invest-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Investing via WhatsApp
              <span className="material-icons" style={{ fontSize: 17 }} aria-hidden="true">arrow_forward</span>
            </motion.a>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/methodology" className="btn-ghost" id="hero-methodology-btn">
                Our Methodology
              </Link>
            </motion.div>
          </motion.div>

          {/*<motion.div 
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {STATS.map(({ number, label }, i) => (
              <motion.div 
                key={label} 
                className="hero-stat"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <div className="stat-number">{number}</div>
                <div className="stat-label">{label}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section overflow-hidden" aria-labelledby="services-heading">
        <div className="container">
          <RevealOnScroll>
            <div className="section-label label-sm">Our Services</div>
            <h2 id="services-heading" className="headline-lg" style={{ maxWidth: 520, marginBottom: 48 }}>
              Bespoke investment vehicles,<br />managed with institutional rigour.
            </h2>
          </RevealOnScroll>

          <div className="grid-2">
            {SERVICES.map(({ icon, title, desc, link, linkText, external }, i) => (
              <RevealOnScroll key={title} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="card service-card">
                  <div className="service-icon-box">
                    <span className="material-icons service-icon" aria-hidden="true">{icon}</span>
                  </div>
                  <h3 className="headline-md" style={{ marginBottom: 12 }}>{title}</h3>
                  <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 28 }}>{desc}</p>
                  <div className="service-link-wrapper">
                    {external ? (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="service-link">
                        {linkText}
                        <span className="material-icons" aria-hidden="true">arrow_forward</span>
                      </a>
                    ) : (
                      <Link to={link} className="service-link">
                        {linkText}
                        <span className="material-icons" aria-hidden="true">arrow_forward</span>
                      </Link>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy Strip ── */}
      <section className="philosophy-strip" aria-label="Investment Philosophy">
        <div className="container">
          <RevealOnScroll direction="up" distance={50}>
            <p className="philosophy-quote">
              "Clarity is the highest form of sophistication."
            </p>
            <div className="philosophy-divider" />
            <p className="philosophy-attr label-sm">VPW Investment Philosophy</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Why VPW ── */}
      <section className="section" aria-labelledby="why-vpw-heading">
        <div className="container">
          <div className="why-vpw-grid">
            <RevealOnScroll direction="left">
              <div className="section-label label-sm">Why VPW</div>
              <h2 id="why-vpw-heading" className="headline-lg" style={{ marginBottom: 24 }}>
                A disciplined edge in an<br />undisciplined market.
              </h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 40, maxWidth: 440 }}>
                We combine the rigour of institutional quantitative research with the agility of a client-first advisory — built on transparent processes and the relentless pursuit of risk-adjusted returns.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
                <Link to="/about" className="btn-ghost" id="home-about-btn">
                  About VPW Wealth
                  <span className="material-icons" style={{ fontSize: 16 }} aria-hidden="true">arrow_forward</span>
                </Link>
              </motion.div>
            </RevealOnScroll>

            <div className="why-vpw-right">
              {WHY_ITEMS.map(({ num, title, desc }, i) => (
                <RevealOnScroll key={num} delay={i * 0.1} direction="right" distance={20}>
                  <div className="why-item card glass">
                    <span className="why-numeral">{num}</span>
                    <div>
                      <div className="why-item-title">{title}</div>
                      <p className="why-item-desc">{desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className="section testimonials-section"
        aria-labelledby="testimonials-heading"
      >
        <div className="container">
          <RevealOnScroll>
            <div className="section-label label-sm">Client Stories</div>
            <h2 id="testimonials-heading" className="headline-lg" style={{ marginBottom: 56 }}>
              Trusted by industry leaders.
            </h2>
          </RevealOnScroll>
          <div className="grid-3">
            {TESTIMONIALS.map(({ quote, name, role }, i) => (
              <RevealOnScroll key={name} delay={i * 0.12}>
                <div className="testimonial-card card">
                  <span className="testimonial-quote-mark" aria-hidden="true">"</span>
                  <p className="testimonial-quote">{quote}</p>
                  <div className="testimonial-footer">
                    <div className="gold-line" />
                    <div className="testimonial-author">
                      <div className="testimonial-author-name">{name}</div>
                      <div className="testimonial-author-role">{role}</div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section" id="faqs" aria-labelledby="faqs-heading">
        <div className="container">
          <div className="faq-grid">
            <RevealOnScroll direction="left">
              <div className="section-label label-sm">FAQs</div>
              <h2 id="faqs-heading" className="headline-lg" style={{ marginBottom: 32 }}>
                Frequently asked questions.
              </h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 40, maxWidth: 360 }}>
                Everything you need to know about starting your wealth journey with VPW.
              </p>
              <Link to="/contact" className="btn-ghost" id="faq-contact-btn">
                Contact Support
                <span className="material-icons" style={{ fontSize: 16 }} aria-hidden="true">arrow_forward</span>
              </Link>
            </RevealOnScroll>
            
            <div className="faq-list-container">
              {FAQS.map((faq, i) => (
                <RevealOnScroll key={faq.q} delay={i * 0.08} direction="right">
                  <FAQ {...faq} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner-section">
        <div className="container">
          <RevealOnScroll className="cta-banner glass" direction="up">
            <div className="cta-content">
              <h2 className="headline-lg">Ready to build your wealth?</h2>
              <p className="body-md">
                Start investing in minutes via WhatsApp. No branch visits required.
              </p>
            </div>
            <div className="cta-actions">
              <motion.a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                id="cta-whatsapp-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start on WhatsApp
              </motion.a>
              <Link to="/contact" className="btn-ghost" id="cta-contact-btn">
                Schedule a Call
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  )
}

