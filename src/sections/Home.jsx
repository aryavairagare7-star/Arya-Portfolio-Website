import { useEffect, useState } from "react";

import "./Home.css";

function Home() {
  const text = "Java Full Stack Developer";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));

        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="home-greeting">Hello, I'm</p>

        {/* Name */}

        <h1>
          Arya <span>Vairagare</span>
        </h1>

        {/* Typing animation */}

        <h2 className="home-profession">{displayText}</h2>

        <p className="home-intro">
          I build responsive and user-focused web applications using modern
          frontend and backend technologies.
        </p>

        {/* Buttons */}

        <div className="home-actions">
          <a href="#projects" className="home-primary-button">
            View My Work
            <span>→</span>
          </a>

          <a href="#contact" className="home-secondary-button">
            Let's Connect
          </a>
        </div>
      </div>

      {/* Decorative background elements */}

      <div className="home-glow home-glow-one"></div>

      <div className="home-glow home-glow-two"></div>
    </section>
  );
}

export default Home;
