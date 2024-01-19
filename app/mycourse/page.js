import React from "react";
import Heading from "./../Components/Heading/Heading";
import Profile from "./../Components/Profile/Profile";
import YourCourse from "./../Components/YourCourse/YourCourse";
import OnlineCourses from "./../Components/OnlineCourses/OnlineCourses";
import warning from "../images/warning.png";
import announcement from "../images/announce.png";
const myCoursePage = () => {
  return (
    <div className="md:w-[1800px] mx-auto ">
      <Heading title={"Read before you start"} picture={warning}></Heading>
      <Heading title={"Announcement  title"} picture={announcement}></Heading>
      <Profile></Profile>
      <YourCourse></YourCourse>
      <OnlineCourses></OnlineCourses>
    </div>
  );
};

export default myCoursePage;
