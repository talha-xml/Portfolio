import '../styles/Contact.css';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-card">
        <p className="contact-tag">Contact</p>

        <h1 className="contact-title">
          want to Build Something <span>Nice?</span>
        </h1>

        <p className="contact-text">
          Whether you're looking for a Full-Stack Developer, AI Engineer, or simply want to discuss
          an exciting idea, I'd love to hear from you.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+92 300 1234567" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="8"
              maxLength="2000"
              placeholder="Tell me about your project, idea, requirements, or anything you'd like to discuss..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>

        <div className="contact-email">
          <span>Email</span>
          <a href="mailto:mtalhafaizan30@gmail.com">mtalhafaizan30@gmail.com</a>
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
