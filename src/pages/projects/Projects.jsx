import "./ProjectsStyle.css"
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const { t } = useTranslation();

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / card.offsetWidth) * 100;
      const y = ((e.clientY - rect.top) / card.offsetHeight) * 100;
      
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
      });
    };
  }, []);

  const ProjectCard = ({ project, index }) => (
    <div 
      className="project-card"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          {(project.links?.github || project.links?.live) && (
            <div className="project-links">
              {project.links?.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.links?.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> {t('projects.viewProject')}
                </a>
              )}
            </div>
          )}
        </div>
      )}
      <div className="project-info">
        <h3>{project.title}</h3>
        <div className="project-info-tags">
          {project.company && (
            <span className="project-company">{project.company}</span>
          )}
          {project.development_type && (
            <span className="project-type">
              <span data-type={project.development_type}>
                {t(`projects.development_types.${project.development_type}`)}
              </span>
            </span>
          )}
        </div>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
      <div className="project-glow"></div>
    </div>
  );

  return (
    <div id="projects" className="projects">
      <div className="projects-container">
        <h1 className="projects-title">{t('projects.title')}</h1>
        
        <section className="projects-section">
          <h2>{t('projects.myProjects')}</h2>
          <div className="projects-grid">
            {t('projects.items.personal', { returnObjects: true }).map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="projects-section">
          <h2>{t('projects.contributedProjects')}</h2>
          <div className="projects-grid">
            {t('projects.items.contributed', { returnObjects: true }).map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;