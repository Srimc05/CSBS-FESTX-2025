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
  const [menuOpen, setMenuOpen] = useState(false);

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

    // Mobile horizontal swipe panning for background image
    let touchStartX = null;
    let startBgX = 50;
    let rafId = null;
    const getBgX = () => {
      const bg = getComputedStyle(document.body).backgroundPositionX;
      const num = parseFloat(bg);
      return isNaN(num) ? 50 : num;
    };
    const setBgX = (xPercent) => {
      document.body.style.backgroundPosition = `${xPercent}% center`;
    };
    const onTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        startBgX = getBgX();
      }
    };
    const onTouchMove = (e) => {
      if (touchStartX == null) return;
      const dx = e.touches[0].clientX - touchStartX; // right swipe => positive
      const viewportW = Math.max(window.innerWidth, 1);
      const deltaPercent = (dx / viewportW) * 100 * 1.5; // sensitivity
      const target = Math.max(0, Math.min(100, startBgX - deltaPercent));
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setBgX(target));
    };
    const onTouchEnd = () => {
      touchStartX = null;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    };

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll);
    // Attach touch only on small screens
    if (window.matchMedia && window.matchMedia("(max-width: 768px)").matches) {
      document.body.addEventListener("touchstart", onTouchStart, {
        passive: true,
      });
      document.body.addEventListener("touchmove", onTouchMove, {
        passive: true,
      });
      document.body.addEventListener("touchend", onTouchEnd, { passive: true });
      document.body.addEventListener("touchcancel", onTouchEnd, {
        passive: true,
      });
    }

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("touchstart", onTouchStart);
      document.body.removeEventListener("touchmove", onTouchMove);
      document.body.removeEventListener("touchend", onTouchEnd);
      document.body.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: cursorPosition.x - 16,
          top: cursorPosition.y - 16,
          transform: `rotate(${isClicked ? -25 : -20}deg)`,
        }}
      >
        <img src="/hook.webp" alt="Custom cursor" />
      </div>

      {/* Ship at top right */}
      <div className="ship-container">
        <img
          src="/ship1.png"
          alt="Ship"
          className="ship cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Treasure at bottom right */}
      <div className="treasure-container">
        <img src="/treasure.png" alt="Treasure" className="treasure" />
      </div>

      {/* Anchor with rope */}
      <div className="anchor-container">
        {(() => {
          const anchorBaseOffset = 50;
          const anchorTravel = window.innerHeight - 200;
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
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
