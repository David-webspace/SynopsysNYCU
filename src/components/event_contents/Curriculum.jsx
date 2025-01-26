import React from "react";

const Curriculum = () => {
  return (
    <div className="mg-b-50">
      <h2>課表</h2>
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
            <th>D1</th>
            <th colSpan={2}>D2</th>
            <th>D3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>開幕式</td>
            <td rowSpan={3}>自走車設計實作</td>
            <td>類比電路應用實作</td>
            <td rowSpan={2}>半導體製程概論</td>
          </tr>
          <tr>
            <td>進階邏輯設計</td>
            <td rowSpan={2}>電路板設計實作</td>
          </tr>
          <tr>
            <td>交流與對談</td>
            <td>自走車最佳化</td>
          </tr>
          <tr>
            <td rowSpan={3}>電子電路與 IC 設計概論</td>
            <td rowSpan={1}>類比電路應用實作</td>
            <td rowSpan={3}>自走車設計實作</td>
            <td rowSpan={2}>自走車競賽</td>
          </tr>
          <tr>
            <td rowSpan={2}>電路板設計實作</td>
          </tr>
          <tr>
            <td>新思總經理演講</td>
          </tr>
          <tr>
            <td>產業圓桌分享講座</td>
            <td colSpan={2}>在學生分享講座</td>
            <td>結業與頒獎儀式</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan={2}>自走車最佳化</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Curriculum;
