import React, { useState, useEffect, useRef } from "react";
import "../css/counter.css";

const Counter = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isVisible, setIsVisible] = useState(false); // 控制文字顯示
  const [circleVisible, setCircleVisible] = useState([false, false, false, false]); // 控制每個圓圈的顯示
  const containerRef = useRef();

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            // 延遲依次顯示圓圈
            setTimeout(() => setCircleVisible([true, false, false, false]), 200);
            setTimeout(() => setCircleVisible([true, true, false, false]), 400);
            setTimeout(() => setCircleVisible([true, true, true, false]), 600);
            setTimeout(() => setCircleVisible([true, true, true, true]), 800);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`counter-container xContainer ${isVisible ? "show" : ""}`}
      ref={containerRef}
    >
      <h1 className="mg-b-50">距離第一梯活動開始還有</h1>
      <div className="counter">
        <CircleProgress value={timeLeft.days} label="Days" isVisible={circleVisible[0]} />
        <CircleProgress value={timeLeft.hours} label="Hours" isVisible={circleVisible[1]} />
        <CircleProgress value={timeLeft.minutes} label="Mins" isVisible={circleVisible[2]} />
        <CircleProgress value={timeLeft.seconds} label="Seconds" isVisible={circleVisible[3]} />
      </div>
    </div>
  );
};

const CircleProgress = ({ value, label, isVisible }) => {
  const radius = 110; // 圓圈的半徑
  const circumference = 2 * Math.PI * radius; // 動態計算圓周長

  return (
    <div className={`circle-progress ${isVisible ? "show" : ""}`}>
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
