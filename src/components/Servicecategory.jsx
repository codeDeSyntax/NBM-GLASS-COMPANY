import { FaArrowRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const categories = [
  {
    title: "ENERGY & CARBON",
    image:
      "https://media.istockphoto.com/id/486463252/photo/sheets-of-tempered-window-glass.jpg?s=612x612&w=0&k=20&c=YM7w2JcvO9-q6IdI99UIhK0yzvu7nVlpUr69wb3TNKA=", // Replace with your image URL
  },
  {
    title: "RESOURCES & CIRCULARITY",
    image:
      "https://media.istockphoto.com/id/475805595/photo/beautiful-garden-windows.jpg?s=612x612&w=0&k=20&c=AzPIL9HQxACLLiC9-wpqee7LbPcJHyXy2AKudUQvdJA=", // Replace with your image URL
  },
  {
    title: "HEALTH & WELL-BEING",
    image:
      "https://ideogram.ai/assets/image/lossless/response/ILniWC0IQKKVVmPf0I_eIg", // Replace with your image URL
  },
  {
    title: "GREEN BUILDING LABELLING SCHEMES",
    image:
      "https://ideogram.ai/assets/image/lossless/response/RLEjmcwfTGe1djTf-1KiOg", // Replace with your image URL
  },
];

const ServiceCategory = () => {
  return (
    <div className="bg-primary py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-background mb-4">
        SUSTAINABILITY
      </h2>
      <p className="text-xl text-accent text-center mb-8 px-4">
        With 350 years of experience in designing and delivering architectural
        glazing projects sustainability is now part of our DNA
      </p>
      <div className="w-full md:w-3/4 lg:w-2/3 px-4">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
        >
          {categories.map((category, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="object-fit   w-full h-64 md:h-72"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  {category.title}
                </h3>
              </div>
              <div className="absolute bottom-4 right-4">
                <button className="bg-background text-blue-900 rounded-full p-2">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <button className="mt-8 flex items-center px-6 py-3 bg-secondary text-background font-bold rounded-full hover:bg-blue-700 transition">
        LEARN MORE
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default ServiceCategory;
