import React from 'react'
import './Review.css'

const Review = () => {
  return (
    <div id='review'>
      <div id='reviewImg'>BARON</div>
      <div id='reviewPost'>
        <h3>Review</h3>
        <div id='reviewPostList'>
          <div id='reviewList1'>
            <div>
              <div className='reviewPostImg'>
                <img src='/images/review1.jpg' alt='' />
              </div>
              <div className='reviewPostText'>
                <h4></h4>
                <p></p>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div id='reviewList2'>

          </div>
          <div id='reviewList3'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Review