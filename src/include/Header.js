import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [menuOn, setMenuOn] = useState('-100vh');
  const [closeIconOpacity, setCloseIconOpacity] = useState(0);
  const [headerOpacity, setHeaderOpacity] = useState(0);

  setTimeout(() => {
    setHeaderOpacity(1);
  }, 5000);

  const menuOpen = ()=>{
    if(menuOn == 0){
      setMenuOn('-100vh')
      setCloseIconOpacity(0);
    }else{
      setMenuOn(0);
      setCloseIconOpacity(1);
    }

  }
  
  return (
    <div id='header' style={{opacity:headerOpacity}}>
        <h1><a href="/">BARON</a></h1>
        <div id='menu'>
          <div id='burgerTab'  onClick={menuOpen}>
            <div id='whiteLine'>
              <div></div>
              <div></div>
            </div>
            <div id='wineLine'>
              <div></div>
              <div></div>
            </div>
            <p>MENU</p>
          </div>
          <div id='menuScreen' style={{top:menuOn}}>
            <div id='menuWrap'>
              <div>
                <img src='/images/menuScreen1.jpg' alt='' />
              </div>
              <ul>
                <li id='closeIcon' onClick={menuOpen}>
                  <div id='closeIconWrap' style={{opacity:closeIconOpacity}}>
                    <div></div>
                    <div></div>
                  </div>
                </li>
                <li><span><a href="/">Home</a></span></li>
                <li><span onClick={menuOpen}><Link to="/aboutus">AboutUs</Link></span></li>
                <li><span onClick={menuOpen}>Promotion</span></li>
                <li><span onClick={menuOpen}>Review</span></li>
                <li><span onClick={menuOpen}>Directions</span></li>
                <li><span onClick={menuOpen}>Login</span></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header