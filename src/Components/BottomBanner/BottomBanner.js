import React, {useState} from 'react';
import './BottomBanner.scss';
import logo from '../../Assets/Footer/Logo.png';

function BottomBanner(){

    const [image, setImage] = useState("MOUNTAIN1");

    let backgroundImage = () =>{
        if(image === "MOUNTAIN1") {
            return (
                <div className="first_background_container">
                    <div className="container_child_image">
                        <h2 className="schedule">SCHEDULE</h2>
                        <br/>
                        <div className="timing">
                            <div className="timing_time">
                                <p className="timing_paragraph">25 Nov 2016</p>
                                <p>Vestibulum viverra</p>
                            </div>
                            <div className="timing_time">
                                <p className="timing_paragraph">28 Nov 2016</p>
                                <p>Vestibulum viverra</p>
                            </div>
                            <br/>
                            <div className="timing_time">
                                <p className="timing_paragraph">18 Dec 2016</p>
                                <p>Vestibulum viverra</p>
                            </div>
                            <br/>
                            <div className="timing_time" id="last_one">
                                <p className="timing_paragraph">7 Jan 2017</p>
                                <p>Vestibulum viverra</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div className="second_background_container">
                    <div className="container_child_image">
                        <h2 className="schedule">SCHEDULE</h2>
                        <br/>
                        <div className="timing">
                            <div className="timing_time">
                                <p className="timing_paragraph">25 Nov 2016</p>
                                <p>Vestibulum viverra</p>
                            </div>
                            <div className="timing_time">
                                <p className="timing_paragraph">28 Nov 2016</p>
                                <p>Vestibulum viverra</p>
                            </div>
                            <br/>
                            <div className="timing_time">
                                <p className="timing_paragraph">18 Dec 2016</p>
                                <p>Vestibulum viverra</p>
                            </div>
                            <br/>
                            <div className="timing_time" id="last_one">
                                <p className="timing_paragraph">7 Jan 2017</p>
                                <p>Vestibulum viverra</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }


    return(
        <footer className="page_footer">
            <div className="bottom_banner">
                <div className="mountain_button" onClick={() => setImage("MOUNTAIN1")}>MOUNTAIN 1</div>
                <div className="mountain_button" onClick={() => setImage("MOUNTAIN2")}>MOUNTAIN 2</div>
            </div>
            {backgroundImage()}
            <div className="last_footer">
                <div className="last_footer_child">
                    <img src={logo} alt="logo" className="logo_img" />
                    <p className="copyright">COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
                </div>
            </div>

        </footer>

    );
}

export default BottomBanner;
