import "./header.css"
import Logo from "../../../assets/TMDB logo.svg"

const MainHeader = () => {
    return (
        <header>
            <div className="container content">
                <img src={Logo} />
                <ul>
                    <li>Movies</li>
                    <li>TV Shows</li>
                    <li>Actors</li>
                </ul>
            </div>
        </header>
    );
};

export default MainHeader;