import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import Magnetic from '../components/Magnetic';
import './PageHero.css';
import './Methodology.css';

const PILLARS = [
  {
    id: 'doctrine',
    num: 'I',
    eyebrow: 'The Doctrine',
    title: 'We Begin Where Others End.',
    hook: '"Most platforms tell you what happened. We\'re built to tell you what it means."',
    foundingLabel: 'The Founding Belief',
    foundingBelief: '"Wealth is not built on information. It is built on the interpretation of information — at the right depth, at the right time, by the right framework."',
    paragraphs: [
      "The financial industry has a noise problem. It produces extraordinary volumes of data — tickers, earnings calls, policy statements, geopolitical flash points, analyst notes, SIP inflows, FII activity — and delivers the vast majority of it without context, without sequence, and without a point of view. The consumer of this information is left to decide what matters. That is precisely the wrong job for the wrong person at the wrong moment.",
      "VPW was founded on a different premise: that the interpreter is as important as the information itself. A macro shock like an oil crisis above $120 a barrel looks different to a 35-year-old professional building a retirement corpus than it does to a day trader with a Nifty options position. It looks different again to the parent who has earmarked a decade's savings for a child's education. The data doesn't change. The intelligence required to navigate it does. That is the gap VPW was built to close.",
      "We do not believe in generic financial advice — the kind that wears the clothes of sophistication while recommending what a mutual fund brochure already told you. We believe in contextual intelligence: research that knows what it's for, analysis that knows who it's speaking to, and a methodology rigorous enough to hold up in the office of a CFO and clear enough to guide a first-generation wealth builder in Pune."
    ],
    tags: [
      "Contextual intelligence",
      "Not information — interpretation",
      "Depth over speed",
      "Built for the serious investor"
    ]
  },
  {
    id: 'data-architecture',
    num: 'II',
    eyebrow: 'The Data Architecture',
    title: 'The Quality of the Answer Begins With the Quality of the Question.',
    hook: '"Garbage in, confident garbage out — the original sin of financial AI."',
    foundingLabel: 'The Data Principle',
    foundingBelief: '"We do not process what is available. We curate what is relevant — and we treat relevance as a discipline, not a default setting."',
    isTwoColumn: true,
    columns: [
      {
        title: 'Indian Market Intelligence',
        items: [
          'Live and historical data across Nifty, Sensex, sectoral indices, Bank Nifty, India VIX.',
          'FII and DII flow data — daily, monthly, directional.',
          'Exchange-level advance-decline and breadth signals.',
          'RBI policy communications, MPC statements, CPI and WPI series, GDP revisions, credit growth, IIP and core sector prints.'
        ]
      },
      {
        title: 'Global Macro Feeds',
        items: [
          'Federal Reserve dot plots and meeting minutes.',
          'IEA oil market reports and supply disruption alerts.',
          'US PCE and CPI series, labour market data, PMIs.',
          'G7 yield curves.',
          'EM currency pressure indices.',
          'Cross-border capital flow signals from MSCI and Bloomberg EM allocation frameworks.'
        ]
      },
      {
        title: 'Corporate Intelligence Layer',
        items: [
          'Quarterly earnings across NSE 500 constituents — revenue, margin, guidance.',
          'Management commentary for energy-intensive, rate-sensitive, and export-oriented sectors.',
          'Balance sheet stress indicators: debt-to-equity, interest coverage, free cash flow yield.',
          'Cross-sector NIM and credit cost trends for the financial sector.'
        ]
      },
      {
        title: 'Geopolitical & Alternative Signals',
        items: [
          'Energy supply disruption alerts — Hormuz, OPEC+ decisions, SPR releases.',
          'Commodity flow rerouting data.',
          'Satellite shipping traffic near critical chokepoints.',
          'Agricultural output and monsoon deviation indices.',
          'Cross-border acquisition and M&A intelligence for sector rotation signals.'
        ]
      }
    ],
    paragraphs: [
      "Data architecture is only as intelligent as its triage. VPW applies a signal-relevance filter at intake — every data stream is tagged by its historical predictive relationship to Indian equity, bond, and currency markets before it enters the processing layer. If a data point doesn't have a demonstrated transmission channel to the asset classes our investors hold, it does not earn a seat at the table. The world produces too much information for any of it to be treated as automatically important."
    ],
    tags: [
      "Signal-relevance filtering",
      "Indian + global data synthesis",
      "Live & historical",
      "Transmission-channel tagged"
    ]
  },
  {
    id: 'ai-engine',
    num: 'III',
    eyebrow: 'The AI Intelligence Engine',
    title: 'The Machine Does the Arithmetic. The Framework Does the Thinking.',
    hook: '"AI without a doctrine is just a faster way to reach the wrong conclusion."',
    foundingLabel: 'The Intelligence Principle',
    foundingBelief: '"VPW\'s AI is not an oracle. It is a discipline engine — one that applies consistent, institutional rigour to every data point, at a speed and scale no human analyst can match."',
    paragraphs: [
      "There is a particular kind of hubris that has infected certain corners of financial technology — the belief that adding the letters AI to a product is the same as adding intelligence to it. It is not. An algorithm trained on market data without a theoretical framework for how markets work is a highly sophisticated pattern-matcher. It will perform beautifully in the environments it was trained on. It will fail, expensively, when the environment changes — which is precisely when you need it most.",
      "VPW's AI engine is built on a different architecture. The machine does not determine what matters. The framework does. Our proprietary macro transmission model maps the causal pathways through which global shocks — an Iran war, a Fed hold, a rupee at 95 — reach Indian equity, bond, and currency markets. The AI runs this model continuously, updating probability distributions across scenarios as new data arrives. What surfaces to the analyst layer is not raw output — it is prioritised intelligence, pre-organised by its likely impact on the portfolios our investors hold.",
      "Three engines run in parallel. The Macro Regime Engine classifies the current environment — risk-on, risk-off, stagflationary, reflationary, or transitional — and adjusts the weight given to different signal types accordingly. The Sector Rotation Engine tracks the relative positioning of institutional money across sectors and asset classes, identifying where the smart money is rotating before it becomes apparent in index-level price action. The Portfolio Stress Engine tests model portfolios against tail scenarios — sustained oil above $110, rupee at 98, a hawkish RBI pivot — and quantifies the deviation from long-term goal achievement."
    ],
    tags: [
      "Macro Regime Engine",
      "Sector Rotation Engine",
      "Portfolio Stress Engine",
      "Causal pathway modelling",
      "Scenario-probability distributions"
    ]
  },
  {
    id: 'research-protocol',
    num: 'IV',
    eyebrow: 'The Research Protocol',
    title: 'Research Is Not a Product. It Is a Standard.',
    hook: '"We write for the investor who reads twice — not the algorithm that indexes once."',
    foundingLabel: 'The Research Principle',
    foundingBelief: '"Every VPW research output must pass a single test: does it give the reader a clearer basis for a better decision than they had before they read it? If not, it does not leave the desk."',
    paragraphs: [
      "The VPW Research Protocol operates in three registers. The first is the Weekly Market Deep Dive — a comprehensive, structured synthesis of Indian and global market developments, covering headline indices, sector breadth, flow dynamics, macro overlays, and investor implications. It is not a summary of what happened. It is an interpretation of what it means and a framework for what to do about it. Designed to be read on a Sunday evening and actionable by Monday morning.",
      "The second register is the Thematic Intelligence Report — longer form, lower frequency, higher consequence. These are the analyses that address the questions beneath the weekly noise: What does a structurally higher crude price mean for India's current account trajectory over three years? How does the premiumisation of Indian consumption interact with inflationary pressure at different income strata? Where does the formalisation-of-credit thesis stand after two consecutive years of aggressive RBI tightening rhetoric? These reports are written for the investor who thinks in chapters, not headlines.",
      "The third register is the Flash Intelligence Note — reserved for moments when the environment changes fast enough that waiting for the next scheduled publication is itself a risk. When the Strait of Hormuz closes, when the Fed surprises, when the rupee breaches a record, a Flash Note lands in the briefing room within hours — not to react, but to reframe. To give the investor a settled, structured perspective at precisely the moment when the financial media is at its most feverish and least useful."
    ],
    tags: [
      "Weekly Deep Dive",
      "Thematic Intelligence Report",
      "Flash Intelligence Note",
      "Decision-grade output",
      "Macro + sector + portfolio integrated"
    ]
  },
  {
    id: 'portfolio-signal',
    num: 'V',
    eyebrow: 'The Portfolio Signal',
    title: 'Intelligence Is Only as Good as Its Address.',
    hook: '"A research note without a portfolio implication is a newspaper, not a framework."',
    foundingLabel: 'The Signal Principle',
    foundingBelief: '"Every piece of intelligence VPW produces must answer, eventually, one question: what does this mean for the portfolio of the investor reading it?"',
    paragraphs: [
      "The translation of research into portfolio action is where most wealth platforms fail. They produce analysis. They do not produce signals. The distinction is critical. Analysis tells you that pharma outperformed during the oil shock. A signal tells you that at the current macro regime classification — stagflationary tilt, elevated VIX, weak rupee — the historical frequency with which pharma sustains outperformance for 6 to 18 months is 73%, and the median drawdown from current levels before that outperformance crystallises is 4.2%. That is a basis for a decision. Analysis is a basis for a conversation.",
      "VPW's signal layer translates macro regime intelligence into four portfolio directives: Overweight, Market-weight, Underweight, and Accumulate on Weakness. Each directive is accompanied by the time horizon it applies to, the scenario assumptions that would revise it, and the specific risk to the call — the condition under which the signal is wrong and the investor should exit the position. We do not believe in recommendations without exit conditions. That is not research. That is hope with a prospectus.",
      "In the current environment — oil above $115, rupee at record weakness, Fed on extended pause, India VIX elevated — the signal layer outputs: Overweight on IT, pharma, select commodity exporters with strong balance sheets and utility infrastructure. Market-weight to underweight on private financials, NBFCs, autos, and domestic discretionary. Accumulate on weakness in structurally sound large-cap domestic compounders aligned with India's formalisation and digitalisation themes. Reduce concentrated bets in illiquid mid-cap names where macro-driven risk-off can cause disproportionate damage."
    ],
    tags: [
      "Overweight signal",
      "Accumulate on weakness",
      "Time-horizon tagged",
      "Exit conditions stated",
      "Scenario-revision mapped"
    ]
  },
  {
    id: 'investor-alignment',
    num: 'VI',
    eyebrow: 'The Investor Alignment',
    title: 'The Goal Is Not Performance. The Goal Is the Life the Performance Enables.',
    hook: '"We have never met a client who wanted a Sharpe ratio. They wanted a retirement. A school. A legacy."',
    foundingLabel: 'The Alignment Principle',
    foundingBelief: '"Every investment decision VPW supports is anchored to a specific life objective with a specific time horizon — not to a benchmark, not to a peer group, and never to a short-term return target that has no relationship to what the investor actually needs."',
    paragraphs: [
      "The VPW investor is a particular kind of person. They are a senior professional or business owner in a Tier 1 or Tier 2 city who has already done the hard work of earning. The wealth is there, or growing. What is now at stake is its intelligent management — the difference between a corpus that compounds well for twenty years and one that erodes slowly under the weight of inflation, poor allocation, and the tax of reactive decision-making. They are not looking for excitement. They are looking for a framework they can trust.",
      "VPW structures every investor engagement around three primary goal architectures. Retirement Architecture — a long-horizon, SWP-capable portfolio designed to generate inflation-adjusted income at a target age and lifestyle. Education Architecture — a goal-dated portfolio, typically 7 to 15 years, optimised to protect purchasing power against fee inflation while growing the corpus to a target amount with defined drawdown limits. Legacy Architecture — a multigenerational wealth framework built around business succession, estate planning integration, and intergenerational tax efficiency, typically for families managing ₹5 crore or above in investable assets.",
      "Within each architecture, the macro intelligence from the Research and Signal layers is continuously applied — not to move the portfolio reactively with every weekly headline, but to stress-test the architecture against evolving scenarios and make deliberate, structured adjustments when the evidence crosses a threshold. We distinguish between noise that demands no action and signal that demands thoughtful rebalancing. Most weeks, it is the former. The methodology exists precisely so that when it is the latter, the investor knows the difference — and acts accordingly, without emotion, without delay, and without regret."
    ],
    tags: [
      "Retirement Architecture",
      "Education Architecture",
      "Legacy Architecture",
      "Goal-dated",
      "Deliberate rebalancing",
      "Noise vs signal discipline"
    ]
  }
];

