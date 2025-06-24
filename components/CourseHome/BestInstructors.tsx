// components/best-instructors.tsx
"use client";

import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { InstructorCard } from "../InstructorCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export interface Instructor {
  id: number;
  name: string;
  profession: string;
  image: string;
  rating: number;
  courses: number;
  status: "online" | "offline";
}

interface BestInstructorsProps {
  title?: string;
  description?: string;
  instructors: Instructor[];
  buttonText?: string;
}

export function BestInstructors({
  title = "Best Instructors",
  description = "Get one to One Interaction with our best instructors and explore new way of learning",
  instructors,
  buttonText = "Get Sessions Now",
}: BestInstructorsProps) {
  return (
    <>
      <style jsx global>{`
        .instructor-cards-swiper {
          width: 100%;
          overflow: hidden;
        }

        .instructor-cards-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .instructor-cards-swiper .swiper-slide {
          height: auto;
          box-sizing: border-box;
        }

        .instructor-cards-swiper .swiper-button-next,
        .instructor-cards-swiper .swiper-button-prev {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
            0 2px 4px -2px rgb(0 0 0 / 0.1);
          color: #4b5563;
          font-size: 16px;
          font-weight: bold;
          transition: all 0.3s ease;
          margin-top: -20px;
        }

        .instructor-cards-swiper .swiper-button-next:hover,
        .instructor-cards-swiper .swiper-button-prev:hover {
          background: #f9fafb;
          transform: scale(1.05);
        }

        .instructor-cards-swiper .swiper-button-next::after,
        .instructor-cards-swiper .swiper-button-prev::after {
          font-size: 16px;
          font-weight: bold;
        }

        .instructor-cards-swiper .swiper-button-next {
          right: 10px;
        }

        .instructor-cards-swiper .swiper-button-prev {
          left: 10px;
        }

        .instructor-cards-swiper .swiper-pagination {
          position: static !important;
          margin-top: 1rem;
          text-align: center;
        }

        .instructor-cards-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
        }

        .instructor-cards-swiper .swiper-pagination-bullet-active {
          background: #5a66ff;
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .instructor-cards-swiper .swiper-button-next,
          .instructor-cards-swiper .swiper-button-prev {
            display: none;
          }
        }

        /* Ensure container doesn't overflow */
        .swiper-container-overflow-fix {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }
      `}</style>

      <div className="w-full py-20 bg-gradient-to-b from-[#f9f9ff] to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Left Content */}
            <div className="flex-1 lg:max-w-lg">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  <span className="text-[#5A66FF]">Best</span> Instructors
                </h2>

                <p className="text-gray-600 mb-8 text-lg">{description}</p>

                <div className="relative mb-12">
                  <div className="absolute right-40 -top-8 transform rotate-12 w-32 h-10 flex justify-center items-center rounded-3xl bg-[#96a7ff3e] shadow-sm">
                    <p className="font-medium text-[#5A69F2] text-sm">
                      54 Instructors
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button className="bg-[#080808] px-6 py-5 text-white rounded-full flex items-center gap-2 hover:bg-[#5A66FF] transition-all">
                      <span>{buttonText}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="hidden lg:block mt-8">
                  <div className="flex flex-wrap gap-3">
                    <Badge className="px-4 py-1.5 bg-white hover:bg-white text-gray-700 border border-gray-200 rounded-full">
                      Python
                    </Badge>
                    <Badge className="px-4 py-1.5 bg-white hover:bg-white text-gray-700 border border-gray-200 rounded-full">
                      React
                    </Badge>
                    <Badge className="px-4 py-1.5 bg-white hover:bg-white text-gray-700 border border-gray-200 rounded-full">
                      UI/UX
                    </Badge>
                    <Badge className="px-4 py-1.5 bg-white hover:bg-white text-gray-700 border border-gray-200 rounded-full">
                      Data Science
                    </Badge>
                    <Badge className="px-4 py-1.5 bg-white hover:bg-white text-gray-700 border border-gray-200 rounded-full">
                      Marketing
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Instructor Cards with Swiper */}
            <div className="flex-1 min-w-0">
              <div className="relative">
                <div className="absolute top-10 left-10 -z-10 opacity-20">
                  <div className="bg-gradient-to-r from-[#5A66FF] to-[#9E5CF2] rounded-xl w-64 h-64" />
                </div>

                <div className="swiper-container-overflow-fix">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop={instructors.length > 1}
                    centeredSlides={false}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 1,
                        spaceBetween: 24,
                      },
                      1024: {
                        slidesPerView: 1.5,
                        spaceBetween: 24,
                      },
                      1280: {
                        slidesPerView: 2,
                        spaceBetween: 28,
                      },
                      1536: {
                        slidesPerView: 2.2,
                        spaceBetween: 32,
                      },
                    }}
                    className="pb-12 instructor-cards-swiper"
                  >
                    {instructors.map((instructor) => (
                      <SwiperSlide key={instructor.id}>
                        <InstructorCard instructor={instructor} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
