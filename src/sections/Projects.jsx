import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-heading">
        <p>What I've built</p>

        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
