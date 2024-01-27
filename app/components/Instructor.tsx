/* eslint-disable react/no-unescaped-entities */
import React from "react";
import balls from "../../public/balls.png";
import Image from "next/image";
import bwarn from "../../public/bwarn.png";
import world from "../../public/world.png";
import ins from "../../public/instructors/ins.png";
import { IoMdTimer } from "react-icons/io";


import {
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaRegBookmark,
} from "react-icons/fa";
import { url } from "inspector";
import { MdFavoriteBorder } from "react-icons/md";
import video from '../../public/session/video.svg'
import code from '../../public/session/code.svg'
import dfile from '../../public/session/dfile.svg'
import dupdate from '../../public/session/dupdate.png'
import mf from '../../public/session/mfriendly.svg'
import inf from '../../public/session/infinity.png'


function Instructor() {
  const elements = [
    {
      image: "/assets/ppro1.png",
      course_name: "Web Development",
      duration: "2h 3m",
      title: "Motion Graphics: Create a Nice Typography Animation",
      course_tutor: "Aga Naplocha",
    },

    {
      image: "/assets/ppro2.png",
      course_name: "Web Development",
      duration: "2h 3m",
      title: "Motion Graphics: Create a Nice Typography Animation",
      course_tutor: "Aga Naplocha",
    },

    {
      image: "/assets/ppro3.png",
      course_name: "Web Development",
      duration: "2h 3m",
      title: "Motion Graphics: Create a Nice Typography Animation",
      course_tutor: "Aga Naplocha",
    },

    {
      image: "/assets/ppro4.png",
      course_name: "Web Development",
      duration: "2h 3m",
      title: "Motion Graphics: Create a Nice Typography Animation",
      course_tutor: "Aga Naplocha",
    },
  ];
  return (
    <>
      {/* hero section start  */}
      <div>
        <div
          className="bg-cover bg-no-repeat bg-center h-[500px] flex  justify-around items-center"
          style={{ backgroundImage: `url('/balls.png')` }}
        >
          {/* 1 */}
          <div className="space-y-10">
            {/* 1 */}
            <div className="space-y-1">
              <p className="text-[#5A66FF]">Instructor</p>
              <p className="text-3xl font-bold text-white">Dr. Jon Kantner</p>
              <p className="text-gray-400">Developer and Lead Instructor</p>
            </div>
            {/* 2 */}
            <div className="space-y-1">
              <div>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>

              <p className="text-white">1,144,346 students</p>

              <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                  <Image src={bwarn} alt="warn" />
                  <p className="text-white">Last updated 11/2023</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={world} alt="world" />
                  <p className="text-white">English</p>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="">
            <div className="border border-white w-96 h-52 bg-white flex justify-around items-center rounded-lg">
              <div>
                <Image
                  src={ins}
                  alt="ins"
                  height={150}
                  width={150}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <div className="border border-black w-40 h-8 flex items-center justify-center gap-2 rounded-md">
                  <FaTwitter />
                  <p className="font-medium">Twitter</p>
                </div>
                <div className="border border-black w-40 h-8 flex items-center justify-center gap-2 rounded-md">
                  <FaWhatsapp />
                  <p className="font-medium">Whatsapp</p>
                </div>
                <div className="border border-black w-40 h-8 flex items-center justify-center gap-2 rounded-md">
                  <FaInstagram />
                  <p className="font-medium">Instagram</p>
                </div>
                <div className="border border-black w-40 h-8 flex items-center justify-center gap-2 rounded-md">
                  <FaTelegram />
                  <p className="font-medium">Telegram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hero section end  */}

      {/* main body start  */}

      <div className="my-20 flex justify-around">
        {/* 1 */}
        <div className="">
          <div className="border rounded-lg w-[800px] h-[400px] flex flex-col justify-center p-8 gap-y-5 ">
            <p className="font-bold">About me</p>
            <p className="font-light text-justify">
              I'm Angela, I'm a developer with a passion for teaching. I'm the
              lead instructor at the London App Brewery, London's leading
              Programming Bootcamp. I've helped hundreds of thousands of
              students learn to code and change their lives by becoming a
              developer. I've been invited by companies such as Twitter,
              Facebook and Google to teach their employees. My first foray into
              programming was when I was just 12 years old, wanting to build my
              own Space Invader game. Since then, I've made hundred of websites,
              apps and games. But most importantly, I realised that my greatest
              passion is teaching. I spend most of my time researching how to
              make learnin g to code fun and make hard concepts easy to
              understand. I apply everything I discover into my bootcamp
              courses. In my courses, you'll find lots of geeky humour but also
              lots of explanations and animations to make sure everything is
              easy to understand. I'll be there for you every step of the way.
            </p>
          </div>

          <p className="font-bold my-10">My courses(7)</p>

          <div className="grid grid-cols-2 gap-10">
            {elements.map((element, i) => (
              <div key={i} className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <Image
                    src={element.image}
                    alt="Shoes"
                    width={400}
                    height={400}
                  />
                </figure>
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="card-title text-[#0647EE]">
                      {element.course_name}
                    </h2>
                    <h2 className="card-title text-[#0647EE]">
                      {element.duration}
                    </h2>
                  </div>
                  <p className="font-bold">{element.title}</p>
                  <div className="card-actions items-center justify-between mt-5">
                    <h2 className="card-title text-[#797878]">
                      {element.course_tutor}
                    </h2>
                    <FaRegBookmark className="cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 2 */}
        <div className="">
          <div className="rounded-xl shadow-xl  w-[400px] h-[450px] flex flex-col justify-evenly items-center">
            {/* 1 */}
            <div className="w-44 h-8 bg-[#D9E3FF] flex items-center justify-evenly rounded-lg   -ml-48">
              <IoMdTimer className="text-[#5A66FF]" />
              <p className="text-[#5A66FF]">Per Session Charge</p>

            </div>
           

            {/* 2 */}

            <div className="flex items-center gap-4">
              <div>
                <p className="text-4xl font-semibold"> $29.65 /hour</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-400 line-through">$99.99</p>
                <p className="text-gray-400">50% Off</p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-center gap-4">
              <div>
                <button className="bg-[#5a66ff] px-20 py-3 font-semibold text-white rounded-3xl">
                  Join Session Now
                </button>
              </div>

              <div className="border border-black w-16 h-16 flex items-center justify-center bg-black rounded-full">
                <MdFavoriteBorder size={50} className="text-white" />
              </div>
            </div>

            {/* 4 */}

            <div>
              <div className="-ml-14 my-1">

              <p className="font-semibold text-2xl">This Session includes:</p>
              </div>
              <div className="space-y-2">

              {/* 1 */}

              <div className="flex items-center gap-4">

                <Image src={video} alt="video"/>
                <p className="font-extralight">62 hours on-demand video</p>

              </div>

              {/* 2 */}

              <div className="flex items-center gap-4">
                <Image src={code} alt="code"/>
                <p className="font-extralight">7 coding exercises</p>
              </div>

              {/* 3 */}

              <div className="flex items-center gap-4">
                <Image src={dfile} alt="code"/>
                <p className="font-extralight">66 articles</p>
              </div>

              {/* 4 */}

              <div className="flex items-center gap-4">
                <Image src={dupdate} alt="code"/>
                <p className="font-extralight">118 downloadable resources</p>
              </div>

              {/* 5  */}

              <div className="flex items-center gap-4">
                <Image src={mf} alt="code"/>
                <p className="font-extralight">Access on mobile and TV</p>
              </div>

              {/* 6 */}

              
              <div className="flex items-center gap-4">
                <Image src={inf} alt="code"/>
                <p className="font-extralight">Full lifetime access</p>
              </div>

              </div>

            </div>
          </div>

  

        </div>
      </div>
      {/* main body end */}
    </>
  );
}

export default Instructor;
