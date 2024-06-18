import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex gap-4 flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 p-4">
      <motion.div
        className="bg-primary text-background h-[80vh]  p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 m-2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">Call Us</h2>
        <p>1 (234) 567-891, 1 (234) 987-654</p>
        <h2 className="text-2xl font-bold my-4">Location</h2>
        <p>121 Rock Street, 21 Avenue, New York, NY 92103-9000</p>
        <h2 className="text-2xl font-bold my-4">Business Hours</h2>
        <p>Mon – Fri ..... 10 am – 8 pm, Sat, Sun ...... Closed</p>
        <button
          type="submit"
          className="w-full text-background p-2 rounded mt-4"
        >
          SUBMIT
        </button>
      </motion.div>
      <motion.div
        className=" p-6 rounded-lg shadow-lg w-full md:w-[30vw] lg:w-[30vw] m-2"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="flex flex-col justify-between min-h-full">
          <div className="mb-4">
            <label className="block text-gray-700">Enter your Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Enter a valid email address
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-background p-2 rounded mt-4"
          >
            SUBMIT
          </button>
        </form>
      </motion.div>
    </div>
  );
}
