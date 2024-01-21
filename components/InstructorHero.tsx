

const InstructorHero = () => {
    return (
        <div>
      <div
        className="hero h-[340px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/1mZ4YPt/Rectangle-8697.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-start text-neutral-content ">
          <div className="max-w-md  md:mr-[1300px]">
            <h1 className="mb-5 text-5xl font-bold">
              Best 
              <span className="text-[18px] border rounded-lg py-[3px] px-[10px] bg-[#5A66FF] text-white ml-[10px]">
                Instructors
              </span>
            </h1>
            <p className="mb-5 ">
              Empower Your Passion & Master Your Skill With Us
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default InstructorHero;