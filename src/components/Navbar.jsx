import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-brand">WorkZEN<span className="brand-accent">Care</span></Link>
        <nav className="nav-links">
          <Link to="/">Αρχική</Link>
          <Link to="/educational-material">Επιμορφωτικό Υλικό</Link>
          <Link to="/story">Ιστορία Ζωής</Link>
          <Link to="/faq">Συχνές Ερωτήσεις</Link>
          <Link to="/boardgame">Επιτραπέζιο</Link>
          <Link to="/about">Ποιοί είμαστε</Link>
        </nav>
      </div>
    </header>
  )
}
