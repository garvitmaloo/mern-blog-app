import axios from "axios";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AdminContext } from "@project/context/admin-auth";

import styles from "../../../styles/PostDetails.module.css";

export default function AdminPostDetails({ data }) {
  const router = useRouter();

  const adminCtx = useContext(AdminContext);
  const isAdminAuth = adminCtx.admin.isAdmin;

  useEffect(() => {
    if (!isAdminAuth) {
      router.replace("http://localhost:3000/admin/login");
    }
  }, [isAdminAuth]);

  if (!isAdminAuth) {
    return null;
  }

  const postDetailsArray = data.postDetails.split("\r\n\r\n");

  const editPostHandler = async () => {
    router.push(
      `http://localhost:3000/admin/post/new-post?edit=true&id=${data._id}`
    );
  };

  const deletePostHandler = async () => {
    const { statusText } = await axios.delete(
      `http://localhost:4000/api/admin/post/${data._id}`
    );

    if (statusText === "No Content") {
      router.replace("http://localhost:3000/admin/home");
    }
  };

  return (
    <div className={`container py-4 px-0 ${styles.postContainer}`}>
      <Image src={data.postImageURL} alt="Banner" height={900} width={1600} />

      <h1 className={styles.postTitle}>{data.postTitle}</h1>

      <div className={` mb-5 ${styles.postActions}`}>
        <button onClick={editPostHandler}>
          <EditIcon />
          Edit Post
        </button>
        <button onClick={deletePostHandler}>
          <DeleteIcon />
          Delete Post
        </button>
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
