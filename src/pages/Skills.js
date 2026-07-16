import React from 'react';
import '../styles/Skills.css';
import { FaCode, FaServer, FaBrain, FaCloud } from 'react-icons/fa';

function Skills() {
  const categories = [
    {
      icon: <FaCode />,
      title: 'Frontend',
      description: 'Building fast, modern and responsive interfaces with clean user experiences.',
      skills: ['ReactJS', 'JavaScript', 'CSS3', 'HTML5', 'Bootstrap']
    },
    {
      icon: <FaServer />,
      title: 'Backend',
      description: 'Designing scalable APIs and databases powering modern web applications.',
      skills: ['Python', 'Flask', 'FastAPI', 'PostgreSQL', 'MySQL', 'REST APIs']
    },
    {
      icon: <FaBrain />,
      title: 'AI Engineering',
      description:
        'Developing intelligent applications using modern machine learning and LLM technologies.',
      skills: ['LLMs', 'RAG', 'AI Model Integration', 'Prompt Engineering', 'Vector Databases']
    },
    {
      icon: <FaCloud />,
      title: 'DevOps',
      description: 'Automating deployment pipelines and managing cloud infrastructure efficiently.',
      skills: ['Git', 'GitHub Actions', 'CI/CD Pipelines', 'Docker', 'Render', 'Neon', 'AWS']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <p className="section-tag">Expertise</p>
        <h1 className="skills-title">
          My Creative <span>Toolkit.</span>
        </h1>
      </div>
      <div className="skills-grid">
        {categories.map((item, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="tech-stack">
              {item.skills.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
