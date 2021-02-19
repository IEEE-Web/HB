import React from 'react'
import "./slider.css"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import vid from "./assets/vid.mp4"
import {messages} from "./messages"
export default function Slider() {
    const slider = (
        <AwesomeSlider animation="cubeAnimation">
                {
                    messages.map(message=>{
                        return(
                            <div className="allSlider" key={message.id}>
                                <div className="container">
                                    <div className="container-content" dir="rtl">
                                        <p>
                                        {message.message}
                                        </p>

                                    </div>
                                </div>
          
                                    <h2>{message.nameSender}</h2>
                             </div>
                        )
                    })
                }
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
