import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center py-4 px-2">
                           <img 
                             src='./logo.png' 
                             alt="KCHomes Travels Logo" 
                             className="h-18 w-auto" // Adjust height as needed
                           />
                         </Link>
            <p className="text-orange-100">
              Discover the world with our expertly curated travel experiences. Your adventure starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-orange-200 transition duration-300">Home</a>
              </li>
              <li>
                <a href="/tours" className="hover:text-orange-200 transition duration-300">Tours</a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-200 transition duration-300">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-200 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:info@caostfixtours.com" className="hover:text-orange-200 transition duration-300">
                  info@coastfixtours.co.ke
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-orange-200 transition duration-300">
                +254 786598394
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Kilifi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-orange-500 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition duration-300">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition duration-300">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-200 transition duration-300">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
          <p className="text-orange-100">
            &copy; {new Date().getFullYear()} CoastFix Tours and Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;