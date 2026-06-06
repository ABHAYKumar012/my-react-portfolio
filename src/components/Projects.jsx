import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Flipkart Product Analyzer",
      tech: "Python, BeautifulSoup",
      desc: "Scrapes products and exports details to Excel."
    },
    {
      title: "React Dashboard",
      tech: "React, TypeScript",
      desc: "Authentication and analytics dashboard."
    },
    {
      title: "Pathfinding Visualizer",
      tech: "TypeScript",
      desc: "Visual simulation of algorithms."
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <span>{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;