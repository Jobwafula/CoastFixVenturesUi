import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter an email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setMessage('Thank you for subscribing!');
    setEmail('');
    // Here you would typically send the email to a backend service
  };

  return (
    <section className="py-12 bg-gray-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-orange-100 mb-6 max-w-xl mx-auto">
          Stay updated with the latest travel deals, destinations, and tips from CoastFix Tours and Travels!
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button
                onClick={handleSubmit}
                className="bg-orange-600 text-white  hover:bg-orange-100 font-semibold py-3 px-6 rounded-full transition duration-300"
              >
                Subscribe
              </button>
            </div>
            {message && (
              <p className={`mt-4 ${message.includes('Thank') ? 'text-orange-100' : 'text-red-200'}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;