import React from "react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="h-screen w-full relative overflow-hidden hero-bg flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8">
        {/* College Info */}
        <div className="text-white font-fell-english tracking-wide text-shadow-contrast space-y-1">
          <p className="text-sm md:text-lg">SRI SAIRAM ENGINEERING COLLEGE</p>
          <p className="text-sm md:text-lg">DEPARTMENT OF COMPUTER</p>
          <p className="text-sm md:text-lg">SCIENCE AND BUSINESS SYSTEMS</p>
        </div>

        {/* Presents */}
        <p className="text-white/80 font-fell-english text-sm md:text-base mt-3 italic">
          Presents
        </p>

        {/* Logo */}
        <div className="flex items-center justify-center mt-4">
          <img
            src="/FESTX.webp"
            alt="FESTX'25"
            className="h-36 md:h-48 object-contain drop-shadow-lg"
          />
        </div>

        {/* Event Date */}
        <div className="mt-6 space-y-1">
          <h2 className="font-pirata text-yellow-400 text-2xl md:text-4xl tracking-wider drop-shadow-md">
            Heist On
          </h2>
          <p className="font-pirata text-yellow-300 text-lg md:text-2xl">
            October 25, 2025
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link to="/events" className="treasure-btn px-6 py-2 text-lg">
            Register Now
          </Link>
          <a
            href="https://www.instagram.com/reel/DPMCzDmEcbp/?igsh=bHF6c2J0cmxsc2cx"
            target="_blank" // opens in new tab
            rel="noopener noreferrer"
            className="treasure-btn px-6 py-2 text-lg inline-block text-center"
          >
            Watch Trailer
          </a>
        </div>
      </div>
    </div>
  );
}
