import { useState } from "react";
import { searchMovies } from "../api/tmdbApi";
import MovieList from "../components/MovieList";
import styles from "./MoviesPage.module.css";
export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      const results = await searchMovies(query);
      setMovies(results);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
          placeholder="Search for movies"
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      <div className={styles.movieListWrapper}>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
