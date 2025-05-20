import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Logo */}
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <img 
                  src='./logo.png' 
                  alt="CoastFix Logo" 
                  className="h-18 w-auto"
                />
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg 
                className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="py-4 px-2 text-gray-700 hover:text-orange-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/tours"
              className="py-4 px-2 text-gray-700 hover:text-orange-600 font-medium"
            >
              Tours
            </Link>
            <Link
              to="/gallery"
              className="py-4 px-2 text-gray-700 hover:text-orange-600 font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="py-4 px-2 text-gray-700 hover:text-orange-600 font-medium"
            >
              About
            </Link>
            
            {/* Properties Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
                className="py-4 px-2 text-gray-700 hover:text-orange-600 font-medium flex items-center"
              >
                Properties
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${isPropertiesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isPropertiesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    to="/properties/land"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    onClick={() => setIsPropertiesOpen(false)}
                  >
                    Land
                  </Link>
                  <Link
                    to="/properties/hotels"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    onClick={() => setIsPropertiesOpen(false)}
                  >
                    Hotels
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/airbnb"
              className="py-4 px-2 text-gray-700 hover:text-orange-600 font-medium"
            >
              AirBnb
            </Link>
            <Link
              to="/contact"
              className="py-4 px-2 text-gray-700 hover:text-orange-600 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link
          to="/"
          className="block py-2 px-4 text-sm hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/tours"
          className="block py-2 px-4 text-sm hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Tours
        </Link>
        <Link
          to="/gallery"
          className="block py-2 px-4 text-sm hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Gallery
        </Link>
        <Link
          to="/about"
          className="block py-2 px-4 text-sm hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        
        {/* Mobile Properties Dropdown */}
        <div className="pl-4">
          <button 
            onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
            className="w-full text-left py-2 px-4 text-sm hover:bg-blue-50 flex items-center justify-between"
          >
            Properties
            <svg 
              className={`w-4 h-4 ml-1 transition-transform ${isPropertiesOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isPropertiesOpen && (
            <div className="pl-4">
              <Link
                to="/properties/land"
                className="block py-2 px-4 text-sm hover:bg-blue-50"
                onClick={() => {
                  setIsPropertiesOpen(false);
                  setIsOpen(false);
                }}
              >
                Land
              </Link>
              <Link
                to="/properties/hotels"
                className="block py-2 px-4 text-sm hover:bg-blue-50"
                onClick={() => {
                  setIsPropertiesOpen(false);
                  setIsOpen(false);
                }}
              >
                Hotels
              </Link>
            </div>
          )}
        </div>
        
        <Link
          to="/airbnb"
          className="block py-2 px-4 text-sm hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          AirBnb
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-sm hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;