import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav>
            <ul>
                <li className="Nav-elements">
                    <Link className={"nav-color"} to="/">
                        Suri's Workshop
                    </Link>
                </li>
                <li>
                    <Link className={"nav-color"} to="/art">
                        Artwork
                    </Link>
                </li>
                <li>
                    <Link className={"nav-color"} to="/game">
                        Games
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;