import skills from "../data/skills";
import SkillCard from "../components/SkillCard";

import "./Skills.css";

function Skills() {

    const categories = [
        "Frontend",
        "Backend",
        "Database",
        "Tools"
    ];

    return (
        <section id="skills" className="skills">

            <div className="section-heading">

                <p>What I work with</p>

                <h2>Skills</h2>

            </div>


            <div className="skills-container">

                {categories.map((category) => {

                    const categorySkills = skills.filter(
                        (skill) => skill.category === category
                    );

                    return (

                        <div
                            className="skill-category"
                            key={category}
                        >

                            <h3>
                                {category}
                            </h3>


                            <div className="skills-grid">

                                {categorySkills.map((skill) => (

                                    <SkillCard
                                        key={skill.name}
                                        skill={skill}
                                    />

                                ))}

                            </div>

                        </div>

                    );

                })}

            </div>

        </section>
    );
}

export default Skills;