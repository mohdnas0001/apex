import React from "react";

const animationStyles = `
  @keyframes linearMotion {
    0% {
      transform: translateX(60px); // Start from left
    }
    50% {
      transform: translateX(130px); // Move to right
    }
    100% {
      transform: translateX(60px); // Back to left
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 50; 
    }
  }
`;

const Ellipse = () => {
  return (
    <div className="mt-10 h-full w-full">
      <div className="absolute left-16 top-10 bg-transparent p-2 shadow-lg">
        {/* <div
          className="w-[140px] md:w-[170px] h-[140px] md:h-[170px] flex items-center justify-center"
          style={{
            backgroundImage: "url('/FirstImage.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
          }}
        ></div> */}
      </div>
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 780 410"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "red", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "yellow", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "blue", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "cyan", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "green", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "lime", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "purple", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "pink", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "orange", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "red", stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        <ellipse
          id="red_line"
          cx="400"
          cy="200"
          rx="375"
          ry="150"
          style={{
            fill: "none",
            stroke: "#ed73b1",
            strokeDasharray: "1, 1",
            animation: "dash 5s linear infinite",
          }}
        />

        <ellipse
          id="blue_line"
          cx="400"
          cy="200"
          rx="370"
          ry="145"
          style={{
            fill: "none",
            stroke: "#3dd9eb",
            strokeDasharray: "1, 1",
            animation: "dash 5s linear infinite",
          }}
        />

        <circle cx="65" cy="285" r="6" fill="url(#grad1)" />
        <circle cx="750" cy="270" r="6" fill="url(#grad2)" />

        <circle cx="140" cy="64" r="6" fill="url(#grad3)" />
        <circle cx="510" cy="23" r="6" fill="url(#grad4)" />

        <circle
          cx="310"
          cy="390"
          r="6"
          fill="url(#grad5)"
          style={{ animation: "linearMotion 5s linear infinite" }}
        />

        <style>{animationStyles}</style>
      </svg>
    </div>
  );
};

export default Ellipse;
