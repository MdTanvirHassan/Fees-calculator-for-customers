import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../public/assets/logo2.png";
import {AiFillFacebook, AiFillInstagram,AiOutlineTwitter,AiFillLinkedin,AiFillMail} from "react-icons/ai"

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-black/10">
        <div className="container px-2 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
             <div className="lg:w-1/4   w-full px-4" >
              
                 <a href="/">
                 <Image src={logo} alt="..." className="cursor-pointer m-auto md:m-0 mb-4" width={120} height={120} />
                  </a>
              </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className=" text-gray-900 font-bold text-xl tracking-widest mb-3">
                Datenschutz und Bedingungen
              </h2>
              <nav className="list-none mb-5">
                <li>
                  <Link href={'/Privacy'} className="text-gray-600 text-lg mb-2 hover:text-gray-800 cursor-pointer">
                   Datenschutz-Bestimmungen
                  </Link>
                </li>
                <li>
                <Link href={'/Condition'} className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer">
                Terms & amp
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className=" text-gray-900 font-bold text-xl tracking-widest mb-4">
              Schnelle Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                <Link href={'/contact'} className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer">
                Kontaktiere uns
                  </Link>
                </li>
                <li>
                <Link href={'/about'} className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer">Über uns</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className=" text-gray-900 font-bold text-xl tracking-widest mb-4">
              Kontaktiere uns
              </h2>
              <div className="flex space-x-2 justify-center md:justify-start  mb-4">
                     <AiFillMail className="text-2xl"/>
                      <a className="text-lg"  mailto="kontact@payrechner.de"> kontact@payrechner.de</a>
                    </div>
              <nav className="list-none mb-10">
                  
                    <div className="py-2 ">
                    <ul className="flex space-x-2 text-4xl justify-center md:justify-start">
                        <li className=""><AiFillFacebook/></li>
                        <li><AiFillInstagram/></li>
                        <li><AiOutlineTwitter/></li>
                        <li><AiFillLinkedin/></li>
                    </ul>
                  </div>
                </nav>
             </div>
           </div>
         </div>
          <div className=" bg-gray-100">
             <div className=" items-center justify-center py-4 px-5 flex flex-wrap flex-col sm:flex-row">
             <p className="text-gray-800 text-md text-center ">
             © Copyright 2023 Pay Rechner— All Rights Reserved
              </p>
            
             </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
