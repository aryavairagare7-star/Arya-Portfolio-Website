import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-heading">
        <p>Let's connect</p>
        <h2>Get In Touch</h2>
      </div>

      <div className="contact-container">
        <div className="contact-intro">
          <h3>Have a project or opportunity in mind?</h3>

          <p>
            I'm always open to discussing new opportunities, interesting
            projects, or simply connecting with fellow developers.
          </p>

          <a href="mailto:your-email@example.com" className="contact-email">
            arya.vairagare7@gmail.com
          </a>
        </div>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/arya-vairagare15/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div>
              <span className="contact-icon">in</span>

              <div>
                <h4>LinkedIn</h4>
                <p>Let's connect professionally</p>
              </div>
            </div>

            <span>↗</span>
          </a>

          <a
            href="https://github.com/aryavairagare7-star"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div>
              <span className="contact-icon">GH</span>

              <div>
                <h4>GitHub</h4>
                <p>Explore my projects</p>
              </div>
            </div>

            <span>↗</span>
          </a>

          <div className="contact-link">
            <div>
              <span className="contact-icon">📍</span>

              <div>
                <h4>Location</h4>
                <p>Nagpur, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <p>I'm currently open to new opportunities.</p>

        <a href="mailto:arya.vairagare7@gmail.com" className="contact-button">
          Say Hello
        </a>
      </div>
    </section>
  );
}

export default Contact;
