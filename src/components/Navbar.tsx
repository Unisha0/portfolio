import { useState } from 'react'
import './styles/Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner section-container">
        <a href="#hero" className="navbar-logo">UC</a>

        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && (
        <div className="navbar-dropdown">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
