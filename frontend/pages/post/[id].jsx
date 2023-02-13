import CreateIcon from "@mui/icons-material/Create";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Image from "next/image";

import styles from "../../styles/PostDetails.module.css";

export default function PostDetails(props) {
  const { data } = props;

  const date = new Date(data.createdAt);
  const postDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} `;

  const category = data.postCategory.split("-").join(" ");

  const postDetailsArray = data.postDetails.split("\r\n\r\n");

  return (
    <div className={`container py-4 px-0 ${styles.postContainer}`}>
      <Image src={data.postImageURL} alt="Banner" height={900} width={1600} />

      <h1 className={styles.postTitle}>{data.postTitle}</h1>

      <div className={` mb-5 ${styles.postData}`}>
        <span className={styles.data}>
          <CreateIcon />
          Written By - {data.author}
        </span>
        <span className={styles.data}>
          <CalendarMonthIcon />
          Published On - {postDate}
        </span>

        <span className={styles.data}>
          <HourglassBottomIcon />
          Read Time - {`${data.readTime} min`}
        </span>
        <span className={styles.data}>
          <SearchIcon />
          Category - {category}
        </span>
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
    `http://localhost:4000/api/post/${params.id}`
  );

  return {
    props: { data },
  };
}
