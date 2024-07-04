// src/components/Movies/Movies.js
import React, { useState } from 'react';
import { searchMovies } from '../../services/api';
import { Link } from 'react-router-dom';
import styles from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = e => {
    e.preventDefault();
    searchMovies(query).then(setMovies);
  };

  return (
    <div className={styles.movies}>
      <h1>Movie Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for a movie"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
