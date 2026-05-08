import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface-container-lowest)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '64px', paddingBottom: '40px', marginTop: '0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                fontFamily: 'Noto Serif, Georgia, serif',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--primary)',
                background: 'rgba(242,195,69,0.1)',
                border: '1px solid rgba(242,195,69,0.25)',
                borderRadius: '8px',
                padding: '6px 10px',
              }}>VPW</div>
              <div>
                <div style={{ fontFamily: 'Noto Serif', fontSize: '0.95rem', fontWeight: '500', color: 'var(--on-surface)' }}>Wealth</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--on-surface-variant)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Intelligent Wealth</div>
              </div>
            </div>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', lineHeight: '1.7', maxWidth: '280px', marginBottom: '24px' }}>
              AI-powered wealth intelligence platform for serious investors. Navigating complex markets with clarity, precision, and institutional rigor.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  background: 'rgba(37,211,102,0.1)',
                  border: '1px solid rgba(37,211,102,0.3)',
                  borderRadius: 'var(--radius-full)',
                  color: '#25D366',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                }}
                aria-label="Chat on WhatsApp"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="label-sm" style={{ color: 'var(--primary)', marginBottom: '20px' }}>Pages</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/methodology', label: 'Methodology' },
                { to: '/charges', label: 'Schedule of Charges' },
                { to: '/learn', label: 'Learn More' },
                { to: '/contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} style={{ color: 'var(--on-surface-variant)', fontSize: '0.88rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--primary)'}
                    onMouseLeave={e => e.target.style.color = 'var(--on-surface-variant)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="label-sm" style={{ color: 'var(--primary)', marginBottom: '20px' }}>Services</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              {['Mutual Funds', 'Portfolio Management (PMS)', 'AI Research Intelligence', 'WhatsApp Investing', 'Research Portal', 'Wealth Planning'].map(s => (
                <li key={s} style={{ color: 'var(--on-surface-variant)', fontSize: '0.88rem' }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="label-sm" style={{ color: 'var(--primary)', marginBottom: '20px' }}>Connect</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none' }}>
              <li>
                <div className="label-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: '4px' }}>Email</div>
                <a href="mailto:info@vpwwealth.com" style={{ color: 'var(--on-surface)', fontSize: '0.88rem' }}>info@vpwwealth.com</a>
              </li>
              <li>
                <div className="label-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: '4px' }}>Phone</div>
                <a href="tel:+919999999999" style={{ color: 'var(--on-surface)', fontSize: '0.88rem' }}>+91 99999 99999</a>
              </li>
              <li>
                <div className="label-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: '4px' }}>Research Portal</div>
                <a href="https://research.vpwwealth.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '0.88rem' }}>research.vpwwealth.com ↗</a>
              </li>
              <li>
                <div className="label-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: '4px' }}>Office</div>
                <span style={{ color: 'var(--on-surface)', fontSize: '0.88rem' }}>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--on-surface-variant)' }}>
            © 2024 VPW Wealth Management Pvt. Ltd. All rights reserved. SEBI Registered Investment Adviser.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Disclosures'].map(label => (
              <a key={label} href="#" style={{ fontSize: '0.78rem', color: 'var(--on-surface-variant)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--on-surface-variant)'}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: '20px', lineHeight: '1.6', maxWidth: '800px' }}>
          Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance is not indicative of future returns. VPW Wealth Management Pvt. Ltd. is a SEBI Registered Investment Adviser (Registration No. INA000XXXXXX).
        </p>
      </div>
    </footer>
  )
}
