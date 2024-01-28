"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerlogo from "../../public/footerlogo.png";
import { IoIosNotifications } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { supabase } from "@/supabase/client";

function NavbarSadab() {
  const handlellogout = async () => {
    let { error } = await supabase.auth.signOut();
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <Image src={footerlogo} alt="logo" />
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          {/* 1  */}
          <div className="space-x-4">
            <Link href="/instruuctor" className="text-black">
              Sessions
            </Link>
            <Link href="/" className="text-black">
              Become A Teacher
            </Link>
            <Link href="/dashboard" className="text-black">
              My Classes
            </Link>
          </div>
          {/* 2  */}
          <div className="flex items-center gap-2">
            <IoIosNotifications className="text-black  h-5" />
            <FaCartShopping className="text-black  h-4" />
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
          <button
            className="bg-[#5a66ff] px-4 py-2 text-white rounded-3xl"
            onClick={handlellogout}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarSadab;
