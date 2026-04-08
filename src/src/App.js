import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Instagram, Github, Phone, CalendarDays } from 'lucide-react'; // Import icons
import './App.css';
import logo from './assets/keclogo.jpg';
import brochure from './assets/brochure.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles

import LoginForm from './LoginForm';
import Departments from './Departments';
import MscDepartment from './MscDepartment';
import Courses from './Courses';
import SemesterSelection from './SemesterSelection';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import CC from './cc';
import StudentDevelopmentClub from './student';
import Photo from './photo';
import Music from './music';
import Rotaract from './rotaract';
import Tamil from './tamil';
import Women from './women';
import Homepage from "./home";  // ✅ Fixed case sensitivity issue

function App() {
  const [showBrochure, setShowBrochure] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBrochure(false);
    }, 60000); // Auto-close after 1 minute

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Brochure Modal */}
        {showBrochure && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <div className="event-info">
                  <CalendarDays size={24} color="#ff5722" />
                  <p className="event-description">📢 Upcoming Event at KEC - Don't Miss It!</p>
                </div>
                <button className="close-btn" onClick={() => setShowBrochure(false)}>×</button>
              </div>
              <img src={brochure} alt="Upcoming Event in KEC" className="modal-image" />
            </div>
          </div>
        )}

        {/* Header */}
        <header className="header">
          <img src={logo} alt="Logo" className="header-image" />
        </header>

        {/* Navigation Bar */}
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li> {/* Updated Link */}
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Department</Link></li>
            <li><Link to="/communities/cc">Communities</Link></li>
          </ul>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} color="white" />
            </a>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
              <Phone size={24} color="white" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Github size={24} color="white" />
            </a>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Set default route */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/msc-department" element={<MscDepartment />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/semester-selection" element={<SemesterSelection />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/student-development-club" element={<StudentDevelopmentClub />} />
          <Route path="/photo-club" element={<Photo />} />
          <Route path="/music-club" element={<Music />} />
          <Route path="/rotaract-club" element={<Rotaract />} />
          <Route path="/tamil-club" element={<Tamil />} />
          <Route path="/women-cell" element={<Women />} />
          <Route path="/communities/cc" element={<CC />} />
           <Route path="/clubs" element={<CC />} /> {/* Clubs Page Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

