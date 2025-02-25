import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt } from 'react-icons/fa';
import './EducationStyle.css';

function Education() {
  const { t } = useTranslation();

  useEffect(() => {
    const cards = document.querySelectorAll('.education-card');
    
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

  const educations = [
    {
      schoolName: t('education.university2.name', "Anadolu University"),
      degree: t('education.university2.department', "Management Information Systems"),
      date: t('education.university2.date', "2024 - Present")
    },
    {
      schoolName: t('education.university.name', "Pamukkale University"),
      degree: t('education.university.department', "Computer Programming"),
      date: t('education.university.date', "2021 - 2023")
    }
  ];

  return (
    <div id="education" className="education">
      <div className="education-container">
        <h1>{t('education.title', 'Education')}</h1>
        <div className="education-grid">
          {educations.map((edu, index) => (
            <div 
              key={index} 
              className="education-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="education-card-content">
                <h2 className="school-name">{edu.schoolName}</h2>
                <h3 className="degree">{edu.degree}</h3>
                <div className="education-date">
                  <FaCalendarAlt className="date-icon" />
                  <span>{edu.date}</span>
                </div>
              </div>
              <div className="education-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
