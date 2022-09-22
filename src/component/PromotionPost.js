import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from './config/contansts';

const PromotionPost = (props) => {
  const post = props.post 
  const postId = post.id
  const onClick = (e)=>{
    console.log(post.id)
    props.setPostId(post.id)
  }


  const delSubmit = ()=>{
    if(window.confirm("정말 하시겠습니까?")){
      console.log(postId)
      alert("삭제되었습니다.")
      delClick()
    }else{
      alert("취소되었습니다.")
    } 
  }
  const delClick = ()=>{
    axios.delete("http://localhost:8080/postdel",{
      data: {
        postId: postId
      }
    })
    console.log(postId)
    .then(result=>{
      console.log(postId)
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <>
    <div className='slideImg'>
        <div style={{width:`100%`, height:`430px`,overflow:`hidden`}}>
            <img onClick={onClick} src={`${API_URL}/${post.imgsrc}`} alt='' />
            <form onSubmit={delSubmit}>
              <button name='postId' type='submit' className='delBtn' style={{display:props.delBtn}}>삭제</button>
            </form>
        </div>
        <h4 className='postTitle'>{post.title}</h4>
        <p className='postBody'>
            {post.body}
        </p>
        <p className='postPeriod'>{post.period}</p>
    </div>
    </>
  )
}

export default PromotionPost