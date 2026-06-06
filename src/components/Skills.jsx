import "../styles/Skills.css";

function Skills() {
  const skills = [
    "Html",
    "css",
    "React",
    "JavaScript",
    "Python",
    "SQL",
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;