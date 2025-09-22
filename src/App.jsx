// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import EventsPage from "./pages/Events";
import ContactUs from "./pages/ContactUs";

export default function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / documentHeight, 1);
      setScrollProgress(progress);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: cursorPosition.x - 16,
          top: cursorPosition.y - 16,
          transform: `rotate(${isClicked ? 15 : 20}deg)`,
        }}
      >
        <img src="/hook.png" alt="Custom cursor" />
      </div>

      {/* Ship at top right */}
      <div className="ship-container">
        <img src="/ship1.png" alt="Ship" className="ship" />
      </div>

      {/* Treasure at bottom right */}
      <div className="treasure-container">
        <img src="/treasure.png" alt="Treasure" className="treasure" />
      </div>

      {/* Anchor with rope */}
      <div className="anchor-container">
        {(() => {
          const anchorBaseOffset = 50;
          const anchorTravel = window.innerHeight - 250;
          const anchorTop = anchorBaseOffset + scrollProgress * anchorTravel;
          const ropeHeight = anchorTop;
          return (
            <>
              <div
                className="rope"
                style={{
                  height: `${ropeHeight}px`,
                }}
              />
              <img
                src="/anchor.png"
                alt="Anchor"
                className="anchor"
                style={{
                  top: `${anchorTop}px`,
                }}
                onLoad={(e) => {
                  console.log("Anchor image loaded successfully");
                  console.log("Anchor element:", e.target);
                  console.log(
                    "Anchor position:",
                    e.target.getBoundingClientRect()
                  );
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  console.log("Anchor image failed to load");
                }}
              />
            </>
          );
        })()}
      </div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
