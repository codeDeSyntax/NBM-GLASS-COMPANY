import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 py-10"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img src="nbmlog1.jpeg" alt="Saint-Gobain Logo" className="mb-4" />
          <p className="text-gray-700 max-w-xs">
            Saint-Gobain Building Glass manufactures and offers a full range of different types of flat construction glass.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-gray-800 mb-4">PRACTICAL LINKS</h4>
          <ul className="text-gray-700">
            <li className="mb-2"><a href="#">CE MARKING</a></li>
            <li className="mb-2"><a href="#">LEGAL NOTICE</a></li>
            <li className="mb-2"><a href="#">YOUR DATA AND YOUR RIGHTS</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-gray-800 mb-4">LOCAL WEBSITES</h4>
          <ul className="text-gray-700">
            <li className="mb-2"><a href="#">CAREERS</a></li>
          </ul>
          <h4 className="font-semibold text-gray-800 mb-4 mt-6">OTHER WEBSITES</h4>
          <ul className="text-gray-700">
            <li className="mb-2"><a href="#">SAINT-GOBAIN</a></li>
            <li className="mb-2"><a href="#">GLASSOLUTIONS</a></li>
            <li className="mb-2"><a href="#">VETROTECH</a></li>
            <li className="mb-2"><a href="#">SAGEGLASS</a></li>
            <li className="mb-2"><a href="#">SWISSPACER</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-gray-800 mb-4">OTHER COUNTRIES</h4>
          <div className="relative inline-block w-full text-gray-700 mb-4">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>UNITED KINGDOM</option>
              {/* Add more options here */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-4-4h8l-4 4z" /></svg>
            </div>
          </div>
          <h4 className="font-semibold text-gray-800 mb-4">FOLLOW US</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400"><FaTwitter size={24} /></a>
            <a href="#" className="text-blue-700"><FaLinkedin size={24} /></a>
            <a href="#" className="text-blue-500"><FaGlobe size={24} /></a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
