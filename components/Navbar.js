import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">an art studio</div>
      <div className="nav-links">
        <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
