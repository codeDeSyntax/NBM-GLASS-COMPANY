import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent text-white py-8 mt-8 foot"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0 md:w-1/3">
          <h3 className="text-lg font-bold">Glass Fabrication Company</h3>
          <p>© 2024 All Rights Reserved</p>
        </div>
        <div className="flex flex-col md:flex-row md:w-2/3 justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-md font-semibold">Contact Us</h4>
            <p className="text-gray-400">123 Glass Street, Fabrication City</p>
            <p className="text-gray-400">Email: contact@glassfab.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-md font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
