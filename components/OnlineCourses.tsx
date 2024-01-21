import icon1 from "../app/images/icon1.0.png";
import icon2 from "../app/images/icon1.png";
import icon3 from "../app/images/icon2.png";
import online from "../app/images/online.png"
import instructor from "../app/images/instructor.png";

import concept from "../app/images/concept.png"
import Image from "next/image";

const OnlineCourses = () => {
  return (
    <div>
      <div className="md:flex  justify-between md:pr-[180px] ">
        <h1 className=" my-[30px] text-black font-lato text-25 font-bold leading-26 text-[21px] pl-[20px] mt-[40px] text-center md:text-start uppercase">
          Online Courses
        </h1>

        <div className="py-4 md:pt-3 md:mr-6 ml-[150px] ">
          <button className="btn btn-active btn-primary ">View All</button>
        </div>
      </div>

      <div className="md:flex justify-between ">
        <div className="card card-side bg-base-100 shadow-xl border md:w-[650px] md:ml-[20px] ">
          <figure>
            <Image
              className=" md:h-[270px] h-[200px] rounded-lg"
              src={online}
              alt="Online Course Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              ASO & Mobile App Marketing: Monetize Your App
            </h2>
            <div className="md:flex  justify-between pt-[20px]">
              <div className="flex  ">
                <Image className="w-[20px] h-[20px] " src={icon1} alt="Movie" />
                <p className="px-[10px]  pb-[20px] font-semibold">Lesson: 6</p>
              </div>
              <div className="flex  ">
                <Image className="w-[20px] h-[20px] " src={icon2} alt="Movie" />
                <p className="px-[10px]  pb-[20px] font-semibold">
                  Student: 26
                </p>
              </div>
              <div className="flex  ">
                <Image className="w-[20px] h-[20px] " src={icon3} alt="Movie" />
                <p className="px-[10px]  pb-[20px] font-semibold">Advanced</p>
              </div>
            </div>
            <div>
              <progress
                className="progress progress-primary md:w-[400px] w-56"
                value="70"
                max="100"
              ></progress>
              <div className="flex  ">
                <p> Progress: 70% </p>
                <p className="md:pl-[240px]">Day: 56</p>
              </div>
            </div>
            <div className="card-actions  pt-[10px] justify-between">
              <div>
                <Image className="rounded-lg" src={instructor} alt="Instructor" />
              </div>

              <div className="md:pr-[120px]">
                <p className="font-semibold">John Kantner</p>
                <p>Designer </p>
              </div>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <button className="btn btn-primary">Let's Go</button>
            </div>
          </div>
        </div>
        <div className="  mr-[10px]">
        <Image className="md:h-[360px] md:w-auto" src={concept} alt="" />

        </div>
        <div className="  mr-[200px]">
          {/* <img className="md:h-[360px]"  src={prog} /> */}
         
          <div className="md:w-[350px] w-[400px] rounded-2xl bg-gradient-to-r from-[#5A66FF] via-[#5A66FF] to-[#000] ">
          <h1 className=" text-[24px] font-semibold text-white text-center py-[20px]">Your Performane</h1>
            <div
              className="radial-progress bg-[#5A66FF] text-primary-content border-4 border-primary h-[250px] w-[250px] md:ml-[50px] my-[10px]"
              style={{ "--value": 50 }}
              role="progressbar"
            >
              50%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCourses;
