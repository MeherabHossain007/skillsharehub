import Image from "next/image";
import course from "../app/images/course.png";
import one from "../app/images/one.png";
import progress from "../app/images/progress.png";
import comunity from "../app/images/comunity.png";
import market from "../app/images/market.png";
import certi from "../app/images/certificate.png";
import tutor from "../app/images/tutor.png";

const HomeCoreFeature = () => {
  return (
    <div>
      <h1 className="text-center md:text-[48px] text-3xl font-semibold  md:mt-[150px] md:mb-[40px]">
        Core Features
      </h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className="md:flex justify-around pl-[50px] md:pl-[0px]">
        <div className=" w-[300px] text-center mt-[50px]">
          <Image className="ml-[100px]" src={course} alt=""></Image>
          <h1 className="text-[22px] font-semibold"> Short Course</h1>
          <p className=" text-[16px]">
            Concise and focused learning modules covering specific topics
          </p>
        </div>
        <div className=" w-[300px] text-center mt-[50px]">
          <Image className="ml-[100px]" src={one} alt=""></Image>
          <h1 className="text-[22px] font-semibold"> One To One </h1>
          <p className=" text-[16px]">
            Personalized learning experience with individualized attention.
          </p>
        </div>
        <div className=" w-[300px] text-center mt-[50px]">
          <Image className="ml-[100px]" src={progress} alt=""></Image>
          <h1 className="text-[22px] font-semibold"> Progress Tracking</h1>
          <p className=" text-[16px]">
            Real-time monitoring of individual learning journeys.
          </p>
        </div>
        <div className=" w-[300px] text-center mt-[50px]">
          <Image className="ml-[100px]" src={comunity} alt=""></Image>
          <h1 className="text-[22px] font-semibold"> Community  Forum</h1>
          <p className=" text-[16px]">
            Interactive platform for users to engage in discussions.
          </p>
        </div>
      </div>
      {/* last 3 feature list  */}
      <div>
        <div className="md:flex justify-evenly pl-[50px] md:pl-[0px]">
          <div className=" w-[300px] text-center mt-[50px]">
            <Image className="ml-[100px]" src={market} alt=""></Image>
            <h1 className="text-[22px] font-semibold">Course Marketplace </h1>
            <p className=" text-[16px]">
              Diverse selection of courses from various domains and expertise
              levels.
            </p>
          </div>
          <div className=" w-[300px] text-center mt-[50px]">
            <Image className="ml-[100px]" src={certi} alt=""></Image>
            <h1 className="text-[22px] font-semibold"> Certification</h1>
            <p className=" text-[16px]">
              Certificates validate the skills acquired and enhance credibility
              in the respective field.
            </p>
          </div>
          <div className=" w-[300px] text-center mt-[50px] ">
            <Image className="ml-[100px]" src={tutor} alt=""></Image>
            <h1 className="text-[22px] font-semibold md:my-[5px]">Request Tutor</h1>
            <p className=" text-[16px]">
              Capability for users to request a tutor based on specific learning
              needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCoreFeature;
