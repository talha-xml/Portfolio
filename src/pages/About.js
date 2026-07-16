import React from 'react';
import '../styles/About.css';
import { FaReact, FaBrain, FaCloud, FaDocker, FaChartLine, FaServer } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-header">
        <p className="section-tag">ABOUT ME</p>
        <h1 className="about-title">
          Turning ideas into <span>impact.</span>
        </h1>
      </div>
      <div className="about-grid">
        <div className="about-left">
          <p className="about-text">
            I'm <strong>Muhammad Talha Faizan</strong>, a Computer Science graduate and passionate
            Full-Stack Developer who enjoys building scalable web applications, AI-powered systems,
            and cloud-native solutions.
          </p>
          <p className="about-text">
            My interests lie at the intersection of software engineering, Artificial Intelligence,
            and DevOps. I enjoy transforming ideas into reliable digital products using modern
            technologies while continuously learning and exploring better engineering practices.
          </p>
          <p className="about-text">
            Whether it's developing responsive web applications, integrating AI models, designing
            REST APIs, or deploying applications to the cloud, I strive to create software that is
            clean, efficient, and meaningful.
          </p>
        </div>
        <div className="about-right">
          <div className="info-card">
            <h3>Education</h3>
            <div className="info-item">
              <div>
                <h4>Bachelor of Computer Science</h4>
                <p>University of Central Punjab</p>
              </div>
            </div>
            <div className="info-item">
              <div>
                <h4>2022 - 2026</h4>
                <p>BS Computer Science Graduate</p>
              </div>
            </div>
          </div>
          <div className="info-card">
            <h3>Interests</h3>
            <div className="interest-list">
              <span>
                <FaReact /> Full-Stack Development
              </span>
              <span>
                <FaBrain /> Artificial Intelligence
              </span>
              <span>
                <FaCloud /> Cloud Computing
              </span>
              <span>
                <FaDocker /> DevOps
              </span>
              <span>
                <FaChartLine /> Machine Learning
              </span>
              <span>
                <FaServer /> System Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
