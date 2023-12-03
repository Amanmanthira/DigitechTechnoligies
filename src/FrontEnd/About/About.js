// src/components/AboutUsPage.js
import React from 'react';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const AboutUsPage = () => {
  return (
    <div>
    <div className="bg-gray-300 min-h-screen p-20">
      <NavBar/>

      <div className="container mx-auto my-12 p-6 bg-gray-200 rounded-lg shadow-md">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">About Us</h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/male-technician-examining-mother-board-with-digital-multimeter_23-2147922353.jpg?w=996&t=st=1701609649~exp=1701610249~hmac=cd1b221a2f7b2ca1a476582062005a71c689562e9c7cb343ed81430475c3358f"
              alt="Company Office"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4 font-semibold">
              Welcome to the About Us page of DIJITECH TECHNOLOGIES. We are a leading TV and electric repairing service center, providing top-notch solutions since 1990.
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
              Our founder, Chandana Pushpakumara, established the company with a commitment to excellence and a passion for delivering reliable repair services. Over the years, we have evolved to meet the ever-changing needs of our valued clients.
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
              At DIJITECH TECHNOLOGIES, we believe in the power of collaboration and creativity. Our team consists of skilled professionals who bring diverse expertise, ensuring a holistic approach to every TV and electric repair project.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
          <ul className="list-disc pl-6">
            <li className="text-gray-700">Precision and Technical Expertise</li>
            <li className="text-gray-700">Customer Satisfaction and Trust</li>
            <li className="text-gray-700">Honesty in Service</li>
            <li className="text-gray-700">Adaptability to Technological Changes</li>
          </ul>
        </div>

        <div className="mt-8">
        
        </div>
      </div>

      
    </div>
    <Footer/>
    </div>
    
   
  );
}

export default AboutUsPage;
