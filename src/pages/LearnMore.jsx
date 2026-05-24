import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, animate } from 'framer-motion'
import RevealOnScroll from '../components/RevealOnScroll'
import './LearnMore.css'

const WA_HREF = 'https://wa.me/919999999999?text=Hello%2C%20I%20want%20to%20start%20investing%20with%20VPW%20Wealth'

const PROBLEM_POINTS = [
  'Switching between 4–6 apps for different asset classes',
  'Shallow "robo-advisors" with no real intelligence',
  'No holistic view of your wealth and goals',
  'Research scattered across platforms, rarely personalized',
  'Middle-class investors locked out of premium products',
  'No one managing the bigger picture on your behalf',
]

const STEPS = [
  {
    number: '01',
    icon: 'track_changes',
    title: 'Plan',
    desc: 'Your wealth journey starts with a real plan — not a generic questionnaire. AI-powered goal mapping, risk profiling, and strategic allocation built around your life, your ambitions, and your timeline.',
  },
  {
    number: '02',
    icon: 'account_balance_wallet',
    title: 'Invest',
    desc: 'Access equities, mutual funds, ETFs, bonds, gold, silver, SIFs, and alternative investments — all in one place. Premium investment products that were once reserved for the privileged few, now within reach.',
  },
  {
    number: '03',
    icon: 'query_stats',
    title: 'Manage',
    desc: 'Ongoing portfolio intelligence — not set-and-forget. AI-driven observations, risk scoring, rebalancing signals, and research insights keep your wealth strategy in sync with a changing world.',
  },
]

const AI_FEATURES = [
  {
    icon: 'analytics',
    title: 'AI Portfolio Analytics',
    desc: 'Real-time observation of your portfolio — identifying concentration risks, performance patterns, and emerging opportunities aligned with your goals.',
  },
  {
    icon: 'speed',
    title: 'AI Risk Scoring',
    desc: 'Dynamic risk intelligence that adapts to market conditions. Know where you stand — before markets move, not after.',
  },
  {
    icon: 'public',
    title: 'AI Market Analysis',
    desc: 'Macro and thematic signals processed at scale. Institutional-grade market intelligence, synthesized and delivered without the jargon.',
  },
  {
    icon: 'auto_awesome',
    title: 'AI Research Summarization',
    desc: 'Thousands of data points, sector reports, and market research — distilled into clear, actionable wealth insights every day.',
  },
  {
    icon: 'grid_view',
    title: 'AI Strategic Allocation Support',
    desc: 'Not just what to hold — but how much, when, and why. Strategic allocation guidance informed by data, not commissions.',
  },
]

const AI_CHIPS = [
  'Portfolio Intelligence',
  'Wealth Insights',
  'Risk Scoring',
  'Market Analysis',
  'Research Digest',
  'Goal Tracking',
  'Allocation Signals',
  'Sector Research',
  'Macro Intelligence',
  'Thematic Alerts',
  'Rebalancing Cues',
  'Performance Analytics',
]

const UNIVERSE = [
  { name: 'Equities', icon: '📈' },
  { name: 'Mutual Funds', icon: '🏛️' },
  { name: 'ETFs', icon: '◈' },
  { name: 'Bonds', icon: '📄' },
  { name: 'Gold', icon: '🥇' },
  { name: 'Silver', icon: '⬡' },
  { name: 'Infrastructure', icon: '🏗️' },
  { name: 'PMS Access', icon: '◆' },
  { name: 'SIF Access', icon: '🔐' },
  { name: 'Alternatives', icon: '🌐' },
]

const TIERS = [
  {
    id: 'first',
    badge: 'Entry Tier',
    name: 'First',
    tagline: '"I have started building wealth."',
    eligibility: 'No Minimum Portfolio',
    features: [
      'AI wealth intelligence access',
      'Standard investment execution',
      'Entry into VPW ecosystem',
      'Low-friction onboarding',
      'Goal planning tools',
    ],
    letter: 'F',
  },
  {
    id: 'axis',
    badge: 'Builder Tier',
    name: 'Axis',
    tagline: '"I am becoming financially powerful."',
    eligibility: 'Min. ₹5 Lakh Portfolio',
    features: [
      'Everything in First, plus:',
      'Research portal access',
      'SIF investment access',
      'Priority servicing & support',
      'VPW Forest Prepaid Card eligibility',
      'Wealth intelligence positioning',
      'Higher relationship management layer',
    ],
    featured: true,
    letter: 'A',
  },
  {
    id: 'circle',
    badge: 'Elite Tier',
    name: 'Circle',
    tagline: '"I belong within elite financial circles."',
    eligibility: 'Min. ₹25 Lakh Portfolio',
    features: [
      'Everything in Axis, plus:',
      'Research terminal access',
      'International SIF access',
      'Private wealth community',
      'Dedicated wealth desk',
      'VPW Gold Prepaid Card eligibility',
      'Premium relationship management',
      'Invitation-only elite network (future)',
    ],
    letter: 'C',
  },
]

