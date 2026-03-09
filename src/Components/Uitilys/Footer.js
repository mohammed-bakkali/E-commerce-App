import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook, faYoutube, faTelegram, faTwitter,
  faCcVisa, faCcPaypal, faCcStripe,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/Footer.css";

const socials = [
  { icon: faFacebook, label: "Facebook",  color: "#3b5998" },
  { icon: faYoutube,  label: "Youtube",   color: "#FF0000" },
  { icon: faTelegram, label: "Telegram",  color: "#0088cc" },
  { icon: faTwitter,  label: "Twitter",   color: "#1DA1F2" },
];

const Footer = () => {
  return (
    <div className="footer">
      <footer className="container">
        <div className="footer-content">

          {/* Brand */}
          <div className="footer-brand footer-section">
            <h3>ShopZone</h3>
            <p className="footer-brand-desc">
              Your one-stop destination for fashion, accessories, and more.
            </p>
            <div className="social-links">
              {socials.map(({ icon, label, color }) => (
                <a key={label} href="#" className="social-link">
                  <span className="social-icon-wrap">
                    <FontAwesomeIcon icon={icon} style={{ color, fontSize: 14 }} />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              {["Men", "Jewellers", "Accessories", "Clothing", "Beauty Items"].map(i => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              {["Customer Service", "FAQs", "Ordering", "Tracking", "Contacts"].map(i => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>

          {/* My Account */}
          <div className="footer-section">
            <h3>My Account</h3>
            <ul>
              {["Sign In", "View Cart", "My Wishlist", "Track My Order", "Help"].map(i => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              {["Payment Methods", "Money-back!", "Returns", "Shipping", "Terms & Conditions"].map(i => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2024 ShopZone eCommerce. All rights reserved.</p>
          <div className="payment-icons">
            <span className="payment-icon">
              <FontAwesomeIcon icon={faCcVisa}   style={{ color: "#1A1F71", fontSize: 20 }} />
            </span>
            <span className="payment-icon">
              <FontAwesomeIcon icon={faCcPaypal} style={{ color: "#009cde", fontSize: 20 }} />
            </span>
            <span className="payment-icon">
              <FontAwesomeIcon icon={faCcStripe} style={{ color: "#6772E5", fontSize: 20 }} />
            </span>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;