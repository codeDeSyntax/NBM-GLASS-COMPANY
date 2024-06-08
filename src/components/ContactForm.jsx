const ContactForm = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg my-8">
      <div className="lg:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
          Contact Us
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-[silver] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-[silver] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-[silver] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              placeholder="Your message..."
            />
          </div>
          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="w-full lg:w-auto inline-flex justify-center py-2 px-4 text-background border border-[transparent] shadow-sm text-sm font-medium rounded-md text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="lg:w-1/2 p-4">
        <img
          src="nbmlog1.jpeg"
          alt="Contact Us"
          className="w-full h-full object-cover rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default ContactForm;
