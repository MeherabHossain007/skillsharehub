"use client"; // This is a client component
import { useState } from "react";
import { useEffect } from "react";
import SessionsDetails from "./SessionsDetails";

const Sessions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Yousufjoy/fydpData1/main/data2.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data.video));
  }, []);
  console.log(data);

  return (
    <>
      <h1 className=" my-[30px] text-black font-lato text-25 font-bold leading-26 text-[21px] pl-[20px] mt-[40px] text-center md:text-start uppercase">
        1 To 1 SesSessions
      </h1>
      <div className="md:grid md:grid-cols-4 md:my-[30px]  ">
        {data.map((item, index) => (
          <SessionsDetails key={index} item={item}></SessionsDetails>
        ))}
      </div>
    </>
  );
};

export default Sessions;
