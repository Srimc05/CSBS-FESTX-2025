// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import EventsPage from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import Anonymous from "./pages/Anonymous";
import CodeHeist from "./pages/CodeHeist";
import GBU from "./pages/GBU";
import Lootopoly from "./pages/Lootopoly";
import PitchersGold from "./pages/PitchersGold";
import StellarQuest from "./pages/StellarQuest";
import UnlockX from "./pages/UnlockX";
import WolfGambit from "./pages/WolfGambit";
import Event9 from "./pages/Event9";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCustomCursor, setShowCustomCursor] = useState(true);
  const [cursorImageLoaded, setCursorImageLoaded] = useState(false);

  // Define individual event page paths
  const eventPages = [
    "/code-heist",
    "/gbu",
    "/pitchers-gold",
    "/stellar-quest",
    "/unlockx",
    "/wolf-gambit",
    "/anonymous",
    "/lootopoly",
    "/event9",
  ];

  const isEventPage = eventPages.includes(location.pathname);

  useEffect(() => {
    const isCoarsePointer =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(pointer: coarse)").matches;

    if (isCoarsePointer) {
      setShowCustomCursor(false);
    }

    // Preload cursor image and handle fallback
    const cursorImg = new Image();
    cursorImg.onload = () => {
      setCursorImageLoaded(true);
      document.body.classList.remove("show-default-cursor");
    };
    cursorImg.onerror = () => {
      setCursorImageLoaded(false);
      setShowCustomCursor(false);
      document.body.classList.add("show-default-cursor");
    };
    cursorImg.src = "/hook.webp";

    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      // Ensure custom cursor becomes visible again after leaving cross-origin iframes
      setShowCustomCursor(true);
    };

    // New, robust scroll progress calculation (desktop + mobile)
    const getViewportHeight = () =>
      (window.visualViewport && window.visualViewport.height) ||
      window.innerHeight ||
      document.documentElement.clientHeight ||
      0;

    const computeProgress = () => {
      const el = document.scrollingElement || document.documentElement;
      const viewportH = getViewportHeight();
      const totalScrollable = Math.max((el.scrollHeight || 0) - viewportH, 0);
      const top = el.scrollTop || window.pageYOffset || 0;
      if (totalScrollable <= 0) return 0;
      const ratio = top / totalScrollable;
      return Math.min(Math.max(ratio, 0), 1);
    };

    let rafId = 0;
    const updateProgress = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setScrollProgress(computeProgress()));
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Hide custom cursor when pointer leaves the window; show on re-enter
    const handleMouseLeave = () => setShowCustomCursor(false);
    const handleMouseEnter = () => setShowCustomCursor(true);

    // Mobile horizontal swipe panning for background image
    let touchStartX = null;
    let startBgX = 50;
    let bgRafId = null;
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
      if (bgRafId) cancelAnimationFrame(bgRafId);
      bgRafId = requestAnimationFrame(() => setBgX(target));
    };
    const onTouchEnd = () => {
      touchStartX = null;
      if (bgRafId) cancelAnimationFrame(bgRafId);
      bgRafId = null;
    };

    // Only attach mouse-related listeners on non-touch (fine pointer) devices
    if (!isCoarsePointer) {
      document.addEventListener("mousemove", updateCursorPosition);
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);
    }
    // Attach listeners
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    window.addEventListener("orientationchange", updateProgress);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", updateProgress, {
        passive: true,
      });
      window.visualViewport.addEventListener("scroll", updateProgress, {
        passive: true,
      });
    }
    // Initialize on mount
    updateProgress();
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
      if (!isCoarsePointer) {
        document.removeEventListener("mousemove", updateCursorPosition);
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
      }
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("orientationchange", updateProgress);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", updateProgress);
        window.visualViewport.removeEventListener("scroll", updateProgress);
      }
      if (rafId) cancelAnimationFrame(rafId);
      document.body.removeEventListener("touchstart", onTouchStart);
      document.body.removeEventListener("touchmove", onTouchMove);
      document.body.removeEventListener("touchend", onTouchEnd);
      document.body.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      {showCustomCursor && cursorImageLoaded && (
        <div
          className="custom-cursor"
          style={{
            left: cursorPosition.x - 16,
            top: cursorPosition.y - 16,
            transform: `rotate(${isClicked ? -25 : -20}deg)`,
          }}
        >
          <img
            src="/hook.webp"
            alt="Custom cursor"
            onError={() => {
              setCursorImageLoaded(false);
              setShowCustomCursor(false);
              document.body.classList.add("show-default-cursor");
            }}
          />
        </div>
      )}

      {/* Ship at top right */}
      <div className="ship-container">
        <img
          src="/ship1.png"
          alt="Ship"
          className="ship cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Anchor with rope */}
      <div className="anchor-container">
        {(() => {
          const anchorBaseOffset = 5;
          const anchorTravel = window.innerHeight - 160;
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
      <div className="flex flex-col min-h-screen relative">
        {!isEventPage && (
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/code-heist" element={<CodeHeist />} />
            <Route path="/gbu" element={<GBU />} />
            <Route path="/pitchers-gold" element={<PitchersGold />} />
            <Route path="/stellar-quest" element={<StellarQuest />} />
            <Route path="/unlockx" element={<UnlockX />} />
            <Route path="/wolf-gambit" element={<WolfGambit />} />
            <Route path="/anonymous" element={<Anonymous />} />
            <Route path="/lootopoly" element={<Lootopoly />} />
            <Route path="/event9" element={<Event9 />} />
          </Routes>
        </main>
        {!isEventPage && <Footer />}

        {/* Treasure at bottom of page content */}
        <div className="treasure-container">
          <img src="/treasure.png" alt="Treasure" className="treasure" />
        </div>
      </div>
    </>
  );
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname]);
  return null;
}
