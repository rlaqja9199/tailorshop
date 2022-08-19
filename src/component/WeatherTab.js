import React, { Component } from 'react';
import axios from 'axios';
import './WeatherTab.css';

class WeatherTab extends Component {
    // 상태 변수 정의
    constructor(props) {
        super(props);
        this.state = {
            temp: 0, 
            desc: '', 
            icon: '', 
            loading: true,
            wOpacity: 0,
        }
    }
    // 컴포넌트 생성 후 날씨 정보 조회
    componentDidMount() {
        const cityName = 'Seoul';
        const apiKey = `85a232c1e5c9abbbed850094bfc214eb`;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        // fetch() 함수를 이용
        // fetch(url)
        //     .then(response => response.json())
        //     .then(responseData => {
        //         this.setState({
        //             temp: responseData.main.temp,
        //             desc: responseData.weather[0].description,
        //             icon: responseData.weather[0].icon,
        //             loading: false
        //         });
        //     })
        //     .catch(error => console.log(error));

        // axios 라이브러리 이용
        axios.get(url)
            .then(responseData => {
                const data = responseData.data;
                this.setState({
                    temp: data.main.temp,
                    desc: data.weather[0].description,
                    icon: data.weather[0].icon,
                    loading: false
                });
            })
            .catch(error => console.log(error));

    }
    // 날씨 정보 출력
    render() {
        const imgSrc = `http://openweathermap.com/img/w/${this.state.icon}.png`;
        const dateInfo = new Date();
        const year = dateInfo.getFullYear();
        const month = dateInfo.getMonth()+1;
        const day = dateInfo.getDate();


        setTimeout(() => {
            this.setState({wOpacity:1})
        }, 5000);

        if (this.state.loading) {
            return <p>Loading</p>;
        } else {
            return (
                <div id='weatherTab' style={{opacity:this.state.wOpacity}}>
                    <h4>Today's Weather</h4>
                    <div id='weatherInfo'>
                        <p>{year} / {month} / {day} ·</p>
                        <img src={imgSrc}/>
                        <p>· {(this.state.temp-272.85).toFixed(1)}℃</p>
                    </div>
                </div>
            );
        }
    }
}

export default WeatherTab;