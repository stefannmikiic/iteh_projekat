import React from 'react';
import './TestimonialCard.css';

const StarRating = ({ rating }) => {
    // Jednostavna komponenta za prikaz zvezdica
    const fullStars = Math.floor(rating);
    const stars = Array(5).fill('☆').map((star, index) => 
        index < fullStars ? '★' : star
    );
    return <div className="star-rating">{stars.join('')}</div>;
};


const TestimonialCard = ({ testimonial }) => {
  const defaultTestimonial = {
    quote: "Upwork nam je omogućio da brzo skaliramo naš tim za digitalni marketing i pronađemo stručnjake koje nikada ne bismo našli lokalno.",
    author: "Jovana Petrović",
    title: "CEO, TechSolutions",
    rating: 5,
    source: "Client", // Fiktivno
  };

  const data = testimonial || defaultTestimonial;

  return (
    <div className="testimonial-card">
      <StarRating rating={data.rating} />
      <p className="testimonial-quote">"{data.quote}"</p>
      
      <div className="author-info">
        <p className="author-name">{data.author}</p>
        <p className="author-title">{data.title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;