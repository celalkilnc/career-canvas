import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 25px;
  right: 20px;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 4px;
  backdrop-filter: blur(12px);
  height: fit-content;
  box-shadow: 
    0 4px 20px var(--shadow-primary),
    inset 0 0 0 1px var(--border-primary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 
      0 4px 20px var(--shadow-primary),
      inset 0 0 0 1px var(--border-hover),
      0 0 15px var(--accent-glow);
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    padding: 2px;
    border-radius: 8px;
    background: rgba(17, 17, 17, 0.3);
    backdrop-filter: blur(8px);
    box-shadow: 
      0 2px 10px rgba(0, 0, 0, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2px;
  background: var(--bg-primary);
  border-radius: 10px;
  padding: 3px;

  @media (max-width: 768px) {
    gap: 1px;
    padding: 2px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.05);
  }
`;

const Button = styled.button`
  padding: 5px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  min-width: 36px;
  text-align: center;
  letter-spacing: 0.5px;
  overflow: hidden;
  user-select: none;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      var(--accent-glow),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 0.5;
  }

  &.active {
    background: var(--accent-primary);
    color: var(--text-primary);
    box-shadow: 
      inset 0 0 8px var(--accent-glow),
      0 0 12px var(--accent-glow);
    text-shadow: 0 0 4px var(--text-glow);
  }

  &:hover:not(.active) {
    color: var(--text-hover);
    background: var(--accent-hover);
    box-shadow: inset 0 0 6px var(--accent-glow);
  }

  @media (max-width: 768px) {
    padding: 3px 8px;
    font-size: 0.7rem;
    min-width: 28px;
    border-radius: 4px;
    font-weight: 600;

    &.active {
      background: var(--accent-primary);
      box-shadow: 
        inset 0 0 4px var(--accent-glow),
        0 0 6px var(--accent-glow);
    }

    &:hover:not(.active) {
      box-shadow: none;
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const buttons = document.querySelectorAll('.switchbar-btn');
      buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / button.offsetWidth) * 100;
        const y = ((e.clientY - rect.top) / button.offsetHeight) * 100;
        button.style.setProperty('--mouse-x', `${x}%`);
        button.style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Container className="switchbar">
      <ButtonGroup>
        <Button
          className={`switchbar-btn ${i18n.language === 'tr' ? 'active' : ''}`}
          onClick={() => changeLanguage('tr')}
        >
          TR
        </Button>
        <Button
          className={`switchbar-btn ${i18n.language === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
        >
          EN
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default LanguageSwitch; 