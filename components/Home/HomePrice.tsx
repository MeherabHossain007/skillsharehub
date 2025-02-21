const HomePrice = () => {
  return (
    <div>
      <h1 className="text-center md:text-[48px] text-3xl font-semibold md:pr-[120px] mt-[150px] md:mb-[40px]">
        Simple Pricing
      </h1>
      <p className="text-center md:w-[580px] md:ml-[540px]">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        14 days unlimited free trial. No contract or credit
        <br /> card required.
      </p>
      <div className="md:flex gap-[50px] justify-evenly my-[100px]">
        <div className="borderw-[100px] md:w-[607px] p-[40px] rounded-md  border-blue-100 drop-shadow-sm border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://i.ibb.co/SXpCQ7R/icon10.png" alt="" />
          <h1 className="text-[41px] font-bold py-2">
            Programming
            <span className="text-[18px] border rounded-lg py-[3px] px-[10px] bg-[#5A66FF] text-white">
              PRO
            </span>
          </h1>
          <p className="text-[18px] py-4">
            Unleash the Power of Your code with Programming Pro.
          </p>
          <div className="flex justify-between">
            <div className="flex">
              <p className="py-2">From</p>
              <h1 className="text-[60px] font-bold">$100</h1>
            </div>
            <div className="mt-[15px]">
              <button className="btn btn-primary text-white">Get Started</button>
            </div>
          </div>
        </div>

        <div >
          <div className="border w-[100px] md:w-[607px] p-[40px] rounded-md border-blue-100 drop-shadow-sm bg-gradient-to-r from-indigo-500">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://i.ibb.co/hgyp7Nm/icon20.png" alt="" />
            <h1 className="text-[41px] font-bold py-2">
            Designing
              <span className="text-[18px] border rounded-lg py-[3px] px-[10px] bg-[#5A66FF] text-white ">
                PRO
              </span>
            </h1>
            <p className="text-[18px] py-4">
              Unleash the Power of Your UI/UX design with Designing Pro.
            </p>
            <div className="flex justify-between">
              <div className="flex">
                <p className="py-2">From</p>
                <h1 className="text-[60px] font-bold">$100</h1>
              </div>
              <div className="mt-[15px]">
                <button className="btn btn-primary text-white">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePrice;
