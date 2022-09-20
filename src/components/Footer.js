import "./FooterStyles.css"
import React from "react";
import { FaCopyright, FaFacebook, FaGithub, FaHome, FaMailBulk, FaPhone } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>Nguyen Kiem Street, Ward 3, District Go Vap, Ho Chi Minh city.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                            0859.500.644
                        </h4>     
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                            thuyvy76207@gmail.com
                        </h4>     
                    </div>
                    
                </div>
                <div className="right">
                    <div className="social">
                        <a href="https://www.facebook.com/ThuyVi76207"><FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/></a>
                        <a href="https://github.com/ThuyVi76207"><FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/></a>
                        
                        
                        <div className="copyright-footer"><FaCopyright size={15} style={{color: "#fff", marginRight: "5px"}}/>2022 Copyright by Nguyen Thi Thuy Vi</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer