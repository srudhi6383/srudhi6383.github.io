import React from 'react';

const projectsData = [
  {
    title: "Bewakoof",
    description: "Bewakoof.com is an Indian e-commerce platform known for its trendy and quirky fashion, offering a wide range of casual clothing, accessories, and merchandise. With a playful and youthful style, it caters to individuals looking for unique and fun apparel choices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/bewakoof.png",
    github: "https://github.com/1ashutoshverma/bewakoof-clone",
    live: "https://bewakoof-team.netlify.app/"
  },
  {
    title: "PharmEasy",
    description: "PharmEasy is an Indian online pharmacy and healthcare platform that connects customers with local pharmacies to fulfill their medical needs.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/PharmEasy.png",
    github: "https://github.com/srudhi6383/pharmeasy-clone",
    live: "https://magnificent-pie-033e94.netlify.app/"
  },
  {
    title: "Mine wine",
    description: "The WineShop website is an online platform for wine enthusiasts to browse, purchase, and explore a wide variety of wine products. It offers user registration and login, a product catalog, product details, a shopping cart, and a checkout process.",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase", "Razorpay"],
    image: "/images/Mine_Wine.png",
    github: "https://github.com/srudhi6383/Online-Wine-shop",
    live: "https://glowing-marigold-0b2a2a.netlify.app/"
  },
  {
    title: "Gem Garden",
    description: "JExplore the exquisite world of Gem Garden, an online jewelry website where you can effortlessly purchase the jewelry of your choice from the comfort of your home. Visit now.",
    techStack: ["JavaScript", "React", "Redux"],
    image: "/images/gemGarden.png",
    github: "https://github.com/Saurav9284/Unite-6-Project-Gem-Garden",
    live: "https://gemgarden.netlify.app/"
  },
  {
    title: "LeadFlow AI CRM",
    description: "Commercial enterprise B2B SaaS platform for sales pipeline, account intelligence, and revenue velocity.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "/images/AI CRM.png",
    github: "https://github.com/srudhi6383/leadflow-crm-",
    live: "https://leadflow-crm-ecru.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="max-width">
        <h2 className="title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-list">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link-btn"
                    title="GitHub Repository"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="iconify" data-icon="bi:github" data-width="20px" data-height="20px"></span>
                  </a>
                  <a
                    href={project.live}
                    className="project-link-btn"
                    title="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="iconify" data-icon="ph:link-fill" data-width="20px" data-height="20px"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
