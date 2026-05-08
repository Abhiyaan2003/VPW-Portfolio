import { useState } from 'react'
import './PageHero.css'

const OFFICES = [
  {
    city: 'Mumbai (HQ)',
    address: '14th Floor, One World Centre, Elphinstone Road, Mumbai – 400 013',
    phone: '+91 22 4567 8900',
    email: 'mumbai@vpwwealth.com',
    hours: 'Mon – Fri: 9:00 AM – 6:30 PM IST',
  }
]

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', enquiry: '', message: '', consent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* ── Page Hero ── */}
      <section className="page-hero" aria-label="Contact VPW Wealth">
        <div className="container">
          <div className="section-label label-sm">Contact Us</div>
          <h1 className="display-xl" style={{ maxWidth: 620, marginBottom: 24 }}>
            Let's build your wealth{' '}
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>together.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 520, color: 'var(--on-surface-variant)' }}>
            Whether you're a first-time investor or managing a substantial portfolio, our advisers are ready to help you navigate the next step.
          </p>
        </div>
      </section>

      {/* ── Quick Actions ── */}
      <section className="section" aria-label="Quick contact methods">
        <div className="container">
          <div className="grid-3">
            <a
              href="https://wa.me/919999999999?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20a%20VPW%20Wealth%20adviser"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-cta"
              style={{ display: 'block', textDecoration: 'none' }}
            >
              <div className="card" style={{ borderColor: 'rgba(37,211,102,0.2)', textAlign: 'center', padding: '36px 28px', cursor: 'pointer' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#25D366" style={{ margin: '0 auto 20px' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <h3 style={{ fontFamily: 'Noto Serif', fontSize: '1.05rem', marginBottom: 8 }}>WhatsApp Investing</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)' }}>Chat with an adviser instantly. Available 9 AM – 9 PM IST.</p>
              </div>
            </a>
            <a href="mailto:info@vpwwealth.com" id="contact-email-cta" style={{ display: 'block', textDecoration: 'none' }}>
              <div className="card" style={{ textAlign: 'center', padding: '36px 28px', cursor: 'pointer' }}>
                <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 40, marginBottom: 20, display: 'block' }}>mail</span>
                <h3 style={{ fontFamily: 'Noto Serif', fontSize: '1.05rem', marginBottom: 8 }}>Email Us</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)', marginBottom: 8 }}>We respond within 4 business hours.</p>
                <span style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>info@vpwwealth.com</span>
              </div>
            </a>
            <a href="https://research.vpwwealth.com" target="_blank" rel="noopener noreferrer" id="contact-research-cta" style={{ display: 'block', textDecoration: 'none' }}>
              <div className="card" style={{ textAlign: 'center', padding: '36px 28px', cursor: 'pointer' }}>
                <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 40, marginBottom: 20, display: 'block' }}>science</span>
                <h3 style={{ fontFamily: 'Noto Serif', fontSize: '1.05rem', marginBottom: 8 }}>Research Portal</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)', marginBottom: 8 }}>Access live analytics and insights.</p>
                <span style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>research.vpwwealth.com ↗</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="section" style={{ background: 'var(--surface-container-lowest)' }} aria-labelledby="contact-form-heading">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'flex-start' }}>
            <div>
              <div className="section-label label-sm">Get In Touch</div>
              <h2 id="contact-form-heading" className="headline-lg" style={{ marginBottom: 24 }}>
                Schedule a consultation.
              </h2>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 36 }}>
                Fill out the form and one of our wealth advisers will contact you within one business day to discuss your financial goals and how VPW can help you achieve them.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { icon: 'schedule', text: 'Response within 1 business day' },
                  { icon: 'no_accounts', text: 'No sales calls without your consent' },
                  { icon: 'lock', text: 'Your data is encrypted and never shared' },
                  { icon: 'price_check', text: 'First consultation is complimentary' },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 20 }}>{icon}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="card" style={{ textAlign: 'center', padding: '56px 40px' }}>
                  <span className="material-icons" style={{ color: 'var(--primary)', fontSize: 56, marginBottom: 20, display: 'block' }}>check_circle</span>
                  <h3 className="headline-md" style={{ marginBottom: 16 }}>Message Sent!</h3>
                  <p style={{ color: 'var(--on-surface-variant)', marginBottom: 32 }}>
                    Thank you, {form.name}. One of our advisers will reach out to you at {form.email} within 1 business day.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',city:'',enquiry:'',message:'',consent:false }) }} className="btn-ghost">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card" style={{ padding: '40px' }} id="contact-form" noValidate>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Full Name *</label>
                      <input id="contact-name" name="name" type="text" className="form-input" placeholder="Ravi Kumar" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email Address *</label>
                      <input id="contact-email" name="email" type="email" className="form-input" placeholder="ravi@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                      <input id="contact-phone" name="phone" type="tel" className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-city">City</label>
                      <input id="contact-city" name="city" type="text" className="form-input" placeholder="Mumbai" value={form.city} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginBottom: 20 }}>
                    <label className="form-label" htmlFor="contact-enquiry">Enquiry Type *</label>
                    <select id="contact-enquiry" name="enquiry" className="form-select" value={form.enquiry} onChange={handleChange} required>
                      <option value="">Select an enquiry type</option>
                      <option value="mutual-funds">Mutual Fund Advisory</option>
                      <option value="pms">Portfolio Management Services (PMS)</option>
                      <option value="financial-plan">Comprehensive Financial Plan</option>
                      <option value="whatsapp">WhatsApp Investing</option>
                      <option value="research">Research Portal Access</option>
                      <option value="nri">NRI Advisory Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: 24 }}>
                    <label className="form-label" htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" name="message" className="form-textarea" placeholder="Tell us about your financial goals and how we can help..." value={form.message} onChange={handleChange} rows={4} />
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginBottom: 28, alignItems: 'flex-start' }}>
                    <input type="checkbox" id="contact-consent" name="consent" checked={form.consent} onChange={handleChange} style={{ marginTop: 3, accentColor: 'var(--primary)', flexShrink: 0 }} required />
                    <label htmlFor="contact-consent" style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)', lineHeight: 1.5, cursor: 'pointer' }}>
                      I consent to VPW Wealth contacting me regarding my enquiry. I understand my data will not be shared with third parties. *
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    id="contact-submit-btn"
                    disabled={loading || !form.name || !form.email || !form.enquiry || !form.consent}
                    style={{ width: '100%', justifyContent: 'center', opacity: (loading || !form.name || !form.email || !form.enquiry || !form.consent) ? 0.6 : 1 }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && <span className="material-icons" style={{ fontSize: 18 }}>send</span>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Offices ── */}
      <section className="section" aria-labelledby="offices-heading">
        <div className="container">
          <div className="section-label label-sm">Our Offices</div>
          <h2 id="offices-heading" className="headline-lg" style={{ marginBottom: 48 }}>
            Find us.
          </h2>
          <div className="grid-3">
            {OFFICES.map(({ city, address, phone, email, hours }) => (
              <div key={city} className="card">
                <h3 style={{ fontFamily: 'Noto Serif', fontSize: '1.1rem', color: 'var(--primary)', marginBottom: 20 }}>{city}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span className="material-icons" style={{ color: 'var(--on-surface-variant)', fontSize: 18, flexShrink: 0, marginTop: 2 }}>location_on</span>
                    <p style={{ fontSize: '0.88rem', color: 'var(--on-surface-variant)', lineHeight: 1.65 }}>{address}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span className="material-icons" style={{ color: 'var(--on-surface-variant)', fontSize: 18 }}>call</span>
                    <a href={`tel:${phone.replace(/\s/g,'')}`} style={{ fontSize: '0.88rem', color: 'var(--on-surface)' }}>{phone}</a>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span className="material-icons" style={{ color: 'var(--on-surface-variant)', fontSize: 18 }}>mail</span>
                    <a href={`mailto:${email}`} style={{ fontSize: '0.88rem', color: 'var(--primary)' }}>{email}</a>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span className="material-icons" style={{ color: 'var(--on-surface-variant)', fontSize: 18 }}>schedule</span>
                    <span style={{ fontSize: '0.83rem', color: 'var(--on-surface-variant)' }}>{hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
