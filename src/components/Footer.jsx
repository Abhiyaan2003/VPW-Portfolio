import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'Platform', items: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
      { name: 'Research', path: 'https://research.onlyvpw.com' }
    ]},
    { title: 'Important', items: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Official Schedule of Charges', path: '/charges' },
      { name: 'Scores Portal', path: 'https://scores.gov.in/' },
      { name: 'ODR Portal', path: 'https://smartodr.in/' },
      { name: 'SEBI Portal', path: 'https://www.sebi.gov.in/' },
      { name: 'AMFI Portal', path: 'https://www.amfiindia.com/' },
      { name: 'Key Personnel', path: '#' },
      { name: 'Contact Document', path: '#' }
    ]},
    { title: 'Connect', items: [
      { name: 'LinkedIn', path: 'https://linkedin.com' },
      { name: 'Twitter', path: 'https://twitter.com' },
      { name: 'Instagram', path: 'https://instagram.com' },
      { name: 'YouTube', path: 'https://youtube.com' }
    ]}
  ];

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-container" aria-label="VPW Wealth — Home">
              <img src="/logo1.png" alt="VPW Wealth" className="footer-logo-img" />
            </Link>
            <p className="footer-tagline body-sm">
              An AI Powered Investment Management Platform and Service for Affluents Indian's.
              <br /><br />
              Formely Victoria Paradise Advisor LLP<br />
              LLPIN ACS 3188<br />
              HeadOffice - Siliguri, WB, IND
            </p>
          </div>

          <div className="footer-links-grid">
            {footerLinks.map((group, idx) => (
              <div key={idx} className="footer-link-group">
                <h5 className="footer-link-title label-lg">{group.title}</h5>
                <ul className="footer-link-list">
                  {group.items.map((link, lIdx) => (
                    <li key={lIdx}>
                      {link.path.startsWith('http') ? (
                        <a href={link.path} target="_blank" rel="noopener noreferrer" className="footer-link body-sm">
                          {link.name}
                        </a>
                      ) : (
                        <Link to={link.path} className="footer-link body-sm">
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright body-sm">
            © {currentYear} Victoria Paradise Advisor LLP All Rights Reserved.
          </p>
          <div className="footer-bottom-meta body-sm">
            made with love from india for the world
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
