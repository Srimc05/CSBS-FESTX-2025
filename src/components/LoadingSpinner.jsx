import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      {/* Compass */}
      <div className="compass">
        <div className="compass-outer-ring"></div>
        <div className="compass-inner-ring"></div>
        <div className="compass-needles">
          <div className="needle-red"></div>
          <div className="needle-grey"></div>
        </div>
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
          background: radial-gradient(
              ellipse at center,
              rgba(139, 69, 19, 0.1) 0%,
              transparent 70%
            ),
            linear-gradient(
              135deg,
              #1a1a1a 0%,
              #2d1b0e 30%,
              #1a1a1a 70%,
              #0d0d0d 100%
            );
          backdrop-filter: blur(10px);
        }

        .compass {
          position: relative;
          width: 180px;
          height: 180px;
          margin-bottom: 30px;
          z-index: 2;
          transform: rotate(5deg);
        }

        .compass-outer-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 6px solid #8b4513;
          border-radius: 50%;
          box-shadow: inset 0 0 20px rgba(139, 69, 19, 0.8),
            0 0 30px rgba(139, 69, 19, 0.4), 0 0 0 2px #654321,
            0 0 0 4px #3d2914;
          background: linear-gradient(
            145deg,
            #deb887 0%,
            #d2691e 30%,
            #8b4513 70%,
            #654321 100%
          );
        }

        .compass-inner-ring {
          position: absolute;
          top: 15px;
          left: 15px;
          width: calc(100% - 30px);
          height: calc(100% - 30px);
          border: 3px solid #2f1b14;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(222, 184, 135, 0.9) 0%,
            rgba(160, 82, 45, 0.8) 40%,
            rgba(101, 67, 33, 0.9) 100%
          );
          box-shadow: inset 0 0 15px rgba(47, 27, 20, 0.6),
            inset 0 0 25px rgba(139, 69, 19, 0.3);
        }

        .compass-needles {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          animation: compassSpin 4s ease-in-out infinite;
          pointer-events: none;
        }

        .needle-red {
          position: absolute;
          top: 20px;
          left: 50%;
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-bottom: 70px solid #dc2626;
          transform: translateX(-50%);
          filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
          z-index: 3;
        }

        .needle-grey {
          position: absolute;
          bottom: 20px;
          left: 50%;
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-top: 70px solid #6b7280;
          transform: translateX(-50%);
          filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
          z-index: 2;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 768px) {
          .compass {
            width: 150px;
            height: 150px;
          }

          .needle-red {
            top: 15px;
            border-left-width: 10px;
            border-right-width: 10px;
            border-bottom-width: 55px;
          }

          .needle-grey {
            bottom: 15px;
            border-left-width: 10px;
            border-right-width: 10px;
            border-top-width: 55px;
          }

          .compass-center {
            width: 18px;
            height: 18px;
          }

          .direction {
            font-size: 18px;
          }
        }

        .compass-center {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 24px;
          height: 24px;
          background: radial-gradient(
            circle,
            #f4a460 0%,
            #cd853f 50%,
            #8b4513 100%
          );
          border: 2px solid #654321;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px rgba(139, 69, 19, 0.6),
            inset 0 0 8px rgba(101, 67, 33, 0.4);
          z-index: 10;
        }

        .compass-directions {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .direction {
          position: absolute;
          color: #deb887;
          font-weight: bold;
          font-size: 22px;
          font-family: "Times New Roman", serif;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
          color: #deb887;
          font-size: 32px;
          font-weight: 1000;
          font-family: "Times New Roman", serif;
          margin-top: 25px;
          display: flex;
          align-items: center;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          letter-spacing: 1px;
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
            transform: translate(-50%, -50%) rotate(-20deg);
          }
          20% {
            transform: translate(-50%, -50%) rotate(15deg);
          }
          40% {
            transform: translate(-50%, -50%) rotate(-10deg);
          }
          60% {
            transform: translate(-50%, -50%) rotate(25deg);
          }
          80% {
            transform: translate(-50%, -50%) rotate(-5deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(-20deg);
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
