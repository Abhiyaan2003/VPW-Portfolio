import RevealOnScroll from '../components/RevealOnScroll'
import './PageHero.css'

const CHARGES_DATA = [
  {
    category: 'Mutual Fund Advisory',
    rows: [
      { service: 'Direct Plan SIP Advisory', frequency: 'Annual', fee: '0.50% – 1.00% p.a.', basis: 'On AUA', notes: 'Billed quarterly in arrears. Min. ₹5,000 p.a.' },
      { service: 'Lump Sum Investment Planning', frequency: 'One-time', fee: '0.25% – 0.50%', basis: 'On investment amount', notes: 'Max. ₹1,00,000 per transaction' },
      { service: 'Portfolio Review & Rebalancing', frequency: 'Quarterly', fee: 'Included', basis: 'Included in advisory fee', notes: 'Unlimited reviews for active clients' },
      { service: 'Tax-Loss Harvesting', frequency: 'As needed', fee: 'Included', basis: 'Included in advisory fee', notes: 'FIFO/HIFO optimisation included' },
    ],
  },
  {
    category: 'Portfolio Management Services (PMS)',
    rows: [
      { service: 'PMS Management Fee', frequency: 'Annual', fee: '2.00% p.a.', basis: 'On AUM', notes: 'SEBI minimum ₹50 lakh investment' },
      { service: 'PMS Performance Fee', frequency: 'Annual', fee: '20% above hurdle', basis: 'Returns above 10% p.a.', notes: 'High watermark principle applies' },
      { service: 'Custodian Fee', frequency: 'Annual', fee: '0.10% – 0.20%', basis: 'On AUM', notes: 'Charged by custodian, passed at cost' },
      { service: 'Brokerage', frequency: 'Per trade', fee: '0.02% – 0.05%', basis: 'On transaction value', notes: 'Best execution policy applies' },
    ],
  },
  {
    category: 'One-Time & Advisory Fees',
    rows: [
      { service: 'Comprehensive Financial Plan', frequency: 'One-time', fee: '₹25,000 – ₹75,000', basis: 'Fixed fee', notes: 'Based on complexity. Waived for AUA > ₹50L' },
      { service: 'Will & Estate Planning Consultation', frequency: 'One-time', fee: '₹15,000', basis: 'Fixed fee', notes: 'Introductory consultation with empanelled lawyers' },
      { service: 'Insurance Review', frequency: 'Annual', fee: 'No charge', basis: '—', notes: 'Complementary for advisory clients' },
      { service: 'NRI Advisory', frequency: 'Annual', fee: '1.00% – 1.50% p.a.', basis: 'On NRE/NRO AUA', notes: 'Includes FEMA compliance guidance' },
    ],
  },
  {
    category: 'Technology & Platform Fees',
    rows: [
      { service: 'Research Portal Access', frequency: 'Annual', fee: 'No charge', basis: '—', notes: 'Complimentary for all advisory clients' },
      { service: 'Portfolio Analytics Dashboard', frequency: 'Annual', fee: 'No charge', basis: '—', notes: 'Real-time access included in advisory fee' },
      { service: 'WhatsApp Advisory Bot', frequency: 'Ongoing', fee: 'No charge', basis: '—', notes: 'Available 24/7 for all registered clients' },
    ],
  },
]

const NOTES = [
  'All fees are exclusive of applicable GST (currently 18%).',
  'Fees are negotiable for institutional clients and family offices with AUA > ₹10 Crores.',
  'No commissions are received from any mutual fund house. VPW Wealth operates on a pure fee-only advisory model.',
  'Fees are subject to revision. Clients will receive 30-day written notice before any fee change takes effect.',
  'SEBI requires PMS minimum investment of ₹50 Lakhs as per SEBI (Portfolio Managers) Regulations, 2020.',
]

