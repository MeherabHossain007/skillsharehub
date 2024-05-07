import group from "../assets/images/Group 550.png";

// eslint-disable-next-line react/prop-types
const SessionsDetails = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { title, duration, img } = item;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-2xl  md:w-[350px] md:mx-[30px] md:my-[0px] my-[100px]">
        <figure className="relative">
               {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="rounded-lg" src={img} alt="" />
          <div className="absolute right-[-70px] top-[90px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={group.src} alt="" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <p>designer</p>
          <div>
            <p className=" text-gray-400">{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionsDetails;
