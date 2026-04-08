import React, { useState } from 'react';
import './Gallery.css';

// Import images for the gallery
import img1 from './assets/g6.jpeg';
import img2 from './assets/g2.jpg';
import img3 from './assets/g3.jpg';
import img4 from './assets/g4.jpg';
import img5 from './assets/g5.jpg';

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentClub, setCurrentClub] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  const images = [
    { 
      src: img1, 
      club: 'Placement Cell', 
      description: 'A conference-style meeting discussing career opportunities.' 
    },
    { 
      src: img2, 
      club: 'Tamil Mandram', 
      description: 'Pongal celebration, our traditional festival.' 
    },
    { 
      src: img3, 
      club: 'Women’s Development Club', 
      description: 'Event: Shristi – Empowering Women.' 
    },
    { 
      src: img4, 
      club: 'Rotary Club', 
      description: 'Events: Swaram & Enthusia – Social Awareness Programs.' 
    },
    { 
      src: img5, 
      club: 'Pasumai Iyakkam Club', 
      description: 'Tree sapling event promoting sustainability.' 
    },
  ];

  const openModal = (image, club, description) => {
    setCurrentImage(image);
    setCurrentClub(club);
    setCurrentDescription(description);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleButtonClick = (club) => {
    setPopupMessage(`You clicked on ${club} event!`);
    alert(popupMessage);
  };

  return (
    <div className="gallery">
      {/* Banner Section */}
      <div className="gallery-banner">
        <h1 className="gallery-title">Photo Gallery</h1>
        <h2 className="gallery-subtitle">Clubs and Cells Events Photo Gallery</h2>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(img.src, img.club, img.description)}>
            <img src={img.src} alt={`Gallery ${index + 1}`} className="gallery-image" />
            <div className="image-overlay">
              <p className="image-text">{img.club}</p>
             
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2 className="modal-title">{currentClub}</h2>
            <img src={currentImage} alt="Popup" className="modal-image" />
            <p className="modal-description">{currentDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
