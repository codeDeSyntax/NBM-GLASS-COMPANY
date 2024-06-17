import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 bg-gray-100"
    >
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left  ">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="proj1.jpg"
            alt="Saint-Gobain Logo"
            className="mb-4 w-full h-32 object-cover"
          />
          <p className="text-gray-700 max-w-xs">
            Saint-Gobain Building Glass manufactures and offers a full range of
            different types of flat construction glass.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-gray-800 mb-4">Practical Links</h4>
          <ul className="text-gray-700 space-y-2">
            <li>
              <a href="#" className="hover:text-primary">
                CE Marking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Legal Notice
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Your Data and Your Rights
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-gray-800 mb-4">Local Websites</h4>
          <ul className="text-gray-700 space-y-2">
            <li>
              <a href="#" className="hover:text-primary">
                Careers
              </a>
            </li>
          </ul>
          <h4 className="font-semibold text-gray-800 mb-4 mt-6">
            Other Websites
          </h4>
          <ul className="text-gray-700 space-y-2">
            <li>
              <a href="#" className="hover:text-primary">
                Saint-Gobain
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Glassolutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Vetrotech
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                SageGlass
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Swisspacer
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-gray-800 mb-4">Other Countries</h4>
          <div className="relative inline-block w-full text-gray-700 mb-4">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>United Kingdom</option>
              {/* Add more options here */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-4-4h8l-4 4z" />
              </svg>
            </div>
          </div>
          <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-secondary hover:text-primary">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-secondary hover:text-primary">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-secondary hover:text-primary">
              <FaGlobe size={24} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
