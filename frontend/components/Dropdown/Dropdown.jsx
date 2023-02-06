import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { useState } from "react";

import styles from "./Dropdown.module.css";

export default function Dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownToggleHandler = () => {
    setShowDropdown((prevValue) => !prevValue);
  };

  return (
    <>
      <div className={styles.dropdown}>
        <button onClick={dropdownToggleHandler}>
          Profile <KeyboardArrowDownIcon />
        </button>
        <ul className={`${styles.dropdownMenu} ${showDropdown && styles.show}`}>
          <Link href="/admin/change-password">
            <li>Change Password</li>
          </Link>
          <Link href="#">
            <li>Sign Out</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
