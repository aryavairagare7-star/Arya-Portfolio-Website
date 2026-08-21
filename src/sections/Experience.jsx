import experience from "../data/experience";
import "./Experience.css";

import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-heading">
        <p>My professional journey</p>

        <h2>Experience</h2>
      </div>

      <div className="experience-timeline">
        {experience.map((item, index) => (
          <div className="experience-item" key={index}>
            {/* Timeline Marker */}

            <div className="timeline-marker">
              <span></span>
            </div>

            {/* Experience Content */}

            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <span className="experience-label">
                    Professional Experience
                  </span>

                  <h3>{item.role}</h3>

                  <h4>{item.company}</h4>
                </div>

                <div className="experience-meta">
                  <span>{item.duration}</span>

                  <span>{item.type}</span>
                </div>
              </div>

              {/* Responsibilities */}

              <div className="experience-responsibilities">
                <h5>Responsibilities</h5>

                <ul>
                  {item.responsibilities.map(
                    (responsibility, responsibilityIndex) => (
                      <li key={responsibilityIndex}>{responsibility}</li>
                    ),
                  )}
                </ul>
              </div>

              {/* What I Learned */}

              <div className="experience-achievement">
                <h5>What I Learned</h5>

                <p>{item.learning}</p>
              </div>

              {/* Certificate */}

              {item.certificate && (
                <div className="experience-certificate">
                  <div className="certificate-icon">
                    <FaCertificate />
                  </div>

                  <div className="certificate-info">
                    <span>Internship Certificate</span>

                    <p>Certificate of Internship</p>
                  </div>

                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-button"
                  >
                    <span>View Certificate</span>

                    <FaExternalLinkAlt />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
