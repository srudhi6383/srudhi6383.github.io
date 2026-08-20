import React from 'react';

const experiences = [
  {
    role: "Associate Software Developer",
    company: "Clodura.AI",
    duration: "Feb 2025 – July 2026",
    logo: "/images/clodura_systems_logo.jpeg",
    details: [
      "Developed key product modules including Pricing (Payment UI), Templates UI, Inbox UI, and Search Filters",
      "Built responsive and scalable UI using Angular, React.js, and Next.js",
      "Integrated REST APIs for dynamic data rendering",
      "Improved UI performance and resolved critical bugs",
      "Created reusable components for scalable frontend architecture"
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="max-width">
        <h2 className="title">Experience</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-badge">
                <span className="badge-pulse"></span>
              </div>
              <div className="timeline-card">
                <div className="card-header">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    className="exp-company-logo"
                  />
                  <div className="company-info">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                    <p className="exp-duration">{exp.duration}</p>
                  </div>
                </div>
                <ul className="details-list">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
