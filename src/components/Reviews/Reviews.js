// src/components/Reviews/Reviews.js
import React from 'react';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>
              <strong>{review.author}</strong>
            </p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
