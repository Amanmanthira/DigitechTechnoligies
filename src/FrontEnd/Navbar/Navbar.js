// NavBar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl lg:text-4xl">🎅</div>
        <div className="text-white font-bold hidden md:block lg:text-2xl"><span className='text-blue-500'>D</span>IGITECH <span className='text-blue-500'>T</span>ECHNOLO<span className='text-blue-500'>G</span>IES</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-300"
          >
            {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>
        <div className={`flex md:flex space-x-4 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <a href="/" className="text-white hover:bg-gray-600 px-4 py-2 rounded">Home</a>
          <a href="#services" className="text-white hover:bg-gray-600 px-4 py-2 rounded">Services</a>
          <a href="about" className="text-white hover:bg-gray-600 px-4 py-2 rounded">About</a>
          <a href="contact" className="text-white hover:bg-gray-600 px-4 py-2 rounded">Contact</a>
        </div>
      </div> 
        {/* Snowing Animation */}
          <div className='snowing'>
            <div className='snowflakes' aria-hidden='true'>
              {[...Array(100)].map((_, index) => (
                <div className='snowflake' key={index}>
                  ❅
                </div>
              ))}
            </div>
          </div>

    </nav>
  );
};

export default NavBar;

    

       
       