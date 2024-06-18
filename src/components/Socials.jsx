import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Qualities from "./Qualities";
import TestimonialSlider from "./Testimonial";

// const testimonials = [
//   { name: "Client 1", feedback: "Great service!" },
//   { name: "Client 2", feedback: "Amazing experience!" },
//   { name: "Client 3", feedback: "Highly recommended!" },
//   { name: "Client 4", feedback: "Outstanding quality!" },
//   // Add more testimonials as needed
// ];

const Socials = () => {
  return (
    <div className="bg-background py-[10vh] flex flex-col items-center justify-between p-4">
      {/* <Qualities/> */}
      <TestimonialSlider />
    </div>
  );
};

export default Socials;
