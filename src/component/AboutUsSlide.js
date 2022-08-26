import React, { useState, Component } from "react";
import Slider from "react-slick";
import { slideList } from "./SlideData";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./AboutUsSlide.css"

export default class AboutUsSlide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div id="aboutUsSlide">
        <Slider {...settings}>
          <div className="slideImg">
            <img src="/images/AUSlide1.jpg" alt="" />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide2.jpg" alt="" />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide3.jpg" alt="" />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide4.jpg" alt="" />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide5.jpg" alt="" />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide6.jpg" alt="" />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide7.jpg" alt="" />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide8.jpg" alt="" />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide9.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}