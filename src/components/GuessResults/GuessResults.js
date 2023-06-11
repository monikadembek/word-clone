import React from "react";

function GuessResults({ results }) {

  return (
    <div className="guess-results">
      {results.map((result, index) => (
        <p className="guess" key={index}>{result}</p>
      ))}
    </div>
  );
}

export default GuessResults;
