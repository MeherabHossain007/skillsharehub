import React from "react";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { BiVector } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import Image from "next/image";

const Hero = () => {
  const skillCategories = [
    {
      icon: HiOutlineCodeBracket,
      bgColor: "bg-green-50",
      hoverBgColor: "hover:bg-green-100",
      iconColor: "text-[#009E68]",
      hoverTextColor: "hover:text-[#009E68]",
      skills: ["Python", "React", "Unity", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      icon: BiVector,
      bgColor: "bg-violet-50",
      hoverBgColor: "hover:bg-violet-100",
      iconColor: "text-[#9E5CF2]",
      hoverTextColor: "hover:text-[#9E5CF2]",
      skills: [
        "UI & UX",
        "Vector",
        "Figma",
        "Adobe XD",
        "Sketch",
        "Prototyping",
      ],
    },
    {
      icon: IoVideocamOutline,
      bgColor: "bg-red-50",
      hoverBgColor: "hover:bg-red-100",
      iconColor: "text-[#FF3C31]",
      hoverTextColor: "hover:text-[#FF3C31]",
      skills: [
        "After Effects",
        "Lightroom",
        "Premiere Pro",
        "Photoshop",
        "DaVinci",
        "Blender",
      ],
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="relative w-full min-h-screen sm:min-h-[600px] md:min-h-[700px] lg:min-h-screen">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/bgc.jpg"
            alt="Hero Background"
            layout="fill"
            quality={100}
            className="object-cover object-center scale-110 -translate-y-16"
          />
        </div>

        {/* Content Overlay */}
        <div className="container mx-auto relative z-10 px-4 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[inherit]">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text- font-bold mb-6 sm:mb-8">
              Find The Best Online <br className="hidden sm:block" />
              Course & Learn For <br className="hidden sm:block" />
              Your Future
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 my-6 sm:my-8">
              <button className="bg-[#5a66ff] px-6 sm:px-8 py-3 text-white rounded-full font-medium hover:bg-[#4a56e8] transition-all duration-300 shadow-lg transform hover:scale-105 text-sm sm:text-base">
                Get Started
              </button>

              <div className="flex items-center">
                <div className="avatar-group -space-x-2 sm:-space-x-4 rtl:space-x-reverse">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="avatar">
                      <div className="w-8 sm:w-10 md:w-12">
                        <div className="bg-gray-200 border-2 border-dashed rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                      </div>
                    </div>
                  ))}
                  <div className="avatar placeholder">
                    <div className="w-8 sm:w-10 md:w-12 bg-gray-700 text-white rounded-full flex items-center justify-center">
                      <span className="text-xs sm:text-sm">+99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-10 my-8 sm:my-12 md:my-16 lg:my-20">
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {/* First set of categories */}
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={`first-${categoryIndex}`}
                className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex justify-center items-center ${category.bgColor} rounded-md transition-all duration-300 ${category.hoverBgColor} hover:scale-110 hover:shadow-lg group`}
                >
                  <category.icon
                    className={`${category.iconColor} transition-all duration-300 group-hover:scale-125`}
                    size={window.innerWidth >= 768 ? 32 : 24}
                  />
                </div>
                <div className="flex gap-1 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={`${skill}-${skillIndex}`}
                      className={`flex w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 justify-center items-center bg-gray-50 rounded-md shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1 cursor-pointer`}
                    >
                      <span
                        className={`font-medium text-gray-700 text-xs sm:text-sm transition-colors duration-300 ${category.hoverTextColor}`}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={`second-${categoryIndex}`}
                className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex justify-center items-center ${category.bgColor} rounded-md transition-all duration-300 ${category.hoverBgColor} hover:scale-110 hover:shadow-lg group`}
                >
                  <category.icon
                    className={`${category.iconColor} transition-all duration-300 group-hover:scale-125`}
                    size={window.innerWidth >= 768 ? 32 : 24}
                  />
                </div>
                <div className="flex gap-1 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={`${skill}-${skillIndex}-dup`}
                      className={`flex w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 justify-center items-center bg-gray-50 rounded-md shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1 cursor-pointer`}
                    >
                      <span
                        className={`font-medium text-gray-700 text-xs sm:text-sm transition-colors duration-300 ${category.hoverTextColor}`}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes tickerScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ticker-wrapper {
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .ticker-content {
          display: flex;
          gap: 1rem;
          animation: tickerScroll 30s linear infinite;
          width: fit-content;
        }

        .ticker-content:hover {
          animation-play-state: paused;
        }

        @media (min-width: 640px) {
          .ticker-content {
            gap: 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .ticker-content {
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .ticker-content {
            gap: 4rem;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
