import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="section-heading">
        <p>Want to know more?</p>

        <h2>My Resume</h2>
      </div>

      <div className="resume-container">
        <div className="resume-content">
          <h3>Let's take a closer look.</h3>

          <p>
            Download my resume to learn more about my education, skills,
            experience and projects.
          </p>

          <a
            href="/resume/Arya-Vairagare-Resume.pdf"
            download
            className="resume-button"
          >
            Download Resume
            <span>↓</span>
          </a>
        </div>

        <div className="resume-preview">
          <a
            href="/resume/Arya-Vairagare-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              src="/resume/Arya-Vairagare-Resume.pdf"
              title="Resume Preview"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
