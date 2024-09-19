import React from "react";
import styles from "./CarouselMovies.module.css";
import Carousel from 'react-material-ui-carousel';
import { Paper, Skeleton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, useNavigate} from "react-router-dom";
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const CarouselMovies = (movies) => {
    const navigate = useNavigate();
    const reviews = (movieId) => {
        navigate(`/Reviews/${movieId}`);
    }

    return (
        <div className={styles["movie-carousel-container"]}>
            {movies.isLoading ? (
                <div className={styles["skeleton-carousel"]}>
                    <Paper style={{ backgroundColor: '#414040' }} className={styles["skeleton-paper"]}>
                        <Skeleton sx={{ bgcolor: '#333' }} variant="rectangular" className={styles["skeleton-backdrop"]} animation="wave" height={300}/>
                        <div className={styles["skeleton-details"]}>
                            <Skeleton sx={{ bgcolor: '#333' }} variant="rounded" className={styles["skeleton-avatar"]} animation="wave" height={250} width={"30%"} />
                            <div className={styles["skeleton-texts-container"]}>
                                
                            <Skeleton sx={{ bgcolor: '#333' }} variant="text" className={styles["skeleton-title"]} animation="wave" height={50} width={"90%"} />
                            <Skeleton sx={{ bgcolor: '#333' }} variant="text" className={styles["skeleton-subtitle"]} animation="wave" height={50} width={"60%"}/>
                            </div>
                        </div>
                    </Paper>
            </div>):(<Carousel>
                {
                    movies && movies['movies'].length > 0 ? (movies['movies'].map((movie) => {
                        return (
                            <Paper key={movie.imdbId}>
                        <div className ={styles["movie-card-container"]}>
                            <div className={styles["movie-card"]} style={{"--img": `url(${movie.backdrops[0]})`}}>
                                <div className={styles["movie-detail"]}>
                                    <div className={styles["movie-poster"]}>
                                        <img src={movie.poster} alt="" />
                                    </div>
                                    <div className={styles["movie-title"]}>
                                        <h4>{movie.title}</h4>
                                    </div>
                                    <div className={styles["movie-buttons-container"]}>
                                        {/* note: trailerLink last 11 characters gives the youtube video id */}
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className={styles["play-button-icon-container"]}>
                                                <FontAwesomeIcon className={styles["play-button-icon"]}
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        <div className={styles["movie-review-button-container"]}>
                                            <Button className={styles["movie-review-button"]} variant ="info" onClick={() => reviews(movie.imdbId)} >Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                        )
                    })
                    ) : null}
            </Carousel>)}
        </div>
    )
}

export default CarouselMovies;