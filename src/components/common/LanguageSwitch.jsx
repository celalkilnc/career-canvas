import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitchStyle.css';

function LanguageSwitch() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switch">
      <button
        className={`lang-btn ${i18n.language === 'tr' ? 'active' : ''}`}
        onClick={() => changeLanguage('tr')}
      >
        TR
      </button>
      <button
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitch; 