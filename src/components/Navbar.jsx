import React from 'react'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-brand">WorkZEN<span className="brand-accent">Care</span></div>
        <nav className="nav-links">
          <a href="#home">Αρχική</a>
          <a href="#about">Σχετικά</a>
          <a href="#services">Υπηρεσίες</a>
          <a href="#contact">Επικοινωνία</a>
        </nav>
      </div>
    </header>
  )
}
