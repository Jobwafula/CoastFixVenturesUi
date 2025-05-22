import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../mainlayout/Navbar';
import Footer from '../mainlayout/Footer';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50">
        <Navbar />
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center" 
               style={{ backgroundImage: "url('./hero/hero2.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Coastfix Tours</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Your trusted partner in creating unforgettable travel experiences
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="./about/about1.jpg" alt="Our Team" className="rounded-lg shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Coastfix Tours and Travel began as a small family-owned business with a passion for showcasing the world's most beautiful coastal destinations. What started as a local tour operator has grown into a globally recognized travel company.
            </p>
            <p className="text-gray-600 mb-6">
              Our journey has been guided by a simple principle: to create travel experiences that go beyond the ordinary. We believe every journey should be transformative, every destination should feel like home, and every memory should last a lifetime.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-orange-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-600 text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Travel</h3>
              <p className="text-gray-600">
                We're committed to eco-friendly practices that preserve the beauty of our destinations for future generations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-600 text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-3">Authentic Experiences</h3>
              <p className="text-gray-600">
                We go beyond tourist traps to connect you with the real heart and soul of each location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-orange-600 text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-3">Exceptional Service</h3>
              <p className="text-gray-600">
                From planning to return, our team provides personalized attention to every detail of your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Johnson", role: "Founder & CEO", image: "./team/sarah.jpg" },
            { name: "Michael Chen", role: "Head of Operations", image: "./team/michael.jpg" },
            { name: "Amina Diallo", role: "Travel Specialist", image: "./team/amina.jpg" }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.image} alt={member.name} className="w-64 h-64 object-cover rounded-full mx-auto mb-4 shadow-md" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-orange-600 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">
                {member.name.split(' ')[0]} has been with Coastfix since {2010 + index} and specializes in creating customized travel experiences.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8">
            Let Coastfix Tours craft the perfect getaway tailored just for you.
          </p>
          <button 
            onClick={() => navigate('/tours')}
            className="bg-white hover:bg-gray-100 text-orange-600 font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            Explore Our Tours
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;