import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewform/ReviewForm';
import { Paper, Skeleton } from '@mui/material';
import React from 'react';
import styles from './Reviews.module.css';
import { range } from "lodash";

const Reviews = ({getMovieData,movie,reviews,setReviews, isLoading}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.imdbId; //this is the imdbid of the movie

    useEffect(()=>{
        getMovieData(movieId);
    },[movieId, reviews])

    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;

        try
        {
            const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});

            const updatedReviews = [...reviews, {body:rev.value}]; //updating data optimistically (ie. updating directly using the data that the user provided rather than the data that you're pushing to the database)
    
            rev.value = "";
    
            setReviews(updatedReviews); //update state
        }
        catch(err)
        {
            console.error(err);
        }
        



    }

  return (
    <Container >
        <Row>
            <Col><h3 style={{paddingTop:"16px"}}>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                {movie ? 
                <img key={movie?.imdbId} src={movie?.poster} alt="" className={styles["movie-poster"]} />
            : <Skeleton sx={{ bgcolor: '#333' }} variant="rounded" className={styles["skeleton-review-poster"]} animation="wave" width={"90%"} />    
            }
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                        isLoading ? (
                            // Display skeletons while loading
                            range(8).map((count) => (
                                <Skeleton key={count} sx={{ bgcolor: '#333' }} variant="text" animation="wave" width={"80%"} height={36} />
                            ))
                        ) : (
                            // If not loading, check for reviews
                            reviews && reviews.length > 0 ? (
                                reviews.map((r) => (
                                    <React.Fragment key={r._id}>
                                        <Row>
                                            <Col>{r.body}</Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <hr />
                                            </Col>
                                        </Row>
                                    </React.Fragment>
                                ))
                            ) : (
                                // Display message if no reviews
                                <Row>
                                    <Col className={styles["no-reviews"]}>No reviews yet.</Col>
                                </Row>
                            )
                        )
                    }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews