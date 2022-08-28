import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './AboutUs.css'
import AboutUsSlide from './AboutUsSlide';

const AboutUs = () => {
  const [textOpacity, setTextOpacity] = useState(0);
  const [scrollDownOpacity, setScrollDownOpacity] = useState(1);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      console.log(scrollY);
      
      if(scrollY>0){
        setTextOpacity(1);
        setScrollDownOpacity(0);
      }
    })

  },[])
  return (
    <div>
      <div id='aboutUsBackground1'></div>
      <div id='aboutUsText'>
        <h2>About Us</h2>
        <p className='scrollDown' style={{opacity:scrollDownOpacity}}>SCROLL DOWN</p>
        <div id='textWrap' style={{opacity:textOpacity}}>
          <h3>True Bespoke Suit, BARON</h3>
          <h4>
            <span className='eng'>BARON</span>의 비스포크 수트는<br/>
            <span>진정한 소공동 제작방식입니다</span>
          </h4>
          <p id='bodyText1'>
            SINCE 2006년 시작된 BARON은 40여년 경력의 50인으로 구성된
            재단 드림팀과 소공동 비스포크 기술진의 자체 공방을 운영하며
            감각적인 디자인의 클래식한 감성 슈트를 제작하고 있습니다.
            맞춤정장이라 하여 다 같은 맞춤복이 아니라는것을 체험하실 수 있습니다.
            본사에서 철저한 교육을 받은 점주들이 고객 여러분의
            스타일과 체형의 장점을 최대한 반영하며 진정한 맞춤양복을 실현합니다.
          </p>
          <p id='bodyText2'>
            창사 이래 전 과정을 외주 하청 생산 없이 전 제품 직영 제작합니다.
            끊임없이 연구하고 노력하며 고객의 니즈 충족과 감동을 위해
            퀄리티 유지와 발전에 힘쓰고 있습니다.
            'Loro Piana', 'Holland and Sherry', 'Scabal', 'Ermenegildo Zegna',
            'Harrison’s of Edinburgh' 이태리, 영국 등 세계 명품 원단들과 브랜드의
            시그니처 원단인 'BARON패브릭'을 경험해보실 수 있습니다.
          </p>
        </div>
      </div>
      <ul id='aboutUsList'>
        <li><Link to="/">Competitiveness</Link></li>
        <li><Link to="/">Bespoke</Link></li>
        <li><Link to="/">Wedding</Link></li>
      </ul>
      <div id='aboutUsBackground2'></div>
      <div id='aboutUsText2'>
          <h4>
            <span className='eng'>BARON</span>은 진정한
            테일러 메이드 정장을 추구합니다
          </h4>
          <p>
            '처음부터 마무리까지 최고가 아니면 제작하지 않는다' 라는 사훈으로
            성원해주시는 고객님께 퀄리티로 보답해드리기 위해 끊임없이 연구합니다.
            수십 년간 쌓아온 기술력과 노하우로 고객 한 분만을 위한
            체형보완과 밸런스, 그리고 고객님의 스타일에 최적화 된 슈트를
            합리적인 맞춤가격으로 제안 드립니다.
            품질,품격 우선주의를 사훈으로 하는 BARON에서
            맞춤정장의 진정한 서비스를 경험해보실 수 있습니다.
          </p>
          <p>
            또한 세련된 여성고객님을 위한 여성맞춤정장 라인,
            'BARON 우먼슈트' 론칭으로 소공동 비스포크 기술력의
            럭셔리한 오피스 룩 등 퍼스널 스타일링을 제안드립니다.
          </p>
      </div>
      <AboutUsSlide />
    </div>
  )
}

export default AboutUs