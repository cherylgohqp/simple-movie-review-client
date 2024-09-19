import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MovieCard from "./MovieCard";
import styles from "./MoviesList.module.css";
import {useNavigate} from "react-router-dom";

const MoviesList = (movies) => {
  const [searchResults, setSearchResults] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const navigate = useNavigate();

  const matchFilters = useCallback(
    (movie) => {
      console.log("movie in match filter", movie);
      const matchesSearchQuery = movie.title
        .toLowerCase()
        .includes(searchResults.toLowerCase());
      return matchesSearchQuery;
    },
    [searchResults]
  );

  const handleSearchInputChange = (event) => {
    setSearchResults(event.target.value);
  };

  const onCardClick = (movieId) => {
    navigate(`/Reviews/${movieId}`);
}

  useEffect(() => {
    setFilteredMovies(movies["movies"].filter(matchFilters));
    console.log("movies loading? ", movies.isLoading);
  }, [matchFilters, movies]);

  return (
    <div className={styles["landing-page-wrapper"]}>
      <div className={styles["movie-list-header"]}>Movies Catalogue</div>
      <div className={styles["search-wrapper"]}>
        <SearchBar
          value={searchResults}
          onChange={handleSearchInputChange}
          placeholder={"Search Movie Title..."}
        />
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={styles["movies-cards-grid"]}>
          {filteredMovies.map((movie) => {
            return (
              // <div>
              <MovieCard movie={movie} onClick={()=> onCardClick(movie.imdbId)}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
