import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FixedImage from "../components/LandingImage";
import Socials from "../components/Socials";
import ContactForm from "../components/ContactForm";
import FloatingWhatsAppIcon from "../components/Whatsapp";
import ProjectsSlider from "../components/ProjectsSwipe";
import ProductSlider from "../components/QuestService";
import ServiceCategory from "../components/Servicecategory";
import Mac from "../components/Mac";
import Contact from "../components/ContactForm";
// import ProjectGallery from '../components/ProjectsGallery';

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const LandingPage = () => {
  const background = "url('nbmlog1.jpeg')"; // Adjust this path to your background image

  const fixedImageControls = useAnimation();
  const socialControls = useAnimation();

  const [fixedImageRef, fixedImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [socialRef, socialInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (fixedImageInView) {
      fixedImageControls.start("onscreen");
    }
  }, [fixedImageInView, fixedImageControls]);

  useEffect(() => {
    if (socialInView) {
      socialControls.start("onscreen");
    }
  }, [socialInView, socialControls]);

  return (
    <div>
      <div
        className="splash"
        style={{
          background,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <FloatingWhatsAppIcon />
      <motion.div
        className="bg-background"
        ref={fixedImageRef}
        initial="offscreen"
        animate={fixedImageControls}
        variants={cardVariants}
      >
        <FixedImage />
      </motion.div>
      <ServiceCategory />
      <ProductSlider />
      <ProjectsSlider />
      <motion.div
        className="bg-background"
        ref={socialRef}
        initial="offscreen"
        animate={socialControls}
        variants={cardVariants}
      >
        <Mac />
        <Socials />
      </motion.div>

      <Contact />
      {/* <Contact /> */}
    </div>
  );
};

export default LandingPage;
