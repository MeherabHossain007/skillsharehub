import Image from "next/image";


// eslint-disable-next-line react/prop-types
const CourseDetails = ({ data }) => {
    const {
      // eslint-disable-next-line react/prop-types
      mainHeading,
      // eslint-disable-next-line react/prop-types
      badgeLabel,
      // eslint-disable-next-line react/prop-types
      subHeading,
      // eslint-disable-next-line react/prop-types
      courseTitle,
      // eslint-disable-next-line react/prop-types
      name,
      // eslint-disable-next-line react/prop-types
      img,
      // eslint-disable-next-line react/prop-types
      value,
      // eslint-disable-next-line react/prop-types
      progress,
    } = data;
    return (
      <div className="my-4">
        <div className="card w-96 md:h-[400px] bg-base-100 shadow-xl relative">
          <figure>
          <Image src={img} alt="Description" width={500} height={300} />
          </figure>
          <div className="card-body">
            <h2 className="card-title absolute top-[20px] left-[25px]">
              {mainHeading}
              <div className="badge text-[18px] border rounded-lg py-[13px] px-[10px] bg-[#5A66FF] text-white">
                {badgeLabel}
              </div>
            </h2>
            <div className="flex  ">
              <p className=" text-[#5A66FF] text-[15px] font-semibold ">
                {subHeading}
              </p>
              <p className=" text-[#5A66FF] text-[15px] font-semibold pl-[100px]">
                2h 3m
              </p>
            </div>
            <div className="w-[220px] ">
              <p className="font-bold">{courseTitle}</p>
            </div>
            <p>{name}</p>
            <div>
              <progress
                className="progress progress-primary w-56"
                value={value}
                max="100"
              ></progress>
  
              <p> Progress: {progress}% </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CourseDetails;
  