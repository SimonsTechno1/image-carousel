import React from 'react';
import ImageCarousel from './ImageCarousel';
import image1 from './image1.jpg'; // replace with actual image paths
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import './App.css';

const images = [image1, image2, image3, image4, image5];


function App() {
  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <ImageCarousel images={images} />
    </div>
  );
}

export default App;

