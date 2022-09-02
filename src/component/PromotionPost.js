import React from 'react';

const PromotionPost = (props) => {
  const post = props.post
  const onClick = (e)=>{
    console.log(post.id)
    props.setPostId(post.id)
  }
  return (
    <>
    <div className='slideImg'>
        <div style={{width:`100%`, height:`430px`,overflow:`hidden`}}>
            <img onClick={onClick} src={post.imgsrc1} alt='' />
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