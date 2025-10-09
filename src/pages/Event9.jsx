import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Include this in your index.html or Tailwind config
// <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">

const Event9 = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Check if mobile and update state
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Ensure body and html have no margins/padding for this page
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";

    return () => {
      // Cleanup
      window.removeEventListener("resize", checkMobile);
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.documentElement.style.margin = "";
      document.documentElement.style.padding = "";
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "200vh",
        backgroundColor: "black",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Background video - Force full coverage */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-background"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vmax",
            height: "100vmax",
            transform: isMobile
              ? "translate(-50%, -50%) scale(1.4)"
              : "translate(-50%, -50%)",
            objectFit: "cover",
            margin: 0,
            padding: 0,
            border: "none",
          }}
        >
          <source
            src="https://ik.imagekit.io/sri05/Scene_1_08_202510082209.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Back Button */}
      <Link
        to="/events"
        className="fixed z-30 inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-yellow-400 bg-black/40 backdrop-blur-sm text-yellow-300 hover:text-black hover:bg-yellow-400 hover:border-yellow-300 shadow-lg transition-all top-5 left-5 md:left-10"
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

      {/* Scrollable Content */}
      <div className="relative z-20">
        {/* Logo Section - Takes full viewport height initially */}
        <div
          className="flex items-center justify-center px-6"
          style={{
            minHeight: "100vh",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <img
              src="https://ik.imagekit.io/sri05/9.png"
              alt="The Last Zone"
              className="w-full max-w-md md:max-w-lg object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Content Section - Appears when scrolling */}
        <div
          className="px-6 py-16"
          style={{
            minHeight: "100vh",
          }}
        >
          <div
            className="max-w-4xl mx-auto text-center text-yellow-300 space-y-8 px-8 py-12 rounded-2xl"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-[#FF4500]"
              style={{
                fontFamily: "'Anton', sans-serif",
                textShadow: "2px 2px 8px #DADADA",
              }}
            >
              Clutch X Booyah - Pirate Hunt edition
            </motion.h2>

            {/* Event Content */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: "'Anton', sans-serif",
                color: "#DADADA",
              }}
            >
              It’s time for the veetula mass BOOYAH! 4-member squad only, Your
              room = Bermuda map, Wi-Fi = life, Amma = hype commentator .
              Reflex, aim, or luck—show it in FREE FIRE. Betrayal, chaos, and
              revive cries—“MACHAAAA, REVIVE DAAAA!” Work as a team or get
              “return to lobby.” One mission: BOOYAH!
            </motion.p>

            {/* Figma Outline Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center gap-6 flex-wrap mt-8"
            >
              <a
                href="https://forms.gle/EpEBVkJW1Dsu77s89"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-md bg-[#FF4500] text-white font-bold transition duration-200 hover:bg-white hover:text-[#FF4500] border-2 border-transparent hover:border-[#FF4500]"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                Register
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-md bg-[#FF4500] text-white font-bold transition duration-200 hover:bg-white hover:text-[#FF4500] border-2 border-transparent hover:border-[#FF4500]"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                Watch Trailer
              </a>
            </motion.div>

            {/* Coordinators Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.9 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <div
                className="bg-black/60 backdrop-blur-sm border-2 border-[#FF4500] rounded-2xl p-6 shadow-2xl w-full max-w-md"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3 className="text-lg font-bold text-[#FF4500] mb-4 text-center font-[poppins] underline decoration-[#FF4500] decoration-2 underline-offset-4">
                  Event Coordinators
                </h3>

                {/* Mobile view (default) */}
                <div className="space-y-3 font-[poppins] lg:hidden">
                  <div className="text-center">
                    <p className="text-[#DADADA] text-lg">
                      <span className="font-semibold text-[#FF4500]">
                        Harish M
                      </span>
                      <br />
                      <span className="text-[#FF4500]">7904618631</span>
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#DADADA] text-lg">
                      <span className="font-semibold text-[#FF4500]">
                        Guhan B
                      </span>
                      <br />
                      <span className="text-[#FF4500]">6369757635</span>
                    </p>
                  </div>
                </div>

                {/* Large screen view */}
                <div className="hidden lg:flex justify-center gap-6 font-[poppins] text-[#DADADA] text-lg">
                  <p>
                    <span className="font-semibold text-[#FF4500]">
                      Harish M:
                    </span>{" "}
                    7904618631
                  </p>
                  <p>
                    <span className="font-semibold text-[#FF4500]">
                      Guhan B:
                    </span>{" "}
                    6369757635
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event9;
