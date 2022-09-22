import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { API_URL } from './config/contansts'

const ReviewPost = (props) => {
    const post = props.post;
    const postId = post.id;

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
      axios.delete("http://localhost:8080/reviewdel",{
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
        <div className='postList'>
            <div className='reviewPostImg'>
              <img src={`${API_URL}/${post.imgsrc}`} alt='' />
              <form onSubmit={delSubmit}>
                <button name='postId' type='submit' className='delBtn' style={{display:props.delBtn}}>삭제</button>
              </form>
            </div>
            <div className='reviewPostText'>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            </div>
        </div>

    </>
  )
}

export default ReviewPost