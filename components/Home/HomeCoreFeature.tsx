import Image from "next/image";

// Import images
import course from "../../assets/images/course.png";
import one from "../../assets/images/one.png";
import progress from "../../assets/images/progress.png";
import comunity from "../../assets/images/comunity.png";
import market from "../../assets/images/market.png";
import certi from "../../assets/images/certificate.png";
import tutor from "../../assets/images/tutor.png";

const HomeCoreFeature = () => {
  const features = [
    {
      image: course,
      title: "Short Courses",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor massa vel mi consequat malesuada.",
    },
    {
      image: one,
      title: "One To One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor massa vel mi consequat malesuada.",
    },
    {
      image: progress,
      title: "Progress Tracking",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor massa vel mi consequat malesuada.",
    },
    {
      image: comunity,
      title: "Community Forum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor massa vel mi consequat malesuada.",
    },
    {
      image: market,
      title: "Course Marketplace",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor massa vel mi consequat malesuada.",
    },
    {
      image: certi,
      title: "Certification",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor massa vel mi consequat malesuada.",
    },
    {
      image: tutor,
      title: "Request Tutor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor massa vel mi consequat malesuada.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      <h1 className="text-center text-3xl md:text-4xl lg:text-[48px] font-semibold mb-12 md:mb-16">
        Core Features
      </h1>

      {/* First row - 4 items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
        {features.slice(0, 4).map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-6 w-20 h-20 flex items-center justify-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Second row - 3 items centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
        {features.slice(4, 7).map((feature, index) => (
          <div
            key={index + 4}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 w-20 h-20 flex items-center justify-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCoreFeature;
