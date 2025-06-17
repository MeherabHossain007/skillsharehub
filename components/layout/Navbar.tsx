"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/utils/supabase/client";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(error.message);
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-sm bg-opacity-90 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="rounded-lg h-10 w-auto object-cover"
              />
            </Link>
          </div>

          {/* Center - Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="/home2">Home</NavLink>
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden md:inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#5A66FF] to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className={`${isDropdownOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isDropdownOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        ref={dropdownRef}
        className={`${
          isDropdownOpen ? "block" : "hidden"
        } md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-lg transition-all duration-300`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileLink href="/home2" onClick={() => setIsDropdownOpen(false)}>
            Home
          </MobileLink>
          <MobileLink href="/features" onClick={() => setIsDropdownOpen(false)}>
            Features
          </MobileLink>
          <MobileLink href="/about" onClick={() => setIsDropdownOpen(false)}>
            About
          </MobileLink>
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/login"
              onClick={() => setIsDropdownOpen(false)}
              className="block w-full text-center px-4 py-2 rounded-md bg-gradient-to-r from-[#5A66FF] to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable components for cleaner code
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-[#5A66FF] transition-colors font-medium px-3 py-2 rounded-md"
  >
    {children}
  </Link>
);

const MobileLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="block px-3 py-3 text-gray-700 hover:text-[#5A66FF] hover:bg-gray-50 rounded-md font-medium transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;
