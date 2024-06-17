import { FaBars, FaSearch, FaTimes, FaCaretDown } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setToggleMenu(false);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (toggleMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <nav
      className={`fixed top-0 w-full flex justify-center flex-col shadow-md z-30 bg-background`}
    >
      <div className="w-full py-2 flex items-center justify-between px-4 lg:px-12">
        <div className="flex items-center">
          <img src="nbmLogo.png" alt="Logo" className="h-[40px] w-[40px]" />
          <p className="font-bold tracking-widest font-serif ml-2">NBM</p>
        </div>
        <div className="hidden md:flex gap-8 items-center text-base font-body font-medium">
          <a href="#" className="cursor-pointer">
            Home
          </a>
          <Link to="/" className="cursor-pointer">
            About Us
          </Link>
          <Link to="" className="cursor-pointer">
            Services
          </Link>
          <a href="#" className="cursor-pointer">
            Portfolio
          </a>
          <a href="/projects" className="cursor-pointer">
            Projects
          </a>
          <div className="p-2 flex items-center justify-center bg-accent rounded-full">
            <FaSearch className="text-[1rem] text-primary" />
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
        <div className="cursor-pointer md:hidden" onClick={handleToggle}>
          {toggleMenu ? (
            <FaTimes className="transition-transform transform rotate-360 duration-300 text-text" />
          ) : (
            <FaBars className="transition-transform transform rotate-360 duration-300 text-text" />
          )}
        </div>
      </div>
      <div
        ref={menuRef}
        className={`md:hidden bg-background z-20 transition-all duration-300 ease-in-out overflow-hidden ${
          toggleMenu ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center p-2 justify-start">
          <li className="border-gray-700 py-2 px-3 hover:text-gray-500 w-full ">
            <Link to="/" onClick={handleToggle}>
              Home
            </Link>
          </li>
          <li className="border-gray-700 py-2 px-3 hover:text-gray-500 w-full ">
            <button
              onClick={handleDropdownToggle}
              className="w-full  flex items-center justify-start"
            >
              Products <FaCaretDown />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                dropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="bg-secondary w-full text-background">
                <li className="p-2 hover:bg-blue-700 w-full text-center">
                  <Link to="/" onClick={handleToggle}>
                    Product 1
                  </Link>
                </li>
                <li className="p-2 hover:bg-blue-700 w-full text-center">
                  <Link to="/" onClick={handleToggle}>
                    Product 2
                  </Link>
                </li>
                <li className="p-2 hover:bg-blue-700 w-full text-center">
                  <Link to="/" onClick={handleToggle}>
                    Product 3
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-[gray] py-2 px-3 hover:text-gray-500 w-full ">
            <Link to="/other" onClick={handleToggle}>
              About Us
            </Link>
          </li>
          <li className="border-[gray] py-2 px-3 hover:text-gray-500 w-full ">
            <Link href="#" onClick={handleToggle}>
              Contact Us
            </Link>
          </li>
          <li className="border-[gray] py-2 px-3 hover:text-gray-500 w-full ">
            <Link to="projects" onClick={handleToggle}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
