import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt } from 'react-icons/fa';
import './ExperienceStyle.css';

function Experience() {
  const { t } = useTranslation();

  useEffect(() => {
    const cards = document.querySelectorAll('.experience-card');
    
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

  return (
    <div id="experience" className="experience">
      <div className="experience-container">
        <h1>{t('experience.title')}</h1>
        <div className="experience-grid">
          {t('experience.jobs', { returnObjects: true }).map((job, index) => (
            <div 
              key={index} 
              className="experience-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="experience-card-content">
                {job.date.includes(t('experience.current')) && (
                  <div className="current-job">{t('experience.current')}</div>
                )}
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
              <div className="experience-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience; 