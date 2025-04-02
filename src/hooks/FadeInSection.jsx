import React, { useEffect, useState, useRef } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // 停止監測以提升性能
          }
        });
      },
      { threshold: 0.05 } // 只有當元素 10% 可見時觸發
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect(); // 清除監測器
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "show" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
