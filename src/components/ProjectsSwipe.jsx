import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

function ProjectsSlider() {
  return (
    <div className="relative w-full h-screen bg-[url('/backg.png')] bg-cover flex items-center justify-center ">
      <div className="container mx-auto px-4">
        <div className="text-white mb-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-background">
            OUR PROJECTS
          </h2>
          <button className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-background text-primary rounded-full shadow-lg hover:bg-gray-200">
            DISCOVER PROJECTS &rarr;
          </button>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper backdrop-blur-3xl"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

// Example project data, replace with your actual data
const projects = [
  {
    image: "/worksample/sample1.jpeg",
    title: "PARIS COURTHOUSE",
    description: "Launched in 2012 as part of the re-organization of the ...",
  },
  {
    image: "/proj1.jpg",
    title: "REWAG Headquarters",
    description:
      "The 10,500 square meters administrative building of Regensburger Municipal utilities ...",
  },
  {
    image: "/nbmlog1.jpeg",
    title: "REWAG Headquarters",
    description:
      "The 10,500 square meters administrative building of Regensburger Municipal utilities ...",
  },
  {
    image: "/nbmlog1.jpeg",
    title: "REWAG Headquarters",
    description:
      "The 10,500 square meters administrative building of Regensburger Municipal utilities ...",
  },
  // Add more projects as needed
];

export default ProjectsSlider;
