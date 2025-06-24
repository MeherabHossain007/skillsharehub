import React from "react";
import Image from "next/image";

export default function Motivation() {
  return (
    <section className="relative mb-20 md:mb-32 lg:mb-40 w-full">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 bg-gray-100 rounded-2xl p-6 md:p-8 lg:p-12">
          {/* Content Section */}
          <div className="flex-1 max-w-4xl">
            {/* Text Content */}
            <div className="">
              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                non omnis deserunt, animi debitis quia expedita necessitatibus
                harum eligendi, sunt quam fugiat voluptatibus quidem ipsa saepe
                quis enim iure sed praesentium veritatis minus placeat. Iure
                amet quos accusantium perferendis maiores nostrum asperiores
                nulla iste modi placeat. Officia nulla et debitis.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src="/Asset11.png"
                alt="Feature illustration"
                width={400}
                height={300}
                className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
                priority={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
