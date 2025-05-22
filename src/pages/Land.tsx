import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../mainlayout/Navbar';
import Footer from '../mainlayout/Footer';

const Land = () => {
  const lands = [
    {
      id: 1,
      name: 'Diani Beachfront Plot',
      location: 'Diani, Kenya',
      image: './land/diani-plot.jpg',
      description: 'A prime beachfront plot perfect for building your dream vacation home.',
      size: '0.5 acres',
      price: 'KES 6,450,000',
    },
    {
      id: 2,
      name: 'Mombasa Coastal Land',
      location: 'Mombasa, Kenya',
      image: './land/mombasa-plot.jpg',
      description: 'A spacious plot ideal for commercial or residential development.',
      size: '1 acre',
      price: 'KES 10,320,000',
    },
    {
      id: 3,
      name: 'Lamu Scenic Plot',
      location: 'Lamu Island, Kenya',
      image: './land/lamu-plot.jpg',
      description: 'A serene plot with stunning views, perfect for eco-friendly projects.',
      size: '0.75 acres',
      price: 'KES 8,385,000',
    },
  ];

  return (
    <div className="bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('./hero/land-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Land Opportunities</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Invest in prime coastal land with Coastfix Tours.
          </p>
        </div>
      </section>

      {/* Land Listings */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Available Land Plots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lands.map((land) => (
            <div
              key={land.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={land.image}
                alt={land.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{land.name}</h3>
                <p className="text-gray-600 mb-2">{land.location}</p>
                <p className="text-gray-500 text-sm mb-2">{land.description}</p>
                <p className="text-gray-600 mb-2">Size: {land.size}</p>
                <p className="text-orange-600 font-semibold mb-4">{land.price}</p>
                <Link
                  to="/contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-600 text-white py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Invest in Your Future</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Contact us to learn more about our exclusive land opportunities.
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

export default Land;