const FOUNDING_PERKS = [
  { value: '₹20L', label: 'AUM fee waived up to ₹20 Lakh' },
  { value: '₹399', label: 'Annual maintenance — 5 years' },
  { value: '5 Yr', label: 'Platform fee waived — first 5 years' },
  { value: '1:1', label: 'Exclusive consultation access' },
  { value: '∞', label: 'Research access included' },
]

const RESEARCH_CARDS = [
  {
    icon: 'insert_chart_outlined',
    title: 'Market Reports',
    desc: 'Regular macroeconomic and market briefings synthesized for actionable wealth intelligence.',
  },
  {
    icon: 'business',
    title: 'Sector Research',
    desc: 'Deep-dive sector analysis and thematic reports covering emerging opportunities across Indian and global markets.',
  },
  {
    icon: 'psychology',
    title: 'AI-Generated Insights',
    desc: 'Machine intelligence synthesizing thousands of data signals into concise, decision-ready insights for your portfolio.',
  },
  {
    icon: 'description',
    title: 'Investment Strategy Papers',
    desc: 'Institutional-quality strategic research — the kind previously gatekept behind private banking relationships.',
  },
  {
    icon: 'schema',
    title: 'Model Portfolios',
    desc: 'Curated model portfolios across risk profiles and investment goals, backed by rigorous research methodology.',
  },
]

const INSPIRED_BY = [
  { name: 'Bloomberg Terminal', role: 'Research ecosystem' },
  { name: 'BlackRock Intelligence', role: 'Asset intelligence at scale' },
  { name: 'McKinsey Research', role: 'Depth of analysis' },
  { name: 'Private Banking', role: 'Relationship-driven access' },
]

function FoundingCounter() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 250, {
        duration: 2.0,
        ease: 'easeOut',
        onUpdate: (value) => setCount(Math.round(value)),
      })
      return () => controls.stop()
    }
  }, [isInView])

  return (
    <div ref={ref} className="founding-counter body-md">
      Only <span className="counter-number">{count}</span> founding memberships available
    </div>
  )
}

