import {
  useParams,
  useLocation,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails, IMAGE_BASE_URL } from "../api/tmdbApi";
import styles from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const backLink = location.state?.from || "/movies";

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(backLink)} className={styles.backButton}>
        Go back
      </button>
      <h1 className={styles.title}>{movie.title}</h1>
      {movie.poster_path && (
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className={styles.poster}
        />
      )}
      <p className={styles.overview}>{movie.overview}</p>

      <div className={styles.links}>
        <Link to="cast" state={{ from: backLink }} className={styles.linkItem}>
          Cast
        </Link>
        <Link
          to="reviews"
          state={{ from: backLink }}
          className={styles.linkItem}
        >
          Reviews
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
