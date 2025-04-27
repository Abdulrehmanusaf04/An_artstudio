// Update each component to stand alone
import React from 'react';

const Gallery = () => {
  const artPieces = [
    { id: 1, title: 'Sunset Dreams', imgUrl: 'url-to-image-1.jpg' },
    { id: 2, title: 'Ocean Whisper', imgUrl: 'url-to-image-2.jpg' },
  ];

  return (
    <div className="gallery-page"> {/* Added new wrapper class */}
      <section className="gallery">
        <h2>My Artworks</h2>
        <div className="gallery-grid">
          {artPieces.map((art) => (
            <div key={art.id} className="art-card">
              <img src={art.imgUrl} alt={art.title} />
              <h3>{art.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;