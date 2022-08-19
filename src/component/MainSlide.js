import React, { useState } from "react";
import Slider from "react-slick";
import { slideList } from "./SlideData";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./MainSlide.css"


const MainSlide = () => {
    const [slideOpacity, setSlideOpacity] = useState(0);

    setTimeout(() => {
      setSlideOpacity(1);
    }, 4500);

    const settings = {
        dots: false,
        fade: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    };
  return (
    <div id="mainSlide" style={{opacity:slideOpacity}}>
        <Slider {...settings}>
            {slideList.map((item)=>(
                <div>
                    <img src={item.linkImg} alt='' />
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default MainSlide