import React from 'react'
import './Main.css'
import MainSlide from './MainSlide'
import WeatherTab from './WeatherTab'

const Main = () => {
  return (
    <div id='main'>
        <MainSlide />
        <div id='slideText'>
            <h3>BARON</h3>
            <p>Own your fit</p>
        </div>
        <WeatherTab />
    </div>
  )
}

export default Main