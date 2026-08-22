import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="section-heading">
        <p>Get to know me</p>

        <h2>About Me</h2>
      </div>

      <div className="about-container">
        {/* Profile Image */}

        <div className="about-image">
          <div className="about-image-wrapper">
            <img src="/images/arya-profile.jpg" alt="Arya Vairagare" />

            <div className="about-image-decoration"></div>
          </div>
        </div>

        {/* About Content */}

        <div className="about-content">
          <span className="about-label">A little bit about me</span>

          <h3>
            Building things,
            <span> learning constantly.</span>
          </h3>

          <p>
            I'm Arya Vairagare, a Java Full Stack Developer who enjoys turning
            ideas into practical and user-friendly web applications. My interest
            in software development grew through my academic journey, where I
            built a foundation in computer science and gradually became more
            interested in creating things rather than simply studying how they
            work.
          </p>

          <p>
            I particularly enjoy working on the intersection of frontend and
            backend development — creating interfaces that are clean and
            responsive while also understanding the logic and APIs behind them.
            I'm currently focused on growing as a full-stack developer and
            looking for opportunities where I can contribute, learn from
            experienced developers, and build software that is genuinely useful.
          </p>

          {/* Quick Information */}

          <div className="about-details">
            <div className="about-detail">
              <span className="about-detail-label">Education</span>

              <h4>Master of Computer Applications</h4>

              <p>RTM Nagpur University</p>
            </div>

            <div className="about-detail">
              <span className="about-detail-label">Current Focus</span>

              <h4>Full Stack Development</h4>

              <p>React.js · Java · Spring Boot · REST APIs</p>
            </div>

            <div className="about-detail about-objective">
              <span className="about-detail-label">Career Objective</span>

              <p>
                To build reliable and meaningful software while continuously
                growing as a full stack developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
