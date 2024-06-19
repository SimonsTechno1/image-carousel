import React from 'react';
import './ImageView.css';

const ImageView = ({ imageSrc, onClose }) => {
  return (
    <div className="image-view">
      <span className="close" onClick={onClose}>&times;</span>
      <img src={imageSrc} alt="Large view" className="image-view-content" />
    </div>
  );
};

export default ImageView;
