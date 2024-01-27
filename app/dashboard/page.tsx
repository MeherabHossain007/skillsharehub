import React from "react";

// import OnlineCourses from "./../Components/OnlineCourses/OnlineCourses";
import warning from "../../assets/images/warning.png";
import announcement from "../../assets/images/announce.png";

import Heading from '../../components/Heading';
import Profile from '../../components/Profile';
import YourCourse from '../../components/YourCourse';
import OnlineCourses from '../../components/OnlineCourses';
import Sessions from '../../components/Sessions';
const myCoursePage = () => {
  return (
    <div className="md:w-[1800px] mx-auto ">
    
      <Heading title={"Read before you start"} picture={warning}></Heading>
      <Heading  title={"Announcement title"} picture={announcement}></Heading> 
      <Profile></Profile>
      <YourCourse></YourCourse>
     
      <OnlineCourses></OnlineCourses>
     <Sessions></Sessions>
    </div>
  );
};

export default myCoursePage;
