import "./ProjectsStyle.css"
import React from 'react'
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-links">
          <a href={project.links?.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.links?.live} target="_blank" rel="noopener noreferrer">
            {t('projects.viewProject')}
          </a>
        </div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        {project.company && (
          <span className="project-company">{project.company}</span>
        )}
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div id="projects" className="projects">
      <div className="projects-container">
        <h1>{t('projects.title')}</h1>
        
        <section className="projects-section">
          <h2>{t('projects.myProjects')}</h2>
          <div className="projects-grid">
            {t('projects.items.personal', { returnObjects: true }).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section className="projects-section">
          <h2>{t('projects.contributedProjects')}</h2>
          <div className="projects-grid">
            {t('projects.items.contributed', { returnObjects: true }).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;