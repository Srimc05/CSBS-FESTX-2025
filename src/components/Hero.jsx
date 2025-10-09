import React from "react";
import { Link } from "react-router-dom";
import { CountdownBanner } from "./ui/countdown";

export function HeroSection() {
  return (
    <div
      className="h-screen w-full relative overflow-hidden flex items-center justify-center"
      style={{ overflowX: "hidden" }}
    >
      {/* Animated background only for Hero (scoped to hero) */}
      <div className="kenburns-hero" aria-hidden="true"></div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8">
        {/* College Info */}
        <div className="text-white font-fell-english tracking-wide text-shadow-contrast space-y-1">
          <p className="text-sm md:text-xl">SRI SAIRAM ENGINEERING COLLEGE</p>
          <p className="text-sm md:text-xl">DEPARTMENT OF COMPUTER</p>
          <p className="text-sm md:text-xl">SCIENCE AND BUSINESS SYSTEMS</p>
        </div>

        {/* Presents */}
        <p className="text-white/80 font-fell-english text-xs md:text-sm mt-2 italic">
          Presents
        </p>

        {/* Logo */}
        <div className="flex items-center justify-center mt-3">
          <img
            src="/FESTX.webp"
            alt="FESTX'25"
            className="h-28 md:h-40 object-contain drop-shadow-lg"
          />
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/events" className="treasure-btn px-4 py-1.5 text-base">
            Register Now
          </Link>
          <a
            href="https://www.instagram.com/reel/DPMCzDmEcbp/?igsh=bHF6c2J0cmxsc2cx"
            target="_blank" // opens in new tab
            rel="noopener noreferrer"
            className="treasure-btn px-4 py-1.5 text-base inline-block text-center"
          >
            Watch Trailer
          </a>
        </div>
        <CountdownBanner inline />
      </div>
    </div>
  );
}
