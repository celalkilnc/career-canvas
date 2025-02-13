import "./ProjectsStyle.css"
import React from 'react'

function Projects() {
  const projects = [
    {
      title: "Career Canvas",
      description: "Kişisel portfolio web sitesi. React ve modern web teknolojileri kullanılarak geliştirildi.",
      image: "/project-images/career-canvas.jpg",
      technologies: ["React", "CSS3", "Vite"],
      links: {
        github: "https://github.com/username/career-canvas",
        live: "https://username.github.io/career-canvas"
      }
    },
    {
      title: "E-Ticaret Platformu",
      description: "Tam kapsamlı e-ticaret çözümü. Kullanıcı yönetimi, ürün kataloğu ve ödeme sistemi entegrasyonu.",
      image: "/project-images/e-commerce.jpg",
      technologies: ["Node.js", "MongoDB", "Express", "React"],
      links: {
        github: "https://github.com/username/e-commerce",
        live: "https://e-commerce-demo.com"
      }
    }
  ];

  return (
    <div id="projects" className="projects">
      <div className="projects-container">
        <h1>Projeler</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects