import React, { useState } from "react";
import curriculums from '../../datas/curriculum.json';
import '../../css/curriculum.css';
import { useTranslation } from 'react-i18next';

const Curriculum = () => {
  const { t, i18n } = useTranslation();

  const [courseTab, setCourseTab] = useState('ch1');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Tab data
  const tabs = [
    { id: 'ch1', label: '第一梯次' },
    { id: 'ch2', label: '第二梯次' },
    { id: 'en', label: '第三梯次（英文授課）' }
  ];

  // Separate components
  const ClassBlock = ({ title, building, time, duration }) => (
    <div
      className="classBlock"
      style={{
        height:`${ duration === '2' ? '190px' : '90px'}`,
      }}>
      <div>
        <h4 style={{ fontSize: "14px" }}>{t(title)}</h4>
        <h4> </h4>
        {/* <h5>{t(building)}</h5> */}
        <h5>{time}</h5>
      </div>
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
            duration={classItem.duration}
          />
        ))}
      </div>
    </div>
  );

  const DetailContent = ({ camp, date, id }) => (
    <div className={`${id === courseTab ? '' : 'dn'}`}>
      <h4>{t('梯次｜')}{t(camp)}</h4>
      <h4>{t('時間｜')}{t(date)}</h4>
    </div>
  );

  const CurriculumContent = ({ type }) => {
    const curriculum = curriculums.find(c => c.id === type);
    if (!curriculum) return null;

    return (
      <div
        className={`${courseTab === type ? '' : 'dn'} curriculumContent`}
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
      <h1 className="mg-b-30" style={{textAlign:"center"}}>{t('活動時程')}</h1>

      <div style={{ marginBottom: "20px", textAlign:"center"}}>
        <h4>{t('地點｜國立陽明交通大學')}</h4>
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
          {t('查看其他梯次')}
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
                {t(tab.label)}
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
