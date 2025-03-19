import React from 'react'
import { Link } from 'react-router-dom'
import '../i18n'
import { useTranslation } from 'react-i18next'
import { FaFacebook } from "react-icons/fa";

const Contacts = () => {

  const { t, i18n } = useTranslation()

  const ScreenWidth = window.innerWidth


  return (
    <div>
      <h1 className='fw-b' style={{marginBottom:'20px'}}>{t('聯繫我們')}</h1>
      <h1 className='fw-b' style={{marginBottom:'80px'}}>{t('歡迎合作邀約')}</h1>
      <div style={{marginBottom:'80px'}}>
        <h3 className='mg-b-20'>{t('聯絡人：謝沅佑先生 高湘琪小姐')}</h3>
        <h3 className='mg-b-20'>{t('主辦單位：台灣新思科技股份有限公司、台灣交通大學校友總會、半導體與晶片設計科普夏令營籌備團隊')}</h3>
        <h3 className='mg-b-20'>{t('聯絡電話：０９１１８６８６４９')}</h3>
        <h3 className='mg-b-20'>{t('營隊地址：新竹市東區大學路1001號 國立陽明交通大學')}</h3>
        <h3 className='mg-b-20'>{t('EMAIL：nycuxsynopsys.semi@gmail.com')}</h3>
      </div>

      <>
        <div className={`${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}`}>
          <ul className='df'>
            <a href='https://maps.app.goo.gl/A4tttWxRBfXKYTRf8' className='outerLink mg-r-30' target='_blank'><li>{t('地址')}</li></a>
            <a href='https://www.youtube.com/@nycu_synopsys_semi' className='outerLink mg-r-30' target='_blank'><li>{t('Youtube')}</li></a>
            <a href='https://www.facebook.com/NYCU.SYNOPSYS.SEMICONDUCTOR.ICDESIGN/' className='outerLink mg-r-30' target='_blank'><li>{t('FB')}</li></a>
            <a href='https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg' className='outerLink mg-r-30' target='_blank'><li>{t('紀錄片')}</li></a>
          </ul>
        </div>

        <div className={`${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'}`}>
          <ul className='df txt-aln-c'>
            <a href='https://maps.app.goo.gl/A4tttWxRBfXKYTRf8' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>地址</li></a>
            <a href='https://www.instagram.com/sawago88/' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>IG</li></a>
            <a href='https://www.facebook.com/chc888' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>FB</li></a>
            <a href='https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>紀錄片</li></a>
          </ul>
        </div>

        <div className={`${(425<=ScreenWidth && ScreenWidth < 768) ? '' : 'dn'}`}>
          <ul className='txt-aln-c'>
            <a href='https://maps.app.goo.gl/A4tttWxRBfXKYTRf8' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>地址</li></a>
            <a href='https://www.instagram.com/sawago88/' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>IG</li></a>
            <a href='https://www.facebook.com/chc888' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>FB</li></a>
            <a href='https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>紀錄片</li></a>
          </ul>
        </div>

        <div className={`${(375<=ScreenWidth && ScreenWidth < 425) ? '' : 'dn'}`}>
          <ul className='txt-aln-c'>
            <a href='https://maps.app.goo.gl/A4tttWxRBfXKYTRf8' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>地址</li></a>
            <a href='https://www.instagram.com/sawago88/' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>IG</li></a>
            <a href='https://www.facebook.com/chc888' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>FB</li></a>
            <a href='https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>紀錄片</li></a>
          </ul>
        </div>
      </>

    </div>
  )
}

export default Contacts