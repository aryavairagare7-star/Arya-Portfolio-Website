import education from "../data/education";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">
      <div className="section-heading">
        <p>My academic journey</p>

        <h2>Education</h2>
      </div>

      <div className="education-timeline">
        {/* Animated central line */}

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

              {item.cgpa && (
                <div className="education-cgpa">CGPA: {item.cgpa}</div>
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
