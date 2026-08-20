import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="home-greeting">Hi, I'm</p>

        <h1>Arya Vairagare</h1>
        
        <h2>Java Full Stack Developer</h2>

        <p className="home-intro">
          I build responsive and user-friendly web applications using modern
          frontend and backend technologies.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
