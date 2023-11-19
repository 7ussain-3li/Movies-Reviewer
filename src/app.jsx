import MainHeader from "./components/Header/header";
import "./app.css"
import MovieCard from "./components/MovieCard/movieCard";
import Container from "./components/Container/container";
import Space from "./components/Space/space";
import { useEffect, useState } from "react";
import Banner from "./components/Banner/banner";
import SearchBox from "./components/Search/search";

const App = () => {
    const [movies,setMovies] = useState([]);

    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTNjZGVhYzE5YjlhNWMxNzU5MTNkMjkzODM2Zjk5ZSIsInN1YiI6IjY1NTI3ODAyZDRmZTA0MDBlMWIxYmE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1XVedQdHZv6FlvjxaJa4JxCApp9Vos0Ox3fn2zxinY'
        },
    };

    const getData = async () => {
        try {
            let resp = await fetch(url, options)
            let jsonData = await resp.json()
            setMovies(jsonData.results)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <MainHeader />
            <Container>
                <Banner />
                <Space height={24} />
                <SearchBox />
                <Space height={24} />
                <h3>Trending</h3>
                <Space height={24} />
                <div className="Movie-list">
                    {movies.map((el) => (
                        <MovieCard item={el} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default App;