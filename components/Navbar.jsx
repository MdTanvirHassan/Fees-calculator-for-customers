//import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
//import NavLogo from "../public/assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [linkColor, setLinkColor] = useState("#000000");
  // const [position, setPosition] = useState('fixed')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 40) {
        setShadow(true);
        setNavBg("#ffffff");
        setLinkColor("#000000");
      } else {
        setShadow(false);
        setNavBg("transparent");
        setLinkColor("#000000");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 lg:h-[75px] shadow-lg shadow-gray-700 z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }>
      <div className="flex justify-between items-center w-full h-full lg:w-[1246px] lg:h-[50px] m-auto lg:mt-[22px]">
        <Link href="/">
          <div className="">
            {/* <Image
            //   src={NavLogo}
            //   alt="/"
            //   width="141"
            //   height="38"
              className="cursor-pointer  m-auto mt-6"
            /> */}
          </div>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden lg:flex">
            <li className="ml-7 text-bold hover:text-gray-600">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-7 text-bold hover:text-gray-600">
              <Link href="/#program">Program</Link>
            </li>
            <li className="ml-7 text-bold hover:text-gray-600">
              <Link href="/#blog">Blog</Link>
            </li>
            <li className="ml-7 text-bold hover:text-gray-600">
              <Link href="/#about">About us</Link>
            </li>

            {/* <li className="ml-7 text-bold hover:text-gray-600">
              <Link href="/#login">
                <button
                  type="button"
                  className="bg-[#264373] text-white w-[114px] h-[50px] rounded-[10px] hover:bg-indigo-900 active:ring-1 -mt-5">
                  Log in
                </button>
              </Link>
            </li> */}
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="lg:hidden px-4">
            <AiOutlineMenu size={25} className="text-black" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-5 ease-in duration-500"
              : "fixed left-[-150%] top-0 p-5 ease-in duration-500"
          }>
          <div>
            <div className="flex flex-row w-full items-center justify-between">
              {/* <Link href="/">
                <>
                  <Image
                    // src={NavLogo}
                    // width="275"
                    // height="75"
                    // alt="/"
                    // className=""
                  />
                </>
              </Link> */}
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
                <AiOutlineClose className="text-black" />
              </div>
            </div>
            <div className="border-b border-gray-300 my-2"></div>
          </div>
          <div className="py-2 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#program">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Program
                </li>
              </Link>
              <Link href="/#blog">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Blog
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  About us
                </li>
              </Link>

              {/* <Link href="/#login">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Log in
                </li>
              </Link> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
