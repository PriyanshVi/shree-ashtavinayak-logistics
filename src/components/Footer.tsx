import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  const services = [
    'Road Transportation',
    'Warehousing & Storage',
    'International Shipping',
    'Express Delivery',
    'Ocean Freight',
    'Air Freight'
  ];

  const contactInfo = [
    {
      icon: <Phone />,
      text: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <Mail />,
      text: 'info@ashtavinayaklogistics.com',
      link: 'mailto:info@ashtavinayaklogistics.com'
    },
    {
      icon: <MapPin />,
      text: '123 Logistics Park, Andheri East, Mumbai',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock />,
      text: 'Mon-Fri: 8AM-8PM, Sat: 9AM-6PM',
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Facebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <Twitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <Linkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Youtube />, url: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <Truck className="logo-icon" />
                <span>Shree Ashtavinayak Logistics</span>
              </div>
              <p>
                Your trusted partner in logistics for over a decade. We provide 
                comprehensive transportation and warehousing solutions across India 
                with a commitment to reliability, efficiency, and customer satisfaction.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3>Our Services</h3>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link to="/services">{service}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3>Contact Information</h3>
              <div className="contact-list">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="contact-item">
                    <span className="contact-icon">{contact.icon}</span>
                    {contact.link ? (
                      <a href={contact.link} className="contact-link">
                        {contact.text}
                      </a>
                    ) : (
                      <span className="contact-text">{contact.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Shree Ashtavinayak Logistics. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 