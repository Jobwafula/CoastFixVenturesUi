import React from 'react';

const FeaturedTours = () => {
  const tours = [
    {
      id: 1,
      title: 'Amboseli Wildlife Safari',
      description: 'Experience breathtaking views of Kilimanjaro and encounter elephants in their natural habitat on this 3-day safari.',
      price: 'KSH 45,000',
      image: '/Amboseli.jpg',
    },
    {
      id: 2,
      title: 'Tsavo National Park Adventure',
      description: 'Explore Kenya\'s largest national park on a 4-day safari featuring the famous "red elephants" and diverse landscapes.',
      price: 'KSH 55,000',
      image: '/Tsavo.jpg'
    },
    {
      id: 3,
      title: 'Maasai Mara Great Migration',
      description: 'Witness the spectacular wildebeest migration on this 5-day luxury safari in the world-famous Maasai Mara reserve.',
      price: 'KSH 75,000',
      image: 'Maasai-Mara.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
          Featured Kenyan Safaris
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-orange-600 font-bold text-lg">
                    {tour.price}
                  </span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                    Book Now
                  </button>
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