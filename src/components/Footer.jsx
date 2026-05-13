import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'Platform', items: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' }
    ]},
    { title: 'Legal', items: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' }
    ]},
    { title: 'Connect', items: [
      { name: 'LinkedIn', path: 'https://linkedin.com' },
      { name: 'Twitter', path: 'https://twitter.com' },
      { name: 'Instagram', path: 'https://instagram.com' }
    ]}
  ];

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Link to="/" className="footer-root">
              VPW Wealth Management
            </Link>
            <p className="footer-tagline body-sm">
              Securing futures through institutional-grade portfolio strategies and bespoke financial guidance.
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
            © {currentYear} VPW Wealth Management. All rights reserved.
          </p>
          <div className="footer-bottom-meta body-sm">
            Designed with precision.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
