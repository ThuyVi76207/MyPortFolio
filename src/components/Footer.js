import "./FooterStyles.css";
import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="item-contact">
                        <i className="text-[#fff] mr-2 text-[20px]">
                            <ion-icon name="home-outline"></ion-icon>
                        </i>

                        <div>
                            <p>Nguyen Kiem Street, Ward 3, District Go Vap, Ho Chi Minh city.</p>
                        </div>
                    </div>
                    <div className="item-contact">
                        <i className="text-[#fff] mr-2 text-[20px]">
                            <ion-icon name="call-outline"></ion-icon>
                        </i>

                        <div>
                            <p>0859.500.644</p>
                        </div>
                    </div>
                    <div className="item-contact">
                        <i className="text-[#fff] mr-2 text-[20px]">
                            <ion-icon name="mail-outline"></ion-icon>
                        </i>

                        <div>
                            <p>thuyvy76207@gmail.com</p>
                        </div>
                    </div>

                </div>
                <div className="right">
                    <div className="social">
                        <a href="https://www.facebook.com/ThuyVi76207" className="mr-1">
                            <i className="text-[#fff] text-[35px]">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </i>
                        </a>
                        <a href="https://github.com/ThuyVi76207" className="mr-1">
                            <i className="text-[#fff] text-[35px]">
                                <ion-icon name="logo-github"></ion-icon>
                            </i>
                        </a>
                        <a href="https://www.instagram.com/thuyvi_rua02/" className="mr-1">
                            <i className="text-[#fff] text-[35px]">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </i>
                        </a>
                        <div className="copyright-footer"><trong>©</trong> {" "}2022 Copyright by Nguyen Thi Thuy Vi</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer