import './PageHero.css'

const CHARGES_DATA = [
  {
    category: 'Mutual Fund Advisory',
    rows: [
      { service: 'Direct Plan SIP Advisory', frequency: 'Annual', fee: '0.50% – 1.00% p.a.', basis: 'On AUA (Assets Under Advisory)', notes: 'Billed quarterly in arrears. Min. ₹5,000 p.a.' },
      { service: 'Lump Sum Investment Planning', frequency: 'One-time', fee: '0.25% – 0.50%', basis: 'On investment amount', notes: 'Max. ₹1,00,000 per transaction' },
      { service: 'Portfolio Review & Rebalancing', frequency: 'Quarterly', fee: 'Included', basis: 'Included in advisory fee', notes: 'Unlimited reviews for active clients' },
      { service: 'Tax-Loss Harvesting', frequency: 'As needed', fee: 'Included', basis: 'Included in advisory fee', notes: 'FIFO/HIFO optimization included' },
    ],
  },
  {
    category: 'Portfolio Management Services (PMS)',
    rows: [
      { service: 'PMS Management Fee', frequency: 'Annual', fee: '2.00% p.a.', basis: 'On AUM', notes: 'SEBI minimum ₹50 lakh investment' },
      { service: 'PMS Performance Fee', frequency: 'Annual', fee: '20% above hurdle', basis: 'On returns above 10% p.a.', notes: 'High watermark principle applies' },
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

export default function ScheduleOfCharges() {
  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* ── Page Hero ── */}
      <section className="page-hero" aria-label="Schedule of Charges">
        <div className="container">
          <div className="section-label label-sm">Schedule of Charges</div>
          <h1 className="display-xl" style={{ maxWidth: 640, marginBottom: 24 }}>
            Complete{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>fee transparency.</span>
            {' '}No surprises.
          </h1>
          <p className="body-lg" style={{ maxWidth: 560, color: 'var(--on-surface-variant)' }}>
            We believe complete fee transparency is the foundation of a trusted advisory relationship. Below is a comprehensive breakdown of all our charges across every service we offer.
          </p>
        </div>
      </section>

      {/* ── Key Highlights ── */}
      <section className="section" aria-label="Fee highlights">
        <div className="container">
          <div className="grid-3" style={{ gap: 20, marginBottom: 0 }}>
            {[
              { icon: 'money_off', title: 'Zero Commission Model', desc: 'We never receive commissions from fund houses. Our only income is the advisory fee you pay us — aligning our interests perfectly with yours.' },
              { icon: 'receipt_long', title: 'GST Invoiced', desc: 'All fees are subject to 18% GST as per applicable regulations. Proper tax invoices are issued for all advisory fees.' },
              { icon: 'notifications_active', title: '30-Day Change Notice', desc: 'Any fee revision requires a minimum 30-day written notice to clients. Your consent is required for any increase.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: 32 }}>
                <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 32, marginBottom: 16, display: 'block' }}>{icon}</span>
                <h3 style={{ fontFamily: 'Noto Serif', fontSize: '1.05rem', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--on-surface-variant)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Charges Tables ── */}
      <section className="section" style={{ background: 'var(--surface-container-lowest)', paddingTop: 0 }} aria-label="Detailed charge tables">
        <div className="container">
          {CHARGES_DATA.map(({ category, rows }) => (
            <div key={category} style={{ marginBottom: 56 }}>
              <h2 className="headline-md" style={{ marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {category}
              </h2>
              <div style={{ overflowX: 'auto', borderRadius: 'var(--radius)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <table className="data-table" id={`charges-table-${category.replace(/\s+/g,'-').toLowerCase()}`}>
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
                        <td><span className="chip" style={{ fontSize: '0.7rem' }}>{frequency}</span></td>
                        <td style={{ color: 'var(--primary)', fontWeight: 600, fontFamily: 'Noto Serif' }}>{fee}</td>
                        <td style={{ color: 'var(--on-surface-variant)', fontSize: '0.85rem' }}>{basis}</td>
                        <td style={{ color: 'var(--on-surface-variant)', fontSize: '0.82rem', fontStyle: 'italic' }}>{notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Notes */}
          <div className="card" style={{ borderColor: 'rgba(242,195,69,0.15)' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 20 }}>
              <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 24 }}>info</span>
              <h3 style={{ fontFamily: 'Noto Serif', fontSize: '1.05rem' }}>Important Notes</h3>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, listStyle: 'none' }}>
              {NOTES.map((note, i) => (
                <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--on-surface-variant)', lineHeight: 1.65 }}>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Regulatory ── */}
      <section className="section" aria-label="SEBI regulatory information">
        <div className="container">
          <div style={{ background: 'var(--surface-container-low)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 'var(--radius-lg)', padding: '40px' }}>
            <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 32, marginBottom: 16, display: 'block' }}>gavel</span>
            <h2 className="headline-md" style={{ marginBottom: 16 }}>Regulatory Disclosures</h2>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: 16 }}>
              VPW Wealth Management Pvt. Ltd. is a SEBI Registered Investment Adviser (Registration No. INA000XXXXXX). Our investment advisory services are governed by SEBI (Investment Advisers) Regulations 2013 and amendments thereto.
            </p>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: 24 }}>
              Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results. The NAV of units may go up or down depending on market conditions.
            </p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
              AMFI Registration No: ARN-XXXXXX | BSE STAR MF | NSE NMF II | CAMS | Karvy/KFintech registered distributor
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
