import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">PORTFOLIO</Link>
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>

        <Link to="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>

        <Link to="/skills" onClick={() => setIsOpen(false)}>
          Skills
        </Link>

        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
