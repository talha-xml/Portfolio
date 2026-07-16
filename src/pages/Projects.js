import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: 'ReMIND - Final Year Project',
      subtitle: 'Generative AI Based Memory Rebuilder',
      description:
        'ReMIND is an AI-powered web application designed to assist individuals experiencing memory loss, including Alzheimers and dementia patients. By combining text, images, and voice recordings, the system reconstructs fragmented memories into meaningful narratives, helping users reconnect with important moments in their lives. Our goal was to build technology with empathy where AI supports not only productivity but also human connection and emotional well-being. The project integrates modern AI techniques with a secure, user-friendly platform for memory reconstruction and cognitive support.',
      technologies: [
        'ReactJS',
        'FastAPI',
        'Groq',
        'Real-ESRGAN',
        'GFPGAN',
        'BLIP',
        'ElevenLabs',
        'gTTS',
        'PostgreSQL',
        'Neon',
        'LLMs',
        'RAG',
        'FAISS',
        'OAuth2',
        'JWT'
      ],
      github: 'https://github.com/airemind/ReMIND-FYP',
      website: 'https://www.remindio.space',
      featured: true,
      unavailable: true
    },
    {
      title: 'Compiler Construction',
      subtitle: 'Compiler Phase I & Phase II Implementation',
      description:
        'This project involves implementing a compiler for a custom programming language, covering both Phase I and Phase II of compiler construction. It includes lexical analysis, syntax parsing, semantic analysis, symbol table management, error handling, and intermediate code generation to demonstrate the complete compilation process.',
      technologies: ['C', 'Flex', 'Bison', 'Lexical Analyzer', 'Parser'],
      github: 'https://github.com/talha-xml/Compiler-Construction-Project'
    },

    {
      title: 'Hadoop Inverted Index',
      subtitle: 'Parallel & Distributed Computing Project',
      description:
        'This project implements an inverted index using Hadoop and MapReduce for efficient retrieval of documents based on their content. The project demonstrates the use of distributed computing techniques to process large datasets and build an index that allows for fast search and retrieval of information. Testes on 50+ eBooks.',
      technologies: ['Python', 'Hadoop', 'MapReduce', 'Big Data'],
      github: 'https://github.com/talha-xml/PDC-Project-InvertedIndex'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <p className="section-tag">Selected Work</p>
        <h1 className="projects-title">
          Things I've <span>Built.</span>
        </h1>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={project.featured ? 'project-card featured' : 'project-card'}>
            {project.featured && <div className="featured-ribbon">Featured</div>}
            <div className="project-content">
              <h2>{project.title}</h2>
              <h3>{project.subtitle}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                  View Source
                </a>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-btn"
                  >
                    <FaExternalLinkAlt />
                    Visit
                  </a>
                )}
              </div>
              {project.unavailable && (
                <p className="domain-warning">
                  Domain is unavailable for now. Please Visit Github or
                  <a
                    href="https://www.linkedin.com/posts/m-talha-faizan-46158532a_remind-generativeai-artificialintelligence-ugcPost-7478797479589830656-owFh/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFMFyEkBh3C8Od-QVZ0gWE-zDwDvyU0o8mo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <u>
                      <strong> LinkedIn </strong>
                    </u>
                  </a>
                  for more information.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
