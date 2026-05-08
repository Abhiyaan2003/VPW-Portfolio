import { Link } from 'react-router-dom'
import './PageHero.css'

const STEPS = [
  {
    number: '01',
    title: 'Universe Definition',
    desc: 'We begin with the complete AMFI-registered fund universe (~2,800+ funds) and apply initial eligibility filters: minimum AUM thresholds (₹500 Cr for equity funds), fund age (minimum 5 years), and category-specific mandates.',
  },
  {
    number: '02',
    title: 'Quantitative Screening',
    desc: 'Our AI engine processes 14 quantitative factors including risk-adjusted returns (Sharpe, Sortino, Calmar ratios), rolling return consistency, drawdown analysis, portfolio concentration, and factor exposures (momentum, quality, value).',
  },
  {
    number: '03',
    title: 'Qualitative Overlay',
    desc: 'Short-listed funds undergo a rigorous qualitative assessment: fund manager track record across market cycles, AMC stability and investment philosophy continuity, portfolio construction discipline, and expense ratio trajectory.',
  },
  {
    number: '04',
    title: 'Portfolio Construction',
    desc: 'We assemble client-specific portfolios using modern portfolio theory (MPT) and Black-Litterman optimization, calibrated to individual risk tolerance, investment horizon, tax situation, and specific financial goals.',
  },
  {
    number: '05',
    title: 'Continuous Monitoring',
    desc: 'AI agents run real-time monitoring on every constituent. Alert thresholds trigger review protocols for style drift, manager change, deteriorating risk metrics, or relative underperformance sustained beyond predefined windows.',
  },
  {
    number: '06',
    title: 'Rebalancing & Review',
    desc: 'Quarterly portfolio reviews with full written rationale for any changes. Rebalancing is driven by fundamental shifts, not market noise. Tax-loss harvesting is factored into all rebalancing decisions.',
  },
]

const PRINCIPLES = [
  { icon: 'balance', title: 'Asymmetric Risk-Reward', desc: 'We seek opportunities where potential upside materially exceeds downside risk. Capital preservation is the non-negotiable first principle.' },
  { icon: 'trending_down', title: 'Downside First', desc: 'Every fund evaluation starts with maximum drawdown and downside capture ratio analysis — how bad did it get, and how much of the market\'s fall did the fund absorb?' },
  { icon: 'auto_awesome', title: 'Evidence-Based Alpha', desc: 'We invest only in persistent, statistically significant alpha sources. We avoid noise-driven decisions and market timing.' },
  { icon: 'cycle', title: 'Full-Cycle Validation', desc: 'We evaluate fund performance across complete market cycles — bull, bear, and sideways phases — to distinguish genuine skill from beta-driven returns.' },
]

