import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SwitchBarStyle.css';
import { FaSun, FaMoon, FaGlobe, FaCheck } from 'react-icons/fa';

function SwitchBar({ isDark, toggleTheme }) {
  const { i18n } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);

  const languages = [
    { code: 'tr', name: 'Türkçe', native: 'TR' },
    { code: 'en', name: 'English', native: 'EN' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguages(false);
  };

  const toggleLanguageMenu = () => {
    setShowLanguages(!showLanguages);
  };

  return (
    <div className="switch-bar">
      <div className="language-menu-wrapper" style={{ position: 'relative' }}>
        <button 
          className="language-switch"
          onClick={toggleLanguageMenu}
        >
          <FaGlobe className="switch-icon" />
          {i18n.language.toUpperCase()}
        </button>

        <div className={`language-switch-container ${showLanguages ? 'show' : ''}`}>
          <div className="language-options">
            {languages.map((lang, index) => (
              <React.Fragment key={lang.code}>
                <button
                  className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  <span className="option-icon">
                    {i18n.language === lang.code ? <FaCheck /> : <FaGlobe />}
                  </span>
                  <span className="option-text">{lang.name}</span>
                  <span className="option-native">{lang.native}</span>
                </button>
                {index < languages.length - 1 && <div className="language-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div 
        className={`theme-switch ${isDark ? 'dark' : ''}`}
        onClick={toggleTheme}
        role="button"
        tabIndex={0}
        aria-label="Theme toggle"
      >
        <span className="switch-icon">
          {isDark ? <FaMoon /> : <FaSun />}
        </span>
      </div>
    </div>
  );
}

export default SwitchBar; 