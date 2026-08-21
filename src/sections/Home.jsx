import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="home-greeting">Hello, I'm</p>

        <h1>
          Arya <span>Vairagare</span>
        </h1>

        <h2>Java Full Stack Developer</h2>

        <p className="home-intro">
          I build responsive and user-focused web applications using modern
          frontend and backend technologies.
        </p>

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
