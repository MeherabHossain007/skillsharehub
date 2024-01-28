import { url } from "inspector";
import Image from "next/image";
import React from "react";
import herobi from "../../public/herobi.png";
import herobi2 from "../../public/herobi2.png";
import Link from "next/link";
import hero1 from "../../public/hero1.png";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { BiVector } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import Pro from "../../public/pro.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import ocbg1 from "../../public/ocbg1.jpg";
import { FaBook } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import arrows from "../../public/arrows.png";
import vector from "../../public/vector.png";
import rect from "../../public/Rectangle.png";
import asset11 from "../../public/Asset11.png";
import herologo from "../../public/herologo.png";
import { IoIosNotifications } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import balls2 from "../../public/balls2.png";

import Footer from "./FooterSadab";
function Hero({ course }) {
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
  const elements2 = [
    {
      image: "/assets/dpro1.png",
      course_name: "Web Development",
      duration: "2h 3m",
      title: "Motion Graphics: Create a Nice Typography Animation",
      course_tutor: "Aga Naplocha",
    },

    {
      image: "/assets/dpro2.png",
      course_name: "Web Development",
      duration: "2h 3m",
      title: "Motion Graphics: Create a Nice Typography Animation",
      course_tutor: "Aga Naplocha",
    },

    {
      image: "/assets/dpro3.png",
      course_name: "Web Development",
      duration: "2h 3m",
      title: "Motion Graphics: Create a Nice Typography Animation",
      course_tutor: "Aga Naplocha",
    },

    {
      image: "/assets/dpro4.png",
      course_name: "Web Development",
      duration: "2h 3m",
      title: "Motion Graphics: Create a Nice Typography Animation",
      course_tutor: "Aga Naplocha",
    },
  ];

  const elements3 = [
    {
      image: "/assets/dpro1.png",
      course_name: "Web Development",
      date: "From 9 October",
      title: "Motion Graphics: Create a Nice Typography Animation",
      price: "$36",
      lesson: "Lesson : 12",
      student: "student : 198",
      level: "Beginner",
    },
    {
      image: "/assets/dpro2.png",
      course_name: "Web Development",
      date: "From 9 October",
      title: "Motion Graphics: Create a Nice Typography Animation",
      price: "$36",
      lesson: "Lesson : 12",
      student: "student : 198",
      level: "Beginner",
    },
    {
      image: "/assets/dpro3.png",
      course_name: "Web Development",
      date: "From 9 October",
      title: "Motion Graphics: Create a Nice Typography Animation",
      price: "$36",
      lesson: "Lesson : 12",
      student: "student : 198",
      level: "Beginner",
    },
  ];

  const elements4 = [
    {
      image: "/instructors/in1.png",
      name: "Jon Kantner",
      profession: "Lawyer",
    },
    {
      image: "/instructors/in2.png",
      name: "Jon Kantner",
      profession: "Lawyer",
    },
    {
      image: "/instructors/in3.png",
      name: "Jon Kantner",
      profession: "Lawyer",
    },
    {
      image: "/instructors/in4.png",
      name: "Jon Kantner",
      profession: "Lawyer",
    },
    {
      image: "/instructors/in5.png",
      name: "Jon Kantner",
      profession: "Lawyer",
    },
    {
      image: "/instructors/in6.png",
      name: "Jon Kantner",
      profession: "Lawyer",
    },
  ];
  return (
    <>
      <header>
        <div className="relative w-full">
          <div className="absolute -z-10 w-full">
            <Image src={herobi} alt="back" className="w-full bg-no-repeat " />
            <Image src={herobi2} alt="back" className="w-full bg-no-repeat " />
          </div>
          <div className="flex justify-between items-center p-4">
            <div>
              <Image src={herologo} alt="logo" />
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5">
                {/* 1  */}
                <div className="space-x-4">
                  <Link href="/" className="text-white">
                    Sessions
                  </Link>
                  <Link href="/" className="text-white">
                    Become A Teacher
                  </Link>
                  <Link href="/" className="text-white">
                    My Classes
                  </Link>
                </div>
                {/* 2  */}
                <div className="flex items-center gap-2">
                  <IoIosNotifications className="text-white  h-5" />
                  <FaCartShopping className="text-white  h-4" />
                </div>
              </div>

              {/* 3  */}

              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>

              {/* 4  */}

              <div>
                <button className="bg-[#5a66ff] px-4 py-2 text-white rounded-3xl">
                  Get Premium
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center -mt-20 p-4 ">
            <div>
              <p className="text-white text-6xl font-bold">
                Find The Best Online <br /> Course & Learn For <br /> Your
                Future
              </p>
              <div className="flex items-center gap-32 my-5">
                <div>
                  <button className="bg-[#5a66ff] px-4 py-2  text-white rounded-full">
                    Get Started
                  </button>
                </div>

                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="w-12 bg-neutral text-white">
                      <span>+99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image src={hero1} alt="hero1" />
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* 1  */}

        <div className="p-10 my-20 flex justify-center items-center gap-20">
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex  w-[67px] h-[67px]  justify-center items-center bg-green-50 rounded-md">
              <HiOutlineCodeBracket className="text-[#009E68]" size={50} />
            </div>
            <div className="hidden sm:flex  w-[115px] h-[65px]  justify-center items-center bg-gray-50 rounded-md">
              <p>Python</p>
            </div>
            <div className="hidden sm:flex  w-[115px] h-[65px]  justify-center items-center bg-gray-50 rounded-md">
              <p>React</p>
            </div>
            <div className="hidden sm:flex  w-[115px] h-[65px]  justify-center items-center bg-gray-50 rounded-md">
              <p>Unity</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex  w-[67px] h-[67px]  justify-center items-center bg-violet-50 rounded-md">
              <BiVector className="text-[#9E5CF2]" size={50} />
            </div>
            <div className="hidden sm:flex  w-[115px] h-[65px]  justify-center items-center bg-gray-50 rounded-md">
              <p>UI & UX</p>
            </div>
            <div className="hidden sm:flex  w-[115px] h-[65px]  justify-center items-center bg-gray-50 rounded-md">
              <p>Vector</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex  w-[67px] h-[67px]  justify-center items-center bg-red-50 rounded-md">
              <IoVideocamOutline className="text-[#FF3C31]" size={50} />
            </div>
            <div className="hidden sm:flex  w-[115px] h-[65px]  justify-center items-center bg-gray-50 rounded-md">
              <p>After Effects</p>
            </div>
            <div className="hidden sm:flex  w-[115px] h-[65px]  justify-center items-center bg-gray-50 rounded-md">
              <p>Lightroom</p>
            </div>
          </div>
        </div>

        {/* 2  */}

        <div>
          <p className="hidden sm:block  sm:text-center  font-bold  text-5xl leading-normal">
            Search among <span className="text-[#5A66FF]">58340</span> courses
            and <br /> find your favorite course
          </p>
        </div>

        {/* 3 */}

        <div className="my-5 sm:my-20  text-center">
          <div className="join">
            <select className="hidden sm:select select-bordered sm:border-2 sm:border-[#9E5CF2] join-item">
              <option disabled selected>
                Categories
              </option>
              <option>Python</option>
              <option>Lightroom</option>
              <option>UI?UX</option>
            </select>
            <div>
              <div>
                <input
                  className="w-44 h-12 border-2 border-[#9E5CF2] sm:w-64 sm:input input-bordered sm:border-2 sm:border-[#9E5CF2] join-item"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="indicator">
              <span className="indicator-item border-2 border-[#9E5CF2] badge badge-secondary">
                new
              </span>
              <button className="btn join-item border-2 border-[#9E5CF2]">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* 4 - Programming Pro  */}

        <div className="my-5 sm:my-20">
          {/* 1 */}
          <div className="flex items-center justify-between p-10">
            <div className="flex items-center gap-1">
              <p className="font-bold text-3xl">Programming</p>
              <Image src={Pro} alt="pro" />
            </div>
            <div>
              <button className="bg-[#5a66ff] px-4 py-2  text-white rounded-full flex items-center gap-2">
                Show more <FaArrowRightLong />
              </button>
            </div>
          </div>

          {/* 2 */}
          <div className="container mx-auto my-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {course.map((element, i) => (
                <div
                  key={i}
                  className="card w-96 bg-base-100 shadow-xl"
                  onClick={() => (window.location.href = "/course")}
                >
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
                        {element.tag}
                      </h2>
                      <h2 className="card-title text-[#0647EE]">
                        {element.ctime}
                      </h2>
                    </div>
                    <p className="font-bold">{element.title}</p>
                    <div className="card-actions items-center justify-between mt-5">
                      <h2 className="card-title text-[#797878]">
                        {element.author}
                      </h2>
                      <FaRegBookmark className="cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5 - designing pro  */}

        <div className="my-5 sm:my-20">
          {/* 1 */}
          <div className="flex items-center justify-between p-10">
            <div className="flex items-center gap-1">
              <p className="font-bold text-3xl">Designer</p>
              <Image src={Pro} alt="pro" />
            </div>
            <div>
              <button className="bg-[#5a66ff] px-4 py-2  text-white rounded-full flex items-center gap-2">
                Show more <FaArrowRightLong />
              </button>
            </div>
          </div>

          {/* 2 */}
          <div className="container mx-auto my-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {elements2.map((element2, i) => (
                <div key={i} className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <Image
                      src={element2.image}
                      alt="Shoes"
                      width={400}
                      height={400}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between">
                      <h2 className="card-title text-[#0647EE]">
                        {element2.course_name}
                      </h2>
                      <h2 className="card-title text-[#0647EE]">
                        {element2.duration}
                      </h2>
                    </div>
                    <p className="font-bold">{element2.title}</p>
                    <div className="card-actions items-center justify-between mt-5">
                      <h2 className="card-title text-[#797878]">
                        {element2.course_tutor}
                      </h2>
                      <FaRegBookmark className="cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6 - online course  */}

        <div className="mt-44">
          <div className="relative flex justify-center items-center">
            <div className="absolute -z-10 ">
              <Image
                src={balls2}
                alt="online course"
                width={1350}
                className="rounded-3xl"
              />
            </div>

            <div className="">
              <p className="text-4xl text-white font-semibold">
                Online Courses
              </p>
              <p className="text-white mt-3 font-medium">
                Find what fascinates you as you explore these online classes.
              </p>

              <button className="bg-white px-4 py-2  text-black rounded-full mt-10 font-bold">
                Explore Now
              </button>

              {/* card  */}

              <div className="mt-20 flex gap-10">
                {elements3.map((element, i) => (
                  <div
                    key={i}
                    className="relative card w-96 bg-white shadow-xl "
                  >
                    <figure>
                      <Image
                        src={element.image}
                        alt="Shoes"
                        width={400}
                        height={400}
                      />
                    </figure>
                    <div className="absolute w-36 text-center bg-[#5A66FF] rounded-md top-3 left-5">
                      <p className="text-white font-medium">{element.date}</p>
                    </div>

                    <div className="absolute top-0 right-0 mx-4 mt-44 w-10 rounded-full h-10 flex flex-col items-center justify-center bg-[#5A66FF]">
                      <p className="text-white font-medium">{element.price}</p>
                    </div>

                    <div className="card-body">
                      <h2 className="card-title text-[#5A66FF]">
                        {element.course_name}
                      </h2>
                      <p className="font-bold">{element.title}</p>
                      <div className="card-actions    mt-5">
                        <div className="flex items-center gap-2">
                          <FaBook className="text-[#5A66FF]" />
                          <p className="font-semibold text-sm">
                            {element.lesson}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <MdPeopleAlt className="text-[#5A66FF]" />
                          <p className="font-semibold text-sm">
                            {element.student}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <GiTrophy className="text-[#5A66FF]" />
                          <p className="font-semibold text-sm">
                            {element.level}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 7 - Best Instructor  */}
        <div className="container mx-auto">
          <div className="relative mt-80 mb-40 flex gap-32 ">
            {/* 1 */}

            <div className="">
              <p className="text-3xl font-bold">
                <span className="text-[#5A66FF]">Best</span> Instructors
              </p>

              <p className="mt-2">
                Get one to One Interaction with our best instructors and explore
                new way of learning
              </p>

              <div className="mt-32 ml-60  rotate-45 w-32 h-10 flex flex-col justify-center items-center rounded-3xl bg-[#F6F7FE]">
                <p className="font-medium text-[#5A69F2]">54 Instructor</p>
              </div>

              <div className="flex items-center gap-4">
                <button className="bg-[#080808] px-4 py-2  text-white rounded-full flex items-center gap-2">
                  Get Sessions Now <IoIosArrowForward />
                </button>
                <Image src={arrows} alt="arrow" />
              </div>
            </div>

            {/* 2 */}
            <div>
              <div className="absolute -z-10 ">
                <Image
                  src={vector}
                  alt="vector"
                  className="bg-gray-100 rounded-lg mt-10"
                />
              </div>

              <div className="flex flex-wrap justify-center  gap-3 -mt-20 ">
                {elements4.map((element, i) => (
                  <div key={i} className="card w-60 bg-base-100 shadow-xl ">
                    <figure>
                      <Image
                        src={element.image}
                        alt="Shoes"
                        width={400}
                        height={400}
                      />
                    </figure>
                    <div className="card-body">
                      <div className="card-actions">
                        <p className="text-sm text-gray-500 font-semibold">
                          {element.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          {element.profession}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 8 - before footer  */}

        <div className="relative mb-40 flex items-center justify-center gap-10">
          <div className="">
            <div className="absolute -z-10 ">
              <Image src={rect} alt="rect" className="" />
            </div>

            <p className="p-12">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              non omnis deserunt, animi debitis quia expedita necessitatibus
              harum eligendi, <br /> sunt quam fugiat voluptatibus quidem ipsa
              saepe quis enim iure sed praesentium veritatis minus placeat. Iure
              amet quos accusantium perferendis <br /> maiores nostrum
              asperiores nulla iste modi placeat. Officia nulla et debitis.
            </p>
          </div>

          <div>
            <Image src={asset11} alt="assets11" />
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Hero;
