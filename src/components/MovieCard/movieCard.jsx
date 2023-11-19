import "./movieCard.css";

const MovieCard = ({ item }) => {
    return (
        <div className="movie-card">
            <div className="movie-poster"><img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}` } /></div>
            {/* <div className="movie-rate"></div> */}
            <div className="movie-details">
                <h4 className="movie-title">{item.title}</h4>
                <p className="movie-date">{item.release_date}</p>
            </div>
        </div>
    );
};

export default MovieCard;