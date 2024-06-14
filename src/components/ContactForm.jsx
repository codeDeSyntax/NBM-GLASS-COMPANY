import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="container py-6 bg-no-repeat lg:w-[80%] mx-auto p-6 flex flex-col items-center  shadow-lg bg-primary bg-cover rounded-lg my-8">
      <motion.div
        className="w-full lg:w-[60%] py-8 mt-6 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl flex items-center justify-center  gap-3 font-bold mb-3 text-background text-center">
          Contact Us
          <img src="/contact.png" alt="" className="w-20 h-29 animate-bounce" />
        </h2>
        <form className="space-y-6 text-background">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-3 border-2 border-secondary rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-3 border-2 border-secondary rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              className="block w-full px-4 py-3 border-2 border-secondary rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              placeholder="Your message..."
            />
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              className="w-full lg:w-auto inline-flex justify-center py-3 px-6 border border-transparent text-background shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
