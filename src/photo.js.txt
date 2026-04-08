import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'; // Importing Bootstrap Carousel
import './photo.css';
import b from './assets/b.png';
import p1 from './assets/p1.jpg';
import p2 from './assets/p2.jpg';
import p3 from './assets/p3.jpg';
const clubs = [
  {
    image: p1,

  },
  {
    image: p2,
 
  },
  {
    image: p3,
    
  },
];
const StudentDevelopmentClub = () => {
  const navigate = useNavigate();

  return (
    <div className="sdc-page">
      <h1 className="sdc-header">Photography Club</h1>


      
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
    The Photography Club aims to inspire and empower individuals to express their creativity through photography. We provide a platform for students to learn, experiment, and refine their photography skills through workshops, photo walks, competitions, and collaborative projects. Our mission is to cultivate a community that shares a passion for storytelling through images.
    </p>
  </div>

  <div className="sdc-vision">
    <h2>Vision</h2>
    <p>
    Our vision is to build a vibrant and inclusive community of photographers who push the boundaries of visual storytelling. We aspire to foster artistic growth, technical expertise, and a keen eye for detail among our members, enabling them to capture moments that inspire, inform, and evoke emotions.

Let me know if you want any modifications!
    </p>
  </div>
</div>

    </div>
  );
};

export default StudentDevelopmentClub;
