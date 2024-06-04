const FixedImage = () => {
  return (
    <div
      className={`fixed top-10 left-0 w-full h-[80vh]  bg-[linear-gradient(to_right_bottom,rgba(57,7,160,0.8),rgba(8,8,8,0.8)),url('home.jpeg')] homepage bg-cover bg-no-repeat flex items-center justify-center p-4`}
    >
      <div className="flex flex-col items-center gap-4 font- py-8  p-2 border-2 border-white">
        <h1 className="font-extrabold text-white text-3xl text-center">
          We Supply Quality and Relibale Services..
        </h1>
        <p className="font-mono text-white text-center">
          suppliers and fabricators of all aluminum systems.
        </p>
        <div className="p-[6px] border-[1px] border-red-500 text-white bg-red-500 rounded-md">
          See we what we do
        </div>
      </div>
      <img src="macScreen.png" alt="" className="w-[22rem] hidden md:block" />
    </div>
  );
};

export default FixedImage;
