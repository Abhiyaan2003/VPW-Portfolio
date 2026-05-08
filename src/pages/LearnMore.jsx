import { useState } from 'react'
import { Link } from 'react-router-dom'
import './PageHero.css'

const MODULES = [
  {
    id: 'basics',
    icon: 'school',
    title: 'Investing Fundamentals',
    level: 'Beginner',
    articles: [
      { title: 'What is a Mutual Fund?', desc: 'Understand the structure, types, and mechanics of mutual funds in India — the bedrock of your investment journey.' },
      { title: 'SIP vs. Lump Sum — Which is Right for You?', desc: 'A quantitative comparison of systematic vs. one-time investing strategies across different market cycles.' },
      { title: 'Understanding NAV and Its Myths', desc: 'Why a high NAV is not expensive and a low NAV is not cheap — and the real metrics that matter.' },
      { title: 'Direct vs. Regular Plans', desc: 'The mathematics of the Direct Plan advantage and how expense ratio differences compound over time.' },
    ],
  },
  {
    id: 'categories',
    icon: 'category',
    title: 'Fund Categories Explained',
    level: 'Intermediate',
    articles: [
      { title: 'Equity Fund Categories — SEBI Definitions', desc: 'From Large Cap to Multi Cap to Flexicap: a complete guide to every equity fund category mandated by SEBI.' },
      { title: 'Debt Funds: The Forgotten Asset Class', desc: 'Duration risk, credit risk, and the role of debt in a balanced portfolio — explained without jargon.' },
      { title: 'Hybrid Funds: Best of Both Worlds?', desc: 'Balanced Advantage, Aggressive Hybrid, Equity Savings — when each category makes sense.' },
      { title: 'International Funds: Accessing Global Growth', desc: 'Risks, taxation, and the right allocation to international equity for Indian investors.' },
    ],
  },
  {
    id: 'taxation',
    icon: 'receipt',
    title: 'Taxation of Mutual Funds',
    level: 'Intermediate',
    articles: [
      { title: 'STCG vs. LTCG: What Every Investor Must Know', desc: 'Short-term and long-term capital gains tax rates post-Budget 2024, with worked examples.' },
      { title: 'ELSS: Saving Tax While Building Wealth', desc: 'How Equity Linked Savings Schemes (ELSS) qualify for Section 80C deductions and why they\'re superior to PPF for long horizons.' },
      { title: 'Dividend Taxation: The New Regime', desc: 'Post-2020, dividends are taxable in the hands of investors. Here\'s how to plan around it.' },
      { title: 'Indexation Benefits for Debt Funds', desc: 'How cost inflation indexation reduces your effective tax on debt fund gains — and who should use it.' },
    ],
  },
  {
    id: 'advanced',
    icon: 'auto_graph',
    title: 'Advanced Investing',
    level: 'Advanced',
    articles: [
      { title: 'Factor Investing: Quality, Value, Momentum', desc: 'How systematic factor exposures can enhance portfolio returns while managing tail risk.' },
      { title: 'Portfolio Construction: Beyond Simple Diversification', desc: 'Correlation matrices, Modern Portfolio Theory, and the efficient frontier — applied to mutual fund portfolios.' },
      { title: 'Reading a Fund Factsheet Like a Professional', desc: 'Risk ratios, portfolio characteristics, and hidden red flags in monthly fund factsheets.' },
      { title: 'Behavioural Biases That Destroy Wealth', desc: 'Recency bias, loss aversion, home country bias — and evidence-based strategies to overcome them.' },
    ],
  },
]

const TOOLS = [
  { icon: 'calculate', title: 'SIP Calculator', desc: 'Estimate your corpus from monthly SIP investments over any time horizon.' },
  { icon: 'compare', title: 'Fund Comparison Tool', desc: 'Compare any two funds across 20+ parameters. Available in Research Portal.' },
  { icon: 'trending_up', title: 'Goal Planner', desc: 'Work backwards from your financial goal to determine the SIP amount needed.' },
  { icon: 'account_balance', title: 'Tax Estimator', desc: 'Estimate capital gains tax liability before redeeming your mutual fund units.' },
]

