import React, { useState } from "react";
import itinerarys from '../../datas/curriculum.json'
import "../../css/curriculum.css";

const CompetitionInfo = () => {
  const ScreenWidth = window.innerWidth
  const [campSelected, setCampSelected] = useState('ch1')
  const [campBtn, setCampBtn] = useState(false)

  const toggleCampBtn = () => {
    setCampBtn(!campBtn)
  }


  const dateRender = itinerarys.map((daySchedule, index) => {
    return(
      <div key={index} style={{display: `${daySchedule.id === campSelected ? '' : 'none'}`}}>
        <p>梯次 | {daySchedule.camp}</p>
        <p>時間 | {daySchedule.date}</p>
      </div>
    )
  })

  const scheduleRender = itinerarys
    .filter((itinerary) => itinerary.id === campSelected)
    .flatMap((filterSchedule) => 
      filterSchedule.schedule.map((daySchedule, index) =>  (
        <div className="day-container" key={index}>
          {console.log(daySchedule.weekday)}
          <div className="day-header">
            <h4 className="day-number">{daySchedule.date}</h4>
            <h4 className="week-name">{daySchedule.weekday}</h4>
          </div>
          <ul className="schedule-list">
            {daySchedule.class.map((classItem, idx) => (
              <li key={idx} className="df">
                <h4 className="time">{classItem.time}</h4>
                <h4 className="title">{classItem.titleCh}</h4>
              </li>
            ))}
          </ul>
        </div>
    ))
  )


  return (
    <div className="competition-info-container">
      {/* 左側資訊 */}
      <div className="left-section">
        <h2 className="title">活動時程</h2>
        <p className="date">July, 2025</p>
        <div className="location mg-b-20">
          <p>地點 | 國立陽明交通大學</p>
          {dateRender}
        </div>
        <div className="campBtn">
          <button onClick={toggleCampBtn}>查看其他梯次</button>
          <ul className={`${campBtn ? '' : 'dn'}`}>
            <li onClick={() => {setCampSelected('ch1'); setCampBtn(false)}}>第一梯次（中文授課）</li>
            <li onClick={() => {setCampSelected('ch2'); setCampBtn(false)}}>第二梯次（中文授課）</li>
            <li onClick={() => {setCampSelected('en'); setCampBtn(false)}}>第三梯次（英文授課）</li>
          </ul>
        </div>
      </div>

      {/* 右側行程表 */}
      <div className="schedule-section">
          {scheduleRender}
      </div>

      <div className={`campBtn ${ScreenWidth <= 768 ? '' : 'dn'}`}>
        <button onClick={toggleCampBtn}>查看其他梯次</button>
        <ul className={`${campBtn ? '' : 'dn'}`}>
          <li onClick={() => {setCampSelected('ch1'); setCampBtn(false)}}>第一梯次（中文授課）</li>
          <li onClick={() => {setCampSelected('ch2'); setCampBtn(false)}}>第二梯次（中文授課）</li>
          <li onClick={() => {setCampSelected('en'); setCampBtn(false)}}>第三梯次（英文授課）</li>
        </ul>
      </div>
    </div>
  );
};

export default CompetitionInfo;
