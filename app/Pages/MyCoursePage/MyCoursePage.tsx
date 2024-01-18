import React from 'react';
import Heading from './../../Components/Heading/Heading';
import warning from "../../images/warning.png"
import announcement from "../../images/announce.png"
import Profile from './../../Components/Profile/Profile';
import YourCourse from './../../Components/YourCourse/YourCourse';

const MyCoursePage = () => {
    return (
        <div>
          <Heading  title={"Read before you start"} picture={warning}></Heading>
          <Heading title={"Announcement  title"} picture={announcement}></Heading>
          <Profile></Profile>
          <YourCourse></YourCourse>
        </div>
    );
};

export default MyCoursePage;