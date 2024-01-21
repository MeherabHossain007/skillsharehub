import touch1 from "../app/images/touch1.png";

const HomeContact = () => {
  return (
    <>
      <div className="bg-[#DDF3FF] p-[54px] my-[100px] md:flex justify-between">
        <div>
          <h1 className="text-[32px] font-semibold ">Get In Touch</h1>
          <p>
            Get instant support and solutions with our live chat. Connect with
            us now!
          </p>

          <div className="md:mt-[60px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://i.ibb.co/5YxNm4y/touch1.png" alt="" />
          </div>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://i.ibb.co/DYr1sGK/touch2.png" alt="" />
          <div className="md:pl-[170px]">
            <button className="btn btn-active btn-primary">Chat Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContact;
