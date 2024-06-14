import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        />
      )}
    </div>
  );
};

const ImageModal = ({ images, currentIndex, onClose, setCurrentIndex }) => {
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="modal">
      <span className="close" onClick={onClose}>&times;</span>
      <img src={images[currentIndex]} alt={`Modal ${currentIndex + 1}`} className="modal-image" />
      <button className="prev" onClick={prevImage}>&#10094;</button>
      <button className="next" onClick={nextImage}>&#10095;</button>
    </div>
  );
};

export default ImageCarousel;
