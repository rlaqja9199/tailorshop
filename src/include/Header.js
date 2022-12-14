import React, {  useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import axios from 'axios';
import { setCookie } from '../util/Cookie';
import { Cookies, useCookies } from 'react-cookie';
import { API_URL } from '../component/config/contansts';
// import { useDispatch } from 'react-redux'
// import {setLogin,goToHome} from '../module/logincookie';

const Header = () => {
  const [logoZ, setLogoZ] = useState(100);
  const [menuOn, setMenuOn] = useState('-100vh');
  const [closeIconOpacity, setCloseIconOpacity] = useState(0);
  const [headerOpacity, setHeaderOpacity] = useState(0);
  const [menuImgOpacity, setMenuImgOpacity] = useState(1);
  const [loginLeft, setLoginLeft] = useState(0);
  const [loginLeftImg, setLoginLeftImg] = useState(-200);
  const [loginRight, setLoginRight] = useState(-100);
  const [loginTextOn, setLoginTextOn] = useState(0);
  const [passwordTextOn, setPasswordTextOn] = useState(0);
  const [loginBoxOpacity, setLoginBoxOpacity] = useState(0);
  const [userNameLineColor, setUserNameLineColor] = useState('#CFD2CF');
  const [passwordLineColor, setPasswordLineColor] = useState('#CFD2CF');
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const [cookies, setCookie, removeCookie] = useCookies(['username']);
  const [userId, setUserId] = useState(null);
  
  setTimeout(() => {
    setHeaderOpacity(1);
  }, 5000);

  const menuOpen = (event)=>{
    event.preventDefault();
    if(menuOn === 0){
      setMenuOn('-100vh')
      setCloseIconOpacity(0);
      setLoginLeft(0);
      setLoginRight(-100);
      setMenuImgOpacity(1);
      setLoginBoxOpacity(0);
      setLoginLeftImg(-200)
      setTimeout(() => {
        setLogoZ(100);
      }, 800);
    }else{
      setLoginLeftImg(0);
      setMenuOn(0);
      setCloseIconOpacity(1);
      setLogoZ(0);
    }
  }
  
  
  //로그인
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setInnerWidth(window.innerWidth);
    })
    console.log(innerWidth)
  },[])
  const loginOpen = ()=>{
    if(loginLeft===0){
      setLoginLeft(1);
      if(innerWidth>768){
        setLoginRight(-25);
      }else{
        setLoginRight(-0);
      }
      setMenuImgOpacity(0);
      setLoginBoxOpacity(1);
    }else{
      setLoginLeft(0);
      setLoginRight(-100);
      setMenuImgOpacity(1);
    }
  }
  
  const loginInputChange = (e)=>{
    if(e.target.placeholder==='USERNAME' && e.target.value !=='' ){
      setLoginTextOn(1);
    }else {
      setLoginTextOn(0);
    }
  }
  const passwordInputChange = (e)=>{
    if(e.target.placeholder==='PASSWORD' && e.target.value !==''){
      setPasswordTextOn(1);
    }else {
      setPasswordTextOn(0);
    }
  }
  const inputFocus = (e)=>{
    if(e.target.placeholder==='PASSWORD'){
      setPasswordLineColor('#607EAA');
      setUserNameLineColor('#CFD2CF');
    }else if(e.target.placeholder==='USERNAME') {
      setPasswordLineColor('#CFD2CF');
      setUserNameLineColor('#607EAA');
    }else{
      setPasswordLineColor('#607EAA');
      setUserNameLineColor('#607EAA');
    }
  }
  
  
  //로그인
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })
  const navigate = useNavigate();

  const onChangeId = (e)=>{
    setLoginData({
      ...loginData,
      username: e.target.value
    })
    console.log(loginData.username);
    if(e.target.placeholder==='USERNAME' && e.target.value !=='' ){
      setLoginTextOn(1);
    }else {
      setLoginTextOn(0);
    }
  }
  const onChangePw = (e)=>{
    setLoginData({
      ...loginData,
      password: e.target.value
    })
    console.log(loginData.password)
    if(e.target.placeholder==='PASSWORD' && e.target.value !==''){
      setPasswordTextOn(1);
    }else {
      setPasswordTextOn(0);
    }
  }
  const onSubmit = (e)=>{
    console.log(loginData.username);
    console.log(loginData.password);
    
    e.preventDefault();
    if(loginData.username === '' || loginData.password === ''){
      alert('아이디 혹은 비밀번호를 입력해주세요.');
    }else {
      // axios.post(`http://localhost:8080/login`,loginData)
      axios.post(`${API_URL}/login`,loginData)
      .then(result=>{
          // let useremail = result.data.usermail;
          let username = result.data.username;
          let password = result.data.password;
          console.log(result);
          
          
          if(username !== null && username !== '' && username !== undefined){
              alert('로그인되었습니다.')
              const expires = new Date();
              expires.setMinutes(expires.getMinutes()+60);
              setCookie('username', `${username}`, {path: '/', expires});
              // setCookie('password', `${password}`, {path: '/', expires})
              setLoginLeft(1);
              loginOpen();
              setLoginData({
                username:'',
                password:'',
              });
          }else {
              alert('아이디 혹은 비밀번호를 확인해주세요');
          }
      })
      .catch(e=>{
          alert('아이디 혹은 비밀번호를 확인해주세요');
      })
    }
  }

  useEffect(()=>{
    if(cookies.username !== undefined){
      setUserId(cookies.username);
    }
  },[cookies])
  const logoutOnChange = (e)=>{
    removeCookie('username');
    if(cookies.username === undefined){
      setUserId(null);
      alert('로그아웃 되었습니다.');
      navigate(`/`);
      setMenuOn('-100vh');
      menuOpen();
    }
  }


  return (
    <div id='header' style={{opacity:headerOpacity}}>
        <h1 style={{zIndex:logoZ}}><a href='/'>BARON</a></h1>
        <div id='menu'>
          <div id='burgerTab' onClick={menuOpen}>
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
                <li id='userWelcom' style={{display:userId!==null? "inline-block":"none", position:"absolute", top:innerWidth>768?"80px":"40px"}}><span style={{fontSize:"50px", lineHeight:"50px", cursor:"default"}}>{userId}</span>님 환영합니다.</li>
                <li><span><a href="/">Home</a></span></li>
                <li><span onClick={menuOpen}><Link to="/aboutus">AboutUs</Link></span></li>
                <li><span onClick={menuOpen}><Link to="/promotion">Promotion</Link></span></li>
                <li><span onClick={menuOpen}><Link to="review">Review</Link></span></li>
                <li><span onClick={menuOpen}><Link to="/directions">Directions</Link></span></li>
                <li>
                  <span onClick={loginOpen} style={{display:userId? "none" : "inline-block"}}>Login</span>
                  <span id='logoutBtn' onClick={logoutOnChange} style={{display:userId===null? "none" : "inline-block"}}>Logout</span>
                  <div id='loginPage'>
                    <div id='loginLeft' style={{opacity:loginLeft, transform:`translateX(${loginLeftImg}%)` }}>
                      <img src="/images/loginLeft.jpg" alt='' style={{transform:`translateX(${loginLeftImg}%)`}} />
                    </div>
                    <div id='loginRight' style={{right:`${loginRight}%`}}>
                      <ul id='loginBox' style={{opacity:loginBoxOpacity}}>
                        <form onSubmit={onSubmit}>
                          <li>
                            <h3>LOGIN</h3>
                          </li>
                          <li>
                            <p style={{opacity:loginTextOn}}>USERNAME</p>
                            <input type="text" name='username' value={loginData.username} onChange={onChangeId} onFocus={inputFocus} placeholder='USERNAME' />
                            <div className='inputLine' style={{backgroundColor:userNameLineColor}}></div>
                          </li>
                          <li>
                            <p style={{opacity:passwordTextOn}}>PASSWORD</p>
                            <input type="password" name='password' value={loginData.password} onChange={onChangePw} onFocus={inputFocus} placeholder='PASSWORD' />
                            <div className='inputLine' style={{backgroundColor:passwordLineColor}}></div>
                          </li>
                          <li>
                            <button type='submit' id='loginBtn'>LOGIN</button>
                          </li>
                          <li id='signBox'>
                            <button onClick={menuOpen}><Link to='/signup'>Sign Up</Link></button>
                            <button onClick={menuOpen}><Link to='/'>Forgot Password?</Link></button>
                          </li>
                        </form>
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