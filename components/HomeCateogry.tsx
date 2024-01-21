import Image from "next/image";
import designer from "../app/images/designer.png";
import programmer from "../app/images/programmer.png";

const HomeCateogry = () => {
  return (
    <div>
      <h1 className="text-center md:text-[48px] text-3xl font-semibold md:pr-[120px] mt-[150px] md:mb-[40px]">
        Popular Categories
      </h1>
      <p className="text-center md:w-[580px] md:ml-[540px]">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Discover the impact we've had on others' lives. Real experiences from
        real people who trust us. Read about the results others
        <br /> have achieved with us.
      </p>
      <div className="flex md:px-[530px] my-[20px] px-[50px]">
        <input
          className="flex md:w-[596px] md:p-[20px] p-[25px] items-center gap-16 rounded-full bg-gray-200"
          type="text"
          placeholder="Search on our populer category  "
        />
        <div className="mt-[10px] ml-[10px]">
          <button type="submit" className="btn bg-[#5A66FF] text-white">
            Search
          </button>
        </div>
      </div>
      <div className="md:flex gap-[213px] md:mt-[100px] mt-[10px] justify-evenly ">
        <div>
          <Image src={designer} alt="designer photo"></Image>
          <div className="w-[300px] text-center md:mt-[100px] mt-[20px] mx-[100px] ">
            <h1 className="text-[22px] font-semibold">
              Designer
              <span className="text-[18px] border rounded-lg py-[3px] px-[10px] bg-[#5A66FF] text-white">
                PRO
              </span>
            </h1>
            <p className="text-[14px] py-[10px] md:py-[0px]">
              Unleash your creativity with our designing tutorial. Explore the
              principles of graphic design.
            </p>
          </div>
        </div>
        <div>
          <Image src={programmer} alt="programmer photo"></Image>
          <div className="w-[300px] text-center mt-[10px] mx-[80px]">
            <h1 className="text-[22px] font-semibold">
              Programming
              <span className="text-[18px] border rounded-lg py-[3px] px-[10px] bg-[#5A66FF] text-white">
                PRO
              </span>
            </h1>
            <p className=" text-[14px] py-[10px] md:py-[0px]">
              Master coding skills with our programming tutorial. From
              fundamentals to advanced concepts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCateogry;
