import React from "react";

const Curriculum = () => {
  return (
    <div className="mg-b-50">
      <h2 className="mg-b-30 topicTag">課表</h2>

      {/* Chinese Lecture, Chinese version curriculum */}
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "none",
          textAlign:"center",
          marginBottom:"100px"
        }}
      >
        <thead>
          <tr style={{backgroundColor: "#E57D3D", color: "white"}}>
            <th>Time</th>
            <th>D1</th>
            <th>D2</th>
            <th>D3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>早餐</td>
            <td>早餐</td>
          </tr>
          <tr>
            <td>9:30</td>
            <td>報到</td>
            <td rowSpan={2}>製程概論</td>
            <td>前往博愛</td>
          </tr>
          <tr>
            <td>10:00</td>
            <td>開幕+沙龍座談</td>
            <td>成果報告or比賽</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>午餐</td>
            <td>午餐</td>
            <td>午餐</td>
          </tr>
          <tr>
            <td>13:30</td>
            <td>半導體產業+晶片概論</td>
            <td rowSpan={2}>晶片設計實驗</td>
            <td>總經理演講</td>
          </tr>
          <tr>
            <td>14:30</td>
            <td>晶片設計理論</td>
            <td>閉幕式</td>
          </tr>
          <tr>
            <td>17:30</td>
            <td>晚餐</td>
            <td>晚餐</td>
            <td></td>
          </tr>
          <tr>
            <td>18:30</td>
            <td>交流活動or寓教於樂的遊戲</td>
            <td>晶片設計專案討論or競賽準備</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      {/* English Lecture, Chinese version curriculum */}
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "none",
          textAlign:"center"
        }}
      >
        <thead>
          <tr style={{backgroundColor: "#E57D3D", color: "white"}}>
            <th>Time</th>
            <th>D1</th>
            <th>D2</th>
            <th>D3</th>
            <th>D4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>早餐</td>
            <td>早餐</td>
            <td>早餐</td>
          </tr>
          <tr>
            <td>9:30</td>
            <td>報到</td>
            <td rowSpan={2}>製程概論</td>
            <td rowSpan={2}>晶片設計實驗</td>
            <td>前往博愛</td>
          </tr>
          <tr>
            <td>10:00</td>
            <td>開幕+沙龍座談</td>
            <td>成果報告or比賽</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>午餐</td>
            <td>午餐</td>
            <td>午餐</td>
            <td>午餐</td>
          </tr>
          <tr>
            <td>13:30</td>
            <td>半導體產業+晶片概論</td>
            <td rowSpan={2}>參訪TSMC, TASA</td>
            <td rowSpan={2}>交流-與新思高管</td>
            <td>總經理演講</td>
          </tr>
          <tr>
            <td>14:30</td>
            <td>晶片設計理論</td>
            <td>閉幕式</td>
          </tr>
          <tr>
            <td>17:30</td>
            <td>晚餐</td>
            <td>晚餐</td>
            <td>晚餐</td>
            <td></td>
          </tr>
          <tr>
            <td>18:30</td>
            <td>寓教於樂的遊戲</td>
            <td>交流活動</td>
            <td>晶片設計專案討論or競賽準備</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Curriculum;
