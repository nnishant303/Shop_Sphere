import {
  FiGlobe,
  FiMail,
  FiCreditCard,
  FiSmartphone,
  FiGrid,
} from "react-icons/fi";

import "./Footer.css";

const Footer = () => {
  const footerLinks = {
    company: ["About Us", "Careers", "Press", "Partner with Us"],
    help: [
      "Contact Support",
      "Track Order",
      "Shipping Info",
      "Returns & Refunds",
    ],
    legal: ["Terms of Service", "Privacy Policy", "Security", "Sitemap"],
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>Shop Sphere</h2>

          <p>
            India's most trusted premium marketplace for electronics, fashion,
            home, beauty, and everyday essentials.
          </p>

          <div className="footer-social">
            <button type="button" aria-label="Website">
              <FiGlobe />
            </button>

            <button type="button" aria-label="Email">
              <FiMail />
            </button>
          </div>
        </div>

        <div className="footer-column">
          <h3>COMPANY</h3>

          <ul>
            {footerLinks.company.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>HELP</h3>

          <ul>
            {footerLinks.help.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>LEGAL</h3>

          <ul>
            {footerLinks.legal.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Shop Sphere. All rights reserved.</p>

        <div className="payment-methods">
          <span>Payment Methods:</span>

          <span aria-label="Credit card">
            <FiCreditCard />
          </span>

          <span aria-label="Mobile payment">
            <FiSmartphone />
          </span>

          <span aria-label="Other payment">
            <FiGrid />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
