import { useRouter } from "next/router";
import Image from "next/image";

import styles from "../../styles/PostDetails.module.css";
import { latestPosts } from "../../DUMMY_DATA/latest";

export default function PostDetails() {
  const router = useRouter();

  return (
    <div className={`container py-4 px-0 ${styles.postContainer}`}>
      <Image
        src="/rough-image.png"
        alt="Banner"
        height={900}
        width={1600}
      ></Image>

      <h1 className={styles.postTitle}>{latestPosts[0].postTitle}</h1>

      <div className={` mb-5 ${styles.postData}`}>
        <span className={styles.data}>
          <i className="fa-solid fa-pen-nib me-2"></i>
          Written By - {latestPosts[0].postAuthor}
        </span>
        <span className={styles.data}>
          <i className="fa-solid fa-calendar-days me-2"></i>
          Published On - {latestPosts[0].postDate}
        </span>

        <span className={styles.data}>
          <i className="fa-solid fa-hourglass-start me-2"></i>
          Read Time - {latestPosts[0].postReadTime}
        </span>
        <span className={styles.data}>
          <i className="fa-solid fa-magnifying-glass me-2"></i>
          Category - {latestPosts[0].postCategory}
        </span>
      </div>

      <div className={styles.postText}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          porro commodi, perspiciatis ea atque ipsa voluptatibus, inventore
          consequatur impedit praesentium eos similique aliquam unde sint animi!
          Dolor aperiam ipsum molestias? Voluptates deleniti fuga ipsa velit
          exercitationem nihil vero adipisci a provident tenetur. Fugiat saepe
          dicta voluptatum quos ipsam? Tempora rem culpa suscipit reiciendis
          tenetur deleniti ullam repudiandae soluta harum possimus!
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quidem
          aspernatur nesciunt quia modi, eius molestias esse expedita. Ipsa,
          fugiat recusandae. Adipisci harum numquam voluptas cupiditate
          praesentium quis possimus temporibus?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          quasi. Molestiae earum tempore doloremque, ad dolore temporibus ipsam
          nam iure enim culpa perspiciatis sunt, unde maxime tempora quas.
          Facere, neque? Placeat explicabo accusantium magni necessitatibus
          corporis quidem laborum ea quam perspiciatis modi laboriosam culpa,
          voluptas nemo, aperiam quis facere praesentium! Possimus autem beatae
          accusamus facilis sint id, soluta nam vel? Recusandae, earum voluptate
          deleniti, odit possimus autem, reprehenderit adipisci officia mollitia
          voluptatum aperiam sunt nihil exercitationem eum at nisi sapiente?
          Molestias dolores, ratione provident maiores dolore quas veritatis
          quisquam rem?
        </p>
      </div>
    </div>
  );
}
