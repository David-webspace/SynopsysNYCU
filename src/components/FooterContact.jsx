import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa'
import '../css/footer_contact.css'

const FooterContact = () => {
  return (
    <div className='footerContact pd-x-align'>
        <div className='mg-b-20'>
            <h2 className='mg-b-10'>主辦單位:</h2>
            <h4>台灣新思科技股份有限公司</h4>
            <h4>台灣交通大學校友總會</h4>
            <h4>半導體與晶片設計科普夏令營籌備團隊</h4>
        </div>
        <div>
          <ul className='df'>
            <a href='https://www.facebook.com/NYCU.SYNOPSYS.SEMICONDUCTOR.ICDESIGN/' target='_blank' className='mg-r-20'><FaFacebook size={20}/></a>
            <a href='https://www.youtube.com/@nycu_synopsys_semi' target='_blank' className='mg-r-20'><FaYoutube size={20}/></a>
            <a href='https://maps.app.goo.gl/YuKrLBgWdcw2Y8L69' target='_blank' className='mg-r-20'><FaMapMarkerAlt size={20}/></a>
            <a href='' target='_blank' className='mg-r-20'></a>
          </ul>
        </div>
    </div>
  )
}

export default FooterContact