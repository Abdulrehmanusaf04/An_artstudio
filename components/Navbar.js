"use client"

import { useState } from "react"
import { Link } from "react-scroll"

const Navbar = () => {
  const [showServices, setShowServices] = useState(false)

  const services = [
    { id: 1, name: "Storyboard", link: "services" },
    { id: 2, name: "NFTs Art", link: "services" },
    { id: 3, name: "Character Designing", link: "services" },
    { id: 4, name: "2D Games", link: "services" },
  ]

  return (
    <nav className="navbar">
      <div className="logo">an art studio</div>
      <div className="nav-links">
        {/* Added Home link that scrolls to hero section */}
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>

        <Link to="gallery" smooth={true} duration={500}>
          Gallery
        </Link>

        <div
          className="services-dropdown"
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          <Link to="services" smooth={true} duration={500} className="services-link">
            Services
          </Link>
          {showServices && (
            <div className="dropdown-menu">
              {services.map((service) => (
                <Link key={service.id} to={service.link} smooth={true} duration={500} className="dropdown-item">
                  {service.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
