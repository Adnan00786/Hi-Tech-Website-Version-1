"use client";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { SparklesCore } from "@/components/ui/sparkles"
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';


function Contact() {
  return (
    <>
    <Navbar/>
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="py-10 text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Contact Us
      </h1>
      <div className="flex flex-wrap items-center justify-center">
    {/* <!-- Call Icon --> */}
    <div className="flex items-center mx-4 my-2">
        <FiPhone size={24} />
        <span className="ml-2 text-2xl">Phone +1234567890</span>
    </div>

    {/* <!-- Mail Icon --> */}
    <div className="flex items-center mx-4 my-2">
        <FiMail size={24} />
        <span className="ml-2 text-2xl">Email: example@example.com</span>
    </div>
    {/* <!-- Location Icon --> */}
    <div className="py-10 flex items-center mx-4 my-2">
        <FiMapPin size={44} />
        <span className="ml-2 text-2xl">Location: Hi-Tech Copier Solution Shop No: 3, 1-766, near Bharat petrol, Tirmala Arcade, Nimboliadda, Kachiguda, Hyderabad, Telangana 500027</span>
    </div>
</div>

    </div>
    <Footer/>
    </>
  )
}

export default Contact




