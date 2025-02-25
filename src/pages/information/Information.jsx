import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './InformationStyle.css';
import { FaEnvelope, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import Background3D from '../../components/Background3D/Background3D';

function Information() {
  const { t } = useTranslation();

  useEffect(() => {
    const cards = document.querySelectorAll('.info-card');
    
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

  const infoCards = [
    {
      icon: <FaEnvelope />,
      title: t('info.email'),
      content: t('info.emailValue')
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t('info.location'),
      content: t('info.locationValue')
    },
    {
      icon: <FaGraduationCap />,
      title: t('info.education'),
      content: t('info.educationStatus')
    }
  ];

  return (
    <div id="information" className="information">
      <Background3D />
      <div className="information-container">
        <div className="info-header">
          <div className="name-section">
            <h1>Celal Kılınç</h1>
            <p className="title-text">{t('info.description')}</p>
          </div>
          <div className="info-description">
            <p>{t('info.aboutMe')}</p>
          </div>
        </div>
        
        <div className="info-grid">
          {infoCards.map((card, index) => (
            <div key={index} className="info-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="info-card-header">
                <span className="info-icon">{card.icon}</span>
                <h2>{card.title}</h2>
              </div>
              <div className="info-card-content">
                <p>{card.content}</p>
              </div>
              <div className="card-background">
                <div className="card-blur"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Information;
