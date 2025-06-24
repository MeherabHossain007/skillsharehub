"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
import Hero from "@/components/CourseHome/Hero";
import CourseSearchSection from "@/components/CourseHome/SeachCourse";
import CourseHighlightSection from "@/components/CourseHome/CourseHighlight";
import LiveCourseHighlight from "@/components/CourseHome/LiveCourseHighlight";
import { BestInstructors } from "@/components/CourseHome/BestInstructors";
import Motivation from "@/components/CourseHome/Motivation";
function HomePage() {
  const [course, setCourse] = useState([]);

  const instructors = [
    {
      id: 1,
      name: "Alex Johnson",
      profession: "Senior UI/UX Designer",
      image: "/instructor1.jpg",
      rating: 4.8,
      courses: 12,
      status: "online",
    },
    {
      id: 2,
      name: "Sarah Williams",
      profession: "Full Stack Developer",
      image: "/instructor2.jpg",
      rating: 4.9,
      courses: 18,
      status: "online",
    },
    {
      id: 3,
      name: "Michael Chen",
      profession: "Data Science Expert",
      image: "/instructor3.jpg",
      rating: 4.7,
      courses: 9,
      status: "offline",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      profession: "Digital Marketing Specialist",
      image: "/instructor4.jpg",
      rating: 4.6,
      courses: 14,
      status: "online",
    },
  ];

  useEffect(() => {
    const CourseData = async () => {
      let { data, error } = await supabase.from("course").select("*");
      if (data) {
        setCourse(data);
        console.log(data);
      } else {
        console.log(error);
      }
    };
    CourseData();
  }, []);
  return (
    <div>
      <Hero />
      <CourseSearchSection />
      <CourseHighlightSection title={"Pogroming"} />
      <CourseHighlightSection title={"Design"} />
      <LiveCourseHighlight />
      <BestInstructors
        instructors={instructors}
        title="Top Rated Instructors"
        description="Learn directly from industry experts with years of real-world experience"
        buttonText="Book a Session"
      />
      <Motivation/>
    </div>
  );
}

export default HomePage;
