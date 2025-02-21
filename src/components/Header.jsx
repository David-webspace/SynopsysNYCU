import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaApple } from "react-icons/fa";
import menuItems from '../datas/menuList.json'
import '../i18n'
import { useTranslation } from 'react-i18next'


const Header = () => {

  const ScreenWidth = window.innerWidth

  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const [selectedValue, setSelectedValue] = useState('ch'); // Initialize with default value
  const [menuItem, setMenuItem] = useState('')  //Initialize the value of menuItem

  const getSelectedValue = () => {
    return selectedValue; // Return the selected value from state
  };

  const menuItemRender = menuItems.map((menu, index) => {
    return(
      <li key={index} onClick={()=>{setMenuItem(menu.id)}} className='pd-w-10'>
        <Link to={`/SynopsysNYCU/${menu.url}`} className={`pd-10 db ${menu.id==menuItem ? 'menuItemActive' : ''}`}>
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

        {/* Logo Container */}
        <Link to='/SynopsysNYCU/'>
          <div className="Logo df aln-itm-c">
            {/* <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='mg-r-20' style={{height:'40%'}}/> */}
            <FaApple 
              size={40}
              color='var(--black-0)'
              className='mg-r-20'
            />
            <div style={{width:'300px'}}>
              <h3 style={{fontSize:'18px'}}>新思科技 X 陽明交大</h3>
              <h3 style={{fontSize:'16px'}}>Synopsys X NYCU</h3>
            </div>
          </div>
        </Link>

        <nav className='fh'>
          <ul className='fh df jc-sb aln-itm-c'>
            {menuItemRender}
            <li className='pd-w-10'>
              <select
                style={{padding:'2px 4px'}}
                onChange={(e) => {changeLanguage(e.target.value); setSelectedValue(e.target.value); getSelectedValue()}}
              >
                <option value="ch">Chinese</option>
                <option value="en">English</option>
              </select>
              {/* <Link to='' className='pd-10' onClick={() => handleMenubarClose('Contacts')}>En</Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header