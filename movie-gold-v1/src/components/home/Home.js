import React from "react";
import Hero from "../hero/CarouselMovies";

const Home = (movies) => {
    console.log("home movies", movies.movies);
    return (
        <Hero movies={movies.movies} />
    )
}

export default Home;