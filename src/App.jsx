import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import EducationalMaterial from './components/EducationalMaterial'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/educational-material" element={<EducationalMaterial />} />
      </Routes>
    </Router>
  )
}
