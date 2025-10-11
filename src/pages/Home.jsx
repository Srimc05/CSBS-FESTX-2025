import React, { useRef, useEffect } from "react";
import { HeroSection } from "../components/Hero";
import About from "../components/About";
import { useAssetLoader } from "../hooks/useAssetLoader";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const videoRef = useRef(null);

  // List of assets to preload for Home page
  const assetsToLoad = [
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/FESTX.webp",
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/bg2.webp",
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/ship1.png",
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/treasure.png",
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/Date_Reveal.webm",
  ];

  const isLoading = useAssetLoader(assetsToLoad);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in viewport, restart it
            video.currentTime = 0;
            video.play();
          } else {
            // Video is out of viewport, pause it
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Show loading spinner while assets are loading
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <HeroSection />

      {/* Date Reveal Video Section */}
      <div className="relative bg-black py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-pirata text-yellow-400 text-2xl md:text-3xl tracking-wider drop-shadow-md mb-4">
              Mark Your Calendar
            </h2>
          </div>

          {/* Video Container */}
          <div className="relative bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-xl p-4 backdrop-blur-sm border border-yellow-400/20">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
              >
                <source
                  src="https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/Date_Reveal.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>

              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <About />
    </>
  );
};

export default Home;
