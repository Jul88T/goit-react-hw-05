import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY2MTA5OWY2M2RiNGY4N2U0NzM3YTRlODg1NDc3ZCIsIm5iZiI6MTc0Mjk0NTkwNS4xNzgsInN1YiI6IjY3ZTMzZTcxZDcwYzYxNTkwMzc1ZmQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tjbK-TFqzVoaanqeI_2KF_YptamDCGPNXEAtyXznsTk"; // Замінити на свій токен

const options = {
  headers: {
    Authorization: TOKEN,
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?query=${query}`,
    options
  );
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}`, options);
  return data;
};

export const fetchMovieCast = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits`, options);
  return data.cast;
};

export const fetchMovieReviews = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews`, options);
  return data.results;
};

export { IMAGE_BASE_URL };
