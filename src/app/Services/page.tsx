'use client';
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import React from "react";
import courseData from "@/data/services.json"; // Add this import for service data
import Footer from "@/components/Footer";

interface Course {
    id: number,
    title: string,
    description: string,
}

function Services() {
    const courses = courseData.courses;

    return (
        <>
            <Navbar/>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.37,
                        duration: 1.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-7xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Services<br />
                </motion.h1>
            </LampContainer>
            <FeaturedCourses courses={courses} />
            <Footer/>
        </>
    );
}

export default Services;

function FeaturedCourses({ courses }: { courses: Course[] }) {
    return (
        <div className="py-12 bg-gray-900">
            <div className="text-center">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Experience amazing Service facilities</p>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {courses.map((course:Course)=> (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-indigo-9000 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-3xl font-sans font-bold text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className="text-xl text-neutral-800 dark:text-neutral-600 flex-grow">{course.description}</p>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                {/* Additional content if needed */}
            </div>
        </div>
    );
}