export default function Methodology() {
  const [activePillar, setActivePillar] = useState(0);

  const togglePillar = (idx) => {
    setActivePillar(activePillar === idx ? null : idx);
  };

  const handlePillarClick = (idx) => {
    setActivePillar(idx);
    const element = document.getElementById(`mstep-${idx}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="methodology-root">
      {/* ── Page Hero ── */}
      <section className="page-hero" aria-label="Our Methodology">
        <div className="container hero-content">
          <RevealOnScroll direction="down" distance={30}>
            <div className="section-label label-sm">Our Methodology</div>
          </RevealOnScroll>
          <motion.h1
            className="display-xl hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            The Architecture of <br />
            <span className="accent-text" style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Intelligent Wealth.</span>
          </motion.h1>
          <motion.p
            className="body-lg hero-subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every serious institution has a doctrine. A set of principles that govern how it thinks, what it trusts, and what it refuses to do. This is ours — the framework that separates VPW from every other voice in the room that calls itself a wealth platform.
          </motion.p>
        </div>
      </section>

      {/* ── Pillar Navigation Section ── */}
      <section className="section" style={{ background: 'var(--surface-container-lowest)', paddingTop: '60px', paddingBottom: '0px' }} aria-label="Pillar Navigation">
        <div className="container">
          <div className="mpillar-row">
            {PILLARS.map((pillar, idx) => (
              <button
                key={pillar.id}
                className={`mpillar ${activePillar === idx ? 'active' : ''}`}
                onClick={() => handlePillarClick(idx)}
                aria-label={`Go to Pillar ${pillar.num}: ${pillar.eyebrow}`}
              >
                <div className="mpillar-n">Pillar {pillar.num}</div>
                <div className="mpillar-t">{pillar.eyebrow.replace('The ', '')}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="msteps-section">
        <div className="container">
          <div className="msteps">
            {PILLARS.map((pillar, idx) => {
              const isOpen = activePillar === idx;
              return (
                <div
                  key={pillar.id}
                  id={`mstep-${idx}`}
                  className={`mstep ${isOpen ? 'open' : ''}`}
                >
                  <div 
                    className="mstep-header" 
                    onClick={() => togglePillar(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        togglePillar(idx);
                      }
                    }}
                  >
                    <div className="mstep-num">{pillar.num}</div>
                    <div className="mstep-meta">
                      <div className="mstep-eyebrow">{pillar.eyebrow}</div>
                      <h2 className="mstep-title">{pillar.title}</h2>
                      <div className="mstep-hook">{pillar.hook}</div>
                    </div>
                    <div className="mstep-arrow">
                      <span className="material-icons">
                        {isOpen ? 'expand_more' : 'chevron_right'}
                      </span>
                    </div>
                  </div>

                  <div className="mstep-bar-container">
                    <motion.div 
                      className="mstep-bar"
                      initial={{ width: 0 }}
                      animate={{ width: isOpen ? '100%' : '0%' }}
                      transition={{ duration: 0.35 }}
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="mstep-body"
                      >
                        <div className="mstep-inner">
                          <div className="msep"></div>
                          
                          <div className="mprinciple">
                            <div className="mprinciple-label">{pillar.foundingLabel}</div>
                            <div className="mprinciple-text">{pillar.foundingBelief}</div>
                          </div>

                          {pillar.isTwoColumn && pillar.columns && (
                            <div className="mstep-col2">
                              {pillar.columns.map((col, cIdx) => (
                                <div key={cIdx} className="mcol-item">
                                  <h3 className="mcol-title label-md">{col.title}</h3>
                                  <ul className="mcol-list">
                                    {col.items.map((item, iIdx) => (
                                      <li key={iIdx} className="body-sm">{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}

                          {pillar.paragraphs.map((p, pIdx) => (
                            <p 
                              key={pIdx} 
                              className="mpara body-md"
                              dangerouslySetInnerHTML={{
                                __html: p.replace(
                                  /<strong>(.*?)<\/strong>/g, 
                                  '<strong class="highlight-bold">$1</strong>'
                                )
                              }}
                            />
                          ))}

                          <div className="mtag-grid">
                            {pillar.tags.map((tag, tIdx) => (
                              <span 
                                key={tIdx} 
                                className={`mtag ${tIdx === 0 ? 'gold' : ''}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mclose-section">
        <div className="container">
          <RevealOnScroll direction="up">
            <div className="mclose card">
              <h2 className="mclose-hl display-md">
                "The amateur manages money.<br />
                The master manages the architecture <br />
                that money builds."
              </h2>
              <p className="mclose-sub body-md">
                This methodology is not a marketing document. It is the operating system of VPW — the set of principles that govern every report published, every signal generated, and every conversation held with an investor who has trusted us with something more important than capital. They have trusted us with time. And time, in wealth as in life, is the only resource that does not compound on its own.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Magnetic>
                  <Link to="/contact" className="btn-primary" id="meth-briefing-cta">
                    Enter the Briefing Room <span className="arrow-symbol" style={{ marginLeft: '4px' }}>↗</span>
                  </Link>
                </Magnetic>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
