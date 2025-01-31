import React from 'react'
import { Link } from 'react-router-dom';

const Event_Content = () => {

  const ScreenHeight = window.innerHeight

  return (
    <div
      className='df jc-sb aln-itm-c OuterLink'
      style={{
          // height:`${ScreenHeight-138}px`,
          height:ScreenHeight,
          paddingTop:"80px"
    }}>
      <Link to='/SynopsysNYCU/event2025' style={{width:'33.33%', position:"relative"}}>
        <h2>2025 活動內容</h2>
        <div style={{position:"relative"}}>
          <div className="mask"></div>
          <img src="https://picsum.photos/id/564/500/800" alt="" style={{width:"100%"}}/>
        </div>
      </Link>
      <Link to='/SynopsysNYCU/event-review' style={{width:'33.33%', position:"relative"}}>
        <h2>過去活動回顧</h2>
        <div style={{position:"relative"}}>
          <div className="mask"></div>
          <img src="https://picsum.photos/id/2/500/800" alt=""  style={{width:"100%"}}/>
        </div>
      </Link>
      <Link to='/SynopsysNYCU/online-resource' style={{width:'33.33%', position:"relative"}}>
        <h2>線上活動免費資源</h2>
        <div style={{position:"relative"}}>
          <div className="mask"></div>
          <img src="https://picsum.photos/id/905/500/800" alt=""  style={{width:"100%"}}/>
        </div>
      </Link>
    </div>
  )
}

export default Event_Content