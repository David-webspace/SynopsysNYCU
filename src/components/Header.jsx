import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaApple } from "react-icons/fa";
import FAQ from './FAQ';


const Header = () => {

  const ScreenWidth = window.innerWidth

  const [selectedValue, setSelectedValue] = useState('ch'); // Initialize with default value
  const getSelectedValue = () => {
    return selectedValue; // Return the selected value from state
  };

  return (
    <>
      <header className={`
        df jc-sb aln-itm-c fw pd-x-container
        ${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}  
      `}>

        {/* Logo Container */}
        <Link to='/'>
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
            <li className={`pd-w-10`} style={{position:'relative'}}>
              <Link to='/event2025' className='pd-10 df aln-itm-c'>
                2025 活動內容
              </Link>
            </li>
            <li className='pd-w-10'>
              <Link to='/event-review' className='pd-10'>過去活動回顧</Link>
            </li>
            <li className='pd-w-10'>
              <Link to='/online-resource' className='pd-10'>線上課程面費資源</Link>
            </li>
            <li className='pd-w-10'>
              <Link to='/origin' className='pd-10'>緣起、宗旨與主辦單位</Link>
            </li>
            <li className='pd-w-10'>
              <Link to='/faqs' className='pd-10'>常見問題</Link>
            </li>
            <li className='pd-w-10'>
              <Link to='/contacts' className='pd-10'>聯絡我們</Link>
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