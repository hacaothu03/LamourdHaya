import React from "react";
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW COLLECTIONS</h2>
             <div>
               
                <p>Threads of Joy,</p>
                <p>Stitches of Art</p>
             </div>
             <div className="hero-latest-btn">
                <div>Discover now</div>
                
             </div>
        </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>

    )
}

export default Hero