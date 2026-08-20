import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-card">
          <div className="contact-info">
            <h3 className="contact-subtitle">Reach out to me</h3>
            
            <div className="contact-list">
              <a href="https://github.com/srudhi6383" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon-box">
                  <span className="iconify" data-icon="bi:github" data-width="22px" data-height="22px"></span>
                </div>
                <span className="contact-text">Github</span>
              </a>

              <a href="https://www.linkedin.com/in/srudhi-pg" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon-box">
                  <span className="iconify" data-icon="bi:linkedin" data-width="20px" data-height="20px"></span>
                </div>
                <span className="contact-text">LinkedIn</span>
              </a>

              <a href="tel:+916383647400" className="contact-item">
                <div className="contact-icon-box">
                  <span className="iconify" data-icon="bx:mobile" data-width="22px" data-height="22px"></span>
                </div>
                <span className="contact-text">+91 6383647400</span>
              </a>

              <a href="mailto:srudhi24@gmail.com" className="contact-item">
                <div className="contact-icon-box">
                  <span className="iconify" data-icon="clarity:email-solid" data-width="22px" data-height="22px"></span>
                </div>
                <span className="contact-text">srudhi24@gmail.com</span>
              </a>
            </div>
          </div>
          
          <div className="contact-illustration-card">
            <img 
              src="https://media.giphy.com/media/3o7qE1YN7aBOFPRw8E/giphy.gif" 
              alt="Contact Illustration" 
              className="contact-illustration-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
