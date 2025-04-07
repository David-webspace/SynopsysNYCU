import React from 'react'

const TrackUserActivity = () => {

    function trackUserActivity(eventType, details) {
        const data = {
            event: eventType,
            details: details,
            timestamp: new Date().toISOString(),
        };

        // 發送數據到後端
        fetch('/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).catch((error) => console.error('追蹤失敗:', error));
    }

    // 追蹤頁面載入
    window.onload = () => {
        trackUserActivity('page_load', { url: window.location.href });
    };

    // 追蹤點擊事件
    document.addEventListener('click', (e) => {
        trackUserActivity('click', { element: e.target.tagName, id: e.target.id });
    });
  
}

export default TrackUserActivity