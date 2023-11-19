import "./banner.css";
import BannerImg from "../../../assets/Banner.jpg"

const Banner = () => {
  return <div className="movie-banner">
      <img src={BannerImg}/>
  </div>;
};

export default Banner;