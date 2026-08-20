import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const About = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Associate Software Developer", "Frontend Developer", "Full-Stack Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open("https://drive.google.com/file/d/14icvpNs2aF9CFwdMY81XMzwRrET7NxD5/view?usp=drive_link", "_blank");
    
    const link = document.createElement('a');
    link.href = '/images/SRUDHI_P_G_Resume.pdf';
    link.download = 'SRUDHI_P_G_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about section" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="home-img">
            <img src="/images/profile.png" alt="Profile" />
          </div>
          <div className="column right">
            <div className="text" id="user-detail-name">
              I'm Srudhi and I'm a <span ref={el} className="typing-2"></span>
            </div>
            <p id="user-detail-intro">
              I am an Associate Software Developer at Clodura.AI with hands-on experience in building scalable and user-friendly web applications.
              I specialize in frontend development using Angular, React.js, and Next.js, and have worked on real-world product features including payment systems, inbox interfaces, and advanced search filters.
              I am passionate about creating clean, efficient, and impactful user experiences.
            </p>
            <div className="btns">
              <a
                href="https://drive.google.com/file/d/14icvpNs2aF9CFwdMY81XMzwRrET7NxD5/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link resume"
                id="resume-button-2"
                onClick={handleResumeClick}
              >
                Download Resume
              </a>
              <a href="https://github.com/srudhi6383" id="about-github" target="_blank" rel="noopener noreferrer">
                <span className="iconify logo" data-icon="skill-icons:github-dark" data-inline="false" data-width="50px" data-height="50px"></span>
              </a>
              <a href="https://www.linkedin.com/in/srudhi-pg" id="about-linkedin" target="_blank" rel="noopener noreferrer">
                <span className="iconify logo" data-icon="bi:linkedin" data-inline="false" data-width="50px" data-height="50px"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
