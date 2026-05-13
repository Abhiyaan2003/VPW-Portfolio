import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'
import Magnetic from '../components/Magnetic'
import './PageHero.css'
import './About.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const BELIEFS = [
  {
    numeral: 'I',
    title: 'Clarity is the Highest Form of Sophistication',
    quote: '"True sophistication isn\'t about complexity. It\'s about excellence — refined until it is simple enough to act on."',
    body: 'The financial industry has a long tradition of mistaking complexity for credibility. VPW is built on the opposite premise. Every report, every signal, every conversation is designed to end with one thing: a clearer basis for a better decision.',
  },
  {
    numeral: 'II',
    title: 'Technology Without a Point of View Is Just Speed',
    quote: '"Our AI doesn\'t replace human judgment. It sharpens it — and delivers it faster than any analyst working alone."',
    body: 'We deploy proprietary machine learning not as a marketing word but as a genuine edge — in research depth, signal generation, risk management, and the personalisation of advice at institutional scale.',
  },
  {
    numeral: 'III',
    title: 'Long-Term Legacy Over Short-Lived Luck',
    quote: '"We have never seen a brilliant trade replace a sound financial plan. We have seen many brilliant trades destroy one."',
    body: 'Our entire framework is calibrated to the investor\'s actual time horizon — not the market\'s noise cycle. Patient capital, managed with discipline, is still the most reliable wealth-creation mechanism ever discovered.',
  },
  {
    numeral: 'IV',
    title: 'Every Interaction Is a Test of the Relationship',
    quote: '"The quality of a wealth institution is not revealed in a bull market. It is revealed at 3 am when the market is falling and the phone rings."',
    body: 'Trust is not built in years — it is built in moments of pressure. We design every client touchpoint to be worthy of that pressure: clear, honest, and unhurried.',
  },
]

const BUILT_FOR = [
  { icon: 'business_center', label: 'The Professional', title: 'The High Earner', desc: "Senior specialists whose wealth hasn't kept pace with their income — deserving institutional seriousness." },
  { icon: 'storefront', label: 'The Entrepreneur', title: 'The Builder', desc: 'Business owners building personal wealth with the same rigour as their enterprises — separating risks.' },
  { icon: 'family_restroom', label: 'The Planner', title: 'The Family', desc: 'Those thinking in decades, for whom investment decisions are downstream of life decisions.' },
  { icon: 'auto_graph', label: 'The Inheritor', title: 'The First Gen', desc: 'Navigating new terrain with a need for intelligence and depth, not intimidation or condescension.' },
]
/* Note: Reduced to 4 items for perfect 4x4 grid symmetry as requested */

