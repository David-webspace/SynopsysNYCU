import React, { useState } from "react";

const SemiButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Pin coordinates based on the SVG layout
  const pins = [
    { id: "pin1", cx: 24.5, cy: 3.5 },
    { id: "pin2", cx: 40.5, cy: 3.5 },
    { id: "pin3", cx: 56.5, cy: 3.5 },
    { id: "pin4", cx: 72.5, cy: 3.5 },
    { id: "pin5", cx: 88.5, cy: 3.5 },
    { id: "pin6", cx: 104.5, cy: 3.5 },
    { id: "pin7", cx: 120.5, cy: 3.5 },
    { id: "pin8", cx: 24.5, cy: 141.5 },
    { id: "pin9", cx: 40.5, cy: 141.5 },
    { id: "pin10", cx: 56.5, cy: 141.5 },
    { id: "pin11", cx: 72.5, cy: 141.5 },
    { id: "pin12", cx: 88.5, cy: 141.5 },
    { id: "pin13", cx: 104.5, cy: 141.5 },
    { id: "pin14", cx: 120.5, cy: 141.5 },
    { id: "pin15", cx: 3.5, cy: 24.5 },
    { id: "pin16", cx: 3.5, cy: 40.5 },
    { id: "pin17", cx: 3.5, cy: 56.5 },
    { id: "pin18", cx: 3.5, cy: 72.5 },
    { id: "pin19", cx: 3.5, cy: 88.5 },
    { id: "pin20", cx: 3.5, cy: 104.5 },
    { id: "pin21", cx: 3.5, cy: 120.5 },
    { id: "pin22", cx: 141.5, cy: 24.5 },
    { id: "pin23", cx: 141.5, cy: 40.5 },
    { id: "pin24", cx: 141.5, cy: 56.5 },
    { id: "pin25", cx: 141.5, cy: 72.5 },
    { id: "pin26", cx: 141.5, cy: 88.5 },
    { id: "pin27", cx: 141.5, cy: 104.5 },
    { id: "pin28", cx: 141.5, cy: 120.5 },
  ];

  // Function to handle hover state change
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="semiButton"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pins */}
        {pins.map((pin) => (
          <circle
            key={pin.id}
            id={pin.id}
            cx={pin.cx}
            cy={pin.cy}
            r="3"
            fill="#585858"
            className="pin"
          />
        ))}

        {/* Lines and circles (points) */}
        {pins.map((pin, index) => (
          <React.Fragment key={pin.id}>
            <line
              className={`line ${isHovered ? "animate" : ""}`}
              x1={pin.cx}
              y1={pin.cy}
              x2={pin.cx}
              y2={pin.cy}
              stroke="#585858"
              strokeWidth="1"
              style={{ transitionDelay: `${index * 0.1}s` }}
            />
            <circle
              className={`circle ${isHovered ? "animate" : ""}`}
              cx={pin.cx}
              cy={pin.cy}
              r="2"
              fill="#585858"
              style={{ transitionDelay: `${index * 0.1}s` }}
            />
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default SemiButton;
