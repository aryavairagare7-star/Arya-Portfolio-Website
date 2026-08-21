import education from "../data/education";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">
      <div className="section-heading">
        <p>My academic & professional journey</p>

        <h2>Education & Training</h2>
      </div>

      <div className="education-timeline">
        {/* Central timeline */}

        <div className="timeline-line">
          <div className="timeline-line-progress"></div>
        </div>

        {education.map((item, index) => (
          <div className={`education-item ${item.side}`} key={item.degree}>
            {/* Card */}

            <div className="education-card">
              <span className="education-year">{item.year}</span>

              <h3>{item.degree}</h3>

              <h4>{item.institution}</h4>

              <p>{item.description}</p>

              {item.score && (
                <div className="education-score">
                  <span>{item.scoreLabel}</span>

                  <strong>{item.score}</strong>
                </div>
              )}

              {item.certificates?.length > 0 && (
                <div className="education-certificates">
                  <h5>Certificates</h5>

                  <div className="certificate-list">
                    {item.certificates.map((certificate) => (
                      <a
                        href={certificate.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                        key={certificate.name}
                      >
                        <span>📜</span>

                        <span>{certificate.name}</span>

                        <span>↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Timeline dot */}

            <div className="timeline-dot">
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
