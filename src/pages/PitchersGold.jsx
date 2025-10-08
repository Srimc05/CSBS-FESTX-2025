import React from "react";
import { Link } from "react-router-dom";

const PitchersGold = () => {
  return (
    <div className="relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/pitchers-gold-bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Hero Section - First Viewport */}
      <div className="min-h-screen px-6 relative z-50 flex flex-col justify-center items-center text-center">
        {/* Back button */}
        <Link
          to="/events"
          className="fixed z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-yellow-400 bg-black/60 backdrop-blur-sm text-yellow-300 hover:text-black hover:bg-yellow-400 hover:border-yellow-300 shadow-lg transition-all top-5 md:top-7 left-3 md:left-6"
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

        {/* Pitchers Gold Logo */}
        <div className="flex justify-center items-center">
          <img
            src="/pitchers-gold-logo.webp"
            alt="Pitchers Gold Logo"
            className="max-w-md w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Characters & Video Section - Second Viewport */}
      <div className="min-h-screen px-6 relative z-20 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Characters */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 font-fell-english">
                Characters
              </h2>

              {/* First Row - 3 Characters */}
              <div className="flex justify-center gap-6 mb-6 flex-wrap">
                <div className="text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-4 bg-yellow-400 p-1">
                    <img
                      src="/hat.webp"
                      alt="Hat Character"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="text-yellow-300 font-semibold text-sm md:text-lg">
                    Hat
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-4 bg-yellow-400 p-1">
                    <img
                      src="/kaido.webp"
                      alt="Kaido Character"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="text-yellow-300 font-semibold text-sm md:text-lg">
                    Kaido
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-4 bg-yellow-400 p-1">
                    <img
                      src="/white.webp"
                      alt="White Character"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="text-yellow-300 font-semibold text-sm md:text-lg">
                    White
                  </p>
                </div>
              </div>

              {/* Second Row - 2 Characters */}
              <div className="flex justify-center gap-6 flex-wrap">
                <div className="text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-4 bg-yellow-400 p-1">
                    <img
                      src="/big.webp"
                      alt="Big Character"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="text-yellow-300 font-semibold text-sm md:text-lg">
                    Big
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-yellow-400 shadow-lg mb-4 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600">
                    <span className="text-3xl md:text-4xl font-bold text-black animate-spin">
                      ?
                    </span>
                  </div>
                  <p className="text-yellow-300 font-semibold text-sm md:text-lg">
                    Mystery
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Video Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full h-72 md:h-96 border-4 border-violet-400 rounded-2xl bg-black/60 backdrop-blur-sm shadow-2xl flex items-center justify-center">
                <div className="text-center text-yellow-300">
                  <div className="text-6xl mb-4">🎬</div>
                  <h3 className="text-xl font-bold mb-2 font-fell-english">
                    Event Briefing
                  </h3>
                  <p className="text-gray-400">
                    YouTube video will be embedded here
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Description Section */}
          <div className="mb-8">
            <div className="bg-black/60 backdrop-blur-sm border-2 border-violet-400 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-violet-400 mb-6 text-center font-fell-english">
                Event Description
              </h3>
              <div className="text-yellow-200 space-y-4 leading-relaxed">
                <p className="text-lg md:text-xl font-bold text-yellow-300">
                  🏴‍☠️ Pitcher's Gold – The Hunt for the Ultimate Treasure
                </p>

                <p>
                  Wealth, fame, power… The great{" "}
                  <span className="text-yellow-400 font-bold">Gol.D.Roger</span>
                  , King of Innovation, once ruled it all. Before his end, he
                  hid his greatest treasure — the{" "}
                  <span className="text-violet-400 font-bold">
                    One Piece of Innovation
                  </span>
                  . His final words ignited a new age of dreamers and
                  adventurers.
                </p>

                <p>
                  Now, four mighty Emperors reign over the seas —{" "}
                  <span className="text-cyan-400 font-semibold">Tech</span>,{" "}
                  <span className="text-green-400 font-semibold">
                    Marketing
                  </span>
                  ,{" "}
                  <span className="text-purple-400 font-semibold">Edutech</span>
                  , and{" "}
                  <span className="text-red-400 font-semibold">Sports</span>. To
                  reach Roger's treasure, participants must face these powerful
                  rulers and prove their worth with ideas that shine like gold.
                </p>

                <div className="bg-violet-400/20 border border-violet-400 rounded-lg p-4 my-6">
                  <p className="font-bold text-violet-300 mb-2">
                    ⚓ Round 1 – PPT Screening:
                  </p>
                  <p>
                    Sailors present their Pirate's Path to Treasure (PPT) —
                    their business idea and revenue model. We provide Excel
                    sheets with built-in formulas and PPT guidelines, making it
                    super-easy for beginners to craft their pitch.
                  </p>
                </div>

                <div className="bg-violet-400/20 border border-violet-400 rounded-lg p-4 my-6">
                  <p className="font-bold text-violet-300 mb-2">
                    🏴‍☠️ Round 2 – Shark Tank Arena:
                  </p>
                  <p>
                    The top crews will face the four Emperors and pitch live
                    before them. Strategy, innovation, and confidence decide who
                    sails away with their golden approval.
                  </p>
                </div>

                <p className="text-center text-yellow-300 font-semibold text-lg">
                  Though it's a business-themed event, it's easy, creative, and
                  fun. With everything provided, all you need is imagination and
                  courage to pitch your idea and claim the ultimate treasure —{" "}
                  <span className="text-yellow-400 font-bold">
                    Pitcher's Gold!
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link to="#" className="treasure-btn px-6 py-2 text-lg my-4">
              Register Your Idea
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchersGold;
