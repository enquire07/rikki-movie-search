import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
} from '../../services/api';
import styles from './MovieDetails.module.css';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
    fetchMovieCredits(movieId).then(setCast);
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div className={styles.movieDetails}>
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>

          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="cast" element={<Cast cast={cast} />} />
              <Route path="reviews" element={<Reviews reviews={reviews} />} />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
