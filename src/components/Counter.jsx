import React, { useState, useEffect } from "react";
import "../css/counter.css";

const Counter = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: -Math.floor(Math.abs(difference) / (1000 * 60 * 60 * 24)),
          hours: -Math.floor((Math.abs(difference) / (1000 * 60 * 60)) % 24),
          minutes: -Math.floor((Math.abs(difference) / (1000 * 60)) % 60),
          seconds: -Math.floor((Math.abs(difference) / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="counter-container">
      <h2 className="mg-b-50">距離第一梯活動開始還有</h2>
      <div className="counter">
        <CircleProgress value={timeLeft.days} label="Days" />
        <CircleProgress value={timeLeft.hours} label="Hours" />
        <CircleProgress value={timeLeft.minutes} label="Mins" />
        <CircleProgress value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

const CircleProgress = ({ value, label }) => {

    const radius = 110; // 圓圈的半徑
    const circumference = 2 * Math.PI * radius; // 動態計算圓周長
    
    return (
        <div className="circle-progress">
        <svg className="progress-ring" width="240" height="240">
            {/* 背景灰色圓圈 */}
            <circle
                className="progress-ring__background"
                stroke="var(--blue-3)"
                strokeWidth="8"
                fill="transparent"
                r={radius}
                cx="120"
                cy="120"
            />
            {/* 進度綠色圓圈 */}
            <circle
            className="progress-ring__circle"
            stroke="var(--green-1)"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="120"
            cy="120"
            style={{
                strokeDasharray: circumference, // 動態計算的圓周長
                strokeDashoffset: circumference - (value / 100) * circumference, // 根據百分比計算偏移量
            }}
            />
        </svg>
        <div className="circle-text">
            <span>{value}</span>
            <small>{label}</small>
        </div>
        </div>
    );
};

export default Counter;
