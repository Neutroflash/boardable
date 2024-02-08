import * as React from "react";
import { Link } from 'react-router-dom';
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
          <Link to={"/accounts"}>
            <button className={styles.myAccount}>My Account</button>
          </Link>
          <button className={styles.logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
