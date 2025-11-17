import "./css/art.css";
import BG_1 from "./Img/parallax/1.png";
import BG_6 from "./Img/parallax/6.png";
import BG_8 from "./Img/parallax/8.png";
import Front from "./Img/Something is Happening.png";

function Artwork() {
    return(
        <body>
            {/* gallery container */}
            <img className="about-img1" src={BG_1} alt="gradient 1"/>
            <div className="art-con"> 
                <div className="art-">
                    {/* img
                    link */}
                </div>
                <div className="art-">
                    {/* img
                    link */}
                </div>
                <div className="art-">
                    {/* img
                    link */}
                </div>
            </div>
            <img className="about-img6" src={BG_6} alt="color-dodge leaf shadow"/>
            <img className="about-img8" src={BG_8} alt="color-dodge light"/>
            <img className="front" src={Front} alt="gradient 1"/>
        </body>
    );
};

export default Artwork;