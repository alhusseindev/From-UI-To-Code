import React, {useState} from 'react';
import firstCarouselImage from '../../Assets/Carousel/Group 8.png';
import secondCarouselImage from '../../Assets/Carousel/Group 8 copy.png';
import thirdCarouselImage from '../../Assets/Carousel/Group 10.png';
import fourthCarouselImage from '../../Assets/Carousel/Group 10 copy.png';
import './MiddleBanner.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';


function MiddleBanner(){

    const [image, setImage] = useState("image1");

    return(
        <section className="middle_banner">
            <div className="middle_banner_top">
                <div className="middle_banner_text">
                    <h2 className="section_header_text" id="one">01.</h2>
                    <h4 className="section_header_text" id="two">History</h4>
                </div>
                <p className="section_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

             <div className="slideshow">
                 <img src={thirdCarouselImage} alt="carousel_image" className="carousel_image" />
                 <img src={firstCarouselImage} alt="carousel_image" className="carousel_image"  />
                 <img src={fourthCarouselImage} alt="carousel_image" className="carousel_image"  />
                 <img src={secondCarouselImage} alt="carousel_image" className="carousel_image" />
             </div>


        </section>

    );
}

export default MiddleBanner;
