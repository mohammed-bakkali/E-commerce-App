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
            <h3>ShopZone</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faFacebook} className="fa-icon" style={{ color: "#3b5998" }} /> Facebook
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} className="fa-icon" style={{ color: "#FF0000" }} /> Youtube
              </li>
              <li>
                <FontAwesomeIcon icon={faTelegram} className="fa-icon" style={{ color: "#0088cc" }} /> Telegram
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} className="fa-icon" style={{ color: "#1DA1F2" }} /> Twitter
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li>Men</li>
              <li>Jewellers</li>
              <li>Accessories</li>
              <li>Clothing</li>
              <li>Beauty Items</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li>Custom Service</li>
              <li>FAQs</li>
              <li>Ordering</li>
              <li>Tracking</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>My Account</h3>
            <ul>
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
              <li>Track My Order</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li>Payment Methods</li>
              <li>Money-back!</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>ShopZone eCommerce. © 2024</p>
          <div className="payment-icons">
            <FontAwesomeIcon icon={faCcVisa} size="2x" className="fa-icon" style={{ color: "#1A1F71" }} />
            <FontAwesomeIcon icon={faCcPaypal} size="2x" className="fa-icon" style={{ color: "#003087" }} />
            <FontAwesomeIcon icon={faCcStripe} size="2x" className="fa-icon" style={{ color: "#6772E5" }} />
            <FontAwesomeIcon icon={faCheckCircle} size="2x" className="fa-icon" style={{ color: "#4CAF50" }} /> {/* Assuming Verisign */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
