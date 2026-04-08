import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './MscDepartment.css';  
import mscImage from './assets/msc.jpg';  

function MscDepartment() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="msc-department">
      {/* Image with Caption */}
      <div className="image-container">
        <img src={mscImage} alt="MSC Department" className="msc-image" />
        <div className="image-caption">
          <h3>MSC-CTPG (Software Systems)</h3>
          <p>Established: 2005</p>
          <p>"Innovating the Future of Technology"</p>
        </div>
      </div>

      {/* Course Year Selection */}
      <div className="course-selection">
        <h3>Select Your Year</h3>
        <div className="years-list">
          <div className="year-box" onClick={() => navigate('/semester-selection?year=1')}>I-YEAR</div>
          <div className="year-box" onClick={() => navigate('/semester-selection?year=2')}>II-YEAR</div>
          <div className="year-box" onClick={() => navigate('/semester-selection?year=3')}>III-YEAR</div>
          <div className="year-box" onClick={() => navigate('/semester-selection?year=4')}>IV-YEAR</div>
          <div className="year-box" onClick={() => navigate('/semester-selection?year=5')}>V-YEAR</div>
        </div>
      </div>
    </div>
  );
}

export default MscDepartment;
