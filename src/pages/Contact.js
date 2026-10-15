import React, { useState } from 'react';
import '../styles/Contact.css';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusType, setStatusType] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Sending message...');
    setStatusType('');

    try {
      const form = event.target;
      const formData = new FormData(form);
      formData.append('access_key', 'ef720cf5-60f9-40fc-b2c9-a48b091a4d14');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatusType('success');
        setResult('Thank you! Your message has been sent successfully.');
        form.reset();
      } else {
        setStatusType('error');
        setResult(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatusType('error');
      setResult('Failed to send message. Please check your connection or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+92 XXX XXXXXXX" required />
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

          <button type="submit" className="contact-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {result && <p className={`form-status ${statusType}`}>{result}</p>}
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
