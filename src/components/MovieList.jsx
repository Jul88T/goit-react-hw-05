import { Link, useLocation } from "react-router-dom";
import { IMAGE_BASE_URL } from "../api/tmdbApi";
import styles from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={styles.link}
          >
            {movie.poster_path && (
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className={styles.image}
              />
            )}
            <p className={styles.title}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
