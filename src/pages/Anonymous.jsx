import React from "react";
import { Link } from "react-router-dom";

const Anonymous = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          to="/events"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors fixed top-24 left-6 z-40"
        >
          <svg
            className="w-5 h-5 mr-2"
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
          Anonymous
        </h1>

        {/* Placeholder content */}
        <div className="text-center text-gray-300">
          <p className="text-lg">Event page coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Anonymous;
