import InformationCard from "../../components/InfoCard/InformationCard";
import "./InformationStyle.css";
// import React from "react";

function Information() {
  const personalInfo = [
    { key: "Ad Soyad", value: "Celal KILINÇ" },
    { key: "Ünvan", value: "Software Developer" },
    { key: "E-posta", value: "your.email@example.com" },
    { key: "Konum", value: "İstanbul, Türkiye" },
  ];

  return (
    <div className="information" id="information">
      <div className="info-container">
        <div className="profile-section">
          <div className="profile-image">
            {/* Profil fotoğrafınızı ekleyin */}
          </div>
          <h1>Celal KILINÇ</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="info-cards">
          {personalInfo.map((info, index) => (
            <InformationCard key={index} data={info} />
          ))}
        </div>
        <div className="about-me">
          <p>
            Yazılım geliştirme konusunda tutkulu ve sürekli öğrenmeye açık bir geliştiriciyim. 
            Modern web teknolojileri konusunda deneyimli, problem çözme becerileri güçlü...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
