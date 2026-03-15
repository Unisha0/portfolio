import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          {/* Career Dot / Timeline */}
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Internship / Projects */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / ML Projects & Developer</h4>
                <h5>Self-Learning & GitHub Portfolio</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built multiple AI/ML projects including CNN image classifiers,
              GAN/DCGAN image generation, and NLP-based chatbots. Learned
              practical deployment using Streamlit and integrated with GitHub
              repositories for portfolio.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Web Developer</h4>
                <h5>College Projects & Freelance</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed web applications with Python & Django, React.js front-end,
              and PostgreSQL backend. Worked on projects like Tour Booking System
              and Smart Health Platform with real-time features and responsive UI.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / Full-Stack Developer</h4>
                <h5>Personal Projects & Portfolio</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently building advanced AI applications and full-stack platforms.
              Focused on creating intelligent solutions, improving portfolio projects,
              and enhancing skills in Python, Django, React, ML/DL, and NLP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;