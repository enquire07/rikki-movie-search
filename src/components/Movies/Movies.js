// src/components/Movies/Movies.js
// import React, { useState } from 'react';
// import { searchMovies } from '../../services/api';
// import { Link } from 'react-router-dom';
// import styles from './Movies.module.css';

// const Movies = () => {
//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);

//   const handleSearch = e => {
//     e.preventDefault();
//     searchMovies(query).then(setMovies);
//   };

//   return (
//     <div className={styles.movies}>
//       <h1>Movie Search</h1>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={query}
//           onChange={e => setQuery(e.target.value)}
//           placeholder="Search for a movie"
//         />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {movies.map(movie => (
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Movies;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { searchMovies } from '../../services/api';
// import styles from './Movies.module.css';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [query, setQuery] = useState('');

//   const handleSearch = async e => {
//     e.preventDefault();
//     const searchedMovies = await searchMovies(query);
//     setMovies(searchedMovies);
//   };

//   return (
//     <div className={styles.movies}>
//       <h1>Search Movies</h1>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={query}
//           onChange={e => setQuery(e.target.value)}
//           placeholder="Search for a movie..."
//           className={styles.searchInput}
//         />
//         <button type="submit" className={styles.searchButton}>
//           Search
//         </button>
//       </form>
//       <ul>
//         {movies.map(movie => (
//           <li key={movie.id} className={styles.movieItem}>
//             <Link to={`/movies/${movie.id}`}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                 alt={movie.title}
//                 className={styles.thumbnail}
//               />
//               <h2>{movie.title}</h2>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Movies;
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
          placeholder="Search for a movie..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className={styles.movieThumbnail}
              />
              <p className={styles.movieTitle}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
