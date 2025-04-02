import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeInSection from "../hooks/FadeInSection"; // 引入淡入元件
import "../css/opening.css";

const Opening = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    // 延遲顯示內容
    setTimeout(() => {
      setShowContent(true);
    }, 1000);
  }, []);

  const handleEnter = () => {
    setStartTransition(true);

    // 設置已看過開場動畫的標記
    localStorage.setItem("hasSeenOpening", "true");

    // 等待轉場動畫完成後導航
    setTimeout(() => {
      navigate("/dev");
    }, 1500);
  };

  return (
    <div
      className={`opening-container ${startTransition ? "fade-out" : ""}`}
      onClick={handleEnter}
    >
      {/* 背景視頻 */}
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/homevideo-2.mp4" type="video/mp4" />
      </video>

      {/* 主要內容 */}
      <FadeInSection>
        <div className={`content ${showContent ? "visible" : ""} ${startTransition ? "fade-out" : ""}`}>
          <div>
            <h1 className="title">IC, THE FUTURE</h1>
            <div className="enter-button">CLICK TO ENTER</div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Opening;
