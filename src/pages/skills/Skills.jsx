import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './SkillsStyle.css';
import { 
  FaReact, 
  FaDocker, 
  FaGitAlt,
  FaPython,
} from 'react-icons/fa';
import {
  DiDotnet,
  DiJavascript1,
  DiCssdeck,
  DiPostgresql,
  DiMsqlServer,
} from 'react-icons/di';
import { 
  TbBrandTypescript,
} from 'react-icons/tb';
import { 
  SiPostman,
  SiDotnet,
} from 'react-icons/si';

const iconMap = {
  react: FaReact,
  dotnet: DiDotnet,
  javascript: DiJavascript1,
  csharp: DiCssdeck,
  typescript: TbBrandTypescript,
  git: FaGitAlt,
  python: FaPython,
  docker: FaDocker,
  postman: SiPostman,
  mssql: DiMsqlServer,
  postgresql: DiPostgresql,
  efcore: SiDotnet,
  hangfire: SiDotnet,
  mediatr: SiDotnet,
};

function Skills() {
  const { t } = useTranslation();

  useEffect(() => {
    const cards = document.querySelectorAll('.skill-card');
    
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / card.offsetWidth) * 100;
      const y = ((e.clientY - rect.top) / card.offsetHeight) * 100;
      
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);

      // İkon için de mouse takibi
      const icon = card.querySelector('.skill-icon');
      if (icon) {
        const iconX = x - 50; // Merkezi 0 yapma
        const iconY = y - 50;
        const distance = Math.min(10, Math.sqrt(iconX * iconX + iconY * iconY) / 5);
        const angle = Math.atan2(iconY, iconX);
        
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        
        icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', (e) => {
        const icon = card.querySelector('.skill-icon');
        if (icon) {
          icon.style.transform = 'translate(0, 0)';
        }
      });
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  // Skill türlerini belirleme
  const getSkillType = (skillName) => {
    const tools = ['Git', 'Postman', 'MSSQL', 'PostgreSQL'];
    const libraries = ['EF Core', 'Hangfire', 'MediatR'];
    
    if (tools.includes(skillName)) return 'tool';
    if (libraries.includes(skillName)) return 'library';
    return 'tech';
  };

  const SkillCard = ({ skill }) => {
    const Icon = iconMap[skill.icon];
    const skillType = getSkillType(skill.name);
    
    return (
      <div className={`skill-card ${skillType}-skill`}>
        <div className="skill-card-content">
          {Icon && <Icon className="skill-icon" />}
          <div className="skill-info">
            <h3>{skill.name}</h3>
          </div>
          <div className="skill-glow"></div>
        </div>
      </div>
    );
  };

  return (
    <div id="skills" className="skills">
      <div className="skills-container">
        <h1>{t('skills.title')}</h1>
        <div className="skills-grid">
          {t('skills.items', { returnObjects: true }).map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills; 