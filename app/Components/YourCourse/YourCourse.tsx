"use client"; // This is a client component

import { useState, useEffect } from "react";
import CourseDetails from './../CourseDetails/CourseDetails';


const YourCourse = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Yousufjoy/fydpData1/main/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data.courses);
    
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  

  

  return (
    <>
      <div className="md:flex  md:justify-between  md:pr-[180px] ">
        <h1 className=" my-[30px] text-black font-lato text-25 font-bold leading-26 text-[21px] pl-[20px] mt-[40px] text-center md:text-start uppercase">
          Your Courses
        </h1>

        <div className="py-4 md:pt-3 md:mr-6 ml-[150px]  md:mt-[20px]  ">
          <button className="btn btn-active btn-primary ">View All</button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 md:ml-[20px] ml-[20px]">
        {data.map((item) => (
        <CourseDetails key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default YourCourse;