const HIGHLIGHTS = [
  { icon: 'money_off', title: 'Zero Commission Model', desc: 'We never receive commissions from fund houses. Our only income is the advisory fee you pay — aligning our interests perfectly with yours.' },
  { icon: 'receipt_long', title: 'GST Invoiced', desc: 'All fees are subject to 18% GST as per applicable regulations. Proper tax invoices are issued for all advisory fees.' },
  { icon: 'notifications_active', title: '30-Day Change Notice', desc: 'Any fee revision requires a minimum 30-day written notice to clients. Your consent is required for any increase.' },
]

export default function ScheduleOfCharges() {
  return (
    <div className="page-enter">
      <section className="page-hero" aria-label="Schedule of Charges">
        <div className="container">
          <div className="section-label label-sm">Schedule of Charges</div>
          <h1 className="display-xl" style={{ maxWidth: 600, marginBottom: 20 }}>
            Complete <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>fee transparency.</span> No surprises.
          </h1>
          <p className="body-lg" style={{ maxWidth: 520, color: 'var(--on-surface-variant)' }}>
            We believe complete fee transparency is the foundation of a trusted advisory relationship. Below is a comprehensive breakdown of all our charges.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Fee highlights">
        <div className="container">
          <div className="grid-3">
            {HIGHLIGHTS.map(({ icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 70}>
                <div className="card" style={{ height: '100%' }}>
                  <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 28, marginBottom: 16, display: 'block' }} aria-hidden="true">{icon}</span>
                  <h3 className="font-serif" style={{ fontSize: '1.0625rem', marginBottom: 10 }}>{title}</h3>
                  <p className="body-sm" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-container-lowest)' }} aria-label="Detailed charge tables">
        <div className="container">
          {CHARGES_DATA.map(({ category, rows }) => (
            <RevealOnScroll key={category}>
              <div style={{ marginBottom: 56 }}>
                <h2 className="headline-md" style={{ marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid var(--outline-variant)' }}>{category}</h2>
                <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-md)', border: '1px solid var(--outline-variant)' }}>
                  <table className="data-table" id={`charges-table-${category.replace(/\s+/g, '-').toLowerCase()}`}>
                    <thead>
                      <tr>
                        <th>Service</th>
                        <th>Frequency</th>
                        <th>Fee</th>
                        <th>Basis</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map(({ service, frequency, fee, basis, notes }) => (
                        <tr key={service}>
                          <td style={{ fontWeight: 500 }}>{service}</td>
                          <td><span className="chip">{frequency}</span></td>
                          <td style={{ color: 'var(--primary)', fontWeight: 600, fontFamily: 'var(--font-display)' }}>{fee}</td>
                          <td style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>{basis}</td>
                          <td style={{ color: 'var(--on-surface-variant)', fontSize: '0.8125rem', fontStyle: 'italic' }}>{notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </RevealOnScroll>
          ))}

          <RevealOnScroll>
            <div className="card" style={{ borderColor: 'rgba(232,184,75,0.15)' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
                <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 20 }} aria-hidden="true">info</span>
                <h3 className="font-serif" style={{ fontSize: '1.0625rem' }}>Important Notes</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {NOTES.map((note, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0, fontSize: '0.875rem' }}>{i + 1}.</span>
                    <span className="body-sm" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section" aria-label="SEBI regulatory information">
        <div className="container">
          <RevealOnScroll>
            <div style={{ background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)', borderRadius: 'var(--radius-md)', padding: '40px' }}>
              <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 28, marginBottom: 16, display: 'block' }} aria-hidden="true">gavel</span>
              <h2 className="headline-md" style={{ marginBottom: 12 }}>Regulatory Disclosures</h2>
              <p className="body-sm" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.75, marginBottom: 10 }}>
                VPW Wealth Management Pvt. Ltd. is a SEBI Registered Investment Adviser (Registration No. INA000XXXXXX). Our investment advisory services are governed by SEBI (Investment Advisers) Regulations 2013 and amendments thereto.
              </p>
              <p className="body-sm" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.75, marginBottom: 16 }}>
                Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results.
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--outline)', lineHeight: 1.6 }}>
                AMFI Registration No: ARN-XXXXXX | BSE STAR MF | NSE NMF II | CAMS | KFintech registered
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
