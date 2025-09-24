import React from "react";

export function HeroSection() {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="mx-4 sm:mx-8">
          <div className="p-0">
            <div className="text-center">
              <div className="space-y-2">
                <div className="text-white font-fell-english tracking-wide text-shadow-contrast">
                  <div className="text-base md:text-xl">
                    SRI SAIRAM ENGINEERING COLLEGE
                  </div>
                  <div className="text-base md:text-xl">
                    DEPARTMENT OF COMPUTER
                  </div>
                  <div className="text-base md:text-xl">
                    SCIENCE AND BUSINESS SYSTEMS
                  </div>
                </div>

                <div className="text-white/90 font-fell-english text-base md:text-lg mt-2 text-shadow-contrast">
                  Presents
                </div>

                <div className="flex items-center justify-center mt-2">
                  <img
                    src="/FESTX.webp"
                    alt="FESTX'25"
                    className="h-48 md:h-48 object-contain"
                  />
                </div>

                <div className="mt-4">
                  <div className="font-pirata text-yellow-400 text-xl md:text-3xl">
                    Heist On
                  </div>
                  <div className="font-pirata text-yellow-400 text-lg md:text-2xl">
                    October 25, 2025
                  </div>
                </div>

                <div className="mt-6">
                  <button className="treasure-btn">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
