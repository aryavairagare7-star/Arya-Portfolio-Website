import { useEffect, useRef, useState } from "react";
import education from "../data/education";
import "./Education.css";

function Education() {
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const rect = timeline.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      // Position where the progress line should reach
      const triggerPoint = viewportHeight * 0.55;

      // How far the trigger point has travelled through the timeline
      const distance = triggerPoint - rect.top;

      const percentage = (distance / rect.height) * 100;

      const clampedProgress = Math.min(100, Math.max(0, percentage));

      setProgress(clampedProgress);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);

      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section id="education" className="education">
      <div className="section-heading">
        <p>My academic & professional journey</p>

        <h2>Education & Training</h2>
      </div>

      <div className="education-timeline" ref={timelineRef}>
        {/* Central timeline */}

        <div className="timeline-line">
          <div
            className="timeline-line-progress"
            style={{
              height: `${progress}%`,
            }}
          />
        </div>

        {education.map((item, index) => {
          /*
           * Calculate whether the timeline
           * has reached this particular item.
           */

          const itemProgress = ((index + 0.5) / education.length) * 100;

          const isActive = progress >= itemProgress;

          return (
            <div
              className={`education-item ${item.side} ${
                isActive ? "active" : ""
              }`}
              key={item.degree}
            >
              {/* Card */}

              <div className="education-card">
                <span className="education-year">{item.year}</span>

                <h3>{item.degree}</h3>

                <h4>{item.institution}</h4>

                <p>{item.description}</p>

                {/* Score */}

                {item.score && (
                  <div className="education-score">
                    <span>{item.scoreLabel}</span>

                    <strong>{item.score}</strong>
                  </div>
                )}

                {/* Certificates */}

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
                <span />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
