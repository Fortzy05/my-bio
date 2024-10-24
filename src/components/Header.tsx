import Image from "next/image";
import React, { useRef, useState } from "react";

function Header() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (btnRef.current) {
      btnRef.current.classList.toggle("open");
    }
    if (navRef.current) {
      navRef.current.classList.toggle("flex");
      navRef.current.classList.toggle("hidden");
    }
  };
  return (
    <nav className="relative container p-6 mx-auto">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Image height={150} width={150} src="images/logo.svg" alt="" />
        </div>
        <div className="hidden md:flex space-x-6 font-bold">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <a
          href="#"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>

        <button
          id="menu-btn"
          onClick={toggleMenu}
          ref={btnRef}
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="relative">
        <div
          id="menu"
          className={`${
            isOpen ? "open" : "hidden"
          } absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
          ref={navRef}
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
