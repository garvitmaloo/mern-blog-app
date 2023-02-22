import axios from "axios";
import EastIcon from "@mui/icons-material/East";
import { useRef } from "react";

import styles from "../../styles/Auth.module.css";
import { useRouter } from "next/router";

export default function ResetPassword() {
  const passwordRef = useRef();
  const router = useRouter();
  const token = router.query.reset;

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const newPassword = passwordRef.current.value;

    const { statusText } = await axios.post(
      `http://localhost:4000/api/admin/reset-password?token=${token}`,
      { newPassword },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (statusText === "OK") {
      router.replace("http://localhost:3000/admin/login");
    }
  };

  return (
    <>
      <div className="container">
        <form className={`p-4 ${styles.authForm}`} onSubmit={formSubmitHandler}>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter New Password"
            autoComplete="off"
            ref={passwordRef}
          />

          <button className="CTABtn mt-4 d-block mx-auto" type="submit">
            Update Password <EastIcon />
          </button>
        </form>
      </div>
    </>
  );
}
