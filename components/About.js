import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About The Artist</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a passionate artist specializing in oil paintings and digital illustrations. 
              My work explores the relationship between nature and human emotions.
            </p>
            <p>
              Graduated from the School of Visual Arts in 2015, I've exhibited in galleries 
              across Europe and North America. When I'm not painting, I teach workshops 
              and mentor young artists.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="/images/artist-portrait.jpg" 
              alt="Artist portrait" 
              className="artist-portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
