import React from 'react';
import '../styles/Home.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-left">
          <img src="/me.jpg" alt="Profile" className="profile-img" />
        </div>

        <div className="hero-right">
          <h3>Welcome, Myself</h3>
          <h1>M. Talha Faizan</h1>
          <h2>
            And I'm a <span className="highlight">Full Stack Developer and DevOps Engineer</span>
          </h2>
          <p className="intro-lines">
            I am a passionate Web Developer and have a keen interest in DevOps Engineering along
            with Artificial Intelligence. I love building creative and efficient solutions that
            bridge the gap between modern web technologies and intelligent systems. Always eager to
            learn and explore new challenges in tech world.
          </p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/m-talha-faizan-46158532a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/talha-xml" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/not.mtf/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
