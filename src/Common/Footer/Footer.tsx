import Link from "next/link";
import React from "react";
import { FaClock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full primary-bg">
      <div className="mx-auto xl:w-[70%] w-[90%] py-6 lg:py-10 lg:grid lg:grid-cols-12 space-y-10 lg:space-y-0">
        {/* Footer Quick Links  */}
        <div className="footer-quick-links col-span-4">
          <div>
            <h1 className="text-white flex lg:block justify-center lg:justify-start">
              <span className="roboto-bold text-[20px] md:text-[30px]">
                Quick&nbsp;
              </span>
              <span className="roboto-thin text-[20px] md:text-[30px]">
                {" "}
                links
              </span>
            </h1>
            <div className="grid  lg:grid-cols-12 mt-5 text-tertiary montserrat-regular text-[16px] lg:space-y-3 space-y-0">
              <div className="col-span-6">
                <ul className="space-y-3 flex flex-col lg:block items-center lg:items-start">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/academics">Academics</Link>
                  </li>
                  <li>
                    <Link href="/admissions">Admissions</Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-6">
                <ul className="space-y-3 flex flex-col lg:block items-center lg:items-start">
                  <li>
                    <Link href="/notice">Notice</Link>
                  </li>
                  <li>
                    <Link href="/students">Students</Link>
                  </li>
                  <li>
                    <Link href="/news">News</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* Footer Google Map  */}
        <div className="footer-map col-span-4 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.6089471244645!2d85.03003127545713!3d27.419126876348887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb49835d1b3a17%3A0x322bbd5bcf7de228!2sNavodaya%20Shishu%20Sadan%20English%20Secondary%20School!5e0!3m2!1sen!2snp!4v1740739031647!5m2!1sen!2snp"
            className="border-0 w-full lg:w-[300px] h-80 lg:h-auto"
          ></iframe>
        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* Footer Contact Us  */}
        <div className="footer-contact-us col-span-4 flex flex-col items-center lg:items-end">
          <div>
            <h1 className="text-white flex lg:block justify-center lg:justify-start">
              <span className="roboto-bold text-[20px] md:text-[30px]">
                Contact&nbsp;
              </span>
              <span className="roboto-thin text-[20px] md:text-[30px]">us</span>
            </h1>
            <div className="mt-5 space-y-3 text-tertiary montserrat-regular text-[16px] flex flex-col lg:block items-center lg:items-start">
              <div className="flex items-center text-center">
                <FaPhoneAlt className="text-[11px] md:text-[14px] me-3" />
                +977-57-525940, +977-57-524959
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[11px] md:text-[14px] me-3" />
                inquiry@navodaya.edu.np
              </div>
              <div className="flex items-center">
                <FaClock className="text-[11px] md:text-[14px] me-3" />
                9:00 AM - 5:00 PM
              </div>
              <div className="text-white flex gap-4">
                <FaFacebook className="text-lg lg:text-2xl cursor-pointer" />
                <FaInstagram className="text-lg lg:text-2xl cursor-pointer" />
                <FaTwitter className="text-lg lg:text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      </div>

      {/* Footer Copyright  */}
      <hr className="border-t-[#93AEB2]" />
      <div className="py-3 flex justify-center w-full md:text-[14px] md:text-[18px] text-white montserrat-light text-center">
        © Copy right 2025, navodaya.edu.np, All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
