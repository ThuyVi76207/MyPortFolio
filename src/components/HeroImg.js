import "./HeroImgStyles.css"

import React from "react";
import IntroImg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom"
const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" 
                src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <h1>Introduction</h1>
                <p>Welcome to my website. My name is Vi. I'm a Senior Student with a major in information technology at Ho Chi Minh city Open University. Web programming is my favorite. 
Currently I am trying to learn both frontend and backend so that I can be a fullstack web developer.</p>
                
                <div className="btn-content">
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg