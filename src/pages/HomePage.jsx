import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api/tmdbApi";
import MovieList from "../components/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
}
