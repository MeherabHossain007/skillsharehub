import React from "react";
import Image from "next/image";

const HomeTestimonials = () => {
  const testimonials = [
    {
      name: "Maria Smantha",
      role: "Web Developer",
      content:
        "Transformative learning! Mastered web development on this platform. Now confidently building dynamic and responsive websites.",
      rating: 5,
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
    },
    {
      name: "Lisa Cudrow",
      role: "Graphic Designer",
      content:
        "Unlocking creativity! From basics to advanced design principles, this site fueled my graphic design journey. Now crafting visually stunning designs!",
      rating: 4,
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
    },
    {
      name: "John Smith",
      role: "Marketing Specialist",
      content:
        "Marketing mastery! In-depth courses equipped me with strategic insights. Enhanced my skills to drive successful marketing campaigns.",
      rating: 5,
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
    },
  ];

  // Star rating component
  const StarRating = ({ rating }) => (
    <div className="flex justify-center mt-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`w-5 h-5 mx-0.5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-4">
          Some of our Awesome Testimonials
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover the impact we&apos;ve had on others&apos; lives. Real experiences from
          real people who trust us. Read about the results others have achieved
          with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 border border-gray-100 flex flex-col h-full"
          >
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>

            <div className="text-center flex-grow">
              <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
              <p className="text-gray-500 mb-5">{testimonial.role}</p>

              <div className="relative mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-200 absolute -top-4 left-0"
                  fill="currentColor"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p className="text-gray-700 italic pt-4">
                  {testimonial.content}
                </p>
              </div>
            </div>

            <StarRating rating={testimonial.rating} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeTestimonials;
