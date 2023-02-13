import styles from "./Card.module.css";
import Image from "next/image";

export default function Card({ post }) {
  return (
    <div className={styles.card}>
      <Image
        src={post.postImageURL}
        placeholder="empty"
        alt="Post Image"
        height={225}
        width={400}
      />
      <h4>{post.postTitle}</h4>
      <p>{post.postText}</p>
    </div>
  );
}
