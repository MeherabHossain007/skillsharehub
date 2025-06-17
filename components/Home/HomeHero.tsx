import homeImage from "../../assets/images/home.png";
import Image from "next/image";
import Button from "../ui/Button";

const HomeHero = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-16">
        {/* Text Content */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-4xl font-light tracking-tight text-gray-800 md:text-5xl">
            Unlock Your Potential
          </h2>

          <div className="mt-4 space-y-2">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-black md:text-6xl">
              Where Learning Knows
            </h1>
            <h1 className="text-4xl font-bold leading-tight text-primary md:text-6xl">
              No Boundaries
            </h1>
          </div>

          <p className="mt-6 max-w-lg text-lg text-gray-600">
            Access world-class education anytime, anywhere. Expand your horizons
            with our flexible learning platform.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              variant="solid"
              href="/get-started"
              className="px-8 py-3 text-lg font-medium"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="px-8 py-3 text-lg"
              aria-label="View courses"
            >
              View Courses
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-lg md:max-w-xl">
          <Image
            src={homeImage}
            alt="Students learning together"
            width={600}
            height={500}
            quality={90}
            className="rounded-xl"
            priority
          />
          <div className="absolute -bottom-6 -right-6 z-[-1] h-full w-full rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;