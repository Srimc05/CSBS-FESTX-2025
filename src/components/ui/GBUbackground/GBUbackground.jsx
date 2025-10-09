import React from "react";
import "./GBUbackground.css";

const GBUBackground = () => {
  // Array of fiery colors matching the ember particles
  const fireColors = ['#FFD700', '#FF8C00', '#FFC700', '#FF6347', '#FF9800', '#FFA500', '#FF5722'];
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 🔥 Fiery Sparkles matching ember style */}
      <div className="absolute inset-0 overflow-hidden">
      {[...Array(45)].map((_, i) => {
        const randomColor = fireColors[Math.floor(Math.random() * fireColors.length)];
        return (
          <div
            key={i}
            className="sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              boxShadow: `0 0 ${1 + Math.random() * 2}px ${0.5 + Math.random() * 1.5}px ${randomColor}`,
          }}>
          </div>
        );
      })}
      </div>

    </div>
  );
};

export default GBUBackground;
