import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">Contact Me</h1>

      <p className="contact-text">
        Thank you for taking the time to visit my portfolio. I am always interested in discussing
        software development, AI, machine learning, web technologies, and new opportunities.
      </p>

      <p className="contact-text">
        Whether you have a project idea, an internship opportunity, or simply wish to connect, feel
        free to reach out through email. I would be happy to hear from you.
      </p>

      <a className="contact-email" href="mailto:mtalhafaizan30@gmail.com">
        mtalhafaizan30@gmail.com
      </a>

      <p className="contact-note">I typically respond within 24–48 hours.</p>
    </div>
  );
}

export default Contact;
