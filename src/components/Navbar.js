import "./NavbarStyles.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 100) {
                setColor(true);
            } else {
                setColor(false);
            }
        };
        // Attach the callback after the component mounts
        window.addEventListener("scroll", changeColor);
        // Detach the callback before the component unmounts
        return () => window.removeEventListener("scroll", changeColor);
    }, [])
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1 className="text-[25px]">MY PORTFOLIO</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>

            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}


            </div>
        </div>


    )
}

export default Navbar

