import React from "react";
import itinerary from '../../datas/curriculum.json'
import "../../css/curriculum.css";

const CompetitionInfo = () => {
  return (
    <div className="competition-info-container">
      {/* 左側資訊 */}
      <div className="left-section">
        <h2 className="title">活動時程</h2>
        <p className="date">July, 2025</p>
        <div className="location">
          <p>地點 | 國立陽明交通大學</p>
          <p>時間 | 2025/7/10(六) - 7/12(日)</p>
          {/* <p>· 本次活動不提供過夜場地</p> */}
        </div>
      </div>

      {/* 右側行程表 */}
      <div className="schedule-section">
        {itinerary[0].schedule.map((daySchedule) => (
          <div className="day-container" key={daySchedule.day}>
            <div className="day-header">
              <h4 className="day-number">{daySchedule.day}</h4>
              <h4 className="day-name">{`Day ${daySchedule.day}`}</h4>
            </div>
            <ul className="schedule-list">
              {daySchedule.class.map((classItem, index) => (
                <li key={index} className="df">
                  <h4 className="time">{classItem.time}</h4>{" "}
                  <h4 className="title">{classItem.titleCh}</h4>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitionInfo;
