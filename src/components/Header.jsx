import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { FaMicrochip } from "react-icons/fa";
import { FaEarthAfrica, FaBasketball } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa"; // 漢堡按鈕和關閉按鈕
import menuItems from '../datas/menuList.json';
import { useTranslation } from 'react-i18next';
import '../css/header.css';
import '../css/registerBtn.css'
import LngSelector from './LngSelector';

const Header = () => {
  const ScreenWidth = window.innerWidth;
  const location = useLocation();

  const [menuItem, setMenuItem] = useState(''); // Initialize the value of menuItem
  const [isHeaderOpen, setIsHeaderOpen] = useState(false); // 控制漢堡菜單顯示狀態
  const [openSubMenu, setOpenSubMenu] = useState(null); // Track open submenu
  const menuRef = useRef(null); // 用於檢測點擊外部

  // ==================== Reload function ====================
  useEffect(() => {
    const pathname = location.pathname;
    handleReloadMenu(pathname);
  }, [location.pathname]);

  const handleReloadMenu = (pathname) => {
    switch (pathname) {
      case '/dev/event2025':
        setMenuItem('event2025');
        break;
      case '/dev/guidelines':
        setMenuItem('guidelines');
        break;
      case '/dev/event-review':
        setMenuItem('pastHeights');
        break;
      case '/dev/online-resource':
        setMenuItem('onlineResources');
        break;
      case '/dev/origin':
        setMenuItem('origin');
        break;
      case '/dev/faqs':
        setMenuItem('faqs');
        break;
      case '/dev/contacts':
        setMenuItem('contactUs');
        break;
    }
  };

  // 點擊外部時關閉子選單
  useEffect(() => {
    const handleClickOutside = (event) => {
      if(
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          !event.target.closest('.subMenuLink')
      ){
          setMenuItem(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // ==================== Language Select ====================
  const { t, i18n } = useTranslation();
  const [langActive, setLangActive] = useState(false);
  
  // ==================== menuItemRender ====================
  const menuItemRender = menuItems.map((menu, index) => {
    const isCurrentMenuOpen = openSubMenu === menu.id;

    const handleMenuClick = () => {
      setMenuItem(menu.id);
      setOpenSubMenu(menu.id === openSubMenu ? null : menu.id);

      if (menu.sub.length > 0 && ScreenWidth <= 1024) {
        // setOpenSubMenu(menu.id === openSubMenu ? null : menu.id);
        console.log(isHeaderOpen)
      }else{
        setIsHeaderOpen(false)
      }
    };

    return (
      <li key={index} onClick={handleMenuClick} className='pd-w-10' >
        <Link
          to={`/dev/${menu.url}`}
          className={`pd-10 db ${menu.id === menuItem ? 'menuItemActive' : ''}`}
          style={{ color: `${menu.id === menuItem ? 'var(--green-1)' : ''}` }}
        >
          {t(menu.menu)}
        </Link>

        {/* Check if there are submenus and render them */}
        {menu.sub.length > 0 && (
          <ul className={`submenuContainer ${isCurrentMenuOpen ? 'df' : 'dn'}`}>
            {menu.sub.map((subMenu, subIndex) => (
              <li key={subIndex} className='submenuItem'>
                <Link
                  to={`/dev/${subMenu.url}`}
                  className={`submenuLink ${subMenu.id === menuItem ? 'menuItemActive' : ''}`}
                  style={{ color: `${subMenu.id === menuItem ? 'var(--green-1)' : ''}` }}
                  onClick={() => { setOpenSubMenu(null); setIsHeaderOpen(false) }}
                  // onClick={() => setIsHeaderOpen(false)}
                >
                  {t(subMenu.menu)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  });

  const toggleHeader = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  return (
    <div className='headerContainer'>
      {/* 漢堡按鈕 */}
      <div className="hamburger" onClick={toggleHeader}>
        {isHeaderOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
      </div>

      <Link to='/dev' className='defaultLogo'>
        <div className="Logo">
          <img src="/logo_white.svg" alt="" className='mg-r-20'/>
          <div style={{ width: '200px', color: "#fff" }}>
            <h3 style={{ fontSize: '14px' }}>新思科技 X 陽明交大</h3>
            <h3 style={{ fontSize: '14px' }}>Synopsys X NYCU</h3>
          </div>
        </div>
      </Link>

      {/* Header */}
      <header
        className={`${isHeaderOpen ? 'header-open' : 'header-closed'}`}
        // onClick={() => setIsHeaderOpen(false)}
      >
        <div className={`menuContainer ${location.pathname !== '/' ? 'df' : 'dn'}`}>
          {/* Logo Container */}
          <Link to='/dev' className='Logo' style={{ marginRight: '0px' }}>
            <img src="/logo_white.svg" alt="" className='mg-r-20'/>
            <div style={{ width: '200px', color: "#fff" }}>
              <h3 style={{ fontSize: '14px' }}>新思科技 X 陽明交大</h3>
              <h3 style={{ fontSize: '14px' }}>Synopsys X NYCU</h3>
            </div>
          </Link>

          <ul className='menuItemContainer' ref={menuRef}>
            {menuItemRender}
          </ul>
        </div>

        {/* Language Select */}
        <LngSelector />

        {/* <Link to='https://docs.google.com/forms/d/e/1FAIpQLScG196gYjMEf62hNkytam3tLChveSGopPgyPkzIBOrgc1WYPA/viewform?pli=1' target='_blank'>
          <button className='registerBtn'>{t('立即報名')}</button>
        </Link> */}

        <div className="scene">
          {/* <div className="animal">jjjjjjjjjjj</div> */}
          <Link to='https://docs.google.com/forms/d/e/1FAIpQLScG196gYjMEf62hNkytam3tLChveSGopPgyPkzIBOrgc1WYPA/viewform?pli=1' target='_blank'>
            <button className='registerBtn ripple-button'>
              {t('立即報名').split('').map((char, index) => (
                <span key={index} className='bouncy-letter'>{char}</span>
              ))}
            </button>
            <div class="firework-container"></div>
          </Link>
        </div>

      </header>
    </div>
  );
};

export default Header;
