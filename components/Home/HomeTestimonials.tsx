import React from "react";

const HomeTestimonials = () => {
  return (
    <div>
      <h1 className="text-center md:text-[48px] text-3xl font-semibold md:pr-[120px] mt-[150px] md:mb-[40px]">
      Some of our Awesome Testimonials
      </h1>
      <p className="text-center md:w-[580px] md:ml-[540px]">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Discover the impact we've had on others' lives. Real experiences from real people who trust us. Read about the results others 
        <br /> have achieved with us.
      </p>

      <div>
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32 text-center">
            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
              <div className="mb-12 md:mb-0">
                <div className="mb-6 flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                    className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                    alt="User Avatar"
                  />
                </div>
                <h5 className="mb-2 text-lg font-bold">Maria Smantha</h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  Web Developer
                </h6>
                <p className="mb-4">
                  Transformative learning! Mastered web development on this
                  platform. Now confidently building dynamic and responsive
                  websites.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="inline-block w-6"
                  >
                    <path
                      fill="currentColor"
                      d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                    />
                  </svg>
                </p>
                <ul className="mb-0 flex justify-center">{/* ... icons */}</ul>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <div className="mb-12 md:mb-0">
                <div className="mb-6 flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                    className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                    alt="User Avatar"
                  />
                </div>
                <h5 className="mb-2 text-lg font-bold">Lisa Cudrow</h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  Graphic Designer
                </h6>
                <p className="mb-4">
                  Unlocking creativity! From basics to advanced design
                  principles, this site fueled my graphic design journey. Now
                  crafting visually stunning designs!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="inline-block w-6"
                  >
                    <path
                      fill="currentColor"
                      d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                    />
                  </svg>
                </p>
                <ul className="mb-0 flex justify-center">{/* ... icons */}</ul>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <div className="mb-0">
                <div className="mb-6 flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                    className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                    alt="User Avatar"
                  />
                </div>
                <h5 className="mb-2 text-lg font-bold">John Smith</h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  Marketing Specialist
                </h6>
                <p className="mb-4">
                  Marketing mastery! In-depth courses equipped me with strategic
                  insights. Enhanced my skills to drive successful marketing
                  campaigns.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="inline-block w-6"
                  >
                    <path
                      fill="currentColor"
                      d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                    />
                  </svg>
                </p>
                <ul className="mb-0 flex justify-center">{/* ... icons */}</ul>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
