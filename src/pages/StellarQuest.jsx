import React from "react";
import { Link } from "react-router-dom";

const StellarQuest = () => {
  return (
    <div className="min-h-screen py-12 px-6 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back button */}
        <Link
          to="/events"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-all duration-300 hover:scale-105 fixed top-24 left-6 z-40"
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

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-400 mb-4 font-fell-english">
            🌌 The Stellar Quest
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 font-pirata mb-6">
            Your Cosmic Adventure Awaits! 🚀
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Character Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8 font-fell-english">
            Assemble Your Crew
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Engineer */}
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src="/1char.webp"
                  alt="Engineer Character"
                  className="relative w-48 h-48 mx-auto rounded-full border-4 border-yellow-400 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2 font-pirata">
                Engineer
              </h3>
              <p className="text-gray-300">
                Debug broken code and fix AI prompts to get systems running
              </p>
            </div>

            {/* Navigator */}
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src="/2char.webp"
                  alt="Navigator Character"
                  className="relative w-48 h-48 mx-auto rounded-full border-4 border-cyan-400 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2 font-pirata">
                Navigator
              </h3>
              <p className="text-gray-300">
                Solve data puzzles and cosmic maps to chart your course
              </p>
            </div>

            {/* Decoder */}
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src="/3char.webp"
                  alt="Decoder Character"
                  className="relative w-48 h-48 mx-auto rounded-full border-4 border-purple-400 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2 font-pirata">
                Decoder
              </h3>
              <p className="text-gray-300">
                Crack secret ciphers and hidden transmissions to uncover final
                clues
              </p>
            </div>
          </div>
        </div>

        {/* Mission Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Blueprint */}
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-2xl">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 font-fell-english flex items-center">
              <span className="mr-3">📋</span>
              Your Mission Blueprint
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                    Teams & Tools
                  </h3>
                  <p className="text-gray-300">
                    Gather your crew of three. You'll have one laptop, and all
                    AI tools, programming environments, and online decoders are
                    fair game. Use everything at your disposal!
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                    The Path
                  </h3>
                  <p className="text-gray-300">
                    Navigate three epic stages in a set order: Engineer →
                    Navigator → Decoder
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">
                    Teamwork is Key
                  </h3>
                  <p className="text-gray-300">
                    Two members tackle main puzzles while the third works on
                    side subtasks to earn coins 💰. Use coins to buy hints!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Prize */}
          <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 shadow-2xl">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 font-fell-english flex items-center">
              <span className="mr-3">🏆</span>
              The Final Prize
            </h2>

            <div className="text-center">
              <div className="text-6xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4 font-pirata">
                Eternal Starforge
              </h3>
              <p className="text-gray-300 mb-6">
                Solve the puzzles to collect all the artifacts and clues. The
                first team to assemble them and unlock the Eternal Starforge
                wins the{" "}
                <span className="text-yellow-400 font-bold">
                  +30 point bonus
                </span>{" "}
                and cosmic glory!
              </p>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg">
                Duration: 1.5-2 Hours
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold font-pirata inline-block hover:scale-105 transition-transform duration-300 shadow-2xl">
            Ready to launch? The stars are calling! ✨
          </div>
        </div>
      </div>
    </div>
  );
};

export default StellarQuest;
