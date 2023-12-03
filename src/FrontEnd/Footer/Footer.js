// Footer.js
import React from 'react';

const ContactDetails = () => {
  return (
    <div className="text-left">
      <h6 className="mb-2 text-xl font-semibold">Contact</h6>
      <p className="mb-2">Address: No.84, Thammita, Makevita, Gampaha, Sri Lanka</p>
      <p className="mb-2">Email: Amanmanthiraamex@gmail.com</p>
      <p className="mb-2">Phone: +(94) 777 590 848</p>
      <p>Phone: +(94) 33 22 20 808</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <h6 className="mb-4 text-xl font-semibold"><span className='text-blue-500'>D</span>IGITECH <span className='text-blue-500'>T</span>ECHNOLO<span className='text-blue-500'>G</span>IES</h6>
            <p>
              "Empowering Entertainment, One Screen at a Time. Your Premier TV Repair Solution."
            </p>
          </div>

          {/* Empty grid column for spacing on medium and large screens */}
          <div className="hidden md:block lg:block"></div>

          <div className="md:col-span-2 lg:col-span-3 md:text-right lg:pl-96">
            <ContactDetails />
          </div>
        </div>
      </div>

      <div className="bg-gray-700 p-6 text-center">
        <span>© 2023 Copyright:</span>
        <a href="/" className="font-semibold text-blue-500">DTG</a>
      </div>
    </footer>
  );
};

export default Footer;
