import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [menuOn, setMenuOn] = useState('-100vh');
  const [closeIconOpacity, setCloseIconOpacity] = useState(0);
  const [headerOpacity, setHeaderOpacity] = useState(0);
  const [menuImgOpacity, setMenuImgOpacity] = useState(1);
  const [loginLeft, setLoginLeft] = useState(0);
  const [loginRight, setLoginRight] = useState(-50);

  setTimeout(() => {
    setHeaderOpacity(1);
  }, 5000);

  const menuOpen = ()=>{
    if(menuOn === 0){
      setMenuOn('-100vh')
      setCloseIconOpacity(0);
    }else{
      setMenuOn(0);
      setCloseIconOpacity(1);
    }
  }

  const loginOpen = ()=>{
    if(loginLeft===-0){
      setLoginLeft(1);
      setLoginRight(-25);
      setMenuImgOpacity(0);
    }else{
      setLoginLeft(0);
      setLoginRight(-50);
      setMenuImgOpacity(1);
    }
  }
  // const loginOpen = ()=>{
  //   if(loginLeft===-50){
  //     setLoginLeft(0);
  //     setLoginRight(-25);
  //   }else{
  //     setLoginLeft(-50);
  //     setLoginRight(-50);
  //   }
  // }
  
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
              <div id='menuImg' style={{opacity:menuImgOpacity}}>
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
                <li><span onClick={menuOpen}><Link to="/directions">Directions</Link></span></li>
                <li>
                  <span onClick={loginOpen}>Login</span>
                  <div id='loginPage'>
                    <div id='loginLeft' style={{opacity:loginLeft}}>
                      <img src="/images/loginLeft.jpg" alt='' />
                    </div>
                    <div id='loginRight' style={{right:`${loginRight}%`}}>
                      <ul>

                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header