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
        <div className="flex justify-center items-center w-full">
          <img
            src="/pitchers-gold-logo.webp"
            alt="Pitchers Gold Logo"
            className="h-auto drop-shadow-2xl w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl"
          />
        </div>
      </div>

      {/* Characters & Video Section - Second Viewport */}
      <div className="min-h-screen px-6 relative z-20 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          {/* Emperors Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-12 text-center font-fell-english">
              Meet the Emperors
            </h2>

            {/* Emperor Cards - Single Column */}
            <div className="space-y-8">
              {/* Technology & EdTech - Kaido */}
              <div className="bg-black/60 backdrop-blur-sm border-2 border-yellow-400 rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg bg-yellow-400 p-1 flex-shrink-0">
                    <img
                      src="/kaido.webp"
                      alt="Kaido Character"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-2 font-nikkyou">
                      Technology & EdTech – Kaido
                    </h3>
                    <p className="text-yellow-200 mb-3 leading-relaxed font-nikkyou">
                      Masters of transformation, they harness AI, cloud, and
                      learning tech to shape the future of knowledge. From
                      digital classrooms to automation, their ventures empower
                      the next generation of thinkers.
                    </p>
                    <p className="text-yellow-400 font-semibold italic font-nikkyou">
                      Example: Byju's – revolutionizing learning through
                      interactive, personalized education.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sports & Entertainment - Whitebeard */}
              <div className="bg-black/60 backdrop-blur-sm border-2 border-yellow-400 rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg bg-yellow-400 p-1 flex-shrink-0">
                    <img
                      src="/white.webp"
                      alt="Whitebeard Character"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-2 font-nikkyou">
                      Sports & Entertainment – Whitebeard
                    </h3>
                    <p className="text-yellow-200 mb-3 leading-relaxed font-nikkyou">
                      Where passion meets performance — they invest in ventures
                      that fuel adrenaline and connect fans. From fantasy
                      leagues to immersive events, their domain celebrates the
                      spirit of competition.
                    </p>
                    <p className="text-yellow-400 font-semibold italic font-nikkyou">
                      Example: Dream11 – turning every sports fan into a
                      strategist.
                    </p>
                  </div>
                </div>
              </div>

              {/* Marketing & Media - Big Mom */}
              <div className="bg-black/60 backdrop-blur-sm border-2 border-yellow-400 rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg bg-yellow-400 p-1 flex-shrink-0">
                    <img
                      src="/big.webp"
                      alt="Big Mom Character"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-purple-400 mb-2 font-nikkyou">
                      Marketing & Media – Big Mom
                    </h3>
                    <p className="text-yellow-200 mb-3 leading-relaxed font-nikkyou">
                      Rulers of storytelling and influence, they craft brands
                      that echo across digital seas. Their focus lies in
                      creative marketing, media innovation, and audience
                      engagement.
                    </p>
                    <p className="text-yellow-400 font-semibold italic font-nikkyou">
                      Example: Zomato – redefining brand identity through bold
                      and viral content.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business & Consumer Goods - Luffy */}
              <div className="bg-black/60 backdrop-blur-sm border-2 border-yellow-400 rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg bg-yellow-400 p-1 flex-shrink-0">
                    <img
                      src="/hat.webp"
                      alt="Luffy Character"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-2 font-nikkyou">
                      Business & Consumer Goods – Luffy
                    </h3>
                    <p className="text-yellow-200 mb-3 leading-relaxed font-nikkyou">
                      Visionaries of commerce who sail through the markets of
                      demand and delight. They invest in products and startups
                      that shape everyday life with innovation and trust.
                    </p>
                    <p className="text-yellow-400 font-semibold italic font-nikkyou">
                      Example: Nykaa – bridging beauty, convenience, and
                      customer experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Open Innovation - Mystery */}
              <div className="bg-black/60 backdrop-blur-sm border-2 border-yellow-400 rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-yellow-400 shadow-lg flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 flex-shrink-0">
                    <span className="text-2xl md:text-3xl font-bold text-black animate-spin">
                      ?
                    </span>
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-orange-400 mb-2 font-bento">
                      Open Innovation
                    </h3>
                    <p className="text-yellow-200 mb-3 leading-relaxed font-nikkyou">
                      Explorers of limitless ideas, they champion collaboration
                      across uncharted territories. From deep-tech to social
                      impact, they invest in creativity that breaks every
                      boundary.
                    </p>
                    <p className="text-yellow-400 font-semibold italic font-nikkyou">
                      Example: OpenAI – pushing the frontiers of what's possible
                      through intelligent innovation.
                    </p>
                  </div>
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
          <div className="text-center flex items-center justify-center gap-6">
            <Link
              to="https://forms.gle/toW85bjKitnsJhGE7"
              target="_blank"
              className="treasure-btn px-6 py-2 text-lg my-4 mb-16"
            >
              Register Your Idea
            </Link>
            <Link to="#" className="treasure-btn px-6 py-2 text-lg my-4 mb-16">
              Watch Trailer
            </Link>
          </div>

          {/* Coordinators Section */}
          <div className="flex justify-center mb-16">
            <div className="bg-black/60 backdrop-blur-sm border-2 border-yellow-400 rounded-2xl p-6 shadow-2xl md:w-96">
              <h3 className="text-lg font-bold text-yellow-400 mb-4 text-center font-nikkyou underline decoration-yellow-400 decoration-2 underline-offset-4">
                Event Coordinators
              </h3>
              <div className="space-y-3 font-nikkyou">
                <div className="text-center">
                  <p className="text-yellow-200 text-lg">
                    <span className="font-semibold text-yellow-300">
                      Eashwar S
                    </span>
                    <br />
                    <span className="text-yellow-400">7358092685</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-yellow-200 text-lg">
                    <span className="font-semibold text-yellow-300">
                      Dhanush B T
                    </span>
                    <br />
                    <span className="text-yellow-400">6379842695</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchersGold;
