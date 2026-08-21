function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-info">
        <h3>{skill.name}</h3>

        <span>{skill.percentage}%</span>
      </div>

      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{
            width: `${skill.percentage}%`,
          }}
        />
      </div>
    </div>
  );
}

export default SkillCard;
