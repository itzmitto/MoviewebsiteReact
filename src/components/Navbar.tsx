import '../styling/navbar.css'
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">🎥 CineVault</a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/movies" className="nav-link">Films</a></li>
          <li><a href="/favorites" className="nav-link">Favorieten</a></li>
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar