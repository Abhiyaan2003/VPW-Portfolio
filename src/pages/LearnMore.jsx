import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'
import './LearnMore.css'

const MODULES = [
  {
    id: 'basics',
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
    title: 'Taxation of Mutual Funds',
    level: 'Intermediate',
    articles: [
      { title: 'STCG vs. LTCG: What Every Investor Must Know', desc: 'Short-term and long-term capital gains tax rates post-Budget 2024, with worked examples.' },
      { title: 'ELSS: Saving Tax While Building Wealth', desc: "How Equity Linked Savings Schemes qualify for Section 80C deductions and why they're superior to PPF for long horizons." },
      { title: 'Dividend Taxation: The New Regime', desc: "Post-2020, dividends are taxable in the hands of investors. Here's how to plan around it." },
      { title: 'Indexation Benefits for Debt Funds', desc: 'How cost inflation indexation reduces your effective tax on debt fund gains — and who should use it.' },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced Investing',
    level: 'Advanced',
    articles: [
      { title: 'Factor Investing: Quality, Value, Momentum', desc: 'How systematic factor exposures can enhance portfolio returns while managing tail risk.' },
      { title: 'Portfolio Construction: Beyond Diversification', desc: 'Correlation matrices, Modern Portfolio Theory, and the efficient frontier — applied to mutual fund portfolios.' },
      { title: 'Reading a Fund Factsheet Like a Pro', desc: 'Risk ratios, portfolio characteristics, and hidden red flags in monthly fund factsheets.' },
      { title: 'Behavioural Biases That Destroy Wealth', desc: 'Recency bias, loss aversion, home country bias — and evidence-based strategies to overcome them.' },
    ],
  },
]

const TOOLS = [
  { icon: 'calculate', title: 'SIP Calculator', desc: 'Estimate your corpus from monthly SIP investments over any time horizon.' },
  { icon: 'compare', title: 'Fund Comparison', desc: 'Compare any two funds across 20+ parameters. Available in Research Portal.' },
  { icon: 'trending_up', title: 'Goal Planner', desc: 'Work backwards from your financial goal to determine the SIP amount needed.' },
  { icon: 'account_balance', title: 'Tax Estimator', desc: 'Estimate capital gains tax liability before redeeming your mutual fund units.' },
]

const GLOSSARY_TERMS = ['Alpha', 'Beta', 'Sharpe Ratio', 'Sortino Ratio', 'Drawdown', 'CAGR', 'AUM', 'NAV', 'Expense Ratio', 'Exit Load']

export default function LearnMore() {
  const [active, setActive] = useState('basics')
  const module = MODULES.find(m => m.id === active)

  return (
    <div className="learn-root page-enter">
      <section className="page-hero">
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="section-label label-sm">Learn More</div>
            <h1 className="display-xl hero-headline">
              Your guide to <span className="gold-text italic">intelligent investing.</span>
            </h1>
            <p className="body-lg hero-subtext">
              From first principles to advanced portfolio construction — our curated knowledge base empowers you to invest with confidence and clarity.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="section">
        <div className="container">
          <RevealOnScroll className="knowledge-header">
            <div className="section-label label-sm">Knowledge Library</div>
            <h2 className="headline-lg">Learn at your own pace.</h2>
          </RevealOnScroll>

          {/* Tabs */}
          <RevealOnScroll delay={80}>
            <div role="tablist" className="learn-tabs">
              {MODULES.map(m => (
                <button
                  key={m.id}
                  role="tab"
                  aria-selected={active === m.id}
                  onClick={() => setActive(m.id)}
                  className={`tab-btn ${active === m.id ? 'active' : ''}`}
                >
                  {m.title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {module && (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="module-meta">
                    <span className="chip">
                      {module.level}
                    </span>
                    <span className="label-sm article-count">
                      {module.articles.length} articles
                    </span>
                  </div>
                  <div className="grid-2">
                    {module.articles.map(({ title, desc }) => (
                      <div key={title} className="card article-card">
                        <h4 className="article-title">{title}</h4>
                        <p className="article-desc">{desc}</p>
                        <span className="read-link">
                          Read Article
                          <span className="material-icons read-icon">arrow_forward</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </RevealOnScroll>
        </div>
      </section>

      {/* Tools */}
      <section className="section bg-surface-lowest">
        <div className="container">
          <RevealOnScroll className="tools-header">
            <div className="section-label label-sm">Investment Tools</div>
            <h2 className="headline-lg">Tools to power your decisions.</h2>
          </RevealOnScroll>
          <div className="grid-4">
            {TOOLS.map(({ icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 100}>
                <div className="card tool-card">
                  <div className="tool-icon">
                    <span className="material-icons">{icon}</span>
                  </div>
                  <h3 className="tool-title">{title}</h3>
                  <p className="tool-desc">{desc}</p>
                  <a href="https://research.vpwwealth.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    Open Tool ↗
                  </a>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="section">
        <div className="container">
          <div className="grid-2 glossary-layout">
            <RevealOnScroll direction="left" className="glossary-info">
              <div className="section-label label-sm">Glossary</div>
              <h2 className="headline-lg">Master the language of investing.</h2>
              <p className="body-md glossary-desc">
                Our comprehensive glossary covers 200+ financial terms — from Alpha to Zero-Cost Collar. Each definition is written in plain English and contextualised for Indian markets.
              </p>
              <a href="https://research.vpwwealth.com/glossary" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Open Full Glossary ↗
              </a>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200} direction="right">
              <div className="glossary-grid">
                {GLOSSARY_TERMS.map(term => (
                  <div key={term} className="glossary-item">{term}</div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingBottom: 140 }}>
        <div className="container">
          <RevealOnScroll className="cta-banner" direction="up">
            <div className="cta-content">
              <h2 className="headline-lg">Access our full Research Portal.</h2>
              <p className="body-md cta-subtext">
                Registered clients get access to live fund analytics, portfolio performance attribution, and AI-generated market insights.
              </p>
            </div>
            <div className="cta-actions">
              <a href="https://research.vpwwealth.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Open Research Portal ↗
              </a>
              <Link to="/contact" className="btn-ghost">Register as Client</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
