import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
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

  return (
    <section className="home1" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Srudhi</div>
          <div className="text-3">
            And I'm a <span ref={el} className="typing"></span>
          </div>
          <a href="#contact">Contact me</a>
        </div>
        <div className="home-img-wrapper">
          <div className="gradient-border-glow"></div>
          <div className="home-img">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif" alt="Developer GIF" />
          </div>
          <div className="floating-badge badge-react">
            <span className="iconify" data-icon="logos:react" data-inline="false" data-width="20px" data-height="20px"></span>
            <span>React.js</span>
          </div>
          <div className="floating-badge badge-next">
            <span className="iconify" data-icon="logos:nextjs-icon" data-inline="false" data-width="20px" data-height="20px"></span>
            <span>Next.js</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
