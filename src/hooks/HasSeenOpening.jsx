import React from 'react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HasSeenOpening = ({ hasSeen }) => {
    const navigate = useNavigate();
    const [showContent, setShowContent] = useState(false);
    const [startTransition, setStartTransition] = useState(false);

    useEffect(() => {
        // 檢查是否已經看過開場動畫
        const hasSeenOpening = localStorage.getItem('hasSeenOpening');
        
        if (hasSeenOpening) {
            // 如果看過，直接導航到目標頁面
            navigate('/dev');
        } else {
            // 如果沒看過，顯示開場動畫
            setTimeout(() => {
                setShowContent(true);
            }, 1000);
        }
    }, [navigate]);

    const handleEnter = () => {
        setStartTransition(true);
        // 設置已看過開場動畫的標記
        localStorage.setItem('hasSeenOpening', 'true');
        
        setTimeout(() => {
            navigate('/dev');
        }, 1500);
    };
  return (
    <div></div>
  )
}

export default HasSeenOpening