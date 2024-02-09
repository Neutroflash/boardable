import * as React from "react";
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

import logo from "../../../public/assets/Vector.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.headerItems}>
        <Link to={"/menu"}>
          <img src={logo} alt="logo" />
          Boardable
        </Link>
        <li>
          <Link to={"/accounts"}>
            <button className={styles.myAccount}>My Account</button>
          </Link>
          <form method="POST" action="/logout">
            <button className={styles.logout}>Logout</button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default Header;
