import React from 'react';
import './cc.css'; // CSS for styling
import Cell from './assets/club.png'; // Updated image path
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import { useNavigate } from 'react-router-dom'; // React Router for navigation

import sdc from './assets/sdc.png';
import p from './assets/p.png';
import cm from './assets/cm.png';
import r from './assets/r.png';
import t from './assets/t.png';
import w from './assets/w.png';
import tp from './assets/tp.png';
import edc from './assets/edc.png';

const clubsAndCells = [
  { image: sdc, name: 'Student Development Club', path: '/student-development-club' },
  { image: p, name: 'Photography Club', path: '/photo-club' },
  { image: cm, name: 'Cultural and Music Club', path: '/music-club' },
  { image: r, name: 'Rotaract Club', path: '/rotaract-club' },
  { image: t, name: 'Zhagaram Tamil mandram', path: '/tamil-club' },
  { image: w, name: 'Women Development Cell', path: '/women-cell' },
  { image: tp, name: 'Placement Cell', path: '/placement-cell' },
  { image: edc, name: 'Entrepreneurship Development Cell', path: '/development-cell' },
];

const CC = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleClubClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  const handleRegisterClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe36vz_drnV9Dnj4vfLNBElzYdAZbme43hCR4xp9u2bt3a_LQ/viewform?usp=dialog', '_blank');
  };

  return (
    <div className="cc-page">
      {/* Clubs and Cells Section with Register Button on the Top Right */}
      <div className="clubs-section">
        <div className="clubs-header">
          <h2 className="clubs-title">Clubs & Cells</h2>
        </div>
        <button className="register-button" onClick={handleRegisterClick}>
          Register Here
        </button>
        <div className="clubs-container">
          {clubsAndCells.map((item, index) => (
            <div
              key={index}
              className="club-card"
              onClick={() => handleClubClick(item.path)} // Navigate on click
            >
              <img src={item.image} alt={item.name} className="club-image" />
              <h3 className="club-name">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CC;