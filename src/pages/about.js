import './css/about.css';
import './css/img.css'
//parallax images
import BG_1 from "./Img/parallax/1.png";
import BG_2 from "./Img/parallax/2.png";
import BG_3 from "./Img/parallax/3.png";
import BG_4 from "./Img/parallax/4.png";
import BG_5 from "./Img/parallax/5.png";
import BG_6 from "./Img/parallax/6.png";
import BG_7 from "./Img/parallax/7.png";
import BG_8 from "./Img/parallax/8.png";
//Link Routes
import { Link } from "react-router-dom";
function About (){
    return (
        <body>
            <img className="about-img1" src={BG_1} alt="gradient 1"/>
            <div className="header-container border-slide">
                <h1 className="about-h1">
                    PORTFOLIO
                    <p className="about-h1-p">
                        ILLUSTRATOR | 2D GAME ARTIST | DESIGN
                    </p>
                </h1>
            </div>
            <img className="about-img2" src={BG_2} alt="girl shadow"/>
            <img className="about-img3" src={BG_3} alt="girl"/>
            <div className="about-container">
                <Link className={"nav-color"} to="/portfolio">
                    <div className="about-me border-slide-about">
                        <h4 className="about-me-h4">
                        Senior Game Dev Student
                        </h4>
                        <p className="about-p">
                            Year 2025
                        </p>
                    </div>
                </Link>
                <Link className={"nav-color"} to="/portfolio">
                    <div className="about-me border-slide-about">
                        <h4 className="about-me-h4">
                            About
                        </h4>
                        <p className="about-p">
                            To showcase my passion for code & art.
                        </p>
                    </div>
                </Link>
            </div>
            <img className="about-img4" src={BG_4} alt="gradient 2"/>
            <img className="about-img5" src={BG_5} alt="multiply leaf shadow"/>
            <img className="about-img6" src={BG_6} alt="color-dodge leaf shadow"/>
            <img className="about-img7" src={BG_7} alt="normal leaf shadow"/>
            <img className="about-img8" src={BG_8} alt="color-dodge light"/>
        </body>
    );
};

export default About;