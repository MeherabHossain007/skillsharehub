"use client";
import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import { supabase } from "@/utils/supabase/client";
function HomePage() {
  const [course, setCourse] = useState([]);

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
      <Hero course={course} />
    </div>
  );
}

export default HomePage;
