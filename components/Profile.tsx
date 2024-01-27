"use client"; // This is a client component

import Image from "next/image";
import icon1 from "../assets/images/Trophy.png";
import icon2 from "../assets/images/Diploma.png";

import icon3 from "../assets/images/Creative Commons.png";
import avatar from "../assets/images/avatar.png"
import weather from "../assets/images/weather.png"
import moon from "../assets/images/moon.png"
import { useEffect, useState } from "react";

const Profile = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-7 md:ml-[20px]">
      <h1 className="text-black font-lato text-25 font-bold leading-26 text-[25px] pl-[0] text-center px-[10px] md:text-start ">
        Welcome Back <span className="text-[#5A66FF]"> Samia Haque</span>, Ready
        For Your Lesson?
      </h1>

      <div className="md:flex  md:ml-[40px]">
        <div className="md:w-[575px] md:h-[193px] flex mt-[30px] rounded-3xl bg-white shadow-lg border">
          <div className=" pt-[30px] md:px-[50px] px-[35px]">
            <Image src={avatar} alt="Profile picture" />
          </div>
          <div className="py-[50px] ">
            <h3 className="text-[24px] font-medium">
              Samia Haque
              <span className="text-[18px] border rounded-lg py-[3px] px-[10px] bg-[#5A66FF] text-white">
                PRO
              </span>
            </h3>
            <p className=" text-gray-500"> Student </p>
            <div className="flex  py-4 justify-between md:w-[300px]">
              <span className="flex  ">
                <Image src={icon1} alt="" />
                <span className="pt-[5px] px-[10px] font-bold "> 12</span>
              </span>
              <span>
                <span className="flex">
                  <Image src={icon2} alt="" />
                  <span className="pt-[5px] px-[10px] font-bold "> 05</span>
                </span>
              </span>
              <span>
                <span className="flex">
                  <Image src={icon3} alt="" />
                  <span className="pt-[5px] px-[10px] font-bold "> 57</span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="relative ">
          <div className="md:mt-[30px] md:ml-[100px] ">
            <Image className="rounded-xl" src={weather} alt="" />
          </div>
          <div className="absolute top-[145px] left-[130px] md:ml-[20px]">
            <Image
              className="absolute top-[-110px] right-[100px] hidden md:block"
              src={moon}
              alt=""
            />
            <p className="text-[36px] font-semibold text-white md:block hidden">
              {currentDateTime.toLocaleTimeString()}
            </p>
            <p className=" text-gray-300 md:mt-[-80px] text-[20px] md:block hidden">
              {currentDateTime.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
