import React, { useState } from 'react';

const Carousel = ({ images }) => {
 const [currentIndex, setCurrentIndex] = useState(0);

 const handleNext = () => {
   setCurrentIndex((prevIndex) =>
     prevIndex + 1 === images.length ? 0 : prevIndex + 1
   );
 };

 const handlePrevious = () => {
   setCurrentIndex((prevIndex) =>
     prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
   );
 };

 return (
   <div>
     <button onClick={handlePrevious}>Previous</button>
     <img src={images[currentIndex]} alt="carousel" />
     <button onClick={handleNext}>Next</button>
   </div>
 );
};

export default Carousel;
