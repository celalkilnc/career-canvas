import "./EducationStyle.css"
// import React from 'react'

function Education() {
  const educations = [
    {
      school: "X Üniversitesi",
      degree: "Bilgisayar Mühendisliği",
      period: "2018 - 2022",
      gpa: "3.50/4.00",
      description: "Veri yapıları, algoritma analizi, yazılım mühendisliği ve web teknolojileri üzerine kapsamlı eğitim.",
      achievements: [
        "Mezuniyet Projesi: AI destekli öğrenme platformu",
        "Bölüm ikinciliği",
        "4 dönem onur öğrencisi"
      ]
    },
    {
      school: "Y Lisesi",
      degree: "Fen Bilimleri",
      period: "2014 - 2018",
      gpa: "95/100",
      description: "Matematik ve fen bilimleri ağırlıklı eğitim.",
      achievements: [
        "Okul birinciliği",
        "Bilim olimpiyatları katılımı"
      ]
    }
  ];

  return (
    <div id="education" className="education">
      <div className="education-container">
        <h1>Eğitim</h1>
        <div className="education-grid">
          {educations.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="edu-header">
                <h2>{edu.school}</h2>
                <span className="period">{edu.period}</span>
              </div>
              <h3>{edu.degree}</h3>
              <div className="gpa">
                <span>GPA: {edu.gpa}</span>
              </div>
              <p>{edu.description}</p>
              <div className="achievements">
                <h4>Başarılar:</h4>
                <ul>
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education