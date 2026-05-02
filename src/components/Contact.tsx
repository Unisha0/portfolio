import { MdArrowOutward } from 'react-icons/md'
import './styles/Contact.css'

const Contact = () => {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-container section-container">
        <div className="contact-grid">
          <div className="contact-left">
            <h2 className="contact-heading">Let's Connect</h2>
            <p className="contact-desc">
              I'm open to new opportunities, collaborations, and conversations.
              Feel free to reach out via email or connect on social media.
            </p>
            <a
              href="mailto:yunishachaulagain001@gmail.com"
              className="contact-email"
            >
              yunishachaulagain001@gmail.com
            </a>
          </div>

          <div className="contact-right">
            <div className="contact-links">
              <a
                href="https://github.com/Unisha0"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/unisha-chaulagain/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn <MdArrowOutward />
              </a>
              <a
                href="mailto:yunishachaulagain001@gmail.com"
                className="contact-link"
              >
                Email <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <p>© 2025 Yunisha Chaulagain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Contact
