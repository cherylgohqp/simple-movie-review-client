import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";

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
    <div>
      <h1>Movies List</h1>
      <SearchBar
        value={searchResults}
        onChange={handleSearchInputChange}
        placeholder={"Search Movie Title..."}
      />
      {filteredMovies.map((movie) => {
        return <li key={movie.title}>{movie.title}</li>;
      })}
    </div>
  );
};

export default MoviesList;
