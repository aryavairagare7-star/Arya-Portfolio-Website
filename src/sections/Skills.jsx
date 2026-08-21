import skills from "../data/skills";
import "./Skills.css";

function getSkillLevel(percentage) {
  if (percentage <= 50) {
    return "beginner";
  }

  if (percentage <= 80) {
    return "intermediate";
  }

  return "advanced";
}

function getSkillLevelText(percentage) {
  if (percentage <= 50) {
    return "Beginner";
  }

  if (percentage <= 80) {
    return "Intermediate";
  }

  return "Advanced";
}

function Skills() {
  const categories = ["Frontend", "Backend", "Database", "Tools"];

  return (
    <section id="skills" className="skills">
      <div className="section-heading">
        <p>What I work with</p>

        <h2>Skills</h2>
      </div>

      <div className="skills-container">
        {categories.map((category) => {
          const categorySkills = skills.filter(
            (skill) => skill.category === category,
          );

          // Don't display empty categories
          if (categorySkills.length === 0) {
            return null;
          }

          return (
            <div className="skill-category" key={category}>
              <div className="skill-category-heading">
                <h3>{category}</h3>

                <span>{categorySkills.length} skills</span>
              </div>

              <div className="skills-grid">
                {categorySkills.map((skill) => {
                  const level = getSkillLevel(skill.percentage);

                  const levelText = getSkillLevelText(skill.percentage);

                  return (
                    <div className={`skill-card ${level}`} key={skill.name}>
                      <div className="skill-card-top">
                        <div className="skill-icon"><skill.icon /></div>

                        <div className="skill-level">{levelText}</div>
                      </div>

                      <div className="skill-info">
                        <h4>{skill.name}</h4>

                        <span>{skill.percentage}%</span>
                      </div>

                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            "--skill-width": `${skill.percentage}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Skill level legend */}

      <div className="skill-legend">
        <div className="legend-item beginner">
          <span></span>
          Beginner
        </div>

        <div className="legend-item intermediate">
          <span></span>
          Intermediate
        </div>

        <div className="legend-item advanced">
          <span></span>
          Advanced
        </div>
      </div>
    </section>
  );
}

export default Skills;
