import React from 'react';
import logo from "../../Assets/Hero/Logo.png";
import heroText from "../../Assets/Hero/Hero Text.png";
import './TopHeader.scss';

function TopHeader(){
    return(
        <header className="top_header">
            <nav className="nav_bar">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <a href="#" className="top_links">01. History</a>
                    <a href="#" className="top_links">02. Team</a>
                </div>
            </nav>
            <div className="hero_text_container">
                <img src={heroText} alt="Los Angeles Mountains" />
            </div>
        </header>

    );
}

export default TopHeader;
