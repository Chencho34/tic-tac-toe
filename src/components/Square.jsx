import React from "react";

export default function Square({ children, isSelected, updateBoard, index }) {
  const className = `square ${isSelected ? "is-selecred" : ""}`;
  
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
}
