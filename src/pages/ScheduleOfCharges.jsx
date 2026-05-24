import RevealOnScroll from '../components/RevealOnScroll'
import './PageHero.css'
import './ScheduleOfCharges.css'

/* ─────────────────────────────────────────────
   Data sourced from: VPW_Schedule_of_Charges_FY2026-27.docx
   Effective: 1st June 2026
   Reference: VPW/SOC/2026-27/01
───────────────────────────────────────────── */

const PLANS = [
  {
    id: 'orbit',
    name: 'ORBIT PLAN',
    tagline: 'Your Gateway to the VPW Investment Ecosystem',
    accentLight: 'rgba(27,67,50,0.04)',
    eligibility: null,
    benefits: [
      { benefit: 'Standard Investment Access', details: "Full access to VPW's core investment platform and tools", value: 'Included' },
      { benefit: 'AI Intelligence Tools', details: 'Access to AI-powered investment insights and recommendations', value: 'Forever Free' },
      { benefit: 'VPW Ecosystem Entry', details: 'Gateway to the full VPW financial ecosystem', value: 'Included' },
    ],
    charges: [
      { fee: 'Account Opening Fee', rate: 'NIL', remarks: 'No charges to open your account' },
      { fee: 'Registration Fee', rate: 'NIL', remarks: 'No one-time registration charge' },
      { fee: 'Assets Under Advisory (AUA) Fee', rate: 'NIL', remarks: 'No advisory fee on portfolio value' },
      { fee: 'Annual Maintenance Charge (AMC)', rate: '₹599 / Annum', remarks: 'Billed quarterly (₹149.75 per quarter)' },
      { fee: 'Platform Fee', rate: '₹199 / Annum', remarks: 'Billed quarterly (₹49.75 per quarter)' },
      { fee: 'Execution Fee', rate: '₹40 / Transaction', remarks: 'Per executed transaction on the platform' },
    ],
    note: 'AMC and Platform Fee are billed quarterly. Inactive accounts and portfolios with a total fund value below ₹5,000 are fully exempt from AMC and Platform Fee.',
  },
  {
    id: 'axis',
    name: 'AXIS PLAN',
    tagline: 'Premium Advisory for the Active Investor',
    accentLight: 'rgba(197,160,89,0.04)',
    eligibility: 'Minimum ₹5,00,000 Portfolio',
    benefits: [
      { benefit: 'Access to Research Portal', details: "Full access to VPW's proprietary research and analytics platform", value: 'Free (Worth ₹9,000)' },
      { benefit: 'AI Intelligence Tools', details: 'Advanced AI-powered portfolio analytics and recommendations', value: 'No Cost (Worth ₹1,00,000)' },
      { benefit: 'VPW Exclusive Forest Prepaid Card', details: "Eligibility for VPW's branded prepaid card with higher limits", value: 'Up to ₹1,00,000 Limit' },
      { benefit: 'Paradise Mansion Credit Card', details: 'Exclusive eligibility for the Paradise Mansion co-branded credit card', value: 'Limit as per eligibility' },
      { benefit: 'Specialized Investment Funds', details: 'Access to curated, advisor-recommended specialized investment funds', value: 'Included' },
      { benefit: 'Priority Withdrawals & Execution', details: 'Faster processing for withdrawal requests and trade execution', value: 'Priority Queue' },
    ],
    charges: [
      { fee: 'Account Opening Fee', rate: 'NIL', remarks: 'No charges to open your account' },
      { fee: 'Registration Fee', rate: '₹2,000 (One-Time)', remarks: 'One-time fee' },
      { fee: 'Eligibility Criteria', rate: 'Min. ₹5,00,000 Portfolio', remarks: 'Verified funds must be maintained in the portfolio' },
      { fee: 'Assets Under Advisory (AUA) Fee', rate: '1.25% per annum', remarks: 'Calculated on total portfolio value; billed quarterly' },
      { fee: 'Annual Maintenance Charge (AMC)', rate: '₹4,999 / Annum', remarks: 'Billed quarterly (₹1,250 per quarter)' },
      { fee: 'Platform Fee', rate: 'Waived Off', remarks: 'No platform fee for AXIS Members' },
      { fee: 'Execution Fee', rate: 'Waived Off', remarks: 'No per-transaction charge for AXIS Members' },
    ],
    note: 'AXIS Plan is available to clients maintaining a minimum verified portfolio of ₹5,00,000. The AUA Fee of 1.25% p.a. is calculated on total portfolio value and billed quarterly. Inactive accounts and portfolios below ₹5,000 are exempt from AMC.',
  },
  {
    id: 'circle',
    name: 'CIRCLE PLAN',
    tagline: 'Private Wealth Management for the Distinguished Investor',
    accentLight: 'rgba(27,67,50,0.04)',
    eligibility: 'Minimum ₹25,00,000 Portfolio',
    benefits: [
      { benefit: 'Access to Research Portal', details: "Premium access to VPW's research portal and market intelligence reports", value: 'Free (Worth ₹9,000)' },
      { benefit: 'AI Intelligence Tools', details: 'Enterprise-grade AI-powered wealth analytics and insights', value: 'Forever Free' },
      { benefit: 'VPW Exclusive Gold Prepaid Card', details: "Eligibility for VPW's premium Gold prepaid card", value: 'Up to ₹2,00,000 Limit' },
      { benefit: 'Victoria Only Credit Card', details: 'Exclusive eligibility for the premier Victoria Only co-branded credit card', value: 'Limit as per eligibility' },
      { benefit: 'Free Access to Terminal', details: "Full access to VPW's professional trading and analytics terminal", value: 'Free (Worth ₹20,000)' },
      { benefit: 'Private Wealth Community', details: "Exclusive membership to VPW's private wealth management community", value: 'Included' },
      { benefit: 'Dedicated Wealth Desk', details: 'Assigned personal wealth manager and priority support desk', value: 'Included' },
      { benefit: 'Exclusive Specialized Investment Funds', details: 'Access to the highest-tier curated private investment opportunities', value: 'Included' },
      { benefit: 'Annual Membership Package', details: 'Comprehensive annual membership with all premium perks bundled', value: '₹10,000 / Annum' },
    ],
    charges: [
      { fee: 'Account Opening Fee', rate: 'NIL', remarks: 'No charges to open your account' },
      { fee: 'Registration Fee', rate: '₹5,000 (One-Time)', remarks: 'Non-refundable; reflects exclusive onboarding privileges' },
      { fee: 'Eligibility Criteria', rate: 'Min. ₹25,00,000 Portfolio', remarks: 'Verified funds must be maintained in the portfolio' },
      { fee: 'Assets Under Advisory (AUA) Fee', rate: '1.20% p.a. (≤ ₹1 Cr) / 0.85% p.a. (> ₹1 Cr)', remarks: 'Preferential tiered rate; billed quarterly' },
      { fee: 'Annual Maintenance Charge (AMC)', rate: '₹6,999 / Annum (waived post ₹1 Cr)', remarks: 'Waived once portfolio exceeds ₹1 Crore' },
      { fee: 'Platform Fee', rate: 'Waived Off', remarks: 'No platform fee for CIRCLE Members' },
      { fee: 'Execution Fee', rate: 'Waived Off', remarks: 'No per-transaction charge for CIRCLE Members' },
    ],
    note: 'CIRCLE Plan is available to clients maintaining a minimum verified portfolio of ₹25,00,000. AUA Fee of 1.20% p.a. is billed quarterly. The ₹10,000 Annual Membership Package covers all premium bundled services. Inactive accounts and portfolios below ₹5,000 are exempt from AMC.',
  },
]

