import React from 'react';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "vscode-icons:file-type-html" },
      { name: "CSS", icon: "vscode-icons:file-type-css" },
      { name: "JavaScript", icon: "vscode-icons:file-type-js-official" },
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "Redux", icon: "logos:redux" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "logos:nodejs" },
      { name: "Express", icon: "skill-icons:expressjs-dark" },
      { name: "MongoDB", icon: "devicon:mongodb" }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "npm", icon: "logos:npm-icon" },
      { name: "VS Code", icon: "vscode-icons:file-type-vscode" },
      { name: "Postman", icon: "devicon:postman" }
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills1" id="skills">
      <div className="max-width">
        <h2 className="title">Technical skills</h2>
        
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skills-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-content">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skills-card">
                  <a href="#skills" className="skills-card-img">
                    <span
                      className="iconify logo"
                      data-icon={skill.icon}
                      data-inline="false"
                      data-width="100px"
                      data-height="100px"
                    ></span>
                  </a>
                  <p className="skills-card-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
