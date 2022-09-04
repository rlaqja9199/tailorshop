import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Promotion.css'
import PromotionPost from './PromotionPost';

const Promotion = () => {
  const [allPromotionPost, setAllPromotionPost] = useState([]);
  const [regOn, setRegOn] = useState('-360px');
  const [delBtn, setDelBtn] = useState('none');
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    imgsrc1: "",
    period: "",
  })
  
  
  useEffect(()=>{ 
    axios.get("http://localhost:8080/promotion")
    // axios.get(`https://dress-shop-server.herokuapp.com/dresses`)
    .then(result=>{
      const promotion = result.data;
      console.log(result.data)
      console.log(promotion)
      setAllPromotionPost(promotion)
    })
    .catch(e=>{
      console.log(e);
    })
    
  },[])
  const onChageInput = (e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const onSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);
    insertPost();
  }
  const insertPost = ()=>{
    axios.post("http://localhost:8080/postreg",formData)
    .then(res=>{
      alert('등록 완료')
      setRegOn('-360px')
    }).catch(err=>{
      alert('등록 실패');
    })
  }




  const mobileOn = ()=>{
    if(regOn === '-360px'){
      setRegOn('50px')
    }else {
      setRegOn('-360px')

    }
  }
  const deleteBtn = ()=>{
    if(delBtn === 'block'){
      setDelBtn('none')
    }else{
      setDelBtn('block')
    }
  }




  let settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    className: "slider3",
  };
  // if(allPromotionPost.length === 0) return;
  return (
    <div id='promotion'>
      <div id='promotionImg'>BARON</div>
      <div id='promotionPost'>
        <h3>Promotion</h3>
        <div className='regBtn'>
          <button onClick={mobileOn}>등록</button>
          <button onClick={deleteBtn}>삭제</button>
        </div>
        <div id='regPage' style={{right:regOn}}>
          <form onSubmit={onSubmit}>
          <div id='blackBg'>
            <div id='bgHeader'></div>
            <div id='mobileBody'>
              <input id='postTitle' name='title' onChange={onChageInput} type="text" placeholder='제목' />
              <textarea id='postBody' name='body' onChange={onChageInput} cols="50" rows="20" placeholder='내용' />
              <input id='postPeriod' name='period' onChange={onChageInput} type="text" placeholder='기간 ex)1월1일 ~ 12월 30일' />
              <input id='postImg' name='imgsrc1' onChange={onChageInput} type="file"/>
            </div>
            <div id='regSubmitBtn'>
              <button id='regSubmit' type='submit'>완료</button>
              <button id='regCancel' type='reset'>취소</button>
            </div>
            <div id='bgFooter' onClick={mobileOn}></div>
          </div>
          </form>
          <div id='mobileSide'>
            <div id='side1'></div>
            <div id='side2'></div>
            <div id='side3'></div>
            <div id='side4'></div>
          </div>
        </div>
        <Slider {...settings}>
          {allPromotionPost.map(post=>(
                    <PromotionPost key={post.id} post={post} delBtn={delBtn}/>
                ))} 
          {/* <div className='slideImg'>
            <div style={{width:`100%`, height:`430px`,overflow:`hidden`}}>
              <img src='/images/fallPromotion1.jpg' alt='' />
            </div>
            <h4 className='postTitle'>가을 프로모션 진행</h4>
            <p className='postBody'>
              2022년 가을을 맞아 진행하는 프로모션<br/> 제일모직 및 바론패브릭 원단으로 맞춤시 30% 할인
            </p>
            <p className='postPeriod'>8월30일 ~ 11월30일</p>
          </div>
          <div className='slideImg'>
            <div style={{width:`100%`, height:`430px`,overflow:`hidden`}}>
              <img src='/images/shoes1.jpg' alt='' />
            </div>
            <h4 className='postTitle'>수제화 프로모션</h4>
            <p className='postBody'>
              이탈리아 Marche지역의 수세기동안 걸쳐 전승된
              신발 장인들의 뛰어난 제화 솜씨를 그대로 느낄 수 있는
              바론만의 맞춤 구두를 20% 할인 프로모션 진행중입니다.
            </p>
            <p className='postPeriod'>8월30일 ~ 11월30일</p>
          </div>
          <div className='slideImg'>
            <div style={{width:`100%`, height:`430px`,overflow:`hidden`}}>
              <img src='/images/fabric1.png' alt='' />
            </div>
            <h4 className='postTitle'>이태리 고급 수입원단 프로모션</h4>
            <p className='postBody'>
              이태리 고급 수입 원단만의 고급스럽고
              입을 수록 편안한 느낌의 맞춤 정장을
              10% 프로모션 진행중입니다.
            </p>
            <p className='postPeriod'>8월30일 ~ 11월30일</p>
          </div>
          <div className='slideImg'>
            <div style={{width:`100%`, height:`430px`,overflow:`hidden`}}>
              <img src='/images/fallPromotion1.jpg' alt='' />
            </div>
            <h4 className='postTitle'>가을 프로모션 진행</h4>
            <p className='postBody'>
              2022년 가을을 맞아 진행하는 프로모션<br/>
              제일모직 및 바론패브릭 원단으로 맞춤시 30% 할인
            </p>
            <p className='postPeriod'>8월30일 ~ 11월30일</p>
          </div> */}
        </Slider>
      </div>
    </div>
  )
}

export default Promotion