import "./Resume.css";

import { FaDownload, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

function Resume() {
  const resumePath = "/resume/Arya-Vairagare-Resume.pdf";

  return (
    <section id="resume" className="resume">
      <div className="section-heading">
        <p>Want to know more?</p>

        <h2>My Resume</h2>
      </div>

      <div className="resume-container">
        {/* Resume Content */}

        <div className="resume-content">
          <div className="resume-icon">
            <FaFileAlt />
          </div>

          <span className="resume-label">Curriculum Vitae</span>

          <h3>Let's take a closer look.</h3>

          <p>
            Download my resume to learn more about my education, skills,
            experience and projects.
          </p>

          {/* Buttons */}

          <div className="resume-actions">
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button primary"
            >
              <span>View Resume</span>

              <FaExternalLinkAlt />
            </a>

            <a href={resumePath} download className="resume-button secondary">
              <span>Download</span>

              <FaDownload />
            </a>
          </div>
        </div>

        {/* Resume Preview */}

        <div className="resume-preview-wrapper">
          <div className="resume-preview">
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume"
            >
              <iframe src={resumePath} title="Resume Preview" />
            </a>
          </div>

          <span className="resume-preview-hint">
            Click to open full resume ↗
          </span>
        </div>
      </div>
    </section>
  );
}

export default Resume;
