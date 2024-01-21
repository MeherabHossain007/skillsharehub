"use client"; // This is a client component

import { useState, useEffect } from "react";
import InstructorFilterCard from './InstructorFilterCard';




const InstructorFilter = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Yousufjoy/fydpData1/main/data5.json")
      .then((res) => res.json())
      .then((data) => setData(data.cardData));
  }, []);



  const [rangeValue, setRangeValue] = useState(0);
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const [videoValue, setVideoValue] = useState(0);
  const handleVideoChange = (event) => {
    setVideoValue(event.target.value);
  };

  return (
    <div>
      <div className="md:flex  md:justify-between  md:ml-[-20px]">
        <h1 className=" my-[30px] text-black font-lato text-25 font-bold leading-26 text-[21px] pl-[20px] mt-[40px] text-center md:text-start uppercase">
          Filter Coursess
        </h1>

        <div className="py-4 md:pt-3 md:mr-6 ml-[150px]  md:mt-[20px]   ">
          <button className="btn btn-active btn-primary bg-black text-white">
            Most Relevent!
          </button>
        </div>
      </div>
      <div className="md:flex ">
        {/* Left Div */}
        <div className="md:w-[20%]  md:ml-[0px]  ml-[40px]">
          <div className="flex">
            <label className="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="Search here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className=" mt-[50px] md:w-[320px] rounded-lg bg-white shadow-md  mr-[50px]">
            <h2 className=" text-xl font-bold pt-[20px] my-4"> Price </h2>
            <div className="flex  justify-between">
              <p className="py-4 px-4 text-lg text-gray-400">{rangeValue}$</p>
              <p className="pr-[50px] text-lg text-gray-400 ">100$</p>
            </div>
            {/* **** */}
            <input
              type="range"
              min={0}
              max={100}
              value={rangeValue}
              onChange={handleRangeChange}
              className="range range-primary"
            />
            <div className="flex justify-between ">
              <p className="py-4 px-4 text-lg text-gray-400">
                Max: <span className="font-bold ">100$</span>
              </p>
              <button className="pr-[40px]  text-[#5A66FF] font-semibold">Apply</button>
            </div>


            
          </div>
          <div className=" mt-[50px] md:w-[320px] rounded-lg bg-white shadow-md  mr-[50px]">
            <h2 className=" text-xl font-bold pt-[20px] my-4"> Video duration </h2>
            <div className="flex  justify-between">
              <p className="py-4 px-4 text-lg text-gray-400">{videoValue} hrs</p>
              <p className="pr-[50px] text-lg text-gray-400 ">150 hrs</p>
            </div>
            {/* **** */}
            <input
              type="range"
              min={0}
              max={100}
              value={videoValue}
              onChange={handleVideoChange}
              className="range range-primary"
            />
            <div className="flex justify-between ">
              <p className="py-4 px-4 text-lg text-gray-400">
                Max: <span className="font-bold ">150 hrs</span>
              </p>
              <button className="pr-[40px]  text-[#5A66FF] font-semibold">Apply</button>
            </div>
     
          </div>

          {/* FILTER OPTIONS */}
          <div className=" md:w-[320px] mt-[40px]">
            <div className="collapse collapse-plus bg-white">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-xl font-medium">Rating</div>
              <div className="collapse-content ">
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
              <span className="border"></span>
            </div>
            <div className="collapse collapse-plus bg-white">
              <span className="border"></span>
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">Topic</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white">
              <span className="border"></span>
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">Level</div>
              <div className="collapse-content">
              
                <p>hello</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white">
              <span className="border"></span>
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">Feature</div>
              <div className="collapse-content">
               
                <p>hello</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-white">
              <span className="border"></span>
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Languages
              </div>
              <div className="collapse-content">
                
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Div */}
        <div className="w-[80%] ">
          <div className="grid md:grid-cols-3 gap-8 ml-[20px] md:ml-[0px] md:mt-[0px] mt-[50px]">
            {
              // eslint-disable-next-line react/jsx-key
              data.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <InstructorFilterCard data={item} key={item.id}></InstructorFilterCard>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorFilter;
