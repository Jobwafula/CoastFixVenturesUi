import { Link } from 'react-router-dom';
import { tours } from '../data/toursData';
import Navbar from '../mainlayout/Navbar';
import Footer from '../mainlayout/Footer';

const Tours = () => {
  return (
    <div>
        <Navbar />
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 bg-orange-600">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        <img
          src="/Maasai-Mara.jpg"
          alt="Kenya Safari Tours"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Kenya Safari Tours</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Explore our full range of safari adventures, from thrilling wildlife encounters to luxurious beach getaways.
            </p>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <Link to={`/tours/${tour.id}`}>
                  <div className="h-48 bg-gray-300 overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      <Link to={`/tours/${tour.id}`} className="hover:text-orange-600">
                        {tour.title}
                      </Link>
                    </h3>
                    <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {tour.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-bold text-lg">
                      {tour.price}
                    </span>
                    <Link 
                      to={`/tours/${tour.id}`}
                      className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </div>
    
  );
};

export default Tours;