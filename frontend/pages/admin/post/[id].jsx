import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "../../../styles/PostDetails.module.css";

export default function AdminPostDetails({ data }) {
  const postDetailsArray = data.postDetails.split("\r\n\r\n");

  return (
    <div className={`container py-4 px-0 ${styles.postContainer}`}>
      <Image src={data.postImageURL} alt="Banner" height={900} width={1600} />

      <h1 className={styles.postTitle}>{data.postTitle}</h1>

      <div className={` mb-5 ${styles.postActions}`}>
        <Link href="#">
          <EditIcon />
          Edit Post
        </Link>
        <Link href="#">
          <DeleteIcon />
          Delete Post
        </Link>
      </div>

      <div className={styles.postText}>
        {postDetailsArray.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `http://localhost:4000/api/admin/post/${params.id}`
  );

  return {
    props: { data },
  };
}
