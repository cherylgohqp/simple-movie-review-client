import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MovieCard from "./MovieCard";
import styles from "./MoviesList.module.css";
import {useNavigate} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import { Paper, Skeleton } from '@mui/material';
import { range } from "lodash";

const MoviesList = (movies) => {
  const [searchResults, setSearchResults] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const navigate = useNavigate();

  const matchFilters = useCallback(
    (movie) => {
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
  }, [matchFilters, movies]);

  return (
    <Container>

    {/* <div className={styles["landing-page-wrapper"]}> */}
      <h3 className={styles["movie-list-header"]}>Movies Catalogue</h3>
      <div className={styles["search-wrapper"]}>
        <SearchBar
          value={searchResults}
          onChange={handleSearchInputChange}
          placeholder={"Search Movie Title..."}
        />
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={styles["movies-cards-grid"]}>
          {(filteredMovies && filteredMovies.length) ? (filteredMovies.map((movie,index) => {
            return (
              <MovieCard key={`${movie.imdbId}-${index}`} movie={movie} onClick={()=> onCardClick(movie.imdbId)}/>
            );
          })) : (
            range(15).map((count) => <Skeleton sx={{ bgcolor: '#333' }} variant="rounded" className={styles["skeleton-movie-card"]} animation="wave" width={"100%"} />)
          )
          }
        </div>
      </div>
    {/* </div> */}
    </Container>
  );
};

export default MoviesList;
