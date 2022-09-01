import React from 'react';
import './Promotion.css';

const PromotionPost = ({post}) => {
  return (
    <div className='slideImg'>
        <div style={{width:`100%`, height:`430px`,overflow:`hidden`}}>
            <img src={post.imgsrc1} alt='' />
        </div>
        <h4 className='postTitle'>{post.title}</h4>
        <p className='postBody'>
            {post.body}
        </p>
        <p className='postPeriod'>{post.period}</p>
    </div>
  )
}

export default PromotionPost