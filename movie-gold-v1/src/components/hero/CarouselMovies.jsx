import React from "react";
import './CarouselMovies.css';
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
        <div className='movie-carousel-container'>
            {movies.isLoading ? (
                <div className="skeleton-carousel">
                    <Paper style={{ backgroundColor: '#414040' }} className="skeleton-paper">
                        <Skeleton sx={{ bgcolor: '#333' }} variant="rectangular" className="skeleton-backdrop" animation="wave" height={300}/>
                        <div className="skeleton-details">
                            <Skeleton sx={{ bgcolor: '#333' }} variant="rounded" className="skeleton-avatar" animation="wave" height={250} width={"30%"} />
                            <div className="skeleton-texts-container">
                                
                            <Skeleton sx={{ bgcolor: '#333' }} variant="text" className="skeleton-title" animation="wave" height={50} width={"90%"} />
                            <Skeleton sx={{ bgcolor: '#333' }} variant="text" className="skeleton-subtitle" animation="wave" height={50} width={"60%"}/>
                            </div>
                        </div>
                    </Paper>
            </div>):(<Carousel>
                {
                    movies && movies['movies'].length > 0 ? (movies['movies'].map((movie) => {
                        return (
                            <Paper key={movie.imdbId}>
                        <div className = 'movie-card-container'>
                            <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={movie.poster} alt="" />
                                    </div>
                                    <div className="movie-title">
                                        <h4>{movie.title}</h4>
                                    </div>
                                    <div className="movie-buttons-container">
                                        {/* note: trailerLink last 11 characters gives the youtube video id */}
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(movie.imdbId)} >Reviews</Button>
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
        // <div>
        //     <Carousel>
        //         {movies && movies.length > 0 ? movies.map((movie) => (
        //             <Paper>
        //                 <div className="movie-card-component">
        //                     <div className="movie-card">
        //                         <div className="movie-poster">
        //                             <img src={movie.poster} alt={movie.title} />
        //                         </div>
        //                         <div className="movie-title">
        //                             <h4>{movie.title}</h4>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </Paper>
        //         )): null}
        //     </Carousel>
        // </div>
    )
}

export default CarouselMovies;