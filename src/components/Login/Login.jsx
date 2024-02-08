import * as React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

import logo from "../../../public/assets/Vector.svg"
import arrow from "../../../public/assets/arrow-right.svg"

const Login = () => {
  return (
    <div className={styles.login}>  
      <form action="" className={styles.loginForm}>
        <div className={styles.loginTop}>
            <img src={logo} alt="logo-menu" />
            <h1>Welcome to Boardable</h1>
        </div>
        <div className={styles.loginDisplay}>
          <div className={styles.loginInput}>
            <p>Username</p>
            <input type="text" required />
          </div>
          <div className={styles.loginInput}>
            <p>Password</p>
            <input type="password" required />
          </div>
          <button>Login</button>
        </div>  
        <Link to={"/signup"}>Create an account<img src={arrow} alt="arrow"/></Link>
      </form>
    </div>
  );
};

export default Login;
