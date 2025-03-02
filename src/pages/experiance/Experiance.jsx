import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt } from 'react-icons/fa';
import './ExperianceStyle.css';

function Experiance() {
  const { t } = useTranslation();

  useEffect(() => {
    const cards = document.querySelectorAll('.experiance-card');
    
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

  const jobs = [
    {
      title: t('experience.jobs.0.title', 'Backend Developer'),
      company: t('experience.jobs.0.company', 'San TSG'),
      date: t('experience.jobs.0.date', 'July 2023 - Present'),
      description: t('experience.jobs.0.description', 'Developing web applications using .Net Core and C#.'),
      technologies: ['C#', 'MSSQL', '.NET Core MVC', '.NET Core Web API', 'AWS']
    },
    {
      title: t('experience.jobs.1.title', 'Intern'),
      company: t('experience.jobs.1.company', 'San TSG'),
      date: t('experience.jobs.1.date', 'February 2023 - June 2023'),
      description: t('experience.jobs.1.description', 'Gained practical experience in web application development, user interface design and implementation, database management'),
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', '.NET Core Web API', 'PostgreSQL']
    }
  ];

  return (
    <div id="experiance" className="experiance">
      <div className="experiance-container">
        <h1>{t('experience.title', 'Experience')}</h1>
        <div className="experiance-grid">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className="experiance-card"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              <div className="experiance-card-content">
                <h2 className="job-title">{job.title}</h2>
                <h3 className="company-name">{job.company}</h3>
                <div className="job-date">
                  <FaCalendarAlt className="date-icon" />
                  <span>{job.date}</span>
                </div>
                <p className="job-description">{job.description}</p>
                <div className="technologies">
                  {job.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="experiance-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance; 