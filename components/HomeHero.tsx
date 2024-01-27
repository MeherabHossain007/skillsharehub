import home from "../assets/images/home.png";
import Image from "next/image";

const HomeHero = () => {
  return (
    <div className="md:flex md:gap-[200px]">
      <div className=" md:pt-[250px] md:pl-[50px] ">
        <h2 className="text-black md:text-6xl text-3xl leading-16 tracking-tighter md:py-[20px]">
          Unlock Your Potential
        </h2>
        <h1 className="text-black md:text-6xl text-3xl leading-16 tracking-tighter font-bold "> Where Learning Knows</h1>
        <h1 className="text-black md:text-6xl text-3xl leading-16 tracking-tighter font-bold md:py-[20px]"> No Boundaries</h1>
        <button className="btn btn-primary text-white ">Get Started</button>
      </div>
     
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image src={home} alt=""></Image>
      </div>
    </div>
  );
};

export default HomeHero;
