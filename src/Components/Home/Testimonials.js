import React from 'react';
import '../../styles/Testimonials.css';
import avatar from "../../assets/icons/man-avatar.png";
const testimonials = [
  {
    id: 1,
    title: "Code Quality",
    review: "Great job on the code quality! Your attention to detail and dedication to producing clean, well-structured, and efficient code is impressive. Keep up the excellent work!",
    name: "Zebra Fashion",
    jobTitle: "Founder & Owner",
    image: avatar,
    rating: 5,
  },
  {
    id: 2,
    title: "Design Quality",
    review: "Awesome! It is a high-quality HTML template, I suggest two things, please add Angular version as Default with HTML version and Please try to add LMS part. Thanks",
    name: "James Bowen",
    jobTitle: "Web Development",
    image: avatar,
    rating: 5,
  },
  {
    id: 3,
    title: "Customer Support",
    review: "High theme quality. Very good support, they spent almost an hour remotely to fix a problem. I hope this theme will have a long term support. Great Admin template comes in handy... :)",
    name: "Alex Smith",
    jobTitle: "UI/UX Designer",
    image: avatar,
    rating: 5,
  },
  {
    id: 4,
    title: "Feature Availability",
    review: "Hello everyone, I would like to suggest here two contents that you could create. Course pages and blog pages. In them you could insert the listing and management of courses.",
    name: "Ayaan Bowen",
    jobTitle: "Fashion Designer",
    image: avatar,
    rating: 5,
  },
  {
    id: 5,
    title: "Design Quality",
    review: "Thank you for supporting CakePHP 4, we have purchased the template because of this support, please push forward more integration. The template is very complete as an admin panel.",
    name: "Pitch Fashion",
    jobTitle: "Web Designer",
    image: avatar,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials container">
      <h2>What Customers Say About Us</h2>
      <p>
        A customer is a person or business that buys goods or services from another business.
        Customers are crucial because they generate revenue.
      </p>
      <div className="container responsive-grid-250 mb-20 mt-20" style={{gap: "10px"}}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

const TestimonialCard = ({ title, review, name, jobTitle, image, rating }) => {
  return (
    <div className="testimonial-card">
      <div className="rating">
        {"★".repeat(rating)}
      </div>
      <h3>{title}</h3>
      <p className="review">"{review}"</p>
      <div className="author">
        <img src={image} alt={name} className="author-image" />
        <div>
          <p className="author-name">{name}</p>
          <p className="author-job">{jobTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
