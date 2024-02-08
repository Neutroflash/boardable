import * as React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ColorPicker from '../ColorPicker/index';
import styles from './Menu.module.css';

const Menu = () => {
  const [boardTitle, setBoardTitle] = useState('');
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
    setCards(storedCards);
    const storedColor = localStorage.getItem("boardColor") || "#FFFFFF";
    setSelectedColor(storedColor);
  }, []);

  const handleTitleChange = (event) => {
    setBoardTitle(event.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleCreateCard = (event) => {
    event.preventDefault();
    if (!boardTitle.trim()) return;

    const newCard = {
      title: boardTitle,
      color: selectedColor,
    };
    const updatedCards = [...cards, newCard];
    localStorage.setItem("cards", JSON.stringify(updatedCards));
    setCards(updatedCards);
    setBoardTitle("");
  };

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
      <div className={styles.cardsGroup}>
        <form onSubmit={handleCreateCard} className={styles.form}>
          <input type="hidden" name="color" value={selectedColor} />
          <p>Board Title</p>
          <input
            type="text"
            name="title"
            value={boardTitle}
            onChange={handleTitleChange}
            className={styles.title}
            aria-label="title"
          />
          <div className={styles.footer}>
            <ColorPicker onChange={handleColorChange} />
            <button type="submit" className={styles.button}>
              Create
            </button>
          </div>
        </form>
        <div className={styles.cardContainer}>
          {cards.map((card, index) => (
            <Link
              key={index}
              to={`/boards?color=${encodeURIComponent(card.color)}&title=${encodeURIComponent(card.title)}`}
              className={`${styles.card} ${styles.createdCard}`}
              style={{ backgroundColor: card.color }}
            >
              {card.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
