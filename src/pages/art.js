import './css/art.css';
import BG_1 from "./Img/parallax/1.png";
import BG_4 from "./Img/parallax/4.png";
import BG_6 from "./Img/parallax/6.png";
import BG_8 from "./Img/parallax/8.png";

function Artwork() {
    return(
        <body>
            {/* gallery container */}
            <img className="about-img1" src={BG_1} alt="gradient 1"/>
            <div className="gal-con"> 
                <div className="gal-">
                    {/* img
                    link */}
                    test
                </div>
                <div className="gal-">
                    {/* img
                    link */}
                </div>
                <div className="gal-">
                    {/* img
                    link */}
                </div>
            </div>
            <img className="about-img4 slide-left" src={BG_4} alt="gradient 2"/>
            <img className="about-img6" src={BG_6} alt="color-dodge leaf shadow"/>
            <img className="about-img8" src={BG_8} alt="color-dodge light"/>
        </body>
    );
};

export default Artwork;