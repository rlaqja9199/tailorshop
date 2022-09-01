import React, { useEffect, useState } from 'react'
import Footer from '../include/Footer';
import './AboutUs.css'
import AboutUsSlide from './AboutUsSlide';

const AboutUs = () => {
  const [textOpacity, setTextOpacity] = useState(0);
  const [scrollDownOpacity, setScrollDownOpacity] = useState(1);
  const [modalOpen, setModalOpen] = useState('')
  const [competitiveness, setCompetitiveness] = useState('none');
  const [bespoke, setBespoke] = useState('none');
  const [wedding, setWedding] = useState('none');
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


  const listOn = (e)=>{
    const innerHTML = e.target.innerHTML;
    console.log(innerHTML)
    if(innerHTML==='Competitiveness'){
      setCompetitiveness('block');
      setModalOpen('modalOpen')
      console.log(modalOpen)
    }else if(innerHTML==='Bespoke'){
      setBespoke('block');
      setModalOpen('modalOpen')
    }else if(innerHTML==='Wedding'){
      setWedding('block');
      setModalOpen('modalOpen')
    }
  }

  const listOff = (e)=>{
    const innerHTML = e.target.innerHTML;
    if(innerHTML==='Competitiveness'){
      setCompetitiveness('none');
      setModalOpen('');
    }else if(innerHTML==='Bespoke'){
      setBespoke('none');
      setModalOpen('');
    }else if(innerHTML==='Wedding'){
      setWedding('none');
      setModalOpen('');
    }
  }
  return (
    <div id='aboutUs' className={modalOpen}>
      <div id='aboutUsBackground1'>BARON</div>
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
        <li>
          <p className='listName' onClick={listOn}>Competitiveness</p>
          <div className='aboutUsListScreen competitiveness' style={{display:competitiveness}}>
            <div className='greyBg' ></div>
            <div className='closeBtn' onClick={listOff}>Competitiveness</div>
            <div className='listScreen competitivenessScreen'>
              <h3>Competitiveness</h3>
              <p>
                나만을 위해 제작되는 세상에 단 한벌 뿐인 맞춤정장.<br/>
                직영 아틀리에를 운영 중인 <span>BARON</span>이 정직하고 진정한 맞춤정장의 정의를 내립니다.<br/>
              </p>
              <h4>"작은 디테일의 차이가 명품을 만듭니다"</h4>
              <p>
                원단이 같다고 맞춤의 퀄리티가 동일하지 않은 이유를<br/>
                <span>BARON</span>의 퀄리티로 경험해보시길 바랍니다.<br/>
              </p>
              <div className='listScreenImg'>
                <img src="/images/competit_img1.jpg" alt='' />
                <img src="/images/competit_img2.jpg" alt='' />
              </div>
              <h4>'소공동 제작 방식의 비스포크 Bespoke'</h4>
              <p style={{marginBottom:'150px'}}>
                주문과 동시에 고객님의 개인 패턴이 만들어지는 세상에 단 한벌이라는<br/>
                진정한 맞춤 의미를 가진 정장으로 고객님의 신체적인 특징 및 모든<br/>
                요소를 고려하여 한명의 명장이 처음부터 끝까지 섬세한 손바느질 과정을 거쳐<br/>
                완성되는 뛰어난 디테일과 착용감의 명품 정장입니다.<br/>
              </p>
              <h4>'BARON 수미주라 Su Misura 맞춤정장'</h4>
              <p>
                비스포크를 바탕으로 만들어지는 <span>BARON</span>의 수미주라 맞춤정장은 만들어져 있는<br/>
                패턴을 사용하여 고객님의 사이즈로 재단됩니다.<br/>
                원단과 심지를 접착식으로 제작하기 때문에 접착식 공정이라고 하며,<br/>
                기성복 같은 개념의 미싱 라인작업으로 제작됩니다.<br/>
                사이즈 및 체형보완이 된다는 점에서 기성복과는 차별화 됩니다.<br/>
              </p>
              <div className='listScreenImg'>
                <img src="/images/competit_img3.jpg" alt='' />
              </div>
              <h4>'BARON fabric'</h4>
              <p style={{marginBottom:'60px'}}>
                고객 만족을 높이기 위한 노력은 아틀리에 운영만으로 끝나지 않습니다.<br/>
                <span>BARON</span>의 시그니처 원단 'BARON fabric'을 소개합니다.
              </p>
              <p style={{marginBottom:'60px'}}>
                기본 색상 출시 이후 고객님들의 사랑으로 다양한 패턴까지 선택의 폭이 넓어졌습니다.<br/>
                합리적인 맞춤가격의 <span>BARON fabric</span>과 '<span>BARON business fabric</span> 까지 경험해보시기 바랍니다.<br/>
                또한 작은 디테일의 차이가 명품을 만들듯이 그냥 지나칠 수 있는 안감과 단추도 자체 제작하여<br/>
                고 퀄리티의 품질, 품격의 사훈을 완성하고 있습니다.
              </p>
            </div>
          </div>
        </li>
        <li>
          <p className='listName' onClick={listOn}>Bespoke</p>
          <div className='aboutUsListScreen bespoke' style={{display:bespoke}}>
            <div className='greyBg' ></div>
            <div className='closeBtn' onClick={listOff}>Bespoke</div>
            <div className='listScreen bespokeScreen'>
              <h3>Bespoke</h3>
              <p>
                맞춤정장이라고 하면 사람들은 보통 비스포크라는 단어를 떠올리지만<br/>
                사실 모든 맞춤수트가 비스포크인것은 아닙니다.<br/>
                시스템 오더, 반맞춤이라는 것을 비스포크라고 할 수 없다는 뜻입니다.<br/>
                <span>BARON</span>의 수제정장을 일반 공정보다도 훨씬 섬세한 공정을 거칩니다.<br/>
                고객님의 체형을 잘 살려주면서 세월이 흘러도 옷의 형태가 변형이 적으며<br/>
                착용감을 높이기 위해 앞판 심지는 천연심지를 사용해 제작됩니다.
              </p>
              <div className='listScreenImg'>
                <img src="/images/page21.jpg" alt='' />
                <img src="/images/page22.jpg" alt='' />
              </div>
              <p style={{marginBottom:'40px'}}>
                비 접착식으로 제작되는 비스포크 수트의 대표적인 팔짜뜨기 바느질은<br/>
                라펠에 심지를 부착시키고 형태를 고정시키는데 사용됩니다.<br/>
                시선 시침과 비슷한 방법이지만, 길이가 더 짧고 완성된 모양이<br/>
                한자의 팔자(八) 형태가 되기 때문에 '팔짜뜨기'라고 합니다.<br/>
                실은 겉감과 같은 색실을 사용하기때문에 겉에서는 바늘땀이 거의 나타나지 않습니다.<br/>
                완성된 수트의 라펠 뒷면에서 섬세한 바늘땀을 확인할 수 있습니다.<br/>
                촘촘할 수록 우아한 라펠의 곡선이 만들어지며 형태의 변형이 적은 이유입니다.
              </p>
              <p style={{marginBottom:'40px'}}>
                오로지 수작업으로 바느질 해 제작되는 <span>BARON</span>의 비스포크 수트는<br/>
                우리나라 최고의 기술력인 소공동 제작 방식으로 자체 제작소에서 제작되고 있습니다.
              </p>
              <p>
                입을 수록 착용감이 좋은 <span>BARON</span>의 비스포크정장을 경험해보시기 바랍니다.
              </p>
              <div className='listScreenImg'>
                <img src="/images/bespoke_img4.jpg" alt='' />
              </div>
            </div>
          </div>
        </li>
        <li>
          <p className='listName' onClick={listOn}>Wedding</p>
          <div className='aboutUsListScreen wedding' style={{display:wedding}}>
            <div className='greyBg' ></div>
            <div className='closeBtn' onClick={listOff}>Wedding</div>
            <div className='listScreen weddingScreen'>
              <h3>Wedding</h3>
              <p style={{marginBottom:'40px'}}>
                실용성을 더한 HK테일러의 세상에 단 한번 뿐인 결혼예복을 소개합니다.<br/>
                합리적인 맞춤가격의 예복 준비를 위해 수미주라, 비스포크 공정의<br/>
                예복 패키지가 준비되어 있으며, 직영 제작을 통해 더욱 특별한<br/>
                예복 준비를 위해 최선을 다해 지어드립니다.
              </p>
              <p>
                예복의 디자인, 스타일, 고객님의 체형 사이즈 상관없이<br/>
                맞춤제작 경력 40년 이상의 기술진과 함께 단순 사이즈 오더가 아닌<br/>
                체형과 밸런스, 감각적인 디자인을 반영한 신랑님의 감성수트를 제작해드립니다.
              </p>
              <div className='listScreenImg'>
                <img src="/images/wedding_img1.jpg" alt='' />
                <img src="/images/wedding_img2.jpg" alt='' />
              </div>
              <p style={{marginBottom:'40px'}}>
                또한 좀 더 화려한 예복을 찾으시는 고객님을 위한<br/>
                턱시도 대여 서비스도 준비되어 있습니다.
              </p>
              <p style={{marginBottom:'40px'}}>
                대여일지라도 입으시는 분의 착용감을 위해 고급 울 원단으로 제작되어<br/>
                웨딩촬영 또는 본식용으로 부족함이 없습니다.<br/>
                다양한 사이즈와 디자인으로 신랑님께 잘 맞는 턱시도를 추천드립니다.<br/>
                HK테일러의 턱시도 렌탈 서비스 진행 시 보타이, 포켓치프,<br/>
                부토니에등의 악세사리도 무상으로 대여해드립니다.
              </p>
              <span style={{fontSize:'14px'}}>
                * 턱시도 대여 및 악세사리 진행은 매장별로 대여 기준과 구성이 다를 수 있습니다.
              </span>
              <div className='listScreenImg'>
                <img src='/images/wedding_img3.jpg' alt='' />
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div id='aboutUsBackground2'>
      </div>
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
      <div className='footer aboutFooter'>
        <Footer />
      </div>
    </div>
  )
}

export default AboutUs