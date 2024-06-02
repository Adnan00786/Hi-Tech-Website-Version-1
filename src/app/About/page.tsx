import Footer from '@/components/Footer';
import aboutImage from '@/assets/about_image.jpg';
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-900 text-white py-16" id="about">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="lg:w-1/2 w-full mb-8">
            <Image src={aboutImage} alt="About" width={600} height={400} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-900">About Us</h2>
            <p className="mb-4 text-lg font-light leading-relaxed">
              Ali Industries is dedicated to delivering top-notch, efficient, and environmentally friendly vehicles at affordable prices. They prioritize innovation and incorporate the latest technologies to ensure high performance and reliability. With a strong commitment to sustainability, they actively develop eco-friendly solutions such as electric and hybrid vehicles, aiming to reduce the environmental impact of transportation. By offering effective prices, Ali Industries aims to make their vehicles accessible to a wide range of customers, contributing to the improvement of the transport sector as a whole.
            </p>
            <p className="text-lg font-light leading-relaxed">
              The first product we are launching is Softron The Electric Scooter.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default About;



