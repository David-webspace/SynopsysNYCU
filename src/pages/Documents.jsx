import React from 'react';
import eventInfos from '../datas/event_info.json';
import rules from '../datas/event_rules.json';

const Guidelinessss = () => {
  // ContentRender: 根據 id 渲染對應的規則
  const ContentRender = ({ id }) => {
    const filteredRules = rules.filter((rule) => rule.id === id);

    return (
      <div className="mg-b-30">
        {filteredRules.map((rule, index) => (
          <div key={index}>
            <h1 className="mg-b-5">{rule.topic}</h1>
            {rule.rule.map((txt, txtIndex) => (
              <div key={txtIndex}>
                {/* 如果 content 是陣列，則進一步渲染 */}
                {Array.isArray(txt.content) ? (
                  txt.content.map((subTxt, subIndex) => (
                    <p
                      key={subIndex}
                      style={{
                        fontWeight: subTxt.bold ? 'bold' : 'normal',
                        lineHeight: '1.6',
                        padding:"5px 10px",
                        // marginBottom: subTxt.bold ? '10px' : '',
                        marginTop: subTxt.id === 1 ? '30px' : '',
                        display: subTxt.bold ? "inline-block" : '',
                        borderBottom: subTxt.bold ? '1px solid var(--grey-3)' : '',
                      }}
                    >
                      {subTxt.subcontent}
                    </p>
                  ))
                ) : (
                  <h4 style={{ lineHeight: '1.6' }}>{txt.content}</h4>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mg-b-50 Container df" id="eventInfo">
      {/* 左側活動資訊 */}
      <div className="df fd-c" style={{ width: '30%' }}>
        <div className='mg-b-50'>
          <h3 className="mg-b-5">即日起至 5/30（六）23:59</h3>
          <h1>開始報名</h1>
        </div>
        <div className='mg-b-50'>
          <h3 className="mg-b-5">即日起至 6/15（六）23:59</h3>
          <h1>繳費截止</h1>
        </div>
        <div className='mg-b-50'>
          <h3 className="mg-b-5">即日起至 6/15（六）23:59</h3>
          <h1>錄取結果通知</h1>
        </div>
      </div>

      {/* 右側規則內容 */}
      <div style={{ width: '65%' }}>
        <ContentRender id="fee" />
        <ContentRender id="registration" />
        <ContentRender id="itinerary" />
        <ContentRender id="qualification" />
        <ContentRender id="refund" />
      </div>
    </div>
  );
};

export default Guidelinessss;
