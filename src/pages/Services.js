import React from 'react';
import '../styles/Services.css';
import { FaCode, FaRobot, FaCloud, FaServer, FaDatabase, FaGaugeHigh } from 'react-icons/fa6';

const services = [
  {
    icon: <FaCode />,
    title: 'Full-Stack Development',
    description:
      'Designing and developing responsive, scalable, and modern web applications with clean architecture, intuitive user experiences, and maintainable code.'
  },
  {
    icon: <FaRobot />,
    title: 'AI Integration',
    description:
      'Integrating intelligent AI capabilities including LLM-powered assistants, Retrieval-Augmented Generation (RAG), prompt engineering, and workflow automation.'
  },
  {
    icon: <FaCloud />,
    title: 'DevOps & Deployment',
    description:
      'Deploying reliable applications using modern DevOps practices, automated CI/CD pipelines, cloud platforms, and containerized environments.'
  },
  {
    icon: <FaServer />,
    title: 'REST API Development',
    description:
      'Building secure, scalable, and well-structured APIs that connect applications, third-party services, and databases efficiently.'
  },
  {
    icon: <FaDatabase />,
    title: 'Database Design',
    description:
      'Designing optimized database structures focused on scalability, consistency, performance, and long-term maintainability.'
  },
  {
    icon: <FaGaugeHigh />,
    title: 'Performance Optimization',
    description:
      'Improving application performance, responsiveness, accessibility, and overall user experience through modern optimization techniques.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-header">
        <p className="section-tag">SERVICES</p>
        <h1 className="services-title">
          What I can <span>build.</span>
        </h1>
        <p className="services-subtitle">
          I build scalable software solutions that combine modern web development, intelligent AI
          systems, and reliable cloud deployment.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
