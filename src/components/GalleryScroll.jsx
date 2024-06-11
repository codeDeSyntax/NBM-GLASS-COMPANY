import { useRef } from "react";

function Images() {
  const ref = useRef(null);

  return (
    <div className="relative  w-full" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-repeat"
        style={{
          backgroundImage: "url(glassroom.jpeg)",
          backgroundRepeat: "repeat",
          height:'35vh'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,0,160,0.8)] via-[transparent] to-black opacity-50"></div>
      </div>
      <div className="relative z-10 md:flex flex-wrap justify-center items-center h-full">
        <img
          src="glassroom.jpeg"
          alt="First Image"
          className="w-1/3 h-auto p-2"
        />
        <img
          src="glassroom.jpeg"
          alt="Second Image"
          className="w-1/3 h-auto p-2"
        />
        <img
          src="glassroom.jpeg"
          alt="Third Image"
          className="w-1/3 h-auto p-2"
        />
      </div>
    </div>
  );
}

export default Images;
