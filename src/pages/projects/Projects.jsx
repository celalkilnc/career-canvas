import "./ProjectsStyle.css"
import React from 'react'
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <div id="projects" className="projects">
      <div className="projects-container">
        <h1>{t('projects.title')}</h1>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="/project-images/career-canvas.jpg" alt="Career Canvas" />
              <div className="project-links">
                <a href="https://github.com/username/career-canvas" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://username.github.io/career-canvas" target="_blank" rel="noopener noreferrer">
                  {t('projects.viewProject')}
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{t('projects.items.0.title')}</h3>
              <p>{t('projects.items.0.description')}</p>
              <div className="project-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">CSS3</span>
                <span className="tech-badge">Vite</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/project-images/e-commerce.jpg" alt="E-Commerce Platform" />
              <div className="project-links">
                <a href="https://github.com/username/e-commerce" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://e-commerce-demo.com" target="_blank" rel="noopener noreferrer">
                  {t('projects.viewProject')}
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{t('projects.items.1.title')}</h3>
              <p>{t('projects.items.1.description')}</p>
              <div className="project-tech">
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Express</span>
                <span className="tech-badge">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects