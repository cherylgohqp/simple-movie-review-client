import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MovieCard from "./MovieCard";
import "./MoviesList.css";

const MoviesList = (movies) => {
  const [searchResults, setSearchResults] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

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

  useEffect(() => {
    setFilteredMovies(movies["movies"].filter(matchFilters));
  }, [matchFilters, movies]);

  return (
    <div className="landing-page-wrapper">
      <h1>Movies Catalogue</h1>
      <div className="search-wrapper">
        <SearchBar
          value={searchResults}
          onChange={handleSearchInputChange}
          placeholder={"Search Movie Title..."}
        />
      </div>
      <div className="content-wrapper">
        <div className="movies-cards-grid">
          {filteredMovies.map((movie) => {
            return (
              // <div>
              <MovieCard movie={movie} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
