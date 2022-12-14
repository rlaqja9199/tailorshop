import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import Footer from '../include/Footer';
import { API_URL } from './config/contansts';
import './Review.css'
import ReviewPost from './ReviewPost';

const Review = () => {
  const [allReview, setAllReview] = useState([]);
  const [regOn, setRegOn] = useState('-360px');
  const [delBtn, setDelBtn] = useState('none');
  const [cookies] = useCookies(['username']);
  const [formData, setFormData] = useState({
    imgsrc: "",
    title: "",
    body: "",
    username: "",
  })


  useEffect(()=>{ 
    axios.get(`${API_URL}/review`)
    // axios.get(`https://dress-shop-server.herokuapp.com/dresses`)
    .then(result=>{
      const review = result.data;
      console.log(result.data);
      console.log(review);
      setAllReview(review);
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
    axios.post(`${API_URL}/reviewreg`,formData)
    .then(res=>{
      alert('등록 완료')
      setRegOn('-360px')
    }).catch(err=>{
      alert('등록 실패');
    })
  }



  const mobileOn = ()=>{
    setFormData({
      ...formData,
      username: cookies.username,
    });
    if(regOn === '-360px'){
      setRegOn('20px')
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



  return (
    <div id='review'>
      <div id='reviewImg'>BARON</div>
      <div id='reviewPost'>
        <h3>Review</h3>
        <div id='reviewPostList'>
          <div className='regBtn'>
            <button onClick={mobileOn} style={{display:cookies.username != null? "inline-block" : "none"}}>등록</button>
            <button onClick={deleteBtn} style={{display:cookies.username != null? "inline-block" : "none"}}>삭제</button>
          </div>

          <div id='regPage' style={{right:regOn}}>
            <form onSubmit={onSubmit}>
            <div id='blackBg'>
              <div id='bgHeader'></div>
              <div id='mobileBody'>
                <input id='postTitle' name='title' onChange={onChageInput} type="text" placeholder='제목' />
                <textarea id='postBody' name='body' onChange={onChageInput} cols="50" rows="20" placeholder='내용' />
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

          {allReview.map(post=>(
            <ReviewPost key={post.id} post={post} delBtn={delBtn}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Review