function ProjectCard({ project }) {

    return (
        <article className="project-card">

            {/* Project Video */}

            <div className="project-video-container">

                <video
                    className="project-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src={project.video}
                        type="video/mp4"
                    />
                </video>

            </div>


            {/* Project Content */}

            <div className="project-content">

                <h3>
                    {project.title}
                </h3>


                <p>
                    {project.description}
                </p>


                {/* Technologies */}

                <div className="project-technologies">

                    {project.technologies.map((technology) => (

                        <span key={technology}>
                            {technology}
                        </span>

                    ))}

                </div>


                {/* Links */}

                <div className="project-links">

                    {project.liveLink !== "#" && (

                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo ↗
                        </a>

                    )}


                    {project.githubLink !== "#" && (

                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub ↗
                        </a>

                    )}

                </div>

            </div>

        </article>
    );
}

export default ProjectCard;