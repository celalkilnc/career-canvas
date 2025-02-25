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

  return (
    <div id="experiance" className="experiance">
      <div className="experiance-container">
        <h1>{t('experiance.title')}</h1>
        <div className="experiance-grid">
          {t('experiance.jobs', { returnObjects: true }).map((job, index) => (
            <div 
              key={index} 
              className="experiance-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="experiance-card-content">
                {job.date.includes(t('experiance.current')) && (
                  <div className="current-job">{t('experiance.current')}</div>
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
              <div className="experiance-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance; 