// src/components/Cast/Cast.js
import React from 'react';
import styles from './Cast.module.css';

const Cast = ({ cast }) => {
  return (
    <div className={styles.cast}>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            <p>
              {actor.name} as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
