import React, { useState } from 'react';
import SemiSVG from './SemiSVG'

const SemiButton = () => {
  const [hoveredSide, setHoveredSide] = useState(null);

  // Coordinates for pins on each side
  const pinCoordinates = {
    top: [
      { x: 68, y: 58 },
      { x: 86, y: 58 },
      { x: 103, y: 58 },
      { x: 123, y: 58 },
      { x: 139, y: 58 },
      { x: 155, y: 58 },
      { x: 176, y: 58 }
    ],
    right: [
      { x: 189, y: 72 },
      { x: 189, y: 86 },
      { x: 189, y: 103 },
      { x: 189, y: 123 },
      { x: 189, y: 139 },
      { x: 189, y: 155 },
      { x: 189, y: 176 }
    ],
    bottom: [
      { x: 176, y: 189 },
      { x: 155, y: 189 },
      { x: 139, y: 189 },
      { x: 123, y: 189 },
      { x: 103, y: 189 },
      { x: 86, y: 189 },
      { x: 68, y: 189 }
    ],
    left: [
      { x: 58, y: 176 },
      { x: 58, y: 155 },
      { x: 58, y: 139 },
      { x: 58, y: 123 },
      { x: 58, y: 103 },
      { x: 58, y: 86 },
      { x: 58, y: 72 }
    ]
  };

  // Determine line end point (extend further out)
  const getLineEndPoint = (pin, side) => {
    const distance = 30; // Length of line
    switch(side) {
      case 'top': return { x: pin.x, y: pin.y - distance };
      case 'right': return { x: pin.x + distance, y: pin.y };
      case 'bottom': return { x: pin.x, y: pin.y + distance };
      case 'left': return { x: pin.x - distance, y: pin.y };
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <svg 
        width="246" 
        height="246" 
        viewBox="0 0 246 246" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHoveredSide('top')}
        onMouseLeave={() => setHoveredSide(null)}
        className="cursor-pointer"
      >
        {/* Original SVG content */}
        {/* ... (you can paste the original SVG paths here) */}
        <SemiSVG />
        
        {/* Hover effect lines */}
        {hoveredSide && pinCoordinates[hoveredSide].map((pin, index) => {
          const endPoint = getLineEndPoint(pin, hoveredSide);
          return (
            <g key={index}>
              <line
                x1={pin.x}
                y1={pin.y}
                x2={endPoint.x}
                y2={endPoint.y}
                stroke="blue"
                strokeWidth="2"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
              <circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="3"
                fill="blue"
                className="transition-all duration-300"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default SemiButton;