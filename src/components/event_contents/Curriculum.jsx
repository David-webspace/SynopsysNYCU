import React, { useState } from "react";
import curriculums from '../../datas/curriculum.json';
import '../../css/curriculum.css';

const Curriculum = () => {
  const [courseTab, setCourseTab] = useState('ch1');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Tab data
  const tabs = [
    { id: 'ch1', label: '第一梯次' },
    { id: 'ch2', label: '第二梯次' },
    { id: 'en', label: '第三梯次（英文授課）' }
  ];

  // Separate components
  const ClassBlock = ({ title, building, time }) => (
    <div className="classBlock">
      <h4 style={{ fontSize: "14px" }}>{title}</h4>
      <h5>{building}</h5>
      <h5>{time}</h5>
    </div>
  );

  const DaySchedule = ({ day, classes }) => (
    <div>
      <h3 className="dayHeader">DAY{day}</h3>
      <div style={{ marginRight: "20px", width: "260px" }}>
        {classes.map((classItem, index) => (
          <ClassBlock
            key={index}
            title={classItem.titleCh}
            building={classItem.buildingCh}
            time={classItem.time}
          />
        ))}
      </div>
    </div>
  );

  const DetailContent = ({ camp, date, id }) => (
    <div className={`${id === courseTab ? '' : 'dn'}`}>
      <h4>梯次｜{camp}</h4>
      <h4>時間｜{date}</h4>
    </div>
  );

  const CurriculumContent = ({ type }) => {
    const curriculum = curriculums.find(c => c.id === type);
    if (!curriculum) return null;

    return (
      <div
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "none",
          textAlign: "center"
        }}
        className={`${courseTab === type ? '' : 'dn'}`}
      >
        <div className="df">
          {[1, 2, 3, 4].map(day => {
            const daySchedule = curriculum.schedule.find(s => s.day === day.toString());
            if (!daySchedule) return null;

            return (
              <DaySchedule
                key={day}
                day={day}
                classes={daySchedule.class}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="mg-b-50" id="curriculum">
      <h1 className="mg-b-30">活動時程</h1>

      <div style={{ marginBottom: "20px" }}>
        <h4>地點｜國立陽明交通大學</h4>
        {curriculums.map(info => (
          <DetailContent
            key={info.id}
            camp={info.camp}
            date={info.date}
            id={info.id}
          />
        ))}
      </div>

      {/* Dropdown Button */}
      <div className="dropdown">
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdownButton">
          {/* {tabs.find(tab => tab.id === courseTab).label} */}
          查看其他梯次
        </button>
        {dropdownOpen && (
          <ul className="dropdownMenu">
            {tabs.map(tab => (
              <li
                key={tab.id}
                className="dropdownItem"
                onClick={() => {
                  setCourseTab(tab.id);
                  setDropdownOpen(false);
                }}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <CurriculumContent type="ch1" />
      <CurriculumContent type="ch2" />
      <CurriculumContent type="en" />
    </div>
  );
};

export default Curriculum;
