"use client";

import { useState } from "react";
import { Bookmark, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Separate CourseCard Component
export default function CourseCard({ course, onBookmark }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    onBookmark?.(course.id, !isBookmarked);
  };

  return (
    <Card className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge
            variant="secondary"
            className="bg-blue-600 text-white hover:bg-blue-700 font-medium px-3 py-1"
          >
            {course.category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <Clock className="h-3 w-3 text-blue-600" />
          <span className="text-sm font-medium text-blue-600">
            {course.duration}
          </span>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={course.authorAvatar || "/api/placeholder/32/32"}
              alt={course.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-gray-600 text-sm font-medium">
              {course.author}
            </span>
          </div>

          <button
            onClick={handleBookmark}
            className="group/bookmark p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Bookmark
              className={`h-5 w-5 transition-all ${
                isBookmarked
                  ? "fill-blue-600 text-blue-600"
                  : "text-gray-400 group-hover/bookmark:text-blue-600"
              }`}
            />
          </button>
        </div>

        {course.rating && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(course.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {course.rating} ({course.reviews} reviews)
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
