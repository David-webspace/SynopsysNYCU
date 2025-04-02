import React, { useState } from "react";
import curriculums from '../../datas/curriculum.json'

const Curriculum = () => {
  const [courseTab, setCourseTab] = useState('Chinese')

  // Separate tab data
  const tabs = [
    { id: 'Chinese', label: '中文梯次課表' },
    { id: 'English', label: '英文梯次課表' }
  ]

  // Separate components
  const ClassBlock = ({ title, building, time }) => (
    <div style={{
      backgroundColor: "var(--grey-trans-1)",
      filter:"blur(0.7)",
      padding: "8px 10px",
      marginBottom: "10px",
      textAlign: "center",
      borderRadius: "8px",
      border: "1px solid var(--grey-3)"
    }}>
      <h4 style={{ fontSize: "14px" }}>{title}</h4>
      <h5>{building}</h5>
      <h5>{time}</h5>
    </div>
  )

  const DaySchedule = ({ day, classes }) => (
    <div>
      <h3 style={{
        margin: "0 20px 10px 0",
        padding: "2px",
        // backgroundColor: "var(--grey-trans-1)",
        // filter:"blur(0.2)",
        borderRadius: "8px",
        border: "1px solid var(--grey-3)"
      }}>
        DAY{day}
      </h3>
      <div style={{
        marginRight: "20px",
        width: "260px"
      }}>
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
  )

  const TabButton = ({ id, label, isActive, onClick }) => (
    <li
      className="tabItemDefault"
      style={{
        backgroundColor: isActive ? 'var(--grey-trans-1)' : 'var(--grey-trans-2)',
        transition:"0.8s"
      }}
      onClick={onClick}
    >
      {label}
    </li>
  )

  const CurriculumContent = ({ type }) => {
    const curriculum = curriculums.find(c => c.id === type)
    if (!curriculum) return null

    return (
      <div
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "none",
          textAlign: "center"
        }}
        className={`${courseTab === (type === 'ch' ? 'Chinese' : 'English') ? '' : 'dn'}`}
      >
        <div className="df">
          {[1, 2, 3, 4].map(day => {
            const daySchedule = curriculum.schedule.find(s => s.day === day.toString())
            if (!daySchedule) return null

            return (
              <DaySchedule
                key={day}
                day={day}
                classes={daySchedule.class}
              />
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="mg-b-50" id="curriculum">
      <h2 className="mg-b-30 topicTag">課表</h2>

      <ul className="df mg-b-10">
        {tabs.map(tab => (
          <TabButton
            key={tab.id}
            id={tab.id}
            label={tab.label}
            isActive={courseTab === tab.id}
            onClick={() => setCourseTab(tab.id)}
          />
        ))}
      </ul>

      <CurriculumContent type="ch" />
      <CurriculumContent type="en" />
    </div>
  )
}

export default Curriculum
