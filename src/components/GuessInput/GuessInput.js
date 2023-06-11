import React from "react";

function GuessInput({ addNewGuess }) {

  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();    
    addNewGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">
        Enter guess:
      </label>
      <input 
        type="text" 
        id="guess-input" 
        required
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
