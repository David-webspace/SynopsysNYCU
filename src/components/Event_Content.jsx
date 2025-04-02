import React from 'react'
import { Link } from 'react-router-dom';
import '../css/home_event.css'

const Event_Content = () => {

  const ScreenHeight = window.innerHeight

  return (
    <div
      className='df jc-sb aln-itm-c OuterLink'
      style={{
          // height:`${ScreenHeight-138}px`,
          height:ScreenHeight,
          width:"100%",
          // paddingTop:"80px"
    }}>
      <Link to='/dev/event2025' style={{width:'31%', position:"relative"}}>
        <h2>2025 活動內容</h2>
        <div style={{position:"relative"}}>
          <div className="mask"></div>
          <img src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" style={{width:"100%"}}/>
        </div>
      </Link>
      <Link to='/dev/event-review' style={{width:'31%', position:"relative"}}>
        <h2>過去活動回顧</h2>
        <div style={{position:"relative"}}>
          <div className="mask"></div>
          <img src="https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  style={{width:"100%"}}/>
        </div>
      </Link>
      <Link to='/dev/online-resource' style={{width:'31%', position:"relative"}}>
        <h2>線上活動免費資源</h2>
        <div style={{position:"relative"}}>
          <div className="mask"></div>
          <img src="https://images.pexels.com/photos/226737/pexels-photo-226737.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  style={{width:"100%"}}/>
        </div>
      </Link>
    </div>
  )
}

export default Event_Content