export default function Methodology() {
  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* ── Page Hero ── */}
      <section className="page-hero" aria-label="Investment Methodology">
        <div className="container">
          <div className="section-label label-sm">Our Methodology</div>
          <h1 className="display-xl" style={{ maxWidth: 680, marginBottom: 24 }}>
            Where{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>quantitative rigor</span>
            {' '}meets qualitative wisdom.
          </h1>
          <p className="body-lg" style={{ maxWidth: 580, color: 'var(--on-surface-variant)', marginBottom: 32 }}>
            Our investment process is a six-stage discipline that combines proprietary machine learning models with seasoned fund manager judgment. No black boxes — full transparency at every step.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" id="meth-consult-btn">Request a Consultation</Link>
            <a href="https://research.vpwwealth.com" target="_blank" rel="noopener noreferrer" className="btn-ghost" id="meth-portal-btn">
              Access Research Portal ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Core Principles ── */}
      <section className="section" aria-labelledby="principles-heading">
        <div className="container">
          <div className="section-label label-sm">Investment Principles</div>
          <h2 id="principles-heading" className="headline-lg" style={{ marginBottom: 48 }}>
            Four pillars of our investment philosophy.
          </h2>
          <div className="grid-4">
            {PRINCIPLES.map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: 32 }}>
                <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 32, marginBottom: 20, display: 'block' }}>{icon}</span>
                <h3 style={{ fontFamily: 'Noto Serif', fontSize: '1.05rem', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--on-surface-variant)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="section" style={{ background: 'var(--surface-container-lowest)' }} aria-labelledby="process-heading">
        <div className="container">
          <div className="section-label label-sm">The Six-Stage Process</div>
          <h2 id="process-heading" className="headline-lg" style={{ marginBottom: 56 }}>
            Our investment process, step by step.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {STEPS.map(({ number, title, desc }, i) => (
              <div key={number} className="card" style={{ display: 'flex', gap: 24, alignItems: 'flex-start', padding: '32px' }}>
                <div style={{
                  flexShrink: 0,
                  fontFamily: 'Noto Serif',
                  fontSize: '2rem',
                  fontWeight: 500,
                  color: 'rgba(242,195,69,0.25)',
                  lineHeight: 1,
                  width: 56,
                  textAlign: 'center',
                }}>
                  {number}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Noto Serif', fontSize: '1.1rem', marginBottom: 12, color: 'var(--on-surface)' }}>{title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Technology ── */}
      <section className="section" aria-labelledby="ai-heading">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="section-label label-sm">AI Research Intelligence</div>
              <h2 id="ai-heading" className="headline-lg" style={{ marginBottom: 24 }}>
                Powered by proprietary machine learning.
              </h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 20 }}>
                Our AI Research Intelligence engine processes over 5,000 data points per fund, per day — including scheme information statements, regulatory filings, market prices, macroeconomic indicators, and alternative data sources.
              </p>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 32 }}>
                The system generates daily factor scores, alerts on portfolio drift, and surfaces emerging risks in our model portfolio before they materialize in NAV performance.
              </p>
              <a href="https://research.vpwwealth.com" target="_blank" rel="noopener noreferrer" className="btn-primary" id="meth-ai-portal-btn">
                Explore Research Portal ↗
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
              {[
                { number: '5,000+', label: 'Data points processed per fund per day' },
                { number: '20 Years', label: 'Historical data in training dataset' },
                { number: '14 Factors', label: 'Quantitative screening metrics' },
                { number: 'Real-time', label: 'Portfolio drift monitoring & alerts' },
              ].map(({ number, label }) => (
                <div key={label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 24,
                  padding: '20px 28px',
                  background: 'var(--surface-container-low)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{ fontFamily: 'Noto Serif', fontSize: '1.5rem', color: 'var(--primary)', minWidth: 100 }}>{number}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--on-surface-variant)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Risk Management ── */}
      <section className="section" style={{ background: 'var(--surface-container-lowest)' }} aria-labelledby="risk-heading">
        <div className="container">
          <div className="section-label label-sm">Risk Management</div>
          <h2 id="risk-heading" className="headline-lg" style={{ marginBottom: 24 }}>
            Risk management is not a feature — it is the foundation.
          </h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: 720, marginBottom: 48 }}>
            Our risk framework operates across three dimensions simultaneously: portfolio-level risk (volatility, maximum drawdown, correlation), individual fund risk (tracking error, factor concentration), and macro risk (rate sensitivity, currency, liquidity).
          </p>
          <div className="grid-3">
            {[
              { icon: 'shield', title: 'Portfolio Risk', items: ['Volatility targeting', 'Correlation matrix monitoring', 'Drawdown limits per portfolio', 'Stress testing (2008, 2020 scenarios)'] },
              { icon: 'monitor_heart', title: 'Fund Risk', items: ['Style drift detection', 'Manager turnover alerts', 'AUM growth impact analysis', 'Expense ratio trending'] },
              { icon: 'public', title: 'Macro Risk', items: ['Interest rate sensitivity', 'Currency exposure mapping', 'Liquidity risk scoring', 'Credit quality surveillance'] },
            ].map(({ icon, title, items }) => (
              <div key={title} className="card">
                <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 28, marginBottom: 16, display: 'block' }}>{icon}</span>
                <h3 style={{ fontFamily: 'Noto Serif', fontSize: '1.1rem', marginBottom: 16 }}>{title}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {items.map(item => (
                    <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <div className="gold-line" style={{ width: 16, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--on-surface-variant)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" aria-label="Methodology CTA">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="headline-lg" style={{ marginBottom: 16 }}>Experience the methodology in action.</h2>
          <p style={{ color: 'var(--on-surface-variant)', marginBottom: 40 }}>
            Book a consultation with our research team to see how our process would apply to your specific financial goals.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" id="meth-cta-contact-btn">Schedule a Consultation</Link>
            <Link to="/charges" className="btn-ghost" id="meth-cta-charges-btn">View Schedule of Charges</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
