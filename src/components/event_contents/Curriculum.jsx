import React, { useState } from "react";
import curriculums from '../../datas/curriculum.json'

const Curriculum = () => {

  const [courseTab, setCourseTab] = useState('Chinese')

  const curriculumRender = (lng) => {
    return curriculums.map((curriculum, index) => {

      const scheduleRender = (day) => {
        return curriculum.schedule.map((schedule, scheduleIndex) => {

          const blockRender = schedule.class.map((classItem, classIndex) => {
            return(
              <div
                key={classIndex}
                style={{
                  backgroundColor:"var(--grey-1)",
                  padding:"8px 10px",
                  marginBottom:"10px",
                  textAlign:"center",
                  borderRadius:"8px",
                  border:"1px solid var(--grey-3)"
                }}
              >
                <h4 style={{fontSize:"14px"}}>{classItem.titleCh}</h4>
                <h5>{classItem.buildingCh}</h5>
                <h5>{classItem.time}</h5>
              </div>
            )
          })

          if(day==schedule.day){
            return(
              <div key={scheduleIndex}>
                <h3
                  style={{
                    margin:"0 20px 10px 0",
                    padding:"2px",
                    backgroundColor:"var(--grey-4)",
                    borderRadius:"8px",
                    border:"1px solid var(--grey-3)"
                  }}
                >
                  DAY{schedule.day}
                </h3>
                <div style={{marginRight:"20px", width:"260px"}}>
                  {blockRender}
                </div>
              </div>
            )
          }
        })
      }

      if(lng==curriculum.id){
        return(
          <div key={index} className="df">
            {scheduleRender(1)}
            {scheduleRender(2)}
            {scheduleRender(3)}
            {scheduleRender(4)}
          </div>
        )
      }
    })
  }

  return (
    <div className="mg-b-50" id="curriculum">

      <h2 className="mg-b-30 topicTag">課表</h2>

      <ul className="df mg-b-10">
        <li
          className="tabItemDefault"
          style={{backgroundColor: `${courseTab == 'Chinese' ? 'var(--table-tr)' : 'var(--grey-2)'}`}}
          onClick={()=>setCourseTab('Chinese')}
        >
          中文梯次課表
        </li>
        <li
          className="tabItemDefault"
          style={{backgroundColor: `${courseTab == 'English' ? 'var(--table-tr)' : 'var(--grey-2)'}`}}
          onClick={()=>setCourseTab('English')}
        >
          英文梯次課表
        </li>
      </ul>

      {/* Chinese Lecture, Chinese version curriculum */}
      {/* <table
        border="1"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "none",
          textAlign:"center"
        }}
        className={`${courseTab == 'Chinese' ? '' : 'dn'}`}
      >
        <thead style={{outline:"3px var(--table-tr)"}}>
          <tr style={{backgroundColor: "var(--table-tr)", color: "white"}}>
            <th>時間</th>
            <th colSpan={2}>Day 1</th>
            <th colSpan={2}>Day 2</th>
            <th colSpan={2}>Day 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{backgroundColor:"var(--grey-2)"}}></td>
            <td style={{backgroundColor:"var(--grey-2)"}}>項目</td>
            <td style={{backgroundColor:"var(--grey-2)"}}>地點</td>
            <td style={{backgroundColor:"var(--grey-2)"}}>項目</td>
            <td style={{backgroundColor:"var(--grey-2)"}}>地點</td>
            <td style={{backgroundColor:"var(--grey-2)"}}>項目</td>
            <td style={{backgroundColor:"var(--grey-2)"}}>地點</td>
          </tr>
          <tr>
            <td>08:30-09:30</td>
            <td>-</td>
            <td>交大光復校區</td>
            <td>早餐</td>
            <td>工程四館2F｜220教室</td>
            <td>早餐</td>
            <td>工程四館2F｜220教室</td>
          </tr>
          <tr>
            <td>09:30-10:00</td>
            <td>學員報到</td>
            <td>工程四館B1｜報到區</td>
            <td>半導體製程概論【柏村】</td>
            <td>工程四館B1｜合勤講堂</td>
            <td rowspan="2">成果發表</td>
            <td rowSpan="5">二餐1001空間</td>
          </tr>
          <tr>
            <td>10:00-12:00</td>
            <td>開幕式暨半導體<br/>產業沙龍</td>
            <td>工程四館B1｜合勤講堂</td>
            <td>數位電路設計實驗【一】</td>
            <td></td>
          </tr>
          <tr>
            <td>12:00-13:30</td>
            <td>午餐</td>
            <td>工程四館2F｜220教室</td>
            <td>午餐</td>
            <td>工程四館2F｜220教室</td>
            <td>午餐</td>
          </tr>
          <tr>
            <td>13:30-14:30</td>
            <td>半導體技術發展</td>
            <td>工程四館B1｜合勤講堂</td>
            <td rowSpan="2">數位電路設計實驗【二】</td>
            <td rowSpan="2">資訊技術中心｜電腦教室</td>
            <td>總經理演講</td>
          </tr>
          <tr>
            <td>14:30-17:30</td>
            <td>數位邏輯基礎到<br />數位電路設計</td>
            <td>工程四館B1｜合勤講堂</td>
            <td>閉幕式</td>
          </tr>
          <tr>
            <td>17:30-18:30</td>
            <td>晚餐</td>
            <td>科學三館｜教室</td>
            <td>晚餐</td>
            <td>科學三館｜教室</td>
            <td rowSpan="3">賦歸</td>
            <td rowSpan="3">同學自行離開交大博愛校區</td>
          </tr>
          <tr>
            <td>18:30-21:00</td>
            <td>交流活動</td>
            <td>科學三館｜教室</td>
            <td>準備成果發表</td>
            <td>科學三館｜教室</td>
          </tr>
          <tr>
            <td>21:00-隔日</td>
            <td>就寢休息</td>
            <td>宿舍</td>
            <td>就寢休息</td>
            <td>宿舍</td>
          </tr>
        </tbody>
      </table> */}
      <div
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "none",
          textAlign:"center"
        }}
        className={`${courseTab == 'Chinese' ? '' : 'dn'}`}
      >
        {curriculumRender("ch")}
      </div>



      {/* English Lecture, Chinese version curriculum */}
      {/* <table
        border="1"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "none",
          textAlign:"center"
        }}
        className={`${courseTab == 'English' ? '' : 'dn'}`}
      >
        <thead>
          <tr style={{backgroundColor: "var(--table-tr)", color: "white"}}>
            <th>時間</th>
            <th colSpan={2}>Day 1</th>
            <th colSpan={2}>Day 2 </th>
            <th colSpan={2}>Day 3 </th>
            <th colSpan={2}>Day 4 </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{backgroundColor:"var(--grey-2)"}}></td>
            <td style={{backgroundColor:"var(--grey-2)"}}>項目</td>
            <td style={{backgroundColor:"var(--grey-2)"}}>地點</td>
            <td style={{backgroundColor:"var(--grey-2)"}}>項目</td>
            <td style={{backgroundColor:"var(--grey-2)"}}>地點</td>
            <td style={{backgroundColor:"var(--grey-2)"}}>項目</td>
            <td style={{backgroundColor:"var(--grey-2)"}}>地點</td>
            <td style={{backgroundColor:"var(--grey-2)"}}>項目</td>
            <td style={{backgroundColor:"var(--grey-2)"}}>地點</td>
          </tr>
          <tr>
            <td>08:30-09:30</td>
            <td>-</td>
            <td>同學自行抵達交大光復校區</td>
            <td>早餐</td>
            <td>工程四館2F｜220教室</td>
            <td>早餐</td>
            <td>工程四館2F｜220教室</td>
            <td>早餐</td>
            <td>吃飯教室6-工四</td>
          </tr>
          <tr>
            <td>09:30-10:00</td>
            <td>學員報到</td>
            <td>工程四館B1｜報到區</td>
            <td>半導體製程概論【柏村】</td>
            <td rowspan="2">工程四館B1｜合勤講堂</td>
            <td rowspan="2">企業領袖面對面</td>
            <td rowspan="2">工程四館B1｜合勤講堂</td>
            <td rowspan="2">成果發表</td>
            <td rowSpan="1">中正堂前廣場<br />遊覽車</td>
          </tr>
          <tr>
            <td>10:00-12:00</td>
            <td>開幕式暨半導體產業沙龍</td>
            <td>工程四館B1｜合勤講堂</td>
            <td>數位電路設計實驗【一】</td>
            <td rowSpan="4">博愛校區賢齊館</td>
          </tr>
          <tr>
            <td>12:00-13:30</td>
            <td>午餐</td>
            <td>工程四館2F｜220教室</td>
            <td>午餐</td>
            <td>工程四館2F｜220教室</td>
            <td>午餐</td>
            <td>工程四館2F｜220教室</td>
            <td>午餐</td>
          </tr>
          <tr>
            <td>13:30-14:30</td>
            <td>半導體技術發展</td>
            <td>工程四館B1｜合勤講堂</td>
            <td rowSpan="2">數位電路設計實驗【二】</td>
            <td rowSpan="2">資訊技術中心｜電腦教室</td>
            <td rowSpan="2">實體走訪<br />TSMC台積創新館<br />TASA 國家太空中心</td>
            <td rowSpan="2">台積創新館、TASA</td>
            <td>總經理演講</td>
          </tr>
          <tr>
            <td>14:30-17:30</td>
            <td>數位邏輯基礎到<br />數位電路設計</td>
            <td>工程四館B1｜合勤講堂</td>
            <td>閉幕式</td>
          </tr>
          <tr>
            <td>17:30-18:30</td>
            <td>晚餐</td>
            <td>科學三館｜教室</td>
            <td>晚餐</td>
            <td>科學三館｜教室</td>
            <td>晚餐</td>
            <td>科學三館｜教室</td>
            <td rowSpan="3">賦歸</td>
            <td rowSpan="3">同學自行離開<br />交大博愛校區</td>
          </tr>
          <tr>
            <td>18:30-21:00</td>
            <td>交流活動</td>
            <td>科學三館｜教室</td>
            <td>準備成果發表</td>
            <td>科學三館｜教室</td>
            <td>科學趣味競賽</td>
            <td>科學三館｜教室</td>
          </tr>
          <tr>
            <td>21:00-隔日</td>
            <td>就寢休息</td>
            <td>宿舍</td>
            <td>就寢休息</td>
            <td>宿舍</td>
            <td>就寢休息</td>
            <td>宿舍</td>
          </tr>
        </tbody>
      </table> */}

      <div
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "none",
          textAlign:"center"
        }}
        className={`${courseTab == 'English' ? '' : 'dn'}`}
      >
        {curriculumRender("en")}
      </div>
    </div>
  );
};

export default Curriculum;
