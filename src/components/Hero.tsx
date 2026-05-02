import './styles/Hero.css'

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container section-container">
        <div className="hero-left">
          <p className="hero-label">Computer Engineering Student</p>
          <h1 className="hero-heading">Hi, I'm Unisha Chaulagain</h1>
          <h2 className="hero-subheading">AI &amp; ML Enthusiast · Full-Stack Developer</h2>
          <p className="hero-bio">
            Passionate about building intelligent applications and scalable web platforms.
            I work with Python, Django, React, and modern ML frameworks to turn ideas
            into functional, production-ready solutions.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-code-block">
            <pre><code>{`{
  "name": "Unisha Chaulagain",
  "role": "AI/ML & Full-Stack Dev",
  "stack": {
    "ai": ["Python", "TensorFlow",
           "PyTorch", "NLP"],
    "web": ["React", "Django",
            "Node.js", "TypeScript"],
    "db": ["MongoDB", "MySQL",
           "PostgreSQL"]
  },
  "status": "Open to opportunities"
}`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
