import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./pagination.module.css";

export default function PaginationButtons({ guide }) {
  const router = useRouter();

  const previousClickHandler = () => {
    router.replace(
      `http://localhost:3000/admin/home?page=${guide.previousPage}`
    );
  };

  const nextClickHandler = () => {
    router.replace(`http://localhost:3000/admin/home?page=${guide.nextPage}`);
  };

  return (
    <div className="my-5 d-flex justify-content-center gap-3">
      <button
        disabled={!guide.previousPage}
        className={styles.paginationBtn}
        onClick={previousClickHandler}
      >
        <WestIcon />
      </button>
      <button
        disabled={!guide.nextPage}
        className={styles.paginationBtn}
        onClick={nextClickHandler}
      >
        <EastIcon />
      </button>
    </div>
  );
}
