import React from 'react';
import logo from '../../Assets/Hero/Logo.png';
import heroText from '../../Assets/Hero/Hero Text.png';
import "./TopSeparator.scss";

function TopSeparator(){
    return(
        <section className="top_separator_section">
            <div className="logo_container">
                <img src={logo} alt="logo" />
                <img src={heroText} alt="los angeles mountains" className="hero_text" />
            </div>
            <div>
                <a href="#" className="top_links">01. History</a>
                <a href="#" className="top_links">02. Team</a>
            </div>
        </section>

    );
}

export default TopSeparator;
