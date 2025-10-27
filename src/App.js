import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import NotFound from './components/notFound/NotFound';
function App() {
  const [movies, setMovies] = useState([]); 
  const [movie, setMovie] = useState(); 
  const [review, setReviews] = useState(); 



  const getMovies = async () => {
  try {
    console.log("FETCHING MOVIES...");  
    const response = await api.get("/api/v1/movies");
    console.log("RESPONSE:", response); 
    setMovies(response.data);
  } catch (err) {
    console.log("ERROR:", err);  
  }
};

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get('/api/v1/movies/${movieId}');
      const singleMovie = response.data;
      setMovies(singleMovie);

      setReviews(singleMovie.reviews);
    } catch (error) {
      
    }
  }
  useEffect(() => {
  console.log("useEffect RUNNING"); 
  getMovies();
}, []);


  return (
    <div className="App">
      <Header/>
      <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home movies={movies} />} /> 
    <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
    <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
    <Route path="*" element = {<NotFound/>}></Route>
  </Route>
</Routes>


    </div>
  );
}

export default App;
