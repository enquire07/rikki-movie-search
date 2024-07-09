// src/services/api.js
// import axios from 'axios';

// const API_KEY = 'f3915ecc527b8b3874ce087ec4108796';
// const BASE_URL = 'https://api.themoviedb.org/3';

// export const fetchTrendingMovies = async () => {
//   const response = await axios.get(
//     `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
//   );
//   return response.data.results;
// };

// export const searchMovies = async query => {
//   const response = await axios.get(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
//   );
//   return response.data.results;
// };

// export const fetchMovieDetails = async movieId => {
//   const response = await axios.get(
//     `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
//   );
//   return response.data;
// };

// export const fetchMovieCredits = async movieId => {
//   const response = await axios.get(
//     `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
//   );
//   return response.data.cast;
// };

// export const fetchMovieReviews = async movieId => {
//   const response = await axios.get(
//     `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
//   );
//   return response.data.results;
// };

//next
import axios from 'axios';

const API_KEY = 'f3915ecc527b8b3874ce087ec4108796';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async query => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const fetchMovieCredits = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    return [];
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    return [];
  }
};
