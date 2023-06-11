import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  
  const cellsArray = Array(5).fill('');

  const validatedValue = checkGuess(value, answer);

  return (
    <p className="guess">
      {cellsArray.map((cell, index) => (
        <span 
          className={validatedValue ? `cell ${validatedValue[index].status}` : 'cell'} 
          key={index}
        >
          { value ? value[index] : cell }
        </span>
      ))}
    </p>
  );
}

export default Guess;
