import InformationCard from "../../components/InfoCard/InformationCard";
import "./InformationStyle.css";
import { useTranslation } from 'react-i18next';
// import React from "react";

function Information() {
  const { t } = useTranslation();

  const personalInfo = [
    { key: t('info.email'), value: "your.email@example.com" },
    { key: t('info.location'), value: t('info.locationValue') },
  ];

  return (
    <div className="information" id="information">
      <div className="info-container">
        <div className="profile-section">
         
          <h1>Celal KILINÇ</h1>
          <h2>{t('info.description')}</h2>
        </div>
        <div className="info-cards">
          {personalInfo.map((info, index) => (
            <InformationCard key={index} data={info} />
          ))}
        </div>
        <div className="about-me">
          <p>{t('info.aboutMe')}</p>
        </div>
      </div>
    </div>
  );
}

export default Information;
