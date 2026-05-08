import { Link } from 'react-router-dom'
import './PageHero.css'
import './About.css'

const TEAM = [
  {
    name: 'Vinod Parikh',
    title: 'Founder & Chief Investment Officer',
    exp: '22 Years Experience',
    bio: 'Former Vice President at Goldman Sachs Asset Management. Pioneer of quantitative investing in Indian markets with a track record spanning three full market cycles.',
  },
  {
    name: 'Priya Mehta',
    title: 'Co-Founder & CEO',
    exp: '18 Years Experience',
    bio: 'IIM Ahmedabad alumna. Former Head of Wealth Advisory at HDFC Bank. Architect of VPW\'s client-first service philosophy and operational excellence framework.',
  },
  {
    name: 'Dr. Arjun Nair',
    title: 'Head of Quantitative Research',
    exp: '15 Years Experience',
    bio: 'PhD in Financial Engineering from IIT Bombay. Built proprietary ML models that power our AI Research Intelligence engine, trained on 20+ years of Indian market data.',
  },
]

const VALUES = [
  { icon: 'gavel', title: 'Integrity', desc: 'We act in the best interest of our clients at all times. Full transparency on fees, methodology, and performance.' },
  { icon: 'science', title: 'Rigor', desc: 'Every investment decision is backed by quantitative research and multi-layered validation before deployment.' },
  { icon: 'groups', title: 'Partnership', desc: 'We view every client as a long-term partner, not a transaction. Our success is measured by their financial well-being.' },
  { icon: 'explore', title: 'Innovation', desc: 'We continuously evolve our models, tools, and processes to maintain a durable edge in a rapidly changing market.' },
]

export default function About() {
  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* ── Page Hero ── */}
      <section className="page-hero" aria-label="About VPW Wealth">
        <div className="container">
          <div className="section-label label-sm">About Us</div>
          <h1 className="display-xl" style={{ maxWidth: 660, marginBottom: 24 }}>
            Two decades of building<br />
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>institutional-grade</span> wealth.
          </h1>
          <p className="body-lg" style={{ maxWidth: 580, color: 'var(--on-surface-variant)' }}>
            VPW Wealth was founded on a singular belief: every Indian investor deserves access to the sophisticated tools and research that were once reserved exclusively for institutional players.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="section-label label-sm">Our Story</div>
              <h2 id="story-heading" className="headline-lg" style={{ marginBottom: 24 }}>
                From the trading floors of Mumbai to your portfolio.
              </h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 20 }}>
                Founded in 2006 by veterans of Goldman Sachs and HDFC, VPW Wealth emerged from a frustration with the status quo — opaque advisory relationships, commission-driven product pushing, and a chronic underinvestment in research quality.
              </p>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 20 }}>
                We built VPW to be different: a research-first, technology-enabled wealth advisory that treats every rupee of client capital with the same rigor applied to a ₹500 crore institutional mandate.
              </p>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                Today, we manage wealth for family offices, corporate treasuries, and thousands of individual investors who share our belief that intelligent, patient investing consistently outperforms market noise.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { number: '2006', label: 'Year Founded' },
                { number: '₹2,400 Cr+', label: 'Assets Under Advisory' },
                { number: '12,000+', label: 'Investors Served' },
                { number: '98%', label: 'Compliance Record' },
              ].map(({ number, label }) => (
                <div key={label} className="card" style={{ textAlign: 'center', padding: '32px 24px' }}>
                  <div className="stat-number">{number}</div>
                  <div className="stat-label" style={{ marginTop: 8 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section" style={{ background: 'var(--surface-container-lowest)' }} aria-labelledby="vision-mission-heading">
        <div className="container">
          <h2 id="vision-mission-heading" className="headline-lg" style={{ textAlign: 'center', marginBottom: 56 }}>
            Vision &amp; Mission
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {/* Vision */}
            <div className="card" style={{ borderColor: 'rgba(242,195,69,0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'rgba(242,195,69,0.1)',
                  border: '1px solid rgba(242,195,69,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 24 }}>visibility</span>
                </div>
                <h3 className="headline-md">Our Vision</h3>
              </div>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.75 }}>
                To become India's most trusted wealth intelligence platform — democratizing institutional-grade research, AI-powered insights, and transparent advisory for every serious investor, regardless of portfolio size.
              </p>
              <div className="divider" />
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                We envision a future where every Indian investor navigates markets with the same clarity, confidence, and analytical edge traditionally reserved for the ultra-wealthy.
              </p>
            </div>

            {/* Mission */}
            <div className="card" style={{ borderColor: 'rgba(191,201,220,0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'rgba(191,201,220,0.1)',
                  border: '1px solid rgba(191,201,220,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-icons" style={{ color: 'var(--tertiary)', fontSize: 24 }}>flag</span>
                </div>
                <h3 className="headline-md">Our Mission</h3>
              </div>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.75 }}>
                To deliver superior, risk-adjusted returns through disciplined, evidence-based investing. We combine proprietary quantitative models with deep qualitative research to construct portfolios that protect capital first and grow it second.
              </p>
              <div className="divider" />
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, color: 'var(--on-surface-variant)', listStyle: 'none' }}>
                {[
                  'Protect investor capital through rigorous risk management',
                  'Deliver consistent, long-term alpha through disciplined research',
                  'Maintain complete transparency in fees, methodology, and performance',
                ].map(m => (
                  <li key={m} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 18, flexShrink: 0, marginTop: 2 }}>check_circle</span>
                    <span style={{ fontSize: '0.9rem' }}>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section" aria-labelledby="values-heading">
        <div className="container">
          <div className="section-label label-sm">Our Core Values</div>
          <h2 id="values-heading" className="headline-lg" style={{ marginBottom: 48 }}>
            The principles that govern everything we do.
          </h2>
          <div className="grid-4">
            {VALUES.map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: '32px' }}>
                <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 32, marginBottom: 20, display: 'block' }}>{icon}</span>
                <h3 style={{ fontFamily: 'Noto Serif', fontSize: '1.1rem', marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--on-surface-variant)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="section" style={{ background: 'var(--surface-container-lowest)' }} aria-labelledby="team-heading">
        <div className="container">
          <div className="section-label label-sm">Leadership</div>
          <h2 id="team-heading" className="headline-lg" style={{ marginBottom: 48 }}>
            Experienced hands at the helm.
          </h2>
          <div className="grid-3">
            {TEAM.map(({ name, title, exp, bio }) => (
              <div key={name} className="card">
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--surface-container-high)', border: '2px solid rgba(242,195,69,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'Noto Serif', fontSize: '1.5rem', color: 'var(--primary)' }}>{name[0]}</span>
                </div>
                <span className="chip" style={{ marginBottom: 12 }}>{exp}</span>
                <h3 style={{ fontFamily: 'Noto Serif', fontSize: '1.15rem', marginBottom: 6 }}>{name}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--primary)', marginBottom: 16, fontWeight: 600 }}>{title}</p>
                <p style={{ fontSize: '0.88rem', color: 'var(--on-surface-variant)', lineHeight: 1.65 }}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" aria-label="Connect with VPW">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="headline-lg" style={{ marginBottom: 16 }}>Connect with our team.</h2>
          <p style={{ color: 'var(--on-surface-variant)', marginBottom: 40 }}>
            Whether you're looking to start investing or seeking a second opinion on your existing portfolio, we'd love to hear from you.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" id="about-contact-btn">Get in Touch</Link>
            <Link to="/methodology" className="btn-ghost" id="about-methodology-btn">Read Our Methodology</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
