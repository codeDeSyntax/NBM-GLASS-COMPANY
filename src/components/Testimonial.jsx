import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

const testimonials = [
  {
    image: "/profile.jpg",
    name: "John Jackson",
    title: "developer",
    quote:
      "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
  },
  {
    image: "/nbmlog1.jpeg",
    name: "John Jackson",
    title: "developer",
    quote:
      "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
  },
  // Add more testimonials as needed
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-20px] md:right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-secondary"
      onClick={onClick}
    >
      <FaArrowRight className="text-background text-2xl cursor-pointer size-5" />
    </div>
  );
};

NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute bg-secondary left-[-20px] md:left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full "
      onClick={onClick}
    >
      <FaArrowLeft className="text-background text-2xl  cursor-pointer size-5" />
    </div>
  );
};

PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full md:w-[80%] h-[70vh] md:h-[90vh] bg-white flex-col flex items-center justify-center">
      <h2 className="text-2xl font-bold text-secondary mb-4">SUSTAINABILITY</h2>
      <div className="container mx-auto px-4 bg-[white]">
        <Slider {...settings} className="bg-[white]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8"
            >
              <div className="flex flex-col md:flex-row items-center w-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mb-4 md:mb-0 md:mr-8"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {testimonial.name},{" "}
                    <span className="italic">{testimonial.title}</span>
                  </h3>
                  <p className="mt-4">{testimonial.quote}</p>
                  <button className="mt-4 px-4 py-2 bg-secondary text-background rounded-full shadow-lg hover:bg-gray-800">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialSlider;
