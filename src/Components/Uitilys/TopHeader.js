// TopHeader.js
import React from "react";
import "../../styles/TopHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="container between-flex">
        <div className="header-info">
          <span>
            <FontAwesomeIcon icon={faTruck} /> Free Delivery
          </span>
          <span className="divider">|</span>
          <span>
            <FontAwesomeIcon icon={faGlobe} /> Returns Policy
          </span>
        </div>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
