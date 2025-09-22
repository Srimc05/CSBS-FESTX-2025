import React from "react";
import { Vortex } from "./ui/vortex";

export function VortexDemo() {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex flex-col items-center justify-center px-4 md:px-10 text-center w-full h-full"
      >
        <h1 className="text-7xl font-['Ewert'] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 drop-shadow-lg">
  FESTX'25
</h1>



        
        <h2 className="text-white text-lg md:text-2xl mt-3 font-medium">
          From
        </h2>

        {/* College Info */}
        <div className="mt-8 space-y-3">
         {/* <h3 className="text-white text-base md:text-xl font-light">From</h3>*/}

          <h3 className="text-white text-xl md:text-3xl font-semibold">
            Department of 
          </h3>
          <h3 className="font-['rye'] text-yellow-500 text-xl md:text-3xl font-semibold">
            Computer Science & Business Systems 
          </h3>
          <h3 className="text-white text-sm md:text-lg max-w-xl font-normal">
            Sairam Engineering College
          </h3>

<div className="p-5 space-y-3"> <h3 className="text-white text-xl md:text-3xl font-semibold">Heist On</h3>
          <h5 className="text-white text-xl md:text-3xl font-semibold">25 October 2025</h5></div>
         
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white font-semibold shadow-lg">
            Register Now
          </button>
          <button className="px-6 py-3 border border-white rounded-lg text-white font-semibold hover:bg-white hover:text-black transition duration-200">
            Watch Trailer
          </button>
        </div>
      </Vortex>
    </div>
  );
}
