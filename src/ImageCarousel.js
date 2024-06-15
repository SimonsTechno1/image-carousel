import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLocation, setShowLocation] = useState(false);
  const [showStreetView, setShowStreetView] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowLocation(false);
    setShowStreetView(false);
  };

  const toggleLocation = () => {
    setShowLocation(!showLocation);
    setShowStreetView(false);
  };

  const toggleStreetView = () => {
    setShowStreetView(!showStreetView);
    setShowLocation(false);
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container" onClick={() => openModal(index)}>
            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
      {isModalOpen && (
        <ImageModal
          images={images}
          currentIndex={currentIndex}
          onClose={closeModal}
          setCurrentIndex={setCurrentIndex}
          showLocation={showLocation}
          toggleLocation={toggleLocation}
          showStreetView={showStreetView}
          toggleStreetView={toggleStreetView}
        />
      )}
    </div>
  );
};

const ImageModal = ({ images, currentIndex, onClose, setCurrentIndex, showLocation, toggleLocation, showStreetView, toggleStreetView }) => {
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="modal">
      <span className="close" onClick={onClose}>&times;</span>
      <div className="button-container">
        <button className="location-button" onClick={toggleLocation}>
          {showLocation ? 'View Image' : 'Map Location'}
        </button>
        <button className="street-view-button" onClick={toggleStreetView}>
          {showStreetView ? 'View Image ' : 'Street View'}
        </button>
      </div>
      {!showLocation && !showStreetView && (
        <img src={images[currentIndex]} alt={`Modal ${currentIndex + 1}`} className="modal-image" />
      )}
      {showLocation && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387199.51147032203!2d-74.30932647699741!3d40.69608170403378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f9505bd01851%3A0xeb495aecf9816815!2sTiLT%20Museum!5e0!3m2!1sen!2sin!4v1718468874061!5m2!1sen!2sin"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {showStreetView && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8272.823846711133!2d-74.06577488092518!3d40.8026404295607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f9505bd01851%3A0xeb495aecf9816815!2sTiLT%20Museum!5e0!3m2!1sen!2sin!4v1718470280927!5m2!1sen!2sin"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      <button className="prev" onClick={prevImage}>&#10094;</button>
      <button className="next" onClick={nextImage}>&#10095;</button>
    </div>
  );
};

export default ImageCarousel;
