import Link from "next/link";
import Card from "../Cards/Card";
import styles from "./CardsGrid.module.css";

export default function CardsGrid({ isAdmin, posts }) {
  return (
    <div className={styles.cardsContainer}>
      {posts.map((post) => (
        <Link
          key={post._id}
          href={isAdmin ? `/admin/post/${post._id}` : `/post/${post._id}`}
        >
          <Card post={post} />
        </Link>
      ))}
    </div>
  );
}
