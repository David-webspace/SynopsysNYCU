import { useState, useEffect} from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { FaMicrochip } from "react-icons/fa";
import { FaEarthAfrica, FaBasketball } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa"; // 漢堡按鈕和關閉按鈕
import menuItems from '../datas/menuList.json';
import '../i18n';
import { useTranslation } from 'react-i18next';
import '../css/header.css';
import LngSelector from './LngSelector';

const Header = () => {
  const ScreenWidth = window.innerWidth;
  const location = useLocation();

  const [menuItem, setMenuItem] = useState(''); // Initialize the value of menuItem
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制漢堡菜單顯示狀態

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
      case '/dev/documents':
        setMenuItem('documents');
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

  // ==================== Language Select ====================
  const { t, i18n } = useTranslation();
  const [langActive, setLangActive] = useState(false);


  const menuItemRender = menuItems.map((menu, index) => {
    return (
      <li key={index} onClick={() => { setMenuItem(menu.id); }} className='pd-w-10'>
        <Link
          to={`/dev/${menu.url}`}
          className={`pd-10 db ${menu.id === menuItem ? 'menuItemActive' : ''}`}
          style={{ color: `${menu.id === menuItem ? 'var(--green-1)' : ''}` }}
        >
          {t(menu.menu)}
        </Link>
      </li>
    );
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* 漢堡按鈕 */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
      </div>

      <Link to='/dev' className='defaultLogo'>
        <div className="Logo">
          <FaMicrochip
            size={80}
            color='var(--white)'
            className='mg-r-20'
          />
          <div style={{ width: '200px', color: "#fff" }}>
            <h3 style={{ fontSize: '14px' }}>新思科技 X 陽明交大</h3>
            <h3 style={{ fontSize: '14px' }}>Synopsys X NYCU</h3>
          </div>
        </div>
      </Link>

      {/* Header */}
      <header
        className={`${isMenuOpen ? 'header-open' : 'header-closed'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className={`menuContainer ${location.pathname !== '/' ? 'df' : 'dn'}`}>
          {/* Logo Container */}
          <Link to='/dev' className='Logo' style={{ marginRight: '0px' }}>
            <FaMicrochip
              size={40}
              color='var(--white)'
              className='mg-r-20'
            />
            <div style={{ width: '200px', color: "#fff" }}>
              <h3 style={{ fontSize: '14px' }}>新思科技 X 陽明交大</h3>
              <h3 style={{ fontSize: '14px' }}>Synopsys X NYCU</h3>
            </div>
          </Link>

          <ul className='menuItemContainer'>
            {menuItemRender}
          </ul>
        </div>

        {/* Language Select */}
        <LngSelector />

        <Link to='https://docs.google.com/forms/d/e/1FAIpQLScG196gYjMEf62hNkytam3tLChveSGopPgyPkzIBOrgc1WYPA/viewform?pli=1' target='_blank'>
          <button className='registerBtn'>立即報名</button>
        </Link>
      </header>
    </>
  );
};

export default Header;
