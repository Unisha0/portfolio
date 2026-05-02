import './styles/Work.css'

const projects = [
  {
    title: 'Smart Health',
    category: 'Healthcare Platform',
    tools: 'Routing, Live Tracking, Patient/Ambulance/Hospital Flow',
    image: '/images/smarthealt.png',
    link: 'https://github.com/Unisha0/Smart-Health',
  },
  {
    title: 'Fine-tuned GPT-2 RAG',
    category: 'NLP / LLM',
    tools: 'RAG, Fine-Tuning, Context-Aware Responses',
    image: '/images/fine_tune.png',
    link: 'https://github.com/Unisha0/Fine-tuned-GPT-2-RAG-',
  },
  {
    title: 'AI Training With 10 Projects',
    category: 'AI / Machine Learning',
    tools: 'ML, Deep Learning, NLP, Generative Models',
    image: '/images/rag.png',
    link: 'https://github.com/Unisha0/AI_training_with_10_projects',
  },
  {
    title: 'Civic Connect',
    category: 'Major Project',
    tools: 'Python, Practical Problem Solving, Full Workflow',
    image: '/images/civicconnect.png',
    link: 'https://github.com/Unisha0/project',
  },
  {
    title: 'Tour Booking System',
    category: 'Web Application',
    tools: 'Booking Flow, UI Design, End-to-End Features',
    image: '/images/tour.png',
    link: 'https://github.com/Unisha0/tour-booking-system-',
  },
]

const Work = () => {
  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="work-heading">My Projects</h2>

        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-card" key={index}>
              <div className="work-card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="work-card-body">
                <span className="work-card-category">{project.category}</span>
                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-tools">{project.tools}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-card-link"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
