import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaWindowMaximize, FaDoorOpen, FaGripLinesVertical, FaBuilding, FaStore } from "react-icons/fa";
import PropTypes from "prop-types";

const products = [
  { icon: <FaWindowMaximize />, label: "Custom Windows" },
  { icon: <FaDoorOpen />, label: "Doors" },
  { icon: <FaGripLinesVertical />, label: "Glass Railings" },
  { icon: <FaBuilding />, label: "Curtain Walls" },
  { icon: <FaStore />, label: "Storefront Systems" },
];

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold text-secondary mb-4">
        WHICH PRODUCT ARE YOU LOOKING FOR?
      </h2>
      <p className="text-xl text-text mb-8">Our products by categories</p>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div className="flex flex-col items-center">
              <div className="w-[100%] md:w-60 flex items-center justify-center m-1 rounded-lg h-24 mb-2 text-[4rem] text-[orange] bg-[white]">
                {product.icon}
              </div>
              <p className="text-center font-bold">{product.label}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-8">
        <button className="flex items-center px-6 py-3 bg-secondary text-background font-bold rounded-full hover:bg-blue-700 transition">
          ALL PRODUCTS
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

const SampleNextArrow = ({ className, style, onClick }) => {
  SampleNextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };
  return (
    <div
      className={`${className} slick-arrow slick-next bg-text h-4 w-4 rounded-full flex items-center justify-center text-text`}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    >
      <FaArrowRight className="text-text" />
    </div>
  );
};

export default ProductSlider;
