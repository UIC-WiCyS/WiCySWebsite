// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import Navbar from './components/NavBar.jsx'
import Home from './pages/Home Page/Home.jsx'
import Events from './pages/Events Page/Events.jsx'
import About from './pages/About Page/About.jsx'
import Board26_27 from './pages/Board Page/Board26-27.jsx' //board for 2026-2027
import Board25_26 from './pages/Board Page/Board25-26.jsx' //board for 2025-2026
import Announcements from './pages/Announcements Page/Announcements.jsx'
import Join from './pages/Join Page/Join.jsx'
import Footer from "./components/Footer.jsx";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> 

      <div className="" aria-hidden="true" />

      <div className="app-content">
        <Navbar />
  
        <div className="nav-spacer" aria-hidden="true"></div>
        
        <Routes> /* routes you to correct page */
          {/* LANDING ROUTE */}
          <Route path="/" element={<Home />}/>
          
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />

          <Route path="/board/2026_2027" element={<Board26_27 />} /> 
          <Route path="/board/2025_2026" element={<Board25_26 />} />   
          
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<div style={{padding:16}}>Not Found</div>} />
          
        </Routes>

        <Footer />
        
      </div>
    </HashRouter>
  </StrictMode>
)

