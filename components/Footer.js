import React from 'react';
import { FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="mailto:artist@example.com">
          <FaEnvelope className="icon" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Artist Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;