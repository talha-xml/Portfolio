import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
const Home = () => {
  const cardRef = useRef(null);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const card = cardRef.current;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * 8;
      const rotateX = ((centerY - y) / centerY) * 8;
      card.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
      `;
    };

    const reset = () => {
      card.style.transform = `
        perspective(1200px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
      `;
    };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', reset);

    return () => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="background-grid"></div>
      <div className="background-blob blob1"></div>
      <div className="background-blob blob2"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            Available for Internships & Opportunities
          </div>
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">
            Muhammad Talha <span>Faizan</span>
          </h1>
          <h2 className="hero-subtitle">
            Full-Stack Developer
            <span className="separator"> | </span>
            AI/ML Engineer
            <span className="separator"> | </span>
            DevOps Practitioner
          </h2>
          <p className="hero-description">
            I am a passionate Web Developer with a strong interest in DevOps Engineering and
            Artificial Intelligence. I enjoy building scalable applications, cloud-native solutions,
            and intelligent systems that solve real-world problems through clean architecture and
            modern technologies.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => scrollToSection('projects')}>
              Explore My Work
            </button>
            <button className="secondary-btn" onClick={() => scrollToSection('contact')}>
              Let's Connect
            </button>
          </div>
          <div className="hero-socials">
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
          </div>
          <div className="hero-stats">
            <div>
              <h3>3</h3>
              <p>Projects Built</p>
            </div>
            <div className="divider"></div>
            <div>
              <h3>2</h3>
              <p>Years Learning</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glow-circle"></div>
          <div className="code-card-wrapper">
            <div ref={cardRef} className="code-card">
              <div className="window-header">
                <div className="window-buttons">
                  <span className="red"></span>
                  <span className="yellow"></span>
                  <span className="green"></span>
                </div>
              </div>
              <div className="code-content">
                <p>
                  <span className="keyword">const</span> <span className="variable">developer</span>{' '}
                  = {'{'}
                </p>
                <p className="indent">
                  name:
                  <span className="string">"Muhammad Talha Faizan"</span>,
                </p>
                <p className="indent">
                  role:
                  <span className="string">["Full-Stack Developer", "AI/ML Engineer"]</span>,
                </p>
                <p className="indent">
                  stack:<span className="string">["React","FastAPI","PostgreSQL"]</span>,
                </p>
                <p className="indent">
                  cloud:
                  <span className="string">["Docker","AWS"]</span>,
                </p>
                <p className="indent">
                  ai:
                  <span className="string">["LLMs","RAG", "Prompt Engineering"]</span>
                </p>
                <p>{'};'}</p>
                <p>
                  <span className="function">buildFuture</span>
                  ();
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
