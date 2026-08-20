import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="section-heading">
        <p>Get to know me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-container">
        {/* About Content */}

        <div className="about-content">
          <h3>A little bit about me</h3>

          <p>I'm Arya Vairagare, a Java Full Stack Developer with a strong
            interest in building responsive, user-friendly and scalable web
            applications.</p>

          <p>I enjoy working across both frontend and backend technologies and
            continuously improving my development skills by building real-world
            projects.</p>

          <div className="about-details">
            <div className="about-detail">
              <h4>Education</h4>
              <p>Master of Computer Applications (MCA)<br />Rashtrasant Tukadoji Maharaj Nagpur University</p>

            </div>

            <div className="about-detail">
              <h4>Current Focus</h4>

              <p>
                Full Stack Development, React.js, Java, Spring Boot and REST
                APIs.
              </p>
            </div>

            <div className="about-detail">
              <h4>Career Objective</h4>

              <p>
                To build reliable and meaningful software while continuously
                growing as a full stack developer.
              </p>
            </div>
          </div>
        </div>

        {/* Profile Image */}

        <div className="about-image">
          <div className="image-placeholder">Your Photo</div>
        </div>
      </div>
    </section>
  );
}

export default About;
