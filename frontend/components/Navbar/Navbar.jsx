import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Link from "next/link";

import Dropdown from "../Dropdown/Dropdown";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>Admin Panel</h1>
        </div>
        <div className={styles.menu}>
          <Link href="/admin/post/new-post" className={styles.navbarBtn}>
            <AddCircleOutlineIcon /> New Post
          </Link>

          <Dropdown />
        </div>
      </nav>
    </>
  );
}
