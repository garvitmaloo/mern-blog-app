import EastIcon from "@mui/icons-material/East";

import styles from "../../styles/Auth.module.css";

export default function Login() {
  return (
    <>
      <div className="container">
        <form className={`p-4 ${styles.authForm}`}>
          <input
            type="email"
            required
            placeholder="Enter Admin Email"
            name="email"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter Admin Password"
            autoComplete="off"
          />

          <button className="CTABtn mt-4 d-block mx-auto" type="submit">
            Log In <EastIcon />
          </button>
        </form>
      </div>
    </>
  );
}
