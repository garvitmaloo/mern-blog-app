import Link from "next/link";
import Card from "../Cards/Card";
import styles from "./CardsGrid.module.css";
import { latestPosts } from "../../DUMMY_DATA/latest";

export default function CardsGrid() {
  return (
    <div className={styles.cardsContainer}>
      {latestPosts.map((post) => (
        <Link key={post.postId} href={`/post/${post.postId}`}>
          <Card post={post} />
        </Link>
      ))}
    </div>
  );
}
