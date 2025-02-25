import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  background: var(--bg-primary);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 4px;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(110, 86, 207, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: var(--accent-primary);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.2),
      0 0 0 1px var(--accent-primary),
      0 0 15px rgba(110, 86, 207, 0.3);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    padding: 3px;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  min-width: 45px;
  text-align: center;
  letter-spacing: 0.5px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(110, 86, 207, 0.15),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  &.active {
    background: rgba(110, 86, 207, 0.1);
    color: var(--text-primary);
    border-color: var(--accent-primary);
    box-shadow: 
      0 0 20px rgba(110, 86, 207, 0.2),
      inset 0 0 10px rgba(110, 86, 207, 0.1);
    text-shadow: 0 0 8px rgba(110, 86, 207, 0.3);
  }

  &:hover:not(.active) {
    color: var(--text-primary);
    border-color: var(--accent-primary);
    background: rgba(110, 86, 207, 0.1);
    box-shadow: 
      0 4px 15px rgba(0, 0, 0, 0.1),
      inset 0 0 5px rgba(110, 86, 207, 0.1);
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.85rem;
    min-width: 40px;
  }
`;

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <Button
        className={i18n.language === 'tr' ? 'active' : ''}
        onClick={() => changeLanguage('tr')}
      >
        TR
      </Button>
      <Button
        className={i18n.language === 'en' ? 'active' : ''}
        onClick={() => changeLanguage('en')}
      >
        EN
      </Button>
    </Container>
  );
};

export default LanguageSwitch; 