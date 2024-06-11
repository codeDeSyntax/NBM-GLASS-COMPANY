import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

function ProjectsSlider() {
  return (
    <div className="relative w-full py-8 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-background mb-6">
          <h2 className="text-3xl font-bold">OUR PROJECTS</h2>
          <button className="mt-4 px-6 py-2 bg-[white] text-primary rounded-full shadow-lg hover:bg-gray-200">
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
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[white] rounded-lg shadow-lg overflow-hidden">
              <img
                src="nbmlog1.jpeg"
                alt="Paris Courthouse"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">PARIS COURTHOUSE</h3>
                <p>
                  Launched in 2012 as part of the re-organization of the ...
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[white] rounded-lg shadow-lg overflow-hidden">
              <img
                src="nbmlog1.jpeg"
                alt="REWAG Headquarters"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">REWAG Headquarters</h3>
                <p>
                  The 10,500 square meters administrative building of
                  Regensburger Municipal utilities ...
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[white] rounded-lg shadow-lg overflow-hidden">
              <img
                src="nbmlog1.jpeg"
                alt="REWAG Headquarters"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">REWAG Headquarters</h3>
                <p>
                  The 10,500 square meters administrative building of
                  Regensburger Municipal utilities ...
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[white] rounded-lg shadow-lg overflow-hidden">
              <img
                src="nbmlog1.jpeg"
                alt="REWAG Headquarters"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">REWAG Headquarters</h3>
                <p>
                  The 10,500 square meters administrative building of
                  Regensburger Municipal utilities ...
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectsSlider;
