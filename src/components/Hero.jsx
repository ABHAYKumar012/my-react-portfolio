import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Hi, I'm Abhay Kumar 👋</h1>
      <h2>Developer</h2>
      <p>
        Computer Science Graduate passionate about building
        modern web applications.
      </p>

      <div className="hero-buttons">
        <a href="#projects">View Projects</a>
        <a href="/resume.pdf">Resume</a>
      </div>
    </section>
  );
}

export default Hero;