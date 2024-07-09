//src/components/Home/Home.js
import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  // return (
  //   <div className={styles.home}>
  //     <h1>Trending Movies</h1>
  //     <ul>
  //       {movies.map(movie => (
  //         <li key={movie.id}>
  //           <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  return (
    <div className={styles.home}>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className={styles.thumbnail}
              />
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getTrendingMovies } from '../../services/api';
// import styles from './Home.module.css';

// const Home = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchTrendingMovies = async () => {
//       const trendingMovies = await getTrendingMovies();
//       setMovies(trendingMovies);
//     };

//       fetchTrendingMovies();
//     }, []);

//     return (
//       <div className={styles.home}>
//         <h1>Trending Movies</h1>
//         <ul>
//           {movies.map(movie => (
//             <li key={movie.id} className={styles.movieItem}>
//               <Link to={`/movies/${movie.id}`}>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                   alt={movie.title}
//                   className={styles.thumbnail}
//                 />
//                 <h2>{movie.title}</h2>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

// export default Home;
