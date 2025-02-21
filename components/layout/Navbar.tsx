"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/utils/supabase/client";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) {
      alert(error.message);
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="navbar bg-base-100 md:my-0 my-12">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="/home2">Home</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image
            src="https://i.ibb.co/3dP7DcN/logo.png"
            alt="logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/home2">Home</Link>
          </li>
          <li>
            <Link href="/features">Features</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        <Link href="/login" className="btn bg-[#5A66FF] hover:bg-cyan-500 text-white mr-2">
          Get Started
        </Link>
        {/* Uncomment the following button to enable logout functionality */}
        {/* <button className="btn bg-[#5A66FF] text-white" onClick={handleLogout}>
          Log Out
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
