import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'; // Importing Bootstrap Carousel
import './women.css';
import b from './assets/b.png';
import w1 from './assets/w1.jpg';
import w2 from './assets/w2.jpg';
import w3 from './assets/w3.jpg';
import w4 from './assets/w4.jpg';
const clubs = [
  {
    image: w1,

  },
  {
    image: w2,
 
  },
  {
    image: w3,
    
  },
  {
    image: w4,
    
  },
];
const StudentDevelopmentClub = () => {
  const navigate = useNavigate();

  return (
    <div className="sdc-page">
      <h1 className="sdc-header">Women Development Club</h1>


      
      {/* Slideshow Section */}
      <div className="slideshow-section">
        <h2 className="slideshow-title">EVENTS</h2>
        <Carousel className="slideshow">
          {clubs.slice(0, 4).map((item, index) => (
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
              <img src={b} alt="Faculty" />
              <div className="content-container">
                <p> <strong>Name :</strong>Dr. John Doe</p>
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
              <img src={b} alt="President" />
              <div className="content-container">
                <p> <strong>Name :</strong>Jane Smith</p>
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
              <img src={b} alt="Vice President" />
              <div className="content-container">
                <p> <strong>Name :</strong>Mark Johnson</p>
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
              <img src={b} alt="Core Member 1" />
              <div className="content-container">
                <p><strong>Name :</strong> Emily Brown</p>
                <p> <strong>Position :</strong>Core Team</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sdc-member-card">
          <div className="sdc-member-card-inner">
            <div className="sdc-member-card-front">
              <p>Core Team - Member 2</p>
            </div>
            <div className="sdc-member-card-back">
              <img src={b} alt="Core Member 2" />
              <div className="content-container">
                <p> <strong>Name :</strong>Chris White</p>
                <p> <strong>Position :</strong>Core Team</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sdc-member-card">
          <div className="sdc-member-card-inner">
            <div className="sdc-member-card-front">
              <p>Core Team - Member 3</p>
            </div>
            <div className="sdc-member-card-back">
              <img src={b} alt="Core Member 3" />
              <div className="content-container">
                <p> <strong>Name :</strong>Sophia Green</p>
                <p> <strong>Position :</strong>Core Team</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sdc-member-card">
          <div className="sdc-member-card-inner">
            <div className="sdc-member-card-front">
              <p>Core Team - Member 4</p>
            </div>
            <div className="sdc-member-card-back">
              <img src={b} alt="Core Member 4" />
              <div className="content-container">
                <p> <strong>Name :</strong>Luke Carter</p>
                <p><strong>Position :</strong> Core Team</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div> 


      </div>
      <h2 className="sdc-section-title"></h2>
<div className="sdc-mission-vision-container">
  <div className="sdc-mission">
    <h2>Mission</h2>
    <p>
      The Student Development Club aims to empower students by providing opportunities for personal, 
      academic, and professional growth. Through engaging workshops, leadership training, and 
      community-building activities, we strive to foster a supportive environment where students can 
      develop essential skills, connect with peers, and enhance their overall college experience.
    </p>
  </div>

  <div className="sdc-vision">
    <h2>Vision</h2>
    <p>
      Our vision is to create a dynamic and inclusive student community that thrives on collaboration, 
      continuous learning, and personal development. We aspire to cultivate confident, well-rounded 
      individuals who are prepared to excel in both their academic and future professional endeavors, 
      leaving a lasting impact on society.
    </p>
  </div>
</div>

    </div>
  );
};

export default StudentDevelopmentClub;
