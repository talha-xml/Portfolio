import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });

    setMenuOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => scrollToSection('home')}>
        <span className="logo-text">
          Portfolio<span className="dot">.</span>
        </span>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <button onClick={() => scrollToSection('services')}>Services</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button className="contact-btn" onClick={() => scrollToSection('contact')}>
          Contact
        </button>
      </div>

      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
export default Navbar;
