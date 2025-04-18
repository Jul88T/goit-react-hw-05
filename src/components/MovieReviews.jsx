import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../api/tmdbApi";
import styles from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>No reviews</p>;
  }

  return (
    <ul className={styles.reviewsList}>
      {reviews.map((review) => (
        <li key={review.id} className={styles.reviewItem}>
          <p className={styles.author}>{review.author}</p>
          <p className={styles.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
