import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Home.css'

const STATS = [
  { number: '₹2,400 Cr+', label: 'Assets Under Advisory' },
  { number: '12,000+', label: 'Satisfied Investors' },
  { number: '18+ Years', label: 'Market Experience' },
  { number: '94%', label: 'Client Retention Rate' },
]

const SERVICES = [
  {
    icon: 'insights',
    title: 'AI Research Intelligence',
    desc: 'Proprietary deep learning models analyzing macroeconomic shifts, alternative data sets, and market sentiment to construct predictive, non-correlated portfolios.',
    link: '/methodology',
    linkText: 'Read the Methodology',
  },
  {
    icon: 'pie_chart',
    title: 'Mutual Funds',
    desc: 'Curated, high-conviction funds prioritizing long-term capital preservation and absolute returns over market cycles with rigorous quantitative screening.',
    link: '/learn',
    linkText: 'Explore Funds',
  },
  {
    icon: 'account_balance',
    title: 'Portfolio Management (PMS)',
    desc: 'Direct equity portfolios managed with institutional rigor. Concentrated positions in high-quality Indian businesses with structural tailwinds.',
    link: '/contact',
    linkText: 'Request Consultation',
  },
  {
    icon: 'phone_android',
    title: 'WhatsApp Investing',
    desc: 'Begin your investment journey with a simple WhatsApp message. Our advisers guide you through the entire onboarding process seamlessly.',
    link: 'https://wa.me/919999999999',
    linkText: 'Chat to Invest',
    external: true,
  },
]

