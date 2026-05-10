import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="[background:var(--surface-container-lowest)] border-t border-white/[0.06] pt-24 pb-24 lg:pb-32">
      <div className="container">
        {/* Main grid: 1-col mobile → 2-col sm → 4-col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:pr-12">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="font-serif text-2xl font-semibold [color:var(--primary)] [background:rgba(242,195,69,0.1)] border border-[rgba(242,195,69,0.25)] rounded-xl px-3 py-2 tracking-wider">
                VPW
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-[1.1rem] font-medium [color:var(--on-surface)]">Wealth</span>
                <span className="text-[0.65rem] [color:var(--on-surface-variant)] tracking-[0.08em] uppercase">Intelligent Wealth</span>
              </div>
            </div>
            <p className="[color:var(--on-surface-variant)] text-[0.95rem] leading-[1.75] max-w-[320px] mb-8">
              AI-powered wealth intelligence platform for serious investors. Navigating complex markets with clarity, precision, and institutional rigor.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[0.85rem] font-semibold [color:#25D366] [background:rgba(37,211,102,0.1)] border border-[rgba(37,211,102,0.3)] hover:opacity-80 transition-all hover:scale-105"
                aria-label="Chat on WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="label-sm [color:var(--primary)] mb-6">Pages</h3>
            <ul className="flex flex-col gap-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/methodology', label: 'Methodology' },
                { to: '/charges', label: 'Schedule of Charges' },
                { to: '/learn', label: 'Learn More' },
                { to: '/contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="[color:var(--on-surface-variant)] text-[0.95rem] hover:[color:var(--primary)] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="label-sm [color:var(--primary)] mb-6">Services</h3>
            <ul className="flex flex-col gap-4">
              {['Mutual Funds', 'Portfolio Management (PMS)', 'AI Research Intelligence', 'WhatsApp Investing', 'Research Portal', 'Wealth Planning'].map(s => (
                <li key={s} className="[color:var(--on-surface-variant)] text-[0.95rem]">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="label-sm [color:var(--primary)] mb-6">Connect</h3>
            <ul className="flex flex-col gap-6">
              <li>
                <div className="label-sm [color:var(--on-surface-variant)] mb-2">Email</div>
                <a href="mailto:info@vpwwealth.com" className="[color:var(--on-surface)] text-[0.95rem] hover:[color:var(--primary)] transition-colors">info@vpwwealth.com</a>
              </li>
              <li>
                <div className="label-sm [color:var(--on-surface-variant)] mb-2">Phone</div>
                <a href="tel:+919999999999" className="[color:var(--on-surface)] text-[0.95rem] hover:[color:var(--primary)] transition-colors">+91 99999 99999</a>
              </li>
              <li>
                <div className="label-sm [color:var(--on-surface-variant)] mb-2">Research Portal</div>
                <a href="https://research.vpwwealth.com" target="_blank" rel="noopener noreferrer" className="[color:var(--primary)] text-[0.95rem] font-medium">research.vpwwealth.com ↗</a>
              </li>
              <li>
                <div className="label-sm [color:var(--on-surface-variant)] mb-2">Office</div>
                <span className="[color:var(--on-surface)] text-[0.95rem]">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 flex-wrap">
          <p className="text-[0.85rem] [color:var(--on-surface-variant)]">
            © 2024 VPW Wealth Management Pvt. Ltd. All rights reserved. SEBI Registered Investment Adviser.
          </p>
          <div className="flex flex-wrap gap-6 sm:gap-8">
            {['Privacy Policy', 'Terms of Service', 'Disclosures'].map(label => (
              <a
                key={label}
                href="#"
                className="text-[0.85rem] [color:var(--on-surface-variant)] hover:[color:var(--primary)] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <p className="text-[0.75rem] text-white/30 mt-8 leading-[1.7] max-w-[900px]">
          Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance is not indicative of future returns. VPW Wealth Management Pvt. Ltd. is a SEBI Registered Investment Adviser (Registration No. INA000XXXXXX).
        </p>
      </div>
    </footer>

  )
}
