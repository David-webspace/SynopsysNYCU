import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocationSharp, IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import '../css/footer_contact.css'

const locationLink = 'https://maps.app.goo.gl/YuKrLBgWdcw2Y8L69'
const instagramLink = 'https://www.instagram.com/sawago88/'
const facebookLink = 'https://www.facebook.com/NYCU.SYNOPSYS.SEMICONDUCTOR.ICDESIGN/'
const youtubeLink = 'https://www.youtube.com/@nycu_synopsys_semi'

const FooterContact = () => {
  const ScreenWidth = window.innerWidth
  const { t, i18n } = useTranslation();

  return (
    <div className='footerContact pd-x-align'>
        <div className='mg-b-20'>
            <h2 className='mg-b-10'>{t('主辦單位：')}</h2>
            <h4>{t('台灣新思科技股份有限公司')}</h4>
            <h4>{t('台灣交通大學校友總會')}</h4>
            <h4>{t('半導體與晶片設計科普夏令營籌備團隊')}</h4>
        </div>
        <div>
          <ul className='df'>
            <Link to={locationLink} className='mediaLink' target='_blank'><li><IoLocationSharp size={20}/></li></Link>
            {/* <Link to={instagramLink} className='mediaLink' target='_blank'><li><IoLogoInstagram size={20}/></li></Link> */}
            <Link to={facebookLink} className='mediaLink' target='_blank'><li><IoLogoFacebook size={20}/></li></Link>
            <Link to={youtubeLink} className='mediaLink' target='_blank'><li><IoLogoYoutube size={20}/></li></Link>
          </ul>
        </div>
    </div>
  )
}

export default FooterContact