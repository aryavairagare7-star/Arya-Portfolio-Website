import experience from "../data/experience";
import "./Experience.css";

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
            <div className="timeline-marker">
              <span></span>
            </div>

            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3>{item.role}</h3>

                  <h4>{item.company}</h4>
                </div>

                <div className="experience-meta">
                  <span>{item.duration}</span>

                  <span>{item.type}</span>
                </div>
              </div>

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

              <div className="experience-achievement">
                <h5>What I Learned</h5>

                <p>{item.learning}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
