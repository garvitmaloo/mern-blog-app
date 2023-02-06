import Link from "next/link";
import Card from "../Cards/Card";
import styles from "./CardsGrid.module.css";
import { latestPosts } from "../../DUMMY_DATA/latest";

export default function CardsGrid({ isAdmin }) {
  // const postLink = isAdmin
  //   ? `/admin/post/${post.postId}`
  //   : `/post/${post.postId}`;

  return (
    <div className={styles.cardsContainer}>
      {latestPosts.map((post) => (
        <Link
          key={post.postId}
          href={isAdmin ? `/admin/post/${post.postId}` : `/post/${post.postId}`}
        >
          <Card post={post} />
        </Link>
      ))}
    </div>
  );
}
