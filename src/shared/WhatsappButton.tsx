import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+254700540507?text=Hello!%20I'm%20interested%20in%20your%20travel%20services!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition duration-300 flex items-center justify-center z-20"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppButton;