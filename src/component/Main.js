import React, { useEffect, useState } from 'react'
import './Main.css'
import MainSlide from './MainSlide'
import WeatherTab from './WeatherTab'

const Main = () => {
  const [textBlur, setTextBlur] = useState('2px 2px 20px #fff');
  const [textColor, setTextColor] = useState('transparent');
  const [textOpacity, setTextOpacity] = useState(0);
  const [page1Opacity, setPage1Opacity] = useState(1);
  const [page2Opacity, setPage2Opacity] = useState(0);
  const [page3Opacity, setPage3Opacity] = useState(0);
  const [page4Opacity, setPage4Opacity] = useState(0);
  const [page4Text, setPage4Text] = useState('');
  const [p4TextCount, setP4TextCount] = useState(0);

  const p4Text = "BARON"





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

      if(scrollY>(innerHeight*8)){
        setPage4Opacity(0);
      }else if(scrollY>(innerHeight*6)){
        setPage4Opacity(1);
        setPage3Opacity(0);
      }else if(scrollY>(innerHeight*4)){
        setPage4Opacity(0);
        setPage3Opacity(1);
        setPage2Opacity(0);
      }else if(scrollY>(innerHeight*2)){
        setPage1Opacity(0);
        setPage2Opacity(1);
        setPage3Opacity(0);
      }else{
        setPage1Opacity(1);
        setPage2Opacity(0);
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
        <p>당신에게<br/>   당신만의</p>
      </div>
      <div id='page4' style={{opacity: page4Opacity}}>
        <img src='/images/page23.jpg' alt='' />
        <p>BARON</p>
      </div>
      <div className='categoryPage'>
        <div className='leftMainPage'>
          <img src='/images/bespoke1.jpg' alt='' />
        </div>
        <div className='rightMainPage'>
          <h3>BESPOKE</h3>
          <p>특별한 사람을 위하여 <br/> 특별히 만들어진</p>
          <span>Own your fit</span>
          <div className='detailView'>DETAIL VIEW</div>
        </div>
      </div>
    </div>
  )
}

export default Main