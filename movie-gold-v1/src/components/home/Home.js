import React from "react";
import CarouselMovies from "../hero/CarouselMovies";

const Home = (movies) => {
    console.log("home movies", movies.movies);
    return (
        <CarouselMovies movies={movies.movies} />
    )
}

export default Home;