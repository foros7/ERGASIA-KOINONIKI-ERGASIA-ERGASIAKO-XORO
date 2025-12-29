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
          <a href="#services">Υπηρεσίες</a>
          <a href="#contact">Επικοινωνία</a>
        </nav>
      </div>
    </header>
  )
}
