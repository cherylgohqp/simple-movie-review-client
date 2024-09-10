import React from "react";
import CarouselMovies from "../hero/CarouselMovies";

const Home = (movies) => {
    // console.log("isloading in Home", isLoading);
    console.log("movies in home component", movies);
    return (
        <CarouselMovies movies={movies.movies} isLoading={movies.isLoading}/>
    )
}

export default Home;