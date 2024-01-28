import { IoIosStar } from "react-icons/io";
import { FaBookBookmark } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa6";
import Link from "next/link";

// eslint-disable-next-line react/prop-types
export default function InstructorFilterCard({ data }) {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const {

    id,
    // eslint-disable-next-line react/prop-types
    image,
    // eslint-disable-next-line react/prop-types
    rate,
    // eslint-disable-next-line react/prop-types
    price,
    // eslint-disable-next-line react/prop-types
    name,
    // eslint-disable-next-line react/prop-types
    expertise,
    // eslint-disable-next-line react/prop-types, no-unused-vars
    students,
    // eslint-disable-next-line react/prop-types
    about,
  } = data;

  return (
    <Link href={`/instructor/${id}`}>
      <div className="card w-96 md:w-[410px] bg-base-100 shadow-xl relative">
        <figure className="relative ">
          {/* <Image src={img} alt="Description" width={500} height={300}></Image> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" />
          <div className="absolute mt-[130px] ml-[240px]  bg-white w-[34px] h-[34px] rounded-full border-4 border-orange-200 text-center font-semibold ">
            {rate}
          </div>
          <div className="absolute text-orange-400 pl-[260px] pt-[145px]">
            <IoIosStar />
          </div>
          <div className="absolute mt-[130px] ml-[340px]  bg-[#5A66FF] w-[34px] h-[34px] rounded-full text-white flex items-center justify-center font-semibold ">
            {price}
          </div>
        </figure>
        <div className="card-body">
          <div className="flex  ">
            <p className="text-[18px] font-semibold ">{name}</p>
          </div>
          <p className="text-[14px] font-semibold text-gray-500">{expertise}</p>
          <div className="w-[220px] "></div>
        </div>
      </div>
    </Link>
  );
}
