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
      { title: 'ELSS: Saving Tax While Building Wealth', desc: "How Equity Linked Savings Schemes (ELSS) qualify for Section 80C deductions and why they're superior to PPF for long horizons." },
      { title: 'Dividend Taxation: The New Regime', desc: "Post-2020, dividends are taxable in the hands of investors. Here's how to plan around it." },
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
    <div className="page-enter pt-[var(--nav-height)]">
      {/* ── Page Hero ── */}
      <section className="page-hero" aria-label="Learn More About Investing">
        <div className="container">
          <div className="section-label label-sm">Learn More</div>
          <h1 className="display-xl max-w-[660px] mb-6">
            Your guide to{' '}
            <span className="[color:var(--primary)] italic">intelligent investing.</span>
          </h1>
          <p className="body-lg max-w-[560px] [color:var(--on-surface-variant)]">
            From first principles to advanced portfolio construction — our curated knowledge base empowers you to invest with confidence and clarity.
          </p>
        </div>
      </section>

      {/* ── Learning Modules ── */}
      <section className="section" aria-label="Learning modules">
        <div className="container">
          <div className="section-label label-sm">Knowledge Library</div>
          <h2 className="headline-lg mb-10">
            Learn at your own pace.
          </h2>

          {/* Module Tabs */}
          <div className="flex gap-2 mb-10 flex-wrap border-b border-white/[0.07] pb-0 overflow-x-auto">
            {MODULES.map(m => (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                id={`learn-tab-${m.id}`}
                className={[
                  'px-5 py-3 bg-transparent border-0 font-[var(--font-body)] text-[0.88rem] cursor-pointer transition-colors duration-200 whitespace-nowrap shrink-0',
                  active === m.id
                    ? '[color:var(--primary)] font-semibold border-b-2 border-b-[var(--primary)] -mb-px'
                    : '[color:var(--on-surface-variant)] font-normal border-b-2 border-b-transparent -mb-px'
                ].join(' ')}
              >
                {m.title}
              </button>
            ))}
          </div>

          {/* Module Content */}
          {module && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-6 mb-10">
                <span className="material-icons [color:var(--primary)] text-[32px]">{module.icon}</span>
                <div>
                  <h3 className="font-serif text-[1.5rem]">{module.title}</h3>
                  <div className="chip mt-2">{module.level}</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {module.articles.map(({ title, desc }) => (
                  <div key={title} className="card p-6 lg:p-10 cursor-pointer group">
                    <h4 className="font-serif text-[1.15rem] mb-4 leading-[1.4] transition-colors group-hover:[color:var(--primary)]">{title}</h4>
                    <p className="text-[0.95rem] [color:var(--on-surface-variant)] leading-[1.7] mb-6">{desc}</p>
                    <span className="[color:var(--primary)] text-[0.85rem] font-semibold flex items-center gap-2">
                      Read Article
                      <span className="material-icons text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="section [background:var(--surface-container-lowest)]" aria-labelledby="tools-heading">
        <div className="container">
          <div className="section-label label-sm">Investment Tools</div>
          <h2 id="tools-heading" className="headline-lg mb-16">
            Tools to power your investment decisions.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TOOLS.map(({ icon, title, desc }) => (
              <div key={title} className="card p-6 lg:p-10 text-center flex flex-col items-center">
                <span className="material-icons [color:var(--primary)] text-[40px] mb-6 block">{icon}</span>
                <h3 className="font-serif text-[1.1rem] mb-3">{title}</h3>
                <p className="text-[0.9rem] [color:var(--on-surface-variant)] leading-[1.65] mb-8 flex-grow">{desc}</p>
                <a
                  href="https://research.vpwwealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost py-2.5 px-6 text-[0.8rem]"
                >
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <div>
              <div className="section-label label-sm">Glossary</div>
              <h2 id="glossary-heading" className="headline-lg mb-8">
                Master the language of investing.
              </h2>
              <p className="body-md [color:var(--on-surface-variant)] mb-10 leading-[1.75]">
                Our comprehensive glossary covers 200+ financial terms — from Alpha to Zero-Cost Collar. Each definition is written in plain English and contextualised for Indian markets.
              </p>
              <a href="https://research.vpwwealth.com/glossary" target="_blank" rel="noopener noreferrer" className="btn-primary" id="learn-glossary-btn">
                Open Full Glossary ↗
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {['Alpha', 'Beta', 'Sharpe Ratio', 'Sortino Ratio', 'Drawdown', 'CAGR', 'AUM', 'NAV', 'Expense Ratio', 'Exit Load'].map(term => (
                <div
                  key={term}
                  className="px-6 py-5 [background:var(--surface-container-low)] rounded-[var(--radius-sm)] border border-white/[0.06] text-[0.95rem] font-medium [color:var(--on-surface-variant)] cursor-default transition-all duration-250 hover:[color:var(--primary)] hover:border-[rgba(242,195,69,0.2)] hover:[background:var(--surface-container)] text-center"
                >
                  {term}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Research Portal CTA ── */}
      <section className="section [background:var(--surface-container-lowest)]" aria-label="Research Portal CTA">
        <div className="container text-center">
          <span className="material-icons [color:var(--primary)] text-[48px] mb-4 block">science</span>
          <h2 className="headline-lg mb-4">Access our full Research Portal.</h2>
          <p className="[color:var(--on-surface-variant)] max-w-[500px] mx-auto mb-16">
            Registered clients get access to live fund analytics, portfolio performance attribution, and AI-generated market insights — all in one place.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://research.vpwwealth.com" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8" id="learn-portal-btn">
              Open Research Portal ↗
            </a>
            <Link to="/contact" className="btn-ghost mt-8" id="learn-portal-register-btn">
              Register as Client
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
