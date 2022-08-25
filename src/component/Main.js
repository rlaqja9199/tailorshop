import React, { useEffect, useState } from 'react'
import Footer from '../include/Footer'
import './Main.css'
import MainSlide from './MainSlide'
import Map from './Map'
import WeatherTab from './WeatherTab'

const Main = () => {
  const [textBlur, setTextBlur] = useState('2px 2px 20px #fff');
  const [textColor, setTextColor] = useState('transparent');
  const [textOpacity, setTextOpacity] = useState(0);
  const [page1Opacity, setPage1Opacity] = useState(1);
  const [page2Opacity, setPage2Opacity] = useState(0);
  const [page3Opacity, setPage3Opacity] = useState(0);
  const [page4Opacity, setPage4Opacity] = useState(0);
  const [categoryPage1, setCategoryPage1] = useState(0);
  const [cPage1Height, setCPage1Height] = useState(-100);
  const [cPage1Opacity, setCPage1Opacity] = useState(0);
  const [cPage2Height, setCPage2Height] = useState(-100);
  const [cPage2Opacity, setCPage2Opacity] = useState(0);
  const [cPage3Height, setCPage3Height] = useState(-100);
  const [cPage3Opacity, setCPage3Opacity] = useState(0);
  const [directionsPage, setDirectionsPage] = useState(0);
  const [footerOn, setFooterOn] = useState("-20vh");


  //페이지 로딩
  setTimeout(() => {
    setTextBlur('0px 0px 0px #eee');
    setTextColor('#eee');
    setTextOpacity('1');

  }, 1000);

  
  useEffect(()=>{
    window.addEventListener('scroll',(e)=>{
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;

      console.log('스크롤Y'+scrollY);
      console.log(innerHeight);

      if(scrollY>(innerHeight*14)){
        setCPage3Height(100);
        setTimeout(() => {
          setDirectionsPage(1);
          setFooterOn(0);
        }, 1000);
      }else if(scrollY>(innerHeight*12)){
        setCPage2Height(100);
        setCPage3Height(0);
        setDirectionsPage(0);
        setFooterOn("-20vh");
        setTimeout(() => {
          setCPage3Opacity(1);
        }, 1000);
      }else if(scrollY>(innerHeight*10)){
        setCPage1Height(100);
        setCPage2Height(0);
        setCPage3Height(-100)
        setTimeout(() => {
          setCPage2Opacity(1)
        }, 1000);
      }else if(scrollY>(innerHeight*8)){
        setCategoryPage1(1);
        setCPage2Height(-100);
        setPage4Opacity(0);
        setCPage1Height(0);
        setTimeout(() => {
          setCPage1Opacity(1)
        }, 1000);
      }else if(scrollY>(innerHeight*6)){
        setCategoryPage1(0);
        setPage3Opacity(0);
        setCPage1Height(-100);
        setCPage1Opacity(0)
        setTimeout(() => {
          setPage4Opacity(1);
          
        }, 500);
      }else if(scrollY>(innerHeight*4)){
        setPage4Opacity(0);
        setPage2Opacity(0);
        setTimeout(() => {
          setPage3Opacity(1);
          
        }, 500);
      }else if(scrollY>(innerHeight*2)){
        setPage1Opacity(0);
        setPage3Opacity(0);
        setTimeout(() => {
          setPage2Opacity(1);
          
        }, 500);
      }else if(scrollY<(innerHeight*2)){
        setPage1Opacity(1);
        setPage2Opacity(0);
      }
      else{
        setPage1Opacity(0);
        setPage2Opacity(0);
        setPage3Opacity(0);
        setPage4Opacity(0);
        setCPage1Opacity(0);
        setCPage2Opacity(0);
        setCPage3Opacity(0);
        setDirectionsPage(0);
      }
    })
  },[])
  return (
    <div id='main'>
      <div id='page1' style={{opacity: page1Opacity}}>
        <MainSlide />
        <div id='slideText'>
            <h3 style={{color:textColor, textShadow: textBlur, opacity: textOpacity}}>BARON</h3>
            <p style={{color:textColor, textShadow: textBlur, opacity: textOpacity}}>Own your fit</p>
        </div>
        <WeatherTab />
      </div>
      <div id='emptyBox'></div>
      <div id='page2' style={{opacity: page2Opacity}}>
        <img src='/images/page21.jpg' alt='' />
        <p>한 땀 한 땀 <br/> 장인의 손길로</p>
      </div>
      <div id='page3' style={{opacity: page3Opacity}}>
        <img src='/images/page22.jpg' alt='' />
        <p>오직 당신에게<br/>꼭 맞는 당신만의</p>
      </div>
      <div id='page4' style={{opacity: page4Opacity}}>
        <img src='/images/main6.jpg' alt='' />
        <p>BARON</p>
      </div>
      <div className='categoryPage' style={{opacity: categoryPage1}}>
        <div className='leftMainPage cPageL1' style={{top:`${cPage1Height}vh`}}>
          <img src='/images/bespoke1.jpg' alt='' style={{opacity: cPage1Opacity}} />
        </div>
        <div className='rightMainPage cPageR1' style={{bottom:`${cPage1Height}vh`}}>
          <div id='p1Text'>
            <h3 style={{opacity: cPage1Opacity}}>BESPOKE</h3>
            <p style={{opacity: cPage1Opacity}}>"특별한 사람을 위하여 <br/> 특별히 만들어진"</p>
            <span style={{opacity: cPage1Opacity}}>Own your fit</span>
            <div className='detailView' style={{opacity: cPage1Opacity}}>DETAIL VIEW</div>
          </div>
        </div>
      </div>
      <div className='categoryPage'>
        <div className='leftMainPage cPageL2' style={{top:`${cPage2Height}vh`}}>
          <img src='/images/competitiveness.jpg' alt='' style={{opacity:cPage2Opacity}} />
        </div>
        <div className='rightMainPage cPageR2' style={{bottom:`${cPage2Height}vh`}}>
          <h3 style={{opacity:cPage2Opacity}}>Competitiveness</h3>
          <p style={{opacity:cPage2Opacity}}>"작은 디테일의 차이가 <br/>명품을 만듭니다"</p>
          <span style={{opacity:cPage2Opacity}}>Own your fit</span>
          <div className='detailView' style={{opacity:cPage2Opacity}}>DETAIL VIEW</div>
        </div>
      </div>
      <div className='categoryPage'>
        <div className='leftMainPage cPageL3' style={{top:`${cPage3Height}vh`}}>
          <img src='/images/wedding1.jpg' alt='' style={{opacity:cPage3Opacity}} />
        </div>
        <div className='rightMainPage cPageR3' style={{bottom:`${cPage3Height}vh`}}>
          <h3 style={{opacity:cPage3Opacity}}>WEDDING</h3>
          <p style={{opacity:cPage3Opacity}}>"작은 디테일의 차이가 <br/>명품을 만듭니다"</p>
          <span style={{opacity:cPage3Opacity}}>Own your fit</span>
          <div className='detailView' style={{opacity:cPage3Opacity}}>DETAIL VIEW</div>
        </div>
      </div>
      <div id='directionsPage' style={{opacity:directionsPage}}>
        <div className='directionLeftPage'>
          <div id='shopImg'>
            <img src="/images/shopImg.jpg" alt='' id='shopImgDetail' />
          </div>
          <Map />
        </div>
        <div className='directionRightPage' style={{opacity:directionsPage}}>
          <h2>Directions</h2>
          <div id='textBox'>
            <p>Address.<span><br/>전라남도 순천시 왕지5길 54 1층<br/>전라남도 순천시 왕지동 855-10 1층</span></p>
            <p>TEL. <span>061-722-7983</span><br/>M. <span>010-1234-5678</span></p>
            <p>Open. <span>11:00</span><br/>Close. <span>20:00</span></p>
            <p>Closed. <span>화요일</span></p>
            <p>
              Car. <span>순천역에서 5.7km, 15분 소요</span><br/>
              Bus. <span>순천역에서 56번버스 탑승, 범암에서 하차 후 도보 1분 </span>
            </p>
          </div>
        </div>
      </div>
      <div id='footer' style={{bottom: footerOn}}>
        <Footer />
      </div>
    </div>
  )
}

export default Main