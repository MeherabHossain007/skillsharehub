import Image from "next/image";
import designer from "../../assets/images/designer.png";
import programmer from "../../assets/images/programmer.png";

const HomeCateogry = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-[48px] font-semibold mb-6">
          Popular Categories
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Discover the impact we&apos;ve had on others&apos; lives. Real experiences from
          real people who trust us. Read about the results others have achieved
          with us
        </p>
      </div>

      {/* Search Section */}
      <div className="flex justify-center mb-16">
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search on our popular category"
            className="w-full py-4 px-6 pr-16 rounded-full bg-gray-100 border-none outline-none text-gray-700 placeholder-gray-500"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-[#5A66FF] text-white px-6 rounded-full hover:bg-[#4A56EF] transition-colors duration-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
        {/* Designer Category */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 w-full max-w-md h-80 flex items-center justify-center">
            <Image
              src={designer}
              alt="Designer illustration"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <h2 className="text-2xl md:text-3xl font-semibold text-black">
                Designer
              </h2>
              <span className="bg-[#5A66FF] text-white text-sm font-medium px-3 py-1 rounded-lg">
                PRO
              </span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-sm mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              auctor massa vel mi consequat malesuada.
            </p>
          </div>
        </div>

        {/* Programming Category */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 w-full max-w-md h-80 flex items-center justify-center">
            <Image
              src={programmer}
              alt="Programming illustration"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <h2 className="text-2xl md:text-3xl font-semibold text-black">
                Programming
              </h2>
              <span className="bg-[#5A66FF] text-white text-sm font-medium px-3 py-1 rounded-lg">
                PRO
              </span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-sm mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              auctor massa vel mi consequat malesuada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCateogry;
