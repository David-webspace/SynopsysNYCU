import React, { useState, useEffect } from "react";

const Analytics = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  // 初始化數據（讀取 Local Storage）
  useEffect(() => {
    // 從 Local Storage 獲取數據
    const storedVisitCount = localStorage.getItem("visitCount");
    const storedClickCount = localStorage.getItem("clickCount");

    // 如果有記錄，將其載入到 state
    if (storedVisitCount) {
      setVisitCount(parseInt(storedVisitCount, 10));
    }
    if (storedClickCount) {
      setClickCount(parseInt(storedClickCount, 10));
    }

    // 更新造訪次數並存入 Local Storage
    const newVisitCount = (parseInt(storedVisitCount, 10) || 0) + 1;
    setVisitCount(newVisitCount);
    localStorage.setItem("visitCount", newVisitCount);
  }, []);

  // 處理按鈕點擊
  const handleButtonClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    localStorage.setItem("clickCount", newClickCount);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>網頁分析功能</h1>
      <p>您總共造訪了該頁面：<strong>{visitCount}</strong> 次。</p>
      <p>您總共點擊按鈕：<strong>{clickCount}</strong> 次。</p>
      <button onClick={handleButtonClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
        點擊我！
      </button>
    </div>
  );
};

export default Analytics;
