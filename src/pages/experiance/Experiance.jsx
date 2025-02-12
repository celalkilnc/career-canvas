import "./Experiance.css";
// import React from "react";

function Experience() {
  const experiences = [
    {
      company: "XYZ Teknoloji",
      position: "Senior Software Developer",
      period: "2022 - Devam Ediyor",
      description: "React ve Node.js kullanarak web uygulamaları geliştirme, takım liderliği ve mentorluk.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      company: "ABC Yazılım",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      description: "E-ticaret platformları geliştirme, mikroservis mimarisi ile çalışma.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
    // Diğer deneyimlerinizi ekleyebilirsiniz
  ];

  return (
    <div id="experience" className="experience">
      <div className="experience-container">
        <h1>Deneyimler</h1>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.company}</h3>
                <h4>{exp.position}</h4>
                <span className="period">{exp.period}</span>
                <p>{exp.description}</p>
                <div className="technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
