import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/navheader/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try{
      const response = await api.get('/api/v1/movies');
      setMovies(response.data);
    }
    catch(error){
      console.log(error);
    }
  }

  //get a single movie
  const getMovieData = async (imdbId) => {
    try{
      const response = await api.get(`/api/v1/movies/${imdbId}`);
      const singleMovie = response.data;
      setSingleMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  },[]);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route index element={<Home movies={movies}/>}></Route> {/* this is the index route */}
        <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
        <Route path='/Reviews/:imdbId' element={<Reviews movie={singleMovie} getMovieData={getMovieData} reviews={reviews} setReviews={setReviews}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