const HIGHLIGHTS = [
  { icon: 'verified', title: 'No Hidden Charges', desc: 'All fees are disclosed upfront. No commissions, no surprise deductions — complete transparency at every step.' },
  { icon: 'receipt_long', title: 'Quarterly Billing', desc: 'Fixed fees are computed annually and billed one-fourth each quarter. AUA fees are computed and billed annually.' },
  { icon: 'notifications_active', title: '30-Day Change Notice', desc: 'Any revision to the Schedule of Charges will be communicated with a minimum of 30 days prior written notice.' },
]

const TC_POINTS = [
  { num: '01', title: 'Billing Cycle', text: 'All applicable fees — AMC, Platform Fees, and AUA Fees — shall be computed annually and billed quarterly. Invoices are issued on the 5th day of each quarter-end month.' },
  { num: '02', title: 'Payment Deadline', text: 'All invoices raised by VPW LLP are due within fifteen (15) calendar days from the date of issuance.' },
  { num: '03', title: 'Non-Payment & Service Suspension', text: 'Failure to settle dues within the stipulated period shall result in a Notice of Suspension. If payment remains outstanding beyond five (5) days from such notice, the account shall be suspended.' },
  { num: '04', title: 'Account Reactivation', text: 'A suspended account shall be reactivated automatically upon full payment of all outstanding dues. No additional reactivation charges shall apply.' },
  { num: '05', title: 'Inactive Account Exemptions', text: 'Inactive accounts and accounts or portfolios maintaining a total fund value of less than ₹5,000 shall be fully exempt from AMC and Platform Fee charges.' },
  { num: '06', title: 'AUA Fee Computation', text: 'AUA Fee is calculated as a percentage of the total portfolio value under advisory, billed quarterly. Computation: Principal Amount + (Accrued Interest – 14%). Not applicable to inactive or below-threshold accounts.' },
  { num: '07', title: 'Registration & Eligibility', text: 'Plan-specific eligibility criteria (minimum portfolio values) must be maintained at all times. Non-maintenance may result in plan downgrade. Registration fees are non-refundable.' },
  { num: '08', title: 'Amendments to Schedule', text: 'VPW LLP reserves the right to revise this Schedule with a minimum of 30 days prior notice via registered email or official communication on onlyvpw.com.' },
  { num: '09', title: 'Dispute Resolution', text: 'Any billing discrepancy must be reported to ceo@onlyvpw.com. VPW LLP shall investigate and resolve all reported disputes within seven (7) working days.' },
  { num: '10', title: 'Governing Law', text: 'This Schedule and all associated terms shall be governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of the courts at Siliguri, West Bengal.' },
]

