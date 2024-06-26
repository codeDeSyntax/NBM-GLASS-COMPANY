import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ContactHome = ({ vid }) => {
  return (
    <div className="p-2 flex flex-col md:flex-row items-center bg-secondary mt-[4vh] md:mt-[9vh] text-white relative">
      <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center">
        {vid ? (
          <motion.video
            src={vid}
            autoPlay
            loop
            muted
            className="object-cover  w-full md:w-[80%]  rounded-lg"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          />
        ) : (
          <motion.img
            src="/worksample/frame1.jpg"
            className="  w-full md:w-[80%]  rounded-lg"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          />
        )}
      </div>
      <div className="w-full max-w-4xl px-4 py-10 text-center md:text-left md:w-1/2">
        <motion.h1
          className="text-2xl font-semibold mb-4 text-background"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Suppliers and fabricators of all aluminum systems{vid}
        </motion.h1>
        <motion.div
          className="mb-6 flex items-center justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <input
            type="text"
            placeholder="Enter Keywords"
            className="px-4 py-2 rounded-l-md w-2/3 sm:w-1/3 text-black"
          />
          <button className="bg-primary text-black px-4 py-3 rounded-r-md">
            <FaSearch color="white" />
          </button>
        </motion.div>
        <motion.p
          className="text-background"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          We work closely with our clients to bring their visions to life,
          offering bespoke solutions that combine functionality with aesthetic
          appeal.
        </motion.p>
      </div>
    </div>
  );
};

ContactHome.propTypes = {
  vid: PropTypes.string.isRequired,
};

export default ContactHome;
