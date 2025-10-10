import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      {/* Compass */}
      <div className="compass">
        <div className="compass-outer-ring"></div>
        <div className="compass-inner-ring"></div>
        <div className="compass-needle"></div>
        <div className="compass-center"></div>
        <div className="compass-directions">
          <span className="direction north">N</span>
          <span className="direction east">E</span>
          <span className="direction south">S</span>
          <span className="direction west">W</span>
        </div>
      </div>

      {/* Loading text */}
      <div className="loading-text">
        Navigating
        <span className="dots">
          <span className="dot1">.</span>
          <span className="dot2">.</span>
          <span className="dot3">.</span>
        </span>
      </div>

      <style jsx>{`
        .loading-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          font-family: "Arial", sans-serif;
          background: linear-gradient(
            135deg,
            #0f172a 0%,
            #1e293b 50%,
            #334155 100%
          );
          backdrop-filter: blur(10px);
        }

        .compass {
          position: relative;
          width: 180px;
          height: 180px;
          margin-bottom: 30px;
          z-index: 2;
        }

        .compass-outer-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid #fbbf24;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
        }

        .compass-inner-ring {
          position: absolute;
          top: 10px;
          left: 10px;
          width: calc(100% - 20px);
          height: calc(100% - 20px);
          border: 2px solid #94a3b8;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(15, 23, 42, 0.8) 0%,
            rgba(30, 41, 59, 0.6) 100%
          );
        }

        .compass-needle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 90px;
          transform-origin: center bottom;
          transform: translate(-50%, -100%) rotate(0deg);
          animation: compassSpin 4s ease-in-out infinite;
        }

        .compass-needle::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 9px solid transparent;
          border-right: 9px solid transparent;
          border-bottom: 45px solid #ef4444;
          border-radius: 2px;
        }

        .compass-needle::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 9px solid transparent;
          border-right: 9px solid transparent;
          border-top: 45px solid #64748b;
          border-radius: 2px;
        }

        .compass-center {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 18px;
          height: 18px;
          background: #fbbf24;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.8);
        }

        .compass-directions {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .direction {
          position: absolute;
          color: #fbbf24;
          font-weight: bold;
          font-size: 20px;
          transform: translate(-50%, -50%);
        }

        .direction.north {
          top: 8px;
          left: 50%;
        }

        .direction.east {
          top: 50%;
          right: 8px;
          transform: translate(50%, -50%);
        }

        .direction.south {
          bottom: 8px;
          left: 50%;
          transform: translate(-50%, 50%);
        }

        .direction.west {
          top: 50%;
          left: 8px;
          transform: translate(-50%, -50%);
        }

        .loading-text {
          color: white;
          font-size: 18px;
          font-weight: 600;
          margin-top: 20px;
          display: flex;
          align-items: center;
        }

        .dots {
          display: inline-flex;
          margin-left: 2px;
        }

        .dots span {
          opacity: 0;
        }

        @keyframes compassSpin {
          0% {
            transform: translate(-50%, -100%) rotate(-15deg);
          }
          25% {
            transform: translate(-50%, -100%) rotate(10deg);
          }
          50% {
            transform: translate(-50%, -100%) rotate(-5deg);
          }
          75% {
            transform: translate(-50%, -100%) rotate(20deg);
          }
          100% {
            transform: translate(-50%, -100%) rotate(-15deg);
          }
        }

        @keyframes dotSequence {
          0%,
          20% {
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          30%,
          45% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          55%,
          70% {
            opacity: 0;
          }
          75% {
            opacity: 1;
          }
          80%,
          100% {
            opacity: 0;
          }
        }

        .dot1 {
          animation: dotSequence1 2s ease-in-out infinite;
        }

        .dot2 {
          animation: dotSequence2 2s ease-in-out infinite;
        }

        .dot3 {
          animation: dotSequence3 2s ease-in-out infinite;
        }

        @keyframes dotSequence1 {
          0%,
          15% {
            opacity: 1;
          }
          16%,
          100% {
            opacity: 0;
          }
        }

        @keyframes dotSequence2 {
          0%,
          15% {
            opacity: 0;
          }
          16%,
          31% {
            opacity: 1;
          }
          32%,
          100% {
            opacity: 0;
          }
        }

        @keyframes dotSequence3 {
          0%,
          31% {
            opacity: 0;
          }
          32%,
          47% {
            opacity: 1;
          }
          48%,
          100% {
            opacity: 0;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .compass {
            width: 140px;
            height: 140px;
          }

          .compass-needle {
            height: 70px;
          }

          .direction {
            font-size: 16px;
          }

          .loading-text {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
