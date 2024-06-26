import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

const products = [
  {
    icon: "https://media.istockphoto.com/id/157638164/photo/white-wooden-window.jpg?s=612x612&w=0&k=20&c=LNIoYCKG69xSGMK5IXI19wZLqrNHfFSoE0TMV1OjL4o=",
    label: "Custom Windows",
  },
  {
    icon: "https://media.istockphoto.com/id/916326718/photo/modern-kitchen-interior.jpg?s=612x612&w=0&k=20&c=hcrHQw9Ih6rH4JUpDruQ04fhBtJNPaoBSLqfn0O2VDc=",
    label: "Doors",
  },
  {
    icon: "https://media.istockphoto.com/id/1439658693/photo/entrance-to-new-house-with-living-room-and-kitchen.jpg?s=612x612&w=0&k=20&c=Q9OQfL2J25P4w-OZOn7E-FWgeTBoTcR1NxARxfZEgbM=",
    label: "Glass Railings",
  },
  {
    icon: "https://media.istockphoto.com/id/1448074291/photo/stainless-steel-railing-on-the-concrete-wall-of-the-roof-parking-lot-anchored-screws-to-the.jpg?s=612x612&w=0&k=20&c=QNnZ3imjSUygpZXYYpO5-LHNLbeeNLc46qOK6bwcqUs=",
    label: "Curtain Walls",
  },
  {
    icon: "https://media.istockphoto.com/id/183793735/photo/modern-wardrobe.jpg?s=612x612&w=0&k=20&c=w0t9CF4Nk0z2D0C3aY5hnhKKObfRL1Gyn5KJRexpwcI=",
    label: "Storefront Systems",
  },
];

const ProductSlider = () => {
  const settings = {
    dots: true,
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
    <div className=" mx-auto p-8 bg-background">
      <h2 className="text-xl font-bold text-secondary mb-4">
        WHICH PRODUCT ARE YOU LOOKING FOR?
      </h2>
      <p className="text-xl text-text mb-8">Our products by categories</p>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div className="flex flex-col items-center p-2 bg-[white] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-40 mb-2 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.icon}
                  alt={product.label}
                  className="h-full"
                />
              </div>
              <p className="text-center font-bold text-secondary mt-2">
                {product.label}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-8 flex items-center justify-center">
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
      className={`${className} slick-arrow slick-next bg-secondary text-background rounded-full flex items-center justify-center`}
      style={{ ...style, display: "block", padding: "px" }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

export default ProductSlider;
