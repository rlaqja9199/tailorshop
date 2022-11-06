import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import Slider from 'react-slick';
import { API_URL } from './config/contansts';
import './Promotion.css'
import PromotionPost from './PromotionPost';

const Promotion = () => {
  const [cookies] = useCookies(['username']);
  const [allPromotionPost, setAllPromotionPost] = useState([]);
  const [regOn, setRegOn] = useState('-360px');
  const [delBtn, setDelBtn] = useState('none');
  const [slideToShow, setSlidesToShow] = useState(3);
  const [innerWidth, setInnerWidth] = useState();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    imgsrc1: "",
    period: "",
  })
  
  
  useEffect(()=>{ 
    axios.get(`${API_URL}/promotion`)
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
  const onChangeImg = (e)=>{
    const {name} = e.target;
    let imageFormData = new FormData();
    imageFormData.append(name, e.target.files[0]);
    axios.post(`${API_URL}/imgreg`, imageFormData,{
      Header: { 'content-type': 'multipart/form-data' },
    }).then((response) => {
      console.log(response.data)
      setFormData({
        ...formData,
        imgsrc: response.data.imgsrc
      })
    })
  }

  
  const onSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);
    insertPost();
  }
  const insertPost = ()=>{
    axios.post(`${API_URL}/postreg`,formData)
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
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setInnerWidth(window.innerWidth);
    })
    if(innerWidth>390){
      setSlidesToShow(3)
    }else{
      setSlidesToShow(1);
    }
  },[innerWidth])
  
  let settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: slideToShow,
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
          <button onClick={mobileOn} style={{display:cookies.username === "admin"? "inline-block" : "none"}}>등록</button>
          <button onClick={deleteBtn} style={{display:cookies.username === "admin"? "inline-block" : "none"}}>삭제</button>
        </div>
        <div id='regPage' style={{right:regOn}}>
          <form onSubmit={onSubmit}>
          <div id='blackBg'>
            <div id='bgHeader'></div>
            <div id='mobileBody'>
              <input id='postTitle' name='title' onChange={onChageInput} type="text" placeholder='제목' />
              <textarea id='postBody' name='body' onChange={onChageInput} cols="50" rows="20" placeholder='내용' />
              <input id='postPeriod' name='period' onChange={onChageInput} type="text" placeholder='기간 ex)1월1일 ~ 12월 30일' />
              <input id='postImg' name='imgsrc' onChange={onChangeImg} type="file"/>
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
        </Slider>
      </div>
    </div>
  )
}

export default Promotion