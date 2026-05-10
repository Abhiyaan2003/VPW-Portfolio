import { Link } from 'react-router-dom'
import './PageHero.css'
import './About.css'

export default function About() {
  return (
    <div className="page-enter pt-[var(--nav-height)]">
      {/* ── Page Hero: WHO WE ARE ── */}
      <section className="page-hero" aria-label="About VPW Wealth">
        <div className="container">
          <div className="section-label label-sm">WHO WE ARE</div>
          <h1 className="display-xl max-w-[800px] mb-8">
            We Don't Manage Wealth.<br />
            <span className="[color:var(--primary)] italic">We Give It Architecture.</span><br />
            And a Reason to Endure.
          </h1>
          <p className="body-lg max-w-[760px] [color:var(--on-surface-variant)]">
            There are hundreds of institutions in India that will manage your money. Very few have the discipline to ask — before any product is placed, before any portfolio is constructed — what is this money actually for? What life does it need to build? What future does it need to protect? What generation does it need to outlast? At VPW, that question is not the beginning of a conversation. It is the entire foundation of one.
          </p>
        </div>
      </section>

      {/* ── Story / Founding Idea & Belief ── */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container">
          <div className="about-story-grid items-start">
            <div>
              <div className="section-label label-sm [color:var(--primary)]">THE FOUNDING IDEA</div>
              <h2 id="story-heading" className="headline-lg mb-6">
                Born From a <br /><span className="italic [color:var(--primary)]">Specific Dissatisfaction.</span>
              </h2>
              <p className="body-md [color:var(--on-surface-variant)] mb-5 leading-[1.7]">
                VPW was not born from a gap in the market. It was born from a gap in the experience — the persistent, industry-wide failure to treat the Indian investor as someone whose financial life deserves more than a product category and a risk appetite questionnaire.
              </p>
              <p className="body-md [color:var(--on-surface-variant)] mb-5 leading-[1.7]">
                India's professionals — its doctors, architects, engineers, entrepreneurs, and senior executives — have spent decades building incomes that the financial industry has been content to receive but not truly serve. They were offered the same mutual funds, the same generic allocations, the same comfort that someone somewhere was watching their wealth, without the intelligence or the transparency to verify it.
              </p>
              <p className="body-md [color:var(--on-surface)] font-medium leading-[1.7]">
                VPW was built as the answer to that dissatisfaction. Not just a better product — a fundamentally different relationship between an investor and the institution that holds their trust.
              </p>
            </div>
            <div>
              <div className="section-label label-sm [color:var(--tertiary)]">THE FOUNDING BELIEF</div>
              <h2 className="headline-lg mb-6">
                Finance Is Not About <br /><span className="italic [color:var(--tertiary)]">Numbers. It Is About Narratives.</span>
              </h2>
              <p className="body-md [color:var(--on-surface-variant)] mb-5 leading-[1.7]">
                Every portfolio tells a story. The story of a family that chose education over indulgence for a decade, of a professional who delayed gratification and invested the difference, of a first-generation wealth builder who decided that their children would inherit opportunity, not obligation.
              </p>
              <p className="body-md [color:var(--on-surface-variant)] mb-5 leading-[1.7]">
                The numbers are the instrument. The life is the music. At VPW, we tune both. Our AI-powered intelligence framework processes the data that markets produce with institutional precision — but the output is always returned to a human question: <strong className="[color:var(--on-surface)]">what does this mean for the life this investor is building?</strong>
              </p>
              <p className="body-md [color:var(--on-surface-variant)] leading-[1.7]">
                That is not a philosophical luxury. It is the most practical thing a wealth institution can do. Because when the market shocks — and it always does — the investor who understands why they are invested stays invested. And staying invested, at the right quality, over the right time, is the entire mechanism of wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Believe ── */}
      <section className="section [background:var(--surface-container-lowest)]" aria-labelledby="beliefs-heading">
        <div className="container">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
            <div>
              <h2 id="beliefs-heading" className="headline-lg">What We Believe.</h2>
            </div>
            <div className="section-label label-sm mb-2">The four convictions that govern everything</div>
          </div>
          
          <div className="grid-2">
            <div className="card p-8 border-[rgba(242,195,69,0.2)]">
              <div className="[color:var(--primary)] font-serif font-semibold mb-4">I</div>
              <h3 className="headline-md mb-3">Clarity is the Highest Form of Sophistication</h3>
              <p className="body-sm [color:var(--primary)] italic mb-6">
                "True sophistication isn't about complexity. It's about excellence — refined until it is simple enough to act on."
              </p>
              <p className="body-sm [color:var(--on-surface-variant)] leading-[1.7]">
                The financial industry has a long tradition of mistaking complexity for credibility. Jargon accumulates. Products multiply. The investor is left with more information and less clarity than when they began. VPW is built on the opposite premise. Every report we write, every signal we generate, every conversation we have with an investor is designed to end with one thing: a clearer basis for a better decision. If it doesn't achieve that, it hasn't earned its place in the room.
              </p>
            </div>
            
            <div className="card p-8">
              <div className="[color:var(--primary)] font-serif font-semibold mb-4">II</div>
              <h3 className="headline-md mb-3">Technology Without a Point of View Is Just Speed</h3>
              <p className="body-sm [color:var(--primary)] italic">
                "Our AI doesn't replace human judgment. It sharpens it — and delivers it faster than any analyst working alone."
              </p>
            </div>

            <div className="card p-8">
              <div className="[color:var(--primary)] font-serif font-semibold mb-4">III</div>
              <h3 className="headline-md mb-3">Long-Term Legacy Over Short-Lived Luck</h3>
              <p className="body-sm [color:var(--primary)] italic">
                "We have never seen a brilliant trade replace a sound financial plan. We have seen many brilliant trades destroy one."
              </p>
            </div>

            <div className="card p-8">
              <div className="[color:var(--primary)] font-serif font-semibold mb-4">IV</div>
              <h3 className="headline-md mb-3">Every Interaction Is a Test of the Relationship</h3>
              <p className="body-sm [color:var(--primary)] italic">
                "The quality of a wealth institution is not revealed in a bull market. It is revealed at 3am when the market is falling and the phone rings."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section [background:var(--surface-container-lowest)]" aria-labelledby="vision-mission-heading">
        <div className="container">
          <div className="section-label label-sm text-center mb-4">THE TWO TRUTHS THAT DRIVE EVERYTHING</div>
          <h2 id="vision-mission-heading" className="headline-lg text-center mb-6">
            Built for India.<br />
            <span className="[color:var(--primary)] italic">Answerable to Every Life It Touches.</span>
          </h2>
          <p className="body-md text-center max-w-[700px] mx-auto mb-16 [color:var(--on-surface-variant)]">
            Two statements. One purpose. The Vision is where we are going. The Mission is our covenant to get there — with the investors, the families, and the nation that walk alongside us.
          </p>
          <div className="about-vm-grid">
            {/* Vision */}
            <div className="flex flex-col gap-8">
              <div>
                <div className="section-label label-sm mb-4 [color:var(--primary)]">I — THE VISION</div>
                <h3 className="headline-md mb-4 leading-[1.2]">
                  To Lead India's Future.<br />
                  <span className="[color:var(--primary)] italic">With Pride. With Integrity.</span><br />
                  <span className="[color:var(--primary)] italic">Without Exception.</span>
                </h3>
                <p className="body-md [color:var(--on-surface-variant)] italic">
                  "We do not dream in balance sheets. We dream in the scale of what India could become — and the role an institution with the right values could play in getting it there."
                </p>
              </div>

              <div className="card border-[rgba(242,195,69,0.15)] p-6">
                <div className="section-label label-sm mb-3 text-[0.75rem]">THE MORAL COMPASS</div>
                <p className="body-md italic [color:var(--on-surface)]">
                  "Our Vision is not a corporate ambition. It is a moral commitment — to lead, to serve, and to endure in the service of a nation that deserves more than financial transactions. It deserves financial transformation."
                </p>
              </div>

              <div className="flex flex-col gap-5 [color:var(--on-surface-variant)]">
                <p className="body-sm leading-[1.7]">
                  India is not simply a market. It is a civilisation in ascent — one billion and four hundred million people negotiating simultaneously with ancient aspiration and modern ambition. The financial architecture that serves this country shapes not just portfolios but possibilities. It determines which family's child finishes university debt-free, which farmer's household enters the formal economy, which first-generation entrepreneur builds without fear because capital finally has a face they can trust.
                </p>
                <p className="body-sm leading-[1.7]">
                  VPW exists to be that architecture. <strong className="[color:var(--on-surface)]">India's largest financial and non-financial conglomerate</strong> — not because scale is the aspiration, but because only at true institutional scale can you reach the lives that the market, left to its own geometry, will always underserve. Every product we build, every service we offer, every rupee of wealth we help compound points toward a single, non-negotiable north star: <strong className="[color:var(--on-surface)]">eliminate poverty, make lives better, bring goodness.</strong>
                </p>
                <p className="body-sm leading-[1.7]">
                  We lead with pride — the pride of an institution that earns its standing every single day, not one that inherited it. We lead with integrity — which is to say, we will not do what is profitable if it contradicts what is right. And we lead with the long view, because India's future is not a five-year project. It is a generational one. And we intend to be relevant for all of it.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { title: 'Lead with Integrity', desc: '"Not the loudest institution in the room. The most trusted one."' },
                  { title: 'Scale with Purpose', desc: '"Largest not as a rank, but as a reach — more lives in more cities, with more hope."' },
                  { title: 'Endure for the Nation', desc: '"Built to last generations."' }
                ].map((item, i) => (
                  <div key={item.title} className="card p-4 flex gap-4 items-start">
                    <div className="[color:var(--primary)] font-serif font-semibold">{i === 0 ? 'I' : i === 1 ? 'II' : 'III'}</div>
                    <div>
                      <div className="font-semibold text-[0.95rem] [color:var(--on-surface)] mb-1">{item.title}</div>
                      <div className="text-[0.85rem] [color:var(--on-surface-variant)] italic">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="flex flex-col gap-8">
              <div>
                <div className="section-label label-sm mb-4 [color:#4ade80]">II — THE MISSION</div>
                <h3 className="headline-md mb-4 leading-[1.2]">
                  One Crore Families.<br />
                  <span className="[color:#4ade80] italic">One Covenant.</span><br />
                  <span className="[color:#4ade80] italic">For Generations.</span>
                </h3>
                <p className="body-md [color:var(--on-surface-variant)] italic">
                  "A mission is only worth the specificity of its ambition. Ours is specific — and its weight is felt in every investor who trusts us with what money cannot replace: time."
                </p>
              </div>

              <div className="card border-[rgba(74,222,128,0.15)] p-6">
                <div className="section-label label-sm mb-3 text-[0.75rem] [color:#4ade80]">THE FIVE-YEAR COVENANT</div>
                <p className="body-md italic [color:var(--on-surface)]">
                  "In five years — through intelligence that never sleeps, service that never compromises, and technology that never settles — VPW will be the wealth institution that one crore Indian investors invite into their most consequential financial decisions."
                </p>
              </div>

              <div className="flex flex-col gap-5 [color:var(--on-surface-variant)]">
                <p className="body-sm leading-[1.7]">
                  One crore investors. ₹1.85 lakh crore of assets under management. A platform built across <strong className="[color:var(--on-surface)]">Stocks, Portfolio Management Services, and Specialised Investment Funds</strong> — each product designed to the standard of the finest the industry has ever offered, then continuously improved beyond it. This is not a growth projection for a board meeting. This is a promise made in the language of accountability — to every investor who has ever wondered whether India has a wealth institution worthy of their ambition.
                </p>
                <p className="body-sm leading-[1.7]">
                  The mechanism of this promise rests on three disciplines that are not strategies, but standards. <strong className="[color:var(--on-surface)]">Service quality</strong> that treats every investor — whether they hold ₹5 lakh or ₹5 crore — as the most consequential person in the room. <strong className="[color:var(--on-surface)]">Technological advancement</strong> that deploys AI not as a marketing word but as a genuine edge — in research depth, in signal generation, in risk management, and in the personalisation of advice at scale. And <strong className="[color:var(--on-surface)]">continuous improvement</strong> — the institutional habit of asking, every single quarter, whether we are as good as we need to be, and then building toward the honest answer.
                </p>
                <p className="body-sm leading-[1.7]">
                  Reliability is not a feature. At VPW, it is the definition of the institution itself. The parent saving for a daughter's education and the professional building a retirement corpus deserve the same thing: an institution they can trust not just today but in ten years, not just in a bull market but in a crisis, not just for themselves but for the children who will inherit the consequences of these decisions. <strong className="[color:var(--on-surface)]">We will be reliable for generations.</strong> That is the sentence our Mission is built to earn.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { title: '1Cr+ Investors by 2030', desc: '"Not a target. A responsibility — one family at a time, one city at a time."' },
                  { title: '₹1.85 Lakh Crore AUM', desc: '"Built on performance, not just inflows."' }
                ].map((item, i) => (
                  <div key={item.title} className="card p-4 flex gap-4 items-start">
                    <div className="[color:#4ade80] font-serif font-semibold">{i === 0 ? 'I' : 'II'}</div>
                    <div>
                      <div className="font-semibold text-[0.95rem] [color:var(--on-surface)] mb-1">{item.title}</div>
                      <div className="text-[0.85rem] [color:var(--on-surface-variant)] italic">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Built For ── */}
      <section className="section" aria-labelledby="built-for-heading">
        <div className="container">
          <div className="section-label label-sm">WHO WE BUILT FOR</div>
          <h2 id="built-for-heading" className="headline-lg mb-12">
            We Were Built for a <span className="italic [color:var(--primary)]">Particular Kind of Person.</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pb-6">
            {[
              { label: 'THE PROFESSIONAL', title: 'The High Earner Who Has Outgrown the Generic', desc: "Senior executives, doctors, lawyers, and specialists who earn well but whose wealth hasn't kept pace with their income — because no institution has served them with the seriousness their financial life deserves." },
              { label: 'THE ENTREPRENEUR', title: 'The Builder Who Now Needs to Build a Balance Sheet', desc: 'Business owners who have built enterprises and now need to build personal wealth with the same rigour — separating business risk from personal portfolio, structuring for succession and legacy.' },
              { label: 'THE PLANNER', title: 'The Family Thinking in Decades, Not Quarters', desc: 'Parents building education funds, couples planning retirements, families structuring legacies — those for whom the investment decision is always downstream of a life decision that deserves to be taken seriously.' },
              { label: 'THE INHERITOR', title: 'The First-Generation Wealth Builder in a Tier 1 or 2 City', desc: 'Educated, ambitious, and acutely aware that they are the first in their family to navigate this terrain. They need intelligence, not intimidation. Depth, not condescension.' },
              { label: 'THE SERIOUS', title: 'Anyone Who Believes Their Money Deserves More Than a Generic Plan', desc: 'The single qualification for a VPW investor is not a net worth figure. It is a disposition: the belief that wealth management is a serious discipline that deserves a serious institution.' }
            ].map((item, i) => (
              <div key={i} className="min-w-0">
                <div className="section-label label-sm [color:var(--primary)] mb-3 text-[0.7rem]">{item.label}</div>
                <h4 className="font-serif text-base mb-4 leading-[1.4] [color:var(--on-surface)]">{item.title}</h4>
                <p className="text-[0.85rem] [color:var(--on-surface-variant)] leading-[1.6] italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="section [background:var(--surface-container-lowest)]" aria-labelledby="how-we-work-heading">
        <div className="container">
          <div className="section-label label-sm">HOW WE WORK</div>
          <h2 id="how-we-work-heading" className="headline-lg mb-12 max-w-[800px]">
            An <span className="italic [color:var(--primary)]">AI-Powered</span> Intelligence Core.<br />
            A Profoundly <span className="italic [color:var(--primary)]">Human</span> Heart at Its Centre.
          </h2>

          <div className="grid-2">
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full [background:var(--primary)]" />
                <h3 className="headline-md">The Intelligence Layer</h3>
              </div>
              <p className="body-sm [color:var(--on-surface-variant)] leading-[1.7] mb-5">
                VPW's AI engine runs three continuous systems — a Macro Regime Engine that classifies the market environment in real time, a Sector Rotation Engine that tracks institutional money flows before they surface in price action, and a Portfolio Stress Engine that tests every model allocation against tail scenarios. Together, they process what the market produces and surface what it means — at a speed and depth no analyst team working alone can match.
              </p>
              <p className="body-sm [color:var(--on-surface-variant)] leading-[1.7]">
                This intelligence is delivered across three research registers: the Weekly Deep Dive, the Thematic Intelligence Report, and the Flash Intelligence Note — each calibrated to the time horizon and urgency of the decision it supports.
              </p>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
                <h3 className="headline-md">The Human Layer</h3>
              </div>
              <p className="body-sm [color:var(--on-surface-variant)] leading-[1.7] mb-5">
                Every piece of VPW intelligence is governed by a human framework — the macro transmission model that maps how global shocks reach Indian portfolios, the investment philosophy that distinguishes noise from signal, and the goal architecture that anchors every allocation to a specific life objective with a specific time horizon.
              </p>
              <p className="body-sm [color:var(--on-surface-variant)] leading-[1.7]">
                Our platform spans Stocks, Portfolio Management Services, and Specialised Investment Funds — not as a product menu, but as a toolkit deployed in service of three goal architectures: Retirement, Education, and Legacy. The product follows the purpose. It has never been the other way around at VPW.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" aria-label="Connect with VPW">
        <div className="container text-center">
          <h2 className="headline-lg mb-4">Connect with our team.</h2>
          <p className="[color:var(--on-surface-variant)] mb-14">
            Whether you're looking to start investing or seeking a second opinion on your existing portfolio, we'd love to hear from you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn-primary mt-8" id="about-contact-btn">Get in Touch</Link>
            <Link to="/methodology" className="btn-ghost mt-8" id="about-methodology-btn">Read Our Methodology</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
