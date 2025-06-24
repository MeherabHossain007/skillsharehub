"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IoIosNotifications, IoMdMenu, IoMdClose } from "react-icons/io";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { supabase } from "@/utils/supabase/client";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();

  // Show Navbar1 on home page ("/"), show Navbar2 on all other pages
  const isHomePage = pathname === "/";

  return isHomePage ? <LandingNavbar /> : <HomeNavbar />;
};

const LandingNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/20 shadow-lg"
          : "backdrop-blur-sm bg-white/10"
      }`}
    >
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
                className="rounded-lg h-10 w-auto object-cover transition-transform hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Center - Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <HomeNavLink href="/home2">Home</HomeNavLink>
            <HomeNavLink href="/features">Features</HomeNavLink>
            <HomeNavLink href="/about">About</HomeNavLink>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden md:inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#5A66FF] to-cyan-500 text-white font-medium hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-white/20 focus:outline-none transition-colors duration-200"
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
        } md:hidden absolute top-16 inset-x-0 backdrop-blur-lg bg-white/30 shadow-xl rounded-b-lg transition-all duration-300 border-t border-white/20`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <HomeMobileLink
            href="/home2"
            onClick={() => setIsDropdownOpen(false)}
          >
            Home
          </HomeMobileLink>
          <HomeMobileLink
            href="/features"
            onClick={() => setIsDropdownOpen(false)}
          >
            Features
          </HomeMobileLink>
          <HomeMobileLink
            href="/about"
            onClick={() => setIsDropdownOpen(false)}
          >
            About
          </HomeMobileLink>
          <div className="pt-4 border-t border-white/20">
            <Link
              href="/login"
              onClick={() => setIsDropdownOpen(false)}
              className="block w-full text-center px-4 py-2 rounded-md bg-gradient-to-r from-[#5A66FF] to-cyan-500 text-white font-medium hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [notificationCount] = useState(3);
  const [cartCount] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  const navigationLinks = [
    { href: "/instructor", label: "Sessions" },
    { href: "/teacher", label: "Become A Teacher" },
    { href: "/dashboard", label: "My Classes" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-black/30 shadow-xl"
          : "backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src='/images/logo2.png'
                width={100}
                height={100}
                alt="logo"
                className="h-10 w-auto transition-transform hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-white hover:text-blue-300 hover:bg-white/20 rounded-full transition-all duration-200">
                <IoIosNotifications className="h-6 w-6" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {notificationCount}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button className="relative p-2 text-white hover:text-blue-300 hover:bg-white/20 rounded-full transition-all duration-200">
                <FaCartShopping className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleProfile}
                  className="flex items-center space-x-2 p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/30 hover:ring-blue-300 transition-all duration-200">
                    <Image
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt="Profile"
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>

                {/* Profile Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 backdrop-blur-lg bg-black/80 rounded-md shadow-xl py-1 z-50 border border-white/20">
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-200"
                    >
                      <FaUser className="mr-3 h-4 w-4" />
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-200"
                    >
                      <FaSignOutAlt className="mr-3 h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Action Buttons */}
            <button className="relative p-2 text-white hover:bg-white/20 rounded-full transition-colors duration-200">
              <IoIosNotifications className="h-6 w-6" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </button>
            <button className="relative p-2 text-white hover:bg-white/20 rounded-full transition-colors duration-200">
              <FaCartShopping className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-blue-300 hover:bg-white/20 rounded-md transition-colors duration-200"
            >
              {isMenuOpen ? (
                <IoMdClose className="h-6 w-6" />
              ) : (
                <IoMdMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 backdrop-blur-lg bg-black/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-white/10 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-white/20 pt-4 mt-4">
                <div className="flex items-center px-3 py-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt="Profile"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      John Doe
                    </div>
                    <div className="text-sm text-gray-300">
                      john@example.com
                    </div>
                  </div>
                </div>
                <Link
                  href="/profile"
                  className="block px-3 py-2 text-base font-medium text-white hover:text-blue-300 hover:bg-white/10 rounded-md transition-colors duration-200"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-red-400 hover:bg-white/10 rounded-md transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for profile dropdown */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsProfileOpen(false)}
        ></div>
      )}
    </nav>
  );
};

// Home Navbar Components
const HomeNavLink = ({
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

const HomeMobileLink = ({
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
    className="block px-3 py-3 text-gray-700 hover:text-[#5A66FF] hover:bg-white/20 rounded-md font-medium transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;
