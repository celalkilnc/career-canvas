import React from 'react';
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
} from 'react-icons/di';
import { 
  TbBrandTypescript,
} from 'react-icons/tb';
import { SiPostman } from 'react-icons/si';

const iconMap = {
  react: FaReact,
  dotnet: DiDotnet,
  javascript: DiJavascript1,
  csharp: DiCssdeck,
  typescript: TbBrandTypescript,
  git: FaGitAlt,
  python: FaPython,
  docker: FaDocker,
  postman: SiPostman
};

function Skills() {
  const { t } = useTranslation();

  // Skill türlerini belirleme
  const isToolType = (skillName) => {
    const tools = ['Git', 'Postman'];
    return tools.includes(skillName);
  };

  const SkillCard = ({ skill }) => {
    const Icon = iconMap[skill.icon];
    const isToolSkill = isToolType(skill.name);
    
    return (
      <div className={`skill-card ${isToolSkill ? 'tool-skill' : 'tech-skill'}`}>
        {Icon && <Icon className="skill-icon" />}
        <div className="skill-info">
          <h3>{skill.name}</h3>
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