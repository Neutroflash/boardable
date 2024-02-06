import * as React from "react";
import styles from "./Header.module.css";

import logo from "../../../public/assets/Vector.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.headerItems}>
        <a href="#">
          <img src={logo} alt="logo" />
          Boardable
        </a>
        <li>
          <button className={styles.myAccount}>My Account</button>
          <button className={styles.logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
