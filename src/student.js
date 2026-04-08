import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'; // Importing Bootstrap Carousel
import './student.css';
import b from './assets/b.png';
import s1 from './assets/s1.jpg';
import s2 from './assets/club.png';
import s3 from './assets/club.png';
import b1 from './assets/b1.jpg'
import b2 from './assets/b2.jpg'
import b3 from './assets/b3.jpg'
import b4 from './assets/b4.jpg'
const clubs = [
  {
    image: s1,

  },
  {
    image: s2,
 
  },
  {
    image: s3,
    
  },
];
const StudentDevelopmentClub = () => {
  const navigate = useNavigate();

  return (
    <div className="sdc-page">
      <h1 className="sdc-header">Student Development Club</h1>


      
      {/* Slideshow Section */}
      <div className="slideshow-section">
        <h2 className="slideshow-title">EVENTS</h2>
        <Carousel className="slideshow">
          {clubs.slice(0, 3).map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 slideshow-image"
                src={item.image}
                alt={`Slide ${index + 1}`}
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <h2 className="sdc-section-title">Member Details</h2>
      <div className="sdc-members-container">
        <div className="sdc-member-card">
          <div className="sdc-member-card-inner">
            <div className="sdc-member-card-front">
              <p>Faculty Coordinator</p>
            </div>
            <div className="sdc-member-card-back">
              <img src={b1} alt="Faculty" />
              <div className="content-container">
                <p> <strong>Name :</strong>Ram</p>
                <p><strong>Position :</strong>Faculty Coordinator</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sdc-member-card">
          <div className="sdc-member-card-inner">
            <div className="sdc-member-card-front">
              <p>President</p>
            </div>
            <div className="sdc-member-card-back">
              <img src={b2} alt="President" />
              <div className="content-container">
                <p> <strong>Name :</strong>Raj</p>
                <p> <strong>Position :</strong>President</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sdc-member-card">
          <div className="sdc-member-card-inner">
            <div className="sdc-member-card-front">
              <p>Vice President</p>
            </div>
            <div className="sdc-member-card-back">
              <img src={b3} alt="Vice President" />
              <div className="content-container">
                <p> <strong>Name :</strong>Ranga</p>
                <p> <strong>Position</strong>Vice President</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sdc-member-card">
          <div className="sdc-member-card-inner">
            <div className="sdc-member-card-front">
              <p>Core Team - Member 1</p>
            </div>
            <div className="sdc-member-card-back">
              <img src={b4} alt="Core Member 1" />
              <div className="content-container">
                <p><strong>Name :</strong> Arun</p>
                <p> <strong>Position :</strong>Core Team</p>
              </div>
            </div>
          </div>
        </div>

       
      


      </div>
      <div> 


      </div>
      <h2 className="sdc-section-title"></h2>


    </div>
  );
};

export default StudentDevelopmentClub;
