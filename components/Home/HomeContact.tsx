"use client"
import Image from "next/image";
import { useState } from "react";

const HomeContact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleChatClick = () => {
    setIsLoading(true);
    // Simulate chat initialization
    setTimeout(() => {
      setIsLoading(false);
      // Add your actual chat logic here
      console.log("Opening chat...");
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-br from-[#DDF3FF] to-[#B8E6FF] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <header className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Get In <span className="text-blue-600">Touch</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
                Get instant support and solutions with our live chat. Connect
                with us now and experience seamless assistance!
              </p>
            </header>

            {/* Decorative Image */}
            <div className="hidden lg:block pt-8">
              <Image
                src="https://i.ibb.co/5YxNm4y/touch1.png"
                alt="Customer support team ready to assist customers"
                width={400}
                height={300}
                priority={false}
                className="w-full max-w-sm mx-auto lg:mx-0 drop-shadow-lg hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center space-y-8">
            <div className="relative group">
              <Image
                src="https://i.ibb.co/DYr1sGK/touch2.png"
                alt="Live chat interface showing real-time conversation"
                width={400}
                height={500}
                priority={true}
                className="w-full max-w-md drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 200vw, (max-width: 1920px) 250vw, 400px"
              />
            </div>

            {/* CTA Button */}
            <div className="w-full max-w-sm">
              <button
                onClick={handleChatClick}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none transition-all duration-300 flex items-center justify-center gap-3 group disabled:cursor-not-allowed"
                aria-label="Start live chat conversation"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Connecting...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Start Live Chat
                  </>
                )}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity"></div>
              </button>

              {/* Secondary info */}
              <p className="text-center text-sm text-gray-500 mt-3">
                Average response time: under 2 minutes
              </p>
            </div>
          </div>
        </div>

        {/* Mobile decorative image */}
        <div className="lg:hidden mt-12 text-center">
          <Image
            src="https://i.ibb.co/5YxNm4y/touch1.png"
            alt="Customer support team ready to assist customers"
            width={300}
            height={225}
            priority={false}
            className="w-full max-w-xs mx-auto drop-shadow-lg"
            sizes="(max-width: 768px) 300px, 100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
