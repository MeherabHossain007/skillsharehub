"use client";
import React, { useEffect, useState } from "react";

// import OnlineCourses from "./../Components/OnlineCourses/OnlineCourses";
import warning from "../../assets/images/warning.png";
import announcement from "../../assets/images/announce.png";
import Heading from "../../components/Heading";
import Profile from "../../components/Profile";
import YourCourse from "../../components/YourCourse";
import OnlineCourses from "../../components/OnlineCourses";
import Sessions from "../../components/Sessions";
import Navbar from "@/components/layout/Navbar";
import { supabase } from "@/utils/supabase/client";

interface User {
  id: number;
  uid: string;
  email: string;
  name: string;
  courses: JSON;
  sessions: JSON;
  achivements: string;
  certificates: string;
  credit: string;
}

const MyCoursePage = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const Session = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data) {
        console.log(data);
        let { data: user, error } = await supabase
          .from("user")
          .select("*")
          .eq("uid", data.session.user.id);
        if (user) {
          setProfile(user);
          console.log(user);
        } else {
          console.log(error);
        }
      } else {
        console.log(error);
      }
    };
    Session();
  }, []);

  return (
    <div className="md:w-[1800px] mx-auto ">
      <Navbar></Navbar>
      <Heading title={"Read before you start"} picture={warning}></Heading>
      <Heading title={"Announcement title"} picture={announcement}></Heading>
      {profile.map((user: User) => (
        <Profile
          key={user.id}
          name={user.name}
          achivement={user.achivements}
          certificate={user.certificates}
          credit={user.credit}
        ></Profile>
      ))}
      <YourCourse></YourCourse>
      <OnlineCourses></OnlineCourses>
      <Sessions></Sessions>
    </div>
  );
};

export default MyCoursePage;
