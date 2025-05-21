import { Link } from 'react-router-dom';
import { tours } from '../data/toursData';

const FeaturedTours = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-4">
          Featured Kenyan Safaris
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Our most popular safari packages carefully crafted to give you the best wildlife experiences
        </p>
        
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
  );
};

export default FeaturedTours;