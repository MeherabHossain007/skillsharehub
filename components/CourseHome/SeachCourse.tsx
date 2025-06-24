"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CourseSearchSection() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All Categories",
    "Web Development",
    "Data Science",
    "Mobile Development",
    "UI/UX Design",
    "Machine Learning",
    "Cybersecurity",
    "Digital Marketing",
    "Photography",
    "Business",
    "Languages",
  ];

  const handleSearch = () => {
    console.log("Searching for:", {
      category: selectedCategory,
      query: searchQuery,
    });
    // Add your search logic here
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h1 className="hidden sm:block text-center font-bold text-5xl leading-normal text-black">
            Search Among <span className="text-[#5A66FF]">58340</span> Courses
            And <br />
            Find Your Favorite Course
          </h1>
          <div className="sm:hidden">
            <h1 className="font-bold text-3xl leading-normal text-black">
              Search Among <span className="text-[#5A66FF]">58340</span> Courses
              And Find Your Favorite Course
            </h1>
          </div>
        </div>

        {/* Search Interface */}
        <div className="my-5 sm:my-20 text-center">
          <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 p-7 px-10 rounded-2xl shadow-lg border border-zinc-200">
            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center gap-0">
              {/* Category Dropdown */}
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[220px] h-14 bg-black text-white rounded-l-xl rounded-r-none border-r-0 focus:ring-0 text-base font-medium">
                  <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Search Input */}
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for courses, skills, or topics..."
                className="flex-1 h-14 bg-white text-black rounded-none border-x-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base px-6 placeholder:text-gray-500"
              />

              {/* Search Icon Button */}
              <Button
                onClick={handleSearch}
                size="lg"
                className="h-14 w-16 bg-[#5A66FF] hover:bg-[#4854FF] text-white rounded-l-none rounded-r-xl border-l-0 transition-all duration-200 hover:shadow-lg"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden space-y-6">
              {/* Search Input */}
              <div className="relative">
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Search for courses..."
                  className="w-full h-14 rounded-xl bg-white text-black mx-auto text-base px-6 shadow-sm border-zinc-300 focus:border-[#5A66FF] focus-visible:ring-2 focus-visible:ring-[#5A66FF] focus-visible:ring-offset-0"
                />
              </div>

              {/* Category Dropdown */}
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full h-12 bg-white text-black rounded-xl border-zinc-300 focus:ring-2 focus:ring-[#5A66FF]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Search Icon Button */}
              <div className="relative inline-block">
                <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full z-10">
                  new
                </span>
                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="h-14 w-14 bg-[#5A66FF] hover:bg-[#4854FF] text-white rounded-xl transition-all duration-200 hover:shadow-lg"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Or View Following Courses Text */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            Or View The Following Courses...
          </p>
        </div>
      </div>
    </section>
  );
}
