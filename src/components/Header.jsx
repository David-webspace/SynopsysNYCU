import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaAngleRight, FaBars } from "react-icons/fa";


const Header = () => {

  const ScreenWidth = window.innerWidth

  const [selectedValue, setSelectedValue] = useState('ch'); // Initialize with default value
  const getSelectedValue = () => {
    return selectedValue; // Return the selected value from state
  };

  const [menuHover, setMenuHover] = useState(false);
  const [subMenuHover, setSubMenuHover] = useState(false);
  const [subMenuCubeHover, setSubMenuCubeHover] = useState(false);
  const [subOpen, setSubOpen] = useState(false)
  const [menuBarStatus, setMenuBarStatus] = useState(false)
  const [menuItem, setMenuItem] = useState('Artworks')

  const menubarToggle = () => {
    setMenuBarStatus(!menuBarStatus)
  }

  const handleMenubarClose = (menu) => {
    setMenuBarStatus(false)
    setSubOpen(false)
    setMenuItem(menu)
  }

  const handleSubOpen = () => {
    setSubOpen(!subOpen)
  }

  return (
    <>
      <header className={`
        df jc-sb aln-itm-c fw pd-x-container
        ${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}  
      `}>
        {/* Logo Container */}
        <Link to='/'>
          <div className="Logo df aln-itm-c">
            <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='mg-r-20' style={{height:'40%'}}/>
            <div style={{width:'300px'}}>
              <h3 style={{fontSize:'18px'}}>新思科技 X 陽明交大</h3>
              <h3 style={{fontSize:'18px'}}>Synopsys X NYCU</h3>
            </div>
          </div>
        </Link>

        <nav className='fh'>
          <ul className='fh df jc-sb aln-itm-c'>

            <li
              className={`pd-w-10`}
              style={{position:'relative'}}
              onMouseEnter={() => setMenuHover(true)}
              onMouseLeave={() => setMenuHover(false)}
              >
              <Link to='/portfolio' className='pd-10 df aln-itm-c'>
                2025 活動內容
              </Link>
            </li>
            <li className='pd-w-10'>
              {/* <Link to='/experiences' className='pd-10' onClick={() => handleMenubarClose('Experiences')}>資歷</Link> */}
              <Link to='/experiences' className='pd-10' onClick={() => handleMenubarClose('Experiences')}>過去活動回顧</Link>
            </li>
            {/* <li className='pd-w-10'>
              <Link to='/transaction/input' className='pd-10' onClick={() => handleMenubarClose('Critics')}>ECpay</Link>
            </li> */}
            <li className='pd-w-10'>
              <Link to='/critics' className='pd-10' onClick={() => handleMenubarClose('Critics')}>線上課程面費資源</Link>
            </li>
            {/* <li className='pd-w-10'>
              <Link to='/collections' className='pd-10' onClick={() => handleMenubarClose('Collections')}>收藏</Link>
            </li> */}
            <li className='pd-w-10'>
              <Link to='/contacts' className='pd-10' onClick={() => handleMenubarClose('Contacts')}>緣起、宗旨與主辦單位</Link>
            </li>
            <li className='pd-w-10'>
              <Link to='/contacts' className='pd-10' onClick={() => handleMenubarClose('Contacts')}>緣起、宗旨與主辦單位</Link>
            </li><li className='pd-w-10'>
              <Link to='/contacts' className='pd-10' onClick={() => handleMenubarClose('Contacts')}>常見問題</Link>
            </li><li className='pd-w-10'>
              <Link to='/contacts' className='pd-10' onClick={() => handleMenubarClose('Contacts')}>聯絡我們</Link>
            </li>
            <li className='pd-w-10'>
              {/* <select
                style={{padding:'2px 4px'}}
                onChange={(e) => {changeLanguage(e.target.value); setSelectedValue(e.target.value); getSelectedValue()}}
              >
                <option value="ch">Chinese</option>
                <option value="en">English</option>
              </select> */}
              {/* <Link to='' className='pd-10' onClick={() => handleMenubarClose('Contacts')}>En</Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header