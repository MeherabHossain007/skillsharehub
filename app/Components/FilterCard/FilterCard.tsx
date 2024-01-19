import { IoIosStar } from "react-icons/io";
import icon1 from "../../images/icon1.0.png"
import icon2 from "../../images/icon1.png"
import icon3 from "../../images/icon2.png"
import { Image } from 'next/image';


// eslint-disable-next-line react/prop-types
const FilterCard = ({data}) => {

    // eslint-disable-next-line react/prop-types, no-unused-vars
    const {mainHeading,
        // eslint-disable-next-line react/prop-types
        img,
        // eslint-disable-next-line react/prop-types
        star,
        // eslint-disable-next-line react/prop-types
        price,
        // eslint-disable-next-line react/prop-types
        subHeading,
        // eslint-disable-next-line react/prop-types
        courseTitle,
        // eslint-disable-next-line react/prop-types, no-unused-vars
        lesson,
        // eslint-disable-next-line react/prop-types
        student,
        // eslint-disable-next-line react/prop-types
        difficulty} = data;
    return (
        <div className="card w-96 md:w-[410px] bg-base-100 shadow-xl relative">
            <figure className="relative ">
              <Image src={img} alt="" />
              <div className="absolute mt-[130px] ml-[240px]  bg-white w-[34px] h-[34px] rounded-full border-4 border-orange-200 text-center font-semibold ">
               {star}
              </div>
              <div className="absolute text-orange-400 pl-[260px] pt-[145px]">
                <IoIosStar />
              </div>
              <div className="absolute mt-[130px] ml-[340px]  bg-[#5A66FF] w-[34px] h-[34px] rounded-full text-white flex items-center justify-center font-semibold ">
                {price}
              </div>
            </figure>
            <div className="card-body">
              <div className="badge text-[18px] border rounded-lg py-[13px] px-[10px] bg-[#5A66FF] text-white absolute top-[20px] left-[25px]">
               {mainHeading}
              </div>

              <div className="flex  ">
                <p className=" text-[#5A66FF] text-[18px] font-semibold ">
                {subHeading}
                </p>
               
              </div>
              <p className="text-[14px] font-bold">{courseTitle}</p>
              <div className="w-[220px] ">
               
              </div>
              <div className="md:flex  justify-between pt-[20px]">
                <div className="flex  ">
                  <Image className="w-[20px] h-[20px] " src={icon1} alt="Movie" />
                  <p className="px-[10px]  pb-[20px] font-semibold">
                    {student}
                  </p>
                </div>
                <div className="flex  ">
                  <Image className="w-[20px] h-[20px] " src={icon2} alt="Movie" />
                  <p className="px-[10px]  pb-[20px] font-semibold">
                    Student: 26
                  </p>
                </div>
                <div className="flex  ">
                  <Image className="w-[20px] h-[20px] " src={icon3} alt="Movie" />
                  <p className="px-[10px]  pb-[20px] font-semibold">{difficulty}</p>
                </div>
              </div>
            </div>
          </div>
    );
};

export default FilterCard;
