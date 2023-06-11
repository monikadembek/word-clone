import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ results, answer }) {

  const rowsArray = Array(NUM_OF_GUESSES_ALLOWED).fill(undefined);

  return (
    <div className="guess-results">
      {rowsArray.map((row, index) => (
        <Guess key={index} value={results[index]} answer={answer}/>
      ))}
    </div>
  );
}

export default GuessResults;
