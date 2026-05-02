import './styles/TechStack.css'

const imageTechs = [
  { name: 'React', image: '/images/react2.webp' },
  { name: 'Next.js', image: '/images/next2.webp' },
  { name: 'Node.js', image: '/images/node2.webp' },
  { name: 'Express', image: '/images/express.webp' },
  { name: 'MongoDB', image: '/images/mongo.webp' },
  { name: 'MySQL', image: '/images/mysql.webp' },
  { name: 'TypeScript', image: '/images/typescript.webp' },
  { name: 'JavaScript', image: '/images/javascript.webp' },
]

const svgTechs = [
  { name: 'Python', image: '/images/python.svg' },
  { name: 'Django', image: '/images/django.svg' },
  { name: 'TensorFlow', image: '/images/tensorflow.svg' },
  { name: 'PyTorch', image: '/images/pytorch.svg' },
  { name: 'Git', image: '/images/git.svg' },
  { name: 'PostgreSQL', image: '/images/postgresql.svg' },
]

const allTechs = [...imageTechs, ...svgTechs]

const TechStack = () => {
  return (
    <section className="techstack-section" id="techstack">
      <div className="techstack-container section-container">
        <h2 className="techstack-heading">Tech Stack</h2>

        <div className="techstack-grid">
          {allTechs.map((tech) => (
            <div className="techstack-item" key={tech.name}>
              <img
                src={tech.image}
                alt={tech.name}
                className="techstack-icon"
              />
              <span className="techstack-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
