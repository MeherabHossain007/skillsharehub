import Image from "next/image";
import Link from "next/link";
import React from "react";
import herologo from "../../public/herologo.png";
import { IoIosNotifications } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";


function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <Image src={herologo} alt="logo" />
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          {/* 1  */}
          <div className="space-x-4">
            <Link href="/" className="text-white">
              Sessions
            </Link>
            <Link href="/" className="text-white">
              Become A Teacher
            </Link>
            <Link href="/" className="text-white">
              My Classes
            </Link>
          </div>
          {/* 2  */}
          <div className="flex items-center gap-2">
            <IoIosNotifications className="text-white  h-5" />
            <FaCartShopping className="text-white  h-4" />
          </div>
        </div>

        {/* 3  */}

        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>

        {/* 4  */}

        <div>
          <button className="bg-[#5a66ff] px-4 py-2 text-white rounded-3xl">
            Get Premium
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
