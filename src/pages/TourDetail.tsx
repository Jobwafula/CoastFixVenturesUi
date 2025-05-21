import { useParams, Link } from 'react-router-dom';
import { tours } from '../data/toursData';

const TourDetail = () => {
  const { id } = useParams();
  
  const tour = tours.find(t => t.id === parseInt(id));

  if (!tour) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tour not found</h2>
        <Link 
          to="/tours" 
          className="text-orange-600 hover:underline font-semibold"
        >
          Back to all tours
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 container mx-auto px-4 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{tour.title}</h1>
          <div className="flex items-center space-x-6 text-white">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {tour.duration}
            </span>
            <span className="text-2xl font-bold text-orange-300">
              {tour.price}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Tour Overview</h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">{tour.detailedDescription}</p>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Detailed Itinerary</h3>
                <div className="space-y-6">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="bg-white p-6 rounded-lg shadow">
                      <div className="flex items-start">
                        <div className="bg-orange-100 text-orange-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                          {day.day}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">{day.title}</h4>
                          <p className="text-gray-600">{day.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              {tour.reviews && tour.reviews.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h3>
                  <div className="space-y-6">
                    {tour.reviews.map((review, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-2 font-semibold text-gray-800">{review.name}</span>
                        </div>
                        <p className="text-gray-700">"{review.comment}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow sticky top-4">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Tour Highlights</h3>
                  <ul className="space-y-3">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {tour.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                  <h4 className="font-bold text-gray-800 mb-4 text-xl">Ready for your adventure?</h4>
                  <div className="flex flex-col space-y-4">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                      Book Now
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-orange-600 font-semibold py-3 px-6 rounded-lg border border-orange-600 transition duration-300">
                      Make Inquiry
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Have questions? Call us at +254 700 123 456
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Tours Link */}
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/tours" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all tours
        </Link>
      </div>
    </div>
  );
};

export default TourDetail;