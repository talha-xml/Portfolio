import '../styles/Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-card">
        <p className="contact-tag">Contact</p>
        <h1 className="contact-title">
          Let's Build Something <span>Amazing.</span>
        </h1>
        <p className="contact-text">
          Whether you're looking for a Full-Stack Developer, AI Engineer, or simply want to discuss
          an exciting idea, I'd love to hear from you.
        </p>
        <div className="contact-email">
          <span>Email</span>
          <a href="mailto:YOUR_EMAIL@gmail.com">mtalhafaizan30@gmail.com</a>
        </div>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/m-talha-faizan-46158532a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/talha-xml"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;