/* ── Helper: render rate cell with smart badge ── */
function RateCell({ rate }) {
  if (rate === 'NIL') return <span className="rate-nil">NIL</span>
  if (rate === 'Waived Off') return <span className="rate-waived">Waived Off</span>
  return <span className="rate-amount">{rate}</span>
}

/* ── Helper: render value cell in benefits table ── */
function ValueCell({ value }) {
  const v = value.toLowerCase()
  if (v === 'included') return <span className="value-included">✓ Included</span>
  if (v.startsWith('free') || v.startsWith('no cost') || v.startsWith('forever free')) {
    return <span className="value-free">◆ {value}</span>
  }
  return <span className="value-default">{value}</span>
}

export default function ScheduleOfCharges() {
  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <section className="page-hero" aria-label="Schedule of Charges">
        <div className="container">
          <div className="section-label label-sm">Schedule of Charges — FY 2026–27</div>
          <h1 className="display-xl" style={{ maxWidth: 660, marginBottom: 20 }}>
            Complete <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>fee transparency.</span> No surprises.
          </h1>
          <p className="body-lg" style={{ maxWidth: 560, color: 'var(--on-surface-variant)' }}>
            Official Schedule of Charges for Financial Year 2026–27. Effective 1st June 2026. Supersedes all previously communicated fee structures.
          </p>
          <p style={{ marginTop: 16, fontSize: '0.8125rem', color: 'var(--on-surface-variant)', opacity: 0.7 }}>
            Approved by Board of Directors: 12th May 2026&ensp;|&ensp;Issued: 15th May 2026&ensp;|&ensp;Ref: VPW/SOC/2026-27/01
          </p>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="soc-highlights-section" aria-label="Fee highlights">
        <div className="container">
          <div className="grid-3">
            {HIGHLIGHTS.map(({ icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.07}>
                <div className="card" style={{ height: '100%' }}>
                  <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 28, marginBottom: 16, display: 'block' }} aria-hidden="true">{icon}</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 10 }}>{title}</h3>
                  <p className="body-sm" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="soc-plans-section" aria-label="Membership Plans">
        <div className="container">
          {PLANS.map(({ id, name, tagline, eligibility, benefits, charges, note, accentLight }) => (
            <RevealOnScroll key={id}>
              <div className="plan-card">
                {/* Plan Header */}
                <div className="plan-header" style={{ background: accentLight }}>
                  <div>
                    {tagline && <p className="plan-tagline">{tagline}</p>}
                    <h2 className="plan-name">{name}</h2>
                  </div>
                  {eligibility && (
                    <span className="plan-badge">
                      <span className="material-icons" style={{ fontSize: 13 }} aria-hidden="true">workspace_premium</span>
                      {eligibility}
                    </span>
                  )}
                </div>

                {/* Plan Body */}
                <div className="plan-body">
                  {/* Benefits */}
                  <p className="table-section-label">✦ Member Benefits</p>
                  <div className="table-wrap">
                    <table className="soc-table benefits-table" id={`benefits-${id}`}>
                      <colgroup>
                        <col /><col /><col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>Benefit</th>
                          <th>Details</th>
                          <th>Value / Note</th>
                        </tr>
                      </thead>
                      <tbody>
                        {benefits.map(({ benefit, details, value }) => (
                          <tr key={benefit}>
                            <td style={{ fontWeight: 600 }}>{benefit}</td>
                            <td style={{ color: 'var(--on-surface-variant)' }}>{details}</td>
                            <td><ValueCell value={value} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Charges */}
                  <p className="table-section-label">◆ Applicable Charges</p>
                  <div className="table-wrap">
                    <table className="soc-table charges-table" id={`charges-${id}`}>
                      <colgroup>
                        <col /><col /><col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>Fee Type</th>
                          <th>Amount / Rate</th>
                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {charges.map(({ fee, rate, remarks }) => (
                          <tr key={fee}>
                            <td style={{ fontWeight: 500 }}>{fee}</td>
                            <td><RateCell rate={rate} /></td>
                            <td style={{ color: 'var(--on-surface-variant)' }}>{remarks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Plan note */}
                  <div className="plan-note">
                    <span className="material-icons" aria-hidden="true">info</span>
                    <p>{note}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── Terms & Conditions ── */}
      <section className="section" aria-label="Terms and Conditions">
        <div className="container">
          <RevealOnScroll>
            <div className="section-label label-sm" style={{ marginBottom: 8 }}>Terms & Conditions</div>
            <h2 className="headline-lg" style={{ marginBottom: 8 }}>Governing this Schedule of Charges</h2>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 48, maxWidth: 560 }}>
              Effective 1st June 2026. Applicable to all Members, Users, and Clients of VPW LLP.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="tc-block">
              {TC_POINTS.map(({ num, title, text }, i) => (
                <div key={num} className="tc-item">
                  <span className="tc-num">{num}</span>
                  <div>
                    <h3 className="tc-title">{title}</h3>
                    <p className="tc-text">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Legal Footer ── */}
      <section className="section" aria-label="Legal information">
        <div className="container">
          <RevealOnScroll>
            <div style={{ background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)', borderRadius: 'var(--radius-md)', padding: '40px' }}>
              <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 28, marginBottom: 16, display: 'block' }} aria-hidden="true">gavel</span>
              <h2 className="headline-md" style={{ marginBottom: 12 }}>Regulatory & Legal Information</h2>
              <p className="body-sm" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.75, marginBottom: 10 }}>
                Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results.
              </p>
              <p className="body-sm" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.75, marginBottom: 16 }}>
                This Schedule is governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts at Siliguri, West Bengal.
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--outline)', lineHeight: 1.6 }}>
                For VPW LLP&ensp;|&ensp;Authorized Signatory — CEO&ensp;|&ensp;Issued: 15th May 2026<br />
                Registered Office: Tumbajote, Jorabridge, Matigara, Siliguri, Darjeeling, West Bengal – 734010, India&ensp;|&ensp;LLPIN: ACS-3188
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
