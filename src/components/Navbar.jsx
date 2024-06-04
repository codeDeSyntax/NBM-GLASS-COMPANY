import {
  FaBars,
  FaTimes,
  // FaFacebook,
  // FaInstagram,
  // FaTwitter,
} from "react-icons/fa";
import { useState } from "react";

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
    <nav className="fixed w-full backdrop-blur-[30px] z-30 ">
      <div className=" py-2 text-white flex items-center justify-between px-12">
        <div className="flex items-center ">
        <img src="nbmLogo.png" alt="" className="h-[40px] w-[40px]"/>
        <p className="font-bold tracking-widest font-serif">NBM</p>
        </div>
        <div className={`hidden md:flex gap-8 justify-between `}>
          <a href="#" className="cursor-pointer  hover:text-gray-500">
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
          <a href="#" className="cursor-pointer  hover:text-gray-500">
            About Us
          </a>
          <a href="#" className="cursor-pointer  hover:text-gray-500">
            Contact Us
          </a>
        </div>
        <div className="cursor-pointer md:hidden">
          <label
            className=" block cursor-pointer md:hidden px-2 py-4 relative select-none"
            htmlFor=""
            onClick={handleToggle}
          >
            {toggleMenu ? (
              <FaTimes className="transition-transform transform rotate-360 duration-300" />
            ) : (
              <FaBars className="transition-transform transform rotate-360 duration-300" />
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
