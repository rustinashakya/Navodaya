"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Header.css";
import "../../App.css";
import { Images } from "@/Constants";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaSearch,
  FaHome,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="w-full primary-bg">
      <div className="mx-auto xl:w-[70%] w-[90%] flex flex-col justify-between py-0 md:py-3">
        <div className="flex flex-col-reverse lg:flex-row">
          {/* Header Logo  For Larger Screens*/}
          <div className="w-36 lg:block hidden">
            <a href="/">
              <img src={Images.logo.src} alt="Navodaya-Logo" />
            </a>
          </div>
          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

          {/* Header Right Menus  */}
          <div className="flex flex-col w-full my-3 md:my-4">
            {/* Header Top Most Contact Details  */}
            <div className="flex justify-center lg:justify-end mb-2">
              <div className="grid grid-cols-12 text-tertiary w-full lg:w-[85%] xl:w-[90%] 2xl:w-[70%] ">
                <div className="col-span-6 md:col-span-5 flex justify-start text-[11px] md:text-[15px] montserrat-regular items-center">
                  <FaPhoneAlt className="me-1 text-[11px] md:text-[14px]" />
                  +977-57-525940, +977-57-524959
                </div>
                <div className="col-span-6 md:col-span-4 flex justify-end md:justify-center text-[11px] md:text-[15px] montserrat-regular items-center">
                  <FaEnvelope className="me-2 text-[11px] md:text-[14px]" />
                  inquiry@navodaya.edu.np
                </div>
                <div className="md:col-span-3 hidden md:flex justify-end text-[15px] montserrat-regular items-center">
                  <FaClock className="me-2 text-[11px] md:text-[14px]" />
                  9:00 AM - 5:00 PM
                </div>
              </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

            {/* Header Name of the Institution   */}
            <div className="flex justify-center lg:justify-end roboto-regular text-white text-[20px] md:text-[30px] lg:mb-7 text-center">
              Navodaya Shishu Sadan English Secondary School
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

            {/* Header Logo  For Smaller Screens*/}
            <div className="flex lg:hidden w-full justify-center mt-2 mb-4 md:my-4">
              <a href="/">
                <img
                  src={Images.logo.src}
                  alt="Navodaya-Logo"
                  className="w-20 md:w-28"
                />
              </a>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

            {/* Header Nav Bar and Menus  */}
            <div className="flex justify-end header-nav-bar-menus">
              <nav className="nav-menu bg-white shadow-md md:rounded-md flex justify-center items-center 2xl:w-[68%] mb-[-60px] 2xl:mt-0 nav-menu-above-2xl">
                <div className="flex justify-between md:justify-center items-center py-3 px-5 md:p-4 2xl:p-5 w-full">
                  {/* Header Nav Bar for Larger Screens  */}
                  <ul className="nav-li hidden md:flex space-x-5 2xl:space-x-8 text-secondary roboto-regular text-[16px]">
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
                    <li>
                      <button className="text-gray-600">
                        <FaSearch size={18} />
                      </button>
                    </li>
                  </ul>
                  {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                  {/* Header Nav Bar for Smallery Screens  */}
                  <ul className="nav-li flex md:hidden space-x-5 2xl:space-x-8 text-secondary roboto-regular text-[16px] justify-between w-full">
                    <li className="">
                      <a
                        href="/"
                        className="flex flex-col items-center text-center"
                      >
                        <FaHome size={18} className="mb-1" />
                        <span className="roboto-regular text-[16px]">Home</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center text-center"
                      >
                        <FaSearch size={18} className="mb-1" />
                        <span className="roboto-regular text-[16px]">
                          Search
                        </span>
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={toggleSidebar}
                        className="flex flex-col items-center text-center"
                      >
                        <FaBars size={18} className="mb-1" />
                        <span className="roboto-regular text-[16px]">Menu</span>
                      </button>
                    </li>
                  </ul>
                  {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
                </div>
              </nav>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

            {/* Header Sidebar for Smaller Screens*/}
            {sidebarOpen && (
              <div className="sidebar bg-[#333333] text-white fixed top-0 left-0 h-full w-[250px] p-5 shadow-lg z-50 duration-300 ease-in-out">
                <button
                  onClick={toggleSidebar}
                  className="text-white absolute top-5 right-5 text-[30px]"
                >
                  &times;
                </button>
                <ul className="space-y-4 roboto-regular text-[16px] mt-20 list-none p-0">
                  <li className="p-[15px]">
                    <Link className="text-[16px]" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="p-[15px]">
                    <Link className="text-[16px]" href="/about">
                      About
                    </Link>
                  </li>
                  <li className="p-[15px]">
                    <Link className="text-[16px]" href="/academics">
                      Academics
                    </Link>
                  </li>
                  <li className="p-[15px]">
                    <Link className="text-[16px]" href="/admissions">
                      Admissions
                    </Link>
                  </li>
                  <li className="p-[15px]">
                    <Link className="text-[16px]" href="/notice">
                      Notice
                    </Link>
                  </li>
                  <li className="p-[15px]">
                    <Link className="text-[16px]" href="/students">
                      Students
                    </Link>
                  </li>
                  <li className="p-[15px]">
                    <Link className="text-[16px]" href="/news">
                      News
                    </Link>
                  </li>
                  <li className="p-[15px]">
                    <Link className="text-[16px]" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

          </div>
          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        </div>
      </div>
    </header>
  );
};

export default Header;
