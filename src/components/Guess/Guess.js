import React from "react";

function Guess({ value }) {
  
  const cellsArray = Array(5).fill('');

  return (
    <p className="guess">
      {cellsArray.map((cell, index) => (
        <span className="cell" key={index}>
          { value ? value[index] : cell }
        </span>
      ))}
    </p>
  );
}

export default Guess;
