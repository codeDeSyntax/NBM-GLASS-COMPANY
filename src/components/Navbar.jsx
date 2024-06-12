import {
  FaBars,
  FaSearch,
  FaTimes,
  // FaFacebook,
  // FaInstagram,
  // FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
// import { motion } from "framer-motion";

// import NavContact from "./NavContact";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full flex justify-center flex-col shadow-md
      } z-30   ${"bg-background    "}`}
    >
      {/* {!isShrunk && <NavContact />} */}
      <div className="w-full py-2 flex items-center justify-around px-12">
        <div className="flex items-center ">
          <img src="nbmLogo.png" alt="" className="h-[40px] w-[40px]" />
          <p className="font-bold tracking-widest font-serif">NBM</p>
        </div>
        <div
          className={`hidden md:flex gap-8 justify-between items-center text-background ${"text-text text-[1.2rem]"} font-medium`}
        >
          <a href="#" className="cursor-pointer  ">
            Home
          </a>
          {/* <div className="relative">
            <button
              className="cursor-pointer  hover:text-gray-500"
              onClick={handleDropdownToggle}
            >
              Products
            </button>
          </div> */}
          <a href="#" className="cursor-pointer ">
            About Us
          </a>
          <a href="#" className="cursor-pointer ">
            Services
          </a>
          <a href="#" className="cursor-pointer ">
            Portfolio
          </a>
          <div className="p-5 flex items-center justify-center bg-accent rounded-full">
            <FaSearch className="text-[1rem] text-primary " />
          </div>
          <a
            href="your-contact-url"
            className="flex items-center justify-center bg-secondary hover:bg-teal-600 text-background font-medium py-2 px-4 rounded-full"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7H7v6m0 0h6m-6 0l7-7m4 6h5a2 2 0 002-2V5a2 2 0 00-2-2h-5a2 2 0 00-2 2v5a2 2 0 002 2z"
              ></path>
            </svg>
            CONTACT US
          </a>
        </div>
        <div className="cursor-pointer md:hidden">
          <label
            className=" block cursor-pointer md:hidden px-2 py-4 relative select-none"
            htmlFor=""
            onClick={handleToggle}
          >
            {toggleMenu ? (
              <FaTimes className="transition-transform transform rotate-360 duration-300 " />
            ) : (
              <FaBars
                className={`transition-transform transform rotate-360 duration-300 text-background ${"text-text"}`}
              />
            )}
          </label>
        </div>
      </div>
      {toggleMenu && (
        <div className="md:hidden bg-blue-900 z-20">
          <ul>
            <li className="border-b border-gray-700 py-2 px-3 hover:text-gray-500">
              Home
            </li>
            <li className="border-b border-gray-700 py-2 px-3 hover:text-gray-500">
              <button
                onClick={handleDropdownToggle}
                className="w-full text-left"
              >
                Products
              </button>
              {dropdownOpen && (
                <ul className="bg-blue-800">
                  <li className="p-2 hover:bg-blue-700">Product 1</li>
                  <li className="p-2 hover:bg-blue-700">Product 2</li>
                  <li className="p-2 hover:bg-blue-700">Product 3</li>
                </ul>
              )}
            </li>
            <li className="border-b border-gray-700 py-2 px-3 hover:text-gray-500">
              About Us
            </li>
            <li className="border-b border-gray-700 py-2 px-3 hover:text-gray-500">
              Contact Us
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
