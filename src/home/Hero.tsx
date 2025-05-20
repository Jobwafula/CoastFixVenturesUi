import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const images = [
    './hero/hero1.jpg',
    './hero/hero2.jpg',
    './hero/hero3.jpg',
    
    
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore the World with Us</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Discover unforgettable adventures and breathtaking destinations with our curated travel experiences.
        </p>
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Start Your Journey
        </button>
      </div>
      {/* Carousel Indicators */}
      <div className="absolute bottom-4 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? 'bg-orange-600' : 'bg-white opacity-50'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;