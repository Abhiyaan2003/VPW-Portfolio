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
  { icon: 'balance', title: 'Asymmetric Risk-Reward', desc: "We seek opportunities where potential upside materially exceeds downside risk. Capital preservation is the non-negotiable first principle." },
  { icon: 'trending_down', title: 'Downside First', desc: "Every fund evaluation starts with maximum drawdown and downside capture ratio analysis — how bad did it get, and how much of the market's fall did the fund absorb?" },
  { icon: 'auto_awesome', title: 'Evidence-Based Alpha', desc: 'We invest only in persistent, statistically significant alpha sources. We avoid noise-driven decisions and market timing.' },
  { icon: 'cycle', title: 'Full-Cycle Validation', desc: 'We evaluate fund performance across complete market cycles — bull, bear, and sideways phases — to distinguish genuine skill from beta-driven returns.' },
]

export default function Methodology() {
  return (
    <div className="page-enter pt-[var(--nav-height)]">
      {/* ── Page Hero ── */}
      <section className="page-hero" aria-label="Investment Methodology">
        <div className="container">
          <div className="section-label label-sm">Our Methodology</div>
          <h1 className="display-xl max-w-[680px] mb-6">
            Where{' '}
            <span className="[color:var(--primary)] italic">quantitative rigor</span>
            {' '}meets qualitative wisdom.
          </h1>
          <p className="body-lg max-w-[580px] [color:var(--on-surface-variant)] mb-12">
            Our investment process is a six-stage discipline that combines proprietary machine learning models with seasoned fund manager judgment. No black boxes — full transparency at every step.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary mt-8" id="meth-consult-btn">Request a Consultation</Link>
            <a href="https://research.vpwwealth.com" target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8" id="meth-portal-btn">
              Access Research Portal ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Core Principles ── */}
      <section className="section" aria-labelledby="principles-heading">
        <div className="container">
          <div className="section-label label-sm">Investment Principles</div>
          <h2 id="principles-heading" className="headline-lg mb-20">
            Four pillars of our investment philosophy.
          </h2>
          <div className="grid-4">
            {PRINCIPLES.map(({ icon, title, desc }) => (
              <div key={title} className="card p-6 lg:p-8">
                <span className="material-icons [color:var(--primary)] text-[32px] mb-5 block">{icon}</span>
                <h3 className="font-serif text-[1.05rem] mb-2.5">{title}</h3>
                <p className="text-[0.88rem] [color:var(--on-surface-variant)] leading-[1.65]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="section [background:var(--surface-container-lowest)]" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-label label-sm">The Six-Stage Process</div>
          <h2 id="process-heading" className="headline-lg mb-20">
            Our investment process, step by step.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {STEPS.map(({ number, title, desc }) => (
              <div key={number} className="card flex gap-6 lg:gap-8 items-start p-6 lg:p-10">
                <div className="shrink-0 font-serif text-[2.5rem] font-medium [color:rgba(242,195,69,0.2)] leading-none w-16 text-center">
                  {number}
                </div>
                <div>
                  <h3 className="font-serif text-[1.25rem] mb-4 [color:var(--on-surface)]">{title}</h3>
                  <p className="text-[0.95rem] [color:var(--on-surface-variant)] leading-[1.75]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Technology ── */}
      <section className="section" aria-labelledby="ai-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="section-label label-sm">AI Research Intelligence</div>
              <h2 id="ai-heading" className="headline-lg mb-8">
                Powered by proprietary machine learning.
              </h2>
              <p className="body-md [color:var(--on-surface-variant)] mb-6 leading-[1.75]">
                Our AI Research Intelligence engine processes over 5,000 data points per fund, per day — including scheme information statements, regulatory filings, market prices, macroeconomic indicators, and alternative data sources.
              </p>
              <p className="body-md [color:var(--on-surface-variant)] mb-10 leading-[1.75]">
                The system generates daily factor scores, alerts on portfolio drift, and surfaces emerging risks in our model portfolio before they materialize in NAV performance.
              </p>
              <a href="https://research.vpwwealth.com" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8" id="meth-ai-portal-btn">
                Explore Research Portal ↗
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { number: '5,000+', label: 'Data points processed per fund per day' },
                { number: '20 Years', label: 'Historical data in training dataset' },
                { number: '14 Factors', label: 'Quantitative screening metrics' },
                { number: 'Real-time', label: 'Portfolio drift monitoring & alerts' },
              ].map(({ number, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-6 lg:gap-8 px-6 py-6 lg:px-10 lg:py-8 [background:var(--surface-container-low)] rounded-[var(--radius-md)] border border-white/[0.06]"
                >
                  <div className="font-serif text-3xl [color:var(--primary)] min-w-[120px]">{number}</div>
                  <div className="text-[1rem] [color:var(--on-surface-variant)]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Risk Management ── */}
      <section className="section [background:var(--surface-container-lowest)]" aria-labelledby="risk-heading">
        <div className="container">
          <div className="section-label label-sm">Risk Management</div>
          <h2 id="risk-heading" className="headline-lg mb-8">
            Risk management is not a feature — it is the foundation.
          </h2>
          <p className="body-lg [color:var(--on-surface-variant)] max-w-[800px] mb-16 leading-[1.75]">
            Our risk framework operates across three dimensions simultaneously: portfolio-level risk (volatility, maximum drawdown, correlation), individual fund risk (tracking error, factor concentration), and macro risk (rate sensitivity, currency, liquidity).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'shield', title: 'Portfolio Risk', items: ['Volatility targeting', 'Correlation matrix monitoring', 'Drawdown limits per portfolio', 'Stress testing (2008, 2020 scenarios)'] },
              { icon: 'monitor_heart', title: 'Fund Risk', items: ['Style drift detection', 'Manager turnover alerts', 'AUM growth impact analysis', 'Expense ratio trending'] },
              { icon: 'public', title: 'Macro Risk', items: ['Interest rate sensitivity', 'Currency exposure mapping', 'Liquidity risk scoring', 'Credit quality surveillance'] },
            ].map(({ icon, title, items }) => (
              <div key={title} className="card p-6 lg:p-10">
                <span className="material-icons [color:var(--primary)] text-[32px] mb-6 block">{icon}</span>
                <h3 className="font-serif text-[1.25rem] mb-6">{title}</h3>
                <ul className="flex flex-col gap-4">
                  {items.map(item => (
                    <li key={item} className="flex gap-4 items-center">
                      <div className="gold-line w-6 shrink-0" />
                      <span className="text-[0.95rem] [color:var(--on-surface-variant)]">{item}</span>
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
        <div className="container text-center">
          <h2 className="headline-lg mb-4">Experience the methodology in action.</h2>
          <p className="[color:var(--on-surface-variant)] mb-14">
            Book a consultation with our research team to see how our process would apply to your specific financial goals.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn-primary" id="meth-cta-contact-btn">Schedule a Consultation</Link>
            <Link to="/charges" className="btn-ghost" id="meth-cta-charges-btn">View Schedule of Charges</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
