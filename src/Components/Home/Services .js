import React from "react";
import "../../styles/Services.css";

const Services = () => {
  const services = [
    {
      icon: "fas fa-shipping-fast",
      title: "Fast & Secure Delivery",
      desc: "Lightning-fast shipping with real-time tracking and full security guarantee on every order.",
      color: "#3b82f6",
      bg: "rgba(59,130,246,.08)",
      border: "rgba(59,130,246,.25)",
    },
    {
      icon: "fas fa-credit-card",
      title: "Online Payment",
      desc: "Secure, encrypted payment gateway supporting all major cards and digital wallets.",
      color: "#a78bfa",
      bg: "rgba(167,139,250,.08)",
      border: "rgba(167,139,250,.25)",
    },
    {
      icon: "fas fa-money-bill-wave",
      title: "Money Back Guarantee",
      desc: "Full refund within 5 business days — no questions asked, no hassle.",
      color: "#4ade80",
      bg: "rgba(74,222,128,.08)",
      border: "rgba(74,222,128,.25)",
    },
    {
      icon: "fas fa-headset",
      title: "24 / 7 Support",
      desc: "Round-the-clock customer service ready to resolve any issue at any time.",
      color: "#fb923c",
      bg: "rgba(251,146,60,.08)",
      border: "rgba(251,146,60,.25)",
    },
  ];

  return (
    <div className="services-section">
      <div className="container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="svc-card" key={index}
              style={{ "--svc-color": service.color, "--svc-bg": service.bg, "--svc-border": service.border }}>
              <div className="svc-icon-wrap">
                <i className={service.icon}></i>
              </div>
              <div className="svc-content">
                <h3 className="svc-title">{service.title}</h3>
                <p className="svc-desc">{service.desc}</p>
              </div>
              <div className="svc-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;