import React from "react";
import Nav from "./Nav";
import ParticlesP5 from "./ParticleJs";

const Hero = () => {
  return (
    <div className="min-h-screen bg-lime-500 flex flex-col relative z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-30 z-[-1] !w-full">
        <ParticlesP5 />
      </div>
      <Nav />
      <div className="container xl:max-w-[1140px] mx-auto px-4 flex justify-center items-center flex-grow flex-col">
        <h1 className="text-custom-xs text-white text-center font-semibold leading-normal tracking-widest font-cinzel">
          THE ART OF FOOD
        </h1>
        <p className="text-white font-cinzel font-normal tracking-[4px] text-2xl leading-normal mb-9">
          PHOTOGRAPHY
        </p>
        <button className="text-white font-semibold font-cinzel text-lg py-3 px-9 rounded-lg border border-solid border-white hover:bg-white transition-colors ease-linear duration-300 bg-transparent hover:text-lime-500">
          View More
        </button>
      </div>
    </div>
  );
};

export default Hero;
