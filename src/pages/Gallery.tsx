import React from 'react';
import Navbar from '../mainlayout/Navbar';
import Footer from '../mainlayout/Footer';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const images = [
    { id: 1, src: './gallery/beach1.jpg', alt: 'Diani Beach Sunset' },
    { id: 2, src: './gallery/hotel1.jpg', alt: 'Ocean Breeze Resort Pool' },
    { id: 3, src: './gallery/land1.jpg', alt: 'Coastal Land Plot' },
    { id: 4, src: './gallery/tour1.jpg', alt: 'Safari Tour Adventure' },
    { id: 5, src: './gallery/beach2.jpg', alt: 'Lamu Island Shoreline' },
    { id: 6, src: './gallery/hotel2.jpg', alt: 'Coastal Paradise Suite' },
    { id: 7, src: './gallery/land2.jpg', alt: 'Mombasa Coastal Plot' },
    { id: 8, src: './gallery/tour2.jpg', alt: 'Cultural Village Tour' },
    { id: 9, src: './gallery/beach3.jpg', alt: 'Mombasa Beach View' },
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('./hero/gallery-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Gallery</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Explore the beauty and adventure of Coastfix Tours through our stunning visuals.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Moments from the Coast</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-600 text-white py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Inspired by What You See?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Contact us to plan your next coastal adventure or investment.
        </p>
        <Link
          to="/contact"
          className="bg-white text-orange-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300"
        >
          Get in Touch
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;