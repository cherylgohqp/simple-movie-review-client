import React from "react";
import CarouselMovies from "../hero/CarouselMovies";

const Home = (movies) => {
    return (
        <CarouselMovies movies={movies.movies} isLoading={movies.isLoading}/>
    )
}

export default Home;