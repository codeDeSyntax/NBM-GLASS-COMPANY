import ContactHome from "./ContactHome";

const ProjectGallery = () => {
  const projects = [
    { src: "worksample/frame1.jpg", type: "large" },
    { src: "worksample/sample1.jpeg", type: "small" },
    { src: "/glassar.jpg", type: "small" },
    { src: "glassroom.jpeg", type: "large" },
    { src: "/worksample/windowframe3.jpg", type: "small" },
    { src: "/worksample/windowframe4.jpg", type: "small" },
    { src: "/worksample/frame1.jpg", type: "small" },
    { src: "/glassset.jpeg", type: "large" },
    { src: "/glassset.jpeg", type: "small" },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-14 px-4 md:px-8 lg:px-16 bg-white">
      <ContactHome vid="large.mp4" />
      <h2 className="text-2xl font-bold text-secondary mb-2">Our Projects</h2>
      <p className="text-gray-500 mb-6 text-center">
        Sample text. Click to select the text box. Click again or double click
        to start editing the text.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 gap-4 mb-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg shadow-md ${
              project.type === "large"
                ? "row-span-1 col-span-1 sm:col-span-3"
                : "h-64"
            }`}
          >
            <img
              src={project.src}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <p className="text-gray-500 mb-4">
        Image from{" "}
        <a href="https://www.freepik.com" className="underline">
          Freepik
        </a>
      </p>
      <button className="px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600">
        CONTACT US
      </button>
    </div>
  );
};

export default ProjectGallery;
