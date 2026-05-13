import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import './Methodology.css';

const STEPS = [
  { number: '01', title: 'Universe Definition', desc: 'We begin with the complete AMFI-registered fund universe (~2,800+ funds) and apply initial eligibility filters: minimum AUM thresholds (₹500 Cr for equity funds), fund age (minimum 5 years), and category-specific mandates.' },
  { number: '02', title: 'Quantitative Screening', desc: 'Our AI engine processes 14 quantitative factors including risk-adjusted returns (Sharpe, Sortino, Calmar ratios), rolling return consistency, drawdown analysis, portfolio concentration, and factor exposures.' },
  { number: '03', title: 'Qualitative Overlay', desc: 'Short-listed funds undergo rigorous qualitative assessment: fund manager track record across market cycles, AMC stability and investment philosophy continuity, portfolio construction discipline, and expense ratio trajectory.' },
  { number: '04', title: 'Portfolio Construction', desc: 'We assemble client-specific portfolios using modern portfolio theory (MPT) and Black-Litterman optimisation, calibrated to individual risk tolerance, investment horizon, tax situation, and specific financial goals.' },
  { number: '05', title: 'Continuous Monitoring', desc: 'AI agents run real-time monitoring on every constituent. Alert thresholds trigger review protocols for style drift, manager change, deteriorating risk metrics, or relative underperformance sustained beyond predefined windows.' },
  { number: '06', title: 'Rebalancing & Review', desc: 'Quarterly portfolio reviews with full written rationale for any changes. Rebalancing is driven by fundamental shifts, not market noise. Tax-loss harvesting is factored into all rebalancing decisions.' },
];

const PRINCIPLES = [
  { num: '01', title: 'Asymmetric Risk-Reward', desc: "We seek opportunities where potential upside materially exceeds downside risk. Capital preservation is the non-negotiable first principle." },
  { num: '02', title: 'Downside First', desc: "Every fund evaluation starts with maximum drawdown and downside capture ratio — how bad did it get, and how much of the market fall did the fund absorb?" },
  { num: '03', title: 'Evidence-Based Alpha', desc: 'We invest only in persistent, statistically significant alpha sources. We avoid noise-driven decisions and market timing.' },
  { num: '04', title: 'Full-Cycle Validation', desc: 'We evaluate fund performance across complete market cycles — bull, bear, and sideways phases — to distinguish genuine skill from beta-driven returns.' },
];

const AI_STATS = [
  { number: '5,000+', label: 'Data points processed per fund per day' },
  { number: '20 Years', label: 'Historical data in training dataset' },
  { number: '14 Factors', label: 'Quantitative screening metrics' },
  { number: 'Real-time', label: 'Portfolio drift monitoring & alerts' },
];

const RISK_DIMS = [
  { title: 'Portfolio Risk', items: ['Volatility targeting', 'Correlation matrix monitoring', 'Drawdown limits per portfolio', 'Stress testing (2008, 2020 scenarios)'] },
  { title: 'Fund Risk', items: ['Style drift detection', 'Manager turnover alerts', 'AUM growth impact analysis', 'Expense ratio trending'] },
  { title: 'Macro Risk', items: ['Interest rate sensitivity', 'Currency exposure mapping', 'Liquidity risk scoring', 'Credit quality surveillance'] },
];

export default function Methodology() {
  return (
    <div className="methodology-root">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label label-sm">Our Methodology</div>
            <h1 className="hero-headline display-xl">
              Where <span className="accent-text italic">quantitative rigour</span> meets qualitative wisdom.
            </h1>
            <p className="hero-subtext body-lg">
              Our investment process is a six-stage discipline combining proprietary machine learning models with seasoned judgment. No black boxes — full transparency at every step.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary" id="meth-consult-btn">Request a Consultation</Link>
              <Link to="/charges" className="btn-ghost" id="meth-charges-btn">View Charges</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="container">
          <RevealOnScroll>
            <div className="section-label label-sm">Investment Principles</div>
            <h2 className="headline-lg section-title">Four pillars of our investment philosophy.</h2>
          </RevealOnScroll>
          <div className="grid-4">
            {PRINCIPLES.map(({ num, title, desc }, i) => (
              <RevealOnScroll key={num} delay={i * 0.1}>
                <div className="principle-card card">
                  <div className="principle-num label-sm">{num}</div>
                  <h3 className="card-title label-lg">{title}</h3>
                  <p className="card-desc body-sm">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <RevealOnScroll>
            <div className="section-label label-sm">The Six-Stage Process</div>
            <h2 className="headline-lg section-title">Our investment process, step by step.</h2>
          </RevealOnScroll>
          <div className="grid-2">
            {STEPS.map(({ number, title, desc }, i) => (
              <RevealOnScroll key={number} delay={(i % 2) * 0.1}>
                <div className="process-card card">
                  <div className="process-num">{number}</div>
                  <div className="process-content">
                    <h3 className="card-title label-lg">{title}</h3>
                    <p className="card-desc body-sm">{desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section ai-intelligence-section">
        <div className="container">
          <div className="ai-layout-grid">
            <RevealOnScroll>
              <div className="ai-info">
                <div className="section-label label-sm">AI Research Intelligence</div>
                <h2 className="headline-lg">Powered by proprietary machine learning.</h2>
                <div className="ai-text-block">
                  <p className="body-md">
                    Our AI engine processes over 5,000 data points per fund, per day — including scheme information statements, regulatory filings, market prices, and alternative data sources.
                  </p>
                  <p className="body-md">
                    The system generates daily factor scores, alerts on portfolio drift, and surfaces emerging risks before they materialise in NAV performance.
                  </p>
                </div>
                <Link to="/contact" className="btn-primary">Speak to an Adviser</Link>
              </div>
            </RevealOnScroll>
            
            <div className="ai-stats-grid">
              {AI_STATS.map(({ number, label }, idx) => (
                <RevealOnScroll key={label} delay={idx * 0.1}>
                  <div className="stat-card card">
                    <div className="stat-number display-md accent-text">{number}</div>
                    <div className="stat-label body-xs">{label}</div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section risk-management-section">
        <div className="container">
          <RevealOnScroll>
            <div className="section-label label-sm">Risk Management</div>
            <h2 className="headline-lg section-title">Risk management is not a feature — it is the foundation.</h2>
            <p className="section-subtitle body-lg">
              Our risk framework operates across three dimensions simultaneously: portfolio-level risk, individual fund risk, and macro risk.
            </p>
          </RevealOnScroll>
          
          <div className="grid-3">
            {RISK_DIMS.map(({ title, items }, i) => (
              <RevealOnScroll key={title} delay={i * 0.1}>
                <div className="risk-card card">
                  <h3 className="card-title label-lg">{title}</h3>
                  <ul className="risk-list">
                    {items.map(item => (
                      <li key={item} className="risk-item">
                        <div className="risk-dot" />
                        <span className="body-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section methodology-cta">
        <div className="container">
          <RevealOnScroll>
            <div className="cta-card card">
              <h2 className="headline-lg">Experience the methodology in action.</h2>
              <p className="body-md cta-desc">
                Book a consultation with our research team to see how our process applies to your financial goals.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn-primary">Schedule a Consultation</Link>
                <Link to="/charges" className="btn-ghost">View Schedule of Charges</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