export default function LearnMore() {
  const tiersRef = useRef(null)

  const handleScrollToTiers = (e) => {
    e.preventDefault()
    tiersRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="learn-root page-enter">
      {/* Hero Section */}
      <section className="learn-hero">
        <div className="learn-hero-bg" />
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="hero-divider-line" />
            <div className="section-label label-sm">Victoria Paradise Wealth</div>
            <h1 className="display-xl learn-hero-headline">
              Not just investing —<br />
              <span className="accent-font gradient-text block-span">a wealth operating system</span>
              built for India.
            </h1>
            <p className="body-lg learn-hero-subtext">
              AI-driven investment intelligence for India's emerging affluent. We handle the complexity — you focus on building wealth.
            </p>
            
            <div className="learn-hero-pillars">
              <div className="learn-pillar">
                <span className="pillar-dot" /> Plan
              </div>
              <div className="learn-pillar">
                <span className="pillar-dot" /> Invest
              </div>
              <div className="learn-pillar">
                <span className="pillar-dot" /> Manage
              </div>
            </div>

            <div className="learn-hero-scroll">
              <div className="scroll-indicator-line" />
              Scroll to explore
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="learn-section section-problem">
        <div className="container">
          <RevealOnScroll>
            <div className="section-label label-sm">The Problem</div>
            <h2 className="headline-lg learn-section-title">
              Indian investors deserve <span className="italic-accent">better</span> than juggling apps.
            </h2>
          </RevealOnScroll>

          <div className="problem-grid">
            <RevealOnScroll direction="left" delay={0.1} className="problem-text">
              <p>
                Today's serious investor is drowning in noise. <strong>Multiple apps. Conflicting advice. Endless DIY research.</strong> Time that should go toward building wealth gets lost in managing complexity.
              </p>
              <p>
                The existing landscape gives you either <strong>discount brokerage with no guidance</strong>, or expensive private wealth management that's still stuck in the last decade.
              </p>
              <p>
                VPW was built to fill the gap — institutional-grade intelligence, AI-powered planning, and a single platform that handles everything.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={0.2}>
              <ul className="problem-list">
                {PROBLEM_POINTS.map((point, index) => (
                  <li key={index} className="problem-list-item">
                    <span className="problem-list-bullet">—</span>
                    <span className="body-md">{point}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="learn-section section-how-it-works">
        <div className="container">
          <RevealOnScroll>
            <div className="section-label label-sm">How VPW Works</div>
            <h2 className="headline-lg learn-section-title">
              Three things. <span className="italic-accent">Done right.</span>
            </h2>
          </RevealOnScroll>

          <div className="how-steps-grid">
            {STEPS.map((step, i) => (
              <RevealOnScroll key={step.number} delay={i * 0.1}>
                <div className="step-card">
                  <div className="step-card-hover-border" />
                  <div className="step-number">{step.number}</div>
                  <div className="step-icon-wrapper">
                    <span className="material-icons">{step.icon}</span>
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc body-sm">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* AI Ecosystem Section */}
      <section className="learn-section section-ai-ecosystem">
        <div className="container">
          <RevealOnScroll>
            <div className="section-label label-sm">AI Intelligence Engine</div>
            <h2 className="headline-lg learn-section-title">
              Your <span className="italic-accent">personal</span> financial intelligence system.
            </h2>
          </RevealOnScroll>

          <div className="ai-engine-grid">
            <div className="ai-features-list">
              {AI_FEATURES.map((feature, i) => (
                <RevealOnScroll key={feature.title} delay={i * 0.05} className="ai-feature-row">
                  <div className="ai-feature-icon-box">
                    <span className="material-icons">{feature.icon}</span>
                  </div>
                  <div className="ai-feature-content">
                    <h4 className="ai-feature-title">{feature.title}</h4>
                    <p className="ai-feature-desc body-sm">{feature.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll direction="right" delay={0.2} className="ai-visual-card">
              <h3 className="ai-visual-title">Intelligence Capabilities</h3>
              <div className="ai-chips-container">
                {AI_CHIPS.map((chip) => (
                  <span key={chip} className="ai-chip">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="accent-divider" />
              <p className="ai-roadmap-note body-sm">
                VPW's long-term roadmap includes building fully sovereign AI capabilities — an in-house financial intelligence system designed exclusively for the Indian wealth ecosystem.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Investment Universe Section */}
      <section className="learn-section section-universe">
        <div className="container">
          <RevealOnScroll>
            <div className="universe-header">
              <div>
                <div className="section-label label-sm">Investment Universe</div>
                <h2 className="headline-lg learn-section-title">
                  Everything you need. <span className="italic-accent">One platform.</span>
                </h2>
              </div>
              <p className="universe-header-desc body-md">
                From everyday mutual funds to Specialized Investment Funds and alternative asset access — VPW brings together an investment ecosystem designed for serious wealth builders.
              </p>
            </div>
          </RevealOnScroll>

          <div className="universe-grid">
            {UNIVERSE.map((item, i) => (
              <RevealOnScroll key={item.name} delay={(i % 5) * 0.05}>
                <div className="universe-card">
                  <span className="universe-card-icon" role="img" aria-label={item.name}>
                    {item.icon}
                  </span>
                  <div className="universe-card-name">{item.name}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section ref={tiersRef} className="learn-section section-tiers" id="tiers">
        <div className="container">
          <RevealOnScroll>
            <div className="section-label label-sm">Membership Structure</div>
            <h2 className="headline-lg learn-section-title">
              Choose your <span className="italic-accent">wealth path.</span>
            </h2>
          </RevealOnScroll>

          <div className="tiers-grid">
            {TIERS.map((tier, i) => (
              <RevealOnScroll key={tier.id} delay={i * 0.1}>
                <div className={`tier-card-new ${tier.featured ? 'featured' : ''}`}>
                  <div className="tier-badge-new">{tier.badge}</div>
                  <h3 className="tier-name-new">{tier.name}</h3>
                  <div className="tier-tagline-new">{tier.tagline}</div>
                  <div className="tier-eligibility-new">{tier.eligibility}</div>
                  
                  <ul className="tier-features-list">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="tier-feature-item">
                        <span className="tier-feature-bullet">◆</span>
                        <span className="body-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="tier-bg-letter">{tier.letter}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Member 250 Section */}
      <section className="learn-section section-founding">
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="founding-card">
              <div className="founding-badge">Limited Access — First 250</div>
              <h2 className="headline-lg founding-title">
                VPW Founding <span className="italic-accent">Member 250</span>
              </h2>
              <p className="founding-subtitle body-md">
                A once-only founding membership. The first 250 approved members shape VPW from its inception — with exclusive privileges locked in for years ahead.
              </p>

              <div className="founding-perks-grid">
                {FOUNDING_PERKS.map((perk, i) => (
                  <div key={i} className="perk-box">
                    <div className="perk-value">{perk.value}</div>
                    <div className="perk-label body-xs">{perk.label}</div>
                  </div>
                ))}
              </div>

              <FoundingCounter />

              <div className="founding-action">
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Apply for Founding Membership
                  <span className="material-icons">arrow_forward</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Research Portal Section */}
      <section className="learn-section section-research">
        <div className="container">
          <RevealOnScroll>
            <div className="section-label label-sm">VPW Research</div>
            <h2 className="headline-lg learn-section-title">
              Intelligence that <span className="italic-accent">moves</span> with markets.
            </h2>
          </RevealOnScroll>

          <div className="research-grid-new">
            <div className="research-features-list">
              {RESEARCH_CARDS.map((card, i) => (
                <RevealOnScroll key={card.title} delay={i * 0.05} className="research-card-row">
                  <div className="research-card-icon-box">
                    <span className="material-icons">{card.icon}</span>
                  </div>
                  <div className="research-card-content">
                    <h4 className="research-card-title">{card.title}</h4>
                    <p className="research-card-desc body-sm">{card.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="research-quote-col">
              <RevealOnScroll direction="right" delay={0.1} className="research-quote-card">
                <blockquote className="research-quote-text">
                  "The terminal for serious Indian wealth — where intelligence meets ambition."
                </blockquote>
                <cite className="research-quote-source">— VPW Research Vision</cite>
              </RevealOnScroll>

              <RevealOnScroll direction="right" delay={0.2} className="inspiration-card">
                <h4 className="inspiration-title">Built with inspiration from</h4>
                <ul className="inspiration-list">
                  {INSPIRED_BY.map((item) => (
                    <li key={item.name} className="inspiration-item">
                      <span className="inspiration-name">{item.name}</span>
                      <span className="inspiration-role body-xs">{item.role}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="learn-section section-vision">
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="section-label label-sm">The Bigger Picture</div>
            <h2 className="display-md vision-headline">
              VPW is not just a platform.<br />
              It is a <span className="italic-accent">wealth intelligence</span> institution in the making.
            </h2>
            <p className="body-lg vision-desc">
              The long-term ambition goes beyond fintech — towards becoming a strategic capital allocator, an AI-driven intelligence network, and an institution that gives Indian investors access to the kind of financial power that was once reserved for the very few.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="learn-section section-final-cta">
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="final-cta-card">
              <div className="section-label label-sm">Begin Your Journey</div>
              <h2 className="headline-lg final-cta-title">
                Ready to build wealth <span className="italic-accent">intelligently</span>?
              </h2>
              <p className="body-md final-cta-desc">
                Join VPW and experience what it feels like when your wealth finally has a strategy, a system, and an intelligence layer working for it.
              </p>
              
              <div className="final-cta-actions">
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Get Started
                  <span className="material-icons">arrow_forward</span>
                </a>
                <a href="#tiers" onClick={handleScrollToTiers} className="btn-ghost">
                  Explore Plans
                </a>
              </div>

              <p className="compliance-footnote body-xs">
                VPW operates in compliance with SEBI and applicable Indian regulatory frameworks. Investment decisions are subject to market risk. Please read all offer documents carefully.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
