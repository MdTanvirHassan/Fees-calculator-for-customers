import React from "react";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import NavLogo from "../public/assets/logo.png";
const Navbarr = () => {
  return (
    <>
     
     <div className="px-7 shadow-xl sticky top-0 bg-white z-50">
      <Navbar
        fluid={true}
        rounded={true}
      >
        
        
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            // active={true}
          >
            <p className="text-xl">Heim</p>

          </Navbar.Link>
          <Navbar.Link href="/about">
            <p className="text-xl">Über Uns</p>
          </Navbar.Link>
          </Navbar.Collapse>
          
          <Navbar.Brand href="/">
               <Image
                src={NavLogo}
                alt="/"
                width={80} height={80} 
                className="cursor-pointer"
              />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/Paypal">
            <p className="text-xl"> Paypal</p>
          </Navbar.Link>
          <Navbar.Link href="/contact">
            <p className="text-xl">Kontakt</p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      </div>
    </>
  );
};

export default Navbarr;