import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { FaApple, FaMicrochip } from "react-icons/fa";
import { FaEarthAfrica, FaBasketball } from "react-icons/fa6";
import menuItems from '../datas/menuList.json'
import '../i18n'
import { useTranslation } from 'react-i18next'
// import ReloadMenu from '../hooks/ReloadMenu';


const Header = () => {

  const ScreenWidth = window.innerWidth
  const location = useLocation();
  
  const [menuItem, setMenuItem] = useState('')  //Initialize the value of menuItem
  const [lngSubClose, setLngSubClose] = useState(false)

  // ==================== Reload function ====================
  useEffect(() => {
    const pathname = location.pathname;
    handleReloadMenu(pathname);
  }, [location.pathname]);

  const handleReloadMenu = (pathname) => {
    switch(pathname){
      case '/event2025':
        setMenuItem('event2025');
        break;
      case '/event-review':
        setMenuItem('pastHeights')
        break;
      case '/online-resource':
        setMenuItem('onlineResources')
        break;
      case '/origin':
        setMenuItem('origin')
        break;
      case '/faqs':
        setMenuItem('faqs')
        break;
      case '/contacts':
        setMenuItem('contactUs')
        break;
    }
  }

  // ==================== Language Select ====================
  const { t, i18n } = useTranslation()
  const [langActive, setLangActive] = useState(false)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangActive(false)
    console.log('Language Changed')
  }

  const handleLanguageSelect = () => {
    setLangActive(!langActive)
    console.log('Language Clicked')
  }
  const handleCloseLng = () => {
    setLngSubClose(false)
  }
  const languageSelectorRef = useRef(null);  // Add this ref

  // Add this useEffect for click outside handling
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageSelectorRef.current && !languageSelectorRef.current.contains(event.target)) {
        setLangActive(false);
        console.log('Click Outside')
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const menuItemRender = menuItems.map((menu, index) => {
    return(
      <li key={index} onClick={()=>{setMenuItem(menu.id)}} className='pd-w-10'>
        <Link
          to={`/dev/${menu.url}`} 
          className={`pd-10 db ${menu.id==menuItem ? 'menuItemActive' : ''}`}
          style={{color:`${menu.id==menuItem ? 'var(--purple-1)' : ''}`}}
        >
          {t(menu.menu)}
        </Link>
      </li>
    )
  })

 

  return (
    <>
      <header className={`
        df jc-sb aln-itm-c fw pd-x-container
        ${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}  
      `}>

        <div className={`aln-itm-c fw ${location.pathname !== '/' ? 'df' : 'dn'}`}>

          {/* Logo Container */}
          <Link to='/dev' style={{marginRight:'0px'}}>
            <div className="Logo df aln-itm-c">
              {/* <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='mg-r-20' style={{height:'40%'}}/> */}
              <FaMicrochip
                size={40}
                color='var(--white)'
                className='mg-r-20'
              />
              <div style={{width:'200px', color:"#fff"}}>
                <h3 style={{fontSize:'14px'}}>新思科技 X 陽明交大</h3>
                <h3 style={{fontSize:'14px'}}>Synopsys X NYCU</h3>
              </div>
            </div>
          </Link>

          <ul className='fh df jc-sb aln-itm-c'>
            {menuItemRender}
          </ul>
        </div>
        

        {/* Language Select */}
        <ul
          ref={languageSelectorRef}
          style={{position:'relative'}}
          className='df fd-c pd-w-10 fh jc-c aln-itm-c'
        >
          <div onClick={handleLanguageSelect} >
            {/* <FaEarthAfrica size={20}/> */}
            <FaBasketball size={20}/>
          </div>
          <ul
            className='df fd-c'
            style={{
              position:"absolute",
              top:"100%",
              left:"50%",
              display:`${langActive ? '' : 'none'}`
            }}
            onClick={()=>handleCloseLng(false)}
          >
            <li
              className='lngSub pointer'
              onClick={() => {changeLanguage('ch')}}
            >
              {t('中文')}
            </li>
            <li
              className='lngSub pointer'
              onClick={() => {changeLanguage('en')}}
            >
              {t('英文')}
            </li>
          </ul>
        </ul>
      </header>
    </>
  )
}

export default Header