export default function About() {
  return (
    <div className="about-root">

      {/* ── Page Hero ── */}
      <section className="page-hero" aria-label="About VPW Wealth">
        <div className="container hero-content">
          <RevealOnScroll direction="down" distance={30}>
            <div className="section-label label-sm">Who We Are</div>
          </RevealOnScroll>
          <motion.h1
            className="display-xl hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            We Don't Manage Wealth.<br />
            <span className="accent-text">We Give It Architecture.</span><br />
            And a Reason to Endure.
          </motion.h1>
          <motion.p
            className="body-lg hero-subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            There are hundreds of institutions in India that will manage your money. Very few have the discipline to ask — before any product is placed, before any portfolio is constructed — what is this money actually for? At VPW, that question is not the beginning of a conversation. It is the entire foundation of one.
          </motion.p>
        </div>
      </section>

      {/* ── Founding Story ── */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container">
          <div className="about-story-grid">
            <RevealOnScroll direction="left" distance={40}>
              <div className="story-panel">
                <div className="section-label label-sm" style={{ color: 'var(--primary)', marginBottom: 24 }}>The Founding Idea</div>
                <h2 id="story-heading" className="headline-lg" style={{ marginBottom: 28 }}>
                  Born From a <br /><span className="accent-text">Specific Dissatisfaction.</span>
                </h2>
                <div className="story-content">
                  <p className="body-md">
                    VPW was not born from a gap in the market. It was born from a gap in the experience — the persistent, industry-wide failure to treat the Indian investor as someone whose financial life deserves more than a product category and a risk appetite questionnaire.
                  </p>
                  <p className="body-md">
                    India's professionals — its doctors, architects, engineers, entrepreneurs, and senior executives — have spent decades building incomes that the financial industry has been content to receive but not truly serve.
                  </p>
                  <p className="body-md highlight">
                    VPW was built as the answer to that dissatisfaction. Not just a better product — a fundamentally different relationship between an investor and the institution that holds their trust.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" distance={40} delay={0.2}>
              <div className="story-panel">
                <div className="section-label label-sm" style={{ color: 'var(--secondary)', marginBottom: 24 }}>The Founding Belief</div>
                <h2 className="headline-lg" style={{ marginBottom: 28 }}>
                  Finance Is Not About <br /><span style={{ fontStyle: 'italic', color: 'var(--secondary)' }}>Numbers. It Is About Narratives.</span>
                </h2>
                <div className="story-content">
                  <p className="body-md">
                    Every portfolio tells a story. The story of a family that chose education over indulgence for a decade, of a professional who delayed gratification and invested the difference, of a first-generation wealth builder who decided that their children would inherit opportunity, not obligation.
                  </p>
                  <p className="body-md">
                    The numbers are the instrument. The life is the music. At VPW, we tune both. Our AI-powered intelligence framework processes the data that markets produce with institutional precision — but the output is always returned to a human question: <strong>what does this mean for the life this investor is building?</strong>
                  </p>
                  <p className="body-md">
                    Because when the market shocks — and it always does — the investor who understands why they are invested stays invested. And staying invested, at the right quality, over the right time, is the entire mechanism of wealth.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── What We Believe ── */}
      <section className="section beliefs-section" aria-labelledby="beliefs-heading">
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="section-header">
              <h2 id="beliefs-heading" className="headline-lg">What We Believe.</h2>
              <span className="label-sm">The four convictions that govern everything</span>
            </div>
          </RevealOnScroll>

          <motion.div
            className="service-bento-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {BELIEFS.map(({ numeral, title, quote, body }) => (
              <motion.div key={numeral} variants={itemVariants} className="service-card">
                <div className="service-card-accent" />
                <div className="service-icon-box" style={{ borderRadius: '50%', fontWeight: 700 }}>
                  {numeral}
                </div>
                <h3 style={{ fontSize: '1.25rem' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem' }}>{body}</p>
                <div className="service-link-wrapper">
                  <span className="accent-font" style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>
                    {quote}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section vm-section" aria-labelledby="vision-mission-heading">
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="vm-header">
              <div className="section-label label-sm">Our Purpose</div>
              <h2 id="vision-mission-heading" className="headline-lg">
                Built for India.<br />
                <span className="accent-text">Answerable to Every Life It Touches.</span>
              </h2>
              <p className="body-md vm-intro">
                Two statements. One purpose. The Vision is where we are going. The Mission is our covenant to get there.
              </p>
            </div>
          </RevealOnScroll>

          <div className="about-vm-grid">
            {/* Vision */}
            <RevealOnScroll direction="left">
              <div className="vm-panel vision-panel">
                <div className="section-label label-sm vision-label">I — The Vision</div>
                <h3 className="headline-md vm-title">
                  To Lead India's Future.<br />
                  <span className="accent-text">With Pride. Integrity. Without Exception.</span>
                </h3>
                <p className="vm-quote">
                  "We do not dream in balance sheets. We dream in the scale of what India could become — and the role an institution with the right values could play in getting it there."
                </p>
                <div className="vm-body">
                  <p>India is not simply a market. It is a civilisation in ascent. The financial architecture that serves this country shapes not just portfolios but possibilities.</p>
                  <p>VPW exists to be that architecture. We lead with pride, earned through results. We lead with integrity, choosing the right path over the profitable one. We lead with the long view, for India's future is generational.</p>
                </div>
                <div className="vm-pillars">
                  {[
                    { n: 'I', t: 'Lead with Integrity', d: '"Not the loudest institution. The most trusted."' },
                    { n: 'II', t: 'Scale with Purpose', d: '"Largest not as a rank, but as a reach."' },
                    { n: 'III', t: 'Endure for the Nation', d: '"Built to last generations."' },
                  ].map(({ n, t, d }) => (
                    <div key={n} className="pillar-item card glass">
                      <div className="belief-numeral">{n}</div>
                      <div className="pillar-content">
                        <div className="pillar-title">{t}</div>
                        <div className="pillar-desc">{d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Mission */}
            <RevealOnScroll direction="right" delay={0.2}>
              <div className="vm-panel mission-panel">
                <div className="section-label label-sm mission-label">II — The Mission</div>
                <h3 className="headline-md vm-title">
                  One Crore Families.<br />
                  <span style={{ color: 'var(--secondary)', fontStyle: 'italic' }}>One Covenant. For Generations.</span>
                </h3>
                <p className="vm-quote">
                  "A mission is only worth the specificity of its ambition. Ours is specific — and its weight is felt in every investor who trusts us."
                </p>
                <div className="vm-body">
                  <p>One crore investors. ₹1.85 lakh crore of assets under management. A platform built across Stocks, PMS, and Specialised Funds — each designed to the highest global standard.</p>
                  <p>The mechanism of this promise rests on service quality, technological edge via AI, and continuous improvement. We will be reliable for generations.</p>
                </div>
                <div className="vm-pillars">
                  {[
                    { n: 'I', t: '1Cr+ Investors by 2030', d: '"Not a target. A responsibility — one family at a time."' },
                    { n: 'II', t: '₹1.85 Lakh Crore AUM', d: '"Built on performance, not just inflows."' },
                  ].map(({ n, t, d }) => (
                    <div key={n} className="pillar-item card glass">
                      <div className="belief-numeral" style={{ color: 'var(--secondary)' }}>{n}</div>
                      <div className="pillar-content">
                        <div className="pillar-title">{t}</div>
                        <div className="pillar-desc">{d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Who We Built For ── */}
      <section className="section built-for-section" aria-labelledby="built-for-heading">
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="section-header">
              <div className="section-label label-sm">Target Audience</div>
              <h2 id="built-for-heading" className="headline-lg">
                Built for a <span className="accent-text">Particular Kind of Person.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <motion.div
            className="service-bento-grid built-for-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {BUILT_FOR.map((item) => (
              <motion.div key={item.label} variants={itemVariants} className="service-card">
                <div className="service-card-accent" />
                <div className="service-icon-box">
                  <span className="material-icons">{item.icon}</span>
                </div>
                <div className="label-sm" style={{ marginBottom: 8, fontSize: '0.65rem' }}>{item.label}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="section work-section" aria-labelledby="how-we-work-heading">
        <div className="container">
          <RevealOnScroll direction="up">
            <h2 id="how-we-work-heading" className="headline-lg work-title">
              An <span className="accent-text">AI-Powered</span> Intelligence Core.<br />
              A Profoundly <span className="accent-text">Human</span> Heart at Its Centre.
            </h2>
          </RevealOnScroll>
          <motion.div
            className="grid-2 work-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="service-card intelligence-layer">
              <div className="service-card-accent" />
              <div className="layer-header" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div className="layer-dot" style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--primary)' }} />
                <h3 style={{ margin: 0 }}>The Intelligence Layer</h3>
              </div>
              <div className="layer-content">
                <p>VPW's AI engine runs three continuous systems — Macro Regime classification, Sector Rotation tracking, and Portfolio Stress scenarios.</p>
                <p>This intelligence is delivered across three registers: the Weekly Deep Dive, Thematic Intelligence, and Flash Notes — all calibrated to the urgency of your decisions.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="service-card human-layer">
              <div className="service-card-accent" />
              <div className="layer-header" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div className="layer-dot" style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--secondary)' }} />
                <h3 style={{ margin: 0 }}>The Human Layer</h3>
              </div>
              <div className="layer-content">
                <p>Every piece of intelligence is governed by a human framework — mapping global shocks to Indian portfolios and anchoring allocations to life objectives.</p>
                <p>Our platform across Stocks, PMS, and Funds serves three architectures: Retirement, Education, and Legacy. We build the life, not just the balance sheet.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-final" aria-label="Connect with VPW">
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="cta-final-card glass">
              <h2 className="headline-lg">Connect with our team.</h2>
              <p className="body-md">
                Whether you're looking to start investing or seeking a second opinion on your existing portfolio, we'd love to hear from you.
              </p>
              <div className="cta-final-actions">
                <Magnetic>
                  <Link to="/contact" className="btn-primary" id="about-contact-btn">Get in Touch</Link>
                </Magnetic>
                <Magnetic>
                  <Link to="/methodology" className="btn-ghost" id="about-methodology-btn">Read Our Methodology</Link>
                </Magnetic>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  )
}

