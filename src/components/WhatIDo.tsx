import './styles/WhatIDo.css'

const WhatIDo = () => {
  return (
    <section className="whatido-section" id="whatido">
      <div className="whatido-container section-container">
        <h2 className="whatido-heading">What I Do</h2>

        <div className="whatido-grid">
          {/* AI / ML Card */}
          <div className="whatido-card">
            <div className="whatido-icon">🤖</div>
            <h3 className="whatido-card-title">AI &amp; Machine Learning</h3>
            <h4 className="whatido-card-subtitle">Building Intelligent Applications</h4>
            <p className="whatido-card-desc">
              Developing practical AI and machine learning applications such as classification,
              NLP, sentiment analysis, and generative models, with interactive and deployable solutions.
            </p>
            <p className="whatido-tags-label">Skillset &amp; Tools</p>
            <div className="whatido-tags">
              <span className="whatido-tag">Python</span>
              <span className="whatido-tag">TensorFlow</span>
              <span className="whatido-tag">PyTorch</span>
              <span className="whatido-tag">Computer Vision</span>
              <span className="whatido-tag">Generative Models</span>
              <span className="whatido-tag">NLP / Transformers</span>
              <span className="whatido-tag">CNN / RNN</span>
              <span className="whatido-tag">Streamlit</span>
            </div>
          </div>

          {/* Full-Stack Card */}
          <div className="whatido-card">
            <div className="whatido-icon">💻</div>
            <h3 className="whatido-card-title">Full-Stack Development</h3>
            <h4 className="whatido-card-subtitle">Web Platforms &amp; Applications</h4>
            <p className="whatido-card-desc">
              Building scalable web applications using Django, React, and modern JavaScript,
              turning ideas into fully functional, interactive platforms.
            </p>
            <p className="whatido-tags-label">Skillset &amp; Tools</p>
            <div className="whatido-tags">
              <span className="whatido-tag">Django</span>
              <span className="whatido-tag">Python</span>
              <span className="whatido-tag">React</span>
              <span className="whatido-tag">JavaScript</span>
              <span className="whatido-tag">HTML &amp; CSS</span>
              <span className="whatido-tag">Git &amp; GitHub</span>
              <span className="whatido-tag">REST APIs</span>
              <span className="whatido-tag">Database Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
