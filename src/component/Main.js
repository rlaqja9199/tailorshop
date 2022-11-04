import React, { useEffect, useMemo, useState } from 'react'
import Footer from '../include/Footer'
import './Main.css'
import MainSlide from './MainSlide'
import Map from './Map'
import WeatherTab from './WeatherTab'
import { throttle } from 'lodash';
import { useScroll } from './hooks/useScroll'

const Main = () => {
  const [textBlur, setTextBlur] = useState('2px 2px 20px #fff');
  const [textColor, setTextColor] = useState('transparent');
  const [textOpacity, setTextOpacity] = useState(0);
  const [page2Opacity, setPage2Opacity] = useState(0);
  const [page3Opacity, setPage3Opacity] = useState(0);
  const [page4Opacity, setPage4Opacity] = useState(0);
  const [cPage1Opacity, setCPage1Opacity] = useState(0);
  const [cPage2Opacity, setCPage2Opacity] = useState(0);
  const [cPage3Opacity, setCPage3Opacity] = useState(0);
  const [directionsPage, setDirectionsPage] = useState(0);
  const [footerOn, setFooterOn] = useState("-40vh");


  const {x,y} = useScroll();


  //페이지 로딩
  setTimeout(() => {
    setTextBlur('0px 0px 0px #eee');
    setTextColor('#eee');
    setTextOpacity('1');

  }, 1000);

  const innerHeight = window.innerHeight;
  //매끄러운 스크롤 이벤트를 위한 상태관리 추가
  useEffect(()=>{
    if(y>innerHeight*14){
      setTimeout(() => {
        setDirectionsPage(1);
        setFooterOn(0);
      }, 1000);
    }else if(y>innerHeight*12){
      setFooterOn('-40vh');
      setDirectionsPage(0);
      setTimeout(() => {
        setCPage3Opacity(1);
      }, 1000);
    }else if(y>innerHeight*10){
      setTimeout(() => {
        setCPage2Opacity(1)
      }, 1000);
    }else if(y>innerHeight*8){
      setPage4Opacity(0);
      setTimeout(() => {
        setCPage1Opacity(1)
      }, 1000);
    }else if(y>innerHeight*6){
      setCPage1Opacity(0)
      setPage3Opacity(0);
      setTimeout(() => {
        setPage4Opacity(1);
      }, 500);
    }else if(y>innerHeight*4){
      setPage4Opacity(0);
      setPage2Opacity(0);
      setTimeout(() => {
        setPage3Opacity(1);
      }, 500);
    }else if(y>innerHeight*2){
      setPage3Opacity(0);
      setTimeout(() => {
        setPage2Opacity(1);
      }, 500);
    }else if(y<(innerHeight*2)){
      setPage2Opacity(0);
    }else{
      setPage2Opacity(0);
      setPage3Opacity(0);
      setPage4Opacity(0);
      setCPage1Opacity(0);
      setCPage2Opacity(0);
      setCPage3Opacity(0);
      setDirectionsPage(0);
    }

    
  },[y])

  return (
    <div id='main'>
      {/* <div id='page1' style={{opacity: page1Opacity}}> */}
      <div id='page1' style={{opacity: y> innerHeight*2? 0 : 1}}>
        <MainSlide />
        <div id='slideText'>
            <h3 style={{color:textColor, textShadow: textBlur, opacity: textOpacity}}>BARON</h3>
            <p style={{color:textColor, textShadow: textBlur, opacity: textOpacity}}>Own your fit</p>
        </div>
        <WeatherTab />
      </div>
      <div id='emptyBox'></div>
      {/* <div id='page2' style={{opacity: page2Opacity}}> */}
      <div id='page2' style={{opacity: y >innerHeight*4? 0: (y>innerHeight*2? page2Opacity : 0) }}>
        <img src='/images/page21.jpg' alt='' />
        <p>한 땀 한 땀 <br/> 장인의 손길로</p>
      </div>
      {/* <div id='page3' style={{opacity: page3Opacity}}> */}
      <div id='page3' style={{opacity: y>innerHeight*6? 0 : (y>innerHeight*4? page3Opacity : 0)}}>
        <img src='/images/page22.jpg' alt='' />
        <p>오직 당신에게<br/>꼭 맞는 당신만의</p>
      </div>
      {/* <div id='page4' style={{opacity: page4Opacity}}> */}
      <div id='page4' style={{opacity: y>innerHeight*8? 0 : (y>innerHeight*6? page4Opacity : 0)}}>
        <img src='/images/main6.jpg' alt='' />
        <p>BARON</p>
        <span>made for you only</span>
      </div>
      {/* <div className='categoryPage' style={{opacity: categoryPage1,zIndex:cPage1Z}}> */}
      <div className='categoryPage' style={{opacity: y>innerHeight*8? "1":"0",zIndex: y>innerHeight*10? "1":(y>innerHeight*8? "10": "1")}}>
        <div className='leftMainPage cPageL1' style={{top: y>innerHeight*10? '100vh' : (y>innerHeight*8? '0' : "-100vh")}}>
          <img src='/images/bespoke1.jpg' alt='' style={{opacity: cPage1Opacity}} />
        </div>
        <div className='rightMainPage cPageR1' style={{bottom: y>innerHeight*10? '100vh' : (y>innerHeight*8? '0' : "-100vh")}}>
          <div id='p1Text' style={{opacity: cPage1Opacity}}>
            <h3>BESPOKE</h3>
            <p>"특별한 사람을 위하여 <br/><br/> 특별히 만들어진"</p>
            <span>Own your fit</span>
            <div className='detailView'>DETAIL VIEW</div>
          </div>
        </div>
      </div>
      <div className='categoryPage' style={{zIndex: y>innerHeight*12? "1":(y>innerHeight*10? "10": "1")}}>
        <div className='leftMainPage cPageL2' style={{top: y>innerHeight*12? '100vh' : (y>innerHeight*10? '0' : "-100vh")}}>
          <img src='/images/competitiveness.jpg' alt='' style={{opacity:cPage2Opacity}} />
        </div>
        <div className='rightMainPage cPageR2' style={{bottom: y>innerHeight*12? '100vh' : (y>innerHeight*10? '0' : "-100vh")}}>
          <div style={{opacity:cPage2Opacity}}>
            <h3>Competitiveness</h3>
            <p>"작은 디테일의 차이가 <br/>명품을 만듭니다"</p>
            <span>Own your fit</span>
            <div className='detailView'>DETAIL VIEW</div>
          </div>
        </div>
      </div>
      <div className='categoryPage' style={{zIndex: y>innerHeight*14? "1":(y>innerHeight*12? "10": "1")}}>
        <div className='leftMainPage cPageL3' style={{top: y>innerHeight*14? '100vh' : (y>innerHeight*12? '0' : "-100vh")}}>
          <img src='/images/wedding1.jpg' alt='' style={{opacity:cPage3Opacity}} />
        </div>
        <div className='rightMainPage cPageR3' style={{bottom: y>innerHeight*14? '100vh' : (y>innerHeight*12? '0' : "-100vh")}}>
          <div style={{opacity:cPage3Opacity}}>
            <h3>WEDDING</h3>
            <p>"한번뿐인 그 날을 위해<br/>하나뿐인 당신에게"</p>
            <span>Own your fit</span>
            <div className='detailView'>DETAIL VIEW</div>
          </div>
        </div>
      </div>
      {/* <div id='directionsPage' style={{opacity:directionsPage, zIndex:directionsPageZIndex}}> */}
      <div id='directionsPage' style={{opacity:y>innerHeight*14? directionsPage : 0, zIndex:y>innerHeight*14? 3 : 0}}>
        <div className='directionLeftPage'>
          <div id='shopImg'>
            <img src="/images/shopImg.jpg" alt='' id='shopImgDetail' />
          </div>
          <Map />
        </div>
        {/* <div className='directionRightPage' style={{opacity:directionsPage}}> */}
        <div className='directionRightPage' style={{opacity: y>innerHeight*14? directionsPage : 0}}>
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
      {/* <div className='footer' style={{bottom: y>innerHeight*14? 0 : "-40vh", zIndex: y>innerHeight*14? 5 : 0}}> */}
      <div className='footer' style={{bottom:y>innerHeight*14? footerOn: "-40vh", zIndex: y>innerHeight*14? 5 : 0}}>
        <Footer />
      </div>
    </div>
  )
}

export default Main