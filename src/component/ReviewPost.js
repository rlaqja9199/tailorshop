import axios from 'axios';
import React from 'react'
import { useCookies } from 'react-cookie';
import { API_URL } from './config/contansts'

const ReviewPost = (props) => {
    const post = props.post;
    const postId = post.id;
    const [cookies] = useCookies(['username']);

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
      axios.delete(`${API_URL}/reviewdel`,{
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
                <button name='postId' type='submit' className='delBtn' style={{display:cookies.username === post.username || 'admin'? props.delBtn : "none"}}>삭제</button>
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