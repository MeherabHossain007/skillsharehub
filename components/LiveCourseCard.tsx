"use client";

import Image from "next/image"; // Import next/image
import { Book, Users, Trophy, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Optional: Define a type/interface for your course prop for better DX and type safety
/**
 * @typedef {object} Course
 * @property {string} id - Unique identifier for the course.
 * @property {string} image - URL for the course image.
 * @property {string} title - Title of the course.
 * @property {string} date - Starting date or display date of the course.
 * @property {number | string} rating - Course rating (e.g., 4.5).
 * @property {number | string} price - Course price.
 * @property {string} category - Category of the course.
 * @property {number | string} lessons - Number of lessons.
 * @property {number | string} students - Number of enrolled students.
 * @property {string} level - Difficulty level (e.g., "Beginner", "All Levels").
 */

/**
 * Renders a card display for a live course.
 * @param {{ course: Course }} props - The props for the component.
 * @returns {JSX.Element}
 */
export default function LiveCourseCard({ course }) {
  const {
    image,
    title,
    date,
    rating,
    price,
    category,
    lessons,
    students,
    level,
  } = course;

  const primaryColor = "#5A66FF";
  const primaryHoverColor = "#4854FF"; // A slightly darker shade for hover

  return (
    <Card className="group flex flex-col overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl w-full max-w-sm">
      {/* Image Section */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        {" "}
        {/* Enforce aspect ratio */}
        <Image
          src={image}
          alt={`Promotional image for ${title}`}
          fill // Use fill to cover the parent dimensions
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust sizes for responsiveness
          className="object-cover transition-transform duration-500 group-hover:scale-105" // Slightly less aggressive scale
        />
        {/* Date Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <Badge
            className={`bg-[${primaryColor}] px-3 py-1.5 text-xs font-semibold text-white rounded-md hover:bg-[${primaryHoverColor}] sm:px-4 sm:py-2 sm:text-sm sm:rounded-lg`}
          >
            {date}
          </Badge>
        </div>
        {/* Rating and Price Overlay */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex flex-col items-end gap-2">
          {/* Rating */}
          <div className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs shadow-md backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-sm">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-3.5 sm:w-3.5" />
            <span className="font-bold text-gray-900">{rating}</span>
          </div>

          {/* Price */}
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-[${primaryColor}] text-white shadow-md sm:h-12 sm:w-12`}
          >
            <span className="text-sm font-bold">${price}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="flex flex-grow flex-col p-5 sm:p-6">
        {/* Category */}
        <span
          className={`mb-2 text-xs font-semibold uppercase tracking-wider text-[${primaryColor}] sm:text-sm`}
        >
          {category}
        </span>

        {/* Title */}
        <h3
          className={`mb-3 text-lg font-bold text-gray-900 line-clamp-2 transition-colors group-hover:text-[${primaryColor}] sm:mb-4 sm:text-xl`}
        >
          {title}
        </h3>

        {/* Spacer to push stats to bottom if card height varies */}
        <div className="mt-auto">
          {/* Decorative Separator */}
          <hr className="my-3 border-gray-100 sm:my-4" />

          {/* Course Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <StatItem
              icon={Book}
              label="Lessons"
              value={lessons}
              color={primaryColor}
            />
            <StatItem
              icon={Users}
              label="Students"
              value={students}
              color={primaryColor}
            />
            <StatItem
              icon={Trophy}
              label="Level"
              value={level}
              color={primaryColor}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Sub-component for individual stats to keep the main component cleaner
const StatItem = ({ icon: Icon, label, value, color }) => (
  <div className="flex items-center gap-2">
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full bg-[${color}]/10 sm:h-9 sm:w-9`}
    >
      <Icon className={`h-4 w-4 text-[${color}] sm:h-4 sm:w-4`} />
    </div>
    <div>
      <p className="text-xs text-gray-500 sm:text-sm">{label}</p>
      <p className="text-sm font-semibold text-gray-800 sm:text-base">
        {value}
      </p>
    </div>
  </div>
);
