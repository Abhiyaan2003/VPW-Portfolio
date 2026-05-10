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
    <div className="page-enter pt-[var(--nav-height)]">
      {/* ── Page Hero ── */}
      <section className="page-hero" aria-label="Contact VPW Wealth">
        <div className="container">
          <div className="section-label label-sm">Contact Us</div>
          <h1 className="display-xl max-w-[620px] mb-6">
            Let's build your wealth{' '}
            <span className="[color:var(--primary)] italic">together.</span>
          </h1>
          <p className="body-lg max-w-[520px] [color:var(--on-surface-variant)]">
            Whether you're a first-time investor or managing a substantial portfolio, our advisers are ready to help you navigate the next step.
          </p>
        </div>
      </section>

      {/* ── Quick Actions ── */}
      <section className="section" aria-label="Quick contact methods">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              href="https://wa.me/919999999999?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20a%20VPW%20Wealth%20adviser"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-cta"
              className="block no-underline group"
            >
              <div className="card border-[rgba(37,211,102,0.15)] text-center px-6 py-8 lg:px-10 lg:py-12 cursor-pointer h-full flex flex-col items-center">
                <div className="w-16 h-16 rounded-full [background:rgba(37,211,102,0.1)] flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="font-serif text-[1.2rem] mb-3">WhatsApp Investing</h3>
                <p className="text-[0.95rem] [color:var(--on-surface-variant)] leading-[1.6]">Chat with an adviser instantly. Available 9 AM – 9 PM IST.</p>
              </div>
            </a>
            <a href="mailto:info@vpwwealth.com" id="contact-email-cta" className="block no-underline group">
              <div className="card text-center px-6 py-8 lg:px-10 lg:py-12 cursor-pointer h-full flex flex-col items-center">
                <div className="w-16 h-16 rounded-full [background:rgba(242,195,69,0.1)] flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <span className="material-icons [color:var(--primary)] text-[32px]">mail</span>
                </div>
                <h3 className="font-serif text-[1.2rem] mb-3">Email Us</h3>
                <p className="text-[0.95rem] [color:var(--on-surface-variant)] leading-[1.6] mb-4">We respond within 4 business hours.</p>
                <span className="[color:var(--primary)] font-semibold text-[0.95rem]">info@vpwwealth.com</span>
              </div>
            </a>
            <a href="https://research.vpwwealth.com" target="_blank" rel="noopener noreferrer" id="contact-research-cta" className="block no-underline group">
              <div className="card text-center px-6 py-8 lg:px-10 lg:py-12 cursor-pointer h-full flex flex-col items-center">
                <div className="w-16 h-16 rounded-full [background:rgba(242,195,69,0.1)] flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <span className="material-icons [color:var(--primary)] text-[32px]">science</span>
                </div>
                <h3 className="font-serif text-[1.2rem] mb-3">Research Portal</h3>
                <p className="text-[0.95rem] [color:var(--on-surface-variant)] leading-[1.6] mb-4">Access live analytics and insights.</p>
                <span className="[color:var(--primary)] font-semibold text-[0.95rem]">research.vpwwealth.com ↗</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="section [background:var(--surface-container-lowest)]" aria-labelledby="contact-form-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
            <div className="lg:sticky lg:top-[calc(var(--nav-height)+40px)]">
              <div className="section-label label-sm">Get In Touch</div>
              <h2 id="contact-form-heading" className="headline-lg mb-8">
                Schedule a consultation.
              </h2>
              <p className="body-md [color:var(--on-surface-variant)] mb-12 leading-[1.75]">
                Fill out the form and one of our wealth advisers will contact you within one business day to discuss your financial goals and how VPW can help you achieve them.
              </p>
              <div className="flex flex-col gap-8">
                {[
                  { icon: 'schedule', text: 'Response within 1 business day' },
                  { icon: 'no_accounts', text: 'No sales calls without your consent' },
                  { icon: 'lock', text: 'Your data is encrypted and never shared' },
                  { icon: 'price_check', text: 'First consultation is complimentary' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex gap-5 items-center">
                    <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/[0.06]">
                      <span className="material-icons [color:var(--primary)] text-[20px]">{icon}</span>
                    </div>
                    <span className="text-[1rem] [color:var(--on-surface-variant)]">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="card text-center py-12 px-6 lg:py-20 lg:px-12 animate-fade-in">
                  <span className="material-icons [color:var(--primary)] text-[72px] mb-6 block">check_circle</span>
                  <h3 className="headline-md mb-6">Message Sent!</h3>
                  <p className="[color:var(--on-surface-variant)] mb-10 text-[1.1rem]">
                    Thank you, {form.name}. One of our advisers will reach out to you at {form.email} within 1 business day.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',city:'',enquiry:'',message:'',consent:false }) }} className="btn-ghost mt-8">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-6 lg:p-16" id="contact-form" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Full Name *</label>
                      <input id="contact-name" name="name" type="text" className="form-input" placeholder="Ravi Kumar" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email Address *</label>
                      <input id="contact-email" name="email" type="email" className="form-input" placeholder="ravi@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                      <input id="contact-phone" name="phone" type="tel" className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-city">City</label>
                      <input id="contact-city" name="city" type="text" className="form-input" placeholder="Mumbai" value={form.city} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group mb-8">
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
                  <div className="form-group mb-10">
                    <label className="form-label" htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" name="message" className="form-textarea" placeholder="Tell us about your financial goals and how we can help..." value={form.message} onChange={handleChange} rows={5} />
                  </div>
                  <div className="flex gap-4 mb-10 items-start">
                    <input
                      type="checkbox"
                      id="contact-consent"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      className="mt-1 shrink-0 w-5 h-5 [accent-color:var(--primary)]"
                      required
                    />
                    <label htmlFor="contact-consent" className="text-[0.88rem] [color:var(--on-surface-variant)] leading-[1.6] cursor-pointer">
                      I consent to VPW Wealth contacting me regarding my enquiry. I understand my data will not be shared with third parties. *
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary mt-8 w-full justify-center py-5 text-[1rem]"
                    id="contact-submit-btn"
                    disabled={loading || !form.name || !form.email || !form.enquiry || !form.consent}
                    style={{ opacity: (loading || !form.name || !form.email || !form.enquiry || !form.consent) ? 0.6 : 1 }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && <span className="material-icons text-[20px]">send</span>}
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
          <h2 id="offices-heading" className="headline-lg mb-16">
            Find us.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFICES.map(({ city, address, phone, email, hours }) => (
              <div key={city} className="card p-6 lg:p-12">
                <h3 className="font-serif text-[1.25rem] [color:var(--primary)] mb-8">{city}</h3>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-start">
                    <span className="material-icons [color:var(--on-surface-variant)] text-[20px] shrink-0 mt-1">location_on</span>
                    <p className="text-[1rem] [color:var(--on-surface-variant)] leading-[1.75]">{address}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="material-icons [color:var(--on-surface-variant)] text-[20px]">call</span>
                    <a href={`tel:${phone.replace(/\s/g,'')}`} className="text-[1rem] [color:var(--on-surface)] hover:[color:var(--primary)] transition-colors">{phone}</a>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="material-icons [color:var(--on-surface-variant)] text-[20px]">mail</span>
                    <a href={`mailto:${email}`} className="text-[1rem] [color:var(--primary)] hover:opacity-80 transition-opacity">{email}</a>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="material-icons [color:var(--on-surface-variant)] text-[20px]">schedule</span>
                    <span className="text-[0.9rem] [color:var(--on-surface-variant)]">{hours}</span>
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
