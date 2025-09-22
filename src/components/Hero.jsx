import React from "react";

export function HeroSection() {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="mx-4 sm:mx-8">
          <div className="bg-black/60 backdrop-blur-[1px] rounded-2xl p-6 sm:p-10 shadow-xl">
            <div className="text-center">
              <h1 className="text-7xl font-['Ewert'] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500 drop-shadow-lg">
                FESTX'25
              </h1>

              {/* Sub-title */}
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

                <div className="p-5 space-y-3">
                  {" "}
                  <h3 className="text-white text-xl md:text-3xl font-semibold">
                    Heist On
                  </h3>
                  <h5 className="text-white text-xl md:text-3xl font-semibold">
                    25 October 2025
                  </h5>
                </div>
              </div>

              {/* CTA Buttons */}
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white font-semibold shadow-lg">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
