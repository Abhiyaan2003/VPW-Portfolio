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
    <div className="page-enter pt-[var(--nav-height)]">
      {/* ── Page Hero ── */}
      <section className="page-hero" aria-label="Schedule of Charges">
        <div className="container">
          <div className="section-label label-sm">Schedule of Charges</div>
          <h1 className="display-xl max-w-[640px] mb-6">
            Complete{' '}
            <span className="[color:var(--primary)] italic">fee transparency.</span>
            {' '}No surprises.
          </h1>
          <p className="body-lg max-w-[560px] [color:var(--on-surface-variant)] mb-12">
            We believe complete fee transparency is the foundation of a trusted advisory relationship. Below is a comprehensive breakdown of all our charges across every service we offer.
          </p>
        </div>
      </section>

      {/* ── Key Highlights ── */}
      <section className="section" aria-label="Fee highlights">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-0">
            {[
              { icon: 'money_off', title: 'Zero Commission Model', desc: 'We never receive commissions from fund houses. Our only income is the advisory fee you pay us — aligning our interests perfectly with yours.' },
              { icon: 'receipt_long', title: 'GST Invoiced', desc: 'All fees are subject to 18% GST as per applicable regulations. Proper tax invoices are issued for all advisory fees.' },
              { icon: 'notifications_active', title: '30-Day Change Notice', desc: 'Any fee revision requires a minimum 30-day written notice to clients. Your consent is required for any increase.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card p-10">
                <span className="material-icons [color:var(--primary)] text-[36px] mb-6 block">{icon}</span>
                <h3 className="font-serif text-[1.2rem] mb-3">{title}</h3>
                <p className="text-[0.95rem] [color:var(--on-surface-variant)] leading-[1.7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Charges Tables ── */}
      <section className="section [background:var(--surface-container-lowest)]" aria-label="Detailed charge tables">
        <div className="container">
          {CHARGES_DATA.map(({ category, rows }) => (
            <div key={category} className="mb-24 last:mb-10">
              <h2 className="headline-md mb-8 pb-4 border-b border-white/[0.08]">
                {category}
              </h2>
              <div className="overflow-x-auto rounded-[var(--radius)] border border-white/[0.07]">
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
                        <td className="font-medium">{service}</td>
                        <td><span className="chip text-[0.72rem]">{frequency}</span></td>
                        <td className="[color:var(--primary)] font-semibold font-serif">{fee}</td>
                        <td className="[color:var(--on-surface-variant)] text-[0.88rem]">{basis}</td>
                        <td className="[color:var(--on-surface-variant)] text-[0.85rem] italic">{notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Notes */}
          <div className="card border-[rgba(242,195,69,0.15)]">
            <div className="flex gap-4 items-start mb-6">
              <span className="material-icons [color:var(--primary)] text-[24px] mt-1">info</span>
              <h3 className="font-serif text-[1.15rem]">Important Notes</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {NOTES.map((note, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="[color:var(--primary)] font-bold shrink-0">{i + 1}.</span>
                  <span className="text-[0.9rem] [color:var(--on-surface-variant)] leading-[1.7]">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Regulatory ── */}
      <section className="section" aria-label="SEBI regulatory information">
        <div className="container">
          <div className="[background:var(--surface-container-low)] border border-white/[0.07] rounded-[var(--radius-lg)] p-10">
            <span className="material-icons [color:var(--primary)] text-[32px] mb-4 block">gavel</span>
            <h2 className="headline-md mb-4">Regulatory Disclosures</h2>
            <p className="[color:var(--on-surface-variant)] text-[0.9rem] leading-[1.75] mb-4">
              VPW Wealth Management Pvt. Ltd. is a SEBI Registered Investment Adviser (Registration No. INA000XXXXXX). Our investment advisory services are governed by SEBI (Investment Advisers) Regulations 2013 and amendments thereto.
            </p>
            <p className="[color:var(--on-surface-variant)] text-[0.9rem] leading-[1.75] mb-6">
              Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results. The NAV of units may go up or down depending on market conditions.
            </p>
            <p className="text-[0.78rem] text-white/30 leading-[1.6]">
              AMFI Registration No: ARN-XXXXXX | BSE STAR MF | NSE NMF II | CAMS | Karvy/KFintech registered distributor
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
