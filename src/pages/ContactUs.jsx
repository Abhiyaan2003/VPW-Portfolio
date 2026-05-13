import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from '../components/RevealOnScroll';
import './ContactUs.css';

const WA_HREF = 'https://wa.me/919999999999?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20a%20VPW%20Wealth%20adviser';

const QUICK_ACTIONS = [
  {
    id: 'contact-whatsapp-cta',
    href: WA_HREF,
    external: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
    title: 'WhatsApp Investing',
    desc: 'Chat with an adviser instantly. Available 9 AM – 9 PM IST.',
    type: 'whatsapp'
  },
  {
    id: 'contact-email-cta',
    href: 'mailto:info@vpwwealth.com',
    external: false,
    icon: <span className="material-icons">mail</span>,
    title: 'Email Us',
    desc: 'We respond within 4 business hours.',
    cta: 'info@vpwwealth.com',
    type: 'email'
  },
  {
    id: 'contact-portal-cta',
    href: 'https://research.vpwwealth.com',
    external: true,
    icon: <span className="material-icons">science</span>,
    title: 'Research Portal',
    desc: 'Access live analytics and insights.',
    cta: 'research.vpwwealth.com ↗',
    type: 'portal'
  },
];

const TRUST_POINTS = [
  { icon: 'schedule', text: 'Response within 1 business day' },
  { icon: 'no_accounts', text: 'No sales calls without your consent' },
  { icon: 'lock', text: 'Your data is encrypted and never shared' },
  { icon: 'price_check', text: 'First consultation is complimentary' },
];

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', enquiry: '', message: '', consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const canSubmit = form.name && form.email && form.enquiry && form.consent;

  return (
    <div className="contact-root">
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label label-sm">Contact Us</div>
            <h1 className="hero-headline display-xl">
              Let's build your wealth <span className="accent-text italic">together.</span>
            </h1>
            <p className="hero-subtext body-lg">
              Whether you're a first-time investor or managing a substantial portfolio, our advisers are ready to help you navigate the next step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section quick-actions-section">
        <div className="container">
          <div className="grid-3">
            {QUICK_ACTIONS.map(({ id, href, external, icon, title, desc, cta, type }, idx) => (
              <RevealOnScroll key={id} delay={idx * 0.1}>
                <a 
                  href={href} 
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} 
                  className={`quick-action-card card ${type}`}
                >
                  <div className="icon-wrapper">
                    {icon}
                  </div>
                  <h3 className="card-title">{title}</h3>
                  <p className="card-desc body-sm">{desc}</p>
                  {cta && <span className="card-cta accent-text">{cta}</span>}
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section form-section">
        <div className="container">
          <div className="form-layout-grid">
            <RevealOnScroll>
              <div className="form-info-panel">
                <div className="section-label label-sm">Get In Touch</div>
                <h2 className="headline-lg">Schedule a consultation.</h2>
                <p className="body-md intro-text">
                  Fill out the form and one of our wealth advisers will contact you within one business day to discuss your financial goals.
                </p>
                
                <div className="trust-points-list">
                  {TRUST_POINTS.map(({ icon, text }) => (
                    <div key={text} className="trust-item">
                      <div className="trust-icon">
                        <span className="material-icons">{icon}</span>
                      </div>
                      <span className="trust-text body-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="success-panel card"
                  >
                    <span className="material-icons success-icon">check_circle</span>
                    <h3 className="headline-md">Message Sent!</h3>
                    <p className="body-md success-message">
                      Thank you, {form.name}. One of our advisers will reach out to you at {form.email} within 1 business day.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',city:'',enquiry:'',message:'',consent:false }) }}
                      className="btn-ghost"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="contact-form card" noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-name">Full Name *</label>
                        <input id="contact-name" name="name" type="text" className="form-input" placeholder="Ravi Kumar" value={form.name} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">Email Address *</label>
                        <input id="contact-email" name="email" type="email" className="form-input" placeholder="ravi@example.com" value={form.email} onChange={handleChange} required />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                        <input id="contact-phone" name="phone" type="tel" className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-city">City</label>
                        <input id="contact-city" name="city" type="text" className="form-input" placeholder="Mumbai" value={form.city} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="form-group">
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

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">Message</label>
                      <textarea id="contact-message" name="message" className="form-textarea" placeholder="Tell us about your financial goals..." value={form.message} onChange={handleChange} rows={4} />
                    </div>

                    <div className="consent-row">
                      <input type="checkbox" id="contact-consent" name="consent" checked={form.consent} onChange={handleChange} className="form-checkbox" required />
                      <label htmlFor="contact-consent" className="consent-label body-xs">
                        I consent to VPW Wealth contacting me regarding my enquiry. I understand my data will not be shared with third parties. *
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary submit-btn"
                      disabled={!canSubmit || loading}
                    >
                      {loading ? 'Sending…' : 'Send Message'}
                      {!loading && <span className="material-icons">send</span>}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="section office-section">
        <div className="container">
          <div className="office-layout">
            <RevealOnScroll className="office-info">
              <div className="section-label label-sm">Our Office</div>
              <h2 className="headline-lg">Find us.</h2>
              <p className="body-md office-intro">
                Located in the heart of Mumbai's financial district, our headquarters is open for pre-scheduled consultations.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <div className="office-card card">
                <h3 className="office-city label-lg">Mumbai (HQ)</h3>
                <div className="office-details">
                  {[
                    { icon: 'location_on', content: '14th Floor, One World Centre, Elphinstone Road, Mumbai – 400 013' },
                    { icon: 'call', content: '+91 22 4567 8900', href: 'tel:+912245678900' },
                    { icon: 'mail', content: 'mumbai@vpwwealth.com', href: 'mailto:mumbai@vpwwealth.com' },
                    { icon: 'schedule', content: 'Mon – Fri: 9:00 AM – 6:30 PM IST' },
                  ].map(({ icon, content, href }) => (
                    <div key={icon} className="detail-item">
                      <span className="material-icons detail-icon">{icon}</span>
                      {href ? (
                        <a href={href} className="detail-link body-sm">{content}</a>
                      ) : (
                        <span className="detail-text body-sm">{content}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
