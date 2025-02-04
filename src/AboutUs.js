// AboutUs.js
import React from 'react';
import './AboutUs.css';

const aboutSections = [
  {
    id: 1,
    title: 'Hello',
    image:`${process.env.PUBLIC_URL}/images/hello.jpg`,
    alt: 'Nice to meet you',
    text: "Nice to meet you! We're so glad you're here. At CANDELLA, we genuinely value our customers and strive to provide the best service."
  },
  {
    id: 2,
    title: 'Experience',
    image: `${process.env.PUBLIC_URL}/images/experience.jpg`,
    alt: 'Experience',
    text: "With years of experience in the candle-making industry, we pride ourselves on delivering quality products that bring warmth and charm to your home."
  },
  {
    id: 3,
    title: 'Quality',
    image: `${process.env.PUBLIC_URL}/images/quality.jpg`,
    alt: 'Quality',
    text: "Our materials are the finest, ensuring that every candle we create is not only beautiful but long-lasting and clean-burning. There’s nothing better than CANDELLA."
  }
];

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-section">
        <h2 className="about-us-header">About Us</h2>
        {aboutSections.map((section) => (
          <div key={section.id} className="about-us-item">
            <img src={section.image} alt={section.alt} />
            <div>
              <h3 className="section-title">{section.title}</h3>
              <p>{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;








