import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import './Promotion.css'
import PromotionPost from './PromotionPost';

const Promotion = () => {
  const [allPromotionPost, setAllPromotionPost] = useState([]);
  const [promotionDetail, setPromotionDetail] = useState([]);
  const [postId, setPostId] = useState();
  const [detailTitle,setDetailTitle] = useState();
  const [detailPeriod, setDetailPeriod] = useState();
  

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
  if(allPromotionPost.length === 0) return;
  return (
    <div id='promotion'>
      <div id='promotionImg'>BARON</div>
      <div id='promotionPost'>
        <h3>Promotion</h3>
        <div className='regBtn'>
          <button>등록</button>
          <button>삭제</button>
        </div>
        <Slider {...settings}>
          {allPromotionPost.map(post=>(
                    <PromotionPost key={post.id} post={post} setPostId={setPostId}/>
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