import EastIcon from "@mui/icons-material/East";

import styles from "../../styles/Auth.module.css";

export default function ChangePassword() {
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
