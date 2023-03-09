import React from 'react';

const Slider = ({ slides }) => {
  return (
    <div>
      {slides.map((slide, index) => (
        <img key={index} src={slide} alt={`Slide ${index + 1}`} />
      ))}
    </div>
  );
};

export default Slider;