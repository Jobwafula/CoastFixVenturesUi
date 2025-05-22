import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../mainlayout/Navbar';
import Footer from '../mainlayout/Footer';

const Airbnb = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDates, setSelectedDates] = useState(null);

  // Sample properties data
  const properties = [
    {
      id: 1,
      title: "Beachfront Villa in Diani",
      location: "Diani Beach, Kenya",
      price: 12000,
      rating: 4.92,
      reviews: 128,
      type: 'beach',
      beds: 3,
      baths: 2,
      amenities: ['Pool', 'Wifi', 'Kitchen', 'Parking'],
      images: ['./properties/diani-villa.jpg']
    },
    {
      id: 2,
      title: "Luxury Treehouse in Watamu",
      location: "Watamu, Kenya",
      price: 8500,
      rating: 4.85,
      reviews: 96,
      type: 'forest',
      beds: 1,
      baths: 1,
      amenities: ['Breakfast', 'Wifi', 'Nature View'],
      images: ['./properties/watamu-treehouse.jpg']
    },
    {
      id: 3,
      title: "Modern Apartment in Mombasa",
      location: "Nyali, Mombasa",
      price: 6500,
      rating: 4.78,
      reviews: 215,
      type: 'urban',
      beds: 2,
      baths: 2,
      amenities: ['Wifi', 'AC', 'Gym', 'Security'],
      images: ['./properties/mombasa-apt.jpg']
    },
    {
      id: 4,
      title: "Private Island Cottage",
      location: "Lamu Archipelago",
      price: 18000,
      rating: 4.97,
      reviews: 64,
      type: 'beach',
      beds: 2,
      baths: 1,
      amenities: ['Private Beach', 'Boat Transfer', 'Chef'],
      images: ['./properties/lamu-cottage.jpg']
    },
  ];

  const filteredProperties = activeTab === 'all' 
    ? properties 
    : properties.filter(property => property.type === activeTab);

  return (
    <div>
        <Navbar />
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/')}
                className="text-orange-600 font-bold text-xl"
              >
                Coastfix Stays
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-gray-700 hover:text-orange-600">Become a Host</button>
              <button className="p-2 rounded-full border border-gray-300 text-gray-700 hover:shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-8 hide-scrollbar">
            {['all', 'beach', 'forest', 'urban'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex flex-col items-center min-w-max pb-2 px-1 border-b-2 ${activeTab === tab ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500 hover:border-gray-300'}`}
              >
                <span className="capitalize">{tab}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Date Picker */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4 overflow-x-auto hide-scrollbar">
            <button className="flex flex-col items-center px-4 py-2 border rounded-full hover:shadow-md">
              <span className="text-xs">Check in</span>
              <span className="font-medium">Add dates</span>
            </button>
            <button className="flex flex-col items-center px-4 py-2 border rounded-full hover:shadow-md">
              <span className="text-xs">Check out</span>
              <span className="font-medium">Add dates</span>
            </button>
            <button className="flex flex-col items-center px-4 py-2 border rounded-full hover:shadow-md">
              <span className="text-xs">Guests</span>
              <span className="font-medium">Add guests</span>
            </button>
            <button className="p-2 bg-orange-600 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Property Listings */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <div 
              key={property.id} 
              className="rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition duration-300"
              onClick={() => navigate(`/stays/${property.id}`)}
            >
              <div className="relative pb-3/4 h-48">
                <img 
                  src={property.images[0]} 
                  alt={property.title}
                  className="absolute h-full w-full object-cover"
                />
                <button className="absolute top-3 right-3 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg">{property.title}</h3>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{property.rating}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-1">{property.location}</p>
                <p className="text-gray-500 text-sm mt-1">{property.beds} beds · {property.baths} baths</p>
                <p className="mt-2">
                  <span className="font-semibold">KSh {property.price.toLocaleString()}</span> night
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-orange-600">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600">Safety information</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600">Cancellation options</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-orange-600">Disaster relief</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600">Support refugees</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600">Combating discrimination</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hosting</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-orange-600">Try hosting</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600">AirCover for Hosts</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600">Hosting resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Coastfix</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-orange-600">Newsroom</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600">Investors</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm">
              © 2023 Coastfix Stays, Inc. · Privacy · Terms · Sitemap
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-sm font-semibold">English (US)</span>
              <span className="text-sm font-semibold">KSh</span>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <Footer />
    </div>
  );
};

export default Airbnb;