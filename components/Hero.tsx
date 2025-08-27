

const Hero = () => {
  return (
    <div className="relative w-screen h-[95vh] overflow-hidden flex items-center justify-center">
      <video
        src="/images/hero/hero_bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center" 
      />

      <div className="relative z-10 text-white w-full md:w-1/2 lg:w-1/3 max-w-4xl text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-secular font-extrabold leading-tight">
          Building Things is Our Mission.
        </h1>
        <p className="mt-4 text-md sm:text-lg md:text-xl font-secular">
          From idea to execution, we build powerful digital solutions tailored
          to your vision.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <button className="bg-white text-black text-sm md:text-base px-4 md:px-6 py-2 rounded-full hover:bg-gray-800 hover:text-white transition">
            Our Services
          </button>
          <button className="border-2 border-white text-white text-sm md:text-base px-4 md:px-6 py-2 rounded-full hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
