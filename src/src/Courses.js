import React from "react";
import "./courses.css";

// Import images from the 'assets' folder
import aImage from './assets/a.jpg'; // Replace with correct image name and extension
import cnImage from './assets/cn.jpg'; // Replace with correct image name and extension
import daaImage from './assets/daa.png'; // Replace with correct image name and extension
import pyImage from './assets/py.jpg'; // Replace with correct image name and extension
import ddImage from './assets/dd.png'; // Replace with correct image name and extension

// Use relative paths for the PDFs
import aPDF from './assets/DatabaseSystem.pdf'; // Replace with correct path


const Courses = () => {
  return (
    <div>
      {/* Title */}
      <h1 className="title">Course List of Even Semester</h1>

      {/* Courses Container */}
      <div className="courses-container">
        {/* Card 1 */}
        <div className="container">
          <div className="imageBox">
            <img src={aImage} alt="Course 1" />
          </div>
          <div className="content">
            <h1>23ISL343</h1>
            <p>Database System</p>
            <a
              href={aPDF} // Path to the PDF file
              className="download-btn"
              download
            >
              Download
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="container">
          <div className="imageBox">
            <img src={cnImage} alt="Course 2" />
          </div>
          <div className="content">
            <h1>23ISL344</h1>
            <p>Data Structures</p>
            <a
              href={aPDF} // Path to the PDF file
              className="download-btn"
              download
            >
              Download
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="container">
          <div className="imageBox">
            <img src={daaImage} alt="Course 3" />
          </div>
          <div className="content">
            <h1>23ISL345</h1>
            <p>Algorithms</p>
            <a
              href={aPDF} // Path to the PDF file
              className="download-btn"
              download
            >
              Download
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="container">
          <div className="imageBox">
            <img src={pyImage} alt="Course 4" />
          </div>
          <div className="content">
            <h1>23ISL346</h1>
            <p>Operating Systems</p>
            <a
              href={aPDF} // Path to the PDF file
              className="download-btn"
              download
            >
              Download
            </a>
          </div>
        </div>

        {/* Card 5 */}
        <div className="container">
          <div className="imageBox">
            <img src={ddImage} alt="Course 5" />
          </div>
          <div className="content">
            <h1>23ISL347</h1>
            <p>Computer Networks</p>
            <a
              href={aPDF} // Path to the PDF file
              className="download-btn"
              download
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
