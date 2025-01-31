import React from 'react'

const SemiButton2 = () => {
    // Coordinates array to store points on each side of the rectangle
    const coordinate = []

    // Define rectangle dimensions (assuming 200px width and 100px height)
    const width = 90;
    const height = 100;

    // Generate coordinates for the rectangle
    // 7 points per side

    // Top side (from left to right)
    for (let i = 0; i < 7; i++) {
        const x = (width / 6) * i;  // Evenly spaced across the top side
        const y = 0;  // Fixed y-coordinate for the top side
        coordinate.push({ x, y });
    }

    // Right side (from top to bottom)
    for (let i = 0; i < 7; i++) {
        const x = width;  // Fixed x-coordinate for the right side
        const y = (height / 6) * i;  // Evenly spaced down the right side
        coordinate.push({ x, y });
    }

    // Bottom side (from right to left)
    for (let i = 0; i < 7; i++) {
        const x = (width / 6) * (6 - i);  // Evenly spaced across the bottom side, reversed
        const y = height;  // Fixed y-coordinate for the bottom side
        coordinate.push({ x, y });
    }

    // Left side (from bottom to top)
    for (let i = 0; i < 7; i++) {
        const x = 0;  // Fixed x-coordinate for the left side
        const y = (height / 6) * (6 - i);  // Evenly spaced up the left side, reversed
        coordinate.push({ x, y });
    }

    console.log("Coordinates for points on the rectangle:", coordinate);

    return (
        <div>
            <div className="outerBox df jc-c aln-itm-c" >
                <div className="innerBox"></div>
            </div>
            <div>
                {/* Optionally, render points for visualization */}
                {coordinate.map((point, index) => (
                    <div 
                        key={index} 
                        style={{
                            position: 'absolute',
                            top: `${point.y}px`,
                            left: `${point.x}px`,
                            width: '5px',
                            height: '5px',
                            backgroundColor: 'black',
                            borderRadius: '50%',
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default SemiButton2;
