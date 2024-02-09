import * as React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Boards.module.css";
import more from "../../../public/assets/more-horizontal.svg";

const Boards = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const color = searchParams.get("color");
  const title = searchParams.get("title");

  const [showMenu, setShowMenu] = useState(false);
  const [newListTitle, setNewListTitle] = useState("");
  const [lists, setLists] = useState([]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleEdit = () => {
    console.log("Editar board");
  };

  const handleDelete = () => {
    console.log("Eliminar board");
  };

  const handleCreateList = (event) => {
    event.preventDefault();
    if (!newListTitle.trim()) return;

    const newList = {
      title: newListTitle,
    };
    setLists([...lists, newList]);
    setNewListTitle("");
  };

  const handleNewListTitleChange = (event) => {
    setNewListTitle(event.target.value);
  };

  return (
    <div className={styles.board} style={{ backgroundColor: color }}>
      <div className={styles.boardBox}>
        <div className={styles.boardItems}>
          <h1>{title}</h1>
          <button onClick={toggleMenu} className={styles.moreButton}>
            <img src={more} alt="more" />
          </button>
          {showMenu && (
            <div className={styles.dropdown}>
              <ul>
                <li onClick={handleEdit}>Editar</li>
                <li onClick={handleDelete}>Eliminar</li>
              </ul>
            </div>
          )}
        </div>
        <form onSubmit={handleCreateList} className={styles.form}>
          <input type="hidden" name="color" />
          <p>List Title</p>
          <input
            type="text"
            name="title"
            value={newListTitle}
            onChange={handleNewListTitleChange}
            className={styles.title}
            aria-label="title"
          />
          <div className={styles.footer}>
            <button type="submit" className={styles.button}>
              Create new list
            </button>
          </div>
        </form>
        <div className={styles.listsContainer}>
        {lists.map((list, index) => (
          <div key={index} className={styles.list}>
            <h2>{list.title}</h2>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Boards;
