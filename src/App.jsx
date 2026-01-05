import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import EducationalMaterial from './components/EducationalMaterial'
import Story from './components/Story'
import FAQ from './components/FAQ'
import AboutUs from './components/AboutUs'
import Boardgame from './components/Boardgame'

export default function App() {
  return (
    <Router basename="/ERGASIA-KOINONIKI-ERGASIA-ERGASIAKO-XORO">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/educational-material" element={<EducationalMaterial />} />
        <Route path="/story" element={<Story />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/boardgame" element={<Boardgame />} />
      </Routes>
    </Router>
  )
}
