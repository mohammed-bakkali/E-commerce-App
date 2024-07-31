import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTelegram,
  faTwitter,
  faCcVisa,
  faCcPaypal,
  faCcStripe,
} from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h5>NEXTON</h5>
            <ul>
              <li>
                <FontAwesomeIcon icon={faFacebook} className="fa-icon" /> Facebook
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} className="fa-icon" /> Youtube
              </li>
              <li>
                <FontAwesomeIcon icon={faTelegram} className="fa-icon" /> Telegram
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} className="fa-icon" /> Twitter
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Getting started</h5>
            <ul>
              <li>Release Notes</li>
              <li>Upgrade Guide</li>
              <li>Browser Support</li>
              <li>Dark Mode</li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Explore</h5>
            <ul>
              <li>Prototyping</li>
              <li>Design systems</li>
              <li>Pricing</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Community</h5>
            <ul>
              <li>Discussion Forums</li>
              <li>Code of Conduct</li>
              <li>Contributing</li>
              <li>API Reference</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Nexton eCommerce. © 2024</p>
          <div className="payment-icons">
            <FontAwesomeIcon icon={faCcVisa} size="2x" className="fa-icon" />
            <FontAwesomeIcon icon={faCcPaypal} size="2x" className="fa-icon"  />
            <FontAwesomeIcon icon={faCcStripe} size="2x" className="fa-icon"  />
            <FontAwesomeIcon icon={faCheckCircle} size="2x" className="fa-icon"  />{" "}
            {/* Assuming Verisign */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