const TESTIMONIALS = [
  {
    quote: 'VPW brings an unprecedented level of quantitative rigor to the Indian market. Their AI-driven models have consistently identified structural shifts before they become mainstream.',
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
    a: "Simply send us a message on WhatsApp at +91 99999 99999. Our intelligent onboarding bot will guide you through KYC verification, risk profiling, and fund selection. The entire process takes less than 20 minutes.",
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
  return (
    <div className="faq-item">
      <button className="faq-trigger" onClick={() => setOpen(!open)} aria-expanded={open} id={`faq-${q.slice(0,20).replace(/\s/g,'-').toLowerCase()}`}>
        <span>{q}</span>
        <span className={`faq-icon ${open ? 'open' : ''}`}>+</span>
      </button>
      <div className={`faq-content ${open ? 'open' : ''}`}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <section className="hero" aria-label="Hero">
        {/* ambient glows */}
        <div className="hero-glow" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(242,195,69,0.07) 0%, transparent 70%)', top: '-100px', left: '-100px' }} />
        <div className="hero-glow" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(191,201,220,0.05) 0%, transparent 70%)', bottom: '0', right: '0' }} />

        <div className="container hero-content">
          <div className="hero-badge animate-fade-up">
            <span className="chip">
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
              SEBI Registered Investment Adviser
            </span>
          </div>

          <h1 className="display-xl hero-headline animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Intelligent Wealth.<br />
            <span className="gold-text">Built for India.</span>
          </h1>

          <p className="body-lg hero-subtext animate-fade-up" style={{ animationDelay: '0.2s' }}>
            AI-powered wealth intelligence for serious investors. Navigate complex markets with clarity, precision, and a calm, institutional approach to portfolio construction.
          </p>

          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20start%20investing%20with%20VPW%20Wealth"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="hero-start-investing-btn"
            >
              Start Investing via WhatsApp
              <span className="material-icons" style={{ fontSize: 18 }}>arrow_forward</span>
            </a>
            <Link to="/methodology" className="btn-ghost" id="hero-methodology-btn">
              Our Methodology
            </Link>
          </div>

          {/* Stats Row */}
          <div className="hero-stats animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {STATS.map(({ number, label }) => (
              <div key={label} className="hero-stat">
                <div className="stat-number">{number}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-label label-sm">Our Services</div>
          <h2 id="services-heading" className="headline-lg" style={{ maxWidth: 560, marginBottom: 48 }}>
            Bespoke investment vehicles,<br />managed with institutional rigor.
          </h2>

          <div className="grid-2 services-grid">
            {SERVICES.map(({ icon, title, desc, link, linkText, external }) => (
              <div key={title} className="card service-card">
                <span className="material-icons service-icon" aria-hidden="true">{icon}</span>
                <h3 className="headline-md" style={{ marginBottom: 12 }}>{title}</h3>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 24 }}>{desc}</p>
                {external ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="service-link">
                    {linkText}
                    <span className="material-icons" style={{ fontSize: 16 }}>arrow_forward</span>
                  </a>
                ) : (
                  <Link to={link} className="service-link">
                    {linkText}
                    <span className="material-icons" style={{ fontSize: 16 }}>arrow_forward</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy Banner ── */}
      <section className="philosophy-banner" aria-label="Investment Philosophy">
        <div className="container">
          <p className="philosophy-quote">
            "Clarity is the highest form of sophistication."
          </p>
          <p className="philosophy-attr label-sm">VPW Investment Philosophy</p>
        </div>
      </section>

      {/* ── Why VPW ── */}
      <section className="section" aria-labelledby="why-vpw-heading">
        <div className="container">
          <div className="why-vpw-grid">
            <div className="why-vpw-left">
              <div className="section-label label-sm">Why VPW</div>
              <h2 id="why-vpw-heading" className="headline-lg" style={{ marginBottom: 24 }}>
                A disciplined edge in an<br />undisciplined market.
              </h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 32 }}>
                We combine the rigor of institutional quantitative research with the agility of a client-first advisory. Our approach is built on transparent processes, low-cost execution, and the relentless pursuit of risk-adjusted returns.
              </p>
              <Link to="/about" className="btn-ghost" id="home-about-btn">
                About VPW Wealth
                <span className="material-icons" style={{ fontSize: 16 }}>arrow_forward</span>
              </Link>
            </div>
            <div className="why-vpw-right">
              {[
                { icon: 'verified', title: 'Regulated & Transparent', desc: 'SEBI registered with complete fee transparency and no hidden charges.' },
                { icon: 'psychology', title: 'AI-Augmented Research', desc: 'Proprietary models scanning 5,000+ data points per fund, per day.' },
                { icon: 'security', title: 'Capital Preservation First', desc: 'Downside protection is our primary mandate before upside participation.' },
                { icon: 'handshake', title: 'Aligned Incentives', desc: 'We earn when you earn. Our fee structure is built around long-term success.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="why-item">
                  <span className="material-icons why-icon" aria-hidden="true">{icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{title}</div>
                    <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section" aria-labelledby="testimonials-heading" style={{ background: 'var(--surface-container-lowest)' }}>
        <div className="container">
          <div className="section-label label-sm">Client Stories</div>
          <h2 id="testimonials-heading" className="headline-lg" style={{ marginBottom: 48 }}>
            Trusted by industry leaders.
          </h2>
          <div className="grid-3">
            {TESTIMONIALS.map(({ quote, name, role }) => (
              <div key={name} className="testimonial-card">
                <span className="material-icons" style={{ color: 'var(--primary)', marginBottom: 16, fontSize: 28 }}>format_quote</span>
                <p className="testimonial-quote">{quote}</p>
                <div className="gold-line" style={{ marginBottom: 16 }} />
                <div className="testimonial-author-name">{name}</div>
                <div className="testimonial-author-role">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section" id="faqs" aria-labelledby="faqs-heading">
        <div className="container">
          <div className="section-label label-sm">FAQs</div>
          <h2 id="faqs-heading" className="headline-lg" style={{ marginBottom: 48 }}>
            Frequently asked questions.
          </h2>
          <div style={{ maxWidth: 760 }}>
            {FAQS.map(({ q, a }) => (
              <FAQ key={q} q={q} a={a} />
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link to="/contact" className="btn-ghost" id="faq-contact-btn">
              Still have questions? Contact us
              <span className="material-icons" style={{ fontSize: 16 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner" aria-label="Call to action">
        <div className="container cta-inner">
          <div>
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>Ready to build your wealth?</h2>
            <p style={{ color: 'var(--on-surface-variant)' }}>Start investing in minutes via WhatsApp. No branch visits required.</p>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="cta-whatsapp-btn"
            >
              Start on WhatsApp
            </a>
            <a
              href="https://research.vpwwealth.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              id="cta-research-btn"
            >
              Research Portal ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
