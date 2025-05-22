import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../mainlayout/Navbar';
import Footer from '../mainlayout/Footer';

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: 'Ocean Breeze Resort',
      location: 'Diani Beach, Kenya',
      image: './hotels/ocean-breeze.jpg',
      description: 'A luxurious beachfront resort with stunning ocean views and world-class amenities.',
      price: 'KES 19,350/night',
    },
    {
      id: 2,
      name: 'Coastal Paradise Hotel',
      location: 'Mombasa, Kenya',
      image: './hotels/coastal-paradise.jpg',
      description: 'A modern hotel offering comfort and convenience near Mombasa’s vibrant city center.',
      price: 'KES 12,900/night',
    },
    {
      id: 3,
      name: 'Safari Lodge',
      location: 'Lamu Island, Kenya',
      image: './hotels/safari-lodge.jpg',
      description: 'An eco-friendly lodge blending adventure and relaxation in a serene island setting.',
      price: 'KES 15,480/night',
    },
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('./hero/hotels-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore Our Hotels</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Discover the perfect stay for your coastal adventure with Coastfix Tours.
          </p>
        </div>
      </section>

      {/* Hotels Listings */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{hotel.name}</h3>
                <p className="text-gray-600 mb-2">{hotel.location}</p>
                <p className="text-gray-500 text-sm mb-4">{hotel.description}</p>
                <p className="text-orange-600 font-semibold mb-4">{hotel.price}</p>
                <Link
                  to="/contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-600 text-white py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Contact us today to reserve your spot at one of our stunning hotels.
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

export default Hotels;