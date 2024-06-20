import { motion } from "framer-motion";
import ContactHome from "../components/ContactHome";

export default function Contact() {
  return (
    <div className="">
      <ContactHome />
      <div className="  my-0 ">
        {/* <h2 className="text-xl font-bold text-center text-text mb-4">
        Reach out to us for any queries
      </h2> */}
        <div className="flex gap-4 flex-col md:flex-row justify-center items-center bg-gray-100 p-4 w-full ">
          <motion.div
            className=" p-4   shadow-sm shadow-secondary w-full bg-background m-2"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
              {/* Left Section */}
              <div className="bg-purple-700 text-white p-8 md:w-1/2">
                <h2 className="text-3xl text-secondary font-semibold mb-4">
                  Get in Touch
                </h2>
                <p className="mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="mb-6">
                  <h3 className="font-bold mb-2">CHAT TO US</h3>
                  <p className="mb-1">Our friendly team is here to help.</p>
                  <a
                    href="mailto:hi@ourcompany.com"
                    className="text-yellow-400"
                  >
                    hi@ourcompany.com
                  </a>
                </div>
                <div className="mb-6">
                  <h3 className="font-bold mb-2">OFFICE</h3>
                  <p className="mb-1">Come say hello at our office HQ.</p>
                  <address className="not-italic">
                    121 Rock Street, 21 Avenue,
                    <br />
                    New York, NY 92103-9000
                  </address>
                </div>
                <div className="mb-6">
                  <h3 className="font-bold mb-2">PHONE</h3>
                  <p className="mb-1">Mon-Fri from 8am to 5am</p>
                  <a href="tel:+1555000000" className="text-yellow-400">
                    +1 (555) 000-000
                  </a>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-white hover:text-yellow-400">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-white hover:text-yellow-400">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-white hover:text-yellow-400">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-white hover:text-yellow-400">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-white hover:text-yellow-400">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>

              {/* Right Section */}
              <div className="bg-white p-8 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl text-secondary font-semibold mb-4">
                  Level up your brand
                </h2>
                <p className="mb-6">
                  You can reach us anytime via{" "}
                  <a
                    href="mailto:hi@ourcompany.com"
                    className="text-purple-700"
                  >
                    hi@ourcompany.com
                  </a>
                </p>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-[gray] text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-[gray] leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-[gray] text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-[gray] leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter a valid email address"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-[gray] text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-[gray] leading-tight focus:outline-none focus:shadow-outline"
                      id="phone"
                      type="text"
                      placeholder="Enter your phone (e.g. +14155552675)"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-[gray] text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      How can we help?
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-[gray] leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="mb-4">
                    <button
                      className="bg-primary hover:bg-yellow-500 text-background font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
