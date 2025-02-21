import home from "../../assets/images/home.png";
import Image from "next/image";

const HomeHero = () => {
  return (
    <div className="md:flex md:gap-[100px] justify-center items-center">
      <div className="items-center justify-center ">
        <h2 className="text-black text-5xl font-thin tracking-tighter">
          Unlock Your Potential
        </h2>
        <div className="mt-4">
          <h1 className="text-black md:text-6xl text-3xl leading-16 tracking-tighter font-bold whitespace-nowrap">
            Where Learning Knows
          </h1>
          <h1 className="text-black md:text-6xl text-3xl leading-16 tracking-tighter font-bold">
            No Boundaries
          </h1>
        </div>
        <div className="mt-10">
          <button className="btn btn-primary">Start Learning</button>
        </div>
      </div>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image src={home} alt=""></Image>
      </div>
    </div>
  );
};

export default HomeHero;
