import React from 'react'
import "./slider.css"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Player } from  "video-react";
import vid from "./assets/vid.mp4"

import img from "./assets/mm.jpg"
export default function Slider() {
    const slider = (
        <AwesomeSlider animation="cubeAnimation">
            <div className="sliderContainer">
          <div className="allSlider" >
              <div className="containerr">
              <div className="container-black" dir="rtl">
            
              </div>
          </div>
          
              <h2>Moataz Alaa</h2>
          </div>
          </div>
          <div className="allSlider">
              <div className="containerr">
              <div className="container-black_img">
                
              </div>
          </div>
              
          </div>
          <div className="allSlider">
              <div className="containerr">
              <div className="container-black">
              1
              </div>
          </div>
              <h2>Moataz Alaa</h2>
          </div>
          <div className="allSlider">
              <div className="containerr">
              <div className="container-black">
              1
              </div>
          </div>
              <h2>Moataz Alaa</h2>
          </div>
        </AwesomeSlider>
      );
    return (
        <div>
        <div className="slider">
            {slider}
        </div>
        <video width="100%" controls>
            <source src={vid} type="video/mp4"/>
            Your browser does not support HTML video.
            </video>
        </div>
    )
}
