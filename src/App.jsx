import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Home />
      </main>

      <footer>
        <small>© {new Date().getFullYear()} WorkZEN </small>
      </footer>
    </div>
  )
}
