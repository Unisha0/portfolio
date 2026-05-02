import './styles/About.css'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container section-container">
        <div className="about-left">
          <h2 className="about-heading">About Me</h2>
          <p className="about-para">
            Hi, I'm Unisha Chaulagain, a Computer Engineering student passionate about
            building AI-powered applications and scalable web platforms. I work with Python,
            Django, React, and modern machine learning technologies to create practical,
            production-ready solutions.
          </p>
          <p className="about-para">
            My focus lies at the intersection of artificial intelligence and full-stack
            development — from training deep learning models to deploying end-to-end web
            applications. I enjoy transforming complex problems into clean, functional software.
          </p>
        </div>

        <div className="about-right">
          <div className="about-grid">
            <div className="about-info-item">
              <span className="about-info-label">Location</span>
              <span className="about-info-value">Kathmandu, Nepal</span>
            </div>
            <div className="about-info-item">
              <span className="about-info-label">Education</span>
              <span className="about-info-value">Computer Engineering</span>
            </div>
            <div className="about-info-item">
              <span className="about-info-label">Focus</span>
              <span className="about-info-value">AI/ML &amp; Full-Stack</span>
            </div>
            <div className="about-info-item">
              <span className="about-info-label">Status</span>
              <span className="about-info-value about-status">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
