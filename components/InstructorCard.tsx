// components/instructor-card.tsx
"use client";

import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Instructor {
  id: number;
  name: string;
  profession: string;
  image: string;
  rating: number;
  courses: number;
  status: "online" | "offline";
}

interface InstructorCardProps {
  instructor: Instructor;
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <Card className="rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 bg-gradient-to-r from-[#f0f2ff] to-[#f9f9ff]">
        <div className="absolute -bottom-6 left-6">
          <Avatar className="w-16 h-16 border-4 border-white group-hover:border-[#5A66FF] transition-colors">
            <AvatarImage src={instructor.image} alt={instructor.name} />
            <AvatarFallback className="bg-gradient-to-r from-[#5A66FF] to-[#9E5CF2] text-white">
              {instructor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="absolute top-4 right-4">
          <Badge
            variant={instructor.status === "online" ? "default" : "secondary"}
            className="rounded-full flex items-center gap-1"
          >
            <div
              className={`w-2 h-2 rounded-full ${
                instructor.status === "online" ? "bg-green-400" : "bg-gray-400"
              }`}
            ></div>
            <span className="text-xs capitalize">{instructor.status}</span>
          </Badge>
        </div>
      </div>

      <CardContent className="pt-10">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-lg group-hover:text-[#5A66FF] transition-colors">
              {instructor.name}
            </h3>
            <p className="text-gray-500 text-sm">{instructor.profession}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 fill-current ${
                    i < Math.floor(instructor.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">
              {instructor.rating.toFixed(1)}
            </span>
          </div>

          <div className="text-sm font-medium text-gray-600">
            {instructor.courses} courses
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          variant="outline"
          className="w-full text-[#5A66FF] border-[#5A66FF] hover:bg-[#5A66FF] hover:text-white"
        >
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
