import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './navigation'
import About from './pages/about'
import AllWorks from './pages/all_works';
import Research from './pages/research';
import Uiux from './pages/uiux';
import Architecture from './pages/architecture';
import Resume from './pages/resume';
import ProjectDetail from './pages/project_detail';
import HamburgerNav from './pages/hamburgerNav';
import Footer from './footer';
import * as React from 'react'

const App = ({ menuOpen, setMenuOpen }) => {

  // const [menuOpen, setMenuOpen] = useState(false);

  return (


    <Router>
      <div className={`main`}>


        <div className="page">
          <Navigation />
          <div className="hamburger-click-area" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="hamburger">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>

          {menuOpen && (
            <HamburgerNav closeMenu={() => setMenuOpen(false)} />
          )}

          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/all-works' element={<AllWorks />} />
            <Route path='/research' element={<Research />} />
            <Route path='/uiux' element={<Uiux />} />
            <Route path='/architecture' element={<Architecture />} />
            <Route path='/:category/:projectId' element={<ProjectDetail />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </div>

        <Footer />
        
      </div>
    </Router>

  );
}

export default App