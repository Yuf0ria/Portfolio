import './css/game.css';
//parralax effects
import BG_1 from "./Img/parallax/1.png";
import BG_6 from "./Img/parallax/6.png";
import BG_8 from "./Img/parallax/8.png";
//Game Images
import Lines from "./Img/GameCovers/Lines.png";
import NES from "./Img/GameCovers/NES.png";
import Sheep from "./Img/GameCovers/Sheep.png";
function Games () {
    return (
        <body>
            {/* gallery container */}
            <img className="about-img1" src={BG_1} alt="gradient 1"/>
            <div className="gallery"> 
                <div className="gal-con">
                    <img src={Lines}></img>
                    <h5 className='gal-h5'>
                        Year 2024
                    </h5>
                    <h6 className='gal-h6'>
                        2D Animator
                    </h6>
                    <p className='gal-p'>
                        Using Frame-By-Frame Animation
                    </p>
                </div>
                <div className="gal-con">
                    <img src={Sheep}></img>
                    
                    <h5 className='gal-h5'>
                        End of Year 2024
                    </h5>
                    <h6 className='gal-h6'>
                        Developer
                    </h6>
                    <p className='gal-p'>
                        Using RpgMaker, JS & ruby
                    </p>
                </div>
                <div className="gal-con">
                    <img src={NES}></img>
                    <h5 className='gal-h5'>
                        Year 2025
                    </h5>
                    <h6 className='gal-h6'>
                        Designer & Programmer
                    </h6>
                    <p className='gal-p'>
                        Unity C#
                    </p>
                </div>
            </div>
            <img className="about-img6" src={BG_6} alt="color-dodge leaf shadow"/>
            <img className="about-img8" src={BG_8} alt="color-dodge light"/>
        </body>
    );
};

export default Games;