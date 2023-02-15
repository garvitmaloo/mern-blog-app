import EastIcon from "@mui/icons-material/East";
import { useRef } from "react";
import axios from "axios";

import styles from "../../styles/Auth.module.css";
import { useRouter } from "next/router";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const router = useRouter();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const { status } = await axios.post(
      "http://localhost:4000/api/admin",
      { email, password },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (status === 200) {
      router.replace("http://localhost:3000/admin/home");
    }
  };

  return (
    <>
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
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter Admin Password"
            autoComplete="off"
            ref={passwordRef}
          />

          <button className="CTABtn mt-4 d-block mx-auto" type="submit">
            Log In <EastIcon />
          </button>
        </form>
      </div>
    </>
  );
}
