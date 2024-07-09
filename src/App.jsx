// import React, { Suspense, lazy } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import styles from './App.module.css';

// const Home = lazy(() => import('./components/Home/Home'));
// const Movies = lazy(() => import('./components/Movies/Movies'));
// const MovieDetails = lazy(() =>
//   import('./components/MovieDetails/MovieDetails')
// );

// const App = () => {
//   return (
//     <div className={styles.app}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/movies/:movieId/*" element={<MovieDetails />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };

// export default App;
import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import styles from './App.module.css';

const Home = lazy(() => import('./components/Home/Home'));
const Movies = lazy(() => import('./components/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('./components/MovieDetails/MovieDetails')
);

const App = () => {
  return (
    <div className={styles.app}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
