import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
export default function NotFoundPage() {
  return (
    <div className={styles.pageWrapper}>
      <h1>404 - Page not found</h1>
      <Link to="/" className={styles.backLink}>
        Back to Home
      </Link>
    </div>
  );
}
