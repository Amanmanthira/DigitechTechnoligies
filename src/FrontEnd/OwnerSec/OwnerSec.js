import React from 'react';

const OwnersSec = () => {
  return (
    <section className="bg-gray-900 py-16 max-sm:p-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-around items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Owner: Chandana Pushpakumara */}
        <div className="owner text-center mb-8 lg:mb-0 pr-8 border border-blue-300 rounded-lg p-8 fade-in">
          <img src="./image/pic.jpg" alt="Chandana Pushpakumara" className="rounded-full w-48 h-48 object-cover mx-auto mb-4 border-4 border-blue-300" />
          <h3 className="text-2xl font-semibold text-white mb-2">Chandana Pushpakumara, Co-owner</h3>
          <p className="text-gray-400 mb-4">Founder - 1990</p>
          <p className="text-gray-300">
            Chandana Pushpakumara, the visionary founder of our TV Repair Center, embarked on this journey in 1990.
            His commitment to excellence has been the driving force behind our success, ensuring top-notch TV repairs and customer satisfaction.
          </p>
          {/* Add more details or social media links if needed */}
        </div>

        {/* Owner: Aman Manthira */}
        <div className="owner text-center pl-8 border border-blue-300 rounded-lg p-8 fade-in">
          <img src="https://media.licdn.com/dms/image/D5603AQGjCpnuT3cwaQ/profile-displayphoto-shrink_400_400/0/1699781663621?e=1707350400&v=beta&t=ocmQTlAHegXTK1XMANaQA51ckok-T-kZMZlksN-XO1c" alt="Aman Manthira" className="rounded-full w-48 h-48 object-cover mx-auto mb-4 border-4 border-blue-300" />
          <h3 className="text-2xl font-semibold text-white mb-2">Aman Manthira</h3>
          <p className="text-gray-400 mb-4">Full Stack Developer</p>
          <p className="text-gray-300">
            Aman Manthira, A Full Stack Developer, brings a modern touch to our services.
            With a passion for technology, Aman ensures that our TV Repair Center stays ahead in the digital era.
          </p>
          {/* Add more details or social media links if needed */}
        </div>
      </div>
    </section>
  );
};

export default OwnersSec;
