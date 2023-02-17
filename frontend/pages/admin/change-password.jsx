import EastIcon from "@mui/icons-material/East";
import { useContext, useEffect } from "react";
import { AdminContext } from "@project/context/admin-auth";
import Router from "next/router";

import styles from "../../styles/Auth.module.css";

export default function ChangePassword() {
  const adminCtx = useContext(AdminContext);
  const isAdminAuth = adminCtx.admin.isAdmin;

  useEffect(() => {
    if (!isAdminAuth) {
      Router.replace("http://localhost:3000/admin/login");
    }
  }, [isAdminAuth]);

  if (!isAdminAuth) {
    return null;
  }

  return (
    <div className="container">
      <form className={`p-4 ${styles.authForm}`}>
        <input
          type="email"
          required
          placeholder="Enter Admin Email"
          name="email"
          autoComplete="off"
        />

        <button className="CTABtn mt-4 d-block mx-auto" type="submit">
          Send Confirmation Mail
          <EastIcon />
        </button>
      </form>
    </div>
  );
}
