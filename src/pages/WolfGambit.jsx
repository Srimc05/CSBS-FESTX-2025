import React from "react";
import { Link } from "react-router-dom";

const WolfGambit = () => {
  return (
    <div className="min-h-screen pt-28 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          to="/events"
          className="fixed z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-yellow-400 bg-black/40 backdrop-blur-sm text-yellow-300 hover:text-black hover:bg-yellow-400 hover:border-yellow-300 shadow-lg transition-all top-10 left-3 md:left-6  lg:left-1/2 lg:-translate-x-[420px]"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Events
        </Link>

        {/* Event title */}
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 text-center font-fell-english">
          Wolf Gambit
        </h1>

        {/* Placeholder content */}
        <div className="text-center text-gray-300">
          <p className="text-lg">Event page coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default WolfGambit;
