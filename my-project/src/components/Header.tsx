import React from "react";

function Header() {
  return (
    <div className="">
      <nav className="relative container p-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src="images/logo.svg" alt="" />
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
        </div>
      </nav>
    </div>
  );
}

export default Header;
