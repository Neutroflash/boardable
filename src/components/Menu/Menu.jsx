import * as React from "react";
import ColorPicker from "../ColorPicker/index";
import styles from "./Menu.module.css";
import { Form, useNavigation, useOutletContext } from "react-router-dom";

const initialValues = {
  title: "",
  body: "",
  color: "#FFFFFF",
};

const Menu = () => {
  return (
    <div className={styles.menu}>
      <h1>My Boards</h1>
      <div>
        <p>Sort by</p>
        <select name="sort" className={styles.sortSelect}>
          <option value="date">Date</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <form method="POST" action="/" className={styles.form}>
        <input type="hidden" name="color" />
        <p>Board Title</p>
        <input
          type="text"
          name="title"
          className={styles.title}
          aria-label="title"
        />
        <div className={styles.footer}>
          <ColorPicker name="color" />
          <button type="submit" className={styles.button}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Menu;
