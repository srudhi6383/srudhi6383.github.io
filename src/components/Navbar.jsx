import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open("https://drive.google.com/file/d/1JJwl5zb6lb_yDzpki8zbIyHu2QWpXpYI/view?usp=drive_link", "_blank");
    
    const link = document.createElement('a');
    link.href = '/images/SRUDHI_P_G_Resume.pdf';
    link.download = 'SRUDHI_P_G_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`} id="nav-menu">
      <div className="max-width">
        <div className="logo">
          <a href="#home">
            <img src="/images/logo.png" alt="Srudhi Logo" />
          </a>
        </div>
        <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" className="nav-link home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="nav-link experience" onClick={handleLinkClick}>
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link skills" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1JJwl5zb6lb_yDzpki8zbIyHu2QWpXpYI/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link resume"
              id="resume-button-1"
              onClick={handleResumeClick}
            >
              <button id="cv-btn">Download Resume</button>
            </a>
          </li>
        </ul>
        <div className="menu-btn" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
