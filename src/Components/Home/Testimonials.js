import React from "react";
import "../../styles/Testimonials.css";
import avatar from "../../assets/icons/man-avatar.png";

const testimonials = [
  {
    id: 1,
    title: "Code Quality",
    review: "Great job on the code quality! Your attention to detail and dedication to producing clean, well-structured, and efficient code is impressive.",
    name: "Zebra Fashion",
    jobTitle: "Founder & Owner",
    image: avatar,
    rating: 5,
  },
  {
    id: 2,
    title: "Design Quality",
    review: "Awesome! It is a high-quality HTML template. I suggest adding an Angular version as default with HTML version. Thanks!",
    name: "James Bowen",
    jobTitle: "Web Development",
    image: avatar,
    rating: 5,
  },
  {
    id: 3,
    title: "Customer Support",
    review: "High theme quality. Very good support — they spent almost an hour remotely to fix a problem. I hope this theme will have long-term support.",
    name: "Alex Smith",
    jobTitle: "UI/UX Designer",
    image: avatar,
    rating: 5,
  },
  {
    id: 4,
    title: "Feature Availability",
    review: "I would like to suggest two contents: course pages and blog pages, with listing and management of courses built in.",
    name: "Ayaan Bowen",
    jobTitle: "Fashion Designer",
    image: avatar,
    rating: 5,
  },
  {
    id: 5,
    title: "Design Quality",
    review: "Thank you for supporting CakePHP 4! The template is very complete as an admin panel — please push forward more integrations.",
    name: "Pitch Fashion",
    jobTitle: "Web Designer",
    image: avatar,
    rating: 5,
  },
];

const TestimonialCard = ({ title, review, name, jobTitle, image, rating }) => (
  <div className="testimonial-card">
    <div className="card-stars">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
    <h3 className="card-title">{title}</h3>
    <p className="review">"{review}"</p>
    <hr className="card-divider" />
    <div className="author">
      <img src={image} alt={name} className="author-image" />
      <div>
        <p className="author-name">{name}</p>
        <p className="author-job">{jobTitle}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="testimonials container">
    <h2 className="testimonials-heading">What Customers Say About Us</h2>
    <p className="testimonials-sub">
      Real feedback from our customers who trust us every day.
    </p>
    <div className="responsive-grid-250 mb-20 mt-20" style={{ gap: "14px" }}>
      {testimonials.map((t) => (
        <TestimonialCard key={t.id} {...t} />
      ))}
    </div>
  </section>
);

export default Testimonials;