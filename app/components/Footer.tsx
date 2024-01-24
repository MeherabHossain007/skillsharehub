import React from "react";
import footerlogo from "../../public/footerlogo.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div>
        <footer className="footer p-10  text-base-content bg-[#F7F7F7] flex flex-row justify-evenly">
          <aside>
            <Image src={footerlogo} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing
            </p>

            <div className="flex items-center gap-2">
              <FaFacebookF className="text-[#5A66FF]" />
              <FaInstagram className="text-[#5A66FF]" />
              <FaTwitter className="text-[#5A66FF]" />
            </div>
          </aside>
          <nav>
            <h6 className="footer-title">Company info</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Carrier</a>
            <a className="link link-hover">We are hiring</a>
            <a className="link link-hover">Blog</a>
          </nav>
          <nav>
            <h6 className="footer-title">Features</h6>
            <a className="link link-hover">Business Marketing</a>
            <a className="link link-hover">User Analytic</a>
            <a className="link link-hover">Live Chat</a>
            <a className="link link-hover">Unlimited Support</a>
          </nav>
          <nav>
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">IOS & Android</a>
            <a className="link link-hover">Watch a Demo</a>
            <a className="link link-hover">Customers</a>
            <a className="link link-hover">API</a>
          </nav>
        </footer>
      </div>
      <div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Made With Love By MxH All Right Reserved </p>
          </aside>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
