import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import FixedImage from "../components/LandingImage";
import Tabs from "../components/Tab";
import Socials from "../components/Socials";
import ProductList from "../components/Products";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import FloatingWhatsAppIcon from "../components/Whatsapp";
// import MyComponent from "../components/Spring";
// import Framer from "../components/Spring";
// import Images from "../components/GalleryScroll";

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
  const background = "url('home.jpeg')"; // Adjust this path to your background image

  // Hooks for each section
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

  // Trigger animations when components are in view
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
    <div
      className="card-container bg-background"
      style={{ position: "relative", overflow: "hidden" }}
    >
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

      <Tabs />

      <motion.div
        className="bg-background"
        ref={socialRef}
        initial="offscreen"
        animate={socialControls}
        variants={cardVariants}
      >
        <Socials />
      </motion.div>
      {/* <Images/> */}
      <ProductList />
      <ContactForm />
      {/* <MyComponent/> */}
      {/* <Framer /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
