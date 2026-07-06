import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/content';
import Reveal from './Reveal';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 0.1}>
              <article className="project-card">
                <div className="project-header">
                  <Folder size={40} className="project-folder" aria-hidden="true" />
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      title="View Source"
                    >
                      <FaGithub size={20} aria-hidden="true" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        title="View Live"
                      >
                        <ExternalLink size={20} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>

                <p className="project-description">{project.description}</p>

                <ul className="project-tech-list">
                  {project.tech.map((tech) => (
                    <li key={tech} className="project-tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
