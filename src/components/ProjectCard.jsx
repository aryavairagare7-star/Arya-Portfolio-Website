import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.accent}`}>
      {/* Project Video */}

      <div className="project-video-container">
        <video className="project-video" autoPlay muted loop playsInline>
          <source src={project.video} type="video/mp4" />
        </video>

        <div className="project-video-label">Project Preview</div>
      </div>

      {/* Project Content */}

      <div className="project-content">
        <div className="project-title-row">
          <div>
            <span className="project-label">Featured Project</span>

            <h3>{project.title}</h3>
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        {/* Technologies */}

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {/* Links */}

        {(project.liveLink || project.githubLink) && (
          <div className="project-links">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-live-link"
              >
                <FaExternalLinkAlt />

                <span>Live Demo</span>

                <span className="link-arrow">↗</span>
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-link"
              >
                <FaGithub />

                <span>GitHub</span>

                <span className="link-arrow">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
