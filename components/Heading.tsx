import React from "react";

import Image from "next/image";

const Heading = ({ title, picture }) => {
  return (
    <>
      <div className="ml-3 md:flex md:justify-between rounded-xl md:border  border-gray-200 bg-white mt-4 md:w-[1800px] w-[400px] border ">
        <div className="flex md:my-3 my-[30px]">
          <div className="mx-4 pt-2">
            <Image
              className="md:w-[40px] md:h-[40px] w-[50px] h-[40px]"
              src={picture}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-[18px] font-bold">{title}</h1>
            <p className="text-[14px]">
              Copy about a specific feature or action users should be aware of
              or take.
            </p>
          </div>
        </div>
        <div className="py-4 md:pt-3 md:mr-6 ml-[150px]">
          <button className="btn btn-active btn-primary ">Click Now</button>
        </div>
      </div>
    </>
  );
};

export default Heading;
