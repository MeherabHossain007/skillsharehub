/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from "next/image";
import React from "react";
import bwarn from "../../public/bwarn.png";
import world from "../../public/world.png";
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
import video from "../../public/session/video.svg";
import code from "../../public/session/code.svg";
import dfile from "../../public/session/dfile.svg";
import dupdate from "../../public/session/dupdate.png";
import mf from "../../public/session/mfriendly.svg";
import inf from "../../public/session/infinity.png";
import { IoPeople } from "react-icons/io5";
import enroll from "../../public/enroll.png";
import in1 from "../../public/instructors/in1.png";
import star from "../../public/instructors/Stars.svg";
import circle1 from "../../public/instructors/circle.svg";
import circle2 from "../../public/instructors/Play circle filled.svg";
import rating from "../../public/instructors/Rate review.svg";

function CourseSadab() {
  return (
    <>
      {/* Hero section start  */}

      <div
        className="bg-cover bg-no-repeat bg-center h-[500px] flex flex-col justify-center gap-y-5 px-16"
        style={{ backgroundImage: `url('/balls.png')` }}
      >
        {/* 1 */}
        <div>
          <p className="text-white text-3xl font-semibold ">
            The Complete 2023 Web Development <br /> Bootcamp
          </p>
          <p className="text-neutral-400 font-extralight">
            Become a Full-Stack Web Developer with just ONE course. HTML, CSS,{" "}
            <br /> Javascript, Node, React, PostgreSQL, Web3 and DApps
          </p>
        </div>
        {/* 2 */}
        <div>
          <p className="text-white">Created by Jon Kantner</p>
        </div>
        {/* 3 */}
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

      {/* Hero section end  */}

      {/* main body start  */}

      <div className="my-20 flex justify-around">
        {/* 1 */}
        <div className="">
          <div className="border rounded-lg w-[800px] h-[400px] flex flex-col justify-center p-8 gap-y-5 ">
            <p className="font-bold">What you'll learn</p>

            <div className="flex justify-between gap-10">
              <div>
                <ul className="list-disc">
                  <li>
                    Build 16 web development projects for your portfolio,
                    <br /> ready to apply for junior developer jobs.
                  </li>
                  <li>
                    Learn the latest technologies, including Javascript,
                    <br /> React, Node and even Web3 development.
                  </li>
                  <li>
                    After the course you will be able to build ANY website
                    <br /> you want.
                  </li>
                  <li>
                    Build fully-fledged websites and web apps for your <br />{" "}
                    startup or business.
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-disc">
                  <li>
                    Learn the latest technologies, including Javascript,
                    <br /> React, Node and even Web3 development.
                  </li>
                  <li>
                    After the course you will be able to build ANY <br />{" "}
                    website you want.
                  </li>
                  <li>
                    Build fully-fledged websites and web apps for your <br />{" "}
                    startup or business.
                  </li>
                  <li>Work as a freelance web developer.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 mb-5">
            <p className="font-bold ">Course content</p>
            <p className="text-sm">
              44 sections • 380 lectures • 62h 49m total length
            </p>
          </div>

          {/* collapse start */}
          <div>
            {/* 1 */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border  rounded-b-none"
            >
              <div className="collapse-title text-xl font-medium">
                <p>Module 01 : Welcome To Web Course</p>
                <p className="text-sm text-gray-500">1 h 45m • 10/10</p>
              </div>
              <div className="collapse-content space-y-2">
                {/* 1  */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image src={video} alt="video" />
                    <p>What You'll Get in This Course</p>
                  </div>
                  <div>
                    <p>03:08</p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image src={dfile} alt="video" />
                    <p>Download the Course Syllabus</p>
                  </div>
                  <div>
                    <p>05:27</p>
                  </div>
                </div>

                {/* 3 */}

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image src={video} alt="video" />
                    <p>How Does the Internet Actually Work?</p>
                  </div>
                  <div>
                    <p>02:19</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border  rounded-none"
            >
              <div className="collapse-title text-xl font-medium">
                <p>Module 02 : Welcome To Web Course</p>
                <p className="text-sm text-gray-500">1 h 45m • 10/10</p>
              </div>
              <div className="collapse-content space-y-2">
                {/* 1  */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image src={video} alt="video" />
                    <p>What You'll Get in This Course</p>
                  </div>
                  <div>
                    <p>03:08</p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image src={dfile} alt="video" />
                    <p>Download the Course Syllabus</p>
                  </div>
                  <div>
                    <p>05:27</p>
                  </div>
                </div>

                {/* 3 */}

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image src={video} alt="video" />
                    <p>How Does the Internet Actually Work?</p>
                  </div>
                  <div>
                    <p>02:19</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border  rounded-t-none"
            >
              <div className="collapse-title text-xl font-medium">
                <p>Module 03 : Welcome To Web Course</p>
                <p className="text-sm text-gray-500">1 h 45m • 10/10</p>
              </div>
              <div className="collapse-content space-y-2">
                {/* 1  */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image src={video} alt="video" />
                    <p>What You'll Get in This Course</p>
                  </div>
                  <div>
                    <p>03:08</p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image src={dfile} alt="video" />
                    <p>Download the Course Syllabus</p>
                  </div>
                  <div>
                    <p>05:27</p>
                  </div>
                </div>

                {/* 3 */}

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Image src={video} alt="video" />
                    <p>How Does the Internet Actually Work?</p>
                  </div>
                  <div>
                    <p>02:19</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* collapse end  */}

          {/* requirements starts */}

          <div className="my-10">
            <div>
              <p className="font-bold ">Requirements</p>
            </div>
            <div className="mt-2">
              <ul className="list-disc space-y-2 font-light">
                <li>
                  No programming experience needed - I'll teach you everything
                  you need to know
                </li>
                <li>A computer with access to the internet</li>
                <li>
                  I'll walk you through, step-by-step how to get all the
                  software installed and set up
                </li>
              </ul>
            </div>
          </div>

          {/* requirements ends */}

          {/* description starts  */}

          <div>
            <p className="font-bold mt-10 mb-5">Description</p>
            <div tabIndex={0} className="collapse collapse-arrow border ">
              <div className="collapse-title text-md  font-medium ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
                Aperiam adipisci, laboriosam culpa, tenetur <br /> quibusdam
                rerum ab odio, commodi officiis incidunt <br /> assumenda. Ad
                quia rerum laudantium alias quidem, <br /> ut nam nostrum quis
                corrupti suscipit delectus similique <br /> modi, quaerat sequi
                distinctio neque optio minima! <br /> Nihil corrupti aspernatur
                facilis pariatur quod, <br /> magnam voluptatum.
              </div>
              <div className="collapse-content font-medium">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident quisquam, <br /> necessitatibus sunt voluptas optio
                  iusto esse tenetur laborum est pariatur <br /> autem ipsa
                  nihil, aperiam sit, maxime doloremque labore? Earum, iste.
                </p>
              </div>
            </div>
          </div>
          {/* description end  */}
        </div>
        {/* 2 */}
        <div className="">
          <div className="rounded-xl shadow-xl  w-[400px] h-[850px] flex flex-col justify-evenly items-center -mt-72 bg-white">
            <Image src={enroll} alt="enroll" className="w-[80%]" />
            {/* 1 */}
            <div className="flex gap-4">
              <div className="w-44 h-8 bg-[#D9E3FF] flex items-center justify-center gap-2 rounded-lg   ">
                <IoMdTimer className="text-[#5A66FF]" />
                <p className="text-[#5A66FF]">10 days left</p>
              </div>
              <div className="w-44 h-8 bg-[#F1E2FC] flex items-center justify-center gap-2 rounded-lg   ">
                <IoPeople className="text-[#A144FF]" />
                <p className="text-[#A144FF]">70 Seats Left</p>
              </div>
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
                <button className="bg-[#5a66ff] px-24 py-3 font-semibold text-white rounded-3xl">
                  Add To Cart
                </button>
              </div>

              <div className="border border-black w-16 h-16 flex items-center justify-center bg-black rounded-full">
                <MdFavoriteBorder size={50} className="text-white" />
              </div>
            </div>

            {/* 3.1  */}

            <div>
              <button
                className="bg-black px-36 py-3 font-semibold text-white rounded-3xl"
                onClick={() => (window.location.href = "/checkout")}
              >
                Enroll Now
              </button>
            </div>

            {/* 4 */}

            <div>
              <div className="-ml-14 my-1">
                <p className="font-semibold text-2xl">This Session includes:</p>
              </div>
              <div className="space-y-2">
                {/* 1 */}

                <div className="flex items-center gap-4">
                  <Image src={video} alt="video" />
                  <p className="font-extralight">62 hours on-demand video</p>
                </div>

                {/* 2 */}

                <div className="flex items-center gap-4">
                  <Image src={code} alt="code" />
                  <p className="font-extralight">7 coding exercises</p>
                </div>

                {/* 3 */}

                <div className="flex items-center gap-4">
                  <Image src={dfile} alt="code" />
                  <p className="font-extralight">66 articles</p>
                </div>

                {/* 4 */}

                <div className="flex items-center gap-4">
                  <Image src={dupdate} alt="code" />
                  <p className="font-extralight">118 downloadable resources</p>
                </div>

                {/* 5  */}

                <div className="flex items-center gap-4">
                  <Image src={mf} alt="code" />
                  <p className="font-extralight">Access on mobile and TV</p>
                </div>

                {/* 6 */}

                <div className="flex items-center gap-4">
                  <Image src={inf} alt="code" />
                  <p className="font-extralight">Full lifetime access</p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-10">
            <div className=" rounded-xl shadow-xl h-[400px] flex flex-col justify-center items-center">
              <div className=" w-80 h-96">
                {/* 1 */}
                <div>
                  <p className="font-semibold">Instructor</p>
                </div>

                {/* 2 */}

                <div className="my-5 flex flex-col gap-5">
                  {/* 1 */}
                  <div>
                    <p className="text-[#5A66FF] font-light">Jon Kantner</p>
                    <p className="font-light">Developer and Lead Instructor</p>
                  </div>

                  {/* 2 */}
                  <div className="flex items-center">
                    {/* 1 */}
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <Image src={in1} alt="instructor" />
                      </div>
                    </div>
                    {/* 2 */}

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Image src={star} alt="star" />
                        <p>4.7 Instructor Rating</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image src={circle1} alt="circle" />
                        <p>24356999 Students</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image src={circle2} alt="circle" />
                        <p>5 Courses</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image src={rating} alt="rating" />
                        <p>7445213 Reviews</p>
                      </div>
                    </div>
                  </div>

                  {/* 3 */}
                  <div>
                    <p className="font-light">
                      I'm Jon Kantner, I'm a developer with a passion for
                      teaching. I'm the lead instructor at the London App
                      Brewery, London's leading Programming Bootcamp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main body end  */}
    </>
  );
}

export default CourseSadab;
