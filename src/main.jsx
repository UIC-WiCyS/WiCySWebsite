// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Navbar from './components/NavBar.jsx'
import Home from './pages/Home Page/Home.jsx'
import Events from './pages/Events Page/Events.jsx'
import About from './pages/About Page/About.jsx'
import Board from './pages/Board Page/Board.jsx'
import Announcements from './pages/Announcements Page/Announcements.jsx'
import Join from './pages/Join Page/Join.jsx'
import Aug from "./pages/Events Page/Aug.jsx";
import Sep from "./pages/Events Page/Sep.jsx";
import Oct from "./pages/Events Page/Oct.jsx";
import Nov from "./pages/Events Page/Nov.jsx";
import Jan from "./pages/Events Page/Jan.jsx";
import Feb from "./pages/Events Page/Feb.jsx";
import Mar from "./pages/Events Page/Mar.jsx";
import Apr from "./pages/Events Page/Apr.jsx";
import May from "./pages/Events Page/May.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <div className="grid-overlay" aria-hidden="true" />

    <div className="app-content">
        <Navbar />
  
        <div className="nav-spacer" aria-hidden="true"></div>
        
        <Routes> /* routes you to correct page */
          {/* LANDING ROUTE */}
          <Route path="/" element={<Home />}/>
          
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          {/* <Route path="/events/aug" element={<Aug />} /> */}
          <Route path="/events/sep" element={<Sep />} />
          <Route path="/events/oct" element={<Oct />} />
          <Route path="/events/nov" element={<Nov />} />
          <Route path="/events/jan" element={<Jan />} />
          <Route path="/events/feb" element={<Feb />} />
          <Route path="/events/mar" element={<Mar />} />
          <Route path="/events/apr" element={<Apr />} />
          <Route path="/events/may" element={<May />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<div style={{padding:16}}>Not Found</div>} />
          
        </Routes>
        
    </div>
    </BrowserRouter>
  </StrictMode>
)

