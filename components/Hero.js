import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home"> 
      <div className="hero-content">
        <p className="welcome-text">Welcome to</p>
        <h1 className="logo-text">
          <span className="gradient-text">ANArtStudio</span>
        </h1>
        <h2 className="tagline">
          Your Digital Wizard for <span className="gradient-text">Everything Creative</span>
        </h2>
        <p className="hero-description">
          We transform ideas into digital experiences that captivate, engage, and inspire.
        </p>
        <div className="hero-actions">
          <a href="#gallery" className="primary-btn">See Our Work</a>
          <a href="#contact" className="secondary-btn">
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
