import { FaShieldAlt, FaLightbulb } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { name: "Client 1", feedback: "Great service!" },
  { name: "Client 2", feedback: "Amazing experience!" },
  { name: "Client 3", feedback: "Highly recommended!" },
  { name: "Client 4", feedback: "Outstanding quality!" },
  // Add more testimonials as needed
];

const Socials = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-background py-[10vh] flex flex-col items-center justify-between p-4">
      <h2 className="text-2xl font-bold text-secondary mb-4">
        WHAT PEOPLE SAY AND FEEL ABOUT US?
      </h2>
      <section className="flex flex-col w-[90%] md:flex-row items-center justify-center gap-10 mb-20">
        <article className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out md:w-1/3">
          <FaLightbulb size={50} className="mb-4 text-primary" />
          <div className="text-center">
            <p className="text-xl font-bold">Creativity</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              magnam soluta officia velit aliquam fugit, reiciendis quo cum
              voluptates odit inventore iusto esse ullam, tempora incidunt culpa
              dolorum corrupti expedita!
            </p>
          </div>
        </article>
        <article className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out md:w-1/3">
          <MdWork size={50} className="mb-4 text-primary" />
          <div className="text-center">
            <p className="text-xl font-bold">Professionalism</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              magnam soluta officia velit aliquam fugit, reiciendis quo cum
              voluptates odit inventore iusto esse ullam, tempora incidunt culpa
              dolorum corrupti expedita!
            </p>
          </div>
        </article>
        <article className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out md:w-1/3">
          <FaShieldAlt size={50} className="mb-4 text-primary" />
          <div className="text-center">
            <p className="text-xl font-bold">Integrity</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              magnam soluta officia velit aliquam fugit, reiciendis quo cum
              voluptates odit inventore iusto esse ullam, tempora incidunt culpa
              dolorum corrupti expedita!
            </p>
          </div>
        </article>
      </section>
      <h2 className="text-2xl font-bold text-secondary mb-4">
        CLIENT EXPERIENCES
      </h2>
      <div className="w-[90%] px-3 py-6 bg-[url(glassar.jpg)]">
        <Slider {...settings} className="mx-4 my-3 backdrop-blur-2xl">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="text-center px-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 bg-white shadow-lg rounded-xl flex items-center justify-center flex-col hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <div className="w-24 h-24 bg-cover bg-center rounded-full bg-[url('profile.jpg')] mb-4"></div>
                <p className="text-xl font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600 mb-2">
                  {testimonial.feedback}
                </p>
                <p className="text-sm text-background">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium quasi, doloribus assumenda possimus excepturi
                  maxime? Expedita quas blanditiis ea ullam? Quis sequi quos et,
                  temporibus iure placeat molestiae ea eligendi nesciunt
                  laborum.
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Socials;
