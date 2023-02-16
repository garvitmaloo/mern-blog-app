import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { useContext, useState } from "react";
import { AdminContext } from "@project/context/admin-auth";
import Router from "next/router";

import styles from "./Dropdown.module.css";

export default function Dropdown() {
  const adminCtx = useContext(AdminContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownToggleHandler = () => {
    setShowDropdown((prevValue) => !prevValue);
  };

  const signoutHandler = (e) => {
    e.preventDefault();

    adminCtx.adminLogout();
    Router.replace("http://localhost:3000/admin/login");
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
          <Link href="#" onClick={signoutHandler}>
            <li>Sign Out</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
