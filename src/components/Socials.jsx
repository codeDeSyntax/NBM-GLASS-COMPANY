import { FaShieldAlt, FaLightbulb } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaUser } from "react-icons/fa6";

const testimonials = [
  { name: "Client 1", feedback: "Great service!" },
  { name: "Client 2", feedback: "Amazing experience!" },
  { name: "Client 3", feedback: "Highly recommended!" },
  { name: "Client 3", feedback: "Highly recommended!" },
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
    centerMode: false,
    centerPadding: "20px", // Adjust as needed
  };

  return (
    <div className="bg-background m-auto py-[10vh] flex flex-col items-center justify-between p-4">
      <section className="flex bg-background flex-col w-[90%] md:flex-row items-center justify-center gap-10 mb-[10rem]">
        <article className="flex  bg-background flex-col items-center p-4  bg-white  rounded-md">
          <FaLightbulb size={50} className="mb-4 text-primary " />
          <div className="text-center">
            <p className="text-lg font-bold">Creativity</p>
            <p className="text-sm text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              magnam soluta officia velit aliquam fugit, reiciendis quo cum
              voluptates odit inventore iusto esse ullam, tempora incidunt culpa
              dolorum corrupti expedita!
            </p>
          </div>
        </article>
        <article className="flex flex-col bg-background items-center p-4 bg-white  rounded-md">
          <MdWork size={50} className="mb-4 text-primary" />
          <div className="text-center">
            <p className="text-lg font-bold">Professionalism</p>
            <p className="text-sm text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              magnam soluta officia velit aliquam fugit, reiciendis quo cum
              voluptates odit inventore iusto esse ullam, tempora incidunt culpa
              dolorum corrupti expedita!
            </p>
          </div>
        </article>
        <article className="flex flex-col bg-background items-center p-4 bg-white  rounded-md">
          <FaShieldAlt size={50} className="mb-4 text-primary" />
          <div className="text-center">
            <p className="text-lg font-bold">Integrity</p>
            <p className="text-sm text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              magnam soluta officia velit aliquam fugit, reiciendis quo cum
              voluptates odit inventore iusto esse ullam, tempora incidunt culpa
            </p>
          </div>
        </article>
      </section>
      <div className=" w-[90%] px-3 py-6  ">
        <Slider {...settings} className="mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center px-4 ">
              <div className="p-4 bg-white shadow-md rounded-md bg-[white] flex items-center justify-center flex-col">
                <div className="bg-[url('profile.jpg')] bg bg-cover w-20 h-20 bg-center rounded-full"></div>
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.feedback}</p>
                <p className="text-sm text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium quasi, doloribus assumenda possimus excepturi
                  maxime? Expedita quas blanditiis ea ullam? Quis sequi quos et,
                  temporibus iure placeat molestiae ea eligendi nesciunt laborum
                  recusandae, ab possimus voluptas ipsa qui aperiam neque
                  blanditiis sit delectus architecto nam explicabo! Iste ex nemo
                  dolores.
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Socials;
