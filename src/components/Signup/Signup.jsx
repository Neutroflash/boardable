import * as React from "react";
import styles from "./Signup.module.css";

import logo from "../../../public/assets/Vector.svg";
import arrow from "../../../public/assets/arrow-right.svg";

const Login = () => {
  return (
    <div className={styles.signup}>  
      <form action="" className={styles.signupForm}>
        <div className={styles.signupTop}>
            <img src={logo} alt="logo-menu" />
            <h1>Welcome to Boardable</h1>
        </div>
        <div className={styles.signupDisplay}>
          <div className={styles.signupInput}>
            <p>Username</p>
            <input type="text" required />
          </div>
          <div className={styles.signupInput}>
            <p>Password</p>
            <input type="password" required />
          </div>
          <button>Signup</button>
        </div>  
        <a href="#">Login to your account <img src={arrow} alt="arrow" /></a>
      </form>
    </div>
  );
};

export default Login;
