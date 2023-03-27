import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../public/assets/1.png";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-black/10">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left ">
            
                <Image src={logo} alt='...'  width={100}  height={100}  className="w-[90px] h-[60px] "/>
                <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className=" text-gray-900 tracking-widest text-sm mb-3">
                Privacy & Terms
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={'/privacy'} className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                <Link href={'/Conditions'} className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Terms & Conditions
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className=" text-gray-900 tracking-widest text-sm mb-3">
                Quick Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                <Link href={'/contact'} className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Contact Us
                  </Link>
                </li>
                <li>
                <Link href={'/about'} className="text-gray-600 hover:text-gray-800 cursor-pointer">About Us</Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="mt-0 justify-center md:items-center pb-5  md:mt-0  text-left">
                <div className=" px-2 ">
                  <h3 className="font-bold  text-xl  mb-4 text-black text-center">
                    Subscribe To Newsletter
                  </h3>
                  <form action="" className="flex justify-center">
                    <div className=" ">
                      <input
                        type="email"
                        className="bg-white text-start border border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2  shadow-xl shadow-gray-300"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <button
                      type="button"
                      className="text-white bg-orange-500 hover:bg-black/70 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm px-5 py-0 text-center -ml-1 z-10">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto items-center justify-center py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center  sm:text-left">
            © Copyright 2023 Paypal —  All Rights Reserved
            </p>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
