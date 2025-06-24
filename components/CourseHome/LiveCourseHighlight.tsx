"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import LiveCourseCard from "../LiveCourseCard";

export default function LiveCourseHighlight() {
  // Sample course data - replace with your actual data
  const liveCourses = [
    {
      id: 1,
      title: "Motion Graphics: Create a Nice Typography Animation",
      category: "Web Development",
      date: "From 9 October",
      price: 36,
      rating: 4,
      lessons: 12,
      students: 198,
      level: "Beginner",
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Advanced React Development with TypeScript",
      category: "Web Development",
      date: "From 15 October",
      price: 45,
      rating: 4.8,
      lessons: 18,
      students: 156,
      level: "Advanced",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass for Beginners",
      category: "Design",
      date: "From 20 October",
      price: 29,
      rating: 4.6,
      lessons: 15,
      students: 234,
      level: "Beginner",
      image: "/api/placeholder/400/300",
    },
  ];

  const handleExploreNow = () => {
    console.log("Explore live courses");
    // Add your navigation logic here
  };

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/bglv.png"
          alt="Background"
          className="w-full h-full object-cover bg-[#2D2B2C]"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-start mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Online Courses
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Find what fascinates you as you explore these online classes.
          </p>

          <Button
            onClick={handleExploreNow}
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore Now
          </Button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {liveCourses.map((course) => (
            <div key={course.id} className="cursor-pointer">
              <LiveCourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
