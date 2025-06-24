
import { ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CourseCard from "../CourseCard";

export default function CourseHighlightSection({title}) {
  // Sample course data - replace with your actual data
  const courses = [
    {
      id: 1,
      title: "Motion Graphics: Create a Nice Typography Animation",
      category: "Web Development",
      duration: "2h 3m",
      author: "Aga Naplocha",
      authorAvatar: "/api/placeholder/32/32",
      image: "/api/placeholder/400/300",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      title: "Advanced React Patterns and Best Practices",
      category: "Web Development",
      duration: "3h 15m",
      author: "Sarah Johnson",
      authorAvatar: "/api/placeholder/32/32",
      image: "/api/placeholder/400/300",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals for Beginners",
      category: "Design",
      duration: "2h 45m",
      author: "Mike Chen",
      authorAvatar: "/api/placeholder/32/32",
      image: "/api/placeholder/400/300",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      title: "Python Data Science Masterclass",
      category: "Data Science",
      duration: "4h 20m",
      author: "Dr. Lisa Wang",
      authorAvatar: "/api/placeholder/32/32",
      image: "/api/placeholder/400/300",
      rating: 4.8,
      reviews: 203,
    },
  ];

  const handleBookmark = (courseId, isBookmarked) => {
    console.log(
      `Course ${courseId} ${isBookmarked ? "bookmarked" : "unbookmarked"}`
    );
    // Add your bookmark logic here
  };

  const handleShowMore = () => {
    console.log("Show more courses");
    // Add your navigation logic here
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-3xl sm:text-4xl text-gray-900">
              {title}
            </h2>
            <Badge
              variant="secondary"
              className="bg-blue-600 text-white hover:bg-blue-700 font-bold px-3 py-1 text-sm rounded-lg"
            >
              PRO
            </Badge>
          </div>

          <Button
            onClick={handleShowMore}
            className="bg-[#5A66FF] hover:bg-[#4854FF] text-white rounded-full px-6 py-3 flex items-center gap-2 transition-all duration-200 hover:shadow-lg"
          >
            Show more
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="cursor-pointer">
              <CourseCard course={course} onBookmark={handleBookmark} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
