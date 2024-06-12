import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

// List of background images
const images = [
  "/home.jpeg",
  "/nbmlog1.jpeg",
  "/structure.jpg",
  "/glassset.jpeg",
  // Add more images as needed
];

const pieces = Array.from({ length: 1 }, (_, i) => i);

const FixedImage = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 9000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Trigger the complete animation after the initial grid animation
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, pieces.length * 100 + 1000); // Wait for all pieces to animate in

    return () => clearTimeout(timer);
  }, []);

  const { opacity } = useSpring({
    opacity: isComplete ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={{
        opacity,
        backgroundImage: `linear-gradient(to right bottom, rgba(30,0,160,0.8), rgba(8,8,8,0.8)), url('${images[currentImage]}')`,
      }}
      className={`w-full h-[90vh] md:h-[80vh] bg-cover bg-no-repeat flex items-center justify-center p-4`}
    >
      {pieces.map((piece, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5, filter: "blur(5px)" }}
          animate={{
            opacity: 1,
            scale: isComplete ? 1 : 0.5,
            x: isComplete ? `${-((index % 3) * 33.33)}%` : 0,
            y: isComplete ? `${-(Math.floor(index / 3) * 33.33)}%` : 0,
            filter: isComplete ? "blur(0px)" : "blur(5px)",
            background: isComplete ? "transparent" : "rgba(255, 255, 255, 0.2)",
          }}
          transition={{
            duration: 1,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
          style={{
            padding: "20px",
            backgroundSize: `300% 300%`,
            border: "2px solid white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            backgroundPosition: `${(index % 3) * 33.33}% ${
              Math.floor(index / 3) * 33.33
            }%`,
          }}
        >
          <h1 className="font-extrabold text-background text-3xl text-center">
            We Supply <span className="text-red font-serif">Quality </span>and{" "}
            <span className=" font-serif">Reliable </span>
            Services..
          </h1>
          <p className="font-mono text-background text-center">
            suppliers and fabricators of all aluminum systems.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="p-[6px] text-background border-[1px] hover:bg-primary hover:text-background  transition border-background rounded-md text-[.8rem]">
              See what we do
            </div>
            <div className="p-[6px] text-background hover:bg-primary hover:text-background  transition border-[1px] border-background rounded-md text-[.8rem]">
              View our portfolio here
            </div>
          </div>
        </motion.div>
      ))}
    </animated.div>
  );
};

export default FixedImage;
