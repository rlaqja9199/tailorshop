import React, { useEffect, useState } from 'react'
import Footer from '../include/Footer'
import Map from './Map'

const Directions = () => {
    const [footerOn, setFooterOn] = useState("-50vh");

    setTimeout(() => {
        setFooterOn(0);
    }, 900);
  return (
    <div id='directionsPage'>
        <div className='directionLeftPage'>
        <div id='shopImg'>
            <img src="/images/shopImg.jpg" alt='' id='shopImgDetail' />
        </div>
        <Map />
        </div>
        <div className='directionRightPage'>
        <h2>Directions</h2>
        <div id='textBox'>
            <p>Address.<span><br/>전라남도 순천시 왕지5길 54 1층<br/>전라남도 순천시 왕지동 855-10 1층</span></p>
            <p>TEL. <span>061-722-7983</span><br/>M. <span>010-1234-5678</span></p>
            <p>Open. <span>11:00</span><br/>Close. <span>20:00</span></p>
            <p>Closed. <span>화요일</span></p>
        </div>
        </div>
        <div className='footer' style={{bottom: footerOn}}>
            <Footer />
        </div>
  </div>
  )
}

export default Directions