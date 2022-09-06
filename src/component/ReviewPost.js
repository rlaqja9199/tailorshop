import React, { useEffect, useRef } from 'react'

const ReviewPost = (props) => {
    const post = props.post

  return (
    <>
        <div className='postList'>
            <div className='reviewPostImg'>
            <img src={post.imgsrc} alt='' />
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