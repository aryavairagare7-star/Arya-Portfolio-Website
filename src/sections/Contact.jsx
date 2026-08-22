import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-heading">
        <p>Let's connect</p>

        <h2>Get In Touch</h2>
      </div>

      <div className="contact-container">
        {/* Introduction */}

        <div className="contact-intro">
          <span className="contact-label">Have something in mind?</span>

          <h3>
            Let's build something
            <span> meaningful.</span>
          </h3>

          <p>
            I'm always open to discussing new opportunities, interesting
            projects, or simply connecting with fellow developers.
          </p>

          <a href="mailto:arya.vairagare7@gmail.com" className="contact-email">
            <FaEnvelope />

            <span>arya.vairagare7@gmail.com</span>
          </a>
        </div>

        {/* Contact Links */}

        <div className="contact-links">
          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/arya-vairagare15/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link linkedin"
          >
            <div className="contact-link-info">
              <span className="contact-icon">
                <FaLinkedinIn />
              </span>

              <div>
                <h4>LinkedIn</h4>

                <p>Let's connect professionally</p>
              </div>
            </div>

            <FaExternalLinkAlt className="contact-arrow" />
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/aryavairagare7-star"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link github"
          >
            <div className="contact-link-info">
              <span className="contact-icon">
                <FaGithub />
              </span>

              <div>
                <h4>GitHub</h4>

                <p>Explore my projects</p>
              </div>
            </div>

            <FaExternalLinkAlt className="contact-arrow" />
          </a>

          {/* Email */}

          {/* <a
            href="mailto:arya.vairagare7@gmail.com"
            className="contact-link email">

            <div className="contact-link-info">
              <span className="contact-icon">
                <FaEnvelope />
              </span>

              <div>
                <h4>Email</h4>

                <p>Drop me a message</p>
              </div>
            </div>

            <FaExternalLinkAlt className="contact-arrow" />
          </a> */}

          {/* Location */}

          <div className="contact-link location">
            <div className="contact-link-info">
              <span className="contact-icon">
                <FaMapMarkerAlt />
              </span>

              <div>
                <h4>Location</h4>

                <p>Nagpur, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}

      <div className="contact-footer">
        <div>
          <p className="contact-footer-title">
            Currently open to new opportunities.
          </p>

          <p className="contact-footer-subtitle">
            Have an idea? I'd love to hear about it.
          </p>
        </div>

        <a href="mailto:arya.vairagare7@gmail.com" className="contact-button">
          Say Hello
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}

      <div className="contact-bottom">
        <p>© {new Date().getFullYear()} Arya Vairagare. All rights reserved.</p>

        <p>Built with React.js</p>
      </div>
    </section>
  );
}

export default Contact;