export default function LearnMore() {
  const [active, setActive] = useState('basics')
  const module = MODULES.find(m => m.id === active)

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* ── Page Hero ── */}
      <section className="page-hero" aria-label="Learn More About Investing">
        <div className="container">
          <div className="section-label label-sm">Learn More</div>
          <h1 className="display-xl" style={{ maxWidth: 660, marginBottom: 24 }}>
            Your guide to{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>intelligent investing.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 560, color: 'var(--on-surface-variant)' }}>
            From first principles to advanced portfolio construction — our curated knowledge base empowers you to invest with confidence and clarity.
          </p>
        </div>
      </section>

      {/* ── Learning Modules ── */}
      <section className="section" aria-label="Learning modules">
        <div className="container">
          <div className="section-label label-sm">Knowledge Library</div>
          <h2 className="headline-lg" style={{ marginBottom: 40 }}>
            Learn at your own pace.
          </h2>

          {/* Module Tabs */}
          <div style={{
            display: 'flex',
            gap: 8,
            marginBottom: 40,
            flexWrap: 'wrap',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            paddingBottom: 0,
          }}>
            {MODULES.map(m => (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                id={`learn-tab-${m.id}`}
                style={{
                  padding: '12px 20px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: active === m.id ? '2px solid var(--primary)' : '2px solid transparent',
                  color: active === m.id ? 'var(--primary)' : 'var(--on-surface-variant)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  fontWeight: active === m.id ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'color 0.2s, border-color 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {m.title}
              </button>
            ))}
          </div>

          {/* Module Content */}
          {module && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 28 }}>{module.icon}</span>
                <div>
                  <h3 style={{ fontFamily: 'Noto Serif', fontSize: '1.25rem' }}>{module.title}</h3>
                  <span className="chip" style={{ marginTop: 6 }}>{module.level}</span>
                </div>
              </div>
              <div className="grid-2">
                {module.articles.map(({ title, desc }) => (
                  <div key={title} className="card" style={{ cursor: 'pointer' }}>
                    <h4 style={{ fontFamily: 'Noto Serif', fontSize: '1rem', marginBottom: 12, lineHeight: 1.4 }}>{title}</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--on-surface-variant)', lineHeight: 1.65, marginBottom: 20 }}>{desc}</p>
                    <span style={{ color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                      Read Article
                      <span className="material-icons" style={{ fontSize: 14 }}>arrow_forward</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="section" style={{ background: 'var(--surface-container-lowest)' }} aria-labelledby="tools-heading">
        <div className="container">
          <div className="section-label label-sm">Investment Tools</div>
          <h2 id="tools-heading" className="headline-lg" style={{ marginBottom: 48 }}>
            Tools to power your investment decisions.
          </h2>
          <div className="grid-4">
            {TOOLS.map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: 32, textAlign: 'center' }}>
                <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 36, marginBottom: 16, display: 'block' }}>{icon}</span>
                <h3 style={{ fontFamily: 'Noto Serif', fontSize: '1rem', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)', lineHeight: 1.6, marginBottom: 20 }}>{desc}</p>
                <a href="https://research.vpwwealth.com" target="_blank" rel="noopener noreferrer" style={{
                  color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4,
                }}>
                  Open Tool ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Glossary Teaser ── */}
      <section className="section" aria-labelledby="glossary-heading">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="section-label label-sm">Glossary</div>
              <h2 id="glossary-heading" className="headline-lg" style={{ marginBottom: 24 }}>
                Master the language of investing.
              </h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 32 }}>
                Our comprehensive glossary covers 200+ financial terms — from Alpha to Zero-Cost Collar. Each definition is written in plain English and contextualised for Indian markets.
              </p>
              <a href="https://research.vpwwealth.com/glossary" target="_blank" rel="noopener noreferrer" className="btn-primary" id="learn-glossary-btn">
                Open Full Glossary ↗
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {['Alpha', 'Beta', 'Sharpe Ratio', 'Sortino Ratio', 'Drawdown', 'CAGR', 'AUM', 'NAV', 'Expense Ratio', 'Exit Load'].map(term => (
                <div key={term} style={{
                  padding: '14px 18px',
                  background: 'var(--surface-container-low)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  color: 'var(--on-surface-variant)',
                  cursor: 'default',
                  transition: 'color 0.2s, border-color 0.2s',
                }}>
                  {term}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Research Portal CTA ── */}
      <section className="section" style={{ background: 'var(--surface-container-lowest)' }} aria-label="Research Portal CTA">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 48, marginBottom: 16, display: 'block' }}>science</span>
          <h2 className="headline-lg" style={{ marginBottom: 16 }}>Access our full Research Portal.</h2>
          <p style={{ color: 'var(--on-surface-variant)', maxWidth: 500, margin: '0 auto 40px' }}>
            Registered clients get access to live fund analytics, portfolio performance attribution, and AI-generated market insights — all in one place.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://research.vpwwealth.com" target="_blank" rel="noopener noreferrer" className="btn-primary" id="learn-portal-btn">
              Open Research Portal ↗
            </a>
            <Link to="/contact" className="btn-ghost" id="learn-portal-register-btn">
              Register as Client
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
