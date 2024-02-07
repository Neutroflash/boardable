// ColorPicker.jsx

import React, { useState } from "react";
import paletteUrl from "../../../public/assets/palette.svg";
import styles from "./styles.module.css";

const colors = [
  "#FFFFFF",
  "#F28B82",
  "#FBBC04",
  "#FFF475",
  "#CCFF90",
  "#A7FFEB",
  "#CBF0F8",
  "#AECBFA",
  "#D7AEFB",
  "#FDCFE8",
];

function ColorPicker({ name, onChange = () => {} }) {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  function handleClick(color) {
    setShowColors(false);
    setSelectedColor(color);
    onChange(color);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.colorPickerContainer}>
        <button
          className={styles["action-button"]}
          type="button"
          onClick={() => setShowColors(!showColors)}
          aria-label={name}
        >
          Color
        </button>
        {selectedColor && (
          <div
            className={styles.selectedColor}
            style={{ backgroundColor: selectedColor }}
          ></div>
        )}
        {showColors && (
          <div className={styles.colors}>
            {colors.map((color) => (
              <input
                key={color}
                type="button"
                className={styles.color}
                style={{ backgroundColor: color }}
                name={name}
                value={color}
                onClick={() => handleClick(color)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ColorPicker;
