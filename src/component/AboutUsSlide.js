import React, { useState, Component } from "react";
import Slider from "react-slick";
import { slideList } from "./SlideData";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./AboutUsSlide.css"

export default class AboutUsSlide extends Component {
  render() {
    let slideAuto = true;
    let a = '';
    const settings2 = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: slideAuto,
      autoplaySpeed: 3000,
      className:'slider2'
    };
    

    //슬라이드이미지 클릭 확대
    const onClickImg = (e)=>{
      const imgLink = e.target.src;
      const linkArray = [...imgLink][36];
      console.log(imgLink);
      console.log(linkArray);
      a = imgLink;
      return a
    }
    return (
      <div id="aboutUsSlide">
        <div id="slideDetail">
          <img src={a} alt="" />
        </div>
        <Slider {...settings2}>
          <div className="slideImg">
            <img src="/images/AUSlide1.jpg" alt="" onClick={onClickImg} />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide2.jpg" alt="" onClick={onClickImg} />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide3.jpg" alt="" onClick={onClickImg} />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide4.jpg" alt="" onClick={onClickImg} />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide5.jpg" alt="" onClick={onClickImg} />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide6.jpg" alt="" onClick={onClickImg} />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide7.jpg" alt="" onClick={onClickImg} />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide8.jpg" alt="" onClick={onClickImg} />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide9.jpg" alt="" onClick={onClickImg} />
          </div>
        </Slider>
      </div>
    );
  }
}