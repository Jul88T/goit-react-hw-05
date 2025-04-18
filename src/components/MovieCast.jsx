import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../api/tmdbApi";
import styles from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (cast.length === 0) {
    return <p>No cast info available.</p>;
  }

  return (
    <ul className={styles.castList}>
      {cast.map((actor) => (
        <li key={actor.id} className={styles.castItem}>
          <p className={styles.actorName}>{actor.name}</p>
          <p className={styles.character}>as {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}
