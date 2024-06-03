import Footer from '@/components/Footer';
import aboutImage from '@/assets/about_image.jpg';
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-900 text-white py-16" id="About">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="lg:w-1/2 w-full mb-8">
            <Image src={aboutImage} alt="About" width={600} height={400} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            {/* <h1 className="text-5xl font-bold mb-4 text-green bg-clip-text bg-gradient-to-r from-black-600 to-red-900">About Us</h1> */}
            <h1 className="text-5xl font-bold mb-4 text-yellow-500">About Us</h1>
            <p className="mb-4 text-lg font-mono leading-relaxed">
            At Hi-Tech, we believe in perfecting performance, one print at a time. Our journey began with a passion for delivering excellence in Xerox machines and services, and today, we stand as a leading name in the industry, trusted by businesses and individuals alike.
            </p>
            <br></br>
            <h2 className='text-3xl font-bold mb-4 text-yellow-500'>Our Mission</h2>
            <p className="text-lg font-mono leading-relaxed">
             We are here to boost your productivity with the latest in Xerox solutions. Our goal is to exceed your expectations with high-quality products and unmatched service, ensuring every print reflects excellence.
            </p>
            <br></br>
            <h2 className='text-3xl font-bold mb-4 text-yellow-500'>Why Us?</h2>
            <p className="text-lg font-mono leading-relaxed">
            <strong>Expertise:</strong> Our experienced team brings deep knowledge to every aspect of Xerox sales and services.
            <br></br>
            <strong>Innovation:</strong> We stay ahead with cutting-edge technologies for maximum efficiency.
            <br></br>
            <strong>Customer Focus:</strong> Your satisfaction is key. We listen and tailor solutions to fit your needs seamlessly.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default About;



