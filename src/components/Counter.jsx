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
      <h1 className="mg-b-50 topicDefault">距離第一梯活動開始還有</h1>
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

  const [radius, setRadius] = useState(getRadius(document.documentElement.clientWidth)); // 初始化 radius
  const [counterWidth, setCounterWidth] = useState(getCounterWidth(document.documentElement.clientWidth)); // 初始化 counterWidth
  const ScreenWidth = window.innerWidth;

  useEffect(() => {
    const handleResize = () => {
      setRadius(getRadius(document.documentElement.clientWidth)); // 當螢幕寬度改變時更新 radius
      setCounterWidth(getCounterWidth(document.documentElement.clientWidth))
    };

    window.addEventListener("resize", handleResize); // 監聽螢幕大小變化
    return () => window.removeEventListener("resize", handleResize); // 清除事件監聽器
  }, []);

  // console.log(radius);

  // 圓圈的半徑
  const circumference = 2 * Math.PI * radius; // 動態計算圓周長
  const maxCounterDivider = label === "Seconds" || label === "Mins" ? 60 : label === "Hours" ? 24 : 100;
  const maxCounterWidth = ScreenWidth <= 425 ? 80 : ScreenWidth <= 768 ? 120 : ScreenWidth <= 1024 ? 160 : 240
  console.log(maxCounterWidth)

  return (
    <div className={`circle-progress ${isVisible ? "show" : ""}`}>
      <svg className="progress-ring" width={counterWidth} height={counterWidth}>
        {/* 背景灰色圓圈 */}
        <circle
          className="progress-ring__background"
          stroke="var(--blue-3)"
          strokeWidth="8"
          fill="transparent"
          r={radius}
          cx={counterWidth/2}
          cy={counterWidth/2}
        />
        {/* 進度綠色圓圈 */}
        <circle
          className="progress-ring__circle"
          stroke="var(--green-1)"
          strokeWidth="8"
          fill="transparent"
          r={radius}
          cx={counterWidth/2}
          cy={counterWidth/2}
          style={{
            strokeDasharray: circumference, // 動態計算的圓周長
            strokeDashoffset: circumference - (value / maxCounterDivider) * circumference, // 根據百分比計算偏移量
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

// 計算 radius 的輔助函數
const getRadius = (screenWidth) => {
  return (
    screenWidth <= 425
    ? 50
    : screenWidth <= 768
    ? 60
    : screenWidth <= 1024
    ? 80
    : 110
  )
};

const getCounterWidth = (screenWidth) => {
  return  screenWidth <= 425 
    ? 80 : 
    screenWidth <= 768 
    ? 120 :
    screenWidth <= 1024 
    ? 160 :
    240
}

export default Counter;
