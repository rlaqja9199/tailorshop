import React, { Component } from "react";
import Slider from "react-slick";
import { slideList } from "./SlideData";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./AboutUsSlide.css"

export default class AboutUsSlide extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  state = {
    detailSrc: '',
    detailOn: 'none',
    linkIdNum: '',
    slidesToShow: 3,
  }
  componentDidMount() {
    const innerWidth = window.innerWidth;
    if(innerWidth>390){
      this.setState({
        slidesToShow: 3
      });
    }else{
      this.setState({
        slidesToShow: 1
      })
    }
  }
  render() {
    const {detailSrc, detailOn, linkIdNum, slidesToShow} = this.state;
    console.log("그리는중")
    
    const settings2 = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      className:'slider2'
    };
    console.log(settings2.autoplay)  
    

    //슬라이드이미지 클릭 확대
    const onClickImg = (e)=>{
      const imgLink = e.target.src;
      const linkArray = [...imgLink][36];
      let detailLink = '';
      console.log(imgLink);
      detailLink = imgLink;
      this.setState({detailSrc: detailLink, detailOn: 'block', linkIdNum: linkArray});
      this.pause();
    };
    const detailImgOff = ()=>{
      this.setState({detailOn: 'none'})
      this.play();
      
    };
    return (
      <div id="aboutUsSlide">
        <div id="slideDetail" style={{display:`${detailOn}`}}>
          <div id="detailBg"></div>
          <div id="aboutSlideDetail" onClick={detailImgOff}>
            <img src={detailSrc} alt="" id={`detail${linkIdNum}`} />
          </div>
        </div>
        <Slider ref={slider => (this.slider = slider)} {...settings2}>
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
            <img src="/images/AUSlide6.jpg" alt="" onClick={onClickImg} style={{position: 'relative', top:'-25%'}} />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide7.jpg" alt="" onClick={onClickImg} style={{position: 'relative', top:'-20%'}}  />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide8.jpg" alt="" onClick={onClickImg} />
          </div>
          <div className="slideImg">
            <img src="/images/AUSlide9.jpg" alt="" onClick={onClickImg} style={{position: 'relative', top:'-15%'}} />
          </div>
        </Slider>
      </div>
    );
  }
}