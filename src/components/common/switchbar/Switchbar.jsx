import React, { useState, useEffect } from "react";
import "./SwitchbarStyle.css";
import { useTranslation } from 'react-i18next';
import '../../../styles/switchbar.css';

function Switchbar() {
  const { t } = useTranslation();
  const [activePage, setActivePage] = useState('information');

  useEffect(() => {
    let timeoutId;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (timeoutId) clearTimeout(timeoutId);
          
          timeoutId = setTimeout(() => {
            // Görünürlük eşiğini düşürdük
            if (entry.intersectionRatio >= 0.2) {
              console.log('Active section:', entry.target.id); // Debug için
              setActivePage(entry.target.id);
            }
          }, 50); // Gecikmeyi azalttık
        }
      });
    }, {
      // Daha sık kontrol için threshold değerlerini artırdık
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      // Gözlem alanını genişlettik
      rootMargin: '-10% 0px -10% 0px'
    });

    const sections = ['information', 'experiance', 'education', 'projects'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
        console.log('Observing:', sectionId); // Debug için
      }
    });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActivePage(section);
    }
  };

  return (
    <nav className="switchbar">
      <ul className="switchBar">
        {[
          { id: 'information', label: t('sections.information') },
          { id: 'experiance', label: t('sections.experience') },
          { id: 'education', label: t('sections.education') },
          { id: 'projects', label: t('sections.projects') }
        ].map((section) => (
          <li 
            key={section.id} 
            className={`switch-item ${activePage === section.id ? 'active' : ''}`}
            onClick={() => handleClick(section.id)}
          >
            <div className={`switch-dot ${activePage === section.id ? 'active' : ''}`} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Switchbar;
