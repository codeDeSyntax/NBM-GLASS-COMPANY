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
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <FaArrowRight className="text-black text-2xl cursor-pointer" />
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
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <FaArrowLeft className="text-black text-2xl cursor-pointer" />
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
    <div className="relative w-[80%] h-[70vh] md:h-[90vh] bg-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex items-center justify-center p-8">
              <div className="flex items-center w-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 object-cover rounded-full mr-8"
                />
                <div>
                  <h3 className="text-2xl font-bold">
                    {testimonial.name},{" "}
                    <span className="italic">{testimonial.title}</span>
                  </h3>
                  <p className="mt-4">{testimonial.quote}</p>
                  <button className="mt-4 px-4 py-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800">
                    read more
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
