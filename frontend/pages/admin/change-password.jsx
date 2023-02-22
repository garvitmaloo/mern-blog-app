import EastIcon from "@mui/icons-material/East";
import { useContext, useEffect, useRef } from "react";
import { AdminContext } from "@project/context/admin-auth";
import Router from "next/router";
import axios from "axios";

import styles from "../../styles/Auth.module.css";

export default function ChangePassword() {
  const adminCtx = useContext(AdminContext);
  const isAdminAuth = adminCtx.admin.isAdmin;

  const emailRef = useRef();

  useEffect(() => {
    if (!isAdminAuth) {
      Router.replace("http://localhost:3000/admin/login");
    }
  }, [isAdminAuth]);

  if (!isAdminAuth) {
    return null;
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;

    const response = await axios.post(
      "http://localhost:4000/api/admin/change-password",
      { email },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    console.log(response);
  };

  return (
    <div className="container">
      <form className={`p-4 ${styles.authForm}`} onSubmit={formSubmitHandler}>
        <input
          type="email"
          required
          placeholder="Enter Admin Email"
          name="email"
          autoComplete="off"
          ref={emailRef}
        />

        <button className="CTABtn mt-4 d-block mx-auto" type="submit">
          Send Confirmation Mail
          <EastIcon />
        </button>
      </form>
    </div>
  );
}
